# Project Instructions

Before generating, replacing, cropping, or connecting any image asset in this repository, read all of:

1. `PROJECT_IMAGE_GENERATION_STANDARD.md`
2. `skills/photo-pltb/SKILL.md`
3. `skills/photo-pltb/references/project-notes.md`

These files are mandatory project context for every image-related task. Do not reuse an existing parameter image for a new item, do not accept neighboring-panel bleed, and do not rely on CSS cropping to conceal a contaminated asset.

For frontend changes, preserve the fixed parameter-card frame size. Long navigation labels may wrap to two lines, but text must never overlap, clip, or force horizontal scrolling.

When the user asks to add featured prompts, follow the mandatory workflow in `PROJECT_IMAGE_GENERATION_STANDARD.md` before editing data:

1. Search the backend seed data, frontend featured prompts, and parameter library for exact duplicates and semantic near-duplicates.
2. If a duplicate or very similar item exists, report it to the user and ask whether to still add a new item.
3. If no duplicate exists, add the featured prompt, generate fresh matching original/result images, and connect the assets.
4. If the corresponding style or use case is missing from the prompt generator, add a concise parameter item for that style/use case only. Do not copy the full featured-prompt workflow into the parameter prompt.
5. If a similar prompt-generator parameter already exists, do not create another one.

The canonical local project lives at `D:\图片提示词生成器`. The old C drive location is only a jump path for compatibility; do not move generated caches or working copies back to C.
