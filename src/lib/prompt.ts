import type { CategoryId, ModelFormat, PromptInputs, PromptParameter, SelectedParameter } from "../types";

const categoryOrder: CategoryId[] = [
  "purpose",
  "style",
  "artist-style",
  "character",
  "ethnicity",
  "clothing",
  "hair-makeup",
  "pose",
  "expression",
  "ethnic-style",
  "scene",
  "era",
  "story-action",
  "mood",
  "props",
  "layout",
  "background",
  "layout-style",
  "framing",
  "camera",
  "lighting",
  "render",
  "visual-effect",
  "color-grading",
  "color-material"
];

const categoryLabels: Record<CategoryId, { zh: string; en: string }> = {
  purpose: { zh: "图片用途", en: "Purpose" },
  style: { zh: "画面风格", en: "Style" },
  "artist-style": { zh: "艺术家风格", en: "Artist Style" },
  character: { zh: "人物设定", en: "Character" },
  ethnicity: { zh: "人物族裔 / 外貌参考", en: "Ethnicity And Appearance Reference" },
  clothing: { zh: "人物衣着", en: "Clothing" },
  "hair-makeup": { zh: "发型妆造", en: "Hair And Makeup" },
  pose: { zh: "人物姿势", en: "Pose" },
  expression: { zh: "表情神态", en: "Expression" },
  "ethnic-style": { zh: "中国民族风格", en: "Chinese Ethnic Style" },
  scene: { zh: "场景环境", en: "Scene" },
  era: { zh: "时代世界观", en: "Era And Worldbuilding" },
  "story-action": { zh: "动作叙事", en: "Story Action" },
  mood: { zh: "情绪氛围", en: "Mood" },
  props: { zh: "道具元素", en: "Props" },
  layout: { zh: "排版留白", en: "Layout And Whitespace" },
  background: { zh: "背景质感", en: "Background Texture" },
  "layout-style": { zh: "排版风格", en: "Layout Style" },
  framing: { zh: "景别画幅", en: "Framing" },
  camera: { zh: "构图 / 镜头", en: "Composition And Camera" },
  lighting: { zh: "光线氛围", en: "Lighting" },
  render: { zh: "渲染质感", en: "Rendering" },
  "visual-effect": { zh: "视觉特效", en: "Visual Effects" },
  "color-grading": { zh: "后期调色", en: "Color Grading" },
  "color-material": { zh: "色彩与材质", en: "Color And Material" }
};

const aspectRatioOptions: Record<string, { zh: string; en: string; mj?: string }> = {
  auto: { zh: "自动比例", en: "automatic aspect ratio" },
  "1:1": { zh: "1:1 方图", en: "1:1 square aspect ratio", mj: "1:1" },
  "16:9": { zh: "16:9 横版宽屏", en: "16:9 landscape widescreen aspect ratio", mj: "16:9" },
  "9:16": { zh: "9:16 竖版全屏", en: "9:16 vertical full-screen aspect ratio", mj: "9:16" },
  "4:3": { zh: "4:3 传统横版", en: "4:3 classic landscape aspect ratio", mj: "4:3" },
  "3:4": { zh: "3:4 传统竖版", en: "3:4 classic portrait aspect ratio", mj: "3:4" },
  "3:2": { zh: "3:2 摄影横版", en: "3:2 photographic landscape aspect ratio", mj: "3:2" },
  "2:3": { zh: "2:3 摄影竖版", en: "2:3 photographic portrait aspect ratio", mj: "2:3" },
  "21:9": { zh: "21:9 超宽电影画幅", en: "21:9 ultrawide cinematic aspect ratio", mj: "21:9" }
};

const clarityOptions: Record<string, { zh: string; en: string }> = {
  standard: { zh: "标准清晰度，画面干净完整", en: "standard clarity, clean complete image" },
  high: { zh: "高清画质，细节清晰，主体明确", en: "high-definition quality, clear details, readable subject" },
  ultra: { zh: "超清画质，丰富细节，边缘清晰", en: "ultra-clear quality, rich details, crisp edges" },
  "4k": { zh: "4K 级清晰度，高分辨率细节，适合放大查看", en: "4K-level clarity, high-resolution detail, suitable for close inspection" }
};

const qualityZh = "画面完整，主体明确，结构合理，细节干净，无水印";
const qualityEn = "complete composition, readable subject, coherent structure, clean details, no watermark";

function cleanParts(parts: Array<string | undefined>) {
  return parts.map((part) => part?.trim()).filter(Boolean) as string[];
}

function formatWeight(weight: number) {
  return Number(weight.toFixed(1)).toString();
}

function normalizeTokens(value: string) {
  return value
    .split(/[,，、\n]/)
    .map((token) => token.trim())
    .filter(Boolean);
}

function uniqueTokens(tokens: string[]) {
  const seen = new Set<string>();
  return tokens.filter((token) => {
    const key = token.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function sortSelected(parameters: PromptParameter[], selected: SelectedParameter[]) {
  const selectedById = new Map(selected.map((item) => [item.id, item.weight]));

  return parameters
    .filter((parameter) => selectedById.has(parameter.id))
    .sort((a, b) => {
      const categoryDelta = categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category);
      if (categoryDelta !== 0) return categoryDelta;
      return parameters.indexOf(a) - parameters.indexOf(b);
    })
    .map((parameter) => ({ parameter, weight: selectedById.get(parameter.id) ?? parameter.defaultWeight }));
}

function groupSelected(selectedItems: ReturnType<typeof sortSelected>) {
  return categoryOrder
    .map((category) => ({
      category,
      items: selectedItems.filter(({ parameter }) => parameter.category === category)
    }))
    .filter((group) => group.items.length > 0);
}

function weightNoteZh(weight: number) {
  if (weight >= 1.4) return `权重 ${formatWeight(weight)}，优先表现`;
  if (weight <= 0.7) return `权重 ${formatWeight(weight)}，弱化为辅助`;
  return `权重 ${formatWeight(weight)}`;
}

function weightNoteEn(weight: number) {
  if (weight >= 1.4) return `weight ${formatWeight(weight)}, high priority`;
  if (weight <= 0.7) return `weight ${formatWeight(weight)}, subtle support`;
  return `weight ${formatWeight(weight)}`;
}

function midjourneyWeightedPhrase(enPrompt: string, weight: number) {
  const phrase = enPrompt.replace(/\s+/g, " ").trim();
  if (Math.abs(weight - 1) < 0.05) return phrase;
  return `${phrase}::${formatWeight(weight)}`;
}

function stableDiffusionWeightedPhrase(enPrompt: string, weight: number) {
  const phrase = enPrompt.replace(/\s+/g, " ").trim();
  if (Math.abs(weight - 1) < 0.05) return phrase;
  return `(${phrase}:${formatWeight(weight)})`;
}

function buildZhCategoryBlock(group: ReturnType<typeof groupSelected>[number]) {
  const label = categoryLabels[group.category].zh;
  const items = group.items.map(({ parameter, weight }) => `${parameter.zhName}（${weightNoteZh(weight)}）：${parameter.zhPrompt}`);
  return `${label}：\n${items.join("\n")}`;
}

function buildEnCategoryBlock(group: ReturnType<typeof groupSelected>[number], model: ModelFormat) {
  const label = categoryLabels[group.category].en;
  const items = group.items.map(({ parameter, weight }) => {
    if (model === "midjourney") return midjourneyWeightedPhrase(parameter.enPrompt, weight);
    if (model === "stable-diffusion") return `${parameter.enName} [${weightNoteEn(weight)}]: ${stableDiffusionWeightedPhrase(parameter.enPrompt, weight)}`;
    return `${parameter.enName} [${weightNoteEn(weight)}]: ${parameter.enPrompt}`;
  });
  return `${label}:\n${items.join("\n")}`;
}

function buildNegativeBlock(negativePrompt: string, language: "zh" | "en") {
  if (!negativePrompt) return undefined;
  return language === "zh" ? `负向提示词：\n${negativePrompt}` : `Negative prompt:\n${negativePrompt}`;
}

export function buildPrompt(
  inputs: PromptInputs,
  selected: SelectedParameter[],
  parameters: PromptParameter[],
  model: ModelFormat
) {
  const selectedItems = sortSelected(parameters, selected);
  const groupedItems = groupSelected(selectedItems);
  const subject = inputs.subjectZh.trim();
  const parameterNegatives = selectedItems.flatMap(({ parameter }) => parameter.negative ?? []);
  const negativeTokens = uniqueTokens([...normalizeTokens(inputs.avoid), ...parameterNegatives]);
  const negativePrompt = negativeTokens.join(", ");
  const aspectRatio = aspectRatioOptions[inputs.aspectRatio] ?? aspectRatioOptions.auto;
  const clarity = clarityOptions[inputs.clarity] ?? clarityOptions.high;
  const aspectZh = inputs.aspectRatio === "auto" ? undefined : aspectRatio.zh;
  const aspectEn = inputs.aspectRatio === "auto" ? undefined : aspectRatio.en;

  const zhPrompt = cleanParts([
    subject ? `主体：\n${subject}` : undefined,
    ...groupedItems.map(buildZhCategoryBlock),
    aspectZh ? `图片比例：\n${aspectZh}` : undefined,
    `清晰度：\n${clarity.zh}`,
    `质量要求：\n${qualityZh}`
  ]).join("\n\n");

  const enCoreBlocks = cleanParts([
    subject ? `Subject:\n${subject}` : undefined,
    ...groupedItems.map((group) => buildEnCategoryBlock(group, model)),
    aspectEn ? `Aspect ratio:\n${aspectEn}` : undefined,
    `Clarity:\n${clarity.en}`,
    `Quality:\n${qualityEn}`
  ]);

  const enPrompt =
    model === "midjourney"
      ? `${enCoreBlocks.join("\n\n")}\n\n--style raw --v 6${aspectRatio.mj ? ` --ar ${aspectRatio.mj}` : ""}`
      : enCoreBlocks.join("\n\n");

  const finalPromptZh = cleanParts([zhPrompt, buildNegativeBlock(negativePrompt, "zh")]).join("\n\n");
  const finalPromptEn =
    model === "midjourney" && negativePrompt
      ? `${enPrompt}\n\n--no ${negativePrompt}`
      : cleanParts([enPrompt, buildNegativeBlock(negativePrompt, "en")]).join("\n\n");

  return {
    zhPrompt,
    enPrompt,
    finalPrompt: finalPromptEn,
    finalPromptZh,
    finalPromptEn,
    negativePrompt,
    selectedItems
  };
}
