# PHOTO_PLTB Project Notes

## Why This Skill Exists

The prompt-generator project needs many small visual reference cards. Generating one image per parameter works for highly distinct styles, but it is slow and token-expensive for large similar sets. The efficient pattern is:

1. Generate one contact sheet containing many related visuals.
2. Crop the contact sheet into individual parameter images.
3. Save each crop under the parameter ID.
4. Verify every parameter has a unique asset.

## Lessons From This Project

- Artist-style cards were first fixed by generating independent `artist-*.png` images because the previous implementation reused unrelated style images.
- Clothing cards were generated efficiently as contact sheets by subgroup, then cropped into 85 individual `clothing-*.png` assets.
- Some generated contact sheets may ignore the requested grid. Example: a requested `4x3` skirt/dress sheet came back as `5x2`; crop using the actual grid, not the requested grid.
- UI labels should remain overlay text in the application. Do not bake Chinese labels into generated images.
- For cards with sliders or overlays, keep the raw image clean and visually centered so UI elements do not cover the key feature.
- Keep originals in the generated-images folder, and copy/crop into the project asset directory.

## Batch Grouping Heuristics

Use contact sheets when items share the same visual grammar:

- Clothing: tops, outerwear, pants, skirts/dresses, uniforms, traditional clothing, fantasy clothing, accessories, material/fit.
- Backgrounds: paper, fabric, color boards, studio sweeps, natural textures, metallic or glass surfaces.
- Layouts: left whitespace, centered subject, top title area, poster split, product hero, social cover.
- Camera/composition: camera angle, focal length, subject placement, multi-person relationship.
- Materials: metal, glass, wood, ceramic, leather, textile, transparent, satin, lace.
- Lighting: soft light, hard light, backlight, neon, fog, golden hour, low-key, high-key.

Prefer individual imagegen calls when items need radically different scenes or cultural/art-historical visual languages.

## Imagegen Prompt Checklist

Every batch prompt should include:

- `contact sheet`
- exact grid size if known
- exact reading order
- `no text, no labels, no logos, no watermark`
- clear panel separation
- consistent lighting/background
- visual clarity of the parameter
- horizontal overall image

Avoid:

- brand names and copyrighted characters
- readable text
- baked-in Chinese labels
- overly similar panels
- vague terms like “nice style” without visual features

## Validation Checklist

Before final response:

- Expected asset count equals generated asset count.
- No duplicate parameter IDs.
- No duplicate Chinese display names unless intentionally different categories use the same term.
- Every `image` path referenced by data exists.
- Type check passes if app data changed.
- Production build passes when feasible.
- Every crop is inspected with its full frame visible (`contain`), not only in a center-cropped preview.
- No top, bottom, left, or right strip may contain another panel, divider, label, or unrelated subject.
- Use the repository-wide rules in `PROJECT_IMAGE_GENERATION_STANDARD.md` before every image batch.

## Example: Clothing Batch

Prompt:

```text
Create a 4 by 4 fashion reference contact sheet for an AI prompt generator, no text, no labels, no logos, no watermark. Each panel is a clean studio fashion card with a neutral fully clothed model or mannequin clearly showing one garment. Reading order left to right, top to bottom: long sleeve top, short sleeve top, sleeveless top, tank top, camisole, turtleneck top, V-neck top, button shirt, plain T-shirt, sweatshirt, knit sweater, off-shoulder top, crop top, oversized shirt. Consistent soft studio lighting, simple muted backgrounds, clear clothing silhouette, horizontal overall image.
```

Crop command:

```powershell
& $python .\skills\photo-pltb\scripts\crop_contact_sheet.py --source "sheet.png" --output-dir "public\assets\parameters" --cols 4 --rows 4 --ids "clothing-long-sleeve,clothing-short-sleeve,clothing-sleeveless-top,clothing-tank-top,clothing-camisole,clothing-turtleneck,clothing-v-neck,clothing-button-shirt,clothing-t-shirt,clothing-sweatshirt,clothing-knit-sweater,clothing-off-shoulder,clothing-crop-top,clothing-oversized-shirt"
```
