from django.contrib.auth import get_user_model
from djoser.serializers import (
    UserCreatePasswordRetypeSerializer,
    UserSerializer as DjoserUserSerializer,
)
from rest_framework import serializers


User = get_user_model()


class UserCreateSerializer(UserCreatePasswordRetypeSerializer):
    email = serializers.EmailField()

    def validate_email(self, value):
        normalized_email = value.strip().lower()
        if User.objects.filter(email__iexact=normalized_email).exists():
            raise serializers.ValidationError("该邮箱已注册，请直接登录或使用其他邮箱。")
        return normalized_email

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
