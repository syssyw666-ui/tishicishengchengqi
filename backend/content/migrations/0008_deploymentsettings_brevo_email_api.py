from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [("content", "0007_deploymentsettings")]

    operations = [
        migrations.AlterField(
            model_name="deploymentsettings",
            name="smtp_enabled",
            field=models.BooleanField(default=False, verbose_name="启用邮件发送"),
        ),
        migrations.AddField(
            model_name="deploymentsettings",
            name="email_provider",
            field=models.CharField(
                choices=[
                    ("brevo", "Brevo 邮件 API（Railway 免费/试用推荐）"),
                    ("smtp", "SMTP（Railway Pro 及以上可用）"),
                ],
                default="brevo",
                max_length=20,
                verbose_name="发送方式",
            ),
        ),
        migrations.AddField(
            model_name="deploymentsettings",
            name="brevo_api_key_encrypted",
            field=models.TextField(blank=True, editable=False, verbose_name="Brevo API Key 密文"),
        ),
        migrations.AddField(
            model_name="deploymentsettings",
            name="brevo_sender_name",
            field=models.CharField(default="图灵词造", max_length=120, verbose_name="发件人名称"),
        ),
    ]
