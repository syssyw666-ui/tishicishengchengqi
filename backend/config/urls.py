from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.http import JsonResponse
from django.urls import include, path
from rest_framework.routers import DefaultRouter

from content.views import (
    FeedbackViewSet, FeaturedPromptViewSet, ParameterOptionViewSet, PromptTemplateViewSet, SiteSettingsViewSet,
    catalog_image_source,
)


router = DefaultRouter()
router.register("catalog/parameters", ParameterOptionViewSet, basename="catalog-parameter")
router.register("catalog/featured-prompts", FeaturedPromptViewSet, basename="catalog-featured-prompt")
router.register("templates", PromptTemplateViewSet, basename="template")
router.register("feedback", FeedbackViewSet, basename="feedback")
router.register("site-settings", SiteSettingsViewSet, basename="site-settings")

urlpatterns = [
    path("admin/content/catalog-image-source/", catalog_image_source, name="catalog-image-source"),
    path("admin/", admin.site.urls),
    path("api/health/", lambda request: JsonResponse({"status": "ok"})),
    path("api/", include(router.urls)),
    path("api/auth/", include("djoser.urls")),
    path("api/auth/", include("djoser.urls.jwt")),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
