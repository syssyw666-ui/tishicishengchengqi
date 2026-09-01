from django.db import migrations


def reclassify_journal_logo_purposes(apps, schema_editor):
    ParameterOption = apps.get_model("content", "ParameterOption")
    rows = ParameterOption.objects.using(schema_editor.connection.alias)
    updates = {
        "style-vintage-travel-journal": {
            "category": "purpose",
            "style_group": "cover",
            "zh_prompt": "复古旅行手账成片用途，旧纸肌理、手绘场景、贴纸元素、低饱和色和轻微颗粒",
            "en_prompt": "vintage travel journal finished-image use, aged notebook paper, hand-drawn scene, sticker-like extracted elements, muted colors and subtle grain",
        },
        "style-modern-minimal-logo": {
            "category": "purpose",
            "style_group": "design",
            "zh_prompt": "现代极简标志成片用途，将主体提炼为几何图形、清晰剪影、品牌符号感和干净色卡",
            "en_prompt": "modern minimal logo finished-image use, subject reduced into geometric forms, clear silhouette, brand-symbol clarity and clean color swatches",
        },
    }
    for source_id, values in updates.items():
        rows.filter(source_id=source_id).update(**values)


def restore_journal_logo_styles(apps, schema_editor):
    ParameterOption = apps.get_model("content", "ParameterOption")
    rows = ParameterOption.objects.using(schema_editor.connection.alias)
    updates = {
        "style-vintage-travel-journal": {
            "category": "style",
            "style_group": "design-retro",
            "zh_prompt": "复古旅行手账风格，旧纸肌理、手绘场景、贴纸元素、低饱和色和轻微颗粒",
            "en_prompt": "vintage travel journal style, aged notebook paper, hand-drawn scene, sticker-like extracted elements, muted colors and subtle grain",
        },
        "style-modern-minimal-logo": {
            "category": "style",
            "style_group": "design-retro",
            "zh_prompt": "现代极简标志风格，将主体提炼为几何图形、清晰剪影、品牌符号感和干净色卡",
            "en_prompt": "modern minimal logo style, subject reduced into geometric forms, clear silhouette, brand-symbol clarity and clean color swatches",
        },
    }
    for source_id, values in updates.items():
        rows.filter(source_id=source_id).update(**values)


class Migration(migrations.Migration):
    dependencies = [("content", "0012_featured_prompt_styles")]
    operations = [migrations.RunPython(reclassify_journal_logo_purposes, restore_journal_logo_styles)]
