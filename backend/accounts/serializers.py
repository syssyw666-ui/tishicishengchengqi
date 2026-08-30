from django.contrib.auth import get_user_model
from djoser.serializers import (
    UserCreatePasswordRetypeSerializer,
    UserSerializer as DjoserUserSerializer,
)
from rest_framework import serializers


User = get_user_model()


class UserCreateSerializer(UserCreatePasswordRetypeSerializer):
    email = serializers.EmailField()
    default_error_messages = {
        **UserCreatePasswordRetypeSerializer.default_error_messages,
        "password_mismatch": "两次输入的密码不一致。",
    }

    password_error_messages = {
        "password_too_short": "密码至少需要 10 个字符。",
        "password_too_common": "这个密码过于常见，请换一个更独特的密码。",
        "password_entirely_numeric": "密码不能全部由数字组成。",
        "password_too_similar": "密码与用户名或邮箱过于相似。",
    }

    def validate_email(self, value):
        normalized_email = value.strip().lower()
        if User.objects.filter(email__iexact=normalized_email).exists():
            raise serializers.ValidationError("该邮箱已注册，请直接登录或使用其他邮箱。")
        return normalized_email

    def validate(self, attrs):
        try:
            return super().validate(attrs)
        except serializers.ValidationError as exc:
            details = exc.detail
            if isinstance(details, dict) and "password" in details:
                translated = []
                for item in details["password"]:
                    translated.append(self.password_error_messages.get(item.code, str(item)))
                raise serializers.ValidationError({"password": translated}) from exc
            raise

    class Meta(UserCreatePasswordRetypeSerializer.Meta):
        model = User
        fields = ("id", "username", "email", "password")


class UserSerializer(DjoserUserSerializer):
    avatar_url = serializers.SerializerMethodField()

    class Meta(DjoserUserSerializer.Meta):
        fields = ("id", "username", "email", "avatar", "avatar_url", "is_active", "date_joined")
        read_only_fields = ("id", "is_active", "date_joined")

    def get_avatar_url(self, obj):
        if not obj.avatar:
            return ""
        request = self.context.get("request")
        return request.build_absolute_uri(obj.avatar.url) if request else obj.avatar.url
