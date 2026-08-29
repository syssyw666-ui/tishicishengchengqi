from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    email = models.EmailField("邮箱", unique=True)
    avatar = models.ImageField("头像", upload_to="user-avatars/%Y/%m/", blank=True)

    class Meta:
        verbose_name = "用户"
        verbose_name_plural = "用户"
