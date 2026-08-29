from django.conf import settings
from django.core.mail.backends.smtp import EmailBackend as SMTPEmailBackend
from django.db import OperationalError, ProgrammingError


def get_deployment_email_settings():
    try:
        from .models import DeploymentSettings

        row = DeploymentSettings.objects.order_by("pk").first()
        if row and row.smtp_enabled:
            return {
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


class DatabaseConfiguredEmailBackend(SMTPEmailBackend):
    def __init__(self, *args, **kwargs):
        runtime = get_deployment_email_settings()
        if runtime:
            kwargs.update({
                "host": runtime["host"],
                "port": runtime["port"],
                "username": runtime["username"],
                "password": runtime["password"],
                "use_tls": runtime["use_tls"],
                "use_ssl": runtime["use_ssl"],
                "timeout": settings.EMAIL_TIMEOUT,
            })
        super().__init__(*args, **kwargs)

    def send_messages(self, email_messages):
        runtime = get_deployment_email_settings()
        if runtime and runtime["from_email"]:
            for message in email_messages:
                if not message.from_email or message.from_email == settings.DEFAULT_FROM_EMAIL:
                    message.from_email = runtime["from_email"]
        return super().send_messages(email_messages)
