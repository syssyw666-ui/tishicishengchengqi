import json

from rest_framework import serializers

from .models import Feedback, FeaturedPrompt, ParameterOption, PromptTemplate, SiteSettings


class ParameterOptionSerializer(serializers.ModelSerializer):
    id = serializers.CharField(source="source_id")
    styleGroup = serializers.CharField(source="style_group", allow_blank=False)
    zhName = serializers.CharField(source="zh_name")
    enName = serializers.CharField(source="en_name")
    zhPrompt = serializers.CharField(source="zh_prompt")
    enPrompt = serializers.CharField(source="en_prompt")
    image = serializers.SerializerMethodField()

    class Meta:
        model = ParameterOption
        fields = ("id", "category", "styleGroup", "zhName", "enName", "image", "zhPrompt", "enPrompt", "negative")

    def get_image(self, obj):
        if obj.uploaded_image:
            return self.context["request"].build_absolute_uri(obj.uploaded_image.url)
        return obj.image


class FeaturedPromptSerializer(serializers.ModelSerializer):
    id = serializers.CharField(source="source_id")
    zhTitle = serializers.CharField(source="zh_title")
    enTitle = serializers.CharField(source="en_title")
    zhDescription = serializers.CharField(source="zh_description")
    enDescription = serializers.CharField(source="en_description")
    image = serializers.SerializerMethodField()
    originalImage = serializers.SerializerMethodField()
    resultImage = serializers.SerializerMethodField()

    class Meta:
        model = FeaturedPrompt
        fields = ("id", "category", "group", "zhTitle", "enTitle", "zhDescription", "enDescription", "prompt", "image", "originalImage", "resultImage")

    def _url(self, obj, upload_field, path_field):
        uploaded = getattr(obj, upload_field)
        return self.context["request"].build_absolute_uri(uploaded.url) if uploaded else getattr(obj, path_field)

    def get_image(self, obj):
        return self._url(obj, "uploaded_image", "image")

    def get_originalImage(self, obj):
        return self._url(obj, "uploaded_original_image", "original_image")

    def get_resultImage(self, obj):
        return self._url(obj, "uploaded_result_image", "result_image")


class PromptTemplateSerializer(serializers.ModelSerializer):
    preview_image_url = serializers.SerializerMethodField()

    class Meta:
        model = PromptTemplate
        fields = ("id", "name", "preview_image", "preview_image_url", "configuration", "prompt_zh", "prompt_en", "created_at", "updated_at")
        read_only_fields = ("id", "preview_image_url", "created_at", "updated_at")

    def get_preview_image_url(self, obj):
        if not obj.preview_image:
            return ""
        return self.context["request"].build_absolute_uri(obj.preview_image.url)

    def validate_configuration(self, value):
        if isinstance(value, str):
            try:
                value = json.loads(value)
            except json.JSONDecodeError as exc:
                raise serializers.ValidationError("模板配置格式不正确。") from exc
        if not isinstance(value, dict):
            raise serializers.ValidationError("模板配置必须是对象。")
        return value


class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = ("id", "content", "image", "created_at")
        read_only_fields = ("id", "created_at")

    def validate(self, attrs):
        if not attrs.get("content") and not attrs.get("image"):
            raise serializers.ValidationError("请填写建议内容或上传图片。")
        return attrs


class SiteSettingsSerializer(serializers.ModelSerializer):
    logo_url = serializers.SerializerMethodField()
    wechat_qr_url = serializers.SerializerMethodField()

    class Meta:
        model = SiteSettings
        fields = ("site_name", "slogan", "logo_url", "wechat_qr_url", "help_text", "updated_at")

    def _url(self, obj, field_name):
        image = getattr(obj, field_name)
        return self.context["request"].build_absolute_uri(image.url) if image else ""

    def get_logo_url(self, obj):
        return self._url(obj, "logo")

    def get_wechat_qr_url(self, obj):
        return self._url(obj, "wechat_qr")
