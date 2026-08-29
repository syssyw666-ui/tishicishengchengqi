from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [("content", "0009_deploymentsettings_emailjs")]

    operations = [
        migrations.AddField(
            model_name="deploymentsettings",
            name="emailjs_private_key_encrypted",
            field=models.TextField(blank=True, editable=False, verbose_name="EmailJS Private Key 密文"),
        ),
    ]
