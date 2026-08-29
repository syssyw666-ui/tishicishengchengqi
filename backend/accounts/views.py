import logging

from django.db import transaction
from djoser.views import UserViewSet
from rest_framework.exceptions import APIException


logger = logging.getLogger(__name__)


class ActivationEmailUnavailable(APIException):
    status_code = 503
    default_detail = "激活邮件暂时发送失败，账号尚未创建，请稍后重新注册。"
    default_code = "activation_email_unavailable"


class ReliableUserViewSet(UserViewSet):
    def create(self, request, *args, **kwargs):
        try:
            with transaction.atomic():
                return super().create(request, *args, **kwargs)
        except APIException:
            raise
        except Exception as exc:
            logger.exception("注册激活邮件发送失败")
            raise ActivationEmailUnavailable() from exc
