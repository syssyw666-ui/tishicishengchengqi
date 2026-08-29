import logging
import mimetypes
from pathlib import Path
from urllib.parse import urlsplit

from django.conf import settings
from django.contrib.admin.views.decorators import staff_member_required
from django.core.mail import send_mail
from django.http import FileResponse, Http404
from django.utils.decorators import method_decorator
from django.views.decorators.cache import never_cache
from django.urls import reverse
from rest_framework import mixins, permissions, viewsets

from .models import Feedback, FeaturedPrompt, ParameterOption, PromptTemplate, SiteSettings
from .catalog_labels import catalog_ordering
from .serializers import FeedbackSerializer, FeaturedPromptSerializer, ParameterOptionSerializer, PromptTemplateSerializer, SiteSettingsSerializer


logger = logging.getLogger(__name__)


@staff_member_required
def catalog_image_source(request):
    requested_path = urlsplit(request.GET.get("path", "")).path
    if not requested_path.startswith("/assets/"):
        raise Http404("图片路径无效")
    public_root = settings.BASE_DIR.parent / "public"
    asset_root = (public_root / "assets").resolve()
    target = (public_root / requested_path.lstrip("/")).resolve()
    if asset_root not in target.parents or not target.is_file():
        raise Http404("图片不存在")
    content_type = mimetypes.guess_type(target.name)[0] or "application/octet-stream"
    return FileResponse(target.open("rb"), content_type=content_type)


@method_decorator(never_cache, name="dispatch")
class ParameterOptionViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ParameterOption.objects.filter(enabled=True).order_by(*catalog_ordering())
    serializer_class = ParameterOptionSerializer
    pagination_class = None


@method_decorator(never_cache, name="dispatch")
class FeaturedPromptViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = FeaturedPrompt.objects.filter(enabled=True).order_by(*catalog_ordering(featured=True))
    serializer_class = FeaturedPromptSerializer
    pagination_class = None


class PromptTemplateViewSet(viewsets.ModelViewSet):
    serializer_class = PromptTemplateSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        return PromptTemplate.objects.filter(owner=self.request.user)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class SiteSettingsViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    serializer_class = SiteSettingsSerializer
    permission_classes = (permissions.AllowAny,)
    pagination_class = None

    def get_queryset(self):
        return SiteSettings.objects.order_by("pk")[:1]


class FeedbackViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, viewsets.GenericViewSet):
    serializer_class = FeedbackSerializer

    def get_queryset(self):
        if self.request.user.is_staff:
            return Feedback.objects.all()
        return Feedback.objects.none()

    def get_permissions(self):
        if self.action == "list":
            return (permissions.IsAdminUser(),)
        return (permissions.AllowAny(),)

    def perform_create(self, serializer):
        user = self.request.user if self.request.user.is_authenticated else None
        feedback = serializer.save(user=user)
        sender = user.username if user else "匿名用户"
        attachment_note = "有" if feedback.image else "无"
        admin_url = self.request.build_absolute_uri(reverse("admin:content_feedback_change", args=(feedback.pk,)))
        try:
            send_mail(
                subject=f"[图片提示词生成器] 新意见建议 #{feedback.pk}",
                message=(
                    f"提交用户：{sender}\n"
                    f"提交时间：{feedback.created_at:%Y-%m-%d %H:%M:%S}\n"
                    f"图片附件：{attachment_note}\n\n"
                    f"建议内容：\n{feedback.content or '（仅提交了图片）'}\n\n"
                    f"后台查看：{admin_url}"
                ),
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.FEEDBACK_NOTIFICATION_EMAIL],
                fail_silently=False,
            )
        except Exception:
            logger.exception("意见建议 #%s 的管理员通知邮件发送失败", feedback.pk)
