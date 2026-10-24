from django.db import migrations


SOURCE_ID = "img2img-architecture-infographic-vector"
ORIGINAL_IMAGE = "/assets/featured/img2img-architecture-infographic-vector-original.jpg?v=20261024-source-fix"


def fix_architecture_infographic_source(apps, schema_editor):
    FeaturedPrompt = apps.get_model("content", "FeaturedPrompt")
    rows = FeaturedPrompt.objects.using(schema_editor.connection.alias)
    item = rows.filter(source_id=SOURCE_ID).first()
    if item is None:
        return
    updates = {"original_image": ORIGINAL_IMAGE}
    if item.prompt.startswith("实验提示词："):
        updates["prompt"] = item.prompt.removeprefix("实验提示词：")
    rows.filter(pk=item.pk).update(**updates)


class Migration(migrations.Migration):
    dependencies = [("content", "0083_refresh_white_frame_recrops")]
    operations = [migrations.RunPython(fix_architecture_infographic_source, migrations.RunPython.noop)]
