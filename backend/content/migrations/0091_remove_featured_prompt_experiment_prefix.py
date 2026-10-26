import re

from django.db import migrations


PREFIX_PATTERN = re.compile(r"实验提示词\s*[:：]\s*")


def remove_experiment_prefix(apps, schema_editor):
    FeaturedPrompt = apps.get_model("content", "FeaturedPrompt")
    rows = FeaturedPrompt.objects.using(schema_editor.connection.alias)
    for row in rows.iterator():
        cleaned = PREFIX_PATTERN.sub("", row.prompt)
        if cleaned != row.prompt:
            row.prompt = cleaned
            row.save(update_fields=["prompt"])


class Migration(migrations.Migration):
    dependencies = [("content", "0090_featured_skill_batch_20261026_c")]
    operations = [migrations.RunPython(remove_experiment_prefix, migrations.RunPython.noop)]
