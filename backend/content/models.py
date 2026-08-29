from django.conf import settings
from django.db import models
from uuid import uuid4

from .secrets import decrypt_secret, encrypt_secret


class ParameterOption(models.Model):
    source_id = models.CharField("项目 ID", max_length=120, unique=True, blank=True, editable=False)
    category = models.CharField("分类", max_length=64, db_index=True)
    style_group = models.CharField("子分类", max_length=64, db_index=True)
    zh_name = models.CharField("中文名称", max_length=120)
    en_name = models.CharField("英文名称", max_length=160)
    image = models.CharField("内置资源地址", max_length=500, blank=True)
    uploaded_image = models.ImageField("上传图片", upload_to="catalog/parameters/", blank=True)
    zh_prompt = models.TextField("中文提示词")
    en_prompt = models.TextField("英文提示词")
    negative = models.JSONField("负面词", default=list, blank=True)
    enabled = models.BooleanField("启用", default=True)
    order = models.PositiveIntegerField("板块内排序", default=0, help_text="仅在当前分类和子分类内排序；保存后由后台自动整理为连续序号。")
    updated_at = models.DateTimeField("更新时间", auto_now=True)

    class Meta:
        ordering = ("category", "order", "id")
        verbose_name = "参数选项"
        verbose_name_plural = "参数选项"

    def __str__(self):
        return f"{self.zh_name} / {self.en_name}"

    def save(self, *args, **kwargs):
        if not self.source_id:
            self.source_id = f"parameter-{uuid4().hex[:16]}"
        super().save(*args, **kwargs)


class FeaturedPrompt(models.Model):
    source_id = models.CharField("项目 ID", max_length=120, unique=True, blank=True, editable=False)
    category = models.CharField("分类", max_length=64, db_index=True)
    group = models.CharField("子分类", max_length=64, db_index=True)
    zh_title = models.CharField("中文标题", max_length=160)
    en_title = models.CharField("英文标题", max_length=200)
    zh_description = models.TextField("中文说明", blank=True)
    en_description = models.TextField("英文说明", blank=True)
    prompt = models.TextField("提示词")
    image = models.CharField("内置展示图地址", max_length=500, blank=True)
    uploaded_image = models.ImageField("上传展示图", upload_to="catalog/featured/", blank=True)
    original_image = models.CharField("内置原图地址", max_length=500, blank=True)
    uploaded_original_image = models.ImageField("上传原图", upload_to="catalog/featured/original/", blank=True)
    result_image = models.CharField("内置效果图地址", max_length=500, blank=True)
    uploaded_result_image = models.ImageField("上传效果图", upload_to="catalog/featured/result/", blank=True)
    enabled = models.BooleanField("启用", default=True)
    order = models.PositiveIntegerField("板块内排序", default=0, help_text="仅在当前分类和子分类内排序；保存后由后台自动整理为连续序号。")
    updated_at = models.DateTimeField("更新时间", auto_now=True)

    class Meta:
        ordering = ("category", "order", "id")
        verbose_name = "精选提示词"
        verbose_name_plural = "精选提示词"

    def __str__(self):
        return self.zh_title

    def save(self, *args, **kwargs):
        if not self.source_id:
            self.source_id = f"featured-{uuid4().hex[:16]}"
        super().save(*args, **kwargs)


class PromptTemplate(models.Model):
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="prompt_templates", verbose_name="用户")
    name = models.CharField("模板名称", max_length=120)
    preview_image = models.ImageField("展示图片", upload_to="user-templates/%Y/%m/", blank=True)
    configuration = models.JSONField("选择配置", default=dict)
    prompt_zh = models.TextField("中文提示词", blank=True)
    prompt_en = models.TextField("英文提示词", blank=True)
    created_at = models.DateTimeField("创建时间", auto_now_add=True)
    updated_at = models.DateTimeField("更新时间", auto_now=True)

    class Meta:
        ordering = ("-updated_at",)
        verbose_name = "用户模板"
        verbose_name_plural = "用户模板"
        constraints = [models.UniqueConstraint(fields=("owner", "name"), name="unique_template_name_per_owner")]

    def __str__(self):
        return f"{self.owner.username} - {self.name}"


class Feedback(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True, verbose_name="用户")
    content = models.TextField("建议内容", blank=True)
    image = models.ImageField("附件图片", upload_to="feedback/%Y/%m/", blank=True)
    created_at = models.DateTimeField("提交时间", auto_now_add=True)
    handled = models.BooleanField("已处理", default=False)

    class Meta:
        ordering = ("-created_at",)
        verbose_name = "意见建议"
        verbose_name_plural = "意见建议"

    def __str__(self):
        return self.content[:40] or "图片建议"


class SiteSettings(models.Model):
    site_name = models.CharField("网站名称", max_length=80, default="图片提示词生成器")
    slogan = models.CharField("品牌口号", max_length=120, default="词出新意，图出惊喜")
    logo = models.ImageField("网站 Logo", upload_to="site/", blank=True)
    wechat_qr = models.ImageField("微信群二维码", upload_to="site/", blank=True)
    help_text = models.CharField("帮助提示", max_length=160, default="需要帮助？扫码加入微信群")
    updated_at = models.DateTimeField("更新时间", auto_now=True)

    class Meta:
        verbose_name = "网站设置"
        verbose_name_plural = "网站设置"

    def __str__(self):
        return self.site_name


class DeploymentSettings(models.Model):
    EMAIL_PROVIDER_CHOICES = (
        ("emailjs", "EmailJS 个人邮件 API（推荐）"),
        ("brevo", "Brevo 邮件 API（Railway 免费/试用推荐）"),
        ("smtp", "SMTP（Railway Pro 及以上可用）"),
    )

    smtp_enabled = models.BooleanField("启用邮件发送", default=False)
    email_provider = models.CharField(
        "发送方式", max_length=20, choices=EMAIL_PROVIDER_CHOICES, default="brevo",
    )
    brevo_api_key_encrypted = models.TextField("Brevo API Key 密文", blank=True, editable=False)
    brevo_sender_name = models.CharField("发件人名称", max_length=120, default="图灵词造")
    emailjs_service_id = models.CharField("EmailJS Service ID", max_length=120, blank=True)
    emailjs_template_id = models.CharField("EmailJS Template ID", max_length=120, blank=True)
    emailjs_public_key = models.CharField("EmailJS Public Key", max_length=255, blank=True)
    smtp_host = models.CharField("SMTP 服务器", max_length=255, default="smtp.163.com")
    smtp_port = models.PositiveIntegerField("SMTP 端口", default=465)
    smtp_username = models.EmailField("发件邮箱", blank=True)
    smtp_password_encrypted = models.TextField("SMTP 授权码密文", blank=True, editable=False)
    smtp_use_ssl = models.BooleanField("使用 SSL", default=True)
    smtp_use_tls = models.BooleanField("使用 TLS", default=False)
    default_from_email = models.EmailField("默认发件邮箱", blank=True)
    feedback_notification_email = models.EmailField("意见建议接收邮箱", default="934361900@qq.com")
    updated_at = models.DateTimeField("更新时间", auto_now=True)

    class Meta:
        verbose_name = "部署配置"
        verbose_name_plural = "部署配置"

    def __str__(self):
        return "部署配置"

    def set_smtp_password(self, value):
        if value:
            self.smtp_password_encrypted = encrypt_secret(value)

    def get_smtp_password(self):
        return decrypt_secret(self.smtp_password_encrypted)

    @property
    def has_smtp_password(self):
        return bool(self.smtp_password_encrypted)

    def set_brevo_api_key(self, value):
        if value:
            self.brevo_api_key_encrypted = encrypt_secret(value)

    def get_brevo_api_key(self):
        return decrypt_secret(self.brevo_api_key_encrypted)

    @property
    def has_brevo_api_key(self):
        return bool(self.brevo_api_key_encrypted)
