from django.db import migrations, models


def classify_missing_subcategories(apps, schema_editor):
    parameter_model = apps.get_model("content", "ParameterOption")
    featured_model = apps.get_model("content", "FeaturedPrompt")

    parameter_groups = {
        "shot-size": {
            "framing-extreme-wide", "framing-wide", "framing-medium", "framing-close-up",
            "framing-extreme-close-up", "framing-panoramic",
        },
        "photo-film-3d": {
            "style-photorealistic", "style-cinematic", "style-animated-3d",
            "style-clay-animation", "style-low-poly",
        },
        "anime": {"style-anime"},
        "design-retro": {"style-cyberpunk", "style-pixel-art", "style-concept-art"},
        "craft-print": {"style-watercolor", "style-oil-painting"},
        "eastern": {"style-chinese-ink"},
    }
    for group, source_ids in parameter_groups.items():
        parameter_model.objects.filter(source_id__in=source_ids, style_group="").update(style_group=group)
    parameter_model.objects.filter(category="framing", style_group="").update(style_group="shot-size")
    parameter_model.objects.filter(category="style", style_group="").update(style_group="design-retro")

    featured_groups = {
        "style-transfer": {
            "img2img-style-transfer", "img2img-ink-reconstruction", "img2img-character-consistency",
            "img2img-vintage-collage", "img2img-paper-cut-architecture",
            "img2img-dopamine-illustration", "img2img-embossed-relief", "img2img-woodcut-print",
        },
        "poster-layout": {"img2img-postcard-poster", "img2img-color-walk-magnet"},
        "product-structure": {
            "img2img-product-cleanup", "img2img-vector-architecture",
            "img2img-architecture-infographic-vector",
        },
        "generation-tools": {"utility-psd-layer", "utility-canva-magic-layer"},
        "reverse-prompt": {
            "utility-reverse-general", "utility-reverse-font-logo", "utility-reverse-landscape",
            "utility-reverse-photo", "utility-reverse-illustration", "utility-reverse-3d",
            "utility-reverse-ip-character",
        },
        "batch-planning": {"utility-dujiangyan-heritage-prompt-set"},
        "poster-design": {
            "text-lingnan-maximalist-vector", "text-shanghai-palimpsest-poster",
            "text-chinese-bronze-badge-logo", "text-mythic-cloud-wukong-lines",
            "text-citywalk-collage", "text-paris-watercolor-sketch",
            "text-fortune-talisman-typography", "text-qinian-hall-minimal-poster",
            "text-joker-paper-sculpture-card", "text-four-seasons-bookmarks",
            "text-qinian-hall-type-poster", "text-betta-klein-blue-poster",
            "text-citypop-double-exposure", "text-nostalgic-countryside-screenprint",
            "text-ajrak-new-year-horse", "text-pet-magazine-screenprint",
        },
        "character-design": {
            "text-cinematic-character", "text-3d-song-merchant-board",
            "text-anime-courier-turnaround", "text-realistic-ancient-male-turnaround",
            "text-tang-lingyan-officials", "text-campus-male-character-board",
            "text-wild-eastern-man-sketch",
        },
        "illustration-art": {
            "text-watercolor-floral-card", "text-dog-doodle-pattern",
            "text-fantasy-owl-lineart", "text-monet-window-flowers",
            "text-particle-cat-dreamscape", "text-light-dot-tiger",
        },
        "culture-craft": {
            "text-chinese-folk-illustration", "text-tibetan-winter-village",
            "text-ink-street-whitespace", "text-lhasa-barkhor-line-sketch",
            "text-folk-tile-cat-rubbing", "text-guardian-deity-pen-engraving",
            "text-snow-ink-village", "text-yunnan-mushroom-vector",
            "text-shu-brocade-process", "text-grain-ragdoll-cat",
            "text-zhuang-cultural-merch", "text-christmas-paper-cut-floral",
        },
        "scene-map": {
            "text-isometric-street-vendors", "text-china-route-map",
            "text-future-bicycle-blueprint",
        },
        "product-commercial": {"text-food-exploded-layers", "text-product-hero"},
    }
    for group, source_ids in featured_groups.items():
        featured_model.objects.filter(source_id__in=source_ids, group="").update(group=group)

    featured_defaults = {
        "color-edit": "color-style",
        "image-to-image": "style-transfer",
        "utility": "generation-tools",
        "text-to-image": "poster-design",
    }
    for category, group in featured_defaults.items():
        featured_model.objects.filter(category=category, group="").update(group=group)

    for model, group_field in ((parameter_model, "style_group"), (featured_model, "group")):
        scopes = model.objects.order_by().values_list("category", group_field).distinct()
        for category, group in scopes:
            items = list(model.objects.filter(category=category, **{group_field: group}).order_by("order", "id"))
            for index, item in enumerate(items, start=1):
                item.order = index
            if items:
                model.objects.bulk_update(items, ("order",))


class Migration(migrations.Migration):

    dependencies = [
        ("content", "0003_alter_featuredprompt_order_and_more"),
    ]

    operations = [
        migrations.RunPython(classify_missing_subcategories, migrations.RunPython.noop),
        migrations.AlterField(
            model_name="featuredprompt",
            name="group",
            field=models.CharField(db_index=True, max_length=64, verbose_name="子分类"),
        ),
        migrations.AlterField(
            model_name="parameteroption",
            name="style_group",
            field=models.CharField(db_index=True, max_length=64, verbose_name="子分类"),
        ),
    ]
