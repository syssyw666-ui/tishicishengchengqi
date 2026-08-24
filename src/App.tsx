import { Check, ChevronDown, Copy, EyeOff, ImageIcon, Languages, LogIn, MessageSquare, Plus, RotateCcw, Save, Search, Send, Shield, Sparkles, Star, Trash2, X } from "lucide-react";
import { useMemo, useState, type ChangeEvent } from "react";
import { featuredPromptCategories, featuredPromptGroups, featuredPrompts } from "./data/featuredPrompts";
import { categories, categoryGroups, parameters } from "./data/parameters";
import { buildPrompt } from "./lib/prompt";
import type { FeaturedPromptCategory, FeaturedPromptItem } from "./data/featuredPrompts";
import type { CategoryId, PromptInputs, PromptParameter, SelectedParameter } from "./types";

type UiLanguage = "zh" | "en";

const aspectRatioOptions = [
  { id: "auto", zhName: "自动比例", enName: "Auto", zhNote: "交给模型判断", enNote: "let the model decide" },
  { id: "1:1", zhName: "1:1 方图", enName: "1:1 Square", zhNote: "头像 / 图标", enNote: "avatar / icon" },
  { id: "16:9", zhName: "16:9 横版", enName: "16:9 Landscape", zhNote: "封面 / 视频", enNote: "cover / video" },
  { id: "9:16", zhName: "9:16 竖版", enName: "9:16 Portrait", zhNote: "手机 / Story", enNote: "mobile / story" },
  { id: "4:3", zhName: "4:3 横版", enName: "4:3 Landscape", zhNote: "传统屏幕", enNote: "classic screen" },
  { id: "3:4", zhName: "3:4 竖版", enName: "3:4 Portrait", zhNote: "海报 / 人像", enNote: "poster / portrait" },
  { id: "3:2", zhName: "3:2 摄影横版", enName: "3:2 Photo Landscape", zhNote: "照片横幅", enNote: "photo banner" },
  { id: "2:3", zhName: "2:3 摄影竖版", enName: "2:3 Photo Portrait", zhNote: "写真 / 封面", enNote: "portrait / cover" },
  { id: "21:9", zhName: "21:9 超宽", enName: "21:9 Ultrawide", zhNote: "电影宽银幕", enNote: "cinematic widescreen" }
];

const clarityOptions = [
  { id: "standard", zhName: "标准", enName: "Standard", zhNote: "轻量快速", enNote: "light and fast" },
  { id: "high", zhName: "高清", enName: "High", zhNote: "默认推荐", enNote: "recommended default" },
  { id: "ultra", zhName: "超清", enName: "Ultra", zhNote: "细节更多", enNote: "more detail" },
  { id: "4k", zhName: "4K 级", enName: "4K Level", zhNote: "放大查看", enNote: "close inspection" }
];

const uiText = {
  zh: {
    language: "界面语言",
    brandTitle: "图片提示词生成器",
    brandSubtitle: "用参考图点选参数，生成中英双语生图提示词。",
    generator: "提示词生成器",
    more: "更多",
    subject: "绘画主体",
    subjectPlaceholder: "例如：一位穿着红色披风的未来考古学家，站在巨型遗迹前",
    focusHint: "小提示：可以在主体描述里写清焦点位置，例如“焦点在人物眼睛”“画面重点在左侧产品”，用来控制视觉重点。",
    avoid: "不要出现的内容",
    avoidPlaceholder: "例如：低清晰度，畸形手，文字，水印，过曝",
    aspectRatio: "图片比例",
    clarity: "清晰度",
    featuredPrompts: "精选提示词",
    featuredHint: "常用修图、图生图、文生图和图片处理指令。",
    featuredSearchPlaceholder: "搜索精选提示词、用途或关键词...",
    imagePath: "图片路径",
    noImage: "无图片",
    close: "关闭",
    before: "原图",
    after: "效果图",
    promptAdmin: "精选提示词管理",
    admin: "管理后台",
    adminHint: "管理员可新增、隐藏、调整参数与提示词",
    reset: "重置",
    single: "单选",
    multi: "多选",
    selected: "已选",
    searchPlaceholder: "搜索参数、风格、材质...",
    selectedEmpty: "从中间图库选择风格、镜头、光线或用途。",
    collapse: "收起",
    expand: "展开",
    promptPreview: "提示词预览",
    zh: "中文",
    en: "English",
    finalZh: "最终版 · 中文",
    finalEn: "Final Prompt · English",
    copied: "已复制",
    copy: "复制",
    copyPrompt: "复制提示词",
    feedback: "意见建议",
    feedbackHint: "提交后会保存到管理员后台，管理员登录后可查看文字和图片。",
    feedbackPlaceholder: "写下你希望增加的风格、参数、使用问题或优化建议...",
    uploadImage: "插入图片",
    submit: "提交",
    removeImage: "移除图片",
    delete: "删除"
  },
  en: {
    language: "UI Language",
    brandTitle: "Image Prompt Generator",
    brandSubtitle: "Select visual reference cards to generate bilingual AI image prompts.",
    generator: "Prompt Generator",
    more: "More",
    subject: "Subject",
    subjectPlaceholder: "Example: a future archaeologist in a red cloak standing before a giant ruin",
    focusHint: "Tip: describe the focus position in the subject, such as “focus on the eyes” or “main focus on the left product”.",
    avoid: "Negative Prompt",
    avoidPlaceholder: "Example: low resolution, bad hands, text, watermark, overexposure",
    aspectRatio: "Aspect Ratio",
    clarity: "Clarity",
    featuredPrompts: "Featured Prompts",
    featuredHint: "Common retouching, image-to-image, text-to-image, and utility prompts.",
    featuredSearchPlaceholder: "Search featured prompts, use cases, or keywords...",
    imagePath: "Image Path",
    noImage: "No Image",
    close: "Close",
    before: "Before",
    after: "After",
    promptAdmin: "Featured Prompt Manager",
    admin: "Admin Panel",
    adminHint: "Admins can add, hide, and adjust parameters and prompt fragments.",
    reset: "Reset",
    single: "Single",
    multi: "Multi",
    selected: "Selected",
    searchPlaceholder: "Search parameters, styles, materials...",
    selectedEmpty: "Select styles, camera, lighting, or purpose from the gallery.",
    collapse: "Collapse",
    expand: "Expand",
    promptPreview: "Prompt Preview",
    zh: "中文",
    en: "English",
    finalZh: "最终版 · 中文",
    finalEn: "Final Prompt · English",
    copied: "Copied",
    copy: "Copy",
    copyPrompt: "Copy Prompt",
    feedback: "Feedback",
    feedbackHint: "Submitted feedback is saved in the admin panel for review.",
    feedbackPlaceholder: "Suggest styles, parameters, issues, or improvements...",
    uploadImage: "Attach Image",
    submit: "Submit",
    removeImage: "Remove Image",
    delete: "Delete"
  }
} satisfies Record<UiLanguage, Record<string, string>>;

const categoryDescriptionEn: Partial<Record<CategoryId, string>> = {
  style: "Controls the overall visual language. Multiple choices can be mixed.",
  "artist-style": "References art-history brushwork, composition, color, and school language.",
  character: "Controls age stage, body type, profession, social role, fantasy, or sci-fi identity.",
  ethnicity: "Neutral appearance references for region, skin tone, facial features, and hair texture.",
  clothing: "Controls clothing type, sleeves, bottoms, outerwear, uniforms, traditional garments, and accessories.",
  "hair-makeup": "Controls hair length, hairstyle, hair movement, and natural or stylized makeup.",
  pose: "Controls standing, sitting, lying, movement, dance, action, interaction, and camera-ready poses.",
  expression: "Controls facial expression, eye expression, and character temperament.",
  "ethnic-style": "References Chinese ethnic patterns, crafts, architecture, and color inspiration.",
  scene: "Defines the environment, space, and background type.",
  era: "Defines time period, worldbuilding, and cultural context.",
  "story-action": "Controls the event, interaction, and narrative action happening in the image.",
  mood: "Defines emotional atmosphere and narrative feeling.",
  props: "Controls handheld objects, scene supports, packaging, and narrative props.",
  layout: "Controls subject position, whitespace direction, and title safe areas.",
  background: "Controls background color, paper, fabric, metal, natural, or studio texture.",
  "layout-style": "Controls layout aesthetics and design language.",
  framing: "Controls the subject scale in the frame. Single choice only.",
  camera: "Controls composition rules, visual guidance, angle, focal length, and camera movement.",
  lighting: "Controls light, weather, and atmosphere.",
  render: "Controls final texture, detail, rendering algorithm, and material feel.",
  "visual-effect": "Controls particles, smoke, fire, glitches, light trails, and surreal effects.",
  purpose: "Tells the model the intended usage of the image.",
  "color-grading": "Controls post-processing, film tone, camera look, and color grading.",
  "color-material": "Enhances color palette, surface material, and tactile feel."
};

const groupNameEn: Record<string, string> = {
  all: "All",
  base: "Basic",
  anime: "Animation / Anime",
  eastern: "Eastern / Folk",
  "photo-film-3d": "Photo / Film / 3D",
  "design-retro": "Design / Retro",
  "craft-print": "Craft / Print",
  region: "Regional Reference",
  "skin-tone": "Skin Tone",
  "facial-feature": "Facial Features",
  "hair-texture": "Natural Hair Texture",
  mixed: "Mixed / Group",
  "age-stage": "Age Stage",
  "body-type": "Body Type",
  profession: "Profession",
  "social-role": "Social Role",
  fantasy: "Fantasy",
  "sci-fi": "Sci-Fi",
  "negative-space": "Whitespace",
  "subject-position": "Subject Position",
  material: "Material",
  color: "Color",
  fabric: "Fabric",
  "camera-angle": "Camera Angle",
  motion: "Motion",
  natural: "Natural",
  interior: "Interior",
  dramatic: "Dramatic",
  realism: "Realism",
  stylized: "Stylized",
  elemental: "Elemental",
  atmosphere: "Atmosphere",
  social: "Social",
  design: "Design",
  cover: "Cover",
  commercial: "Commercial",
  palette: "Palette",
  industrial: "Industrial",
  translucent: "Translucent"
};

const defaultInputs: PromptInputs = {
  subjectZh: "",
  avoid: "低清晰度，模糊，噪点，过曝，欠曝，畸形身体，畸形手，坏手，多手指，少手指，融合手指，断指，扭曲手指，畸形脸，五官错位，斜视，坏眼睛，多余肢体，缺失肢体，比例错误，透视错误，重复人物，文字，乱码，水印，logo，边框，裁切主体，画面脏污，压缩痕迹，马赛克，低质量",
  aspectRatio: "auto",
  clarity: "high"
};

type ParameterOverride = Partial<Omit<PromptParameter, "id">>;
type ParameterOverrides = Record<string, ParameterOverride>;
type FeaturedPromptOverride = Partial<Omit<FeaturedPromptItem, "id">>;
type FeaturedPromptOverrides = Record<string, FeaturedPromptOverride>;

interface AdminDraft {
  id: string;
  category: CategoryId;
  styleGroup: string;
  zhName: string;
  enName: string;
  image: string;
  zhPrompt: string;
  enPrompt: string;
  negative: string;
}

interface FeaturedDraft {
  id: string;
  category: FeaturedPromptCategory;
  group: string;
  zhTitle: string;
  enTitle: string;
  zhDescription: string;
  enDescription: string;
  prompt: string;
  originalImage: string;
  resultImage: string;
  image: string;
}

interface FeedbackImage {
  name: string;
  size: number;
  preview: string;
  dataUrl: string;
}

interface FeedbackEntry {
  id: string;
  text: string;
  imageName?: string;
  imageSize?: number;
  imageDataUrl?: string;
  createdAt: string;
}

const customParametersKey = "prompt-generator-custom-parameters-v1";
const parameterOverridesKey = "prompt-generator-parameter-overrides-v1";
const hiddenParametersKey = "prompt-generator-hidden-parameters-v1";
const feedbackEntriesKey = "prompt-generator-feedback-entries-v1";
const customFeaturedPromptsKey = "prompt-generator-custom-featured-prompts-v1";
const featuredPromptOverridesKey = "prompt-generator-featured-prompt-overrides-v1";
const hiddenFeaturedPromptsKey = "prompt-generator-hidden-featured-prompts-v1";

function loadLocal<T>(key: string, fallback: T): T {
  try {
    const stored = window.localStorage.getItem(key);
    return stored ? (JSON.parse(stored) as T) : fallback;
  } catch {
    return fallback;
  }
}

function normalizeSearch(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

function fuzzyMatch(value: string, needle: string) {
  const haystack = normalizeSearch(value);
  if (!needle) return true;
  if (haystack.includes(needle)) return true;

  let needleIndex = 0;
  for (const char of haystack) {
    if (char === needle[needleIndex]) needleIndex += 1;
    if (needleIndex >= needle.length) return true;
  }
  return false;
}

function saveLocal<T>(key: string, value: T) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

function parseNegative(value: string) {
  return value
    .split(/[,，\n]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function toAdminDraft(parameter?: PromptParameter): AdminDraft {
  return {
    id: parameter?.id ?? `custom-${Date.now()}`,
    category: parameter?.category ?? "style",
    styleGroup: parameter?.styleGroup ?? "",
    zhName: parameter?.zhName ?? "",
    enName: parameter?.enName ?? "",
    image: parameter?.image ?? "/assets/parameters/style-photorealistic.jpg",
    zhPrompt: parameter?.zhPrompt ?? "",
    enPrompt: parameter?.enPrompt ?? "",
    negative: parameter?.negative?.join(", ") ?? ""
  };
}

function draftToParameter(draft: AdminDraft): PromptParameter {
  return {
    id: draft.id.trim(),
    category: draft.category,
    styleGroup: draft.styleGroup.trim() || undefined,
    zhName: draft.zhName.trim(),
    enName: draft.enName.trim(),
    image: draft.image.trim() || "/assets/parameters/style-photorealistic.jpg",
    zhPrompt: draft.zhPrompt.trim(),
    enPrompt: draft.enPrompt.trim(),
    negative: parseNegative(draft.negative)
  };
}

function toFeaturedDraft(item?: FeaturedPromptItem): FeaturedDraft {
  return {
    id: item?.id ?? `featured-${Date.now()}`,
    category: item?.category ?? "text-to-image",
    group: item?.group ?? "",
    zhTitle: item?.zhTitle ?? "",
    enTitle: item?.enTitle ?? "",
    zhDescription: item?.zhDescription ?? "",
    enDescription: item?.enDescription ?? "",
    prompt: item?.prompt ?? "",
    originalImage: item?.originalImage ?? "",
    resultImage: item?.resultImage ?? "",
    image: item?.image ?? "/assets/parameters/style-cinematic.jpg"
  };
}

function draftToFeaturedPrompt(draft: FeaturedDraft): FeaturedPromptItem {
  return {
    id: draft.id.trim(),
    category: draft.category,
    group: draft.group.trim() || undefined,
    zhTitle: draft.zhTitle.trim(),
    enTitle: draft.enTitle.trim(),
    zhDescription: draft.zhDescription.trim(),
    enDescription: draft.enDescription.trim(),
    prompt: draft.prompt.trim(),
    originalImage: draft.originalImage.trim() || undefined,
    resultImage: draft.resultImage.trim() || undefined,
    image: draft.image.trim() || undefined
  };
}

function formatFileSize(size: number) {
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
  return `${(size / 1024 / 1024).toFixed(1)} MB`;
}

function readFileAsDataUrl(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

async function compressFeedbackImage(file: File) {
  const source = await readFileAsDataUrl(file);
  const image = new Image();
  image.src = source;

  await new Promise<void>((resolve, reject) => {
    image.onload = () => resolve();
    image.onerror = () => reject(new Error("图片读取失败"));
  });

  const maxEdge = 960;
  const scale = Math.min(1, maxEdge / Math.max(image.width, image.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(image.width * scale));
  canvas.height = Math.max(1, Math.round(image.height * scale));
  const context = canvas.getContext("2d");
  if (!context) return source;

  context.drawImage(image, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL("image/jpeg", 0.82);
}

export function App() {
  const [inputs, setInputs] = useState<PromptInputs>(defaultInputs);
  const [activeCategory, setActiveCategory] = useState<CategoryId>("style");
  const [search, setSearch] = useState("");
  const [selectedOnly, setSelectedOnly] = useState(false);
  const [activeGroupByCategory, setActiveGroupByCategory] = useState<Record<string, string>>({});
  const [checkedPanelOpen, setCheckedPanelOpen] = useState(true);
  const [promptLanguage, setPromptLanguage] = useState<"zh" | "en">("zh");
  const [uiLanguage, setUiLanguage] = useState<UiLanguage>("zh");
  const [selected, setSelected] = useState<SelectedParameter[]>([]);
  const [copied, setCopied] = useState<string | null>(null);
  const [brandMenuOpen, setBrandMenuOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"generator" | "featured">("generator");
  const [activeFeaturedCategory, setActiveFeaturedCategory] = useState<FeaturedPromptCategory>("color-edit");
  const [activeFeaturedGroup, setActiveFeaturedGroup] = useState("all");
  const [featuredSearch, setFeaturedSearch] = useState("");
  const [customParameters, setCustomParameters] = useState<PromptParameter[]>(() => loadLocal(customParametersKey, []));
  const [parameterOverrides, setParameterOverrides] = useState<ParameterOverrides>(() => loadLocal(parameterOverridesKey, {}));
  const [hiddenParameters, setHiddenParameters] = useState<string[]>(() => loadLocal(hiddenParametersKey, []));
  const [customFeaturedPrompts, setCustomFeaturedPrompts] = useState<FeaturedPromptItem[]>(() => loadLocal(customFeaturedPromptsKey, []));
  const [featuredPromptOverrides, setFeaturedPromptOverrides] = useState<FeaturedPromptOverrides>(() => loadLocal(featuredPromptOverridesKey, {}));
  const [hiddenFeaturedPrompts, setHiddenFeaturedPrompts] = useState<string[]>(() => loadLocal(hiddenFeaturedPromptsKey, []));
  const [adminAuthed, setAdminAuthed] = useState(false);
  const [adminLoginOpen, setAdminLoginOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const [loginForm, setLoginForm] = useState({ account: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [adminDraft, setAdminDraft] = useState<AdminDraft>(() => toAdminDraft());
  const [adminEditingId, setAdminEditingId] = useState<string | null>(null);
  const [adminSection, setAdminSection] = useState<"parameters" | "featured">("parameters");
  const [featuredDraft, setFeaturedDraft] = useState<FeaturedDraft>(() => toFeaturedDraft());
  const [featuredEditingId, setFeaturedEditingId] = useState<string | null>(null);
  const [adminSearch, setAdminSearch] = useState("");
  const [adminNotice, setAdminNotice] = useState("");
  const [feedbackText, setFeedbackText] = useState("");
  const [feedbackImage, setFeedbackImage] = useState<FeedbackImage | null>(null);
  const [feedbackStatus, setFeedbackStatus] = useState("");
  const [feedbackEntries, setFeedbackEntries] = useState<FeedbackEntry[]>(() => loadLocal(feedbackEntriesKey, []));

  const allParameters = useMemo(() => {
    const hidden = new Set(hiddenParameters);
    const builtInParameters = parameters
      .filter((parameter) => !hidden.has(parameter.id))
      .map((parameter) => ({ ...parameter, ...parameterOverrides[parameter.id], id: parameter.id }));
    const visibleCustomParameters = customParameters.filter((parameter) => !hidden.has(parameter.id));
    return [...builtInParameters, ...visibleCustomParameters];
  }, [customParameters, hiddenParameters, parameterOverrides]);

  const adminParameters = useMemo(() => {
    const builtInParameters = parameters.map((parameter) => ({ ...parameter, ...parameterOverrides[parameter.id], id: parameter.id }));
    return [...builtInParameters, ...customParameters];
  }, [customParameters, parameterOverrides]);

  const allFeaturedPrompts = useMemo(() => {
    const hidden = new Set(hiddenFeaturedPrompts);
    const builtIn = featuredPrompts
      .filter((item) => !hidden.has(item.id))
      .map((item) => ({ ...item, ...featuredPromptOverrides[item.id], id: item.id }));
    const custom = customFeaturedPrompts.filter((item) => !hidden.has(item.id));
    return [...builtIn, ...custom];
  }, [customFeaturedPrompts, featuredPromptOverrides, hiddenFeaturedPrompts]);

  const adminFeaturedPrompts = useMemo(() => {
    const builtIn = featuredPrompts.map((item) => ({ ...item, ...featuredPromptOverrides[item.id], id: item.id }));
    return [...builtIn, ...customFeaturedPrompts];
  }, [customFeaturedPrompts, featuredPromptOverrides]);

  const selectedById = useMemo(() => new Map(selected.map((item) => [item.id, item])), [selected]);
  const t = uiText[uiLanguage];
  const switchTitle = viewMode === "featured" ? t.featuredPrompts : t.brandTitle;
  const switchSubtitle = viewMode === "featured" ? t.featuredHint : t.brandSubtitle;
  const activeCategoryInfo = categories.find((category) => category.id === activeCategory)!;
  const activeGroups = categoryGroups[activeCategory] ?? [];
  const activeGroup = activeGroupByCategory[activeCategory] ?? "all";

  const filteredParameters = useMemo(() => {
    const query = search.trim().toLowerCase();
    const hasQuery = Boolean(query);
    return allParameters.filter((parameter) => {
      const matchesCategory = selectedOnly || hasQuery || parameter.category === activeCategory;
      const matchesSelected = !selectedOnly || selectedById.has(parameter.id);
      const matchesActiveGroup =
        selectedOnly ||
        hasQuery ||
        activeGroups.length === 0 ||
        activeGroup === "all" ||
        (activeGroup === "base" ? !parameter.styleGroup || parameter.styleGroup === "base" : parameter.styleGroup === activeGroup);
      const matchesQuery =
        !query ||
        parameter.zhName.toLowerCase().includes(query) ||
        parameter.enName.toLowerCase().includes(query) ||
        parameter.zhPrompt.toLowerCase().includes(query) ||
        parameter.enPrompt.toLowerCase().includes(query);

      return matchesCategory && matchesSelected && matchesActiveGroup && matchesQuery;
    });
  }, [activeCategory, search, selectedById, selectedOnly, activeGroups.length, activeGroup, allParameters]);

  const prompt = useMemo(() => buildPrompt(inputs, selected, allParameters), [allParameters, inputs, selected]);
  const finalPromptValue = promptLanguage === "zh" ? prompt.finalPromptZh : prompt.finalPromptEn;

  function categoryName(category: { zhName: string; enName: string }) {
    return uiLanguage === "zh" ? category.zhName : category.enName;
  }

  function categoryDescription(category: CategoryId, fallback: string) {
    return uiLanguage === "zh" ? fallback : (categoryDescriptionEn[category] ?? fallback);
  }

  function groupName(group: { id: string; zhName: string }) {
    return uiLanguage === "zh" ? group.zhName : (groupNameEn[group.id] ?? group.id.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase()));
  }

  function parameterPrimary(parameter: PromptParameter) {
    return uiLanguage === "zh" ? parameter.zhName : parameter.enName;
  }

  function parameterSecondary(parameter: PromptParameter) {
    return uiLanguage === "zh" ? parameter.enName : parameter.zhName;
  }

  function updateInput<K extends keyof PromptInputs>(key: K, value: PromptInputs[K]) {
    setInputs((current) => ({ ...current, [key]: value }));
  }

  function toggleParameter(parameter: PromptParameter) {
    const isSelected = selectedById.has(parameter.id);

    if (isSelected) {
      setSelected((current) => current.filter((item) => item.id !== parameter.id));
      return;
    }

    selectParameter(parameter);
  }

  function selectParameter(parameter: PromptParameter) {
    const category = categories.find((item) => item.id === parameter.category)!;

    setSelected((current) => {
      const existing = current.find((item) => item.id === parameter.id);
      if (existing) {
        return current;
      }

      const next = category.mode === "single" ? current.filter((item) => {
        const currentParameter = allParameters.find((candidate) => candidate.id === item.id);
        return currentParameter?.category !== parameter.category;
      }) : current;

      return [...next, { id: parameter.id }];
    });
  }

  function removeSelectedParameter(id: string) {
    setSelected((current) => current.filter((item) => item.id !== id));
  }

  async function copyText(label: string, value: string) {
    await navigator.clipboard.writeText(value);
    setCopied(label);
    window.setTimeout(() => setCopied(null), 1400);
  }

  async function handleFeedbackImage(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setFeedbackStatus("请选择图片文件。");
      event.target.value = "";
      return;
    }

    try {
      const dataUrl = await compressFeedbackImage(file);
      setFeedbackImage({
        name: file.name,
        size: file.size,
        preview: dataUrl,
        dataUrl
      });
      setFeedbackStatus("已添加图片预览，提交后可在管理员后台查看。");
    } catch {
      setFeedbackStatus("图片读取失败，请换一张图片。");
    }
  }

  function removeFeedbackImage() {
    setFeedbackImage(null);
    setFeedbackStatus("");
  }

  function submitFeedback() {
    const content = feedbackText.trim();
    if (!content && !feedbackImage) {
      setFeedbackStatus("请先填写建议文字，或选择一张图片。");
      return;
    }

    const nextEntries = [
      {
        id: `feedback-${Date.now()}`,
        text: content,
        imageName: feedbackImage?.name,
        imageSize: feedbackImage?.size,
        imageDataUrl: feedbackImage?.dataUrl,
        createdAt: new Date().toISOString()
      },
      ...feedbackEntries
    ].slice(0, 100);

    setFeedbackEntries(nextEntries);
    saveLocal(feedbackEntriesKey, nextEntries);
    setFeedbackText("");
    setFeedbackImage(null);
    setFeedbackStatus("已提交，管理员可在后台查看。");
  }

  function removeFeedbackEntry(id: string) {
    const nextEntries = feedbackEntries.filter((entry) => entry.id !== id);
    setFeedbackEntries(nextEntries);
    saveLocal(feedbackEntriesKey, nextEntries);
  }

  function clearFeedbackEntries() {
    setFeedbackEntries([]);
    saveLocal(feedbackEntriesKey, []);
  }

  function resetAll() {
    setInputs(defaultInputs);
    setSelected([]);
    setSearch("");
    setSelectedOnly(false);
    setActiveGroupByCategory({});
    setPromptLanguage("zh");
    setActiveCategory("style");
  }

  function openAdmin() {
    if (adminAuthed) {
      setAdminOpen(true);
      return;
    }

    setAdminLoginOpen(true);
  }

  function loginAdmin() {
    if (loginForm.account === "syssyw666" && loginForm.password === "syssyw111") {
      setAdminAuthed(true);
      setAdminLoginOpen(false);
      setAdminOpen(true);
      setLoginError("");
      setLoginForm({ account: "", password: "" });
      return;
    }

    setLoginError("账号或密码不正确");
  }

  function editParameter(parameter: PromptParameter) {
    setAdminDraft(toAdminDraft(parameter));
    setAdminEditingId(parameter.id);
    setAdminNotice("");
  }

  function createParameter() {
    setAdminDraft(toAdminDraft());
    setAdminEditingId(null);
    setAdminNotice("");
  }

  function saveAdminDraft() {
    const parameter = draftToParameter(adminDraft);
    if (!parameter.id || !parameter.zhName || !parameter.enName || !parameter.zhPrompt || !parameter.enPrompt) {
      setAdminNotice("请至少填写 ID、中文名、英文名、中英文提示词");
      return;
    }

    const builtIn = parameters.some((item) => item.id === parameter.id);
    const customIndex = customParameters.findIndex((item) => item.id === parameter.id);
    const idTakenByOther = !adminEditingId && (builtIn || customIndex >= 0);

    if (idTakenByOther) {
      setAdminNotice("这个 ID 已存在，请换一个 ID");
      return;
    }

    if (builtIn) {
      const nextOverrides = { ...parameterOverrides, [parameter.id]: { ...parameter, id: undefined } as ParameterOverride };
      setParameterOverrides(nextOverrides);
      saveLocal(parameterOverridesKey, nextOverrides);
    } else {
      const nextCustomParameters =
        customIndex >= 0
          ? customParameters.map((item) => (item.id === parameter.id ? parameter : item))
          : [...customParameters, parameter];
      setCustomParameters(nextCustomParameters);
      saveLocal(customParametersKey, nextCustomParameters);
    }

    if (hiddenParameters.includes(parameter.id)) {
      const nextHidden = hiddenParameters.filter((id) => id !== parameter.id);
      setHiddenParameters(nextHidden);
      saveLocal(hiddenParametersKey, nextHidden);
    }

    setAdminEditingId(parameter.id);
    setAdminNotice("已保存，前台图库和提示词会立即更新");
  }

  function removeParameter(parameter: PromptParameter) {
    const builtIn = parameters.some((item) => item.id === parameter.id);
    if (builtIn) {
      const nextHidden = Array.from(new Set([...hiddenParameters, parameter.id]));
      setHiddenParameters(nextHidden);
      saveLocal(hiddenParametersKey, nextHidden);
    } else {
      const nextCustomParameters = customParameters.filter((item) => item.id !== parameter.id);
      setCustomParameters(nextCustomParameters);
      saveLocal(customParametersKey, nextCustomParameters);
    }

    setSelected((current) => current.filter((item) => item.id !== parameter.id));
    setAdminNotice(builtIn ? "已隐藏内置参数，可在隐藏列表恢复" : "已删除自定义参数");
  }

  function restoreParameter(id: string) {
    const nextHidden = hiddenParameters.filter((item) => item !== id);
    setHiddenParameters(nextHidden);
    saveLocal(hiddenParametersKey, nextHidden);
    setAdminNotice("已恢复");
  }

  function editFeaturedPrompt(item: FeaturedPromptItem) {
    setFeaturedDraft(toFeaturedDraft(item));
    setFeaturedEditingId(item.id);
    setAdminSection("featured");
    setAdminNotice("");
  }

  function createFeaturedPrompt() {
    setFeaturedDraft(toFeaturedDraft());
    setFeaturedEditingId(null);
    setAdminSection("featured");
    setAdminNotice("");
  }

  function saveFeaturedDraft() {
    const item = draftToFeaturedPrompt(featuredDraft);
    if (!item.id || !item.zhTitle || !item.enTitle || !item.prompt) {
      setAdminNotice("请至少填写 ID、中英文标题和提示词");
      return;
    }

    const builtIn = featuredPrompts.some((candidate) => candidate.id === item.id);
    const customIndex = customFeaturedPrompts.findIndex((candidate) => candidate.id === item.id);
    const idTakenByOther = !featuredEditingId && (builtIn || customIndex >= 0);

    if (idTakenByOther) {
      setAdminNotice("这个精选提示词 ID 已存在，请换一个 ID");
      return;
    }

    if (builtIn) {
      const nextOverrides = { ...featuredPromptOverrides, [item.id]: { ...item, id: undefined } as FeaturedPromptOverride };
      setFeaturedPromptOverrides(nextOverrides);
      saveLocal(featuredPromptOverridesKey, nextOverrides);
    } else {
      const nextCustomItems =
        customIndex >= 0
          ? customFeaturedPrompts.map((candidate) => (candidate.id === item.id ? item : candidate))
          : [...customFeaturedPrompts, item];
      setCustomFeaturedPrompts(nextCustomItems);
      saveLocal(customFeaturedPromptsKey, nextCustomItems);
    }

    if (hiddenFeaturedPrompts.includes(item.id)) {
      const nextHidden = hiddenFeaturedPrompts.filter((id) => id !== item.id);
      setHiddenFeaturedPrompts(nextHidden);
      saveLocal(hiddenFeaturedPromptsKey, nextHidden);
    }

    setFeaturedEditingId(item.id);
    setAdminNotice("已保存，精选提示词面板会立即更新");
  }

  function removeFeaturedPrompt(item: FeaturedPromptItem) {
    const builtIn = featuredPrompts.some((candidate) => candidate.id === item.id);
    if (builtIn) {
      const nextHidden = Array.from(new Set([...hiddenFeaturedPrompts, item.id]));
      setHiddenFeaturedPrompts(nextHidden);
      saveLocal(hiddenFeaturedPromptsKey, nextHidden);
    } else {
      const nextCustomItems = customFeaturedPrompts.filter((candidate) => candidate.id !== item.id);
      setCustomFeaturedPrompts(nextCustomItems);
      saveLocal(customFeaturedPromptsKey, nextCustomItems);
    }

    setAdminNotice(builtIn ? "已隐藏内置精选提示词，可在隐藏列表恢复" : "已删除自定义精选提示词");
  }

  function restoreFeaturedPrompt(id: string) {
    const nextHidden = hiddenFeaturedPrompts.filter((item) => item !== id);
    setHiddenFeaturedPrompts(nextHidden);
    saveLocal(hiddenFeaturedPromptsKey, nextHidden);
    setAdminNotice("已恢复精选提示词");
  }

  function resetAdminChanges() {
    setCustomParameters([]);
    setParameterOverrides({});
    setHiddenParameters([]);
    setCustomFeaturedPrompts([]);
    setFeaturedPromptOverrides({});
    setHiddenFeaturedPrompts([]);
    saveLocal(customParametersKey, []);
    saveLocal(parameterOverridesKey, {});
    saveLocal(hiddenParametersKey, []);
    saveLocal(customFeaturedPromptsKey, []);
    saveLocal(featuredPromptOverridesKey, {});
    saveLocal(hiddenFeaturedPromptsKey, []);
    setAdminDraft(toAdminDraft());
    setAdminEditingId(null);
    setFeaturedDraft(toFeaturedDraft());
    setFeaturedEditingId(null);
    setAdminNotice("已清空后台本地改动");
  }

  return (
    <>
    <main className={viewMode === "featured" ? "app-shell featured-mode" : "app-shell"}>
      <section className="left-panel">
        <div className="brand-menu-wrap">
          <button className="brand-switch-button" onClick={() => setBrandMenuOpen((value) => !value)} type="button" aria-label={t.more}>
            <span className="brand-switch-copy">
              <strong>{switchTitle}</strong>
              <small>{switchSubtitle}</small>
            </span>
            <span className="brand-switch-more">
              {t.more}
              <ChevronDown size={13} />
            </span>
          </button>
          {brandMenuOpen && (
            <div className="brand-menu">
              <button
                className={viewMode === "generator" ? "active" : ""}
                onClick={() => {
                  setViewMode("generator");
                  setBrandMenuOpen(false);
                }}
                type="button"
              >
                <Sparkles size={15} />
                <span>{t.generator}</span>
              </button>
              <button
                className={viewMode === "featured" ? "active" : ""}
                onClick={() => {
                  setViewMode("featured");
                  setBrandMenuOpen(false);
                }}
                type="button"
              >
                <Star size={15} />
                <span>{t.featuredPrompts}</span>
              </button>
            </div>
          )}
        </div>

        {viewMode === "generator" && (
          <>
            <label className="field">
              <span>{t.subject}</span>
              <textarea
                value={inputs.subjectZh}
                onChange={(event) => updateInput("subjectZh", event.target.value)}
                placeholder={t.subjectPlaceholder}
              />
              <small className="field-hint">{t.focusHint}</small>
            </label>

            <label className="field">
              <span>{t.avoid}</span>
              <textarea
                value={inputs.avoid}
                onChange={(event) => updateInput("avoid", event.target.value)}
                placeholder={t.avoidPlaceholder}
              />
            </label>

            <div className="generation-settings">
              <label className="field">
                <span>{t.aspectRatio}</span>
                <select value={inputs.aspectRatio} onChange={(event) => updateInput("aspectRatio", event.target.value)}>
                  {aspectRatioOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {uiLanguage === "zh" ? option.zhName : option.enName} · {uiLanguage === "zh" ? option.zhNote : option.enNote}
                    </option>
                  ))}
                </select>
              </label>

              <label className="field">
                <span>{t.clarity}</span>
                <select value={inputs.clarity} onChange={(event) => updateInput("clarity", event.target.value)}>
                  {clarityOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {uiLanguage === "zh" ? option.zhName : option.enName} · {uiLanguage === "zh" ? option.zhNote : option.enNote}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </>
        )}

        <section className="feedback-box">
          <div className="feedback-header">
            <div>
              <h3>{t.feedback}</h3>
              <p>{t.feedbackHint}</p>
            </div>
            <MessageSquare size={18} />
          </div>

          <textarea
            className="feedback-textarea"
            value={feedbackText}
            onChange={(event) => setFeedbackText(event.target.value)}
            placeholder={t.feedbackPlaceholder}
          />

          <div className="feedback-actions">
            <label className="upload-button">
              <ImageIcon size={15} />
              {t.uploadImage}
              <input accept="image/*" onChange={handleFeedbackImage} type="file" />
            </label>
            <button className="primary-action" onClick={submitFeedback} type="button">
              <Send size={15} />
              {t.submit}
            </button>
          </div>

          {feedbackImage && (
            <div className="feedback-preview">
              <img src={feedbackImage.preview} alt={feedbackImage.name} />
              <div>
                <strong>{feedbackImage.name}</strong>
                <span>{formatFileSize(feedbackImage.size)}</span>
                <button onClick={removeFeedbackImage} type="button">{t.removeImage}</button>
              </div>
            </div>
          )}

          {feedbackStatus && <p className="feedback-status">{feedbackStatus}</p>}
        </section>

        {viewMode === "generator" && (
          <div className="admin-entry">
            <button className="admin-button" onClick={openAdmin} type="button">
              <Shield size={16} />
              {t.admin}
            </button>
            <small>{t.adminHint}</small>
          </div>
        )}
      </section>

      {viewMode === "featured" ? (
      <FeaturedPromptPage
        activeCategory={activeFeaturedCategory}
        activeGroup={activeFeaturedGroup}
        copied={copied}
        items={allFeaturedPrompts}
        language={uiLanguage}
        search={featuredSearch}
        onCategoryChange={(category) => {
          setActiveFeaturedCategory(category);
          setActiveFeaturedGroup("all");
        }}
        onCopy={copyText}
        onGroupChange={setActiveFeaturedGroup}
        onSearchChange={setFeaturedSearch}
        onLanguageToggle={() => setUiLanguage((language) => (language === "zh" ? "en" : "zh"))}
      />
      ) : (
      <>
      <section className="gallery-panel">
        <div className="gallery-toolbar">
          <div className="tabs">
            {categories.map((category) => (
              <button
                key={category.id}
                className={category.id === activeCategory && !selectedOnly ? "tab active" : "tab"}
                onClick={() => {
                  setActiveCategory(category.id);
                  setSelectedOnly(false);
                }}
                type="button"
              >
                {categoryName(category)}
                <small>{category.mode === "single" ? t.single : t.multi}</small>
              </button>
            ))}
          </div>

          <div className="search-row">
            <label className="search-box">
              <Search size={16} />
              <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder={t.searchPlaceholder} />
            </label>
            <button className={selectedOnly ? "pill active" : "pill"} onClick={() => setSelectedOnly((value) => !value)} type="button">
              {t.selected} {selected.length}
            </button>
          </div>

          {!selectedOnly && (
            <p className="category-note">
              {categoryName(activeCategoryInfo)} / {uiLanguage === "zh" ? activeCategoryInfo.enName : activeCategoryInfo.zhName}: {categoryDescription(activeCategoryInfo.id, activeCategoryInfo.description)}
            </p>
          )}

          {!selectedOnly && activeGroups.length > 0 && (
            <div className="style-group-row">
              {activeGroups.map((group) => (
                <button
                  key={group.id}
                  className={group.id === activeGroup ? "style-chip active" : "style-chip"}
                  onClick={() => setActiveGroupByCategory((current) => ({ ...current, [activeCategory]: group.id }))}
                  type="button"
                >
                  {groupName(group)}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="parameter-grid">
          {filteredParameters.map((parameter) => {
            const selectedItem = selectedById.get(parameter.id);
            return (
              <article
                key={parameter.id}
                className={selectedItem ? "parameter-card selected" : "parameter-card"}
                data-tooltip={`${parameter.zhPrompt}\n${parameter.enPrompt}`}
              >
                <div className="image-frame">
                  <button className="image-button" onClick={() => toggleParameter(parameter)} type="button">
                    <img src={parameter.image} alt={`${parameter.zhName} ${parameter.enName}`} />
                    {selectedItem && (
                      <span className="check-mark">
                        <Check size={16} />
                      </span>
                    )}
                  </button>
                </div>
                <div className="card-meta">
                  <div>
                    <strong>{parameterPrimary(parameter)}</strong>
                    <span>{parameterSecondary(parameter)}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="right-panel">
        <div className="output-header">
          <div>
            <h2>{t.promptPreview}</h2>
            <p>{t.selected} {prompt.selectedItems.length}</p>
          </div>
          <button className="language-toggle" onClick={() => setUiLanguage((language) => (language === "zh" ? "en" : "zh"))} type="button">
            <Languages size={15} />
            {uiLanguage === "zh" ? "中文" : "English"}
          </button>
        </div>

        <div className="prompt-language-tabs">
          <button className={promptLanguage === "zh" ? "active" : ""} onClick={() => setPromptLanguage("zh")} type="button">
            {t.zh}
          </button>
          <button className={promptLanguage === "en" ? "active" : ""} onClick={() => setPromptLanguage("en")} type="button">
            {t.en}
          </button>
        </div>

        <PromptBox
          label={promptLanguage === "zh" ? t.finalZh : t.finalEn}
          copied={copied === `final-${promptLanguage}`}
          value={finalPromptValue}
          onCopy={() => copyText(`final-${promptLanguage}`, finalPromptValue)}
          variant="final"
          language={uiLanguage}
        />

        <div className={checkedPanelOpen ? "selected-list open" : "selected-list"}>
          <button className="selected-toggle" onClick={() => setCheckedPanelOpen((value) => !value)} type="button">
            <span>{t.selected} {prompt.selectedItems.length}</span>
            <strong>{checkedPanelOpen ? t.collapse : t.expand}</strong>
          </button>
          {checkedPanelOpen && (
            prompt.selectedItems.length === 0 ? (
              <p className="empty">{t.selectedEmpty}</p>
            ) : (
              <div className="selected-rows">
                {prompt.selectedItems.map(({ parameter }) => (
                  <div className="selected-row" key={parameter.id}>
                    <span>{parameterPrimary(parameter)}</span>
                    <button aria-label={`${t.delete} ${parameterPrimary(parameter)}`} className="selected-remove" onClick={() => removeSelectedParameter(parameter.id)} type="button">
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
            )
          )}
        </div>

        <button className="reset-button right-reset-button" onClick={resetAll} type="button">
          <RotateCcw size={16} />
          {t.reset}
        </button>
      </section>
      </>
      )}
    </main>

    {adminLoginOpen && (
      <AdminLoginModal
        form={loginForm}
        error={loginError}
        onChange={setLoginForm}
        onClose={() => setAdminLoginOpen(false)}
        onLogin={loginAdmin}
      />
    )}

    {adminOpen && adminAuthed && (
      <AdminPanel
        adminDraft={adminDraft}
        adminEditingId={adminEditingId}
        adminNotice={adminNotice}
        adminSearch={adminSearch}
        customParameters={customParameters}
        feedbackEntries={feedbackEntries}
        featuredDraft={featuredDraft}
        featuredEditingId={featuredEditingId}
        featuredPrompts={adminFeaturedPrompts}
        hiddenParameters={hiddenParameters}
        hiddenFeaturedPrompts={hiddenFeaturedPrompts}
        customFeaturedPrompts={customFeaturedPrompts}
        parameters={adminParameters}
        section={adminSection}
        onClose={() => setAdminOpen(false)}
        onCreate={createParameter}
        onCreateFeatured={createFeaturedPrompt}
        onDraftChange={setAdminDraft}
        onFeaturedDraftChange={setFeaturedDraft}
        onEditFeatured={editFeaturedPrompt}
        onEdit={editParameter}
        onClearFeedback={clearFeedbackEntries}
        onRemoveFeedback={removeFeedbackEntry}
        onRemove={removeParameter}
        onRemoveFeatured={removeFeaturedPrompt}
        onReset={resetAdminChanges}
        onRestore={restoreParameter}
        onRestoreFeatured={restoreFeaturedPrompt}
        onSave={saveAdminDraft}
        onSaveFeatured={saveFeaturedDraft}
        onSearchChange={setAdminSearch}
        onSectionChange={setAdminSection}
      />
    )}
    </>
  );
}

interface AdminLoginModalProps {
  form: { account: string; password: string };
  error: string;
  onChange: (form: { account: string; password: string }) => void;
  onClose: () => void;
  onLogin: () => void;
}

function AdminLoginModal({ form, error, onChange, onClose, onLogin }: AdminLoginModalProps) {
  return (
    <div className="modal-backdrop">
      <form
        className="login-modal"
        onSubmit={(event) => {
          event.preventDefault();
          onLogin();
        }}
      >
        <div className="modal-title">
          <div>
            <h2>管理员登录</h2>
            <p>登录后可管理图库参数和提示词片段。</p>
          </div>
          <button className="icon-button" onClick={onClose} type="button" aria-label="关闭">
            <X size={18} />
          </button>
        </div>

        <label className="field">
          <span>账号</span>
          <input
            value={form.account}
            onChange={(event) => onChange({ ...form, account: event.target.value })}
            placeholder="请输入管理员账号"
          />
        </label>

        <label className="field">
          <span>密码</span>
          <input
            type="password"
            value={form.password}
            onChange={(event) => onChange({ ...form, password: event.target.value })}
            placeholder="请输入管理员密码"
          />
        </label>

        {error && <p className="form-error">{error}</p>}

        <button className="primary-action" type="submit">
          <LogIn size={16} />
          登录
        </button>
      </form>
    </div>
  );
}

interface AdminPanelProps {
  adminDraft: AdminDraft;
  adminEditingId: string | null;
  adminNotice: string;
  adminSearch: string;
  customParameters: PromptParameter[];
  customFeaturedPrompts: FeaturedPromptItem[];
  feedbackEntries: FeedbackEntry[];
  featuredDraft: FeaturedDraft;
  featuredEditingId: string | null;
  featuredPrompts: FeaturedPromptItem[];
  hiddenParameters: string[];
  hiddenFeaturedPrompts: string[];
  parameters: PromptParameter[];
  section: "parameters" | "featured";
  onClose: () => void;
  onCreate: () => void;
  onCreateFeatured: () => void;
  onDraftChange: (draft: AdminDraft) => void;
  onFeaturedDraftChange: (draft: FeaturedDraft) => void;
  onEdit: (parameter: PromptParameter) => void;
  onEditFeatured: (item: FeaturedPromptItem) => void;
  onClearFeedback: () => void;
  onRemoveFeedback: (id: string) => void;
  onRemove: (parameter: PromptParameter) => void;
  onRemoveFeatured: (item: FeaturedPromptItem) => void;
  onReset: () => void;
  onRestore: (id: string) => void;
  onRestoreFeatured: (id: string) => void;
  onSave: () => void;
  onSaveFeatured: () => void;
  onSearchChange: (value: string) => void;
  onSectionChange: (section: "parameters" | "featured") => void;
}

interface FeaturedPromptPageProps {
  activeCategory: FeaturedPromptCategory;
  activeGroup: string;
  copied: string | null;
  items: FeaturedPromptItem[];
  language: UiLanguage;
  search: string;
  onCategoryChange: (category: FeaturedPromptCategory) => void;
  onCopy: (label: string, value: string) => void;
  onGroupChange: (group: string) => void;
  onSearchChange: (value: string) => void;
  onLanguageToggle: () => void;
}

function FeaturedPromptPage({ activeCategory, activeGroup, copied, items, language, search, onCategoryChange, onCopy, onGroupChange, onSearchChange, onLanguageToggle }: FeaturedPromptPageProps) {
  const text = uiText[language];
  const groups = featuredPromptGroups[activeCategory] ?? [];
  const searchNeedle = normalizeSearch(search);
  const visibleItems = items.filter((item) => {
    if (item.category !== activeCategory) return false;
    if (activeGroup !== "all" && groups.length && item.group !== activeGroup) return false;
    if (!searchNeedle) return true;
    return fuzzyMatch(
      [
        item.zhTitle,
        item.enTitle,
        item.zhDescription,
        item.enDescription,
        item.prompt,
        item.group ?? ""
      ].join(" "),
      searchNeedle
    );
  });

  function title(item: FeaturedPromptItem) {
    return language === "zh" ? item.zhTitle : item.enTitle;
  }

  function description(item: FeaturedPromptItem) {
    return language === "zh" ? item.zhDescription : item.enDescription;
  }

  return (
      <section className="featured-page">
        <div className="featured-header">
          <div>
            <h2>{text.featuredPrompts}</h2>
            <p>{text.featuredHint}</p>
          </div>
          <button className="language-toggle" onClick={onLanguageToggle} type="button">
            <Languages size={15} />
            {language === "zh" ? "中文" : "English"}
          </button>
        </div>

        <div className="featured-tabs">
          {featuredPromptCategories.map((category) => (
            <button
              className={category.id === activeCategory ? "active" : ""}
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              type="button"
            >
              {language === "zh" ? category.zhName : category.enName}
            </button>
        ))}
      </div>

      <label className="featured-search">
        <Search size={15} />
        <input
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder={text.featuredSearchPlaceholder}
        />
        {search ? (
          <button type="button" onClick={() => onSearchChange("")} aria-label={text.close}>
            <X size={15} />
          </button>
        ) : null}
      </label>

      {groups.length ? (
          <div className="featured-subtabs">
            {groups.map((group) => (
              <button
                className={group.id === activeGroup ? "active" : ""}
                key={group.id}
                onClick={() => onGroupChange(group.id)}
                type="button"
              >
                {language === "zh" ? group.zhName : group.enName}
              </button>
            ))}
          </div>
        ) : null}

        <div className="featured-grid">
          {visibleItems.map((item) => {
            const isPair = item.category === "color-edit" || item.category === "image-to-image";
            const isUtility = item.category === "utility";
            return (
              <article className={isPair ? "featured-card featured-pair-card" : isUtility ? "featured-card featured-utility-card" : "featured-card"} key={item.id}>
                {isPair ? (
                  <div className="featured-pair">
                    <figure>
                      {item.originalImage || item.image ? (
                        <>
                          <img className="featured-blur-bg" src={item.originalImage || item.image} alt="" aria-hidden="true" />
                          <img className="featured-main-img" src={item.originalImage || item.image} alt={`${title(item)} ${text.before}`} />
                        </>
                      ) : (
                        <div className="featured-image-empty">{text.before}</div>
                      )}
                      <figcaption>{text.before}</figcaption>
                    </figure>
                    <figure>
                      {item.resultImage || item.image ? (
                        <>
                          <img className="featured-blur-bg" src={item.resultImage || item.image} alt="" aria-hidden="true" />
                          <img className="featured-main-img" src={item.resultImage || item.image} alt={`${title(item)} ${text.after}`} />
                        </>
                      ) : (
                        <div className="featured-image-empty">{text.after}</div>
                      )}
                      <figcaption>{text.after}</figcaption>
                    </figure>
                  </div>
                ) : item.image ? (
                  <div className="featured-image">
                    <img className="featured-blur-bg" src={item.image} alt="" aria-hidden="true" />
                    <img className="featured-main-img" src={item.image} alt={title(item)} />
                  </div>
                ) : null}
                <div className="featured-card-body">
                  <div>
                    <strong>{title(item)}</strong>
                    <p>{description(item)}</p>
                  </div>
                  <button className="quick-copy-button wide" onClick={() => onCopy(item.id, item.prompt)} type="button">
                    {copied === item.id ? <Check size={15} /> : <Copy size={15} />}
                    {copied === item.id ? text.copied : text.copyPrompt}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>
  );
}

function AdminPanel({
  adminDraft,
  adminEditingId,
  adminNotice,
  adminSearch,
  customParameters,
  customFeaturedPrompts,
  feedbackEntries,
  featuredDraft,
  featuredEditingId,
  featuredPrompts: managedFeaturedPrompts,
  hiddenParameters,
  hiddenFeaturedPrompts,
  parameters: managedParameters,
  section,
  onClose,
  onCreate,
  onCreateFeatured,
  onDraftChange,
  onFeaturedDraftChange,
  onEdit,
  onEditFeatured,
  onClearFeedback,
  onRemoveFeedback,
  onRemove,
  onRemoveFeatured,
  onReset,
  onRestore,
  onRestoreFeatured,
  onSave,
  onSaveFeatured,
  onSearchChange,
  onSectionChange
}: AdminPanelProps) {
  const customIds = new Set(customParameters.map((parameter) => parameter.id));
  const hiddenIds = new Set(hiddenParameters);
  const customFeaturedIds = new Set(customFeaturedPrompts.map((item) => item.id));
  const hiddenFeaturedIds = new Set(hiddenFeaturedPrompts);
  const groupHints = Array.from(
    new Map(
      Object.values(categoryGroups)
        .flat()
        .filter((group) => group.id !== "all")
        .map((group) => [group.id, group.zhName])
    ).entries()
  );
  const query = adminSearch.trim().toLowerCase();
  const filteredParameters = managedParameters.filter((parameter) => {
    if (!query) {
      return true;
    }

    return (
      parameter.id.toLowerCase().includes(query) ||
      parameter.zhName.toLowerCase().includes(query) ||
      parameter.enName.toLowerCase().includes(query) ||
      parameter.zhPrompt.toLowerCase().includes(query) ||
      parameter.enPrompt.toLowerCase().includes(query)
    );
  });
  const filteredFeaturedPrompts = managedFeaturedPrompts.filter((item) => {
    if (!query) return true;
    return (
      item.id.toLowerCase().includes(query) ||
      item.zhTitle.toLowerCase().includes(query) ||
      item.enTitle.toLowerCase().includes(query) ||
      item.prompt.toLowerCase().includes(query)
    );
  });

  return (
    <div className="admin-backdrop">
      <aside className="admin-panel">
        <div className="admin-header">
          <div>
            <h2>管理后台</h2>
            <p>新增、隐藏、调整板块参数与提示词。本地保存，立即影响前台。</p>
          </div>
          <button className="icon-button" onClick={onClose} type="button" aria-label="关闭管理后台">
            <X size={18} />
          </button>
        </div>

        <div className="admin-section-tabs">
          <button className={section === "parameters" ? "active" : ""} onClick={() => onSectionChange("parameters")} type="button">
            参数图库
          </button>
          <button className={section === "featured" ? "active" : ""} onClick={() => onSectionChange("featured")} type="button">
            精选提示词
          </button>
        </div>

        <div className="admin-layout">
          <section className="admin-list-panel">
            <div className="admin-actions">
              <button className="primary-action" onClick={section === "parameters" ? onCreate : onCreateFeatured} type="button">
                <Plus size={16} />
                {section === "parameters" ? "新增参数" : "新增精选"}
              </button>
              <button className="ghost-action" onClick={onReset} type="button">
                <RotateCcw size={16} />
                清空本地改动
              </button>
            </div>

            <label className="search-box admin-search">
              <Search size={16} />
              <input value={adminSearch} onChange={(event) => onSearchChange(event.target.value)} placeholder="搜索 ID、名称或提示词" />
            </label>

            <div className="admin-counts">
              {section === "parameters" ? (
                <>
                  <span>总计 {managedParameters.length}</span>
                  <span>自定义 {customParameters.length}</span>
                  <span>隐藏 {hiddenParameters.length}</span>
                </>
              ) : (
                <>
                  <span>总计 {managedFeaturedPrompts.length}</span>
                  <span>自定义 {customFeaturedPrompts.length}</span>
                  <span>隐藏 {hiddenFeaturedPrompts.length}</span>
                </>
              )}
            </div>

            {section === "parameters" && (
            <section className="admin-feedback-section">
              <div className="admin-feedback-title">
                <div>
                  <h3>意见建议</h3>
                  <span>{feedbackEntries.length} 条</span>
                </div>
                {feedbackEntries.length > 0 && (
                  <button onClick={onClearFeedback} type="button">清空</button>
                )}
              </div>

              {feedbackEntries.length === 0 ? (
                <p className="empty">暂无用户提交的意见建议。</p>
              ) : (
                <div className="admin-feedback-list">
                  {feedbackEntries.map((entry) => (
                    <article className="admin-feedback-item" key={entry.id}>
                      <div className="admin-feedback-meta">
                        <span>{new Date(entry.createdAt).toLocaleString()}</span>
                        <button onClick={() => onRemoveFeedback(entry.id)} type="button">删除</button>
                      </div>
                      <p>{entry.text || "（未填写文字）"}</p>
                      {entry.imageDataUrl && (
                        <div className="admin-feedback-image">
                          <img src={entry.imageDataUrl} alt={entry.imageName || "意见建议图片"} />
                          <span>{entry.imageName} · {entry.imageSize ? formatFileSize(entry.imageSize) : "图片"}</span>
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              )}
            </section>
            )}

            <div className="admin-parameter-list">
              {section === "parameters" ? filteredParameters.map((parameter) => {
                const isCustom = customIds.has(parameter.id);
                const isHidden = hiddenIds.has(parameter.id);

                return (
                  <article className={isHidden ? "admin-row hidden" : "admin-row"} key={parameter.id}>
                    <img src={parameter.image} alt={parameter.zhName} />
                    <div>
                      <strong>{parameter.zhName}</strong>
                      <span>{parameter.id}</span>
                      <small>{categories.find((category) => category.id === parameter.category)?.zhName} · {parameter.styleGroup || "无子标签"} · {isCustom ? "自定义" : "内置"}</small>
                    </div>
                    <div className="admin-row-actions">
                      <button onClick={() => onEdit(parameter)} type="button">编辑</button>
                      {isHidden ? (
                        <button onClick={() => onRestore(parameter.id)} type="button">恢复</button>
                      ) : (
                        <button onClick={() => onRemove(parameter)} type="button">
                          {isCustom ? <Trash2 size={14} /> : <EyeOff size={14} />}
                        </button>
                      )}
                    </div>
                  </article>
                );
              }) : filteredFeaturedPrompts.map((item) => {
                const isCustom = customFeaturedIds.has(item.id);
                const isHidden = hiddenFeaturedIds.has(item.id);
                const previewImage = item.image || item.resultImage || item.originalImage || "/assets/parameters/style-cinematic.jpg";

                return (
                  <article className={isHidden ? "admin-row hidden" : "admin-row"} key={item.id}>
                    <img src={previewImage} alt={item.zhTitle} />
                    <div>
                      <strong>{item.zhTitle}</strong>
                      <span>{item.id}</span>
                      <small>{featuredPromptCategories.find((category) => category.id === item.category)?.zhName} · {isCustom ? "自定义" : "内置"}</small>
                    </div>
                    <div className="admin-row-actions">
                      <button onClick={() => onEditFeatured(item)} type="button">编辑</button>
                      {isHidden ? (
                        <button onClick={() => onRestoreFeatured(item.id)} type="button">恢复</button>
                      ) : (
                        <button onClick={() => onRemoveFeatured(item)} type="button">
                          {isCustom ? <Trash2 size={14} /> : <EyeOff size={14} />}
                        </button>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="admin-editor-panel">
            <div className="admin-editor-title">
              <div>
                <h3>{section === "parameters" ? (adminEditingId ? "编辑参数" : "新增参数") : (featuredEditingId ? "编辑精选提示词" : "新增精选提示词")}</h3>
                <p>{section === "parameters" ? (adminEditingId ? "内置参数会保存为本地覆盖，自定义参数会直接更新。" : "新增参数会进入自定义库。") : "可管理精选提示词的分类、展示图和复制内容。"}</p>
              </div>
              {adminNotice && <span>{adminNotice}</span>}
            </div>

            {section === "parameters" ? (
              <>
                <div className="admin-form-grid">
                  <label className="field">
                    <span>ID</span>
                    <input
                      disabled={Boolean(adminEditingId)}
                      value={adminDraft.id}
                      onChange={(event) => onDraftChange({ ...adminDraft, id: event.target.value })}
                    />
                  </label>

                  <label className="field">
                    <span>分类</span>
                    <select
                      value={adminDraft.category}
                      onChange={(event) => onDraftChange({ ...adminDraft, category: event.target.value as CategoryId })}
                    >
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.zhName}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="field">
                    <span>子标签</span>
                    <input
                      list="admin-group-hints"
                      value={adminDraft.styleGroup}
                      onChange={(event) => onDraftChange({ ...adminDraft, styleGroup: event.target.value })}
                      placeholder="例如 nature / future / anime"
                    />
                  </label>
                </div>

                <datalist id="admin-group-hints">
                  {groupHints.map(([id, name]) => (
                    <option key={id} value={id}>{name}</option>
                  ))}
                </datalist>

                <div className="admin-form-grid">
                  <label className="field">
                    <span>中文名</span>
                    <input value={adminDraft.zhName} onChange={(event) => onDraftChange({ ...adminDraft, zhName: event.target.value })} />
                  </label>
                  <label className="field">
                    <span>英文名</span>
                    <input value={adminDraft.enName} onChange={(event) => onDraftChange({ ...adminDraft, enName: event.target.value })} />
                  </label>
                </div>

                <ImagePathPicker
                  label="上传展示图"
                  value={adminDraft.image}
                  onChange={(value) => onDraftChange({ ...adminDraft, image: value })}
                />

                <label className="field">
                  <span>中文提示词片段</span>
                  <textarea value={adminDraft.zhPrompt} onChange={(event) => onDraftChange({ ...adminDraft, zhPrompt: event.target.value })} />
                </label>

                <label className="field">
                  <span>英文提示词片段</span>
                  <textarea value={adminDraft.enPrompt} onChange={(event) => onDraftChange({ ...adminDraft, enPrompt: event.target.value })} />
                </label>

                <label className="field">
                  <span>负面词（逗号或换行分隔）</span>
                  <textarea value={adminDraft.negative} onChange={(event) => onDraftChange({ ...adminDraft, negative: event.target.value })} />
                </label>

                <button className="primary-action save-admin" onClick={onSave} type="button">
                  <Save size={16} />
                  保存参数
                </button>
              </>
            ) : (
              <>
                <div className="admin-form-grid">
                  <label className="field">
                    <span>ID</span>
                    <input
                      disabled={Boolean(featuredEditingId)}
                      value={featuredDraft.id}
                      onChange={(event) => onFeaturedDraftChange({ ...featuredDraft, id: event.target.value })}
                    />
                  </label>

                  <label className="field">
                    <span>精选分类</span>
                    <select
                      value={featuredDraft.category}
                      onChange={(event) => onFeaturedDraftChange({ ...featuredDraft, category: event.target.value as FeaturedPromptCategory, group: "" })}
                    >
                      {featuredPromptCategories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.zhName}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                {featuredPromptGroups[featuredDraft.category]?.length ? (
                  <label className="field">
                    <span>子分组</span>
                    <select
                      value={featuredDraft.group}
                      onChange={(event) => onFeaturedDraftChange({ ...featuredDraft, group: event.target.value })}
                    >
                      <option value="">不指定</option>
                      {featuredPromptGroups[featuredDraft.category]
                        ?.filter((group) => group.id !== "all")
                        .map((group) => (
                          <option key={group.id} value={group.id}>
                            {group.zhName}
                          </option>
                        ))}
                    </select>
                  </label>
                ) : null}

                <div className="admin-form-grid">
                  <label className="field">
                    <span>中文标题</span>
                    <input value={featuredDraft.zhTitle} onChange={(event) => onFeaturedDraftChange({ ...featuredDraft, zhTitle: event.target.value })} />
                  </label>
                  <label className="field">
                    <span>英文标题</span>
                    <input value={featuredDraft.enTitle} onChange={(event) => onFeaturedDraftChange({ ...featuredDraft, enTitle: event.target.value })} />
                  </label>
                </div>

                <div className="admin-form-grid">
                  <label className="field">
                    <span>中文说明</span>
                    <input value={featuredDraft.zhDescription} onChange={(event) => onFeaturedDraftChange({ ...featuredDraft, zhDescription: event.target.value })} />
                  </label>
                  <label className="field">
                    <span>英文说明</span>
                    <input value={featuredDraft.enDescription} onChange={(event) => onFeaturedDraftChange({ ...featuredDraft, enDescription: event.target.value })} />
                  </label>
                </div>

                <label className="field">
                  <span>复制提示词内容</span>
                  <textarea value={featuredDraft.prompt} onChange={(event) => onFeaturedDraftChange({ ...featuredDraft, prompt: event.target.value })} />
                </label>

                {(featuredDraft.category === "color-edit" || featuredDraft.category === "image-to-image") ? (
                  <div className="admin-form-grid">
                    <ImagePathPicker
                      label="上传原图"
                      value={featuredDraft.originalImage}
                      onChange={(value) => onFeaturedDraftChange({ ...featuredDraft, originalImage: value })}
                    />
                    <ImagePathPicker
                      label="上传效果图"
                      value={featuredDraft.resultImage}
                      onChange={(value) => onFeaturedDraftChange({ ...featuredDraft, resultImage: value })}
                    />
                  </div>
                ) : featuredDraft.category === "text-to-image" ? (
                  <ImagePathPicker
                    label="上传效果图"
                    value={featuredDraft.image}
                    onChange={(value) => onFeaturedDraftChange({ ...featuredDraft, image: value })}
                  />
                ) : null}

                <button className="primary-action save-admin" onClick={onSaveFeatured} type="button">
                  <Save size={16} />
                  保存精选提示词
                </button>
              </>
            )}
          </section>
        </div>
      </aside>
    </div>
  );
}

interface ImagePathPickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

function ImagePathPicker({ label, value, onChange }: ImagePathPickerProps) {
  async function handleUpload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      event.target.value = "";
      return;
    }

    const dataUrl = await compressFeedbackImage(file);
    onChange(dataUrl);
    event.target.value = "";
  }

  return (
    <label className="field image-path-picker">
      <span>{label}</span>
      <div className="image-path-control">
        <div className="path-preview">
          {value ? <img src={value} alt={label} /> : <small>无图片</small>}
          {value && (
            <div className="path-preview-large">
              <img src={value} alt={`${label} 预览`} />
            </div>
          )}
        </div>
        <div className="image-upload-actions">
          <label className="upload-button image-upload-button">
            <ImageIcon size={15} />
            选择图片
            <input accept="image/*" onChange={handleUpload} type="file" />
          </label>
          {value && (
            <button className="ghost-action clear-image-button" onClick={() => onChange("")} type="button">
              清除
            </button>
          )}
        </div>
      </div>
    </label>
  );
}

interface PromptBoxProps {
  label: string;
  copied: boolean;
  value: string;
  onCopy: () => void;
  variant?: "default" | "final";
  language: UiLanguage;
}

function PromptBox({ label, copied, value, onCopy, variant = "default", language }: PromptBoxProps) {
  const labelText = uiText[language];
  return (
    <section className={variant === "final" ? "prompt-box final-prompt-box" : "prompt-box"}>
      <div className="prompt-box-header">
        <h3>{label}</h3>
        <button onClick={onCopy} type="button">
          {copied ? <Check size={15} /> : <Copy size={15} />}
          {copied ? labelText.copied : labelText.copy}
        </button>
      </div>
      <textarea readOnly value={value} />
    </section>
  );
}
