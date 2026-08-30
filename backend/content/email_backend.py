import json
import time
from email.utils import parseaddr
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode
from urllib.request import Request, urlopen
from uuid import uuid4

from django.conf import settings
from django.core.mail.backends.base import BaseEmailBackend
from django.core.mail.backends.smtp import EmailBackend as SMTPEmailBackend
from django.db import OperationalError, ProgrammingError


def get_deployment_email_settings():
    try:
        from .models import DeploymentSettings

        row = DeploymentSettings.objects.order_by("pk").first()
        if row and row.smtp_enabled:
            return {
                "provider": row.email_provider,
                "brevo_api_key": row.get_brevo_api_key(),
                "brevo_sender_name": row.brevo_sender_name,
                "emailjs_service_id": row.emailjs_service_id,
                "emailjs_template_id": row.emailjs_template_id,
                "emailjs_public_key": row.emailjs_public_key,
                "emailjs_private_key": row.get_emailjs_private_key(),
                "host": row.smtp_host,
                "port": row.smtp_port,
                "username": row.smtp_username,
                "password": row.get_smtp_password(),
                "use_tls": row.smtp_use_tls,
                "use_ssl": row.smtp_use_ssl,
                "from_email": row.default_from_email or row.smtp_username,
                "feedback_email": row.feedback_notification_email,
            }
    except (OperationalError, ProgrammingError):
        pass
    return None


class DatabaseConfiguredEmailBackend(BaseEmailBackend):
    EMAILJS_USER_AGENT = "TuringCizao-Mailer/1.0"

    def send_messages(self, email_messages):
        if not email_messages:
            return 0
        runtime = get_deployment_email_settings()
        if runtime and runtime["from_email"]:
            for message in email_messages:
                if not message.from_email or message.from_email == settings.DEFAULT_FROM_EMAIL:
                    message.from_email = runtime["from_email"]
        if runtime and runtime["provider"] == "brevo":
            return self._send_with_brevo(email_messages, runtime)
        if runtime and runtime["provider"] == "emailjs":
            return self._send_with_emailjs(email_messages, runtime)
        return self._send_with_smtp(email_messages, runtime)

    def _send_with_smtp(self, email_messages, runtime):
        options = {"timeout": settings.EMAIL_TIMEOUT, "fail_silently": self.fail_silently}
        if runtime:
            options.update({
                "host": runtime["host"], "port": runtime["port"],
                "username": runtime["username"], "password": runtime["password"],
                "use_tls": runtime["use_tls"], "use_ssl": runtime["use_ssl"],
            })
        backend = SMTPEmailBackend(**options)
        return backend.send_messages(email_messages)

    def _send_with_brevo(self, email_messages, runtime):
        api_key = runtime.get("brevo_api_key")
        if not api_key:
            if self.fail_silently:
                return 0
            raise RuntimeError("尚未在后台部署配置中填写 Brevo API Key。")

        sent = 0
        for message in email_messages:
            try:
                payload = self._brevo_payload(message, runtime)
                request = Request(
                    "https://api.brevo.com/v3/smtp/email",
                    data=json.dumps(payload, ensure_ascii=False).encode("utf-8"),
                    headers={
                        "accept": "application/json",
                        "api-key": api_key,
                        "content-type": "application/json",
                    },
                    method="POST",
                )
                with urlopen(request, timeout=settings.EMAIL_TIMEOUT) as response:
                    if response.status not in (200, 201, 202):
                        raise RuntimeError(f"Brevo 邮件 API 返回状态 {response.status}。")
                sent += 1
            except (HTTPError, URLError, OSError, RuntimeError) as exc:
                if not self.fail_silently:
                    detail = getattr(exc, "reason", None) or str(exc)
                    raise RuntimeError(f"Brevo 邮件发送失败：{detail}") from exc
        return sent

    def _send_with_emailjs(self, email_messages, runtime):
        required = (
            runtime.get("emailjs_service_id"), runtime.get("emailjs_template_id"),
            runtime.get("emailjs_public_key"),
        )
        if not all(required):
            if self.fail_silently:
                return 0
            raise RuntimeError("尚未完整填写 EmailJS Service ID、Template ID 和 Public Key。")

        sent = 0
        for message in email_messages:
            delivery_id = uuid4().hex
            html_content = ""
            for alternative in getattr(message, "alternatives", ()):
                content = getattr(alternative, "content", alternative[0])
                mimetype = getattr(alternative, "mimetype", alternative[1])
                if mimetype == "text/html":
                    html_content = content
                    break
            payload = {
                "lib_version": "5.0.2",
                "service_id": runtime["emailjs_service_id"],
                "template_id": runtime["emailjs_template_id"],
                "user_id": runtime["emailjs_public_key"],
                "template_params": {
                    "to_email": ", ".join(message.to),
                    "subject": message.subject,
                    "message": message.body,
                    "html_content": html_content,
                    "from_name": runtime.get("brevo_sender_name") or "图灵词造",
                    "reply_to": message.reply_to[0] if message.reply_to else runtime.get("from_email", ""),
                    "delivery_id": delivery_id,
                },
            }
            if runtime.get("emailjs_private_key"):
                payload["accessToken"] = runtime["emailjs_private_key"]
            active_payload = payload
            used_default_service = False
            while True:
                try:
                    self._send_emailjs_payload(active_payload)
                    sent += 1
                    break
                except (HTTPError, URLError, OSError, RuntimeError) as exc:
                    detail = self._error_detail(exc)
                    if self._emailjs_service_not_found(detail) and not used_default_service:
                        active_payload = {**payload, "service_id": "default_service"}
                        used_default_service = True
                        time.sleep(1.1)
                        continue
                    if "1010" in detail and self._emailjs_history_confirms(delivery_id, runtime):
                        sent += 1
                        break
                    if self.fail_silently:
                        break
                    if "1010" in detail:
                        detail = (
                            "EmailJS 已接收请求，但其网络防护拦截了响应（错误 1010），"
                            "且发送记录中暂未确认本次投递。请稍后重试。"
                        )
                    elif self._emailjs_service_not_found(detail):
                        detail = (
                            "当前 Service ID 不存在，自动尝试默认服务也未成功。请在 EmailJS 的 "
                            "Email Services 页面确认至少有一个已连接且设为 Default 的服务，"
                            "再填写该服务卡片上显示的 Service ID。"
                        )
                    raise RuntimeError(f"EmailJS 邮件发送失败：{detail}") from exc
        return sent

    def _send_emailjs_payload(self, payload):
        request = Request(
            "https://api.emailjs.com/api/v1.0/email/send",
            data=json.dumps(payload, ensure_ascii=False).encode("utf-8"),
            headers={
                "accept": "text/plain, application/json",
                "content-type": "application/json",
                "user-agent": self.EMAILJS_USER_AGENT,
            },
            method="POST",
        )
        with urlopen(request, timeout=settings.EMAIL_TIMEOUT) as response:
            if response.status != 200:
                raise RuntimeError(f"EmailJS 邮件 API 返回状态 {response.status}。")

    @staticmethod
    def _emailjs_service_not_found(detail):
        return "service id not found" in detail.lower()

    def _emailjs_history_confirms(self, delivery_id, runtime):
        private_key = runtime.get("emailjs_private_key")
        if not private_key:
            return False
        query = urlencode({
            "user_id": runtime["emailjs_public_key"],
            "accessToken": private_key,
            "page": 1,
            "count": 10,
        })
        request = Request(
            f"https://api.emailjs.com/api/v1.1/history?{query}",
            headers={
                "accept": "application/json",
                "user-agent": self.EMAILJS_USER_AGENT,
            },
            method="GET",
        )
        for delay in (0.4, 0.8, 1.2):
            time.sleep(delay)
            try:
                with urlopen(request, timeout=settings.EMAIL_TIMEOUT) as response:
                    if response.status != 200:
                        continue
                    history = json.loads(response.read().decode("utf-8"))
                for row in history.get("rows", []):
                    if row.get("result") != 1 or row.get("template_id") != runtime["emailjs_template_id"]:
                        continue
                    params = row.get("template_params") or {}
                    if isinstance(params, str):
                        try:
                            params = json.loads(params)
                        except json.JSONDecodeError:
                            continue
                    if params.get("delivery_id") == delivery_id:
                        return True
            except (HTTPError, URLError, OSError, ValueError):
                continue
        return False

    @staticmethod
    def _error_detail(exc):
        if isinstance(exc, HTTPError):
            try:
                body = exc.read().decode("utf-8", errors="replace").strip()
                if body:
                    return body
            except OSError:
                pass
        return getattr(exc, "reason", None) or str(exc)

    @staticmethod
    def _brevo_payload(message, runtime):
        sender_name, sender_email = parseaddr(message.from_email or runtime["from_email"])
        payload = {
            "sender": {
                "name": sender_name or runtime.get("brevo_sender_name") or "图灵词造",
                "email": sender_email or runtime["from_email"],
            },
            "to": [{"email": address} for address in message.to],
            "subject": message.subject,
            "textContent": message.body,
        }
        if message.cc:
            payload["cc"] = [{"email": address} for address in message.cc]
        if message.bcc:
            payload["bcc"] = [{"email": address} for address in message.bcc]
        if message.reply_to:
            payload["replyTo"] = {"email": message.reply_to[0]}
        for alternative in getattr(message, "alternatives", ()):
            content = getattr(alternative, "content", alternative[0])
            mimetype = getattr(alternative, "mimetype", alternative[1])
            if mimetype == "text/html":
                payload["htmlContent"] = content
                break
        return payload
