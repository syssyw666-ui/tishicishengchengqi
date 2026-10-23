import json
from pathlib import Path

from django.db import migrations


def sync_factory_prompt_repairs_v(apps, schema_editor):
    ParameterOption = apps.get_model("content", "ParameterOption")
    snapshot = Path(__file__).resolve().parents[1] / "data/style_expansion_20261022_v.json"
    payload = json.loads(snapshot.read_text(encoding="utf-8"))
    rows = ParameterOption.objects.using(schema_editor.connection.alias)

    for item in payload.get("parameters", []):
        rows.filter(source_id=item["id"]).update(
            zh_name=item["zhName"],
            en_name=item["enName"],
            zh_prompt=item["zhPrompt"],
            en_prompt=item["enPrompt"],
            negative=item.get("negative", []),
        )


class Migration(migrations.Migration):
    dependencies = [("content", "0038_prompt_repairs_20261022_u")]
    operations = [migrations.RunPython(sync_factory_prompt_repairs_v, migrations.RunPython.noop)]
