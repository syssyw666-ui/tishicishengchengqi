import json

from django.contrib import admin
from django.contrib.auth import get_user_model
from django.conf import settings
from django.core import mail
from django.test import RequestFactory, TestCase, override_settings
from rest_framework import status
from rest_framework.test import APITestCase

from .models import DeploymentSettings, Feedback, FeaturedPrompt, ParameterOption, PromptTemplate, SiteSettings


class CatalogApiTests(APITestCase):
    def test_catalog_only_returns_enabled_parameters(self):
        ParameterOption.objects.create(
            source_id="enabled", category="style", zh_name="启用", en_name="Enabled",
            zh_prompt="启用提示词", en_prompt="enabled prompt", enabled=True,
        )
        ParameterOption.objects.create(
            source_id="disabled", category="style", zh_name="停用", en_name="Disabled",
            zh_prompt="停用提示词", en_prompt="disabled prompt", enabled=False,
        )

        response = self.client.get("/api/catalog/parameters/")

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual([item["id"] for item in response.data], ["enabled"])
        self.assertIn("no-cache", response["Cache-Control"])

    def test_site_settings_are_public(self):
        settings_row = SiteSettings.objects.first()
        settings_row.site_name = "测试站点"
        settings_row.help_text = "扫码加入"
        settings_row.save()

        response = self.client.get("/api/site-settings/")

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data[0]["site_name"], "测试站点")


class PromptTemplateApiTests(APITestCase):
    def setUp(self):
        user_model = get_user_model()
        self.owner = user_model.objects.create_user("owner", "owner@example.com", "StrongPass123!")
        self.other = user_model.objects.create_user("other", "other@example.com", "StrongPass123!")

    def test_login_is_required(self):
        response = self.client.get("/api/templates/")
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_user_only_sees_and_creates_own_templates(self):
        PromptTemplate.objects.create(owner=self.other, name="Other", configuration={})
        self.client.force_authenticate(self.owner)

        created = self.client.post(
            "/api/templates/",
            {
                "name": "My setup",
                "configuration": json.dumps({"inputs": {"subjectZh": "灯塔"}, "selectedIds": ["cinematic"]}),
                "prompt_zh": "中文提示词",
                "prompt_en": "English prompt",
            },
            format="multipart",
        )
        listed = self.client.get("/api/templates/")

        self.assertEqual(created.status_code, status.HTTP_201_CREATED)
        self.assertEqual(created.data["configuration"]["selectedIds"], ["cinematic"])
        self.assertEqual(listed.data["count"], 1)
        self.assertEqual(listed.data["results"][0]["name"], "My setup")

    def test_owner_can_rename_template_and_replace_preview(self):
        template = PromptTemplate.objects.create(
            owner=self.owner,
            name="Old name",
            configuration={"inputs": {"subjectZh": "灯塔"}},
        )
        self.client.force_authenticate(self.owner)

        response = self.client.patch(
            f"/api/templates/{template.pk}/",
            {"name": "New name"},
            format="multipart",
        )

        template.refresh_from_db()
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(template.name, "New name")
        self.assertEqual(template.configuration["inputs"]["subjectZh"], "灯塔")


@override_settings(
    EMAIL_BACKEND="django.core.mail.backends.locmem.EmailBackend",
    FEEDBACK_NOTIFICATION_EMAIL="admin@example.com",
)
class FeedbackApiTests(APITestCase):
    def test_anonymous_user_can_submit_feedback(self):
        response = self.client.post("/api/feedback/", {"content": "希望增加新风格。"})
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Feedback.objects.count(), 1)
        self.assertEqual(len(mail.outbox), 1)
        self.assertEqual(mail.outbox[0].to, ["admin@example.com"])
        self.assertIn("希望增加新风格", mail.outbox[0].body)

    def test_empty_feedback_is_rejected(self):
        response = self.client.post("/api/feedback/", {"content": ""})
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)


class AdminCustomizationTests(TestCase):
    def setUp(self):
        self.admin_user = get_user_model().objects.create_superuser(
            username="admin-user",
            email="admin-user@example.com",
            password="StrongPass123!",
        )
        self.parameter = ParameterOption.objects.create(
            source_id="admin-style",
            category="style",
            style_group="anime",
            zh_name="后台测试风格",
            en_name="Admin Style",
            image="/assets/parameters/admin-style.jpg",
            zh_prompt="中文提示词",
            en_prompt="English prompt",
        )

    def test_menu_moves_templates_and_feedback_to_requested_sections(self):
        Feedback.objects.create(content="待处理建议")
        request = RequestFactory().get("/admin/")
        request.user = self.admin_user

        app_list = admin.site.get_app_list(request)
        accounts_app = next(item for item in app_list if item["app_label"] == "accounts")
        content_app = next(item for item in app_list if item["app_label"] == "content")

        self.assertIn("PromptTemplate", [item["object_name"] for item in accounts_app["models"]])
        self.assertNotIn("PromptTemplate", [item["object_name"] for item in content_app["models"]])
        self.assertNotIn("feedback_center", [item["app_label"] for item in app_list])
        feedback_menu = settings.SIMPLEUI_CONFIG["menus"][0]
        self.assertEqual(feedback_menu["name"], "意见建议")
        self.assertEqual(feedback_menu["badge"], 1)
        self.assertEqual(feedback_menu["url"], "/admin/content/feedback/")
        site_settings_menu = settings.SIMPLEUI_CONFIG["menus"][1]
        self.assertEqual(site_settings_menu["name"], "网站设置")
        self.assertIn("/admin/content/sitesettings/", site_settings_menu["url"])

    def test_site_settings_admin_exposes_wechat_qr_upload(self):
        self.client.force_login(self.admin_user)
        settings_row = SiteSettings.objects.first()

        response = self.client.get(f"/admin/content/sitesettings/{settings_row.pk}/change/")

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertContains(response, "微信群帮助")
        self.assertContains(response, "微信群二维码")
        self.assertContains(response, 'name="wechat_qr"')
        self.assertContains(response, "上传微信群二维码后")

    def test_deployment_settings_admin_encrypts_smtp_password_and_shows_status(self):
        settings_row = DeploymentSettings.objects.first()
        settings_row.smtp_username = "sender@example.com"
        settings_row.set_smtp_password("smtp-secret-value")
        settings_row.save()

        self.assertNotIn("smtp-secret-value", settings_row.smtp_password_encrypted)
        self.assertEqual(settings_row.get_smtp_password(), "smtp-secret-value")

        self.client.force_login(self.admin_user)
        response = self.client.get(f"/admin/content/deploymentsettings/{settings_row.pk}/change/")

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertContains(response, "SMTP 授权码")
        self.assertContains(response, "已加密保存")
        self.assertContains(response, "数据库连接")
        self.assertContains(response, "图片对象存储")
        self.assertContains(response, "保存并发送测试邮件")
        self.assertNotContains(response, "smtp-secret-value")

    def test_parameter_admin_uses_chinese_choices_and_merged_image_field(self):
        self.client.force_login(self.admin_user)
        response = self.client.get(f"/admin/content/parameteroption/{self.parameter.pk}/change/")

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertContains(response, "画面风格")
        self.assertContains(response, "动画 / 二次元")
        self.assertContains(response, "图片路径")
        self.assertContains(response, "catalog-preview")
        self.assertContains(response, "catalog-image-field", count=1)
        self.assertContains(response, "自动裁剪（必选）")
        self.assertContains(response, 'data-crop-ratio="16:9"')
        self.assertContains(response, "参数卡片 · 16:9")
        self.assertNotContains(response, "catalog-crop-enabled")
        self.assertContains(
            response,
            'data-current-url="/admin/content/catalog-image-source/?path=%2Fassets%2Fparameters%2Fadmin-style.jpg"',
        )
        self.assertTrue(response.context["adminform"].form.fields["style_group"].required)
        self.assertNotContains(response, "图片预览")
        self.assertNotContains(response, 'name="source_id"')
        self.assertNotContains(response, "默认权重")

    def test_project_id_is_generated_automatically(self):
        item = ParameterOption.objects.create(
            category="camera",
            style_group="angle",
            zh_name="自动编号测试",
            en_name="Automatic ID",
            zh_prompt="测试",
            en_prompt="test",
        )
        self.assertTrue(item.source_id.startswith("parameter-"))
        self.client.force_login(self.admin_user)
        add_response = self.client.get("/admin/content/parameteroption/add/")
        self.assertEqual(add_response.status_code, status.HTTP_200_OK)
        self.assertContains(add_response, "保存后自动生成")

    def test_catalog_image_source_is_staff_only_and_path_limited(self):
        source_url = "/admin/content/catalog-image-source/?path=/assets/parameters/style-photorealistic.jpg"
        anonymous_response = self.client.get(source_url)
        self.assertEqual(anonymous_response.status_code, status.HTTP_302_FOUND)

        self.client.force_login(self.admin_user)
        response = self.client.get(source_url)
        invalid_response = self.client.get(
            "/admin/content/catalog-image-source/?path=/assets/../../backend/config/settings.py"
        )

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response["Content-Type"], "image/jpeg")
        self.assertEqual(invalid_response.status_code, status.HTTP_404_NOT_FOUND)

    def test_admin_reorders_only_inside_current_subcategory(self):
        first = ParameterOption.objects.create(
            source_id="order-first", category="camera", style_group="angle", order=1,
            zh_name="第一项", en_name="First", zh_prompt="第一", en_prompt="first",
        )
        second = ParameterOption.objects.create(
            source_id="order-second", category="camera", style_group="angle", order=2,
            zh_name="第二项", en_name="Second", zh_prompt="第二", en_prompt="second",
        )
        untouched = ParameterOption.objects.create(
            source_id="order-other", category="camera", style_group="focal-length", order=7,
            zh_name="其他板块", en_name="Other", zh_prompt="其他", en_prompt="other",
        )
        request = RequestFactory().post("/admin/content/parameteroption/")
        request.user = self.admin_user
        second.order = 1

        admin.site._registry[ParameterOption].save_model(request, second, form=None, change=True)

        self.assertEqual(
            list(ParameterOption.objects.filter(category="camera", style_group="angle").order_by("order").values_list("pk", flat=True)),
            [second.pk, first.pk],
        )
        untouched.refresh_from_db()
        self.assertEqual(untouched.order, 7)

    def test_featured_category_uses_dynamic_image_fields(self):
        item = FeaturedPrompt.objects.create(
            category="color-edit",
            group="color-style",
            zh_title="动态字段测试",
            en_title="Dynamic Fields",
            prompt="测试提示词",
        )
        self.client.force_login(self.admin_user)
        response = self.client.get(f"/admin/content/featuredprompt/{item.pk}/change/")

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertContains(response, "content/catalog_admin.js")
        self.assertContains(response, "catalog-image-field", count=3)
        self.assertContains(response, "自动裁剪（必选）", count=3)
        self.assertContains(response, 'data-crop-ratio="16:9"', count=3)
        self.assertTrue(response.context["adminform"].form.fields["group"].required)

    def test_feedback_list_displays_submitted_content(self):
        Feedback.objects.create(content="需要在后台完整显示的意见内容")
        self.client.force_login(self.admin_user)

        response = self.client.get("/admin/content/feedback/")

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertContains(response, "需要在后台完整显示的意见内容")
        self.assertContains(response, "feedback-content-cell")
