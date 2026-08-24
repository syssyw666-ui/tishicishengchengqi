export type FeaturedPromptCategory = "color-edit" | "image-to-image" | "utility" | "text-to-image";

export interface FeaturedPromptItem {
  id: string;
  category: FeaturedPromptCategory;
  group?: string;
  zhTitle: string;
  enTitle: string;
  zhDescription: string;
  enDescription: string;
  prompt: string;
  originalImage?: string;
  resultImage?: string;
  image?: string;
}

export const featuredPromptCategories: Array<{ id: FeaturedPromptCategory; zhName: string; enName: string }> = [
  { id: "color-edit", zhName: "调色修图", enName: "Color Editing" },
  { id: "image-to-image", zhName: "图生图", enName: "Image To Image" },
  { id: "utility", zhName: "常用图片处理提示词", enName: "Utility Prompts" },
  { id: "text-to-image", zhName: "文生图", enName: "Text To Image" }
];

export const featuredPromptGroups: Partial<Record<FeaturedPromptCategory, Array<{ id: string; zhName: string; enName: string }>>> = {
  "color-edit": [
    { id: "all", zhName: "全部调色修图", enName: "All" },
    { id: "color-tone", zhName: "调色", enName: "Color Grading" },
    { id: "portrait-retouch", zhName: "人物修图", enName: "Portrait Retouch" }
  ]
};

const psdLayerPrompt = "帮我生成PS可以打开的分成PSD文件，然后把生成的图片拆分为若干个元素，每个元素不要改变位置，在PS里生成对应的图层。";

// 精选提示词项目规范：
// 1. 调色修图：必须强调“严格基于原图”，只改色彩、曝光、对比、光影、质感，不改变主体、构图和位置。
// 2. 图生图：必须使用“实验提示词”开头，涉及可替换的风格、动作、场景、镜头、背景等，用中文引号标注，例如“目标风格”。
// 3. 文生图：必须给用户可替换模板，主体、场景、风格、构图、材质、用途等关键变量用中文引号标注。
// 4. 常用图片处理提示词：不要求图片，但必须说明输出目标和拆解维度，保持可直接复制使用。
// 5. 所有精选提示词避免直接要求版权角色、品牌词或不可控作者姓名，优先使用通用视觉语言。

export const featuredPrompts: FeaturedPromptItem[] = [
  {
    id: "color-japanese-airy",
    category: "color-edit",
    group: "color-tone",
    zhTitle: "日系通透糖水片",
    enTitle: "Japanese Airy Retouch",
    zhDescription: "适合人像、旅行、生活方式照片。",
    enDescription: "For portraits, travel, and lifestyle photos.",
    originalImage: "/assets/featured/color-japanese-airy-original.jpg",
    resultImage: "/assets/featured/color-japanese-airy-result.jpg",
    prompt: "请严格以原图为基础进行调色修图，只改变色彩、曝光、对比度、肤色和画面质感，不改变人物身份、姿态、构图、背景和物体位置。目标效果：日系通透糖水片，提高整体明亮度，保留自然肤色，降低硬阴影，加入柔和高光、浅 pastel 色调、干净空气感和轻微胶片颗粒。不要过曝，不要磨皮过度，不要改变五官和主体结构。"
  },
  {
    id: "color-leica-documentary",
    category: "color-edit",
    group: "color-tone",
    zhTitle: "莱卡纪实色彩",
    enTitle: "Leica Documentary Color",
    zhDescription: "适合街拍、纪实、人文照片。",
    enDescription: "For street, documentary, and editorial images.",
    originalImage: "/assets/featured/color-leica-documentary-original.jpg",
    resultImage: "/assets/featured/color-leica-documentary-result.jpg",
    prompt: "请严格以原图为基础进行调色修图，只改变色彩、曝光、对比度、黑位和颗粒质感，不改变主体、构图、背景和物体位置。目标效果：莱卡纪实摄影质感，保留真实细节，增强微对比和黑位层次，色彩克制但饱满，红色与绿色自然突出，加入轻微胶片颗粒和镜头真实感。不要过度锐化，不要塑料质感，不要改变画面内容。"
  },
  {
    id: "color-cinematic-teal-orange",
    category: "color-edit",
    group: "color-tone",
    zhTitle: "青橙电影调色",
    enTitle: "Teal Orange Cinema",
    zhDescription: "适合海报、剧照、人物场景。",
    enDescription: "For posters, stills, portraits, and scenes.",
    originalImage: "/assets/featured/color-cinematic-teal-orange-original.jpg",
    resultImage: "/assets/featured/color-cinematic-teal-orange-result.jpg",
    prompt: "请严格以原图为基础进行调色修图，只改变色彩、曝光、对比度、光影氛围和电影质感，不改变主体、姿态、构图、背景和物体位置。目标效果：青橙电影级调色，阴影偏青蓝，高光偏暖橙，增强层次、景深和氛围光，保留主体肤色自然，整体具有电影剧照质感。不要过度饱和，不要脏灰，不要改变主体形态。"
  },
  {
    id: "color-blockbuster-contrast",
    category: "color-edit",
    group: "color-tone",
    zhTitle: "商业大片高反差",
    enTitle: "Blockbuster Contrast",
    zhDescription: "适合动作、汽车、运动、海报级照片。",
    enDescription: "For action, cars, sports, and poster-grade photos.",
    originalImage: "/assets/featured/color-blockbuster-contrast-original.jpg",
    resultImage: "/assets/featured/color-blockbuster-contrast-result.jpg",
    prompt: "请严格以原图为基础进行调色修图，不改变主体、构图、姿态和物体位置。目标效果：商业大片高反差调色，压低黑位，增强高光方向性，提升金属、皮革、建筑或道具的微对比，保留暗部细节，画面具有强烈戏剧张力和高级电影海报质感。不要过度锐化，不要脏灰，不要让肤色偏色。"
  },
  {
    id: "color-moody-cinema",
    category: "color-edit",
    group: "color-tone",
    zhTitle: "暗调情绪电影感",
    enTitle: "Moody Cinema",
    zhDescription: "适合夜景、人像、悬疑氛围照片。",
    enDescription: "For night scenes, portraits, and suspense moods.",
    originalImage: "/assets/featured/color-moody-cinema-original.jpg",
    resultImage: "/assets/featured/color-moody-cinema-result.jpg",
    prompt: "请严格以原图为基础进行暗调电影感修图，只调整曝光、对比、色彩、黑位和局部光影，不改变画面内容。目标效果：低调光、深黑位、冷暖局部对比、暗部保留层次，主体被柔和方向光强调，整体情绪克制、神秘、沉浸。不要黑成一片，不要丢失主体细节，不要改变人物五官。"
  },
  {
    id: "color-kodak-gold",
    category: "color-edit",
    group: "color-tone",
    zhTitle: "柯达金胶片",
    enTitle: "Kodak Gold Film",
    zhDescription: "适合日常、旅行、家庭、阳光照片。",
    enDescription: "For daily life, travel, family, and sunny photos.",
    originalImage: "/assets/featured/color-kodak-gold-original.jpg",
    resultImage: "/assets/featured/color-kodak-gold-result.jpg",
    prompt: "请严格以原图为基础进行胶片调色，只改变色彩、曝光、对比、颗粒和高光质感。目标效果：柯达金胶片感，暖黄色高光，轻微橙红肤色，绿色偏柔和，蓝色不过饱和，中等对比，加入自然胶片颗粒和轻微褪色感。不要过度怀旧，不要偏黄发脏，不要改变主体。"
  },
  {
    id: "color-fuji-green",
    category: "color-edit",
    group: "color-tone",
    zhTitle: "富士清透绿调",
    enTitle: "Fuji Clean Green",
    zhDescription: "适合旅行、人像、街景、自然光照片。",
    enDescription: "For travel, portraits, streets, and natural light.",
    originalImage: "/assets/featured/color-fuji-green-original.jpg",
    resultImage: "/assets/featured/color-fuji-green-result.jpg",
    prompt: "请严格以原图为基础进行富士感调色，不改变人物和构图。目标效果：清透绿调，绿色自然偏青，蓝色干净，肤色柔和，整体对比适中，高光不刺眼，阴影保留空气感，加入轻微胶片颗粒。不要荧光绿，不要过曝，不要磨皮过度。"
  },
  {
    id: "color-hong-kong-neon",
    category: "color-edit",
    group: "color-tone",
    zhTitle: "港风霓虹胶片",
    enTitle: "Hong Kong Neon Film",
    zhDescription: "适合夜景街拍、城市人像。",
    enDescription: "For night street photos and city portraits.",
    originalImage: "/assets/featured/color-hong-kong-neon-original.jpg",
    resultImage: "/assets/featured/color-hong-kong-neon-result.jpg",
    prompt: "请严格以原图为基础进行港风霓虹胶片调色，只改变色彩、光影、颗粒和氛围。目标效果：霓虹红蓝对比，暗部带青紫色，招牌光与路面反光更有层次，肤色尽量自然，加入胶片颗粒、轻微晕影和复古街头质感。不要新增文字招牌，不要改变街景结构，不要过度饱和。"
  },
  {
    id: "color-portrait-natural-skin",
    category: "color-edit",
    group: "portrait-retouch",
    zhTitle: "自然肤色精修",
    enTitle: "Natural Skin Retouch",
    zhDescription: "保留真实纹理的人像基础精修。",
    enDescription: "Basic portrait retouch while preserving real texture.",
    originalImage: "/assets/featured/color-portrait-natural-skin-original.jpg",
    resultImage: "/assets/featured/color-portrait-natural-skin-result.jpg",
    prompt: "请严格以原图为基础进行人像修图，不改变人物身份、五官比例、脸型、身材、发型和姿态。目标效果：自然肤色精修，修正肤色不均、轻微暗沉和局部泛红，保留毛孔与真实皮肤纹理，柔化黑眼圈和法令纹但不过度磨皮，眼神更清晰，整体干净自然。不要塑料皮肤，不要改变长相，不要瘦脸过度。"
  },
  {
    id: "color-portrait-beauty-commercial",
    category: "color-edit",
    group: "portrait-retouch",
    zhTitle: "商业美妆精修",
    enTitle: "Commercial Beauty Retouch",
    zhDescription: "适合妆容、护肤、棚拍人像。",
    enDescription: "For makeup, skincare, and studio portraits.",
    originalImage: "/assets/featured/color-portrait-beauty-commercial-original.jpg",
    resultImage: "/assets/featured/color-portrait-beauty-commercial-result.jpg",
    prompt: "请严格以原图为基础进行商业美妆修图，不改变五官和妆容设计。目标效果：高级美妆广告质感，肤色均匀通透，保留真实皮肤纹理，眼妆、唇妆、睫毛、眉毛边缘更精致，面部高光和阴影更立体，背景干净，整体适合美妆海报。不要磨皮过度，不要改变妆容颜色，不要生成假睫毛或多余饰品。"
  },
  {
    id: "color-portrait-id-photo",
    category: "color-edit",
    group: "portrait-retouch",
    zhTitle: "证件照自然修整",
    enTitle: "ID Photo Cleanup",
    zhDescription: "适合证件照、头像、职业照。",
    enDescription: "For ID photos, avatars, and professional portraits.",
    originalImage: "/assets/featured/color-portrait-id-photo-original.jpg",
    resultImage: "/assets/featured/color-portrait-id-photo-result.jpg",
    prompt: "请严格以原图为基础进行证件照自然修整，不改变人物身份、脸型、五官比例、发型和服装。目标效果：曝光均匀，肤色自然，背景更干净，面部轻微祛瑕，眼神清晰，衣领与发丝边缘整洁，整体正式、可信、清爽。不要美颜过度，不要改变表情，不要改变衣服款式。"
  },
  {
    id: "color-portrait-mature-texture",
    category: "color-edit",
    group: "portrait-retouch",
    zhTitle: "成熟质感人像",
    enTitle: "Mature Portrait Texture",
    zhDescription: "保留年龄感和真实皮肤质感。",
    enDescription: "Preserve age character and real skin texture.",
    originalImage: "/assets/featured/color-portrait-mature-texture-original.jpg",
    resultImage: "/assets/featured/color-portrait-mature-texture-result.jpg",
    prompt: "请严格以原图为基础进行成熟人像修图，不改变人物年龄感、五官结构和面部特征。目标效果：保留皱纹、皮肤纹理和真实气质，修正局部杂色和曝光问题，增强眼神、轮廓光和面部层次，整体呈现高级肖像摄影质感。不要年轻化过度，不要磨平皱纹，不要改变人物身份。"
  },
  {
    id: "color-portrait-freckle-soften",
    category: "color-edit",
    group: "portrait-retouch",
    zhTitle: "雀斑淡化修复",
    enTitle: "Freckle Softening",
    zhDescription: "淡化明显雀斑，保留自然皮肤质感。",
    enDescription: "Soften visible freckles while keeping natural skin texture.",
    originalImage: "/assets/featured/color-portrait-freckle-soften-original.jpg",
    resultImage: "/assets/featured/color-portrait-freckle-soften-result.jpg",
    prompt: "请严格以原图为基础进行人物皮肤修图，不改变人物身份、脸型、五官比例、肤色基调和表情。目标效果：自然淡化脸部明显雀斑和色素点，保留少量真实皮肤纹理、毛孔和自然肤色层次，让皮肤更干净但不塑料。不要完全磨平皮肤，不要改变长相，不要让脸部失去真实质感。"
  },
  {
    id: "color-portrait-acne-blemish",
    category: "color-edit",
    group: "portrait-retouch",
    zhTitle: "痘痘痘印修复",
    enTitle: "Acne Blemish Cleanup",
    zhDescription: "清理痘痘、痘印、局部泛红。",
    enDescription: "Clean acne, blemishes, and local redness.",
    originalImage: "/assets/featured/color-portrait-acne-blemish-original.jpg",
    resultImage: "/assets/featured/color-portrait-acne-blemish-result.jpg",
    prompt: "请严格以原图为基础进行痘痘痘印修复，不改变人物身份、脸型、五官、妆容和光影方向。目标效果：清理明显痘痘、痘印、闭口、局部泛红和皮肤小瑕疵，均匀肤色，保留真实毛孔和皮肤纹理。不要过度磨皮，不要改变肤色种族特征，不要让面部变成假皮。"
  },
  {
    id: "color-portrait-dark-circle",
    category: "color-edit",
    group: "portrait-retouch",
    zhTitle: "黑眼圈眼袋淡化",
    enTitle: "Dark Circle Cleanup",
    zhDescription: "改善疲惫感，保留眼部真实结构。",
    enDescription: "Reduce tiredness while preserving eye structure.",
    originalImage: "/assets/featured/color-portrait-dark-circle-original.jpg",
    resultImage: "/assets/featured/color-portrait-dark-circle-result.jpg",
    prompt: "请严格以原图为基础淡化黑眼圈和眼袋，不改变眼睛大小、眼型、卧蚕、表情和面部结构。目标效果：眼下暗沉更轻，泪沟和眼袋更柔和，眼神更清晰有精神，皮肤过渡自然。不要把眼周磨平，不要改变眼睛形状，不要生成夸张美瞳效果。"
  },
  {
    id: "color-portrait-double-chin",
    category: "color-edit",
    group: "portrait-retouch",
    zhTitle: "双下巴自然修复",
    enTitle: "Double Chin Refinement",
    zhDescription: "轻微收紧下颌线，不改变身份。",
    enDescription: "Gently refine jawline without changing identity.",
    originalImage: "/assets/featured/color-portrait-double-chin-original.jpg",
    resultImage: "/assets/featured/color-portrait-double-chin-result.jpg",
    prompt: "请严格以原图为基础进行双下巴自然修复，不改变人物身份、脸型识别度、年龄和表情。目标效果：轻微收紧下颌线，弱化双下巴阴影和堆积感，让脖颈与下巴过渡更利落自然。不要过度瘦脸，不要削骨感，不要改变头部大小和肩颈比例。"
  },
  {
    id: "color-portrait-face-slim",
    category: "color-edit",
    group: "portrait-retouch",
    zhTitle: "自然瘦脸",
    enTitle: "Natural Face Slimming",
    zhDescription: "轻微优化脸部轮廓，避免网红脸。",
    enDescription: "Subtly refine facial contour without artificial look.",
    originalImage: "/assets/featured/color-portrait-face-slim-original.jpg",
    resultImage: "/assets/featured/color-portrait-face-slim-result.jpg",
    prompt: "请严格以原图为基础进行自然瘦脸，不改变人物身份、五官比例、表情、发型和年龄感。目标效果：轻微收窄脸颊和下颌外轮廓，优化面部线条，让脸部更精神上镜但仍然像本人。不要夸张 V 脸，不要改变骨相，不要让背景或头发边缘变形。"
  },
  {
    id: "color-portrait-nasolabial-lines",
    category: "color-edit",
    group: "portrait-retouch",
    zhTitle: "法令纹柔化",
    enTitle: "Smile Line Softening",
    zhDescription: "柔化法令纹，保留自然表情。",
    enDescription: "Soften smile lines while keeping expression natural.",
    originalImage: "/assets/featured/color-portrait-nasolabial-lines-original.jpg",
    resultImage: "/assets/featured/color-portrait-nasolabial-lines-result.jpg",
    prompt: "请严格以原图为基础柔化法令纹，不改变笑容、嘴型、脸型和人物年龄识别度。目标效果：减轻鼻翼到嘴角的深纹和阴影，让面部更柔和精神，同时保留自然表情和真实皮肤纹理。不要磨平面部结构，不要年轻化过度，不要改变嘴角形态。"
  },
  {
    id: "color-portrait-teeth-whiten",
    category: "color-edit",
    group: "portrait-retouch",
    zhTitle: "牙齿自然美白",
    enTitle: "Natural Teeth Whitening",
    zhDescription: "提亮牙齿，保持真实口腔结构。",
    enDescription: "Brighten teeth while preserving natural structure.",
    originalImage: "/assets/featured/color-portrait-teeth-whiten-original.jpg",
    resultImage: "/assets/featured/color-portrait-teeth-whiten-result.jpg",
    prompt: "请严格以原图为基础进行牙齿自然美白，不改变嘴型、笑容、牙齿数量、牙齿排列和面部表情。目标效果：去除牙齿明显黄渍和灰暗感，轻微提亮牙齿，保持自然乳白色和真实阴影。不要变成纯白假牙，不要改变牙齿形状，不要改变嘴唇颜色。"
  },
  {
    id: "color-portrait-eye-brighten",
    category: "color-edit",
    group: "portrait-retouch",
    zhTitle: "眼神提亮增强",
    enTitle: "Eye Brightening",
    zhDescription: "增强眼神光和眼部清晰度。",
    enDescription: "Enhance catchlight and eye clarity.",
    originalImage: "/assets/featured/color-portrait-eye-brighten-original.jpg",
    resultImage: "/assets/featured/color-portrait-eye-brighten-result.jpg",
    prompt: "请严格以原图为基础提亮眼神，不改变眼睛形状、大小、瞳色和表情。目标效果：增强眼部清晰度、眼神光和睫毛边缘细节，眼白更干净但不过白，眼睛更有精神。不要生成美瞳，不要改变瞳孔方向，不要让眼白假白。"
  },
  {
    id: "color-portrait-oil-shine",
    category: "color-edit",
    group: "portrait-retouch",
    zhTitle: "面部油光控制",
    enTitle: "Facial Shine Control",
    zhDescription: "压低额头、鼻梁、脸颊油光。",
    enDescription: "Reduce forehead, nose, and cheek shine.",
    originalImage: "/assets/featured/color-portrait-oil-shine-original.jpg",
    resultImage: "/assets/featured/color-portrait-oil-shine-result.jpg",
    prompt: "请严格以原图为基础控制面部油光，不改变人物五官、肤色基调和光影方向。目标效果：降低额头、鼻梁、脸颊和下巴的强烈油光反射，保留自然皮肤高光，让面部更干净细腻。不要把脸修成哑光面具，不要破坏原有立体感。"
  },
  {
    id: "color-portrait-redness-even",
    category: "color-edit",
    group: "portrait-retouch",
    zhTitle: "泛红肤色均匀",
    enTitle: "Redness Correction",
    zhDescription: "修正脸颊、鼻翼、痘印泛红。",
    enDescription: "Correct cheek, nose, and blemish redness.",
    originalImage: "/assets/featured/color-portrait-redness-even-original.jpg",
    resultImage: "/assets/featured/color-portrait-redness-even-result.jpg",
    prompt: "请严格以原图为基础修正面部泛红，不改变肤色种族特征、五官、妆容和光影。目标效果：减轻脸颊、鼻翼、下巴和痘印区域的局部泛红，让肤色更均匀自然，保留健康血色。不要修成灰白肤色，不要过度去饱和，不要改变人物长相。"
  },
  {
    id: "color-portrait-hairline-flyaway",
    category: "color-edit",
    group: "portrait-retouch",
    zhTitle: "碎发发际线整理",
    enTitle: "Hairline Flyaway Cleanup",
    zhDescription: "整理碎发、毛躁和发际线杂乱。",
    enDescription: "Clean flyaway hair, frizz, and messy hairline.",
    originalImage: "/assets/featured/color-portrait-hairline-flyaway-original.jpg",
    resultImage: "/assets/featured/color-portrait-hairline-flyaway-result.jpg",
    prompt: "请严格以原图为基础整理碎发和发际线，不改变发型设计、发色、脸型和人物身份。目标效果：清理额头、脸颊边缘和背景上的杂乱碎发，降低毛躁感，让头发边缘更干净自然。不要改变发量，不要改变发际线形状过多，不要让头发边缘像抠图。"
  },
  {
    id: "color-portrait-body-slim",
    category: "color-edit",
    group: "portrait-retouch",
    zhTitle: "身形自然修饰",
    enTitle: "Natural Body Refinement",
    zhDescription: "轻微修饰腰肩腿线条，避免变形。",
    enDescription: "Subtly refine body lines without distortion.",
    originalImage: "/assets/featured/color-portrait-body-slim-original.jpg",
    resultImage: "/assets/featured/color-portrait-body-slim-result.jpg",
    prompt: "请严格以原图为基础进行身形自然修饰，不改变人物身份、服装款式、姿态和背景结构。目标效果：轻微优化肩颈、腰线、手臂和腿部线条，让体态更挺拔自然。不要夸张瘦身，不要改变身体比例，不要让背景、衣服纹理或地面线条变形。"
  },
  {
    id: "color-portrait-posture-neck",
    category: "color-edit",
    group: "portrait-retouch",
    zhTitle: "肩颈体态优化",
    enTitle: "Posture Neck Refinement",
    zhDescription: "改善耸肩、脖颈阴影和体态观感。",
    enDescription: "Improve shoulder, neck shadow, and posture feel.",
    originalImage: "/assets/featured/color-portrait-posture-neck-original.jpg",
    resultImage: "/assets/featured/color-portrait-posture-neck-result.jpg",
    prompt: "请严格以原图为基础优化肩颈体态，不改变人物动作、服装和身份。目标效果：轻微改善耸肩感、脖颈阴影和肩颈线条，让人物更舒展挺拔，保持自然真实。不要改变姿势幅度，不要拉长脖子过度，不要让衣领和背景变形。"
  },
  {
    id: "color-portrait-makeup-cleanup",
    category: "color-edit",
    group: "portrait-retouch",
    zhTitle: "妆容边缘精修",
    enTitle: "Makeup Edge Cleanup",
    zhDescription: "优化眼线、唇线、底妆边缘。",
    enDescription: "Refine eyeliner, lip line, and base makeup edges.",
    originalImage: "/assets/featured/color-portrait-makeup-cleanup-original.jpg",
    resultImage: "/assets/featured/color-portrait-makeup-cleanup-result.jpg",
    prompt: "请严格以原图为基础进行妆容边缘精修，不改变原始妆容风格、颜色和人物五官。目标效果：眼线、眉毛、唇线、腮红和底妆边缘更干净精致，妆面更高级，肤色过渡自然。不要改变妆容设计，不要新增夸张妆效，不要改变五官。"
  },
  {
    id: "color-portrait-lip-refine",
    category: "color-edit",
    group: "portrait-retouch",
    zhTitle: "唇部质感修复",
    enTitle: "Lip Texture Refinement",
    zhDescription: "改善唇纹、干裂和唇色不均。",
    enDescription: "Improve lip lines, dryness, and uneven lip color.",
    originalImage: "/assets/featured/color-portrait-lip-refine-original.jpg",
    resultImage: "/assets/featured/color-portrait-lip-refine-result.jpg",
    prompt: "请严格以原图为基础修复唇部质感，不改变嘴型、表情和妆容颜色。目标效果：减轻明显唇纹、干裂和唇色不均，保留自然唇部纹理和高光，让唇部更健康细腻。不要改变唇形，不要加厚嘴唇，不要改变口红颜色。"
  },
  {
    id: "color-portrait-clothing-wrinkle",
    category: "color-edit",
    group: "portrait-retouch",
    zhTitle: "服装褶皱整理",
    enTitle: "Clothing Wrinkle Cleanup",
    zhDescription: "整理人像中的衣服皱褶和污点。",
    enDescription: "Clean clothing wrinkles and small stains in portraits.",
    originalImage: "/assets/featured/color-portrait-clothing-wrinkle-original.jpg",
    resultImage: "/assets/featured/color-portrait-clothing-wrinkle-result.jpg",
    prompt: "请严格以原图为基础整理人像服装，不改变服装款式、颜色、图案和人物姿态。目标效果：减轻明显褶皱、污点、毛球和杂乱阴影，让衣服更平整干净，保持真实布料质感。不要改变服装设计，不要抹掉重要纹理，不要让身体比例变形。"
  },
  {
    id: "color-portrait-background-clean",
    category: "color-edit",
    group: "portrait-retouch",
    zhTitle: "人像背景净化",
    enTitle: "Portrait Background Cleanup",
    zhDescription: "清理背景杂物，保留人物和构图。",
    enDescription: "Clean background distractions while keeping the portrait.",
    originalImage: "/assets/featured/color-portrait-background-clean-original.jpg",
    resultImage: "/assets/featured/color-portrait-background-clean-result.jpg",
    prompt: "请严格以原图为基础净化人像背景，不改变人物身份、姿态、服装和构图。目标效果：清理背景中的杂物、污点、路人干扰和视觉噪声，让主体更突出，背景更干净自然。不要改变人物边缘，不要生成虚假道具，不要让背景出现涂抹痕迹。"
  },
  {
    id: "color-portrait-overall-balance",
    category: "color-edit",
    group: "portrait-retouch",
    zhTitle: "整体自然精修",
    enTitle: "Balanced Natural Retouch",
    zhDescription: "一键式综合人像整理，适合普通照片。",
    enDescription: "A balanced all-in-one portrait cleanup for everyday photos.",
    originalImage: "/assets/featured/color-portrait-overall-balance-original.jpg",
    resultImage: "/assets/featured/color-portrait-overall-balance-result.jpg",
    prompt: "请严格以原图为基础进行整体自然人像精修，不改变人物身份、年龄、脸型、五官比例、发型、服装、姿态和构图。目标效果：轻微均匀肤色，清理小瑕疵，柔化黑眼圈和局部暗沉，增强眼神清晰度，控制油光，整理轻微背景干扰，保留真实皮肤纹理和本人气质。不要过度美颜，不要改变长相，不要磨皮成塑料感。"
  },
  {
    id: "color-product-premium",
    category: "color-edit",
    group: "color-tone",
    zhTitle: "高级产品精修",
    enTitle: "Premium Product Retouch",
    zhDescription: "适合电商、广告、详情页主图。",
    enDescription: "For ecommerce, ads, and product detail pages.",
    originalImage: "/assets/featured/color-product-premium-original.jpg",
    resultImage: "/assets/featured/color-product-premium-result.jpg",
    prompt: "请严格以原图为基础进行产品图精修，不改变产品结构、比例、颜色识别和品牌元素。目标效果：背景更干净，曝光均匀，边缘清晰，材质反光自然，金属、玻璃、塑料或织物纹理更高级，阴影更柔和，整体适合商业广告和电商主图。不要新增文字，不要改 logo，不要改变产品形状。"
  },
  {
    id: "color-food-appetizing",
    category: "color-edit",
    group: "color-tone",
    zhTitle: "美食诱人调色",
    enTitle: "Appetizing Food Color",
    zhDescription: "适合餐饮、美食探店、菜单图。",
    enDescription: "For restaurant, food review, and menu photos.",
    originalImage: "/assets/featured/color-food-appetizing-original.jpg",
    resultImage: "/assets/featured/color-food-appetizing-result.jpg",
    prompt: "请严格以原图为基础进行美食修图，不改变食物种类、摆盘、餐具和构图。目标效果：食物颜色自然诱人，油润光泽更明显，蔬菜更清新，肉类和汤汁更有层次，白平衡准确，背景干净，整体具有高级餐饮摄影质感。不要过度饱和，不要让食物失真，不要新增食材。"
  },
  {
    id: "color-interior-clean",
    category: "color-edit",
    group: "color-tone",
    zhTitle: "室内空间明净",
    enTitle: "Clean Interior Retouch",
    zhDescription: "适合民宿、酒店、家装、空间摄影。",
    enDescription: "For hotels, homestays, interiors, and real estate.",
    originalImage: "/assets/featured/color-interior-clean-original.jpg",
    resultImage: "/assets/featured/color-interior-clean-result.jpg",
    prompt: "请严格以原图为基础进行室内空间修图，不改变家具位置、空间结构和装饰内容。目标效果：矫正白平衡和透视观感，提升室内明亮度，保留窗外高光细节，阴影更干净，墙面颜色准确，木质、布艺、金属和玻璃材质更真实，整体适合酒店民宿和家装展示。不要过曝窗户，不要改变装修风格。"
  },
  {
    id: "color-ins-clean-bright",
    category: "color-edit",
    group: "color-tone",
    zhTitle: "INS干净明亮",
    enTitle: "Clean Bright Social",
    zhDescription: "适合社媒、小红书、生活方式照片。",
    enDescription: "For social media and lifestyle images.",
    originalImage: "/assets/featured/color-ins-clean-bright-original.jpg",
    resultImage: "/assets/featured/color-ins-clean-bright-result.jpg",
    prompt: "请严格以原图为基础进行社媒风格调色，不改变主体和构图。目标效果：干净明亮、低对比、轻柔阴影、白色更通透，色彩统一但不过饱和，肤色自然，画面具有轻盈生活方式质感，适合小红书、Instagram、朋友圈发布。不要过曝，不要灰蒙蒙，不要改变画面内容。"
  },
  {
    id: "color-dopamine-bright",
    category: "color-edit",
    group: "color-tone",
    zhTitle: "多巴胺亮彩",
    enTitle: "Dopamine Bright Color",
    zhDescription: "适合穿搭、活动、潮流生活照片。",
    enDescription: "For outfits, events, and trendy lifestyle photos.",
    originalImage: "/assets/featured/color-dopamine-bright-original.jpg",
    resultImage: "/assets/featured/color-dopamine-bright-result.jpg",
    prompt: "请严格以原图为基础进行多巴胺亮彩调色，不改变主体、服装款式和背景内容。目标效果：提升明度和色彩活力，让红、黄、蓝、绿等色块更干净明快，肤色保持自然，阴影柔和，整体积极、年轻、清爽。不要荧光色溢出，不要过饱和，不要让肤色偏红。"
  },
  {
    id: "color-landscape-golden-hour",
    category: "color-edit",
    group: "color-tone",
    zhTitle: "黄金时刻风景",
    enTitle: "Golden Hour Landscape",
    zhDescription: "适合旅行、山川、海边、城市风景。",
    enDescription: "For travel, mountains, seaside, and cityscapes.",
    originalImage: "/assets/featured/color-landscape-golden-hour-original.jpg",
    resultImage: "/assets/featured/color-landscape-golden-hour-result.jpg",
    prompt: "请严格以原图为基础进行风景调色，不改变地形、建筑、天空和构图。目标效果：黄金时刻暖光，天空层次丰富，云层柔和，远景通透，暗部保留细节，整体有温暖、开阔、旅行大片质感。不要过度 HDR，不要天空假蓝，不要新增太阳或云层。"
  },
  {
    id: "color-landscape-moody-blue",
    category: "color-edit",
    group: "color-tone",
    zhTitle: "冷蓝静谧风景",
    enTitle: "Moody Blue Landscape",
    zhDescription: "适合雪景、湖泊、雨天、城市清晨。",
    enDescription: "For snow, lakes, rainy days, and early city scenes.",
    originalImage: "/assets/featured/color-landscape-moody-blue-original.jpg",
    resultImage: "/assets/featured/color-landscape-moody-blue-result.jpg",
    prompt: "请严格以原图为基础进行冷蓝静谧风景调色，不改变场景内容。目标效果：整体偏冷蓝灰，降低杂色和饱和度，增强雾气、空气透视和远近层次，高光柔和，画面安静、克制、诗意。不要过暗，不要丢失天空和水面细节，不要改变建筑或山体形态。"
  },
  {
    id: "color-basic-exposure-fix",
    category: "color-edit",
    group: "color-tone",
    zhTitle: "曝光白平衡修复",
    enTitle: "Exposure WB Fix",
    zhDescription: "适合偏色、过暗、过亮的原图。",
    enDescription: "For color cast, underexposed, or overexposed photos.",
    originalImage: "/assets/featured/color-basic-exposure-fix-original.jpg",
    resultImage: "/assets/featured/color-basic-exposure-fix-result.jpg",
    prompt: "请严格以原图为基础进行基础修复，不改变任何主体、构图、背景和物体位置。目标效果：修正曝光、白平衡、对比度和色偏，恢复高光与暗部细节，让画面自然、干净、真实。不要套用强烈风格，不要过度锐化，不要改变人物五官或物体形状。"
  },
  {
    id: "color-basic-noise-sharpness",
    category: "color-edit",
    group: "color-tone",
    zhTitle: "降噪清晰增强",
    enTitle: "Noise Reduction & Clarity",
    zhDescription: "适合夜景、手机拍摄、低清照片。",
    enDescription: "For night shots, phone photos, and soft images.",
    originalImage: "/assets/featured/color-basic-noise-sharpness-original.jpg",
    resultImage: "/assets/featured/color-basic-noise-sharpness-result.jpg",
    prompt: "请严格以原图为基础进行清晰度修复，不改变主体和构图。目标效果：降低噪点和压缩痕迹，提升主体边缘清晰度、局部纹理和画面干净度，保留自然质感，避免假锐化。不要改变脸部结构，不要新增纹理，不要让背景出现涂抹感。"
  },
  {
    id: "img2img-style-transfer",
    category: "image-to-image",
    zhTitle: "保留结构换风格",
    enTitle: "Keep Structure, Change Style",
    zhDescription: "保留构图与主体，转换画面风格。",
    enDescription: "Keep composition and subject while changing style.",
    originalImage: "/assets/featured/img2img-style-transfer-original.jpg",
    resultImage: "/assets/featured/img2img-style-transfer-result.jpg",
    prompt: "实验提示词：参考原图的主体、姿态、构图、空间关系和主要色块，不改变主体身份、主体数量和画面位置，将画面转换为“目标风格”，例如“水彩插画风格 / 电影写实风格 / 3D动画电影感 / 国风工笔风格”。保留核心轮廓和透视关系，重绘光影、材质、氛围与细节。不要新增无关元素，不要扭曲脸部、手部和文字。"
  },
  {
    id: "img2img-product-cleanup",
    category: "image-to-image",
    zhTitle: "产品图精修",
    enTitle: "Product Cleanup",
    zhDescription: "清理产品图，提升电商质感。",
    enDescription: "Clean product photos for ecommerce use.",
    originalImage: "/assets/featured/img2img-product-cleanup-original.jpg",
    resultImage: "/assets/featured/img2img-product-cleanup-result.jpg",
    prompt: "实验提示词：请基于原图保留产品真实形状、比例、颜色、材质和关键细节，将背景处理为“目标背景”，例如“纯白电商背景 / 浅灰摄影棚背景 / 高级品牌广告背景”。清理背景杂物与噪点，修正曝光和白平衡，增强边缘清晰度、材质反光和电商产品图质感。不要改变产品结构，不要新增文字，不要生成不存在的配件。"
  },
  {
    id: "img2img-character-consistency",
    category: "image-to-image",
    zhTitle: "角色一致性重绘",
    enTitle: "Character Consistency",
    zhDescription: "保留角色外貌，换动作或场景。",
    enDescription: "Keep character identity while changing pose or scene.",
    originalImage: "/assets/featured/img2img-character-consistency-original.jpg",
    resultImage: "/assets/featured/img2img-character-consistency-result.jpg",
    prompt: "实验提示词：以原图角色为身份参考，保持五官比例、发型、服装关键特征、配色和整体气质一致，将角色改为“目标动作”，并放入“目标场景”，镜头为“目标镜头”。例如“奔跑 / 跳舞 / 坐着 / 回头看”，“城市街巷 / 摄影棚 / 森林 / 未来街区”，“全身中景 / 低机位 / 侧面视角”。不要改变角色年龄、脸型、发色、服装核心元素，不要产生多余人物。"
  },
  {
    id: "img2img-vintage-collage",
    category: "image-to-image",
    zhTitle: "复古拼贴插画",
    enTitle: "Vintage Collage Illustration",
    zhDescription: "保留原图构图，生成复古撕纸拼贴海报。",
    enDescription: "Keep the source composition and create a vintage torn-paper collage.",
    originalImage: "/assets/featured/img2img-vintage-collage-original.jpg",
    resultImage: "/assets/featured/img2img-vintage-collage-result.jpg",
    prompt: "实验提示词：以原图为基础，保留原图所有元素、画面构图和物体形态不变，将画面转换为“复古拼贴插画”。画面仅保留约“10%原始实景区域”，其余约“90%区域”以原图为基础转为“丝网版画 / 水墨拓印 / 复古网点插画”。加入手工撕纸撕裂效果、不规则自然毛边，撕裂走向跟随原图构图自然延展并贴合视觉重心。增加“手绘叙事线条”“复古肌理底色”“粗纹做旧纸张肌理”“细腻胶片颗粒”“柔和复古色调”。画质要求：8K，文艺商业海报质感，层次丰富，高级简约。不要过度扭曲原图景物，不要改变主体识别度。"
  },
  {
    id: "img2img-postcard-poster",
    category: "image-to-image",
    zhTitle: "手绘明信片转绘",
    enTitle: "Hand-Drawn Postcard Poster",
    zhDescription: "真实摄影 + 极简手绘插画双分区海报。",
    enDescription: "A two-section poster combining real photography and minimal illustration.",
    originalImage: "/assets/featured/img2img-postcard-poster-original.jpg",
    resultImage: "/assets/featured/img2img-postcard-poster-result.jpg",
    prompt: "实验提示词：将我提供的“真实城市/风景照片”转换为上下分区的高级艺术海报。上半部分严格保留原照片的主体、建筑、天空、灯光、云层、月亮及整体构图，仅进行轻微电影感调色，降低饱和度，保留自然光影与真实摄影质感，色调为“蓝灰 / 暖黄 / 米白”等低饱和色。下半部分重新提炼上方照片中最具辨识度的“天际线 / 建筑 / 云层 / 灯光 / 月亮”等元素，转换为“极简艺术插画”，保持明显对应关系但不要机械临摹。风格：minimal editorial poster, poetic city illustration, contemporary art book aesthetic, Scandinavian minimalism, Japanese editorial design, soft gouache illustration, quiet luxury。质感：soft gouache, dry brush texture, subtle paper grain, matte printed texture。底部加入极简杂志式英文排版：“Where City Sleeps between light and quiet”。不要 HDR、过度锐化、卡通、赛博朋克、3D、矢量图标感、复杂装饰和商业广告感。比例：“2:3竖版海报”。"
  },
  {
    id: "img2img-color-walk-magnet",
    category: "image-to-image",
    zhTitle: "Color Walk冰箱贴",
    enTitle: "Color Walk Magnet",
    zhDescription: "把旅行照片转成极简旅行封面/冰箱贴视觉。",
    enDescription: "Turn a travel photo into a minimal postcard or magnet cover.",
    originalImage: "/assets/featured/img2img-color-walk-magnet-original.jpg",
    resultImage: "/assets/featured/img2img-color-walk-magnet-result.jpg",
    prompt: "实验提示词：基于我上传的“旅行照片”，生成竖版“3:4极简旅行封面”。上方“40%纯色标题区”从照片提取主色做背景，中央放一个“扁平插画风贴纸图标”，图标使用白色粗描边和轻微投影；下方一行英文标题：“PLACE NAME - SEASON/YEAR”。下方“60%区域”保留原照片片区，保持真实摄影质感，只做裁切和轻微调色。风格：MINIMAL TRAVEL POSTCARD, CLEAN LAYOUT, SINGLE STICKER ICON, ELEGANT TYPOGRAPHY, REALISTIC PHOTO。禁止：手账拼贴、虚线框、纸张纹理、多个图标、中文大字、水印、LOGO、乱码。"
  },
  {
    id: "img2img-paper-cut-architecture",
    category: "image-to-image",
    zhTitle: "手工剪纸插画",
    enTitle: "Handmade Paper-Cut Architecture",
    zhDescription: "把建筑参考图转成分层纸艺插画。",
    enDescription: "Convert a building reference into layered paper-cut art.",
    originalImage: "/assets/featured/img2img-paper-cut-architecture-original.jpg",
    resultImage: "/assets/featured/img2img-paper-cut-architecture-result.jpg",
    prompt: "实验提示词：使用提供的“建筑参考图像”，将画面中的主体建筑转换为“手工分层剪纸插画风格”。保留原建筑的主体轮廓、建筑比例、透视角度、门窗位置、屋顶结构、立面分区、阳台、柱廊、拱门、栏杆、装饰线脚等主要建筑特征，保持原始构图和建筑识别度。表现高度分层纸艺：可见纸张纤维质感、层间柔和阴影、圆润裁切边缘、精细纸艺镂空、手工剪贴薄纸质感。画面只保留主体建筑，其他非建筑元素尽量简化或移除。不要新增人物、车辆、树木、花草、小鸟、云朵、路灯、街景道具或装饰元素。背景为“浅色纸张质感背景”。"
  },
  {
    id: "img2img-dopamine-illustration",
    category: "image-to-image",
    zhTitle: "多巴胺插画",
    enTitle: "Dopamine Illustration",
    zhDescription: "把建筑或主体转成潮流清新矢量手绘。",
    enDescription: "Turn a building or subject into a bright dopamine-style vector illustration.",
    originalImage: "/assets/featured/img2img-dopamine-illustration-original.jpg",
    resultImage: "/assets/featured/img2img-dopamine-illustration-result.jpg",
    prompt: "实验提示词：依据原图主体，生成“多巴胺潮流插画”。保留主体的整体轮廓、比例、视角和主要结构，去除全部写实纹路与繁杂细节。使用“流畅曲线”“简约线条”“柔和治愈色块”“随性不规则圆弧色块”组合成型，适配“活泼亮眼多巴胺配色”。整体纯白纯色背景，风格新潮前卫、简约清新、自然柔和、有创意。可替换项：“目标主体”“目标配色”“目标背景”。不要写实摄影质感，不要复杂阴影，不要新增无关元素。"
  },
  {
    id: "img2img-embossed-relief",
    category: "image-to-image",
    zhTitle: "浮雕印压立体画",
    enTitle: "Embossed Relief Art",
    zhDescription: "实景建筑转成印压凹凸立体画。",
    enDescription: "Convert architecture into subtle embossed relief art.",
    originalImage: "/assets/featured/img2img-embossed-relief-original.jpg",
    resultImage: "/assets/featured/img2img-embossed-relief-result.jpg",
    prompt: "实验提示词：依据“实景建筑素材”，将参考图转化为“印压凹凸效果立体画 / 极简印压线描画”。精准复刻建筑整体轮廓、整体比例、屋顶样式、立面层次与门窗布局特色，清空画面内天空、路人、街道、绿植等多余杂物。融入“诗意节日元素”，例如“金色牡丹 / 展翅和平鸽 / 飘逸彩带”，元素与主体图案自然融合。采用浅浮雕技法，立体效果含蓄内敛，淡雅乳白色背景，柔和红色和金色点缀。线条飘逸洒脱，富有书法韵味，适合艺术壁纸和文化产品。"
  },
  {
    id: "img2img-woodcut-print",
    category: "image-to-image",
    zhTitle: "印刷版画",
    enTitle: "Woodcut Print",
    zhDescription: "把照片转成高对比木刻版画印刷效果。",
    enDescription: "Convert a photo into high-contrast woodcut print style.",
    originalImage: "/assets/featured/img2img-woodcut-print-original.jpg",
    resultImage: "/assets/featured/img2img-woodcut-print-result.jpg",
    prompt: "实验提示词：把这张图片转绘为“木刻版画印刷效果”。保留原图主体轮廓和构图，使用“P5版画阈值处理效果”“单色黑白墨水版画”“浅米色纹理旧纸张”。高对比度无中间调，锥形线，强烈三角刀具刻出的木刻版画线条感，黑白对比鲜明，刻痕肌理明显，锐利清晰的刻线线条，强烈颗粒感肌理。仅通过线条疏密和粗细表现细节，完全像木刻版画印刷效果。可替换项：“目标配色”，例如“黑白 / 深蓝白 / 赭黑米白”。不要渐变，不要彩色写实，不要柔焦。"
  },
  {
    id: "img2img-vector-architecture",
    category: "image-to-image",
    zhTitle: "二维矢量插画",
    enTitle: "2D Vector Architecture",
    zhDescription: "建筑实景转成数据图表感扁平矢量图。",
    enDescription: "Convert real architecture into a flat vector infographic poster.",
    originalImage: "/assets/featured/img2img-vector-architecture-original.jpg",
    resultImage: "/assets/featured/img2img-vector-architecture-result.jpg",
    prompt: "实验提示词：依据“实景建筑素材”，打造兼具数据图表美感的“扁平化建筑矢量图”。精准复刻建筑整体轮廓、比例、屋顶样式、立面层次与门窗布局特色，清空天空、路人、街道、绿植等多余杂物。选用“纯白与浅素色”作为基底，建筑正面居中放置，遵循建筑图纸对称设计思路，使用利落深色线条勾勒外形，搭配平整色块填充，辅以淡色明暗与细腻高光。画面左上角搭配“对应风格英文名称”，建筑后方叠加浅灰大号半透明文字做氛围底纹。增添尺寸标注线、比例刻度、侧边竖排红色文字标注“建筑名称 / 所在地 / 建造时间”。未知数值统一标注近似标识。线条工整干净，色调统一素雅，留白舒适高级。"
  },
  {
    id: "utility-psd-layer",
    category: "utility",
    zhTitle: "生成 PSD 分层文件",
    enTitle: "Generate Layered PSD",
    zhDescription: "用于让模型拆分元素并生成 PS 可编辑图层。",
    enDescription: "Ask the model to split elements into editable Photoshop layers.",
    prompt: `${psdLayerPrompt} 保持所有元素的原始位置、比例、遮挡关系和画面层级，图层命名尽量清晰，例如主体、背景、装饰、阴影、高光、文字占位等。不要改变原图构图，不要合并关键元素。`
  },
  {
    id: "utility-canva-magic-layer",
    category: "utility",
    zhTitle: "利用Canva分层图片",
    enTitle: "Canva Magic Layer",
    zhDescription: "需连接 Canva 插件，用于将图片拆成可编辑层。",
    enDescription: "Requires the Canva plugin; use it to split an image into editable layers.",
    prompt: "[@Canva](plugin://canva@openai-curated-remote) magic layer"
  },
  {
    id: "utility-reverse-general",
    category: "utility",
    zhTitle: "通用提示词反推",
    enTitle: "General Reverse Prompt",
    zhDescription: "适合大多数图片。",
    enDescription: "For most image types.",
    prompt: "详细反推这张图片的完整提示词，输出目标是生成可直接用于 AI 绘图的精准 prompt。请包含主体、场景、风格、色彩、光影、构图、镜头、材质、质感、分辨率、细节描述和负面提示词。请用中英双语详细描述图片内容，并拆解可复用的风格关键词、光线关键词、材质关键词、镜头关键词和配色关键词。"
  },
  {
    id: "utility-reverse-font-logo",
    category: "utility",
    zhTitle: "字体 / Logo 反推",
    enTitle: "Font / Logo Reverse",
    zhDescription: "适合字体、Logo、字效图。",
    enDescription: "For lettering, logos, and text effects.",
    prompt: "反推这款字体或 Logo 的设计提示词，输出目标是生成可直接复刻相似视觉语言的字体/Logo prompt。请分析字体风格、字形特征、笔画质感、粗细、衬线/无衬线、倒角、立体效果、光泽、金属/磨砂/玻璃质感、配色、排版和特效。若是 Logo，请补充构图比例、图形结构、光影、材质、描边、发光、渐变、浮雕等关键词，并输出中英双语提示词。"
  },
  {
    id: "utility-reverse-landscape",
    category: "utility",
    zhTitle: "风景场景反推",
    enTitle: "Landscape Reverse",
    zhDescription: "适合自然、城市、空间场景。",
    enDescription: "For nature, city, and environment scenes.",
    prompt: "反推这张风景或场景图的完整提示词，输出目标是生成可直接用于风景/城市/空间场景绘图的 prompt。请分析环境、天气、季节、时段、天空、云层、植被、水体、建筑、光线、色调、氛围、构图、透视、景深、镜头感、画质和细节质感，并提取中英双语关键词。"
  },
  {
    id: "utility-reverse-photo",
    category: "utility",
    zhTitle: "摄影类反推",
    enTitle: "Photography Reverse",
    zhDescription: "适合真人、人像、产品、纪实摄影。",
    enDescription: "For portraits, products, and documentary photos.",
    prompt: "反推这张摄影图的摄影风格 prompt，输出目标是生成可直接用于真人、人像、产品或纪实摄影的提示词。请分析相机视角、焦距、景深、对焦位置、光线类型（自然光/硬光/柔光/逆光）、布光方向、色调、画质、构图、氛围、锐度、噪点、胶片感和后期调色，并输出中英双语关键词。"
  },
  {
    id: "utility-reverse-illustration",
    category: "utility",
    zhTitle: "插画动漫反推",
    enTitle: "Illustration Reverse",
    zhDescription: "适合扁平、二次元、治愈、手绘图。",
    enDescription: "For flat, anime, healing, and hand-drawn images.",
    prompt: "反推这张插画的绘画提示词，输出目标是生成可直接用于 AI 插画绘制的 prompt。请分析绘画风格、笔触、肌理、色彩、线条、构图、氛围、主题、角色比例、平涂/厚涂/赛璐璐/手绘/板绘等技法，并输出中英双语关键词。避免直接引用在世艺术家姓名，优先转写为可复用的视觉语言。"
  },
  {
    id: "utility-reverse-3d",
    category: "utility",
    zhTitle: "3D 渲染反推",
    enTitle: "3D Render Reverse",
    zhDescription: "适合 C4D、Blender、产品渲染。",
    enDescription: "For C4D, Blender, and product renders.",
    prompt: "反推这张 3D 图的渲染提示词，输出目标是生成可直接用于 C4D / Blender / 3D 渲染的 prompt。请分析建模风格、渲染风格、材质、灯光、反射、粗糙度、配色、体积光、软边缘、PBR 材质、Octane/Blender/C4D 特征、精度和细节层级，并输出中英双语关键词。"
  },
  {
    id: "utility-reverse-ip-character",
    category: "utility",
    zhTitle: "IP 角色潮玩反推",
    enTitle: "IP Character Reverse",
    zhDescription: "适合 Q 版、潮玩、盲盒角色。",
    enDescription: "For chibi, designer toy, and blind-box characters.",
    prompt: "反推这个 IP 角色或潮玩角色的设定提示词，输出目标是生成可直接用于同类原创角色设计的 prompt。请分析角色风格、头身比、五官表情、体型比例、发型、服饰装饰、动作姿态、配色、材质（哑光/树脂/PVC/陶瓷/黏土）、光影、背景和细节特征，并输出中英双语关键词。避免使用已有版权角色名称，转写为原创角色视觉语言。"
  },
  {
    id: "text-cinematic-character",
    category: "text-to-image",
    zhTitle: "电影人物海报",
    enTitle: "Cinematic Character Poster",
    zhDescription: "适合人物主视觉。",
    enDescription: "For character key visuals.",
    image: "/assets/featured/text-cinematic-character.jpg",
    prompt: "实验提示词：生成“主体角色”的电影人物海报，角色为“原创角色设定”，站在“目标场景”中，画面情绪为“目标氛围”。使用电影海报构图，主体清晰，背景有纵深，戏剧化光影，精致服装与材质细节，高级电影调色，真实空间透视，高清细节，画面完整。可替换项示例：“未来战士 / 东方侠客 / 科幻考古学家”，“沙漠遗迹 / 雨夜城市 / 巨型机械空间”，“史诗感 / 孤独感 / 神秘感”。不要使用版权角色，不要出现文字、水印、logo。"
  },
  {
    id: "text-food-exploded-layers",
    category: "text-to-image",
    zhTitle: "美食分层展示",
    enTitle: "Food Exploded Layers",
    zhDescription: "科技可视化美食爆炸分解示意图。",
    enDescription: "A futuristic exploded-layer food visualization.",
    image: "/assets/featured/text-food-exploded-layers.jpg",
    prompt: "实验提示词：生成“目标美食”的科技可视化爆炸分解示意图，倾斜“45度”悬空，沿“垂直中心轴”分层排列，所有食材与容器中的原始位置精准对齐。从上到下依次悬浮：“食材层级列表”，例如“腐竹、酸豆角、炸花生、木耳丝、青菜、葱花、螺蛳、粉条、红汤、白瓷碗”。汤汁或酱汁呈油亮飞溅效果并连接各层。背景为“纯黑”，专业棚拍侧逆光 + 柔光布光，突出食材真实纹理和油润光泽，色彩自然高级，拒绝过度饱和。每个食材旁配有白色细线 + 中文标注，例如“葱花”“酸豆角”，字体清晰工整，不遮挡主体。8K 超写实美食摄影，未来科技感悬空分解效果。"
  },
  {
    id: "text-product-hero",
    category: "text-to-image",
    zhTitle: "高级产品主图",
    enTitle: "Premium Product Hero",
    zhDescription: "适合电商、广告、品牌物料。",
    enDescription: "For ecommerce, ads, and brand visuals.",
    image: "/assets/featured/text-product-hero.jpg",
    prompt: "实验提示词：生成“目标产品”的高级产品主图，产品材质为“目标材质”，背景为“目标背景”，用途为“目标用途”。产品置于精致展示台上，主体居中，充足留白，柔和商业布光，材质反光真实，边缘清晰，适合广告主视觉和电商详情页，高清产品摄影质感。可替换项示例：“香水瓶 / 护肤品瓶 / 咖啡杯 / 科技设备”，“陶瓷 / 玻璃 / 金属 / 磨砂塑料”，“暖灰摄影棚 / 纯白电商背景 / 深色高级广告背景”。不要出现文字、水印、logo，不要改变产品结构逻辑。"
  },
  {
    id: "text-chinese-folk-illustration",
    category: "text-to-image",
    zhTitle: "国风民艺插画",
    enTitle: "Chinese Folk Illustration",
    zhDescription: "适合节日、文创、包装视觉。",
    enDescription: "For festival, cultural, and packaging visuals.",
    image: "/assets/featured/text-chinese-folk-illustration.jpg",
    prompt: "实验提示词：生成“目标主题”的中国民艺风原创插画，融合“目标民艺技法”，使用“目标配色”，用于“目标用途”。参考剪纸、刺绣、木刻版画的装饰语言，平面化构图，传统纹样与现代设计结合，画面喜庆、精致、有手工肌理。可替换项示例：“醒狮 / 花鸟 / 节日礼盒 / 生肖主题”，“剪纸 / 刺绣 / 木刻版画 / 年画”，“朱红金色 / 青绿金色 / 黑金红色”，“文创包装 / 节日海报 / 社媒封面”。不要使用版权形象，不要出现乱码文字、水印、logo。"
  },
  {
    id: "text-lingnan-maximalist-vector",
    category: "text-to-image",
    zhTitle: "岭南极繁矢量海报",
    enTitle: "Lingnan Maximalist Vector",
    zhDescription: "岭南镬耳墙古建与现代风融合的极繁主义插画。",
    enDescription: "Maximalist Lingnan architecture vector poster with modern styling.",
    image: "/assets/featured/text-lingnan-maximalist-vector.jpg",
    prompt: "这些极繁主义的矢量图展现出独特的艺术魅力，它们以复杂的设计风格传达出丰富的情感。通过复杂的线条、形状和复古色彩，勾勒出历史故事场景岭南文化镬耳墙，镬耳屋与现代风相融合，体现出一种现代、时尚的美感，岭南古建筑群，整体画面构图居下方，上部分留白，不需要任何文字。"
  },
  {
    id: "text-shanghai-palimpsest-poster",
    category: "text-to-image",
    zhTitle: "上海极简字母招贴",
    enTitle: "Shanghai Letter Poster",
    zhDescription: "高密度色块、天际线与英文字母构成的平面海报。",
    enDescription: "Minimal letter poster with Shanghai skyline and dense color blocks.",
    image: "/assets/featured/text-shanghai-palimpsest-poster.jpg",
    prompt: "极简平面插画，居中构图，由深邃的Coral Navy Palimpsest高密度色块随机拼贴和层叠而构成的只有9个构件的英文字母招贴，正负形空间，融合上海天际线，紫色暗调，复古印刷肌理、颗粒感。画布底部居中有文字“SHANG HAI”，文字细窄圆润几何线条搭配大开口结构，科技感里带一点流动感，数字艺术。大师排版，完美构图。"
  },
  {
    id: "text-watercolor-floral-card",
    category: "text-to-image",
    zhTitle: "水彩花卉贺卡框",
    enTitle: "Watercolor Floral Card",
    zhDescription: "清新春季水彩花卉边框与贺卡构图。",
    enDescription: "Fresh spring watercolor floral border for greeting cards.",
    image: "/assets/featured/text-watercolor-floral-card.jpg",
    prompt: "水彩花卉插画，粉色木槿花，大型龟背竹叶，黄色小花簇，蓝色小花，紫色小花，粉色波斯菊，叶片水珠装饰，白色背景，花卉边框框架构图，手绘植物插画风格，柔和水彩晕染，细腻笔触，贺卡艺术风格，明亮自然光，柔和粉彩色调，透明水彩效果，清新春季色彩，框架式构图，画面正中有极小的手签字体“Artwork by AI・Designed by DuoShi”装饰元素。大师级的排版。俯视视角，不对称平衡，高分辨率插画，专业品质，水彩纸质感，清晰叶脉，颜料渗透效果，精致花瓣。"
  },
  {
    id: "text-chinese-bronze-badge-logo",
    category: "text-to-image",
    zhTitle: "青铜中式徽章Logo",
    enTitle: "Bronze Chinese Badge Logo",
    zhDescription: "中国与 CHINA 字体形成的中式复古徽章。",
    enDescription: "Chinese retro bronze-patina badge logo with ornate linework.",
    image: "/assets/featured/text-chinese-bronze-badge-logo.jpg",
    prompt: "字体logo图形设计 中文“中国”与小英文“CHINA”两组设计艺术文字为主体形成一整个中式复古徽章的logo造型，采用复杂且精致的青铜器线条勾勒，深绿铜锈感，展现出极高的工艺水准。细腻的曲线，刚硬的直线，相互交织，构建出富有层次感的图案。精美的卷草纹，主图案与底纹有明显区分，增加立体感。其蜿蜒曲折的线条不仅增添了视觉上的丰富性，还蕴含着生生不息、繁荣昌盛的美好寓意。徽章占整体版面合理构图。优雅与庄重的氛围。（世界顶级大师级水准，要有灵魂，不呆板，有意境，有情感） 红色印章 “puti Design”。"
  },
  {
    id: "text-mythic-cloud-wukong-lines",
    category: "text-to-image",
    zhTitle: "悟空云线国潮海报",
    enTitle: "Wukong Cloud Line Poster",
    zhDescription: "彩色流线云海与极小悟空的宗师级排版。",
    enDescription: "Colorful flowing cloud-line poster with a tiny mythic monkey hero.",
    image: "/assets/featured/text-mythic-cloud-wukong-lines.jpg",
    prompt: "用横向流畅且色彩斑斓的曲线勾勒出云的写真（花果山，浪花与海洋生物，海底龙宫）主体居中，尾线条自由落体状垂落到悟空头上，下面坐着一个极小紧箍咒的悟空，悟空旁印章“悟”点缀，宗师级排版，大师级排版。"
  },
  {
    id: "text-isometric-street-vendors",
    category: "text-to-image",
    zhTitle: "中国街头行人集合",
    enTitle: "Chinese Street Vendor Set",
    zhDescription: "等轴测手绘街头摊贩与民间职业角色合集。",
    enDescription: "Isometric hand-drawn Chinese street vendor character collection.",
    image: "/assets/featured/text-isometric-street-vendors.jpg",
    prompt: "绘制等轴测视角的中国各式街头行人，手绘风格，30度视角展现，例如面摊，街头艺人，打铁匠，修皮鞋，煎饼果子，臭豆腐小贩，手抓饼摊主，烤红薯师傅，糖葫芦小贩，爆米花师傅，磨刀师傅等 20 种，手绘工笔风格，柔和色调，平行投影无透视，线条干净，艺术化插图，白色背景，无光影，背景干净，可分割，传统中式设计，细节精致，高清4K分辨率。请帮我把上面的图片生成视频。"
  },
  {
    id: "text-3d-song-merchant-board",
    category: "text-to-image",
    zhTitle: "宋代商贾3D设定板",
    enTitle: "Song Merchant 3D Board",
    zhDescription: "三段式3D卡通写实国风角色设定展板。",
    enDescription: "Three-part stylized 3D Chinese merchant character design board.",
    image: "/assets/featured/text-3d-song-merchant-board.jpg",
    prompt: "皮克斯3D卡通写实国风角色设定展板，分三段式标准角色设定排版，整体高级灰纯色背景。第一部分：顶部超大半身人物特写，柔和棚拍光影，极简灰渐变背景。第二部分：中间全身标准三视图，正面全身、侧面全身、背面全身，统一浅灰色干净背景。第三部分：底部4张人物面部表情特写横向排列，从左到右依次标注文字：喜、怒、恐惧、惊讶。人物形象：中年宋代商贾，胖乎乎眯眯眼，细腻写实3D卡通黏土建模，柔和皮肤质感，电影级细腻材质。服饰配饰：宋代商贾形象。光影：柔和均匀影棚柔光，无强烈硬阴影，8K超高清，电影质感，次世代3D渲染，细节细腻，角色统一五官造型，整套人物形象完全统一。"
  },
  {
    id: "text-dog-doodle-pattern",
    category: "text-to-image",
    zhTitle: "小狗涂鸦满版图案",
    enTitle: "Dog Doodle Pattern",
    zhDescription: "蓝白高密度小狗涂鸦满版纹样。",
    enDescription: "Dense blue-white dog doodle pattern filling the canvas.",
    image: "/assets/featured/text-dog-doodle-pattern.jpg",
    prompt: "运用Mr Doodle风格创作的这幅黑白涂鸦，满是不同种类小狗的涂鸦图案，密密麻麻地重叠在一起，铺满了整个画面，毫无留白之处。画面中抽象的小狗形象，以大胆前卫的线条绘制，蓝白的色彩搭配鲜明和谐，呈现出独特的大师艺术风格。"
  },
  {
    id: "text-tibetan-winter-village",
    category: "text-to-image",
    zhTitle: "冬季藏地村庄",
    enTitle: "Winter Tibetan Village",
    zhDescription: "白顶红墙、雪景僧人与信仰烟火感的极繁插画。",
    enDescription: "Maximalist snowy Tibetan village with red walls and monks.",
    image: "/assets/featured/text-tibetan-winter-village.jpg",
    prompt: "冬季的西藏村庄，密密麻麻，从画面上方错落着铺陈下来，整体是白顶红墙，点缀杂色，极繁主义，右侧是村庄边缘的雪景，雪色上窄下宽。画面底部是近景落雪高地，右下方有一位高僧人手牵着一个小僧人站立在雪上，远景白雪映衬近景红袍。山顶的经幡依稀可见，整体的对称营造出和谐的美，色调以白红对照，红是主色调。人间烟火与信仰的虔诚不分伯仲。有西藏色达的印象之美。加入青灰色滤镜效果高清画质。"
  },
  {
    id: "text-citywalk-collage",
    category: "text-to-image",
    zhTitle: "中国City Walk拼贴",
    enTitle: "China City Walk Collage",
    zhDescription: "透明纸、小票、剪报、邮票与人像的混合媒体拼贴。",
    enDescription: "Mixed-media Chinese city walk collage with paper textures.",
    image: "/assets/featured/text-citywalk-collage.jpg",
    prompt: "手绘加拼贴，以当代中国city walk 意境为灵感的拼贴风格艺术品。透明纸，收银小票，中华民国时期剪报撕纸，回形针，邮票，明信片，贴纸，涂鸦线稿，手写笔记，分层构图，lofi颗粒质感人像，多种纹理的纸张，艺术编排、手工美学，拼贴，创意组合，混合媒体达达主义。"
  },
  {
    id: "text-anime-courier-turnaround",
    category: "text-to-image",
    zhTitle: "外卖员动漫三视图",
    enTitle: "Courier Anime Turnaround",
    zhDescription: "日系治愈风现代外卖员角色设定板。",
    enDescription: "Healing anime courier character turnaround board.",
    image: "/assets/featured/text-anime-courier-turnaround.jpg",
    prompt: "人物形象提示词：（三视图）1.主视觉区 (上方)以 “正面 + 侧面 + 背面” 三个核心视角为主体，直观呈现角色的整体身形、服饰搭配和标志性特征，是制作人员对人物 “整体造型” 的参考基础。2.补充信息区 (左侧)拆分出 “面部特写” 和 “配色板”(明确毛发、服饰的色值)，补充主视角没覆盖的细节与色彩标准。3.局部细节区 (底部)用小模块单独展示关键部件的设计 (配饰、点缀、关键身份识别元素)，把主视角里的 “模糊细节” 拆分为精准的制作参考，方便导演确认。4.全身照比例照 (右侧)使用黄金比例参考物和人物身高形成对比。5.背景为白色，最高品质细节丰富。6【日系治愈动漫风格】现代风格，写实风格，质感光照，自然光线，8K高清纹理，布料褶皱自然，艺术写实风格，营造出震撼的视觉效果。人物外观设定: 23岁青年男性，纯黑利落寸头，新人外卖员，眼神胆怯但坚定，刚出社会的小青年，身穿外卖员工服。"
  },
  {
    id: "text-realistic-ancient-male-turnaround",
    category: "text-to-image",
    zhTitle: "古风白发男三视图",
    enTitle: "Ancient White-Haired Turnaround",
    zhDescription: "真人写实国风角色设定板与华服拆解。",
    enDescription: "Realistic ancient Chinese character design board with ornate costume.",
    image: "/assets/featured/text-realistic-ancient-male-turnaround.jpg",
    prompt: "人物形象提示词：（三视图）1.主视觉区 (上方)以 “正面 + 侧面 + 背面” 三个核心视角为主体，直观呈现角色的整体身形、服饰搭配和标志性特征，是制作人员对人物 “整体造型” 的参考基础。2.补充信息区 (左侧)拆分出 “面部特写” 和 “配色板”(明确毛发、服饰的色值)，补充主视角没覆盖的细节与色彩标准。3.局部细节区 (底部)用小模块单独展示关键部件的设计 (配饰、点缀、关键身份识别元素)，把主视角里的 “模糊细节” 拆分为精准的制作参考。4.全身照比例照 (右侧)使用黄金比例（9头身）参考物和人物身高形成对比。5.背景为白色，最高品质细节丰富。6【真人写实】超写实国风，现代风格，写实风格，质感光照，自然光线，质感十足，8K高清纹理，布料褶皱自然，艺术写实风格，营造出震撼惊艳的视觉效果。人物外观设定:古风帅哥，三庭五眼，氛围感白发，发丝细腻柔顺，狭长双眼，眼尾细长，睫毛浓密纤长。服饰首饰：锦衣华服貂裘，丰富的花纹，金丝描边，金质华丽的发冠，五官容貌：极致妖孽魅惑的容貌，高级构图，细节丰富，清晰精致，高清画质，长发凌乱发丝拂面，面部聚焦，清透瓷白的肌肤，保留皮肤纹理，超高清、最高画质、高质量，丰富细节、细腻肌理，忧郁清冷，写实逼真，潇洒。"
  },
  {
    id: "text-china-route-map",
    category: "text-to-image",
    zhTitle: "中国旅行路线手绘地图",
    enTitle: "China Travel Route Map",
    zhDescription: "南昌出发的半写实手绘线条旅行路线图。",
    enDescription: "Semi-realistic hand-drawn travel route map starting from Nanchang.",
    image: "/assets/featured/text-china-route-map.jpg",
    prompt: "绘制一幅半写实风格的手绘线条地图，生动呈现以南昌为起点，依次途经南京、日照、青岛、滁州乌衣镇、合肥，最后回归南昌的旅行路线。沿途安排可爱的卡通角色，它们或在城市地标处驻足，或在道路上前行，为整个路线增添活泼氛围，清晰展现这条独特的旅行路线图。"
  },
  {
    id: "text-paris-watercolor-sketch",
    category: "text-to-image",
    zhTitle: "城市水彩速写海报",
    enTitle: "City Watercolor Sketch Poster",
    zhDescription: "输入城市名后生成3:4高级水彩旅行海报。",
    enDescription: "Generate a premium 3:4 watercolor travel poster from a city name.",
    image: "/assets/featured/text-paris-watercolor-sketch.jpg",
    prompt: "请根据我输入的【城市】，生成 1 张 3:4 竖版高级水彩城市速写海报。用户只提供城市名称即可，你需要自动判断并生成最适合该城市的：代表性户外地点、标志性景观、街道/广场/河岸/小径空间、城市氛围、色彩气质、英文城市名称，以及一句高级简短的英文短句。整体采用高级水彩城市速写风、旅行手账水彩插画风、建筑速写海报风、留白感透明水彩风。画面应具有细腻自由的蓝黑色钢笔线条、克制透明的水彩铺色、大面积暖白色冷压纸留白、自然城市透视和轻盈松弛的旅行感。画幅固定为 3:4 竖版。视角与行人视线齐平，将城市代表性景观放在中景位置。街道、步道、广场、河岸或石板路自然向远处延伸，形成柔和消失点。前景保持开阔、明亮、轻盈，不要放置过大的裁切人物、树木、车辆或特写物体。水彩质感要求透明、克制、轻盈，呈现冷压纸纹理、暖白纸张底色、透明水彩叠色、轻微晕染、水痕边缘、干涸水彩边和局部留白。整体色彩低饱和、高级、透明，可使用暖赭石、浅陶土、蓝灰、薰衣草灰、暖米色、少量植物绿。在画面右上角或干净留白区域加入英文城市名，使用大写字母，柔和蓝灰色，字距舒展。下方加入一句简短高级的英文短句，例如：A quiet walk through light. / Soft streets, lasting memories. / A memory drawn in watercolor. 禁止摄影写实、3D、厚重数码水彩、地标拼贴、前景巨大物体、画面拥挤、粗黑轮廓、高饱和商业色、文字拼写错误、文字被遮挡。【城市】：巴黎"
  },
  {
    id: "text-fortune-talisman-typography",
    category: "text-to-image",
    zhTitle: "玄学符箓字体海报",
    enTitle: "Mystic Talisman Typography",
    zhDescription: "黑金东方符箓字体与招财主题排版。",
    enDescription: "Black-gold eastern talisman typography poster for fortune themes.",
    image: "/assets/featured/text-fortune-talisman-typography.jpg",
    prompt: "黑色背景上，最上方有中文‘好运连连’，中间是东方符箓字体的‘日進斗金’，文字灵感源于道家神秘灵符笔画，有玄术封印、夸张笔触、咒语结构线条，排布对称神秘，用金墨渲染，配有红色和蓝色，四周有装饰性英文‘Fortune Favors the Bold’、‘Money Magnet’、‘Compound Your Success’，古东方玄学风，全景镜头，神秘、庄重氛围，设计感强修饰。"
  },
  {
    id: "text-qinian-hall-minimal-poster",
    category: "text-to-image",
    zhTitle: "祈年殿极简艺术海报",
    enTitle: "Qinian Hall Minimal Poster",
    zhDescription: "极简建筑插画与大字背景融合的高端海报。",
    enDescription: "Minimal high-end architecture poster centered on Qinian Hall.",
    image: "/assets/featured/text-qinian-hall-minimal-poster.jpg",
    prompt: "以[祈年殿】作为核心视觉元素，创作一张极致简约的高端艺术海报。画面中央放置建筑的插画图形，背景以超大加粗的英文字体呈现，字体造型与建筑轮廓形成呼应，突出主建筑，字体淡化处理。环绕主体布置小号文字，阐释[祈年殿】的设计理念与哲思，并配以中文注解。整体调性典雅克制，色彩选择与建筑气质相契合一一部分文字或图形可巧妙延展为建筑的构件或外轮廓的延伸，营造浑然一体的构图。最终呈现一张高级感十足、极简且富有张力的艺术海报。"
  },
  {
    id: "text-joker-paper-sculpture-card",
    category: "text-to-image",
    zhTitle: "小丑纸雕艺术卡牌",
    enTitle: "Joker Paper Sculpture Card",
    zhDescription: "孟菲斯配色、丝网点绘与纸雕卡牌设计。",
    enDescription: "Avant-garde Memphis paper-sculpture card with Joker theme.",
    image: "/assets/featured/text-joker-paper-sculpture-card.jpg",
    prompt: "先锋前卫艺术设计，纸雕艺术卡牌设计。画面核心是抽象的简约形态，极简抽象，由几个关键元素构成强烈视觉焦点。由色彩孟菲斯色系配色，简约氛围。丝网印刷的点绘效果突出极简质感，立体感明显。描绘对象：暗黑版小丑。画布底部居中有文字“J O K E R”，文字细窄圆润几何线条搭配哥特风格，科技感里带一点流动感，数字艺术。大师排版，完美构图。"
  },
  {
    id: "text-tang-lingyan-officials",
    category: "text-to-image",
    zhTitle: "凌烟阁功臣合影",
    enTitle: "Lingyan Pavilion Officials",
    zhDescription: "唐朝二十四功臣纵版群像与姓名爵位标注。",
    enDescription: "Vertical Tang dynasty official group portrait with orderly spacing.",
    image: "/assets/featured/text-tang-lingyan-officials.jpg",
    prompt: "帮我生成图片：《唐朝二十四凌烟阁合影》高清，矢量，排列整齐，线条清晰，服装不一，无颗粒感，无杂色，无污点，每个功臣四周留3mm空白位，油画写实风格，每人爵位姓名位于左上角。9：16。"
  },
  {
    id: "text-ink-street-whitespace",
    category: "text-to-image",
    zhTitle: "留白街市工笔水墨",
    enTitle: "Whitespace Ink Street",
    zhDescription: "象牙白大留白与细毫笔街市线描。",
    enDescription: "Minimal ivory ink street scene with strong whitespace.",
    image: "/assets/featured/text-ink-street-whitespace.jpg",
    prompt: "大面积留白，象牙白背景，极简风格。一条曲折的街道作为画面唯一主体、两侧大面积留白。两侧留白占比至少70%，形成强烈的视觉压迫感。工笔水墨画，用极细的毫笔认真勾勒细节。呈现街市面貌，人群，车马，趣味十足。"
  },
  {
    id: "text-four-seasons-bookmarks",
    category: "text-to-image",
    zhTitle: "四季街景书签",
    enTitle: "Four Seasons Bookmarks",
    zhDescription: "春夏秋冬四张竖向极繁街景书签。",
    enDescription: "Four vertical maximalist seasonal street-scene bookmarks.",
    image: "/assets/featured/text-four-seasons-bookmarks.jpg",
    prompt: "春夏秋冬四季的极繁主义插画，以四季街景变化为内容，精美的矢量图片，四张竖向书签形式排列。"
  },
  {
    id: "text-fantasy-owl-lineart",
    category: "text-to-image",
    zhTitle: "荧蓝金线猫头鹰",
    enTitle: "Blue Gold Owl Line Art",
    zhDescription: "黑底奇幻猫头鹰线稿与神秘纹饰。",
    enDescription: "Fantasy owl line art in fluorescent blue and fine gold lines.",
    image: "/assets/featured/text-fantasy-owl-lineart.jpg",
    prompt: "纯黑背景的奇幻线稿插画，极繁主义，猫头鹰，鹰喙纯亚金，细节，复杂，线条肌理，神秘纹饰，由荧光蓝色线条与极细金色线条勾边共同描绘，线条柔美灵动，外部轮廓极简流畅，静谧神秘，画面高对比、干净、克制，高清渲染，超高清细节，图片居中底部有极细衬线字体英文主标题，副标题极小字英文金句+极小JS。"
  },
  {
    id: "text-campus-male-character-board",
    category: "text-to-image",
    zhTitle: "校园男主设定板",
    enTitle: "Campus Male Character Board",
    zhDescription: "现代校园男主的影视级角色设定图。",
    enDescription: "Modern Chinese campus male lead character design board.",
    image: "/assets/featured/text-campus-male-character-board.jpg",
    prompt: "人物图提示词：生成中国现代校园男主角色设定图，作品集级角色设计板，超写实真人摄影风格，干净高级的视觉排版，白色微纹理背景，细灰色分割线，专业影视剧/游戏角色概念设定板风格。画面必须包含清晰正确的中文标题和标签，中文汉字不要错乱，不要乱码，不要错字。主题角色：校园男子男主。整体构图：作品集角色设计板。左侧为角色主标题、头像、人物信息和角色小传；中间为角色三视图；右侧为服饰拆解和饰品拆解；底部为发型展示和表情排列。整体排版整洁、网格化、专业、高级，像影视人物设定集页面。左侧区域：顶部大标题使用粗体中文大字：“角色设定”，标题下方写：“角色设定图”。左侧中部放置一张男主半身头像特写，电影感光影，浅景深背景，男主穿校园服饰，表情自然，侧脸或三分之二角度。头像下方添加角色信息表，文字清晰：性别：男，年龄：17岁，身高：178cm，体重：65kg，职业：高中生，性格：阳光开朗、热血仗义，角色定位：现代校园男主，风格关键词：校园感 / 青春感 / 活力 / 爽朗。左下方添加“角色小传：”文字内容为短段落，排版整齐：一名热爱篮球的高中生，常穿着校服在球场挥洒汗水。性格阳光开朗，是班级里的活跃分子，对待朋友仗义热情，面对困难从不退缩，用积极的态度感染着身边的人，是同学眼中值得信赖的伙伴。中间区域：标题写：“三视图”，展示同一名男主的全身三视图，分别为正视图、侧视图、后视图。三个人物必须是同一个角色，同样发型、同样服装、同样体型。服装：蓝白配色的高中校服（长袖运动外套内搭白色T恤，下装为同系列运动长裤），白色运动鞋，背着黑色双肩运动书包，书包侧面可插着篮球。姿态：正面站立，双手自然下垂或一手插兜；侧面站立，身体微侧，书包自然垂于身侧；背面站立，展示校服背部细节和书包背面样式。三视图背景有浅灰色水平辅助线，并标注人体比例标签：头顶、下巴、肩线、胸线、腰线、臀线、脚底。"
  },
  {
    id: "text-qinian-hall-type-poster",
    category: "text-to-image",
    zhTitle: "祈年殿字体建筑海报",
    enTitle: "Qinian Hall Type Poster",
    zhDescription: "建筑插画、巨大字体和中文注解融合的高端版式。",
    enDescription: "Premium Qinian Hall poster blending architecture, type, and annotations.",
    image: "/assets/featured/text-qinian-hall-type-poster.jpg",
    prompt: "以[祈年殿】作为核心视觉元素，创作一张极致简约的高端艺术海报。画面中央放置建筑的插画图形，背景以超大加粗的英文字体呈现，字体造型与建筑轮廓形成呼应，突出主建筑，字体淡化处理。环绕主体布置小号文字，阐释[祈年殿】的设计理念与哲思，并配以中文注解。整体调性典雅克制，色彩选择与建筑气质相契合一一部分文字或图形可巧妙延展为建筑的构件或外轮廓的延伸，营造浑然一体的构图。最终呈现一张高级感十足、极简且富有张力的艺术海报。"
  }
];

