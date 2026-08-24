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
  }
];

