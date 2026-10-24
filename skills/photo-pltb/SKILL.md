---
name: photo-pltb
description: Batch reference-image production for prompt-generator parameter cards. Use only when the user explicitly invokes PHOTO_PLTB/photo-pltb, or when working in the 图片提示词生成器 project and needing to generate many parameter reference images efficiently as contact sheets, crop them into individual assets, and verify that every parameter has a unique image. Do not use for ordinary one-off image generation.
---

# PHOTO_PLTB

Use this skill to generate many reference-card images with fewer imagegen calls by creating contact sheets, cropping them into individual assets, and validating the final resource set.

## Workflow

1. Group related parameters into visual batches.
   - Use contact sheets for same-domain options such as clothing, backgrounds, layouts, materials, lighting variants, camera angles, and style subfamilies.
   - Use individual imagegen calls only when each item needs highly distinct composition or when a contact sheet would blur the visual language.

2. Write one imagegen prompt per batch.
   - Ask for a clean contact sheet with fixed reading order: left to right, top to bottom.
   - Specify the expected grid size, item list, no text, no labels, no logos, no watermark.
   - Require a continuous visible white frame between every panel. Generated grid dimensions remain untrusted until inspected.
   - Keep labels in the app UI, not baked into the image.

3. Generate the contact sheet with `imagegen`.
   - Copy the generated file from the default generated-images folder before using it.
   - Do not reuse old parameter images unless the user explicitly asks for placeholders.
   - If moderation blocks a prompt, rewrite it as neutral visual-language description.

4. Crop the sheet into asset files.
   - Use `scripts/crop_contact_sheet.py` from this skill.
   - The cropper detects the actual grid from continuous visible divider bands. Optional `--cols` and `--rows` validate the result; they do not drive equal splitting.
   - If imagegen ignores the requested grid, keep the actual detected grid and update the ID sequence. A mismatch must fail before any asset is written.
   - Always crop inside the visible divider with a positive safety inset. The project tool defaults to 12 px and rejects zero inset.
   - If there is no continuous divider frame, measure every cell and pass a reviewed `--bounds-file`. Never silently fall back to equal-size cells.
   - `--grid-mode equal` is a manual legacy escape hatch only. It must never be the automatic path for generated sheets.
   - Never rely on CSS `object-fit: cover` to hide grid contamination; final files must contain no pixels from neighboring panels.
   - Save output names exactly as parameter IDs, for example `clothing-long-sleeve.png`.

5. Validate.
   - Check every expected ID has an image at the referenced path.
   - Check duplicate IDs and duplicate display names before finalizing.
   - Run the project type/build checks when assets are connected to app data.
   - Build a labeled audit montage and inspect all four edges of every crop before connecting it to data.
   - Preview cards with `object-fit: contain`; this exposes contamination that `cover` can conceal.

## Commands

Crop a sheet:

```powershell
& $python .\skills\photo-pltb\scripts\crop_contact_sheet.py `
  --source "C:\path\to\sheet.png" `
  --output-dir "public\assets\parameters" `
  --cols 4 `
  --rows 3 `
  --ids "item-a,item-b,item-c" `
  --write-bounds "tmp\reviewed-bounds.json"
```

The command above aborts if the visible frame is not actually `4x3`. Omit `--cols` and `--rows` when the model changed the grid and you have already prepared an ID list matching the detected reading order.

Check expected assets:

```powershell
& $python .\skills\photo-pltb\scripts\check_expected_assets.py `
  --data-file "src\data\clothingParameters.ts" `
  --asset-dir "public\assets\parameters" `
  --prefix "clothing-" `
  --ext ".png"
```

## Prompt Pattern

Use this contact-sheet pattern and adapt the item list:

```text
Create a {cols} by {rows} reference contact sheet for an AI prompt generator, no text, no labels, no logos, no watermark. Each panel is a clean reference card clearly demonstrating one parameter. Reading order left to right, top to bottom: {item list}. Consistent lighting, clear silhouette/material/style, simple background. Use a continuous, clearly visible white frame around and between every panel; no subject, shadow, texture, or color may cross that frame. Horizontal overall image.
```

For fashion/clothing:

```text
Create a {cols} by {rows} fashion reference contact sheet for an AI prompt generator, no text, no labels, no logos, no watermark. Each panel is a clean studio fashion card with a neutral fully clothed model or mannequin clearly showing one garment. Reading order left to right, top to bottom: {garment list}. Consistent soft studio lighting, simple muted backgrounds, clear clothing silhouette and fabric texture. Use a continuous, clearly visible white frame around and between every panel; no garment, person, shadow, or background may cross that frame. Horizontal overall image.
```

## Project Notes

Read `references/project-notes.md` when you need the project-specific history, validation checklist, or examples from the 图片提示词生成器 asset workflow.
