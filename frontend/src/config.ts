import type { CategoryId, PromptInputs } from "./types";

export type UiLanguage = "zh" | "en";

export const aspectRatioOptions = [
  { id: "auto", zhName: "自动比例", enName: "Auto", zhNote: "交给模型判断", enNote: "let the model decide" },
  { id: "1:1", zhName: "1:1 方图", enName: "1:1 Square", zhNote: "头像 / 图标", enNote: "avatar / icon" },
  { id: "16:9", zhName: "16:9 横版", enName: "16:9 Landscape", zhNote: "封面 / 视频", enNote: "cover / video" },
  { id: "9:16", zhName: "9:16 竖版", enName: "9:16 Portrait", zhNote: "手机 / Story", enNote: "mobile / story" },
  { id: "4:3", zhName: "4:3 横版", enName: "4:3 Landscape", zhNote: "传统屏幕", enNote: "classic screen" },
  { id: "3:4", zhName: "3:4 竖版", enName: "3:4 Portrait", zhNote: "海报 / 人像", enNote: "poster / portrait" },
  { id: "3:2", zhName: "3:2 摄影横版", enName: "3:2 Photo Landscape", zhNote: "照片横幅", enNote: "photo banner" },
  { id: "2:3", zhName: "2:3 摄影竖版", enName: "2:3 Photo Portrait", zhNote: "写真 / 封面", enNote: "portrait / cover" },
  { id: "21:9", zhName: "21:9 超宽", enName: "21:9 Ultrawide", zhNote: "电影宽银幕", enNote: "cinematic widescreen" },
];

export const clarityOptions = [
  { id: "standard", zhName: "标准", enName: "Standard", zhNote: "轻量快速", enNote: "light and fast" },
  { id: "high", zhName: "高清", enName: "High", zhNote: "默认推荐", enNote: "recommended default" },
  { id: "ultra", zhName: "超清", enName: "Ultra", zhNote: "细节更多", enNote: "more detail" },
  { id: "4k", zhName: "4K 级", enName: "4K Level", zhNote: "放大查看", enNote: "close inspection" },
];

export const defaultInputs: PromptInputs = {
  subjectZh: "",
  avoid: "低清晰度，模糊，噪点，过曝，欠曝，畸形身体，畸形手，坏手，多手指，少手指，融合手指，断指，扭曲手指，畸形脸，五官错位，斜视，坏眼睛，多余肢体，缺失肢体，比例错误，透视错误，重复人物，文字，乱码，水印，logo，边框，裁切主体，画面脏污，压缩痕迹，马赛克，低质量",
  aspectRatio: "auto",
  clarity: "high",
};

export interface GallerySection {
  id: string;
  category: CategoryId;
  importance: "core" | "important" | "optional";
  zhName: string;
  enName: string;
  zhDescription: string;
  enDescription: string;
  groups?: string[];
  useCases?: Array<"scene" | "design">;
}

export interface GalleryWorkflow {
  id: string;
  zhName: string;
  enName: string;
  zhGuide: string;
  enGuide: string;
  sections: GallerySection[];
}

export const galleryWorkflows: GalleryWorkflow[] = [
  {
    id: "core-setup", zhName: "2 核心定向", enName: "2 Core Setup",
    zhGuide: "先确定图片用途、风格、场景和配色，再补充整体情绪。", enGuide: "Set purpose, visual style, scene, and palette first, then add the overall mood.",
    sections: [
      { id: "purpose", category: "purpose", importance: "core", zhName: "图片用途", enName: "Purpose", zhDescription: "先确定最终是写真、产品图、设定图、封面还是展示图；排版风格也在这里选择。", enDescription: "Decide whether the image is a portrait, product shot, design sheet, cover, or display image.", useCases: ["scene", "design"] },
      { id: "style", category: "style", importance: "core", zhName: "画面风格", enName: "Style", zhDescription: "决定整体视觉方向；艺术家画派、民族非遗、渲染、特效和调色都在这里选择。", enDescription: "Choose the main visual direction, including artists, craft, render, effects, and grading.", useCases: ["scene", "design"] },
      { id: "scene", category: "scene", importance: "core", zhName: "场景环境", enName: "Scene", zhDescription: "决定主体所在空间和背景环境；可进一步选择时代与世界观。", enDescription: "Choose the space, environment, era, and world context.", useCases: ["scene"] },
      { id: "palette", category: "palette", importance: "core", zhName: "配色方案", enName: "Color Palette", zhDescription: "通过色卡和对应示意画面选择主色、辅助色与整体配色关系。", enDescription: "Choose primary and supporting color relationships from matching visual palettes.", useCases: ["design"] },
      { id: "mood", category: "mood", importance: "optional", zhName: "情绪氛围", enName: "Mood", zhDescription: "补充明亮、安静、悬疑、浪漫或精致等整体感受。", enDescription: "Add an overall emotional atmosphere.", useCases: ["scene", "design"] },
    ],
  },
  {
    id: "character-human", zhName: "3 人物角色", enName: "3 Character",
    zhGuide: "画面有人时优先使用：角色身份、姿势、衣着和人物关系会明显改变结果。", enGuide: "Use this when people appear: role, pose, outfit, and placement strongly change the result.",
    sections: [
      { id: "character", category: "character", importance: "core", zhName: "角色身份", enName: "Character Role", zhDescription: "年龄、体态、职业和角色类型。", enDescription: "Age, body type, profession, and role type." },
      { id: "pose", category: "pose", importance: "important", zhName: "人物姿势", enName: "Pose", zhDescription: "站坐躺、动作、舞蹈、互动和镜头前姿态。", enDescription: "Standing, sitting, movement, dance, and interaction." },
      { id: "story-action", category: "story-action", importance: "optional", zhName: "画面事件", enName: "Scene Action", zhDescription: "选择日常、创作、工作、探索或戏剧动作。", enDescription: "Daily life, creation, work, exploration, or dramatic action." },
      { id: "clothing", category: "clothing", importance: "important", zhName: "衣着服饰", enName: "Clothing", zhDescription: "上衣、裤裙、外套、制服、传统服饰和配饰。", enDescription: "Tops, bottoms, uniforms, traditional garments, and accessories." },
      { id: "camera-human-placement", category: "camera", importance: "important", zhName: "人物位置关系", enName: "Human Placement", zhDescription: "控制人物远近、画面位置和多人关系。", enDescription: "Control distance, frame position, and multi-person relationships.", groups: ["person-position", "group-relationship"] },
      { id: "expression", category: "expression", importance: "important", zhName: "表情神态", enName: "Expression", zhDescription: "脸部情绪、眼神和性格气质。", enDescription: "Facial emotion, gaze, and personality." },
      { id: "hair-makeup", category: "hair-makeup", importance: "optional", zhName: "发型妆容", enName: "Hair & Makeup", zhDescription: "发长、发型、发丝动态和妆面。", enDescription: "Hair length, shape, motion, and makeup." },
      { id: "portrait-retouch", category: "color-grading", importance: "optional", zhName: "人像修图", enName: "Portrait Retouch", zhDescription: "瘦脸、双下巴、肤质、五官和衣物背景清理。", enDescription: "Face shape, skin detail, features, clothing, and cleanup.", groups: ["portrait-retouch", "skin-detail"] },
      { id: "ethnicity", category: "ethnicity", importance: "optional", zhName: "外貌参考", enName: "Appearance Reference", zhDescription: "中性描述肤色、发质和面部骨相。", enDescription: "Neutral references for skin tone, hair texture, and facial structure." },
    ],
  },
  {
    id: "camera-light", zhName: "4 构图光线", enName: "4 Camera & Light",
    zhGuide: "再像摄影师一样控制画面：构图、镜头、光线和留白。", enGuide: "Control the image like a photographer: composition, camera, lighting, and whitespace.",
    sections: [
      { id: "camera-shot", category: "camera", importance: "core", zhName: "构图/镜头", enName: "Composition & Camera", zhDescription: "画面范围、焦距、角度、构图法则、运动和镜头效果。", enDescription: "Shot scale, focal length, angles, composition, motion, and lens effects.", groups: ["shot-size", "composition-rule", "visual-guide", "depth", "focal-length", "camera-angle", "angle", "motion", "lens-effect", "composition"], useCases: ["scene", "design"] },
      { id: "lighting", category: "lighting", importance: "core", zhName: "光线氛围", enName: "Lighting", zhDescription: "自然光、室内光、戏剧光和科幻光效。", enDescription: "Natural, interior, dramatic, and sci-fi lighting.", useCases: ["scene", "design"] },
      { id: "layout", category: "layout", importance: "important", zhName: "排版留白", enName: "Layout", zhDescription: "主体位置、留白方向、安全区和信息展示。", enDescription: "Subject placement, negative space, safe areas, and information layout.", useCases: ["design"] },
      { id: "background", category: "background", importance: "optional", zhName: "背景质感", enName: "Background", zhDescription: "纯色、纸张、织物、影棚、材质和自然底板。", enDescription: "Solid color, paper, fabric, studio, material, and natural backdrops.", useCases: ["scene", "design"] },
    ],
  },
];

export interface VirtualGroupMapping {
  category: CategoryId;
  groups?: string[];
}

export const virtualGroupCategory: Partial<Record<CategoryId, Partial<Record<string, VirtualGroupMapping>>>> = {
  style: {
    "artist-style": { category: "artist-style" },
    "ethnic-style": { category: "ethnic-style" },
    render: { category: "render" },
    "visual-effect": { category: "visual-effect" },
    "color-grading": {
      category: "color-grading",
      groups: ["clean-bright", "cinematic", "film-vintage", "camera-look", "commercial", "drone-aerial", "mood"],
    },
    "color-material": { category: "color-material" },
  },
  purpose: { "layout-style": { category: "layout-style" } },
  scene: { "era-world": { category: "era" } },
  camera: { "shot-size": { category: "framing" } },
};

export const groupNameEn: Record<string, string> = {
  all: "All", base: "Basic", anime: "Animation / Anime", eastern: "Eastern / Folk", "photo-film-3d": "Photo / Film / 3D",
  "artist-style": "Artist / School", "ethnic-style": "Ethnic / Craft", render: "Render Texture", "visual-effect": "Visual Effects",
  "color-grading": "Color Grading", "color-material": "Color & Material", "layout-style": "Layout Style", "design-retro": "Design / Retro",
  "craft-print": "Craft / Print", "shot-size": "Shot Scale", "person-position": "Person Position", "group-relationship": "Group Relationship",
  "portrait-retouch": "Portrait Retouch", "skin-detail": "Skin Detail", "era-world": "Era / World", region: "Regional Reference",
  "skin-tone": "Skin Tone", "facial-feature": "Facial Features", "hair-texture": "Natural Hair", mixed: "Mixed / Group",
  "age-stage": "Age Stage", "body-type": "Body Type", profession: "Profession", "social-role": "Social Role", fantasy: "Fantasy", "sci-fi": "Sci-Fi",
  "negative-space": "Whitespace", "subject-position": "Subject Position", material: "Material", color: "Color", fabric: "Fabric",
  "camera-angle": "Camera Angle", motion: "Motion", natural: "Natural", interior: "Interior", dramatic: "Dramatic", realism: "Realism",
  stylized: "Stylized", elemental: "Elemental", atmosphere: "Atmosphere", social: "Social", design: "Design", cover: "Cover",
  commercial: "Commercial", photography: "Photography", industrial: "Industrial", translucent: "Translucent",
};

export const uiText = {
  zh: {
    generator: "提示词生成器", featuredPrompts: "精选提示词", more: "更多", brandSubtitle: "用参考图点选参数，生成中英双语生图提示词。",
    featuredHint: "常用修图、图生图、文生图和图片处理指令。", subject: "绘画主体", avoid: "不要出现的内容", aspectRatio: "图片比例", clarity: "清晰度",
    focusHint: "小提示：可以在主体描述里写清焦点位置，例如“焦点在人物眼睛”“画面重点在左侧产品”，用来控制视觉重点。",
    search: "搜索参数、风格、材质...", featuredSearch: "搜索精选提示词、用途或关键词...", selected: "已选", single: "单选", multi: "多选",
    core: "核心", important: "重要", optional: "可选", scene: "场景生成", design: "设计生成", promptPreview: "提示词预览",
    copied: "已复制", copy: "复制", collapse: "收起", expand: "展开", reset: "重置", feedback: "意见建议", submit: "提交",
    feedbackHint: "提交后会保存到后台，工作人员可查看文字和图片。", upload: "插入图片", login: "登录 / 注册", myTemplates: "我的模板", logout: "退出登录",
    saveTemplate: "保存为模板", zh: "中文", en: "English",
  },
  en: {
    generator: "Prompt Generator", featuredPrompts: "Featured Prompts", more: "More", brandSubtitle: "Select visual reference cards to generate bilingual AI image prompts.",
    featuredHint: "Common retouching, image-to-image, text-to-image, and utility prompts.", subject: "Subject", avoid: "Negative Prompt", aspectRatio: "Aspect Ratio", clarity: "Clarity",
    focusHint: "Tip: describe the focus position, such as focus on the eyes or the product on the left.", search: "Search parameters, styles, materials...",
    featuredSearch: "Search featured prompts, use cases, or keywords...", selected: "Selected", single: "Single", multi: "Multi", core: "Core",
    important: "Important", optional: "Optional", scene: "Scene Generation", design: "Design Generation", promptPreview: "Prompt Preview", copied: "Copied",
    copy: "Copy", collapse: "Collapse", expand: "Expand", reset: "Reset", feedback: "Feedback", submit: "Submit",
    feedbackHint: "Submissions are stored in the service dashboard for review.", upload: "Attach Image", login: "Sign In / Register", myTemplates: "My Templates",
    logout: "Sign Out", saveTemplate: "Save as Template", zh: "中文", en: "English",
  },
};
