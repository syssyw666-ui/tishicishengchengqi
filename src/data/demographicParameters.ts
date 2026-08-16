import type { CategoryId, PromptParameter } from "../types";

const asset = (name: string) => `${import.meta.env.BASE_URL}assets/parameters/${name}`;
const parameterImage = (id: string) => asset(`${id}.png`);
const portraitImage = asset("purpose-portrait.jpg");
const sceneImage = asset("style-photorealistic.jpg");
const cameraImage = asset("camera-50mm-normal.jpg");
const lightingImage = asset("lighting-soft.jpg");
const renderImage = asset("render-realistic-texture.jpg");
const layoutImage = asset("purpose-poster-key-visual.jpg");
const materialImage = asset("material-fabric.jpg");

const neutralNegative = ["stereotype", "caricature", "offensive depiction", "exaggerated ethnic features"];

function param(
  category: CategoryId,
  id: string,
  styleGroup: string,
  zhName: string,
  enName: string,
  zhPrompt: string,
  enPrompt: string,
  image = sceneImage,
  negative: string[] = []
): PromptParameter {
  return {
    id,
    category,
    styleGroup,
    zhName,
    enName,
    defaultWeight: 1,
    image: parameterImage(id),
    zhPrompt,
    enPrompt,
    negative
  };
}

function ethnicity(
  id: string,
  styleGroup: string,
  zhName: string,
  enName: string,
  zhPrompt: string,
  enPrompt: string
) {
  return param("ethnicity", id, styleGroup, zhName, enName, zhPrompt, enPrompt, portraitImage, neutralNegative);
}

export const demographicParameters: PromptParameter[] = [
  ethnicity("ethnicity-east-asian", "region", "东亚族裔参考", "East Asian Reference", "人物外貌参考东亚地域族裔特征，五官自然克制，保留个体差异，不刻板化", "East Asian appearance reference, natural facial variation, respectful non-stereotyped depiction"),
  ethnicity("ethnicity-han-chinese", "region", "汉族人物参考", "Han Chinese Reference", "人物外貌参考汉族当代人像气质，自然肤色与真实个体差异，避免戏服化", "Han Chinese contemporary portrait reference, natural skin tone, real individual variation, not costume-like"),
  ethnicity("ethnicity-japanese", "region", "日本人物参考", "Japanese Reference", "人物外貌参考日本地域族裔特征，日常自然人像感，避免动漫化刻板表达", "Japanese appearance reference, everyday natural portrait feel, avoiding anime-like stereotyping"),
  ethnicity("ethnicity-korean", "region", "韩国人物参考", "Korean Reference", "人物外貌参考韩国地域族裔特征，干净自然的人像比例和现代气质", "Korean appearance reference, clean natural portrait proportions, modern everyday presence"),
  ethnicity("ethnicity-mongolian-central-asian", "region", "蒙古 / 中亚参考", "Mongolian Central Asian Reference", "人物外貌参考蒙古与中亚地域族裔特征，面部骨相清晰，真实自然", "Mongolian and Central Asian appearance reference, clear facial structure, realistic natural depiction"),
  ethnicity("ethnicity-southeast-asian", "region", "东南亚族裔参考", "Southeast Asian Reference", "人物外貌参考东南亚地域族裔特征，温暖肤色与自然五官，避免旅游广告刻板感", "Southeast Asian appearance reference, warm skin tones and natural features, avoiding travel-poster stereotypes"),
  ethnicity("ethnicity-south-asian", "region", "南亚族裔参考", "South Asian Reference", "人物外貌参考南亚地域族裔特征，棕色肤色层次、清晰五官和真实人像质感", "South Asian appearance reference, varied brown skin tones, defined features, realistic portrait texture"),
  ethnicity("ethnicity-west-asian-middle-eastern", "region", "西亚 / 中东参考", "West Asian Middle Eastern Reference", "人物外貌参考西亚与中东地域族裔特征，深邃五官、自然肤色和当代真实感", "West Asian and Middle Eastern appearance reference, deep-set features, natural skin tone, contemporary realism"),
  ethnicity("ethnicity-north-african", "region", "北非族裔参考", "North African Reference", "人物外貌参考北非地域族裔特征，暖橄榄或棕色肤色变化，真实自然", "North African appearance reference, warm olive to brown skin tone variation, realistic natural depiction"),
  ethnicity("ethnicity-sub-saharan-african", "region", "撒哈拉以南非洲参考", "Sub-Saharan African Reference", "人物外貌参考撒哈拉以南非洲地域族裔特征，深色肤色层次、自然发质与真实皮肤质感", "Sub-Saharan African appearance reference, rich dark skin tone variation, natural hair texture, realistic skin detail"),
  ethnicity("ethnicity-east-african", "region", "东非族裔参考", "East African Reference", "人物外貌参考东非地域族裔特征，修长骨相、深色肤色层次和自然个体差异", "East African appearance reference, slender facial structure, varied deep skin tones, natural individual variation"),
  ethnicity("ethnicity-west-african", "region", "西非族裔参考", "West African Reference", "人物外貌参考西非地域族裔特征，饱满面部结构、深色肤色和自然发质表现", "West African appearance reference, full facial structure, deep skin tone, natural hair texture"),
  ethnicity("ethnicity-european", "region", "欧洲族裔参考", "European Reference", "人物外貌参考欧洲地域族裔特征，肤色与发色自然变化，真实人像质感", "European appearance reference, natural variation in skin and hair color, realistic portrait feel"),
  ethnicity("ethnicity-nordic", "region", "北欧人物参考", "Nordic Reference", "人物外貌参考北欧地域特征，浅肤色、冷调发色或浅色眼睛可选，保持自然不过度美化", "Nordic appearance reference, fair skin, cool hair tones or light eyes when appropriate, natural not over-idealized"),
  ethnicity("ethnicity-mediterranean", "region", "地中海人物参考", "Mediterranean Reference", "人物外貌参考地中海地域特征，橄榄肤色、深色发眼和温暖人像气质", "Mediterranean appearance reference, olive skin tones, darker hair and eyes, warm portrait presence"),
  ethnicity("ethnicity-slavic-eastern-european", "region", "斯拉夫 / 东欧参考", "Slavic Eastern European Reference", "人物外貌参考斯拉夫与东欧地域特征，清晰骨相、自然肤色和真实生活感", "Slavic and Eastern European appearance reference, clear facial structure, natural skin tone, everyday realism"),
  ethnicity("ethnicity-latin-american", "region", "拉丁美洲参考", "Latin American Reference", "人物外貌参考拉丁美洲多元族裔特征，混合血统感、暖肤色变化与自然五官", "Latin American appearance reference, diverse mixed-heritage features, warm skin tone variation, natural facial features"),
  ethnicity("ethnicity-indigenous-american", "region", "美洲原住民参考", "Indigenous American Reference", "人物外貌参考美洲原住民地域族裔特征，尊重真实个体差异，不使用符号化刻板装饰", "Indigenous American appearance reference, respectful natural variation, avoiding tokenized stereotyped decoration"),
  ethnicity("ethnicity-pacific-islander", "region", "太平洋岛民参考", "Pacific Islander Reference", "人物外貌参考太平洋岛民地域族裔特征，暖棕肤色、自然体态和真实人像质感", "Pacific Islander appearance reference, warm brown skin tones, natural body presence, realistic portrait texture"),
  ethnicity("ethnicity-mixed-heritage", "mixed", "混合族裔参考", "Mixed Heritage Reference", "人物外貌参考混合族裔特征，融合多地域外貌线索，强调真实个体差异", "mixed-heritage appearance reference, blended regional features, emphasizing real individual variation"),
  ethnicity("ethnicity-diverse-group", "mixed", "多族裔群像", "Diverse Group", "多人画面包含不同地域族裔和肤色的人物，位置关系自然，避免符号化摆拍", "multi-person scene with diverse ethnicities and skin tones, natural relationships, avoiding tokenized staging"),

  ethnicity("skin-porcelain-fair", "skin-tone", "冷白肤色", "Porcelain Fair Skin", "冷白肤色，皮肤通透但保留自然纹理和真实毛孔", "porcelain fair skin tone, luminous but with natural skin texture and visible pores"),
  ethnicity("skin-warm-fair", "skin-tone", "暖白肤色", "Warm Fair Skin", "暖白肤色，自然血色和柔和肤色过渡", "warm fair skin tone, natural blush and soft skin transitions"),
  ethnicity("skin-light-medium", "skin-tone", "浅中性肤色", "Light Medium Skin", "浅中性肤色，干净自然的日常人像肤色层次", "light medium skin tone, clean natural everyday portrait complexion"),
  ethnicity("skin-olive", "skin-tone", "橄榄肤色", "Olive Skin", "橄榄肤色，黄绿或金棕底色自然融合，肤色层次真实", "olive skin tone with natural yellow-green or golden-brown undertone, realistic tonal variation"),
  ethnicity("skin-tan-wheat", "skin-tone", "小麦肤色", "Tan Wheat Skin", "小麦肤色，健康暖调肤色和自然户外感", "tan wheat skin tone, healthy warm complexion, natural outdoor feel"),
  ethnicity("skin-medium-brown", "skin-tone", "中棕肤色", "Medium Brown Skin", "中棕肤色，柔和高光和真实皮肤细节", "medium brown skin tone, soft highlights, realistic skin detail"),
  ethnicity("skin-deep-brown", "skin-tone", "深棕肤色", "Deep Brown Skin", "深棕肤色，层次丰富的暗部与高光，避免过度提亮或压黑", "deep brown skin tone with rich shadow and highlight detail, avoiding over-brightening or crushed blacks"),
  ethnicity("skin-freckled", "skin-tone", "雀斑皮肤", "Freckled Skin", "自然雀斑皮肤，斑点分布细腻，皮肤质感真实", "natural freckled skin, delicate freckle distribution, realistic skin texture"),
  ethnicity("skin-vitiligo-pattern", "skin-tone", "白癜风皮肤特征", "Vitiligo Skin Pattern", "人物皮肤带白癜风色块特征，真实自然、尊重呈现", "vitiligo skin pattern, realistic natural and respectful depiction"),

  ethnicity("feature-almond-eyes", "facial-feature", "杏仁眼", "Almond Eyes", "杏仁眼形，眼部轮廓清晰自然，不夸张", "almond-shaped eyes, clear natural eye contour, not exaggerated"),
  ethnicity("feature-deep-set-eyes", "facial-feature", "深邃眼窝", "Deep-Set Eyes", "深邃眼窝与清晰眉骨，保留自然面部光影", "deep-set eyes and clear brow structure, natural facial light and shadow"),
  ethnicity("feature-high-cheekbones", "facial-feature", "高颧骨", "High Cheekbones", "高颧骨面部结构，侧面轮廓和光影转折明确", "high cheekbone facial structure, clear profile planes and light transitions"),
  ethnicity("feature-soft-round-face", "facial-feature", "柔和圆脸", "Soft Round Face", "柔和圆脸轮廓，面部线条亲和自然", "soft round face shape, gentle approachable natural facial lines"),
  ethnicity("feature-square-jaw", "facial-feature", "方下颌", "Square Jaw", "方下颌与清晰下脸轮廓，形体明确但自然", "square jawline and clear lower-face contour, defined but natural"),
  ethnicity("feature-broad-nose-bridge", "facial-feature", "宽鼻梁", "Broad Nose Bridge", "宽鼻梁和自然鼻翼结构，真实人像比例", "broad nose bridge with natural nostril structure, realistic portrait proportions"),
  ethnicity("feature-narrow-nose-bridge", "facial-feature", "窄鼻梁", "Narrow Nose Bridge", "窄鼻梁和精细鼻部轮廓，真实自然不过度修饰", "narrow nose bridge with refined natural contour, realistic not over-retouched"),

  ethnicity("hair-straight-natural", "hair-texture", "自然直发质", "Natural Straight Hair", "自然直发质，发丝顺滑、有真实发束和头发表面高光", "natural straight hair texture, smooth strands, realistic hair grouping and surface highlights"),
  ethnicity("hair-wavy-natural", "hair-texture", "自然波浪发质", "Natural Wavy Hair", "自然波浪发质，柔和弧度和蓬松发量，发丝层次清楚", "natural wavy hair texture, soft curves, volume, clear strand layers"),
  ethnicity("hair-curly-natural", "hair-texture", "自然卷发质", "Natural Curly Hair", "自然卷发质，卷曲形态清楚，发量蓬松但轮廓可读", "natural curly hair texture, clear curl pattern, voluminous yet readable silhouette"),
  ethnicity("hair-coily-natural", "hair-texture", "自然紧卷发质", "Natural Coily Hair", "自然紧卷发质，细密卷曲结构和真实发量，不简化成块面", "natural coily hair texture, tight curl structure and real volume, not simplified into a flat mass"),

  param("character", "character-mentor", "social-role", "导师", "Mentor", "角色身份为导师或引路人，姿态稳重，具有经验感和指导感", "mentor or guide character identity, steady pose, experienced and instructive presence", portraitImage),
  param("character", "character-apprentice", "social-role", "学徒", "Apprentice", "角色身份为学徒或新手，带学习状态、工具或观察动作", "apprentice or novice character identity, learning state, tools, or observing gesture", portraitImage),
  param("character", "character-guardian", "social-role", "守护者", "Guardian", "角色身份为守护者，站位可靠，有保护感和坚定气质", "guardian character identity, reliable stance, protective and determined presence", portraitImage),
  param("character", "character-rebel", "social-role", "反叛者", "Rebel", "角色身份为反叛者，服装或姿态带独立、不服从秩序的叙事感", "rebel character identity, independent posture or styling, anti-establishment story tone", portraitImage),
  param("character", "character-twin-siblings", "social-role", "双胞胎角色", "Twin Characters", "双胞胎或相似角色设定，外貌呼应但表情和小细节有区别", "twin or paired character design, matching visual rhythm with distinct expressions and small details", portraitImage),

  param("hair-makeup", "hair-buzz-cut", "hair-shape", "寸头", "Buzz Cut", "寸头发型，头部轮廓清楚，干净利落", "buzz cut hairstyle, clear head silhouette, clean and sharp look", portraitImage),
  param("hair-makeup", "hair-box-braids", "hair-styling", "盒子辫", "Box Braids", "盒子辫发型，发辫分区清晰，发丝结构有秩序", "box braids hairstyle, clear braided sections, orderly hair structure", portraitImage),
  param("hair-makeup", "hair-silver-gray", "hair-styling", "银灰发色", "Silver Gray Hair", "银灰发色，冷调发丝高光和细腻发束", "silver gray hair color, cool-toned highlights and delicate hair strands", portraitImage),
  param("hair-makeup", "makeup-dewy-skin", "makeup-natural", "水光肌妆感", "Dewy Skin Makeup", "水光肌妆感，柔和高光、自然肤质和干净底妆", "dewy skin makeup, soft highlights, natural texture, clean base makeup", portraitImage),
  param("hair-makeup", "makeup-smoky-eye", "makeup-stylized", "烟熏眼妆", "Smoky Eye Makeup", "烟熏眼妆，眼部阴影层次明显，氛围成熟", "smoky eye makeup, layered eye shadows, mature atmospheric look", portraitImage),

  param("scene", "scene-greenhouse", "interior", "温室花房", "Greenhouse", "场景为温室花房，玻璃屋顶、植物层次和柔和自然光", "greenhouse scene, glass roof, layered plants, soft natural light"),
  param("scene", "scene-rooftop", "city", "城市天台", "City Rooftop", "场景为城市天台，远处天际线、护栏和开阔风感", "city rooftop scene, distant skyline, railing, open wind-swept atmosphere"),
  param("scene", "scene-underground-station", "city", "地下车站", "Underground Station", "场景为地下车站，轨道、指示灯和纵深透视", "underground station scene, tracks, signal lights, deep perspective"),
  param("scene", "scene-night-market", "culture", "夜市街景", "Night Market", "场景为夜市街景，摊位灯光、人群层次和烟火气", "night market street scene, vendor lights, layered crowd, lively everyday atmosphere"),
  param("scene", "scene-library-archive", "interior", "图书档案馆", "Library Archive", "场景为图书档案馆，高书架、档案盒和安静研究氛围", "library archive scene, tall shelves, archive boxes, quiet research atmosphere"),
  param("scene", "scene-data-center", "sci-fi", "数据中心", "Data Center", "场景为数据中心，服务器机柜、冷色指示灯和高科技秩序", "data center scene, server racks, cool indicator lights, high-tech order"),

  param("era", "era-biopunk", "future", "生物朋克", "Biopunk", "世界观为生物朋克，生物科技、培养容器和有机机械结构", "biopunk worldbuilding, biotechnology, growth chambers, organic-mechanical structures"),
  param("era", "era-dieselpunk", "world-history", "柴油朋克", "Dieselpunk", "世界观为柴油朋克，铆钉机械、复古工业和烟尘战争年代质感", "dieselpunk worldbuilding, riveted machinery, retro industry, smoky wartime texture"),
  param("era", "era-y2k-digital", "modern", "Y2K 数码年代", "Y2K Digital Era", "时代氛围为 Y2K 数码年代，透明塑料、银色科技和早期互联网视觉", "Y2K digital era mood, translucent plastic, silver tech, early internet visual language"),
  param("era", "era-retro-futurism", "future", "复古未来主义", "Retro Futurism", "世界观为复古未来主义，旧时代想象中的未来机器、圆润飞行器和怀旧科技感", "retro-futurist worldbuilding, vintage imagined future machines, rounded vehicles, nostalgic technology"),

  param("layout", "layout-diagonal-empty-space", "negative-space", "斜向留白", "Diagonal Empty Space", "主体沿对角线一侧排布，另一侧形成斜向留白", "subject arranged along one diagonal side, opposite side forms diagonal negative space", layoutImage),
  param("layout", "layout-circular-focus", "subject-position", "环形焦点", "Circular Focus", "画面元素围绕中心形成环形视觉焦点，主体位于中心或环内", "circular focal layout, elements orbit around center, subject inside the ring", layoutImage),

  param("background", "background-matte-black", "color", "哑光黑背景", "Matte Black Background", "哑光黑色背景，低反光，高级安静，突出主体轮廓", "matte black background, low reflection, premium quiet mood, clear subject silhouette", materialImage),
  param("background", "background-warm-gray", "color", "暖灰背景", "Warm Gray Background", "暖灰色背景，中性柔和，适合人像和产品图", "warm gray background, neutral and soft, suitable for portraits and product shots", materialImage),
  param("background", "background-velvet", "fabric", "天鹅绒背景", "Velvet Background", "天鹅绒背景，柔软暗部和细腻织物绒感", "velvet background, soft dark shadows and delicate textile nap", materialImage),
  param("background", "background-brushed-metal", "material", "拉丝金属背景", "Brushed Metal Background", "拉丝金属背景，细横纹、高光过渡和工业质感", "brushed metal background, fine horizontal grain, highlight transitions, industrial texture", materialImage),
  param("background", "background-cork-board", "material", "软木板背景", "Cork Board Background", "软木板背景，颗粒纹理和手作资料板氛围", "cork board background, granular texture, handmade pinboard atmosphere", materialImage),
  param("background", "background-concrete-wall", "material", "清水混凝土背景", "Concrete Wall Background", "清水混凝土背景，细腻灰色孔洞和现代建筑质感", "fair-faced concrete wall background, fine gray pores, modern architectural texture", materialImage),

  param("camera", "camera-profile-view", "camera-angle", "侧面视角", "Profile View", "侧面视角，突出人物轮廓、鼻梁和姿态线条", "profile view, emphasizing silhouette, nose bridge, and body line", cameraImage),
  param("camera", "camera-dolly-zoom", "motion", "滑动变焦感", "Dolly Zoom", "滑动变焦感，主体尺度稳定，背景透视产生压缩或拉伸", "dolly-zoom feeling, stable subject scale with background perspective compression or expansion", cameraImage),

  param("lighting", "lighting-moonlight", "natural", "月光", "Moonlight", "月光照明，冷蓝银色边缘光和安静夜间氛围", "moonlight illumination, cool blue-silver rim light, quiet night mood", lightingImage),
  param("lighting", "lighting-lantern", "interior", "灯笼光", "Lantern Light", "灯笼光照明，暖红或暖黄漫射光，带传统夜景氛围", "lantern lighting, warm red or yellow diffused glow, traditional night atmosphere", lightingImage),
  param("lighting", "lighting-fluorescent", "interior", "荧光灯", "Fluorescent Light", "荧光灯照明，冷白偏绿，室内公共空间真实感", "fluorescent lighting, cool white with slight green tint, realistic public interior mood", lightingImage),
  param("lighting", "lighting-projector", "dramatic", "投影光", "Projector Light", "投影光照明，画面带投影图案、切割光斑和戏剧层次", "projector lighting, projected patterns, cut light patches, dramatic layers", lightingImage),
  param("lighting", "lighting-stage-spotlight", "dramatic", "舞台追光", "Stage Spotlight", "舞台追光，主体被强光圈定，背景进入暗部", "stage spotlight, subject isolated by strong cone of light, background falling into darkness", lightingImage),

  param("render", "render-ray-traced", "realism", "光线追踪", "Ray Traced", "光线追踪渲染，反射、折射和阴影物理准确", "ray-traced rendering, physically accurate reflections refractions and shadows", renderImage),
  param("render", "render-path-traced", "realism", "路径追踪", "Path Traced", "路径追踪渲染，真实全局光照、柔和反弹光和高质量噪点控制", "path-traced rendering, realistic global illumination, soft bounce light, clean noise control", renderImage),
  param("render", "render-toon-shading", "stylized", "卡通渲染", "Toon Shading", "卡通渲染，明暗分区清晰，轮廓干净，造型简洁", "toon shading, clear light-shadow bands, clean outlines, simplified forms", renderImage),
  param("render", "render-cel-shading", "stylized", "赛璐璐渲染", "Cel Shading", "赛璐璐渲染，硬边阴影、平涂色块和动画质感", "cel shading, hard-edged shadows, flat color areas, animation-like finish", renderImage),
  param("render", "render-resin-toy", "stylized", "树脂潮玩质感", "Resin Toy Texture", "树脂潮玩质感，半哑光表面、圆润高光和精致模型感", "resin designer-toy texture, semi-matte surface, rounded highlights, polished model feel", renderImage),

  param("visual-effect", "visual-dust-motes", "atmosphere", "空气尘埃", "Dust Motes", "空气中漂浮细小尘埃，逆光下形成真实空间颗粒", "small dust motes floating in air, visible in backlight, realistic spatial particles"),
  param("visual-effect", "visual-embers", "elemental", "火星余烬", "Embers", "火星余烬漂浮，橙红粒子和热空气氛围", "floating embers, orange-red particles and warm heated atmosphere"),
  param("visual-effect", "visual-snowfall", "elemental", "飘雪", "Snowfall", "飘雪效果，前中后景雪粒层次和冷空气感", "falling snow effect, layered snow particles across foreground midground and background"),
  param("visual-effect", "visual-rain-streaks", "elemental", "雨丝", "Rain Streaks", "雨丝效果，斜向雨线、湿润反光和动态天气感", "rain streak effect, diagonal rain lines, wet reflections and dynamic weather mood"),

  param("purpose", "purpose-sticker-sheet", "social", "贴纸套组", "Sticker Sheet", "贴纸套组用途，多个表情或姿态，白边清晰，独立可裁切", "sticker sheet purpose, multiple expressions or poses, clear white borders, individually cuttable", layoutImage),
  param("purpose", "purpose-ui-mockup", "design", "界面样机", "UI Mockup", "界面样机用途，屏幕内容清楚、层级整齐、适合产品展示", "UI mockup purpose, clear screen content, organized hierarchy, suitable for product presentation", layoutImage),
  param("purpose", "purpose-packaging-render", "commercial", "包装展示", "Packaging Render", "包装展示用途，盒型、标签区域和材质反光清楚，适合电商图", "packaging render purpose, clear box shape, label area, material highlights, e-commerce ready", layoutImage),
  param("purpose", "purpose-video-thumbnail", "cover", "视频缩略图", "Video Thumbnail", "视频缩略图用途，强焦点、高可读轮廓和安全标题区域", "video thumbnail purpose, strong focal point, readable silhouette, safe title area", layoutImage),

  param("color-material", "material-rubber", "industrial", "橡胶", "Rubber", "橡胶材质，哑光表面、轻微颗粒和弹性质感", "rubber material, matte surface, subtle grain, elastic tactile feel", materialImage),
  param("color-material", "material-acrylic", "translucent", "亚克力", "Acrylic", "亚克力材质，半透明边缘、干净折射和现代展示感", "acrylic material, translucent edges, clean refraction, modern display feel", materialImage),
  param("color-material", "color-analogous", "palette", "邻近色", "Analogous Palette", "邻近色配色，使用色环相邻颜色形成柔和统一的色彩关系", "analogous color palette, neighboring hues creating a soft unified color relationship", materialImage)
];
