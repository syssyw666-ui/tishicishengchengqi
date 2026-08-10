import { Check, Clipboard, Copy, EyeOff, ImageIcon, LogIn, MessageSquare, Plus, RotateCcw, Save, Search, Send, Shield, SlidersHorizontal, Sparkles, Trash2, X } from "lucide-react";
import { useMemo, useState, type ChangeEvent } from "react";
import { categories, categoryGroups, parameters } from "./data/parameters";
import { buildPrompt } from "./lib/prompt";
import type { CategoryId, ModelFormat, PromptInputs, PromptParameter, SelectedParameter } from "./types";

const modelOptions: Array<{ id: ModelFormat; zhName: string; note: string }> = [
  { id: "openai", zhName: "OpenAI / 通用", note: "自然语言强化" },
  { id: "midjourney", zhName: "Midjourney", note: ":: 权重" },
  { id: "stable-diffusion", zhName: "Stable Diffusion", note: "(词:权重)" },
  { id: "doubao-qwen", zhName: "豆包 / 千问", note: "中文结构化" }
];

const aspectRatioOptions = [
  { id: "auto", zhName: "自动比例", note: "交给模型判断" },
  { id: "1:1", zhName: "1:1 方图", note: "头像 / 图标" },
  { id: "16:9", zhName: "16:9 横版", note: "封面 / 视频" },
  { id: "9:16", zhName: "9:16 竖版", note: "手机 / Story" },
  { id: "4:3", zhName: "4:3 横版", note: "传统屏幕" },
  { id: "3:4", zhName: "3:4 竖版", note: "海报 / 人像" },
  { id: "3:2", zhName: "3:2 摄影横版", note: "照片横幅" },
  { id: "2:3", zhName: "2:3 摄影竖版", note: "写真 / 封面" },
  { id: "21:9", zhName: "21:9 超宽", note: "电影宽银幕" }
];

const clarityOptions = [
  { id: "standard", zhName: "标准", note: "轻量快速" },
  { id: "high", zhName: "高清", note: "默认推荐" },
  { id: "ultra", zhName: "超清", note: "细节更多" },
  { id: "4k", zhName: "4K 级", note: "放大查看" }
];

const defaultInputs: PromptInputs = {
  subjectZh: "",
  avoid: "水印，无关 logo，未要求的额外文字",
  aspectRatio: "auto",
  clarity: "high"
};

const psdLayerPrompt = "帮我生成PS可以打开的分成PSD文件，然后把生成的图片拆分为若干个元素，每个元素不要改变位置，在PS里生成对应的图层。";

const reversePromptTemplates = [
  {
    id: "reverse-general",
    label: "通用反推",
    text: "详细反推这张图片的完整提示词，包含主体，风格，色彩，光影，构图，质感，分辨率，细节描述。分析这张图片的视觉元素，色调，氛围，技法关键词，生成可直接用于AI绘图的精准prompt，请用中英双语详细描述图片内容，拆解风格，光线，材质，镜头，配色。"
  },
  {
    id: "reverse-font-logo",
    label: "字体 / Logo",
    text: "反推这款字体的风格、字形特征、笔画质感、配色、排版、特效，生成字体设计提示词。详细描述字体：字体风格（现代/复古/赛博/手写）、粗细、衬线/无衬线、倒角、立体效果、光泽、金属/磨砂/玻璃质感。分析logo的配色方案、构图比例、光影、材质、特效（描边、发光、渐变、浮雕），输出可复制提示词。"
  },
  {
    id: "reverse-landscape",
    label: "风景场景",
    text: "反推这张风景图的环境、天气、时间、光线、色调、氛围、构图、景深，生成风景提示词。详细描述：场景主体、季节、时段（清晨/黄昏/夜晚）、天空、云层、植被、水体、色调、氛围感、镜头感。提取关键词：风格、色彩、光影、画质、分辨率、氛围、透视、细节质感。"
  },
  {
    id: "reverse-photo",
    label: "摄影人像产品",
    text: "反推这张摄影图的相机参数、镜头、光影、色调、画质、构图、氛围，生成摄影风格prompt。详细描述：光线（自然光/硬光/柔光/逆光）、景深、焦距、画质（8K/高清/胶片）、色调（冷色/暖色/复古/胶片感）、构图。提取：摄影师风格、光影、质感、分辨率、对焦、噪点、锐度、情绪氛围。"
  },
  {
    id: "reverse-illustration",
    label: "插画动漫",
    text: "反推这张插画的绘画风格、笔触、肌理、色彩、线条、构图、氛围、画师风格。详细描述：手绘/板绘、平涂/厚涂、赛璐璐、二次元/治愈系/国风、线条粗细、色彩搭配、质感、细节。生成可直接用于 AI 绘画的插画关键词，包含技法、色彩、主题、氛围。"
  },
  {
    id: "reverse-3d",
    label: "3D 渲染",
    text: "反推这张 3D 图的渲染风格、材质、灯光、建模风格、精度、配色、质感、C4D/Blender 特征。详细描述：3D卡通/写实/黏土/磨砂/金属/玻璃/亚克力、光影（三点布光）、反射、粗糙度、OC渲染、软边缘、体积光。提取关键词：3D render、C4D、Blender、Octane、PBR 材质、柔光、高细节、8K、卡通质感、极简。"
  },
  {
    id: "reverse-ip-character",
    label: "IP 角色潮玩",
    text: "反推这个IP角色的形象设定、风格类型、五官表情、体型比例、服饰、配色、材质、光影、细节特征，生成同款IP角色提示词。详细描述：风格（Q版/潮玩/治愈/国风/黏土/卡通）、头身比、发型、服饰装饰、神态、动作姿态、材质（哑光/树脂/PVC/陶瓷）、质感。提取关键词：IP角色、盲盒风格、潮玩、C4D、3D 渲染、柔光、纯色背景、细腻质感、高细节、可爱、治愈、极简、全身造型。"
  }
];

type ParameterOverride = Partial<Omit<PromptParameter, "id">>;
type ParameterOverrides = Record<string, ParameterOverride>;

interface AdminDraft {
  id: string;
  category: CategoryId;
  styleGroup: string;
  zhName: string;
  enName: string;
  defaultWeight: number;
  image: string;
  zhPrompt: string;
  enPrompt: string;
  negative: string;
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

function loadLocal<T>(key: string, fallback: T): T {
  try {
    const stored = window.localStorage.getItem(key);
    return stored ? (JSON.parse(stored) as T) : fallback;
  } catch {
    return fallback;
  }
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
    defaultWeight: parameter?.defaultWeight ?? 1,
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
    defaultWeight: Number(draft.defaultWeight) || 1,
    image: draft.image.trim() || "/assets/parameters/style-photorealistic.jpg",
    zhPrompt: draft.zhPrompt.trim(),
    enPrompt: draft.enPrompt.trim(),
    negative: parseNegative(draft.negative)
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
  const [model, setModel] = useState<ModelFormat>("openai");
  const [selected, setSelected] = useState<SelectedParameter[]>([]);
  const [copied, setCopied] = useState<string | null>(null);
  const [customParameters, setCustomParameters] = useState<PromptParameter[]>(() => loadLocal(customParametersKey, []));
  const [parameterOverrides, setParameterOverrides] = useState<ParameterOverrides>(() => loadLocal(parameterOverridesKey, {}));
  const [hiddenParameters, setHiddenParameters] = useState<string[]>(() => loadLocal(hiddenParametersKey, []));
  const [adminAuthed, setAdminAuthed] = useState(false);
  const [adminLoginOpen, setAdminLoginOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const [loginForm, setLoginForm] = useState({ account: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [adminDraft, setAdminDraft] = useState<AdminDraft>(() => toAdminDraft());
  const [adminEditingId, setAdminEditingId] = useState<string | null>(null);
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

  const selectedById = useMemo(() => new Map(selected.map((item) => [item.id, item])), [selected]);
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

  const prompt = useMemo(() => buildPrompt(inputs, selected, allParameters, model), [allParameters, inputs, model, selected]);

  function updateInput<K extends keyof PromptInputs>(key: K, value: PromptInputs[K]) {
    setInputs((current) => ({ ...current, [key]: value }));
  }

  function toggleParameter(parameter: PromptParameter) {
    const isSelected = selectedById.has(parameter.id);

    if (isSelected) {
      setSelected((current) => current.filter((item) => item.id !== parameter.id));
      return;
    }

    selectParameter(parameter, parameter.defaultWeight);
  }

  function selectParameter(parameter: PromptParameter, weight: number) {
    const category = categories.find((item) => item.id === parameter.category)!;

    setSelected((current) => {
      const existing = current.find((item) => item.id === parameter.id);
      if (existing) {
        return current.map((item) => (item.id === parameter.id ? { ...item, weight } : item));
      }

      const next = category.mode === "single" ? current.filter((item) => {
        const currentParameter = allParameters.find((candidate) => candidate.id === item.id);
        return currentParameter?.category !== parameter.category;
      }) : current;

      return [...next, { id: parameter.id, weight }];
    });
  }

  function updateWeight(parameter: PromptParameter, weight: number) {
    selectParameter(parameter, weight);
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
    setModel("openai");
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

  function resetAdminChanges() {
    setCustomParameters([]);
    setParameterOverrides({});
    setHiddenParameters([]);
    saveLocal(customParametersKey, []);
    saveLocal(parameterOverridesKey, {});
    saveLocal(hiddenParametersKey, []);
    setAdminDraft(toAdminDraft());
    setAdminEditingId(null);
    setAdminNotice("已清空后台本地改动");
  }

  return (
    <>
    <main className="app-shell">
      <section className="left-panel">
        <div className="brand">
          <div className="brand-mark">
            <Sparkles size={20} />
          </div>
          <div>
            <h1>图片提示词生成器</h1>
            <p>用参考图点选参数，生成中英双语生图提示词。</p>
          </div>
        </div>

        <label className="field">
          <span>绘画主体</span>
          <textarea
            value={inputs.subjectZh}
            onChange={(event) => updateInput("subjectZh", event.target.value)}
            placeholder="例如：一位穿着红色披风的未来考古学家，站在巨型遗迹前"
          />
          <small className="field-hint">小提示：可以在主体描述里写清焦点位置，例如“焦点在人物眼睛”“画面重点在左侧产品”，用来控制视觉重点。</small>
        </label>

        <label className="field">
          <span>不要出现的内容</span>
          <textarea
            value={inputs.avoid}
            onChange={(event) => updateInput("avoid", event.target.value)}
            placeholder="例如：低清晰度，畸形手，文字，水印，过曝"
          />
        </label>

        <div className="generation-settings">
          <label className="field">
            <span>图片比例</span>
            <select value={inputs.aspectRatio} onChange={(event) => updateInput("aspectRatio", event.target.value)}>
              {aspectRatioOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.zhName} · {option.note}
                </option>
              ))}
            </select>
          </label>

          <label className="field">
            <span>清晰度</span>
            <select value={inputs.clarity} onChange={(event) => updateInput("clarity", event.target.value)}>
              {clarityOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.zhName} · {option.note}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="field keyword-search-field">
          <span>关键词搜索</span>
          <div className="search-box inline-search">
            <Search size={16} />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="搜索风格、镜头、背景、民族、版式..."
            />
          </div>
          <small className="field-hint">输入关键词后会在全部分类里查找匹配项。</small>
        </label>

        <div className="model-block">
          <div className="section-title">
            <SlidersHorizontal size={17} />
            <span>输出模型</span>
          </div>
          <div className="model-options">
            {modelOptions.map((option) => (
              <button
                key={option.id}
                className={option.id === model ? "model-option active" : "model-option"}
                onClick={() => setModel(option.id)}
                type="button"
              >
                <strong>{option.zhName}</strong>
                <small>{option.note}</small>
              </button>
            ))}
          </div>
        </div>

        <div className="admin-entry">
          <button className="admin-button" onClick={openAdmin} type="button">
            <Shield size={16} />
            管理后台
          </button>
          <small>管理员可新增、隐藏、调整参数与提示词</small>
        </div>

        <button className="reset-button" onClick={resetAll} type="button">
          <RotateCcw size={16} />
          重置
        </button>
      </section>

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
                {category.zhName}
                <small>{category.mode === "single" ? "单选" : "多选"}</small>
              </button>
            ))}
          </div>

          <div className="search-row">
            <label className="search-box">
              <Search size={16} />
              <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="搜索参数、风格、材质..." />
            </label>
            <button className={selectedOnly ? "pill active" : "pill"} onClick={() => setSelectedOnly((value) => !value)} type="button">
              已选 {selected.length}
            </button>
          </div>

          {!selectedOnly && (
            <p className="category-note">
              {activeCategoryInfo.zhName} / {activeCategoryInfo.enName}：{activeCategoryInfo.description}
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
                  {group.zhName}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="parameter-grid">
          {filteredParameters.map((parameter) => {
            const selectedItem = selectedById.get(parameter.id);
            const visibleWeight = selectedItem?.weight ?? parameter.defaultWeight;
            return (
              <article
                key={parameter.id}
                className={selectedItem ? "parameter-card selected" : "parameter-card"}
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
                  <div className={selectedItem ? "weight-rail active" : "weight-rail"} title="拖动调整提示词权重，未选中时会自动选中">
                    <span>{visibleWeight.toFixed(1)}</span>
                    <div className="vertical-slider-wrap">
                      <input
                        aria-label={`${parameter.zhName} 权重`}
                        className="vertical-slider"
                        type="range"
                        min="0.2"
                        max="2"
                        step="0.1"
                        value={visibleWeight}
                        onPointerDown={() => selectParameter(parameter, visibleWeight)}
                        onChange={(event) => updateWeight(parameter, Number(event.target.value))}
                      />
                    </div>
                    <small>权重</small>
                  </div>
                </div>
                <div className="card-meta">
                  <div>
                    <strong>{parameter.zhName}</strong>
                    <span>{parameter.enName}</span>
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
            <h2>提示词预览</h2>
            <p>{modelOptions.find((option) => option.id === model)?.zhName}</p>
          </div>
          <button className="copy-all" onClick={() => copyText("all", `${prompt.zhPrompt}\n\n${prompt.enPrompt}\n\nNegative: ${prompt.negativePrompt}\n\nPSD: ${psdLayerPrompt}`)} type="button">
            <Clipboard size={16} />
            全部复制
          </button>
        </div>

        <PromptBox label="中文解释版" copied={copied === "zh"} value={prompt.zhPrompt} onCopy={() => copyText("zh", prompt.zhPrompt)} />
        <PromptBox label="模型生图版" copied={copied === "en"} value={prompt.enPrompt} onCopy={() => copyText("en", prompt.enPrompt)} />
        <PromptBox label="负面提示词" copied={copied === "negative"} value={prompt.negativePrompt} onCopy={() => copyText("negative", prompt.negativePrompt)} />

        <section className="quick-prompt-box">
          <div className="quick-prompt-header">
            <div>
              <h3>快捷复制</h3>
              <p>辅助提示词不展开显示，只点击复制。</p>
            </div>
          </div>

          <button className="quick-copy-button wide" onClick={() => copyText("psd", psdLayerPrompt)} type="button">
            {copied === "psd" ? <Check size={15} /> : <Copy size={15} />}
            {copied === "psd" ? "已复制 PSD 分层提示词" : "复制 PSD 分层提示词"}
          </button>

          <div className="reverse-prompt-title">提示词反推</div>
          <div className="reverse-prompt-grid">
            {reversePromptTemplates.map((template) => (
              <button className="quick-copy-button" key={template.id} onClick={() => copyText(template.id, template.text)} type="button">
                {copied === template.id ? <Check size={15} /> : <Copy size={15} />}
                {copied === template.id ? "已复制" : template.label}
              </button>
            ))}
          </div>
        </section>

        <div className={checkedPanelOpen ? "selected-list open" : "selected-list"}>
          <button className="selected-toggle" onClick={() => setCheckedPanelOpen((value) => !value)} type="button">
            <span>已勾选 {prompt.selectedItems.length}</span>
            <strong>{checkedPanelOpen ? "收起" : "展开"}</strong>
          </button>
          {checkedPanelOpen && (
            prompt.selectedItems.length === 0 ? (
              <p className="empty">从中间图库选择风格、镜头、光线或用途。</p>
            ) : (
              <div className="selected-rows">
                {prompt.selectedItems.map(({ parameter, weight }) => (
                  <div className="selected-row" key={parameter.id}>
                    <span>{parameter.zhName}</span>
                    <strong>{weight.toFixed(1)}</strong>
                  </div>
                ))}
              </div>
            )
          )}
        </div>

        <section className="feedback-box">
          <div className="feedback-header">
            <div>
              <h3>意见建议</h3>
              <p>提交后会保存到管理员后台，管理员登录后可查看文字和图片。</p>
            </div>
            <MessageSquare size={18} />
          </div>

          <textarea
            className="feedback-textarea"
            value={feedbackText}
            onChange={(event) => setFeedbackText(event.target.value)}
            placeholder="写下你希望增加的风格、参数、使用问题或优化建议..."
          />

          <div className="feedback-actions">
            <label className="upload-button">
              <ImageIcon size={15} />
              插入图片
              <input accept="image/*" onChange={handleFeedbackImage} type="file" />
            </label>
            <button className="primary-action" onClick={submitFeedback} type="button">
              <Send size={15} />
              提交
            </button>
          </div>

          {feedbackImage && (
            <div className="feedback-preview">
              <img src={feedbackImage.preview} alt={feedbackImage.name} />
              <div>
                <strong>{feedbackImage.name}</strong>
                <span>{formatFileSize(feedbackImage.size)}</span>
                <button onClick={removeFeedbackImage} type="button">移除图片</button>
              </div>
            </div>
          )}

          {feedbackStatus && <p className="feedback-status">{feedbackStatus}</p>}
        </section>
      </section>
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
        hiddenParameters={hiddenParameters}
        parameters={adminParameters}
        onClose={() => setAdminOpen(false)}
        onCreate={createParameter}
        onDraftChange={setAdminDraft}
        onEdit={editParameter}
        onClearFeedback={clearFeedbackEntries}
        onRemoveFeedback={removeFeedbackEntry}
        onRemove={removeParameter}
        onReset={resetAdminChanges}
        onRestore={restoreParameter}
        onSave={saveAdminDraft}
        onSearchChange={setAdminSearch}
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
  feedbackEntries: FeedbackEntry[];
  hiddenParameters: string[];
  parameters: PromptParameter[];
  onClose: () => void;
  onCreate: () => void;
  onDraftChange: (draft: AdminDraft) => void;
  onEdit: (parameter: PromptParameter) => void;
  onClearFeedback: () => void;
  onRemoveFeedback: (id: string) => void;
  onRemove: (parameter: PromptParameter) => void;
  onReset: () => void;
  onRestore: (id: string) => void;
  onSave: () => void;
  onSearchChange: (value: string) => void;
}

function AdminPanel({
  adminDraft,
  adminEditingId,
  adminNotice,
  adminSearch,
  customParameters,
  feedbackEntries,
  hiddenParameters,
  parameters: managedParameters,
  onClose,
  onCreate,
  onDraftChange,
  onEdit,
  onClearFeedback,
  onRemoveFeedback,
  onRemove,
  onReset,
  onRestore,
  onSave,
  onSearchChange
}: AdminPanelProps) {
  const customIds = new Set(customParameters.map((parameter) => parameter.id));
  const hiddenIds = new Set(hiddenParameters);
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

        <div className="admin-layout">
          <section className="admin-list-panel">
            <div className="admin-actions">
              <button className="primary-action" onClick={onCreate} type="button">
                <Plus size={16} />
                新增参数
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
              <span>总计 {managedParameters.length}</span>
              <span>自定义 {customParameters.length}</span>
              <span>隐藏 {hiddenParameters.length}</span>
            </div>

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

            <div className="admin-parameter-list">
              {filteredParameters.map((parameter) => {
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
              })}
            </div>
          </section>

          <section className="admin-editor-panel">
            <div className="admin-editor-title">
              <div>
                <h3>{adminEditingId ? "编辑参数" : "新增参数"}</h3>
                <p>{adminEditingId ? "内置参数会保存为本地覆盖，自定义参数会直接更新。" : "新增参数会进入自定义库。"}</p>
              </div>
              {adminNotice && <span>{adminNotice}</span>}
            </div>

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

              <label className="field">
                <span>默认权重</span>
                <input
                  type="number"
                  min="0.2"
                  max="2"
                  step="0.1"
                  value={adminDraft.defaultWeight}
                  onChange={(event) => onDraftChange({ ...adminDraft, defaultWeight: Number(event.target.value) })}
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

            <label className="field">
              <span>展示图路径</span>
              <input value={adminDraft.image} onChange={(event) => onDraftChange({ ...adminDraft, image: event.target.value })} />
            </label>

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
          </section>
        </div>
      </aside>
    </div>
  );
}

interface PromptBoxProps {
  label: string;
  copied: boolean;
  value: string;
  onCopy: () => void;
}

function PromptBox({ label, copied, value, onCopy }: PromptBoxProps) {
  return (
    <section className="prompt-box">
      <div className="prompt-box-header">
        <h3>{label}</h3>
        <button onClick={onCopy} type="button">
          {copied ? <Check size={15} /> : <Copy size={15} />}
          {copied ? "已复制" : "复制"}
        </button>
      </div>
      <textarea readOnly value={value} />
    </section>
  );
}
