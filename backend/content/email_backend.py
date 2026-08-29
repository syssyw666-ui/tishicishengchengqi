import json
from email.utils import parseaddr
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen

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
