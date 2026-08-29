from django.db import migrations, models


def create_settings(apps, schema_editor):
    apps.get_model("content", "DeploymentSettings").objects.get_or_create(pk=1)


class Migration(migrations.Migration):
    dependencies = [("content", "0006_sitesettings_slogan")]

    operations = [
        migrations.CreateModel(
            name="DeploymentSettings",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("smtp_enabled", models.BooleanField(default=False, verbose_name="启用后台 SMTP 配置")),
                ("smtp_host", models.CharField(default="smtp.163.com", max_length=255, verbose_name="SMTP 服务器")),
                ("smtp_port", models.PositiveIntegerField(default=465, verbose_name="SMTP 端口")),
                ("smtp_username", models.EmailField(blank=True, max_length=254, verbose_name="发件邮箱")),
                ("smtp_password_encrypted", models.TextField(blank=True, editable=False, verbose_name="SMTP 授权码密文")),
                ("smtp_use_ssl", models.BooleanField(default=True, verbose_name="使用 SSL")),
                ("smtp_use_tls", models.BooleanField(default=False, verbose_name="使用 TLS")),
                ("default_from_email", models.EmailField(blank=True, max_length=254, verbose_name="默认发件邮箱")),
                ("feedback_notification_email", models.EmailField(default="934361900@qq.com", max_length=254, verbose_name="意见建议接收邮箱")),
                ("updated_at", models.DateTimeField(auto_now=True, verbose_name="更新时间")),
            ],
            options={"verbose_name": "部署配置", "verbose_name_plural": "部署配置"},
        ),
        migrations.RunPython(create_settings, migrations.RunPython.noop),
    ]
