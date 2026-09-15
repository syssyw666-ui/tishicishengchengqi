from django.db import migrations


def move_dappled_portrait_to_img2img(apps, schema_editor):
    FeaturedPrompt = apps.get_model("content", "FeaturedPrompt")
    FeaturedPrompt.objects.using(schema_editor.connection.alias).filter(
        source_id="color-dappled-warm-cool-portrait"
    ).update(category="image-to-image", group="style-transfer")


class Migration(migrations.Migration):
    dependencies = [("content", "0015_featured_prompt_additions_20260915")]
    operations = [migrations.RunPython(move_dappled_portrait_to_img2img, migrations.RunPython.noop)]
