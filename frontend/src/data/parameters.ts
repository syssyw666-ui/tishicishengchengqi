import type { Category, PromptParameter } from "../types";
import { artistParameters } from "./artistParameters";
import { colorGradingParameters } from "./colorGradingParameters";
import { clothingParameters } from "./clothingParameters";
import { culturalPatternParameters } from "./culturalPatternParameters";
import { expandedParameters } from "./expandedParameters";
import { exhaustiveParameters } from "./exhaustiveParameters";
import { finalSupplementParameters } from "./finalSupplementParameters";
import { gapSupplementParameters } from "./gapSupplementParameters";
import { demographicParameters } from "./demographicParameters";
import { poseParameters } from "./poseParameters";
import { colorPaletteParameters } from "./colorPaletteParameters";
import { supplementParameters } from "./supplementParameters";
import { photoPurposeParameters } from "./photoPurposeParameters";

export const categories: Category[] = [
  { id: "style", zhName: "画面风格", enName: "Style", mode: "multi", description: "决定整体视觉语言，可混选。" },
  { id: "artist-style", zhName: "艺术家风格", enName: "Artist Style", mode: "multi", description: "选择艺术史中的笔触、构图、色彩和画派语言，可混选。" },
  { id: "character", zhName: "角色设定", enName: "Character", mode: "multi", description: "控制年龄阶段、体态、职业身份、社会角色、幻想或科幻身份，可混选。" },
  { id: "ethnicity", zhName: "人物族裔 / 外貌参考", enName: "Ethnicity & Appearance", mode: "multi", description: "控制人物的地域族裔参考、肤色、面部特征和发质，只用于中性外貌描述，避免刻板化。" },
  { id: "clothing", zhName: "人物衣着", enName: "Clothing", mode: "multi", description: "控制人物服装款式、袖长、下装、外套、制服、传统服饰与配饰，可混选。" },
  { id: "hair-makeup", zhName: "发型妆容", enName: "Hair & Makeup", mode: "multi", description: "控制发长、发型、发丝动态以及自然或风格化妆容，可混选。" },
  { id: "pose", zhName: "人物姿势", enName: "Pose", mode: "multi", description: "控制人物站姿、坐姿、躺卧、动作、舞蹈、互动和镜头前姿态，可混选。" },
  { id: "expression", zhName: "表情神态", enName: "Expression", mode: "multi", description: "控制人物脸部情绪、眼神状态和性格气质，可混选。" },
  { id: "ethnic-style", zhName: "民族风格", enName: "Ethnic Style", mode: "multi", description: "中国56个民族的纹样、工艺、建筑与色彩灵感，可混选。" },
  { id: "scene", zhName: "场景环境", enName: "Scene", mode: "multi", description: "决定主体所处空间、背景和环境类型。" },
  { id: "era", zhName: "时代世界观", enName: "Era", mode: "multi", description: "决定画面时间背景、世界观和文化语境。" },
  { id: "story-action", zhName: "叙事事件", enName: "Story Action", mode: "multi", description: "控制画面正在发生的事件、人物互动和故事动作，可混选。" },
  { id: "mood", zhName: "情绪氛围", enName: "Mood", mode: "multi", description: "决定情绪、叙事气质和心理感受。" },
  { id: "layout", zhName: "排版留白", enName: "Layout", mode: "single", description: "决定主体位置、留白方向和标题安全区，只能单选。" },
  { id: "background", zhName: "背景质感", enName: "Background", mode: "multi", description: "决定背景颜色、纸张、织物、金属、自然天空等底板质感，可与排版留白组合。" },
  { id: "layout-style", zhName: "排版风格", enName: "Layout Style", mode: "multi", description: "决定版式审美和设计语言，可与排版留白组合。" },
  { id: "framing", zhName: "画面范围", enName: "Shot Scale", mode: "single", description: "决定主体在画面中占多少比例，只能单选；在构图/镜头中选择。" },
  { id: "camera", zhName: "构图/镜头", enName: "Composition & Camera", mode: "multi", description: "控制构图法则、视觉引导、镜头角度、焦段和拍摄手法。" },
  { id: "lighting", zhName: "光线氛围", enName: "Lighting", mode: "multi", description: "控制光线、天气和画面情绪。" },
  { id: "render", zhName: "渲染质感", enName: "Render", mode: "multi", description: "控制成片质感、细节和材质表现。" },
  { id: "visual-effect", zhName: "视觉特效", enName: "Visual Effect", mode: "multi", description: "控制粒子、烟雾、火焰、数字故障、光轨和超现实画面效果，可混选。" },
  { id: "purpose", zhName: "图片用途", enName: "Purpose", mode: "multi", description: "告诉模型图片最终用于什么场景。" },
  { id: "palette", zhName: "配色方案", enName: "Color Palette", mode: "multi", description: "用成组色卡确定主色、辅助色与画面色彩关系；与后期调色、材质表现分开。" },
  { id: "color-grading", zhName: "后期调色", enName: "Color Grading", mode: "multi", description: "控制摄影后期、电影调色、设备质感和社媒滤镜倾向，可混选。" },
  { id: "color-material", zhName: "色彩与材质", enName: "Color & Material", mode: "multi", description: "强化色调、表面材质和触感。" }
];

export const styleGroups = [
  { id: "all", zhName: "全部风格" },
  { id: "photo-film-3d", zhName: "摄影 / 电影 / 3D" },
  { id: "artist-style", zhName: "艺术家 / 画派" },
  { id: "ethnic-style", zhName: "民族 / 非遗" },
  { id: "render", zhName: "渲染质感" },
  { id: "color-grading", zhName: "后期调色" },
  { id: "visual-effect", zhName: "视觉特效" },
  { id: "color-material", zhName: "色彩材质" },
  { id: "anime", zhName: "动画 / 二次元" },
  { id: "eastern", zhName: "东方 / 民俗" },
  { id: "design-retro", zhName: "设计 / 复古 / 实验" },
  { id: "craft-print", zhName: "版画 / 工艺 / 织物" }
];

export const categoryGroups: Partial<Record<Category["id"], Array<{ id: string; zhName: string }>>> = {
  framing: [
    { id: "all", zhName: "全部画面范围" },
    { id: "shot-size", zhName: "景别与主体占比" }
  ],
  style: styleGroups,
  "artist-style": [
    { id: "all", zhName: "全部艺术家" },
    { id: "impression-post", zhName: "印象派 / 后印象派" },
    { id: "east-asian", zhName: "东方绘画" },
    { id: "decorative-illustration", zhName: "装饰 / 插画" },
    { id: "international-illustration", zhName: "国外经典插图" },
    { id: "editorial-graphic", zhName: "社论 / 平面插画" },
    { id: "childrens-picturebook", zhName: "童书 / 绘本" },
    { id: "poster-print", zhName: "海报 / 印刷" },
    { id: "modern-avantgarde", zhName: "现代主义 / 抽象" },
    { id: "surreal-symbolic", zhName: "超现实 / 象征" },
    { id: "renaissance-baroque", zhName: "文艺复兴 / 巴洛克" },
    { id: "folk-global", zhName: "世界民艺 / 民俗" },
    { id: "comic-sequential", zhName: "漫画 / 分镜" },
    { id: "american-pop", zhName: "波普 / 当代经典" }
  ],
  character: [
    { id: "all", zhName: "全部角色" },
    { id: "age-stage", zhName: "年龄阶段" },
    { id: "profession", zhName: "职业身份" },
    { id: "social-role", zhName: "社会角色" },
    { id: "body-type", zhName: "体态比例" },
    { id: "fantasy", zhName: "幻想身份" },
    { id: "sci-fi", zhName: "科幻身份" }
  ],
  ethnicity: [
    { id: "all", zhName: "全部族裔外貌" },
    { id: "region", zhName: "地域族裔参考" },
    { id: "skin-tone", zhName: "肤色与皮肤细节" },
    { id: "facial-feature", zhName: "面部骨相特征" },
    { id: "hair-texture", zhName: "自然发质" },
    { id: "mixed", zhName: "混合族裔 / 多人组合" }
  ],
  clothing: [
    { id: "all", zhName: "全部衣着" },
    { id: "tops-sleeves", zhName: "袖长 / 上衣" },
    { id: "outerwear", zhName: "外套 / 披挂" },
    { id: "pants", zhName: "裤装" },
    { id: "skirts-dresses", zhName: "裙装 / 连衣裙" },
    { id: "formal-uniform", zhName: "正式 / 制服" },
    { id: "traditional", zhName: "传统服饰" },
    { id: "fantasy-sci-fi", zhName: "幻想 / 科幻" },
    { id: "accessories-shoes", zhName: "配饰 / 鞋履" },
    { id: "fit-material", zhName: "版型 / 材质" }
  ],
  "hair-makeup": [
    { id: "all", zhName: "全部发妆" },
    { id: "hair-length", zhName: "发长" },
    { id: "hair-shape", zhName: "发型轮廓" },
    { id: "hair-styling", zhName: "发丝造型" },
    { id: "makeup-natural", zhName: "自然妆容" },
    { id: "makeup-stylized", zhName: "风格妆容" }
  ],
  pose: [
    { id: "all", zhName: "全部姿势" },
    { id: "standing", zhName: "站姿" },
    { id: "sitting", zhName: "坐姿" },
    { id: "motion", zhName: "行走 / 动态" },
    { id: "action", zhName: "运动 / 战斗" },
    { id: "dance", zhName: "舞蹈" },
    { id: "lying", zhName: "躺卧 / 趴卧" },
    { id: "interaction", zhName: "多人互动" },
    { id: "emotion", zhName: "情绪动作" },
    { id: "camera-ready", zhName: "镜头前姿态" }
  ],
  expression: [
    { id: "all", zhName: "全部表情" },
    { id: "positive", zhName: "积极表情" },
    { id: "calm", zhName: "平静克制" },
    { id: "negative", zhName: "低落疲惫" },
    { id: "dramatic", zhName: "戏剧情绪" },
    { id: "personality", zhName: "性格气质" }
  ],
  "ethnic-style": [
    { id: "all", zhName: "全部民族" },
    { id: "major", zhName: "常用 / 代表" },
    { id: "northwest", zhName: "西北 / 北方" },
    { id: "southwest", zhName: "西南 / 高原" },
    { id: "south", zhName: "华南 / 岭南" },
    { id: "northeast", zhName: "东北 / 边境" },
    { id: "island", zhName: "海岛 / 山地" },
    { id: "pattern-craft", zhName: "民族纹样 / 工艺" },
    { id: "traditional-craft", zhName: "非遗手作 / 工艺" }
  ],
  scene: [
    { id: "all", zhName: "全部场景" },
    { id: "city", zhName: "城市建筑" },
    { id: "interior", zhName: "室内空间" },
    { id: "nature", zhName: "自然地貌" },
    { id: "weather", zhName: "天气季节" },
    { id: "culture", zhName: "文化历史" },
    { id: "era-world", zhName: "时代与世界观" },
    { id: "ruins", zhName: "遗迹废墟" },
    { id: "sci-fi", zhName: "科幻设施" },
    { id: "fantasy", zhName: "幻想异域" }
  ],
  era: [
    { id: "all", zhName: "全部时代" },
    { id: "ancient", zhName: "古代通用" },
    { id: "ancient-china", zhName: "中国古代" },
    { id: "world-history", zhName: "世界历史" },
    { id: "modern", zhName: "近现代" },
    { id: "future", zhName: "未来科幻" },
    { id: "apocalypse", zhName: "末世重建" },
    { id: "eastern-fantasy", zhName: "东方幻想" }
  ],
  "story-action": [
    { id: "all", zhName: "全部事件" },
    { id: "daily", zhName: "日常行为" },
    { id: "creation", zhName: "创作表达" },
    { id: "work", zhName: "工作任务" },
    { id: "adventure", zhName: "探索冒险" },
    { id: "relationship", zhName: "关系情绪" },
    { id: "dramatic", zhName: "戏剧冲突" },
    { id: "commercial", zhName: "商业展示" }
  ],
  mood: [
    { id: "all", zhName: "全部情绪" },
    { id: "positive", zhName: "明亮积极" },
    { id: "quiet", zhName: "安静克制" },
    { id: "dramatic", zhName: "戏剧张力" },
    { id: "dark", zhName: "阴暗悬疑" },
    { id: "romantic", zhName: "诗意浪漫" },
    { id: "lonely", zhName: "孤独感伤" },
    { id: "surreal", zhName: "梦境超现实" },
    { id: "luxury", zhName: "精致奢华" }
  ],
  layout: [
    { id: "all", zhName: "全部版式" },
    { id: "subject-position", zhName: "主体位置" },
    { id: "negative-space", zhName: "留白方向" },
    { id: "safe-area", zhName: "安全区" },
    { id: "split", zhName: "分割版式" },
    { id: "commercial", zhName: "商业版式" },
    { id: "info", zhName: "信息展示" },
    { id: "platform", zhName: "平台规格" }
  ],
  background: [
    { id: "all", zhName: "全部背景" },
    { id: "color", zhName: "纯色底板" },
    { id: "paper", zhName: "纸张肌理" },
    { id: "fabric", zhName: "织物背景" },
    { id: "studio", zhName: "影棚背景" },
    { id: "material", zhName: "材质底板" },
    { id: "nature", zhName: "自然氛围" },
    { id: "special", zhName: "特殊效果" }
  ],
  "layout-style": [
    { id: "all", zhName: "全部排版风格" },
    { id: "minimal", zhName: "极简留白" },
    { id: "grid", zhName: "网格系统" },
    { id: "editorial", zhName: "杂志社论" },
    { id: "commercial", zhName: "商业促销" },
    { id: "digital", zhName: "数字界面" },
    { id: "cultural", zhName: "东方文化" },
    { id: "print", zhName: "印刷海报" },
    { id: "youth", zhName: "潮流年轻" },
    { id: "soft-ui", zhName: "柔和界面" },
    { id: "catalog", zhName: "图录画册" },
    { id: "experimental", zhName: "实验拼贴" }
  ],
  camera: [
    { id: "all", zhName: "全部构图/镜头" },
    { id: "shot-size", zhName: "画面范围" },
    { id: "focal-length", zhName: "焦距焦段" },
    { id: "camera-angle", zhName: "摄像机角度" },
    { id: "angle", zhName: "机位高度" },
    { id: "composition-rule", zhName: "构图法则" },
    { id: "visual-guide", zhName: "视觉引导" },
    { id: "depth", zhName: "空间层次" },
    { id: "person-position", zhName: "人物位置" },
    { id: "group-relationship", zhName: "多人位置关系" },
    { id: "lens-effect", zhName: "镜头效果" },
    { id: "motion", zhName: "运动质感" },
    { id: "composition", zhName: "构图取景" }
  ],
  lighting: [
    { id: "all", zhName: "全部光线" },
    { id: "natural", zhName: "自然光" },
    { id: "interior", zhName: "室内灯光" },
    { id: "dramatic", zhName: "戏剧光效" },
    { id: "sci-fi", zhName: "科幻光效" }
  ],
  render: [
    { id: "all", zhName: "全部渲染" },
    { id: "realism", zhName: "写实算法" },
    { id: "stylized", zhName: "风格化渲染" },
    { id: "technical", zhName: "技术视效" }
  ],
  "visual-effect": [
    { id: "all", zhName: "全部特效" },
    { id: "light-particle", zhName: "光效粒子" },
    { id: "atmosphere", zhName: "烟尘空气" },
    { id: "elemental", zhName: "自然元素" },
    { id: "digital", zhName: "数字故障" },
    { id: "dynamic", zhName: "动态速度" },
    { id: "surreal", zhName: "超现实" }
  ],
  purpose: [
    { id: "all", zhName: "全部用途" },
    { id: "photography", zhName: "照片摄影" },
    { id: "cover", zhName: "封面海报" },
    { id: "commercial", zhName: "商业电商" },
    { id: "layout-style", zhName: "排版风格" },
    { id: "design", zhName: "设计可视化" },
    { id: "social", zhName: "社媒头像" }
  ],
  palette: [
    { id: "all", zhName: "全部配色" },
    { id: "chinese", zhName: "中式东方" },
    { id: "morandi", zhName: "莫兰迪" },
    { id: "cinema", zhName: "电影叙事" },
    { id: "nature", zhName: "自然风景" },
    { id: "global", zhName: "世界风格" },
    { id: "commercial", zhName: "商业设计" }
  ],
  "color-grading": [
    { id: "all", zhName: "全部调色" },
    { id: "clean-bright", zhName: "清透 / 明亮" },
    { id: "cinematic", zhName: "电影调色" },
    { id: "film-vintage", zhName: "胶片 / 复古" },
    { id: "camera-look", zhName: "相机质感" },
    { id: "commercial", zhName: "商业 / 社媒" },
    { id: "portrait-retouch", zhName: "人像修图" },
    { id: "skin-detail", zhName: "肤质细节" },
    { id: "drone-aerial", zhName: "航拍 / 风光" },
    { id: "mood", zhName: "情绪色调" }
  ],
  "color-material": [
    { id: "all", zhName: "全部色材" },
    { id: "base", zhName: "基础色材" },
    { id: "palette", zhName: "基础色彩控制" },
    { id: "fabric", zhName: "织物柔材" },
    { id: "stone", zhName: "石材矿物" },
    { id: "industrial", zhName: "工业材质" },
    { id: "translucent", zhName: "透明炫彩" }
  ]
};

const img = (id: string) => `${import.meta.env.BASE_URL}assets/parameters/${id}.jpg`;

export const parameters: PromptParameter[] = [
  { id: "style-photorealistic", category: "style", zhName: "写实摄影", enName: "Photorealistic", defaultWeight: 1, image: img("style-photorealistic"), zhPrompt: "写实摄影风格，真实光影和自然细节", enPrompt: "photorealistic photography with natural light, real texture, believable everyday detail", negative: ["cartoon", "plastic skin"] },
  { id: "style-cinematic", category: "style", zhName: "电影感", enName: "Cinematic", defaultWeight: 1, image: img("style-cinematic"), zhPrompt: "电影剧照质感，戏剧化构图和叙事氛围", enPrompt: "cinematic film still, dramatic composition, expressive atmosphere, premium color grading" },
  { id: "style-animated-3d", category: "style", zhName: "3D动画电影感", enName: "3D Animated", defaultWeight: 1, image: img("style-animated-3d"), zhPrompt: "家庭动画电影般的风格化 3D 视觉", enPrompt: "family-friendly stylized 3D animated feature-film look, expressive shapes, polished character appeal" },
  { id: "style-anime", category: "style", zhName: "二次元", enName: "Anime", defaultWeight: 1, image: img("style-anime"), zhPrompt: "精致二次元插画，清晰线条和动画感上色", enPrompt: "refined anime illustration, clean linework, expressive color, dynamic animated composition" },
  { id: "style-cyberpunk", category: "style", zhName: "赛博朋克", enName: "Cyberpunk", defaultWeight: 1, image: img("style-cyberpunk"), zhPrompt: "赛博朋克霓虹城市美学，高反差未来氛围", enPrompt: "cyberpunk neon aesthetic, futuristic city mood, high contrast, glowing signs without readable brand text" },
  { id: "style-watercolor", category: "style", zhName: "水彩", enName: "Watercolor", defaultWeight: 1, image: img("style-watercolor"), zhPrompt: "水彩绘画质感，柔和晕染和纸张纹理", enPrompt: "watercolor painting, soft washes, visible paper grain, gentle pigment bleeding" },
  { id: "style-oil-painting", category: "style", zhName: "油画", enName: "Oil Painting", defaultWeight: 1, image: img("style-oil-painting"), zhPrompt: "厚涂油画质感，明显笔触和层次色彩", enPrompt: "oil painting, layered brush strokes, rich pigment, painterly texture" },
  { id: "style-chinese-ink", category: "style", zhName: "国风水墨", enName: "Chinese Ink", defaultWeight: 1, image: img("style-chinese-ink"), zhPrompt: "国风水墨意境，留白、烟云和东方山水气质", enPrompt: "elegant Chinese ink fantasy art, misty mountains, poetic negative space, brush-and-wash texture" },
  { id: "style-pixel-art", category: "style", zhName: "像素艺术", enName: "Pixel Art", defaultWeight: 1, image: img("style-pixel-art"), zhPrompt: "像素艺术风格，清晰像素块和复古游戏质感", enPrompt: "pixel art scene, crisp blocky pixels, retro game composition, limited palette" },
  { id: "style-clay-animation", category: "style", zhName: "黏土动画", enName: "Clay Animation", defaultWeight: 1, image: img("style-clay-animation"), zhPrompt: "黏土动画质感，手工塑形和柔和微瑕疵", enPrompt: "clay animation look, handcrafted sculpted forms, soft tactile imperfections" },
  { id: "style-low-poly", category: "style", zhName: "低多边形", enName: "Low Poly", defaultWeight: 1, image: img("style-low-poly"), zhPrompt: "低多边形 3D 风格，几何切面和简洁造型", enPrompt: "low-poly 3D render, geometric faceted forms, clean simplified shapes" },
  { id: "style-concept-art", category: "style", zhName: "概念设计", enName: "Concept Art", defaultWeight: 1, image: img("style-concept-art"), zhPrompt: "影视游戏概念设计，宏大尺度和设计感细节", enPrompt: "cinematic concept art, large-scale environment design, strong silhouette, production design detail" },

  { id: "style-warm-fantasy-animation", category: "style", styleGroup: "anime", zhName: "温暖奇幻手绘动画", enName: "Warm Fantasy Animation", defaultWeight: 1, image: img("style-warm-fantasy-animation"), zhPrompt: "温暖奇幻手绘动画，柔和自然背景、童话感光线和细腻手绘质感", enPrompt: "warm hand-drawn fantasy animation, painterly nature backgrounds, gentle fairy-tale light, handcrafted charm" },
  { id: "style-clear-sky-youth-anime", category: "style", styleGroup: "anime", zhName: "清澈天空青春动画", enName: "Clear-Sky Youth Anime", defaultWeight: 1, image: img("style-clear-sky-youth-anime"), zhPrompt: "清澈天空青春动画，通透蓝天、闪耀光斑和细致云层", enPrompt: "clear-sky youth anime, sparkling sunlight, detailed clouds, airy emotional atmosphere" },
  { id: "style-chinese-paper-cut-animation", category: "style", styleGroup: "anime", zhName: "中国剪纸动漫", enName: "Chinese Paper-Cut Animation", defaultWeight: 1, image: img("style-chinese-paper-cut-animation"), zhPrompt: "中国剪纸动漫，红金配色、分层纸雕和民俗装饰", enPrompt: "Chinese paper-cut animation, layered cut-paper shapes, red and gold folk palette, decorative silhouettes" },
  { id: "style-ink-wash-animation", category: "style", styleGroup: "anime", zhName: "水墨动画", enName: "Ink-Wash Animation", defaultWeight: 1, image: img("style-ink-wash-animation"), zhPrompt: "水墨动画，流动墨色、留白和诗意山水氛围", enPrompt: "ink-wash animated feature look, flowing ink, poetic negative space, misty landscape mood" },
  { id: "style-shoujo-manga", category: "style", styleGroup: "anime", zhName: "少女漫画", enName: "Shoujo Manga", defaultWeight: 1, image: img("style-shoujo-manga"), zhPrompt: "少女漫画风格，柔粉光线、浪漫氛围和细腻情绪", enPrompt: "shoujo manga illustration, soft romantic lighting, delicate emotion, gentle pastel highlights" },
  { id: "style-shonen-action-anime", category: "style", styleGroup: "anime", zhName: "热血少年漫", enName: "Shonen Action Anime", defaultWeight: 1, image: img("style-shonen-action-anime"), zhPrompt: "热血少年漫，强动态、速度线和高能动作张力", enPrompt: "shonen action anime, dynamic energy, bold motion, heroic action composition" },
  { id: "style-retro-cel-anime", category: "style", styleGroup: "anime", zhName: "复古赛璐璐动画", enName: "Retro Cel Anime", defaultWeight: 1, image: img("style-retro-cel-anime"), zhPrompt: "复古赛璐璐动画，90年代动画色彩、胶片感和手绘阴影", enPrompt: "retro 1990s cel animation, hand-painted shadows, nostalgic color, analog anime texture" },
  { id: "style-modern-webtoon", category: "style", styleGroup: "anime", zhName: "现代条漫", enName: "Modern Webtoon", defaultWeight: 1, image: img("style-modern-webtoon"), zhPrompt: "现代条漫风格，干净线条、清爽上色和移动端阅读感", enPrompt: "modern clean webtoon art, crisp linework, simple readable color, polished digital illustration" },
  { id: "style-chibi-cute", category: "style", styleGroup: "anime", zhName: "Q版萌系", enName: "Chibi Cute", defaultWeight: 1, image: img("style-chibi-cute"), zhPrompt: "Q版萌系，头身比夸张、圆润可爱和轻松氛围", enPrompt: "chibi cute mascot style, oversized head, rounded shapes, adorable playful mood" },
  { id: "style-mecha-anime", category: "style", styleGroup: "anime", zhName: "机甲动漫", enName: "Mecha Anime", defaultWeight: 1, image: img("style-mecha-anime"), zhPrompt: "机甲动漫，机械结构、科幻城市和硬表面设计", enPrompt: "mecha anime concept style, mechanical forms, hard-surface design, futuristic city detail" },
  { id: "style-gothic-anime", category: "style", styleGroup: "anime", zhName: "哥特动漫", enName: "Gothic Anime", defaultWeight: 1, image: img("style-gothic-anime"), zhPrompt: "哥特动漫，暗色城堡、月光、神秘阴影和优雅压迫感", enPrompt: "dark gothic anime, moonlit castles, elegant shadows, mysterious dramatic mood" },
  { id: "style-pastel-magical-girl", category: "style", styleGroup: "anime", zhName: "粉彩魔法少女", enName: "Pastel Magical Girl", defaultWeight: 1, image: img("style-pastel-magical-girl"), zhPrompt: "粉彩魔法少女风，梦幻云朵、星光和柔和甜美色彩", enPrompt: "dreamy pastel magical-girl illustration, soft clouds, sparkling stars, sweet luminous palette" },

  { id: "style-gongbi", category: "style", styleGroup: "eastern", zhName: "工笔画", enName: "Gongbi Painting", defaultWeight: 1, image: img("style-gongbi"), zhPrompt: "中国工笔画，精细线描、淡雅设色和古典画卷质感", enPrompt: "Chinese gongbi fine-line painting, precise linework, delicate color, classical scroll texture" },
  { id: "style-blue-green-landscape", category: "style", styleGroup: "eastern", zhName: "青绿山水", enName: "Blue-Green Landscape", defaultWeight: 1, image: img("style-blue-green-landscape"), zhPrompt: "青绿山水画，石青石绿、层叠山峦和典雅矿物色", enPrompt: "Chinese blue-green landscape painting, mineral turquoise and green pigments, layered mountains" },
  { id: "style-dunhuang-mural", category: "style", styleGroup: "eastern", zhName: "敦煌壁画", enName: "Dunhuang Mural", defaultWeight: 1, image: img("style-dunhuang-mural"), zhPrompt: "敦煌壁画灵感，飞天纹样、矿物色和古壁画肌理", enPrompt: "Dunhuang mural inspired decorative art, mineral pigments, flowing ribbons, aged wall texture" },
  { id: "style-tang-court-painting", category: "style", styleGroup: "eastern", zhName: "唐风仕女画", enName: "Tang Court Painting", defaultWeight: 1, image: img("style-tang-court-painting"), zhPrompt: "唐风仕女画气质，暖色绢本、丰润线条和宫廷古意", enPrompt: "Tang dynasty court painting mood, warm silk texture, elegant figures, classical palace atmosphere" },
  { id: "style-song-ink-landscape", category: "style", styleGroup: "eastern", zhName: "宋代水墨山水", enName: "Song Ink Landscape", defaultWeight: 1, image: img("style-song-ink-landscape"), zhPrompt: "宋代水墨山水气质，克制留白、淡墨层次和清远意境", enPrompt: "Song dynasty minimalist ink landscape mood, restrained negative space, subtle ink layers" },
  { id: "style-new-year-woodblock", category: "style", styleGroup: "eastern", zhName: "年画木版", enName: "New Year Woodblock", defaultWeight: 1, image: img("style-new-year-woodblock"), zhPrompt: "中国年画木版风，鲜明民俗色、装饰云纹和热闹节庆感", enPrompt: "Chinese New Year folk woodblock print style, vivid folk colors, decorative clouds, festive detail" },
  { id: "style-shadow-puppet", category: "style", styleGroup: "eastern", zhName: "皮影戏", enName: "Shadow Puppet", defaultWeight: 1, image: img("style-shadow-puppet"), zhPrompt: "皮影戏风格，剪影人物、半透明皮革纹理和戏台背光", enPrompt: "shadow-puppet animation look, ornate silhouettes, translucent leather texture, backlit stage" },
  { id: "style-paper-cut-folk", category: "style", styleGroup: "eastern", zhName: "民俗剪纸", enName: "Folk Paper Cut", defaultWeight: 1, image: img("style-paper-cut-folk"), zhPrompt: "民俗剪纸，镂空图案、红纸质感和强装饰轮廓", enPrompt: "Chinese paper-cut folk craft, red cut-paper texture, ornamental cutouts, bold silhouettes" },
  { id: "style-ukiyo-e", category: "style", styleGroup: "eastern", zhName: "浮世绘", enName: "Ukiyo-e", defaultWeight: 1, image: img("style-ukiyo-e"), zhPrompt: "浮世绘木版画，平涂色块、波纹线条和复古印刷质感", enPrompt: "Japanese ukiyo-e woodblock print, flat color planes, carved linework, vintage paper texture" },
  { id: "style-korean-minhwa", category: "style", styleGroup: "eastern", zhName: "韩国民画", enName: "Korean Minhwa", defaultWeight: 1, image: img("style-korean-minhwa"), zhPrompt: "韩国民画风，民俗花鸟山水、质朴装饰和柔和色彩", enPrompt: "Korean minhwa folk painting, decorative folk landscape, humble charm, soft colors" },
  { id: "style-thangka-ornamental", category: "style", styleGroup: "eastern", zhName: "唐卡装饰", enName: "Thangka Ornamental", defaultWeight: 1, image: img("style-thangka-ornamental"), zhPrompt: "唐卡装饰绘画，复杂纹样、宝石色和庄重对称构图", enPrompt: "Tibetan thangka inspired ornamental painting, jewel-tone palette, intricate symmetry, sacred decorative mood" },
  { id: "style-southeast-asian-mural", category: "style", styleGroup: "eastern", zhName: "东南亚寺庙壁画", enName: "SE Asian Mural", defaultWeight: 1, image: img("style-southeast-asian-mural"), zhPrompt: "东南亚寺庙壁画风，金色纹样、热带建筑和古壁画质感", enPrompt: "Southeast Asian temple mural style, golden ornament, tropical architecture, aged mural texture" },

  { id: "style-documentary-photo", category: "style", styleGroup: "photo-film-3d", zhName: "纪实摄影", enName: "Documentary Photo", defaultWeight: 1, image: img("style-documentary-photo"), zhPrompt: "纪实摄影，真实场景、自然光和非摆拍质感", enPrompt: "documentary street photography, real environment, natural light, unstaged authentic mood" },
  { id: "style-fashion-editorial", category: "style", styleGroup: "photo-film-3d", zhName: "时尚大片", enName: "Fashion Editorial", defaultWeight: 1, image: img("style-fashion-editorial"), zhPrompt: "时尚杂志大片，精致布光、优雅姿态和高级构图", enPrompt: "fashion editorial photography, elegant pose, refined lighting, premium magazine composition" },
  { id: "style-luxury-ad-photo", category: "style", styleGroup: "photo-film-3d", zhName: "奢侈品广告摄影", enName: "Luxury Ad Photo", defaultWeight: 1, image: img("style-luxury-ad-photo"), zhPrompt: "奢侈品广告摄影，高级材质、克制光影和商业精修", enPrompt: "luxury product-ad photography mood, premium materials, controlled highlights, polished commercial finish" },
  { id: "style-noir-film", category: "style", styleGroup: "photo-film-3d", zhName: "黑色电影", enName: "Noir Film", defaultWeight: 1, image: img("style-noir-film"), zhPrompt: "黑色电影，黑白高反差、硬阴影和悬疑气质", enPrompt: "noir black-and-white film still, high contrast, hard shadows, suspenseful atmosphere" },
  { id: "style-romantic-film", category: "style", styleGroup: "photo-film-3d", zhName: "浪漫电影", enName: "Romantic Film", defaultWeight: 1, image: img("style-romantic-film"), zhPrompt: "浪漫电影剧照，暖光、柔焦和情绪化画面", enPrompt: "warm romantic film still, soft focus, golden light, emotional cinematic mood" },
  { id: "style-gritty-drama-film", category: "style", styleGroup: "photo-film-3d", zhName: "粗粝剧情片", enName: "Gritty Drama Film", defaultWeight: 1, image: img("style-gritty-drama-film"), zhPrompt: "粗粝剧情片质感，低饱和、真实污损和压抑氛围", enPrompt: "gritty drama film look, desaturated palette, realistic worn textures, tense atmosphere" },
  { id: "style-sci-fi-film", category: "style", styleGroup: "photo-film-3d", zhName: "科幻电影", enName: "Sci-Fi Film", defaultWeight: 1, image: img("style-sci-fi-film"), zhPrompt: "科幻电影概念，未来建筑、冷色灯光和宏大科技感", enPrompt: "science-fiction film concept look, futuristic architecture, cool lighting, cinematic scale" },
  { id: "style-fantasy-epic-film", category: "style", styleGroup: "photo-film-3d", zhName: "奇幻史诗电影", enName: "Fantasy Epic Film", defaultWeight: 1, image: img("style-fantasy-epic-film"), zhPrompt: "奇幻史诗电影，城堡、火光、宏大远景和英雄气质", enPrompt: "fantasy epic film look, castles, torchlight, heroic scale, grand cinematic framing" },
  { id: "style-horror-suspense-film", category: "style", styleGroup: "photo-film-3d", zhName: "恐怖悬疑片", enName: "Horror Suspense", defaultWeight: 1, image: img("style-horror-suspense-film"), zhPrompt: "恐怖悬疑片氛围，冷雾、低照度和不安阴影，无血腥", enPrompt: "horror suspense film look without gore, cold fog, low light, uneasy shadows" },
  { id: "style-stop-motion-miniature", category: "style", styleGroup: "photo-film-3d", zhName: "定格微缩模型", enName: "Stop-Motion Miniature", defaultWeight: 1, image: img("style-stop-motion-miniature"), zhPrompt: "定格微缩模型质感，小比例布景、手工道具和浅景深", enPrompt: "stop-motion miniature look, handmade sets, small-scale props, shallow depth of field" },
  { id: "style-collectible-3d", category: "style", styleGroup: "photo-film-3d", zhName: "收藏玩具3D", enName: "Collectible 3D", defaultWeight: 1, image: img("style-collectible-3d"), zhPrompt: "收藏玩具 3D 渲染，圆润模型、精致塑料材质和可爱比例", enPrompt: "toy-like collectible 3D render, rounded model, polished plastic material, cute proportions" },
  { id: "style-isometric-diorama", category: "style", styleGroup: "photo-film-3d", zhName: "等距3D场景", enName: "Isometric Diorama", defaultWeight: 1, image: img("style-isometric-diorama"), zhPrompt: "等距 3D 场景，微缩建筑、清晰层次和桌面模型感", enPrompt: "isometric 3D diorama, miniature architecture, clear layers, polished tabletop model" },

  { id: "style-bauhaus-poster", category: "style", styleGroup: "design-retro", zhName: "包豪斯海报", enName: "Bauhaus Poster", defaultWeight: 1, image: img("style-bauhaus-poster"), zhPrompt: "包豪斯几何海报风，基础几何、红黄蓝黑和理性构图，无文字", enPrompt: "Bauhaus geometric poster style without text, primary shapes, red yellow blue black, rational composition" },
  { id: "style-swiss-grid-poster", category: "style", styleGroup: "design-retro", zhName: "瑞士网格海报", enName: "Swiss Grid Poster", defaultWeight: 1, image: img("style-swiss-grid-poster"), zhPrompt: "瑞士现代主义网格海报，留白、秩序、清晰平面构成，无文字", enPrompt: "Swiss modernist grid poster style without text, strict layout, clean negative space, graphic order" },
  { id: "style-art-deco", category: "style", styleGroup: "design-retro", zhName: "装饰艺术", enName: "Art Deco", defaultWeight: 1, image: img("style-art-deco"), zhPrompt: "装饰艺术风，金色线条、对称图案和奢华复古感", enPrompt: "Art Deco luxury illustration, gold linework, symmetry, elegant vintage glamour" },
  { id: "style-art-nouveau", category: "style", styleGroup: "design-retro", zhName: "新艺术运动", enName: "Art Nouveau", defaultWeight: 1, image: img("style-art-nouveau"), zhPrompt: "新艺术运动插画，藤蔓曲线、花卉装饰和优雅边框", enPrompt: "Art Nouveau flowing ornamental illustration, botanical curves, floral frames, elegant decorative rhythm" },
  { id: "style-vaporwave", category: "style", styleGroup: "design-retro", zhName: "蒸汽波", enName: "Vaporwave", defaultWeight: 1, image: img("style-vaporwave"), zhPrompt: "蒸汽波复古数码美学，粉紫霓虹、网格地平线和怀旧未来感", enPrompt: "vaporwave retro digital aesthetic, pink purple neon, grid horizon, nostalgic futurism" },
  { id: "style-synthwave", category: "style", styleGroup: "design-retro", zhName: "合成波", enName: "Synthwave", defaultWeight: 1, image: img("style-synthwave"), zhPrompt: "合成波夕阳美学，橙紫渐变、复古科幻和强剪影", enPrompt: "synthwave sunset aesthetic, orange purple gradient, retro sci-fi mood, strong silhouette" },
  { id: "style-risograph", category: "style", styleGroup: "design-retro", zhName: "Risograph印刷", enName: "Risograph", defaultWeight: 1, image: img("style-risograph"), zhPrompt: "Risograph 印刷质感，套色错位、颗粒纸张和有限色盘", enPrompt: "risograph print texture, offset colors, grainy paper, limited palette" },
  { id: "style-screenprint", category: "style", styleGroup: "design-retro", zhName: "丝网印刷", enName: "Screenprint", defaultWeight: 1, image: img("style-screenprint"), zhPrompt: "丝网印刷海报质感，平涂色块、粗颗粒和手工印刷感", enPrompt: "screenprint poster texture, flat color blocks, coarse grain, handmade print feel" },
  { id: "style-linocut", category: "style", styleGroup: "design-retro", zhName: "亚麻油毡版画", enName: "Linocut", defaultWeight: 1, image: img("style-linocut"), zhPrompt: "亚麻油毡版画，黑白刻痕、粗线条和手工版画纹理", enPrompt: "linocut print illustration, black and white carved marks, rough line texture" },
  { id: "style-stained-glass", category: "style", styleGroup: "design-retro", zhName: "彩色玻璃", enName: "Stained Glass", defaultWeight: 1, image: img("style-stained-glass"), zhPrompt: "彩色玻璃马赛克，铅条分割、透明色块和光照穿透", enPrompt: "stained glass mosaic illustration, lead outlines, luminous translucent color blocks" },
  { id: "style-papercraft-diorama", category: "style", styleGroup: "design-retro", zhName: "纸艺立体场景", enName: "Papercraft Diorama", defaultWeight: 1, image: img("style-papercraft-diorama"), zhPrompt: "纸艺立体场景，分层纸板、柔和阴影和手作模型感", enPrompt: "papercraft diorama, layered paper board, soft shadows, handcrafted miniature scene" },
  { id: "style-holographic-iridescent", category: "style", styleGroup: "design-retro", zhName: "镭射虹彩", enName: "Holographic", defaultWeight: 1, image: img("style-holographic-iridescent"), zhPrompt: "镭射虹彩数字艺术，虹彩反射、梦幻晶体和未来质感", enPrompt: "holographic iridescent digital art, rainbow reflections, dreamy crystal surfaces, futuristic shimmer" },

  { id: "framing-extreme-wide", category: "framing", zhName: "远景", enName: "Extreme Wide", defaultWeight: 1, image: img("framing-extreme-wide"), zhPrompt: "远景，主体很小，强调环境尺度", enPrompt: "extreme wide shot, tiny subject within a vast environment, strong sense of scale" },
  { id: "framing-wide", category: "framing", zhName: "全景", enName: "Wide Shot", defaultWeight: 1, image: img("framing-wide"), zhPrompt: "全景，主体全身可见并保留环境", enPrompt: "wide full-body shot, complete subject visible with surrounding environment" },
  { id: "framing-medium", category: "framing", zhName: "中景", enName: "Medium Shot", defaultWeight: 1, image: img("framing-medium"), zhPrompt: "中景，主体占据画面中等比例", enPrompt: "medium shot, subject clearly readable from waist or knees upward" },
  { id: "framing-close-up", category: "framing", zhName: "近景", enName: "Close-Up", defaultWeight: 1, image: img("framing-close-up"), zhPrompt: "近景，突出表情、材质和局部细节", enPrompt: "close-up framing, emphasis on expression, texture, and local detail" },
  { id: "framing-extreme-close-up", category: "framing", zhName: "特写", enName: "Extreme Close-Up", defaultWeight: 1, image: img("framing-extreme-close-up"), zhPrompt: "极近特写，聚焦关键局部", enPrompt: "extreme close-up, focused on one important detail with intense texture" },
  { id: "framing-panoramic", category: "framing", zhName: "极远景", enName: "Panoramic", defaultWeight: 1, image: img("framing-panoramic"), zhPrompt: "横向极远景，强调史诗环境和空间层次", enPrompt: "panoramic establishing shot, epic environment, layered depth and scale" },

  { id: "camera-macro", category: "camera", styleGroup: "focal-length", zhName: "微距镜头", enName: "Macro Lens", defaultWeight: 1, image: img("camera-macro"), zhPrompt: "微距镜头，呈现细微纹理和极浅焦点范围", enPrompt: "macro lens detail, tactile close surface texture, extremely shallow focus range" },
  { id: "camera-fisheye", category: "camera", styleGroup: "lens-effect", zhName: "鱼眼镜头", enName: "Fisheye", defaultWeight: 1, image: img("camera-fisheye"), zhPrompt: "鱼眼镜头，夸张弧形透视", enPrompt: "fisheye lens distortion, curved horizon, exaggerated perspective" },
  { id: "camera-top-down", category: "camera", styleGroup: "angle", zhName: "俯拍", enName: "Top Down", defaultWeight: 1, image: img("camera-top-down"), zhPrompt: "垂直俯拍，从上方观察画面", enPrompt: "top-down overhead view, graphic layout, clear object placement" },
  { id: "camera-low-angle", category: "camera", styleGroup: "angle", zhName: "低机位", enName: "Low Angle", defaultWeight: 1, image: img("camera-low-angle"), zhPrompt: "低机位仰视，增强气势", enPrompt: "low-angle heroic view, powerful subject presence, upward perspective" },
  { id: "camera-high-angle", category: "camera", styleGroup: "angle", zhName: "高机位", enName: "High Angle", defaultWeight: 1, image: img("camera-high-angle"), zhPrompt: "高机位视角，强调空间和位置关系", enPrompt: "high-angle view looking down, clear spatial relationship, observational framing" },
  { id: "camera-aerial", category: "camera", styleGroup: "angle", zhName: "航拍", enName: "Aerial", defaultWeight: 1, image: img("camera-aerial"), zhPrompt: "航拍视角，开阔地形和路线感", enPrompt: "aerial drone view, broad terrain, map-like sense of movement" },
  { id: "camera-symmetrical", category: "camera", styleGroup: "composition", zhName: "对称构图", enName: "Symmetrical", defaultWeight: 1, image: img("camera-symmetrical"), zhPrompt: "对称构图，稳定庄重的画面秩序", enPrompt: "perfectly symmetrical composition, balanced visual order, formal framing" },
  { id: "camera-centered", category: "camera", styleGroup: "composition", zhName: "中心构图", enName: "Centered", defaultWeight: 1, image: img("camera-centered"), zhPrompt: "中心构图，主体明确居中", enPrompt: "centered composition, clear focal subject, strong leading lines" },

  { id: "lighting-volumetric", category: "lighting", styleGroup: "dramatic", zhName: "丁达尔光", enName: "Tyndall Rays", defaultWeight: 1, image: img("lighting-volumetric"), zhPrompt: "丁达尔光，阳光穿过窗户与空气微粒形成可见光束，光路清晰且有空间纵深", enPrompt: "Tyndall rays, sunlight passing through a window and airborne particles to form visible shafts with clear light paths and spatial depth" },
  { id: "lighting-backlight", category: "lighting", styleGroup: "dramatic", zhName: "逆光", enName: "Backlight", defaultWeight: 1, image: img("lighting-backlight"), zhPrompt: "强逆光，边缘轮廓和剪影感", enPrompt: "strong backlight, rim highlights, readable silhouette" },
  { id: "lighting-soft", category: "lighting", styleGroup: "natural", zhName: "柔光", enName: "Soft Light", defaultWeight: 1, image: img("lighting-soft"), zhPrompt: "柔和漫射光，低对比自然过渡", enPrompt: "soft diffused light, gentle shadows, low contrast transitions" },
  { id: "lighting-hard", category: "lighting", styleGroup: "dramatic", zhName: "硬光", enName: "Hard Light", defaultWeight: 1, image: img("lighting-hard"), zhPrompt: "硬光，清晰阴影和强烈形体", enPrompt: "hard direct light, crisp shadows, strong form definition" },
  { id: "lighting-blinds-shadow", category: "lighting", styleGroup: "interior", zhName: "百叶窗投影", enName: "Venetian Blinds Light", defaultWeight: 1, image: img("lighting-blinds-shadow"), zhPrompt: "百叶窗投影光，平行窗帘阴影切过墙面和主体，图形感强、方向明确", enPrompt: "venetian blinds lighting, parallel window shadows cutting across wall and subject with a strong graphic directional pattern" },
  { id: "lighting-dappled-leaf", category: "lighting", styleGroup: "natural", zhName: "树影斑驳光", enName: "Dappled Leaf Light", defaultWeight: 1, image: img("lighting-dappled-leaf"), zhPrompt: "树影斑驳光，阳光经叶片筛落形成自然不规则光斑，温暖且有呼吸感", enPrompt: "dappled leaf light, sunlight filtered through foliage into organic irregular patches, warm natural and alive" },
  { id: "lighting-sodium-vapor", category: "lighting", styleGroup: "dramatic", zhName: "钠灯街光", enName: "Sodium Vapor Streetlight", defaultWeight: 1, image: img("lighting-sodium-vapor"), zhPrompt: "钠灯街光，深夜街道的琥珀色低色温灯池与湿地反射，周围暗部保持冷静", enPrompt: "sodium vapor streetlight, amber low-temperature pools of light and wet-street reflections at night with restrained cool shadows" },
  { id: "lighting-golden-hour", category: "lighting", styleGroup: "natural", zhName: "黄金时刻", enName: "Golden Hour", defaultWeight: 1, image: img("lighting-golden-hour"), zhPrompt: "黄金时刻暖光，温暖柔和的夕阳氛围", enPrompt: "golden hour warm light, soft sunset atmosphere, long gentle shadows" },
  { id: "lighting-neon", category: "lighting", styleGroup: "sci-fi", zhName: "霓虹光", enName: "Neon Light", defaultWeight: 1, image: img("lighting-neon"), zhPrompt: "霓虹光，蓝紫粉色高对比夜景", enPrompt: "neon night lighting, blue and magenta glow, electric atmosphere" },
  { id: "lighting-low-key", category: "lighting", styleGroup: "dramatic", zhName: "低调光", enName: "Low Key", defaultWeight: 1, image: img("lighting-low-key"), zhPrompt: "低调光，深色阴影和悬疑感", enPrompt: "low-key moody lighting, deep shadows, restrained highlights" },
  { id: "lighting-high-key", category: "lighting", styleGroup: "natural", zhName: "高调光", enName: "High Key", defaultWeight: 1, image: img("lighting-high-key"), zhPrompt: "高调光，明亮通透、阴影很轻", enPrompt: "high-key bright airy lighting, pale tones, minimal shadow" },
  { id: "lighting-fog", category: "lighting", styleGroup: "dramatic", zhName: "体积雾", enName: "Atmospheric Fog", defaultWeight: 1, image: img("lighting-fog"), zhPrompt: "浓厚体积雾，空间层次朦胧", enPrompt: "dense atmospheric fog, softened distance, layered depth" },
  { id: "lighting-rainy-night", category: "lighting", styleGroup: "natural", zhName: "雨夜", enName: "Rainy Night", defaultWeight: 1, image: img("lighting-rainy-night"), zhPrompt: "雨夜湿润反光，冷色夜景氛围", enPrompt: "rainy night, wet reflective ground, cool moody atmosphere" },

  { id: "render-cinematic-texture", category: "render", styleGroup: "realism", zhName: "电影级质感", enName: "Cinematic Texture", defaultWeight: 1, image: img("render-cinematic-texture"), zhPrompt: "电影级质感，精致光影和高级色彩", enPrompt: "premium cinematic texture, refined lighting, polished color grading" },
  { id: "render-game-engine", category: "render", styleGroup: "realism", zhName: "虚幻引擎渲染", enName: "Game Engine Render", defaultWeight: 1, image: img("render-game-engine"), zhPrompt: "实时游戏引擎渲染质感，高质量 PBR 材质", enPrompt: "high-end real-time game engine render look, PBR materials, crisp realtime lighting" },
  { id: "render-octane", category: "render", styleGroup: "realism", zhName: "Octane 渲染", enName: "Octane Render", defaultWeight: 1, image: img("render-octane"), zhPrompt: "高端无偏 3D 渲染，干净反射和真实材质", enPrompt: "high-end unbiased 3D render look, clean reflections, physically plausible materials" },
  { id: "render-realistic-texture", category: "render", styleGroup: "realism", zhName: "写实纹理", enName: "Realistic Texture", defaultWeight: 1, image: img("render-realistic-texture"), zhPrompt: "写实皮肤、布料和表面微纹理", enPrompt: "realistic skin, fabric, and surface micro-texture with natural imperfections" },
  { id: "render-shallow-depth", category: "render", styleGroup: "realism", zhName: "浅景深", enName: "Shallow DOF", defaultWeight: 1, image: img("render-shallow-depth"), zhPrompt: "浅景深，主体清晰、背景柔和虚化", enPrompt: "shallow depth of field, sharp subject, soft creamy background bokeh" },
  { id: "render-film-grain", category: "render", styleGroup: "technical", zhName: "胶片颗粒", enName: "Film Grain", defaultWeight: 1, image: img("render-film-grain"), zhPrompt: "胶片颗粒，模拟胶片质感和自然噪点", enPrompt: "subtle analog film grain, organic texture, cinematic tonal response" },
  { id: "render-hdr", category: "render", styleGroup: "technical", zhName: "HDR", enName: "HDR", defaultWeight: 1, image: img("render-hdr"), zhPrompt: "HDR 高动态范围，亮部和暗部细节丰富", enPrompt: "high dynamic range detail, rich highlights and shadows, vivid tonal depth" },
  { id: "render-ultra-detailed-material", category: "render", styleGroup: "realism", zhName: "高细节材质", enName: "Material Detail", defaultWeight: 1, image: img("render-ultra-detailed-material"), zhPrompt: "极高材质细节，表面纹理清晰可见", enPrompt: "ultra-detailed material close-up, tactile surface detail, crisp micro scratches" },

  { id: "purpose-turnaround", category: "purpose", styleGroup: "design", zhName: "三视图", enName: "Turnaround Sheet", defaultWeight: 1, image: img("purpose-turnaround"), zhPrompt: "角色三视图，正面、侧面、背面清晰展示", enPrompt: "character turnaround sheet, front side and back views, plain background, consistent proportions" },
  { id: "purpose-exploded-view", category: "purpose", styleGroup: "design", zhName: "物品拆分视图", enName: "Exploded View", defaultWeight: 1, image: img("purpose-exploded-view"), zhPrompt: "物品拆分视图，部件分离并展示结构", enPrompt: "exploded product view, separated components, clear mechanical structure, clean layout" },
  { id: "purpose-character-sheet", category: "purpose", styleGroup: "design", zhName: "角色设定图", enName: "Character Sheet", defaultWeight: 1, image: img("purpose-character-sheet"), zhPrompt: "角色设定图，包含全身和关键细节展示", enPrompt: "character concept sheet, full body design with detail callout areas, production-ready design" },
  { id: "purpose-product-shot", category: "purpose", styleGroup: "commercial", zhName: "产品图", enName: "Product Shot", defaultWeight: 1, image: img("purpose-product-shot"), zhPrompt: "高级产品摄影，清晰轮廓和商业质感", enPrompt: "premium product photography, clean silhouette, commercial polish, controlled studio lighting" },
  { id: "purpose-portrait", category: "purpose", styleGroup: "photography", zhName: "写真", enName: "Portrait", defaultWeight: 1, image: img("purpose-portrait"), zhPrompt: "写真肖像，人物姿态自然，情绪明确", enPrompt: "editorial portrait photoshoot, natural pose, expressive mood, flattering professional lighting" },
  { id: "purpose-id-photo", category: "purpose", styleGroup: "photography", zhName: "证件照", enName: "ID Photo", defaultWeight: 1, image: img("purpose-id-photo"), zhPrompt: "证件照，正面、白底、光线均匀", enPrompt: "clean ID photo headshot, front-facing, plain light background, even lighting" },
  { id: "purpose-poster-key-visual", category: "purpose", styleGroup: "cover", zhName: "海报主视觉", enName: "Poster Key Visual", defaultWeight: 1, image: img("purpose-poster-key-visual"), zhPrompt: "海报主视觉，强焦点和标题留白", enPrompt: "dramatic poster key visual, strong focal subject, clear empty space for title, no text" },
  { id: "purpose-social-cover", category: "purpose", styleGroup: "social", zhName: "社媒封面", enName: "Social Cover", defaultWeight: 1, image: img("purpose-social-cover"), zhPrompt: "社媒封面构图，横向裁切，主体醒目", enPrompt: "social media cover image crop, strong focal subject, wide composition, readable at small size" },
  { id: "purpose-icon", category: "purpose", styleGroup: "social", zhName: "图标", enName: "Icon", defaultWeight: 1, image: img("purpose-icon"), zhPrompt: "应用图标风格，主体居中、轮廓清楚", enPrompt: "polished app icon style, centered object, clear silhouette, simple background" },
  { id: "purpose-environment-concept", category: "purpose", styleGroup: "design", zhName: "场景概念图", enName: "Environment Concept", defaultWeight: 1, image: img("purpose-environment-concept"), zhPrompt: "场景概念图，展示环境结构、氛围和空间", enPrompt: "environment concept art, readable architecture, atmosphere, depth, production design" },

  { id: "color-warm", category: "color-material", styleGroup: "palette", zhName: "暖色调", enName: "Warm Palette", defaultWeight: 1, image: img("color-warm"), zhPrompt: "暖色调，琥珀、橙金和柔和暖光", enPrompt: "warm color palette, amber and golden tones, cozy warm light" },
  { id: "color-cool", category: "color-material", styleGroup: "palette", zhName: "冷色调", enName: "Cool Palette", defaultWeight: 1, image: img("color-cool"), zhPrompt: "冷色调，蓝灰色光线和清冷氛围", enPrompt: "cool color palette, blue-gray light, calm crisp atmosphere" },
  { id: "color-high-saturation", category: "color-material", styleGroup: "palette", zhName: "高饱和", enName: "High Saturation", defaultWeight: 1, image: img("color-high-saturation"), zhPrompt: "高饱和色彩，鲜明醒目的视觉冲击", enPrompt: "high saturation vivid colors, bold visual impact, clean color separation" },
  { id: "color-low-saturation", category: "color-material", styleGroup: "palette", zhName: "低饱和", enName: "Low Saturation", defaultWeight: 1, image: img("color-low-saturation"), zhPrompt: "低饱和色彩，克制、柔和、低对比", enPrompt: "low saturation muted colors, restrained palette, soft low-contrast mood" },
  { id: "material-metal", category: "color-material", styleGroup: "industrial", zhName: "金属", enName: "Metal", defaultWeight: 1, image: img("material-metal"), zhPrompt: "金属材质，拉丝、高光和真实反射", enPrompt: "brushed metal material, crisp highlights, realistic reflection and anisotropic texture" },
  { id: "material-glass", category: "color-material", styleGroup: "translucent", zhName: "玻璃", enName: "Glass", defaultWeight: 1, image: img("material-glass"), zhPrompt: "透明玻璃材质，折射、反射和高光清晰", enPrompt: "transparent glass material, refraction, reflection, clean caustic highlights" },
  { id: "material-fabric", category: "color-material", styleGroup: "fabric", zhName: "织物", enName: "Fabric", defaultWeight: 1, image: img("material-fabric"), zhPrompt: "织物材质，纤维纹理和柔软触感", enPrompt: "woven fabric material, visible fibers, soft tactile surface" },
  { id: "material-wood", category: "color-material", styleGroup: "stone", zhName: "木质", enName: "Wood", defaultWeight: 1, image: img("material-wood"), zhPrompt: "天然木质材质，清晰木纹和温润表面", enPrompt: "natural wood material, visible grain, warm polished surface" },
  { id: "material-ceramic", category: "color-material", styleGroup: "stone", zhName: "陶瓷", enName: "Ceramic", defaultWeight: 1, image: img("material-ceramic"), zhPrompt: "陶瓷材质，釉面反光和细腻质地", enPrompt: "glazed ceramic material, smooth surface, subtle speckles, glossy highlights" },
  { id: "material-leather", category: "color-material", styleGroup: "fabric", zhName: "皮革", enName: "Leather", defaultWeight: 1, image: img("material-leather"), zhPrompt: "皮革材质，纹理、缝线和柔韧质感", enPrompt: "premium leather material, natural grain, stitching, supple tactile finish" }
];

parameters.push(
  ...artistParameters,
  ...clothingParameters,
  ...poseParameters,
  ...expandedParameters,
  ...culturalPatternParameters,
  ...exhaustiveParameters,
  ...colorGradingParameters,
  ...finalSupplementParameters,
  ...gapSupplementParameters,
  ...colorPaletteParameters,
  ...supplementParameters,
  ...photoPurposeParameters,
  ...demographicParameters
);
