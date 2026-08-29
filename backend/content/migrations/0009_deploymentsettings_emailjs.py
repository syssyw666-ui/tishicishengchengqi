from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [("content", "0008_deploymentsettings_brevo_email_api")]

    operations = [
        migrations.AlterField(
            model_name="deploymentsettings",
            name="email_provider",
            field=models.CharField(
                choices=[
                    ("emailjs", "EmailJS 个人邮件 API（推荐）"),
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
            name="emailjs_public_key",
            field=models.CharField(blank=True, max_length=255, verbose_name="EmailJS Public Key"),
        ),
        migrations.AddField(
            model_name="deploymentsettings",
            name="emailjs_service_id",
            field=models.CharField(blank=True, max_length=120, verbose_name="EmailJS Service ID"),
        ),
        migrations.AddField(
            model_name="deploymentsettings",
            name="emailjs_template_id",
            field=models.CharField(blank=True, max_length=120, verbose_name="EmailJS Template ID"),
        ),
    ]
