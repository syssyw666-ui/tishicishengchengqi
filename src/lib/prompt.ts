import type { ModelFormat, PromptInputs, PromptParameter, SelectedParameter } from "../types";

const categoryOrder = [
  "purpose",
  "style",
  "artist-style",
  "character",
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

const aspectRatioOptions: Record<string, { zh: string; en: string; mj?: string }> = {
  auto: { zh: "图片比例：自动", en: "automatic aspect ratio" },
  "1:1": { zh: "图片比例：1:1 方图", en: "1:1 square aspect ratio", mj: "1:1" },
  "16:9": { zh: "图片比例：16:9 横版宽屏", en: "16:9 landscape widescreen aspect ratio", mj: "16:9" },
  "9:16": { zh: "图片比例：9:16 竖版全屏", en: "9:16 vertical full-screen aspect ratio", mj: "9:16" },
  "4:3": { zh: "图片比例：4:3 横版", en: "4:3 classic landscape aspect ratio", mj: "4:3" },
  "3:4": { zh: "图片比例：3:4 竖版", en: "3:4 classic portrait aspect ratio", mj: "3:4" },
  "3:2": { zh: "图片比例：3:2 摄影横版", en: "3:2 photographic landscape aspect ratio", mj: "3:2" },
  "2:3": { zh: "图片比例：2:3 摄影竖版", en: "2:3 photographic portrait aspect ratio", mj: "2:3" },
  "21:9": { zh: "图片比例：21:9 超宽电影画幅", en: "21:9 ultrawide cinematic aspect ratio", mj: "21:9" }
};

const clarityOptions: Record<string, { zh: string; en: string }> = {
  standard: { zh: "标准清晰度，画面干净完整", en: "standard clarity, clean complete image" },
  high: { zh: "高清画质，细节清晰，主体明确", en: "high-definition quality, clear details, readable subject" },
  ultra: { zh: "超清画质，丰富细节，边缘清晰", en: "ultra-clear quality, rich details, crisp edges" },
  "4k": { zh: "4K 级清晰度，高分辨率细节，适合放大查看", en: "4K-level clarity, high-resolution detail, suitable for close inspection" }
};

const qualityZh = "画面完整，主体明确，无水印";
const qualityEn = "complete composition, readable subject, no watermark";

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

function weightedEnglish(enPrompt: string, weight: number, model: ModelFormat) {
  if (model === "midjourney") {
    return `${enPrompt}::${formatWeight(weight)}`;
  }

  if (model === "stable-diffusion") {
    return `(${enPrompt}:${formatWeight(weight)})`;
  }

  if (weight >= 1.4) return `strong emphasis on ${enPrompt}`;
  if (weight <= 0.7) return `subtle hint of ${enPrompt}`;
  return enPrompt;
}

function weightedChinese(zhPrompt: string, weight: number) {
  if (weight >= 1.4) return `强烈强调${zhPrompt}`;
  if (weight <= 0.7) return `轻微体现${zhPrompt}`;
  return zhPrompt;
}

export function buildPrompt(
  inputs: PromptInputs,
  selected: SelectedParameter[],
  parameters: PromptParameter[],
  model: ModelFormat
) {
  const selectedItems = sortSelected(parameters, selected);
  const zhParameterParts = selectedItems.map(({ parameter, weight }) => `${parameter.zhPrompt}（权重 ${formatWeight(weight)}）`);
  const enParameterParts = selectedItems.map(({ parameter, weight }) => weightedEnglish(parameter.enPrompt, weight, model));
  const zhModelParts = selectedItems.map(({ parameter, weight }) => weightedChinese(parameter.zhPrompt, weight));
  const parameterNegatives = selectedItems.flatMap(({ parameter }) => parameter.negative ?? []);
  const negativeTokens = uniqueTokens([...normalizeTokens(inputs.avoid), ...parameterNegatives]);
  const aspectRatio = aspectRatioOptions[inputs.aspectRatio] ?? aspectRatioOptions.auto;
  const clarity = clarityOptions[inputs.clarity] ?? clarityOptions.high;
  const aspectZh = inputs.aspectRatio === "auto" ? undefined : aspectRatio.zh;
  const aspectEn = inputs.aspectRatio === "auto" ? undefined : aspectRatio.en;

  const zhPrompt = cleanParts([
    inputs.subjectZh ? `绘画主体：${inputs.subjectZh}` : "绘画主体：请填写主体",
    ...zhParameterParts,
    aspectZh,
    clarity.zh,
    qualityZh
  ]).join("，");

  const enPrompt = cleanParts([
    inputs.subjectZh || "the main subject described by the user",
    ...enParameterParts,
    aspectEn,
    clarity.en,
    qualityEn
  ]).join(", ");

  const chineseModelPrompt = cleanParts([
    inputs.subjectZh || "请填写绘画主体",
    ...zhModelParts,
    aspectZh,
    clarity.zh,
    qualityZh
  ]).join("，");

  const modelPrompt =
    model === "midjourney"
      ? `${enPrompt} --style raw --v 6${aspectRatio.mj ? ` --ar ${aspectRatio.mj}` : ""}`
      : model === "stable-diffusion"
        ? enPrompt
        : model === "doubao-qwen"
          ? `${chineseModelPrompt}。适合豆包/通义千问图像生成，语言直接清晰，避免版权角色和品牌词。`
          : enPrompt;

  return {
    zhPrompt,
    enPrompt: modelPrompt,
    negativePrompt: negativeTokens.join(", "),
    selectedItems
  };
}
