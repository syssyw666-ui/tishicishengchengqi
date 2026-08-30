import json
import os
from types import MethodType
from urllib.parse import quote

from django import forms
from django.conf import settings
from django.contrib import admin, messages
from django.core.mail import send_mail
from django.db import transaction
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.utils.html import format_html
from django.utils.safestring import mark_safe

from .catalog_labels import (
    catalog_labels, catalog_ordering, category_choices, category_label, group_choices, group_label,
)
from .models import DeploymentSettings, Feedback, FeaturedPrompt, ParameterOption, PromptTemplate, SiteSettings


EMAILJS_SETUP_GUIDE = mark_safe("""
<div class="provider-setup-guide">
  <strong>个人创作者配置流程</strong>
  <ol>
    <li><a href="https://dashboard.emailjs.com/sign-up" target="_blank" rel="noopener">注册 EmailJS 个人账号</a>，不需要公司或自有域名。</li>
    <li>进入 <a href="https://dashboard.emailjs.com/admin" target="_blank" rel="noopener">Email Services</a>，连接 Gmail、Outlook 等个人邮箱，通过服务测试，并将它设为 <strong>Default</strong>。</li>
    <li>进入 Email Templates 新建模板：To Email=<code>{{to_email}}</code>，Subject=<code>{{subject}}</code>，Content=<code>{{message}}</code>，From Name=<code>{{from_name}}</code>，Reply To=<code>{{reply_to}}</code>。</li>
    <li>进入 Account 获取 Public Key；打开 <strong>Account → Security</strong>，必须启用 <strong>Allow EmailJS API for non-browser applications</strong>。</li>
    <li>若启用了 Use Private Key，请把同页 Private Key 填到下方；Service ID 必须复制服务卡片上的 ID（不要填写服务名称、邮箱或 Template ID）。只有一个默认服务时也可以填写 <code>default_service</code>。</li>
    <li>保存本页，再点击“保存并发送测试邮件”。测试邮件发送到当前管理员账号的邮箱；后端会在异常响应时自动核对 EmailJS 发送记录，避免邮件已送达却误报失败。</li>
  </ol>
</div>
""")

BREVO_SETUP_GUIDE = mark_safe("""
<div class="provider-setup-guide">
  <strong>Brevo 配置流程</strong>
  <ol>
    <li><a href="https://onboarding.brevo.com/" target="_blank" rel="noopener">注册 Brevo</a>。</li>
    <li>在 Settings → Senders, Domains, IPs → Senders 添加发件邮箱，并完成验证码验证。</li>
    <li>在 Settings → SMTP & API → API Keys & MCP 创建 API Key，只会完整显示一次。</li>
    <li>把 API Key 填到下方，默认发件邮箱必须与已验证发件人一致，然后保存并发送测试邮件。</li>
  </ol>
</div>
""")

SMTP_SETUP_GUIDE = mark_safe("""
<div class="provider-setup-guide">
  <strong>SMTP 配置流程</strong>
  <ol>
    <li>仅适用于 Railway Pro 及以上套餐，免费、试用和 Hobby 套餐会直接拦截 SMTP。</li>
    <li>在邮箱后台开启 SMTP 服务并生成独立授权码，不要填写邮箱登录密码。</li>
    <li>163 邮箱通常填写 smtp.163.com、端口 465、启用 SSL、关闭 TLS。</li>
    <li>填写发件邮箱与授权码，保存后发送测试邮件；升级 Railway 套餐后需要重新部署服务。</li>
  </ol>
</div>
""")


def _effective_path(obj, uploaded_field, bundled_field):
    uploaded = getattr(obj, uploaded_field)
    return uploaded.name if uploaded else getattr(obj, bundled_field)


def _effective_url(obj, uploaded_field, bundled_field):
    uploaded = getattr(obj, uploaded_field)
    if uploaded:
        return uploaded.url
    path = getattr(obj, bundled_field)
    if not path:
        return ""
    if path.startswith(("http://", "https://", "data:")):
        return path
    return f"{settings.FRONTEND_URL.rstrip('/')}/{path.lstrip('/')}"


def _preview(url, label, compact=False):
    if not url:
        return "暂无图片"
    size_class = " compact" if compact else ""
    return format_html(
        '<span class="catalog-preview{}"><img src="{}" alt="{}" loading="lazy" decoding="async">'
        '<span class="catalog-preview-zoom"><img src="{}" alt="{}" loading="lazy" decoding="async"></span></span>',
        size_class, url, label, url, label,
    )


class CatalogImageUploadWidget(forms.ClearableFileInput):
    current_url = ""
    current_path = ""
    preview_label = "图片"

    def __init__(self, attrs=None, *, crop_ratio="16:9", crop_context="图片展示框"):
        super().__init__(attrs)
        self.crop_ratio = crop_ratio
        self.crop_context = crop_context

    def render(self, name, value, attrs=None, renderer=None):
        upload_input = super().render(name, value, attrs, renderer)
        preview = _preview(self.current_url, self.preview_label) if self.current_url else "暂无图片"
        path = self.current_path or "保存后生成上传路径"
        crop_source = self.current_url
        if self.current_path.startswith("/assets/"):
            crop_source = f"/admin/content/catalog-image-source/?path={quote(self.current_path, safe='')}"
        return format_html(
            '<div class="catalog-image-field"><div class="catalog-image-current">{}'
            '<div><strong>当前图片</strong><code>{}</code></div></div>'
            '<div class="catalog-image-upload"><strong>上传替换图片</strong>{}'
            '<div class="catalog-crop-controls" data-crop-ratio="{}" data-crop-context="{}" data-current-url="{}">'
            '<strong class="catalog-crop-title">自动裁剪（必选）</strong>'
            '<span class="catalog-crop-hint">适配{} · {}</span>'
            '<button type="button" class="button catalog-crop-open" disabled>调整裁剪</button>'
            '</div></div></div>',
            preview, path, upload_input, self.crop_ratio, self.crop_context, crop_source,
            self.crop_context, self.crop_ratio,
        )


class ParameterOptionAdminForm(forms.ModelForm):
    category = forms.ChoiceField(label="分类", choices=category_choices())
    style_group = forms.ChoiceField(label="子分类", required=True)
    image_file = forms.ImageField(
        label="图片路径",
        required=False,
        widget=CatalogImageUploadWidget(crop_context="参数卡片"),
        help_text="当前图片会保留；选择新文件并保存后即完成替换。",
    )

    class Meta:
        model = ParameterOption
        exclude = ("image", "uploaded_image")

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        category = self.data.get("category") or getattr(self.instance, "category", "")
        current_group = self.data.get("style_group") or getattr(self.instance, "style_group", "")
        self.fields["style_group"].choices = group_choices(category, current=current_group)
        self.fields["style_group"].widget.attrs["data-group-options"] = json.dumps(
            catalog_labels()[1], ensure_ascii=False
        )
        widget = self.fields["image_file"].widget
        widget.current_path = _effective_path(self.instance, "uploaded_image", "image") if self.instance.pk else ""
        widget.current_url = _effective_url(self.instance, "uploaded_image", "image") if self.instance.pk else ""
        widget.preview_label = getattr(self.instance, "zh_name", "参数图片") or "参数图片"

    def save(self, commit=True):
        instance = super().save(commit=False)
        if self.cleaned_data.get("image_file"):
            instance.uploaded_image = self.cleaned_data["image_file"]
        if commit:
            instance.save()
            self.save_m2m()
        return instance


class FeaturedPromptAdminForm(forms.ModelForm):
    category = forms.ChoiceField(label="分类", choices=category_choices(featured=True))
    group = forms.ChoiceField(label="子分类", required=True)
    image_file = forms.ImageField(
        label="展示图片路径", required=False,
        widget=CatalogImageUploadWidget(crop_context="文生图展示卡片"),
        help_text="用于文生图卡片。",
    )
    original_image_file = forms.ImageField(
        label="原图路径", required=False,
        widget=CatalogImageUploadWidget(crop_context="原图对比卡片"),
        help_text="用于调色修图和图生图的原图。",
    )
    result_image_file = forms.ImageField(
        label="效果图路径", required=False,
        widget=CatalogImageUploadWidget(crop_context="效果图对比卡片"),
        help_text="用于调色修图和图生图的处理结果。",
    )

    class Meta:
        model = FeaturedPrompt
        exclude = (
            "image", "uploaded_image", "original_image", "uploaded_original_image",
            "result_image", "uploaded_result_image",
        )

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        category = self.data.get("category") or getattr(self.instance, "category", "")
        current_group = self.data.get("group") or getattr(self.instance, "group", "")
        self.fields["group"].choices = group_choices(category, featured=True, current=current_group)
        self.fields["group"].widget.attrs["data-group-options"] = json.dumps(
            catalog_labels()[3], ensure_ascii=False
        )
        path_fields = (
            ("image_file", "uploaded_image", "image", "展示图"),
            ("original_image_file", "uploaded_original_image", "original_image", "原图"),
            ("result_image_file", "uploaded_result_image", "result_image", "效果图"),
        )
        for form_field, uploaded_field, bundled_field, label in path_fields:
            widget = self.fields[form_field].widget
            widget.current_path = _effective_path(self.instance, uploaded_field, bundled_field) if self.instance.pk else ""
            widget.current_url = _effective_url(self.instance, uploaded_field, bundled_field) if self.instance.pk else ""
            widget.preview_label = label

    def save(self, commit=True):
        instance = super().save(commit=False)
        replacements = (
            ("image_file", "uploaded_image"),
            ("original_image_file", "uploaded_original_image"),
            ("result_image_file", "uploaded_result_image"),
        )
        for form_field, model_field in replacements:
            if self.cleaned_data.get(form_field):
                setattr(instance, model_field, self.cleaned_data[form_field])
        if commit:
            instance.save()
            self.save_m2m()
        return instance


class DeploymentSettingsAdminForm(forms.ModelForm):
    emailjs_private_key = forms.CharField(
        label="EmailJS Private Key",
        required=False,
        widget=forms.PasswordInput(render_value=False, attrs={"autocomplete": "new-password"}),
        help_text="建议服务端发送时填写。留空会保留现有 Key；Key 会加密保存且不会回显。",
    )
    brevo_api_key = forms.CharField(
        label="Brevo API Key",
        required=False,
        widget=forms.PasswordInput(render_value=False, attrs={"autocomplete": "new-password"}),
        help_text="留空表示保留当前 Key。Key 会加密保存，不会在页面中回显。",
    )
    smtp_password = forms.CharField(
        label="SMTP 授权码",
        required=False,
        widget=forms.PasswordInput(render_value=False, attrs={"autocomplete": "new-password"}),
        help_text="留空表示保留当前授权码。授权码会使用 Django 密钥加密后保存，不会在页面中回显。",
    )

    class Meta:
        model = DeploymentSettings
        exclude = (
            "smtp_password_encrypted", "brevo_api_key_encrypted", "emailjs_private_key_encrypted",
        )

    def clean(self):
        cleaned = super().clean()
        provider = cleaned.get("email_provider")
        if provider == "smtp" and cleaned.get("smtp_use_ssl") and cleaned.get("smtp_use_tls"):
            raise forms.ValidationError("SSL 与 TLS 不能同时启用。163 邮箱使用 465 端口时请选择 SSL。")
        if cleaned.get("smtp_enabled"):
            if not cleaned.get("default_from_email"):
                raise forms.ValidationError("启用邮件发送前，请填写默认发件邮箱。")
            if provider == "brevo":
                if not cleaned.get("brevo_api_key") and not self.instance.has_brevo_api_key:
                    raise forms.ValidationError("首次使用 Brevo 邮件 API 时必须填写 API Key。")
            elif provider == "emailjs":
                required = ("emailjs_service_id", "emailjs_template_id", "emailjs_public_key")
                if any(not cleaned.get(field) for field in required):
                    raise forms.ValidationError("使用 EmailJS 前，请完整填写 Service ID、Template ID 和 Public Key。")
            else:
                required = ("smtp_host", "smtp_port", "smtp_username")
                if any(not cleaned.get(field) for field in required):
                    raise forms.ValidationError("启用 SMTP 前，请完整填写服务器、端口和发件邮箱。")
                if not cleaned.get("smtp_password") and not self.instance.has_smtp_password:
                    raise forms.ValidationError("首次启用 SMTP 时必须填写授权码。")
        return cleaned

    def save(self, commit=True):
        instance = super().save(commit=False)
        instance.set_emailjs_private_key(self.cleaned_data.get("emailjs_private_key"))
        instance.set_brevo_api_key(self.cleaned_data.get("brevo_api_key"))
        instance.set_smtp_password(self.cleaned_data.get("smtp_password"))
        if commit:
            instance.save()
        return instance


class ParameterCategoryFilter(admin.SimpleListFilter):
    title = "分类"
    parameter_name = "category_cn"

    def lookups(self, request, model_admin):
        values = model_admin.model.objects.order_by().values_list("category", flat=True).distinct()
        return [(value, category_label(value)) for value in values]

    def queryset(self, request, queryset):
        return queryset.filter(category=self.value()) if self.value() else queryset


class ParameterGroupFilter(admin.SimpleListFilter):
    title = "子分类"
    parameter_name = "group_cn"

    def lookups(self, request, model_admin):
        pairs = model_admin.model.objects.order_by().values_list("category", "style_group").distinct()
        return [
            (f"{category}|{group}", f"{category_label(category)} / {group_label(category, group)}")
            for category, group in pairs if group
        ]

    def queryset(self, request, queryset):
        if not self.value():
            return queryset
        category, group = self.value().split("|", 1)
        return queryset.filter(category=category, style_group=group)


class FeaturedCategoryFilter(ParameterCategoryFilter):
    parameter_name = "featured_category_cn"

    def lookups(self, request, model_admin):
        values = model_admin.model.objects.order_by().values_list("category", flat=True).distinct()
        return [(value, category_label(value, featured=True)) for value in values]


class FeaturedGroupFilter(admin.SimpleListFilter):
    title = "子分类"
    parameter_name = "featured_group_cn"

    def lookups(self, request, model_admin):
        pairs = model_admin.model.objects.order_by().values_list("category", "group").distinct()
        return [
            (
                f"{category}|{group}",
                f"{category_label(category, featured=True)} / {group_label(category, group, featured=True)}",
            )
            for category, group in pairs if group
        ]

    def queryset(self, request, queryset):
        if not self.value():
            return queryset
        category, group = self.value().split("|", 1)
        return queryset.filter(category=category, group=group)


class CatalogAdminMixin:
    scope_group_field = ""
    featured_catalog = False

    class Media:
        css = {"all": ("content/admin.css",)}
        js = ("content/catalog_admin.js",)

    def get_ordering(self, request):
        return catalog_ordering(featured=self.featured_catalog)

    def _scope(self, obj):
        return {"category": obj.category, self.scope_group_field: getattr(obj, self.scope_group_field)}

    def _normalize_scope(self, scope, target_id=None, desired_order=0):
        queryset = self.model.objects.filter(**scope)
        siblings = list(queryset.exclude(pk=target_id).order_by("order", "id"))
        if target_id:
            target = self.model.objects.get(pk=target_id)
            position = len(siblings) if desired_order <= 0 else min(desired_order - 1, len(siblings))
            siblings.insert(position, target)
        updates = []
        for index, item in enumerate(siblings, start=1):
            if item.order != index:
                item.order = index
                updates.append(item)
        if updates:
            self.model.objects.bulk_update(updates, ("order",))

    @transaction.atomic
    def save_model(self, request, obj, form, change):
        old_scope = None
        if change:
            previous = self.model.objects.get(pk=obj.pk)
            old_scope = self._scope(previous)
        desired_order = obj.order
        super().save_model(request, obj, form, change)
        new_scope = self._scope(obj)
        self._normalize_scope(new_scope, obj.pk, desired_order)
        if old_scope and old_scope != new_scope:
            self._normalize_scope(old_scope)
        obj.refresh_from_db(fields=("order",))

    @transaction.atomic
    def delete_model(self, request, obj):
        scope = self._scope(obj)
        super().delete_model(request, obj)
        self._normalize_scope(scope)

    @transaction.atomic
    def delete_queryset(self, request, queryset):
        scopes = {tuple(self._scope(obj).items()) for obj in queryset}
        super().delete_queryset(request, queryset)
        for scope in scopes:
            self._normalize_scope(dict(scope))


@admin.register(ParameterOption)
class ParameterOptionAdmin(CatalogAdminMixin, admin.ModelAdmin):
    scope_group_field = "style_group"
    form = ParameterOptionAdminForm
    list_display = ("zh_name", "en_name", "category_cn", "group_cn", "thumbnail", "enabled", "order", "updated_at")
    list_filter = ("enabled", ParameterCategoryFilter, ParameterGroupFilter)
    search_fields = ("source_id", "zh_name", "en_name", "zh_prompt", "en_prompt")
    list_editable = ("enabled", "order")
    readonly_fields = ("source_id_display", "updated_at")
    list_per_page = 24
    list_max_show_all = 48
    show_full_result_count = False
    fields = (
        "source_id_display", "category", "style_group", "zh_name", "en_name", "image_file",
        "zh_prompt", "en_prompt", "negative", "enabled", "order", "updated_at",
    )

    @admin.display(description="项目 ID")
    def source_id_display(self, obj):
        return obj.source_id if obj and obj.source_id else "保存后自动生成"

    @admin.display(description="分类", ordering="category")
    def category_cn(self, obj):
        return category_label(obj.category)

    @admin.display(description="子分类", ordering="style_group")
    def group_cn(self, obj):
        return group_label(obj.category, obj.style_group)

    @admin.display(description="预览")
    def thumbnail(self, obj):
        return _preview(_effective_url(obj, "uploaded_image", "image"), obj.zh_name, compact=True)

@admin.register(FeaturedPrompt)
class FeaturedPromptAdmin(CatalogAdminMixin, admin.ModelAdmin):
    scope_group_field = "group"
    featured_catalog = True
    form = FeaturedPromptAdminForm
    list_display = ("zh_title", "category_cn", "group_cn", "thumbnail", "enabled", "order", "updated_at")
    list_filter = ("enabled", FeaturedCategoryFilter, FeaturedGroupFilter)
    search_fields = ("source_id", "zh_title", "en_title", "prompt")
    list_editable = ("enabled", "order")
    readonly_fields = ("source_id_display", "updated_at")
    list_per_page = 24
    list_max_show_all = 48
    show_full_result_count = False
    fields = (
        "source_id_display", "category", "group", "zh_title", "en_title", "zh_description", "en_description", "prompt",
        "image_file", "original_image_file", "result_image_file", "enabled", "order", "updated_at",
    )

    class Media:
        css = {"all": ("content/admin.css",)}
        js = ("content/catalog_admin.js",)

    @admin.display(description="项目 ID")
    def source_id_display(self, obj):
        return obj.source_id if obj and obj.source_id else "保存后自动生成"

    @admin.display(description="分类", ordering="category")
    def category_cn(self, obj):
        return category_label(obj.category, featured=True)

    @admin.display(description="子分类", ordering="group")
    def group_cn(self, obj):
        return group_label(obj.category, obj.group, featured=True)

    @admin.display(description="预览")
    def thumbnail(self, obj):
        url = (
            _effective_url(obj, "uploaded_result_image", "result_image")
            or _effective_url(obj, "uploaded_image", "image")
            or _effective_url(obj, "uploaded_original_image", "original_image")
        )
        return _preview(url, obj.zh_title, compact=True)

@admin.register(PromptTemplate)
class PromptTemplateAdmin(admin.ModelAdmin):
    list_display = ("name", "owner", "updated_at", "created_at")
    search_fields = ("name", "owner__username", "owner__email")
    readonly_fields = ("created_at", "updated_at")


@admin.register(SiteSettings)
class SiteSettingsAdmin(admin.ModelAdmin):
    fieldsets = (
        ("品牌信息", {"fields": ("site_name", "slogan", "logo", "logo_preview")}),
        ("微信群帮助", {
            "fields": ("help_text", "wechat_qr", "wechat_qr_preview"),
            "description": "上传微信群二维码后，前端左侧“需要帮助”卡片会自动展示新二维码。",
        }),
        ("系统信息", {"fields": ("updated_at",), "classes": ("collapse",)}),
    )
    readonly_fields = ("logo_preview", "wechat_qr_preview", "updated_at")

    def has_add_permission(self, request):
        return not SiteSettings.objects.exists()

    def changelist_view(self, request, extra_context=None):
        settings_row = SiteSettings.objects.order_by("pk").first()
        if settings_row:
            return HttpResponseRedirect(reverse("admin:content_sitesettings_change", args=(settings_row.pk,)))
        return super().changelist_view(request, extra_context)

    @admin.display(description="Logo 预览")
    def logo_preview(self, obj):
        return _preview(obj.logo.url if obj and obj.logo else "", "网站 Logo")

    @admin.display(description="微信群二维码预览")
    def wechat_qr_preview(self, obj):
        return _preview(obj.wechat_qr.url if obj and obj.wechat_qr else "", "微信群二维码")


@admin.register(DeploymentSettings)
class DeploymentSettingsAdmin(admin.ModelAdmin):
    form = DeploymentSettingsAdminForm
    change_form_template = "admin/content/deploymentsettings/change_form.html"
    fieldsets = (
        ("邮件发送", {
            "fields": (
                "smtp_enabled", "email_provider", "default_from_email", "brevo_sender_name",
                "feedback_notification_email",
            ),
            "description": "个人创作者推荐 EmailJS；Railway 免费、试用和 Hobby 套餐会拦截 SMTP。用于注册激活、忘记密码和意见建议提醒。",
        }),
        ("EmailJS 个人邮件 API", {
            "fields": (
                "emailjs_service_id", "emailjs_template_id", "emailjs_public_key",
                "emailjs_private_key", "emailjs_private_key_status",
            ),
            "classes": ("email-provider-panel", "email-provider-emailjs"),
            "description": EMAILJS_SETUP_GUIDE,
        }),
        ("Brevo 邮件 API", {
            "fields": ("brevo_api_key", "brevo_api_key_status"),
            "classes": ("email-provider-panel", "email-provider-brevo"),
            "description": BREVO_SETUP_GUIDE,
        }),
        ("SMTP 兼容设置", {
            "fields": (
                "smtp_host", "smtp_port", "smtp_username", "smtp_password",
                "smtp_password_status", "smtp_use_ssl", "smtp_use_tls",
            ),
            "classes": ("email-provider-panel", "email-provider-smtp"),
            "description": SMTP_SETUP_GUIDE,
        }),
        ("数据库连接", {
            "fields": ("database_status",),
            "description": "数据库密码必须在托管平台的加密环境变量中填写，因为 Django 必须先连接数据库才能打开本页面。",
        }),
        ("图片对象存储", {
            "fields": ("storage_status",),
            "description": "用户上传图片建议存入 Cloudflare R2；内置参考图库继续由前端 CDN 提供。",
        }),
        ("部署入口与操作流程", {
            "fields": ("deployment_links", "deployment_workflow"),
            "description": "集中管理前端网站、代码仓库、后端服务与数据库。链接会在新窗口打开，不展示密码、授权码等敏感信息。",
        }),
        ("系统信息", {"fields": ("updated_at",), "classes": ("collapse",)}),
    )
    readonly_fields = (
        "emailjs_private_key_status", "brevo_api_key_status", "smtp_password_status",
        "database_status", "storage_status", "deployment_links", "deployment_workflow", "updated_at",
    )

    class Media:
        css = {"all": ("content/admin.css",)}

    def has_add_permission(self, request):
        return not DeploymentSettings.objects.exists()

    def changelist_view(self, request, extra_context=None):
        row = DeploymentSettings.objects.order_by("pk").first()
        if row:
            return HttpResponseRedirect(reverse("admin:content_deploymentsettings_change", args=(row.pk,)))
        return super().changelist_view(request, extra_context)

    @admin.display(description="授权码状态")
    def smtp_password_status(self, obj):
        return "已加密保存，可直接保留或填写新授权码替换" if obj and obj.has_smtp_password else "尚未填写"

    @admin.display(description="Brevo API Key 状态")
    def brevo_api_key_status(self, obj):
        return "已加密保存，可直接保留或填写新 Key 替换" if obj and obj.has_brevo_api_key else "尚未填写"

    @admin.display(description="EmailJS Private Key 状态")
    def emailjs_private_key_status(self, obj):
        return "已加密保存，可直接保留或填写新 Key 替换" if obj and obj.has_emailjs_private_key else "尚未填写"

    @admin.display(description="数据库配置状态")
    def database_status(self, obj):
        configured = all(os.getenv(key) for key in ("MYSQL_DATABASE", "MYSQL_USER", "MYSQL_PASSWORD", "MYSQL_HOST"))
        state = "已配置" if configured else "未完整配置，将使用本地默认值"
        host = os.getenv("MYSQL_HOST", "127.0.0.1")
        database = os.getenv("MYSQL_DATABASE", "prompt_generator")
        user = os.getenv("MYSQL_USER", "prompt_user")
        return format_html("<strong>{}</strong><br>主机：{}<br>数据库：{}<br>用户：{}<br>密码：{}", state, host, database, user, "已设置" if os.getenv("MYSQL_PASSWORD") else "未设置")

    @admin.display(description="运行时图片存储状态")
    def storage_status(self, obj):
        configured = all(os.getenv(key) for key in ("R2_BUCKET_NAME", "R2_ENDPOINT_URL", "R2_ACCESS_KEY_ID", "R2_SECRET_ACCESS_KEY"))
        if configured:
            return format_html("<strong>Cloudflare R2 已配置</strong><br>存储桶：{}<br>公开地址：{}", os.getenv("R2_BUCKET_NAME"), os.getenv("R2_PUBLIC_BASE_URL", "使用签名地址"))
        return "当前使用服务器本地 media 目录；正式部署时请配置 Cloudflare R2，避免重启后图片丢失。"

    @admin.display(description="常用管理入口")
    def deployment_links(self, obj):
        frontend_url = settings.FRONTEND_URL.rstrip("/")
        backend_url = "https://backend-production-7c8d.up.railway.app"
        return format_html(
            """
            <div class="deployment-link-grid">
              <a class="deployment-link-card" href="https://dash.cloudflare.com/" target="_blank" rel="noopener">
                <strong>Cloudflare 网页设置</strong><span>管理 Workers、域名、构建与发布记录</span>
              </a>
              <a class="deployment-link-card" href="{}" target="_blank" rel="noopener">
                <strong>线上前端网站</strong><span>{}</span>
              </a>
              <a class="deployment-link-card" href="https://github.com/syssyw666-ui/tishicishengchengqi" target="_blank" rel="noopener">
                <strong>前端 GitHub 仓库</strong><span>公开仓库 · Vue 前端与参考图库</span>
              </a>
              <a class="deployment-link-card" href="https://github.com/syssyw666-ui/tishicishengchengqi_ADMIN" target="_blank" rel="noopener">
                <strong>后端 GitHub 仓库</strong><span>私有仓库 · Django 后端</span>
              </a>
              <a class="deployment-link-card" href="https://railway.com/dashboard" target="_blank" rel="noopener">
                <strong>Railway 后端管理</strong><span>管理 Backend、MySQL、变量、日志与域名</span>
              </a>
              <a class="deployment-link-card" href="{}/admin/" target="_blank" rel="noopener">
                <strong>线上 Django 管理后台</strong><span>{}/admin/</span>
              </a>
              <a class="deployment-link-card" href="{}/api/health/" target="_blank" rel="noopener">
                <strong>后端健康检查</strong><span>正常时返回 status: ok</span>
              </a>
            </div>
            """,
            frontend_url, frontend_url, backend_url, backend_url, backend_url,
        )

    @admin.display(description="设置与发布流程")
    def deployment_workflow(self, obj):
        return mark_safe("""
        <div class="deployment-workflow">
          <section><strong>1. 发布前端网页</strong><p>修改 Vue 前端并推送到公开仓库 <code>syssyw666-ui/tishicishengchengqi</code> 的 <code>main</code> 分支。Cloudflare 会自动构建并发布；前往 Cloudflare 网页设置查看构建日志、Workers 域名和自定义域名。</p></section>
          <section><strong>2. 发布 Django 后端</strong><p>后端代码只推送到私有仓库 <code>syssyw666-ui/tishicishengchengqi_ADMIN</code>。Railway 监听 <code>main</code> 分支并自动部署；部署后先打开健康检查，确认返回 <code>{&quot;status&quot;: &quot;ok&quot;}</code>，再测试登录、注册邮件和后台。</p></section>
          <section><strong>3. 管理 Railway MySQL</strong><p>数据库变量在 Railway 的 MySQL 服务中管理。使用 Navicat 从电脑连接时，必须开启 MySQL 的 Public Networking，并填写公网 TCP Proxy 域名和端口；数据库名、用户名和密码从 Railway Variables 复制。不要把数据库密码写进 GitHub。</p></section>
          <section><strong>4. 检查前后端连接</strong><p>Railway 的 <code>FRONTEND_URL</code>、<code>CORS_ALLOWED_ORIGINS</code>、<code>CSRF_TRUSTED_ORIGINS</code> 应填写线上前端网址；Cloudflare 构建变量 <code>VITE_API_BASE_URL</code> 应填写线上后端地址并以 <code>/api</code> 结尾。修改变量后需要重新部署对应服务。</p></section>
          <section><strong>5. 图片与密钥</strong><p>用户上传图片放在 Cloudflare R2；内置参考图保留在前端仓库。SMTP 授权码、EmailJS Private Key、数据库密码和 R2 Secret Key 只能存放在后台加密字段或 Railway Variables 中。</p></section>
        </div>
        """)

    def response_change(self, request, obj):
        if "_send_test_email" in request.POST:
            recipient = request.user.email or obj.feedback_notification_email
            try:
                sent = send_mail(
                    "[图灵词造] 邮件配置测试",
                    "这是一封由图灵词造后台发送的测试邮件。收到此邮件表示当前邮件发送方式可用。",
                    obj.default_from_email or obj.smtp_username,
                    [recipient],
                    fail_silently=False,
                )
                if sent:
                    self.message_user(request, f"测试邮件已发送至 {recipient}。", messages.SUCCESS)
                else:
                    self.message_user(request, "邮件服务未返回发送成功，请检查当前邮件配置。", messages.ERROR)
            except Exception as exc:
                self.message_user(request, f"测试邮件发送失败：{exc}", messages.ERROR)
            return HttpResponseRedirect(request.path)
        return super().response_change(request, obj)


@admin.register(Feedback)
class FeedbackAdmin(admin.ModelAdmin):
    list_display = ("content_display", "user", "handled", "attachment_preview", "created_at")
    list_display_links = ("content_display",)
    list_filter = ("handled", "created_at")
    search_fields = ("content", "user__username", "user__email")
    list_editable = ("handled",)
    readonly_fields = ("created_at", "full_attachment_preview")
    fields = ("user", "content", "image", "full_attachment_preview", "handled", "created_at")
    list_per_page = 50

    class Media:
        css = {"all": ("content/admin.css",)}

    @admin.display(description="内容")
    def content_display(self, obj):
        return format_html(
            '<div class="feedback-content-cell">{}</div>',
            obj.content or "仅提交了图片附件",
        )

    @admin.display(description="附件预览")
    def attachment_preview(self, obj):
        return _preview(obj.image.url if obj.image else "", "意见建议附件", compact=True)

    @admin.display(description="附件图片")
    def full_attachment_preview(self, obj):
        return _preview(obj.image.url if obj.image else "", "意见建议附件")


def _install_admin_menu_organization():
    if getattr(admin.site, "_prompt_generator_menu_installed", False):
        return
    original_get_app_list = admin.site.get_app_list

    def organized_get_app_list(self, request, app_label=None):
        app_list = original_get_app_list(request, None)
        accounts_app = next((item for item in app_list if item["app_label"] == "accounts"), None)
        content_app = next((item for item in app_list if item["app_label"] == "content"), None)
        feedback_model = None
        site_settings_model = None
        deployment_settings_model = None

        if content_app:
            retained_models = []
            for model in content_app.get("models", []):
                if model["object_name"] == "PromptTemplate" and accounts_app:
                    accounts_app.setdefault("models", []).append(model)
                elif model["object_name"] == "Feedback":
                    feedback_model = model
                elif model["object_name"] == "SiteSettings":
                    site_settings_model = model
                elif model["object_name"] == "DeploymentSettings":
                    deployment_settings_model = model
                else:
                    retained_models.append(model)
            content_app["models"] = retained_models

        quick_menus = []
        if feedback_model:
            quick_menus.append({
                "name": "意见建议",
                "icon": "fas fa-bell",
                "url": feedback_model.get("admin_url", ""),
                "badge": Feedback.objects.filter(handled=False).count(),
            })
        if site_settings_model:
            settings_row = SiteSettings.objects.order_by("pk").first()
            quick_menus.append({
                "name": "网站设置",
                "icon": "fas fa-sliders-h",
                "url": reverse("admin:content_sitesettings_change", args=(settings_row.pk,)) if settings_row else site_settings_model.get("add_url", ""),
            })
        if deployment_settings_model:
            deployment_row = DeploymentSettings.objects.order_by("pk").first()
            quick_menus.append({
                "name": "部署配置",
                "icon": "fas fa-server",
                "url": reverse("admin:content_deploymentsettings_change", args=(deployment_row.pk,)) if deployment_row else deployment_settings_model.get("add_url", ""),
            })
        if quick_menus:
            settings.SIMPLEUI_CONFIG["system_keep"] = True
            settings.SIMPLEUI_CONFIG.pop("menu_display", None)
            settings.SIMPLEUI_CONFIG["menus"] = quick_menus

        order = {"accounts": 0, "content": 1}
        app_list.sort(key=lambda item: order.get(item["app_label"], 99))
        if app_label:
            return [item for item in app_list if item["app_label"] == app_label]
        return app_list

    admin.site.get_app_list = MethodType(organized_get_app_list, admin.site)
    admin.site._prompt_generator_menu_installed = True


_install_admin_menu_organization()
