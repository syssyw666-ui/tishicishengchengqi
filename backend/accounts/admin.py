from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import User


@admin.register(User)
class PromptUserAdmin(UserAdmin):
    list_display = ("username", "email", "is_active", "is_staff", "date_joined")
    list_filter = ("is_active", "is_staff", "date_joined")
    search_fields = ("username", "email")
    add_fieldsets = UserAdmin.add_fieldsets + (("账号信息", {"fields": ("email",)}),)
    fieldsets = UserAdmin.fieldsets + (("个人资料", {"fields": ("avatar",)}),)
