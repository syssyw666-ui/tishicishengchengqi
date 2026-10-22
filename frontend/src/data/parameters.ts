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
import { styleExpansionParameters } from "./styleExpansionParameters";
import { styleExpansionParameters2 } from "./styleExpansionParameters2";
import { styleExpansionParameters3 } from "./styleExpansionParameters3";
import { styleExpansionParameters4 } from "./styleExpansionParameters4";
import { styleExpansionParameters5 } from "./styleExpansionParameters5";
import { styleExpansionParameters6 } from "./styleExpansionParameters6";
import { styleExpansionParameters7 } from "./styleExpansionParameters7";
import { styleExpansionParameters8 } from "./styleExpansionParameters8";
import { styleExpansionParameters9 } from "./styleExpansionParameters9";
import { styleExpansionParameters10 } from "./styleExpansionParameters10";
import { styleExpansionParameters11 } from "./styleExpansionParameters11";
import { styleExpansionParameters12 } from "./styleExpansionParameters12";

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
  { id: "style-photorealistic", category: "style", styleGroup: "photo-film-3d", zhName: "写实摄影", enName: "Photorealistic", defaultWeight: 1, image: img("style-photorealistic"), zhPrompt: "写实摄影语言，物理可信的自然光、准确材质反射、真实景深、细腻但不过度磨皮的表面细节", enPrompt: "photorealistic photography, physically believable natural light, accurate material reflections, realistic depth of field and finely resolved surfaces without plastic smoothing", negative: ["cartoon", "plastic skin"] },
  { id: "style-cinematic", category: "style", styleGroup: "photo-film-3d", zhName: "电影感", enName: "Cinematic", defaultWeight: 1, image: img("style-cinematic"), zhPrompt: "电影剧照语言，明确主次关系、叙事性构图、受控明暗层次、电影色彩分离和自然镜头质感", enPrompt: "cinematic film-still language, clear visual hierarchy, narrative composition, controlled tonal range, filmic color separation and natural lens character" },
  { id: "style-animated-3d", category: "style", styleGroup: "photo-film-3d", zhName: "3D动画电影感", enName: "3D Animated", defaultWeight: 1, image: img("style-animated-3d"), zhPrompt: "家庭向动画长片式风格化 3D，清晰轮廓、富有表现力的比例、柔和全局光照和精致但不写实的材质", enPrompt: "family-friendly stylized 3D animated-feature look, clear silhouettes, expressive proportions, soft global illumination and polished non-photoreal materials" },
  { id: "style-anime", category: "style", styleGroup: "anime", zhName: "二次元", enName: "Anime", defaultWeight: 1, image: img("style-anime"), zhPrompt: "现代二次元插画，稳定清晰线稿、分层赛璐璐上色、受控高光与阴影、富有表现力的角色造型", enPrompt: "modern anime illustration, stable clean linework, layered cel shading, controlled highlights and expressive character design" },
  { id: "style-cyberpunk", category: "style", styleGroup: "design-retro", zhName: "赛博朋克", enName: "Cyberpunk", defaultWeight: 1, image: img("style-cyberpunk"), zhPrompt: "赛博朋克视觉，密集未来城市结构、潮湿反光表面、冷暖霓虹对比、义体与高科技低生活反差，避免可读品牌文字", enPrompt: "cyberpunk visual language, dense futuristic city structure, wet reflective surfaces, cool-warm neon contrast, cybernetics and high-tech low-life tension, no readable brand text" },
  { id: "style-watercolor", category: "style", styleGroup: "craft-print", zhName: "水彩", enName: "Watercolor", defaultWeight: 1, image: img("style-watercolor"), zhPrompt: "透明水彩绘画，湿画法柔和晕染、干画法边缘、水痕与纸张齿纹可见，色层轻盈通透", enPrompt: "transparent watercolor painting, soft wet-on-wet blooms, dry-brush edges, visible tide marks and paper tooth, airy luminous pigment layers" },
  { id: "style-oil-painting", category: "style", styleGroup: "craft-print", zhName: "油画", enName: "Oil Painting", defaultWeight: 1, image: img("style-oil-painting"), zhPrompt: "油画媒介，层叠罩染与厚涂并存，笔触方向清楚、颜料体积可见、暗部深沉且色彩关系丰富", enPrompt: "oil-paint medium, layered glazing combined with impasto, directional brushwork, visible pigment body, deep shadows and rich color relationships" },
  { id: "style-chinese-ink", category: "style", styleGroup: "eastern", zhName: "国风水墨", enName: "Chinese Ink", defaultWeight: 1, image: img("style-chinese-ink"), zhPrompt: "中国水墨语言，以墨分五色、干湿浓淡、飞白皴擦和大片留白建立山水层次与含蓄意境", enPrompt: "Chinese ink-wash language, layered ink values, wet and dry brushwork, flying-white texture, cun strokes and generous negative space creating poetic depth" },
  { id: "style-pixel-art", category: "style", styleGroup: "design-retro", zhName: "像素艺术", enName: "Pixel Art", defaultWeight: 1, image: img("style-pixel-art"), zhPrompt: "像素艺术，像素网格边缘清晰、有限色盘、无抗锯齿阶梯轮廓和手工点绘明暗，保持统一像素密度", enPrompt: "pixel art, crisp pixel-grid edges, limited palette, deliberately stepped non-antialiased contours and hand-placed pixel shading with consistent pixel density" },
  { id: "style-clay-animation", category: "style", styleGroup: "photo-film-3d", zhName: "黏土动画", enName: "Clay Animation", defaultWeight: 1, image: img("style-clay-animation"), zhPrompt: "黏土定格动画质感，手工塑形指纹、可见接缝、微小比例布景与柔和棚拍光，动作带逐帧制作感", enPrompt: "clay stop-motion look, handmade fingerprints and seams, miniature sets, soft studio lighting and subtle frame-by-frame crafted motion character" },
  { id: "style-low-poly", category: "style", styleGroup: "photo-film-3d", zhName: "低多边形", enName: "Low Poly", defaultWeight: 1, image: img("style-low-poly"), zhPrompt: "低多边形 3D，形体由清晰三角或多边形切面构成，面与面明暗分离，造型简练并保持可辨识轮廓", enPrompt: "low-poly 3D, forms built from clearly visible triangular or polygonal facets, separated planar shading, simplified geometry and readable silhouettes" },
  { id: "style-concept-art", category: "style", styleGroup: "design-retro", zhName: "概念设计", enName: "Concept Art", defaultWeight: 1, image: img("style-concept-art"), zhPrompt: "影视游戏概念设计语言，先以强剪影和尺度关系建立方案，再用功能结构、材质分区和环境叙事说明设计逻辑", enPrompt: "film-and-game concept design language, strong silhouette and scale first, then functional structure, material zoning and environmental storytelling that explain the design logic" },

  { id: "style-warm-fantasy-animation", category: "style", styleGroup: "anime", zhName: "温暖奇幻手绘动画", enName: "Warm Fantasy Animation", defaultWeight: 1, image: img("style-warm-fantasy-animation"), zhPrompt: "温暖奇幻手绘动画，柔和自然背景、童话感光线和细腻手绘质感", enPrompt: "warm hand-drawn fantasy animation, painterly nature backgrounds, gentle fairy-tale light, handcrafted charm" },
  { id: "style-clear-sky-youth-anime", category: "style", styleGroup: "anime", zhName: "清澈天空青春动画", enName: "Clear-Sky Youth Anime", defaultWeight: 1, image: img("style-clear-sky-youth-anime"), zhPrompt: "清澈天空青春动画以高透明度蓝天、层次分明的积云和强烈日光闪点建立开阔感，人物与城市边缘采用细净线条，空气透视从暖亮近景过渡到青蓝远景；情绪轻盈但不使用过曝白幕或无结构云团", enPrompt: "clear-sky youth-animation language built from transparent blue atmosphere, structurally layered cumulus clouds and sharp sunlight glints, with clean fine edges on figures and city forms and aerial perspective shifting from warm bright foreground to cyan-blue distance; airy emotion without blown-out white haze or shapeless clouds" },
  { id: "style-chinese-paper-cut-animation", category: "style", styleGroup: "anime", zhName: "中国剪纸动漫", enName: "Chinese Paper-Cut Animation", defaultWeight: 1, image: img("style-chinese-paper-cut-animation"), zhPrompt: "中国剪纸动画语言，角色与场景由红、金、黑等纸片分层拼接，关节以平面剪影运动，镂空花纹和可见纸纤维形成民俗舞台般的装饰空间", enPrompt: "Chinese paper-cut animation language, characters and scenery assembled from layered red gold and black paper, flat articulated silhouette motion, cutout folk ornament and visible fibers creating a theatrical crafted space" },
  { id: "style-ink-wash-animation", category: "style", styleGroup: "anime", zhName: "水墨动画", enName: "Ink-Wash Animation", defaultWeight: 1, image: img("style-ink-wash-animation"), zhPrompt: "水墨动画语言，角色和山水由浓淡墨迹在宣纸留白中缓慢聚散，轮廓时隐时现，水痕、飞白与湿墨扩散承担运动节奏，画面含蓄诗意", enPrompt: "ink-wash animation language, figures and landscapes gathering and dissolving through graded ink on open rice paper, intermittent contours, water blooms dry-brush gaps and wet diffusion carrying the motion" },
  { id: "style-shoujo-manga", category: "style", styleGroup: "anime", zhName: "少女漫画", enName: "Shoujo Manga", defaultWeight: 1, image: img("style-shoujo-manga"), zhPrompt: "少女漫画语言，人物以纤细线条、明亮大眼和轻柔发丝刻画，花瓣、星点与渐淡网点围绕情绪特写，版面节奏舒展并突出细腻关系和浪漫心理", enPrompt: "shoujo manga language, delicate linework, luminous expressive eyes and flowing hair, emotional close-ups surrounded by petals sparkles and fading screentone, spacious pacing focused on nuanced relationships" },
  { id: "style-shonen-action-anime", category: "style", styleGroup: "anime", zhName: "热血少年漫", enName: "Shonen Action Anime", defaultWeight: 1, image: img("style-shonen-action-anime"), zhPrompt: "热血少年漫画语言，强烈透视缩短和对角线构图推动动作，粗细变化墨线、集中速度线与碎裂冲击形塑造爆发瞬间，人物轮廓清晰且能量方向明确", enPrompt: "shonen action-manga language, extreme foreshortening and diagonal composition driving motion, varied ink weight, converging speed lines and fractured impact shapes capturing an explosive moment with clear silhouettes" },
  { id: "style-retro-cel-anime", category: "style", styleGroup: "anime", zhName: "复古赛璐璐动画", enName: "Retro Cel Anime", defaultWeight: 1, image: img("style-retro-cel-anime"), zhPrompt: "复古赛璐璐动画采用手绘轮廓与二至三层平涂阴影，色彩像旧胶片拷贝般稍偏黄绿或洋红，背景具有颜料笔触和有限空气透视；保留轻微套色偏差、颗粒和帧感，避免现代数码渐变、锐利发光与三维塑料感", enPrompt: "retro cel-animation language using hand-drawn contours and two or three flat shadow levels, colors carrying the slight yellow-green or magenta bias of aged film prints, and painted backgrounds with limited aerial depth; retain mild registration drift grain and frame texture, avoiding modern digital gradients razor-sharp glow and plastic 3D surfaces" },
  { id: "style-modern-webtoon", category: "style", styleGroup: "anime", zhName: "现代条漫", enName: "Modern Webtoon", defaultWeight: 1, image: img("style-modern-webtoon"), zhPrompt: "现代条漫视觉语言，以粗细稳定的数字线稿、清爽平涂和少量柔和阴影保持移动端小屏可读性；人物表情与动作轮廓优先，背景按镜头重点简化并使用纵向节奏，色彩明快但不堆叠复杂纹理，避免纸质漫画网点和过度写实渲染", enPrompt: "modern webtoon visual language using controlled digital line weight clean flat color and a small amount of soft shading for mobile-screen readability; expressive faces and action silhouettes take priority while backgrounds simplify according to shot focus and vertical pacing, with bright coherent color but no paper halftone texture or excessive photoreal rendering" },
  { id: "style-chibi-cute", category: "style", styleGroup: "anime", zhName: "Q版萌系", enName: "Chibi Cute", defaultWeight: 1, image: img("style-chibi-cute"), zhPrompt: "Q版萌系造型，约二至三头身、头部和眼睛夸张放大，四肢短圆、轮廓简洁，面部表情以少量清晰符号表达，柔和色块和微小高光营造轻松亲和感", enPrompt: "chibi character design with two-to-three-head proportions, enlarged head and eyes, short rounded limbs and simplified silhouette, emotions expressed through few clear marks, soft color blocks and tiny highlights" },
  { id: "style-mecha-anime", category: "style", styleGroup: "anime", zhName: "机甲动漫", enName: "Mecha Anime", defaultWeight: 1, image: img("style-mecha-anime"), zhPrompt: "机甲动漫设计，装甲板、关节、液压机构和推进器分区清楚，硬表面线条沿受力结构组织，机械尺度通过驾驶舱、维护标记和城市参照体现，金属反射克制", enPrompt: "mecha anime design with clearly separated armor plates joints hydraulics and thrusters, hard-surface lines following structural loads, scale conveyed by cockpit maintenance marks and city references, restrained metal reflections" },
  { id: "style-gothic-anime", category: "style", styleGroup: "anime", zhName: "哥特动漫", enName: "Gothic Anime", defaultWeight: 1, image: img("style-gothic-anime"), zhPrompt: "哥特动漫视觉语言，尖拱、玫瑰窗与高耸室内形成纵向压迫，原创人物以细长轮廓、深色层叠服饰和克制表情出现；月光蓝灰、酒红与旧金有限配色配合硬边赛璐璐阴影，不使用血腥元素", enPrompt: "gothic anime language with pointed arches rose windows and towering interiors creating vertical pressure, original figures in elongated silhouettes layered dark clothing and restrained expressions; moonlit blue-gray wine red and antique gold with hard-edged cel shadows, without gore" },
  { id: "style-pastel-magical-girl", category: "style", styleGroup: "anime", zhName: "粉彩魔法少女", enName: "Pastel Magical Girl", defaultWeight: 1, image: img("style-pastel-magical-girl"), zhPrompt: "粉彩魔法少女动画语言，角色服装由丝带、星形和透明层叠裙摆构成，粉蓝、薰衣草紫与奶油黄形成发光色盘，轮廓圆润，变身光效和云朵装饰保持轻盈层次", enPrompt: "pastel magical-girl animation language, costumes built from ribbons stars and translucent layered skirts, luminous pink blue lavender and cream palette, rounded contours with airy transformation light and cloud ornament" },

  { id: "style-gongbi", category: "style", styleGroup: "eastern", zhName: "工笔画", enName: "Gongbi Painting", defaultWeight: 1, image: img("style-gongbi"), zhPrompt: "中国工笔画语言，以均匀细劲的白描线确定人物、花鸟和器物结构，再用多层薄色分染与罩染塑造体积，设色含蓄精确，绢本底色与留白保持古典秩序", enPrompt: "Chinese gongbi painting language, fine controlled outline defining figures flora fauna and objects, volume built through repeated transparent washes and graded color, restrained precision on silk with ordered negative space" },
  { id: "style-blue-green-landscape", category: "style", styleGroup: "eastern", zhName: "青绿山水", enName: "Blue-Green Landscape", defaultWeight: 1, image: img("style-blue-green-landscape"), zhPrompt: "青绿山水画语言，以石青、石绿和赭石层层罩染山体，勾勒皴法清晰，峰峦、云水和楼阁沿散点透视展开，矿物色厚重明丽并保留绢本古雅光泽", enPrompt: "Chinese blue-green landscape language, azurite malachite and ochre layered over crisply outlined mountain texture, peaks clouds water and pavilions unfolding in shifting perspective with luminous mineral color on silk" },
  { id: "style-dunhuang-mural", category: "style", styleGroup: "eastern", zhName: "敦煌壁画", enName: "Dunhuang Mural", defaultWeight: 1, image: img("style-dunhuang-mural"), zhPrompt: "敦煌壁画视觉语言，人物、飞天、莲花与飘带由流畅线描串联，石绿、赭红、青金与土黄矿物色沉着分层，灰泥墙面保留剥落、粉化和时间痕迹", enPrompt: "Dunhuang mural language, figures apsaras lotus and ribbons connected by flowing linework, layered malachite red ochre lapis and earth-yellow mineral pigments on plaster with restrained flaking and age" },
  { id: "style-tang-court-painting", category: "style", styleGroup: "eastern", zhName: "唐风仕女画", enName: "Tang Court Painting", defaultWeight: 1, image: img("style-tang-court-painting"), zhPrompt: "唐风仕女画语言，人物面容丰润、眉眼细长，宽袖高腰服饰以圆转线条描绘，朱红、石绿和赭色铺在暖绢底上，宫廷器物与从容姿态营造雍容古意", enPrompt: "Tang court-figure painting language, rounded faces and slender eyes, high-waisted wide-sleeved dress drawn with flowing contours, vermilion malachite and ochre on warm silk, poised gestures and court objects creating stately elegance" },
  { id: "style-song-ink-landscape", category: "style", styleGroup: "eastern", zhName: "宋代水墨山水", enName: "Song Ink Landscape", defaultWeight: 1, image: img("style-song-ink-landscape"), zhPrompt: "宋代水墨山水以高远、深远或平远组织山体与行旅，皴法、苔点和淡墨积染区分岩石、林木与云气，大面积绢白留出呼吸；近景墨色厚、远山随雾减淡，尺度含蓄，避免现代装饰水墨和随意泼墨", enPrompt: "Song-dynasty ink-landscape language organizing mountains and travelers through high deep or level distance, with cun texture strokes moss dots and layered pale washes separating rock woodland and mist across generous silk-white space; near forms carry denser ink and distant ridges dissolve through haze, avoiding modern decorative splash-ink effects" },
  { id: "style-new-year-woodblock", category: "style", styleGroup: "eastern", zhName: "年画木版", enName: "New Year Woodblock", defaultWeight: 1, image: img("style-new-year-woodblock"), zhPrompt: "中国木版年画语言，以粗黑主版勾勒圆润人物、器物和装饰云纹，再用朱红、藤黄、石绿与桃红分版套印；构图饱满对称、节庆叙事清楚，保留纸纤维、木版压力和轻微套色偏差，不复制具体门神形象或变成现代卡通海报", enPrompt: "Chinese New Year woodblock language using a bold black key block for rounded figures objects and decorative clouds, followed by separate vermilion yellow mineral green and peach printing blocks; composition is full balanced and festive with visible paper fiber wood pressure and slight registration shift, without copying a named door-god image or becoming a modern cartoon poster" },
  { id: "style-shadow-puppet", category: "style", styleGroup: "eastern", zhName: "皮影戏", enName: "Shadow Puppet", defaultWeight: 1, image: img("style-shadow-puppet"), zhPrompt: "皮影戏视觉语言，以关节铆接的侧身人物、镂空服饰和细杆控制结构形成扁平剪影；染色皮革在幕布背光下呈半透明红黄蓝层次，边缘有手工刀刻与轻微翘曲，动作遵循关节转动，不画成普通黑色纸剪影", enPrompt: "shadow-puppet visual language using articulated riveted profile figures pierced costume details and visible rod-controlled construction as flat silhouettes; dyed leather becomes translucent red yellow and blue under screen backlight, with hand-cut edges slight warping and joint-led motion, distinct from ordinary solid-black paper cutouts" },
  { id: "style-paper-cut-folk", category: "style", styleGroup: "eastern", zhName: "民俗剪纸", enName: "Folk Paper Cut", defaultWeight: 1, image: img("style-paper-cut-folk"), zhPrompt: "中国民俗剪纸语言，单张红纸通过阴刻与阳刻形成连续轮廓，人物、花鸟和吉祥纹样以折叠对称和细密桥接结构连接，刀口略有手工毛边且背景保持纯净", enPrompt: "Chinese folk paper-cut language, a single red sheet shaped through negative and positive cuts, figures flowers birds and auspicious motifs linked by folded symmetry and fine bridges, slight handmade cut edges on a clean ground" },
  { id: "style-ukiyo-e", category: "style", styleGroup: "eastern", zhName: "浮世绘", enName: "Ukiyo-e", defaultWeight: 1, image: img("style-ukiyo-e"), zhPrompt: "浮世绘木版画以流畅墨线、平涂矿物色和大胆裁切组织人物与风景，水浪、衣纹和云气沿雕版方向形成节奏；可见和纸纤维、轻微套色偏差与木纹压力，高低远近通过重叠和色阶表达，避免西式体积明暗和数码渐变", enPrompt: "ukiyo-e woodblock language organizing figures and landscape through flowing key lines flat mineral color and bold cropping, with waves drapery and clouds following carved directional rhythm; visible washi fiber slight registration shift and wood-pressure texture, depth expressed through overlap and color steps rather than Western modeling or digital gradients" },
  { id: "style-korean-minhwa", category: "style", styleGroup: "eastern", zhName: "韩国民画", enName: "Korean Minhwa", defaultWeight: 1, image: img("style-korean-minhwa"), zhPrompt: "韩国民画语言，虎鹊、牡丹、书架或山水以正面化轮廓和压缩透视呈现，矿物色柔和明快，物体比例带民间夸张，图案装饰性强且保留纸面朴素笔触", enPrompt: "Korean minhwa folk-painting language, tigers magpies peonies bookshelves or landscapes shown with frontal contours and compressed perspective, softly vivid mineral color, folk exaggeration and humble paper brushwork" },
  { id: "style-thangka-ornamental", category: "style", styleGroup: "eastern", zhName: "唐卡装饰", enName: "Thangka Ornamental", defaultWeight: 1, image: img("style-thangka-ornamental"), zhPrompt: "唐卡装饰绘画语言，中心形象置于严格轴线和层叠光环中，莲花、云纹、火焰与宝石边饰密集环绕，矿物蓝绿、朱砂和金线层次精确，构图庄严且细节有序", enPrompt: "thangka ornamental painting language, central figure on a strict axis within layered halos, dense lotus cloud flame and jewel borders, precise mineral blue-green vermilion and gold line arranged in solemn ordered detail" },
  { id: "style-southeast-asian-mural", category: "style", styleGroup: "eastern", zhName: "东南亚寺庙壁画", enName: "SE Asian Mural", defaultWeight: 1, image: img("style-southeast-asian-mural"), zhPrompt: "东南亚寺庙壁画视觉语言，以连续叙事、侧身人物、层叠热带建筑和卷叶边饰组织平面空间；矿物红、靛蓝、墨黑与金色细线在灰泥上形成明确分区，墙面有粉化、细裂和局部磨损，但不复刻具体宗教人物或现存壁画", enPrompt: "Southeast Asian temple-mural visual language organizing flat space through continuous narrative profile figures layered tropical architecture and scrolling foliage borders; mineral red indigo black and fine gold lines create clear zones on plaster with chalking hairline cracks and selective wear, without copying a named religious figure or an existing mural composition" },

  { id: "style-documentary-photo", category: "style", styleGroup: "photo-film-3d", zhName: "纪实摄影", enName: "Documentary Photo", defaultWeight: 1, image: img("style-documentary-photo"), zhPrompt: "纪实摄影语言，在真实环境和可用自然光中捕捉未经摆布的动作与关系，构图允许瞬间遮挡和边缘切入，保留环境信息、肤质与现场光差，不做商业化美化", enPrompt: "documentary photography language capturing unstaged action and relationships in real environments with available light, allowing momentary occlusion and edge crops while preserving context skin texture and authentic exposure variation" },
  { id: "style-fashion-editorial", category: "style", styleGroup: "photo-film-3d", zhName: "时尚大片", enName: "Fashion Editorial", defaultWeight: 1, image: img("style-fashion-editorial"), zhPrompt: "时尚杂志大片语言，以服装廓形和人物姿态为视觉核心，布光精确塑造面料层次，构图具有留白、裁切和节奏变化，色彩与场景统一为完整编辑叙事而非普通棚拍", enPrompt: "fashion editorial photography centered on garment silhouette and intentional pose, precise lighting revealing fabric structure, rhythmic crops and negative space, palette and setting unified into an editorial story rather than a plain studio portrait" },
  { id: "style-luxury-ad-photo", category: "style", styleGroup: "photo-film-3d", zhName: "奢侈品广告摄影", enName: "Luxury Ad Photo", defaultWeight: 1, image: img("style-luxury-ad-photo"), zhPrompt: "奢侈品广告摄影语言，以精准轮廓光和大面积受控阴影塑造金属、玻璃、皮革或丝绸，主体摆位克制、背景无杂物，高光边缘干净并保留真实材质细节与高级留白", enPrompt: "luxury advertising photography language, precise edge light and broad controlled shadow defining metal glass leather or silk, restrained placement on an uncluttered set, clean highlight edges, authentic material detail and premium negative space" },
  { id: "style-noir-film", category: "style", styleGroup: "photo-film-3d", zhName: "黑色电影", enName: "Noir Film", defaultWeight: 1, image: img("style-noir-film"), zhPrompt: "黑色电影视觉语言，黑白高反差中使用百叶窗斜影、逆光烟雾和湿街反射切割空间，人物常处于局部暗影与倾斜构图中，深黑轮廓制造道德暧昧和悬疑感", enPrompt: "film-noir visual language, high-contrast monochrome divided by venetian-blind shadows, backlit haze and wet-street reflections, figures partly concealed in canted compositions with deep blacks and moral ambiguity" },
  { id: "style-romantic-film", category: "style", styleGroup: "photo-film-3d", zhName: "浪漫电影", enName: "Romantic Film", defaultWeight: 1, image: img("style-romantic-film"), zhPrompt: "浪漫电影剧照语言，以柔和逆光、浅景深和轻微高光辉光包围人物，暖肤色与环境冷色保持细腻平衡，近距离眼神、手势和空间停顿承载含蓄情感", enPrompt: "romantic film-still language, soft backlight shallow depth and gentle highlight bloom surrounding the figures, nuanced warm skin against cooler surroundings, close glances gestures and spatial pauses carrying restrained emotion" },
  { id: "style-gritty-drama-film", category: "style", styleGroup: "photo-film-3d", zhName: "粗粝剧情片", enName: "Gritty Drama Film", defaultWeight: 1, image: img("style-gritty-drama-film"), zhPrompt: "粗粝剧情片质感，低饱和自然色、偏硬可用光和略欠曝阴影保留真实压力，墙面磨损、衣物褶皱和空气颗粒清晰可见，手持式构图克制而不追求漂亮", enPrompt: "gritty drama-film look with muted natural color, hard available light and slightly underexposed shadows, visible worn walls clothing creases and atmospheric grain, restrained handheld composition avoiding polished beauty" },
  { id: "style-sci-fi-film", category: "style", styleGroup: "photo-film-3d", zhName: "科幻电影", enName: "Sci-Fi Film", defaultWeight: 1, image: img("style-sci-fi-film"), zhPrompt: "科幻电影视觉语言，未来建筑和载具遵循清晰功能结构，人物被宏大尺度包围，冷色环境光与少量暖色实用灯形成层次，雾化空气、屏幕反射和深景构图强化可信世界", enPrompt: "science-fiction film language, future architecture and vehicles following clear functional structure, people dwarfed by scale, cool ambient light separated by sparse warm practicals, atmospheric haze screen reflections and deep staging building a credible world" },
  { id: "style-fantasy-epic-film", category: "style", styleGroup: "photo-film-3d", zhName: "奇幻史诗电影", enName: "Fantasy Epic Film", defaultWeight: 1, image: img("style-fantasy-epic-film"), zhPrompt: "奇幻史诗电影语言，城堡、山谷与大规模人群沿前中后景展开，火光、天光和雾气划分空间，人物服装与建筑具有统一历史逻辑，低机位和宽画幅突出旅程与英雄尺度", enPrompt: "fantasy epic-film language, castles valleys and large groups staged across foreground midground and distance, torchlight sky light and mist separating depth, coherent costume and architecture, low-angle widescreen framing emphasizing journey and heroic scale" },
  { id: "style-horror-suspense-film", category: "style", styleGroup: "photo-film-3d", zhName: "恐怖悬疑片", enName: "Horror Suspense", defaultWeight: 1, image: img("style-horror-suspense-film"), zhPrompt: "非血腥恐怖悬疑电影语言，走廊、门框和遮挡前景制造看不见的画外空间，冷雾与单一实景光源只揭示局部线索；深黑中保留微弱材质，构图故意留出不安空位，通过等待和未知制造压力", enPrompt: "non-gory horror-suspense cinematography using corridors doorframes and obstructed foreground to imply unseen off-screen space, cold haze and one practical light revealing only partial clues; faint material remains in deep shadow and uneasy empty framing builds pressure through waiting and uncertainty" },
  { id: "style-stop-motion-miniature", category: "style", styleGroup: "photo-film-3d", zhName: "定格微缩模型", enName: "Stop-Motion Miniature", defaultWeight: 1, image: img("style-stop-motion-miniature"), zhPrompt: "定格动画微缩布景语言，角色和道具保留手工接缝、细小磨损与逐帧姿态，缩尺木材、布料和纸板材质真实；桌面级景深、略硬棚拍光和轻微动作停顿共同暴露模型尺度，不追求光滑 CG", enPrompt: "stop-motion miniature language with handmade seams tiny wear and frame-by-frame pose in characters and props, believable scale wood fabric and cardboard; tabletop depth of field, slightly hard stage light and subtle motion staccato reveal the model scale rather than polished CGI" },
  { id: "style-collectible-3d", category: "style", styleGroup: "photo-film-3d", zhName: "收藏玩具3D", enName: "Collectible 3D", defaultWeight: 1, image: img("style-collectible-3d"), zhPrompt: "收藏玩具 3D 渲染，圆润模型、精致塑料材质和可爱比例", enPrompt: "toy-like collectible 3D render, rounded model, polished plastic material, cute proportions" },
  { id: "style-isometric-diorama", category: "style", styleGroup: "photo-film-3d", zhName: "等距3D场景", enName: "Isometric Diorama", defaultWeight: 1, image: img("style-isometric-diorama"), zhPrompt: "等距微缩场景，以平行轴测而非广角透视展示建筑、道路和人物，模块沿统一网格排列，屋顶与立面同时清楚可读；边缘像被整齐切开的桌面沙盘，柔和投影区分高度，细节服务空间关系而不堆满画面", enPrompt: "isometric miniature scene using parallel axonometric projection rather than wide-angle perspective, buildings roads and figures aligned to one grid with roofs and facades simultaneously legible; clean cutaway tabletop edges and soft shadows separate height while detail serves spatial relationships instead of clutter" },

  { id: "style-bauhaus-poster", category: "style", styleGroup: "design-retro", zhName: "包豪斯海报", enName: "Bauhaus Poster", defaultWeight: 1, image: img("style-bauhaus-poster"), zhPrompt: "包豪斯几何海报风，基础几何、红黄蓝黑和理性构图，无文字", enPrompt: "Bauhaus geometric poster style without text, primary shapes, red yellow blue black, rational composition" },
  { id: "style-swiss-grid-poster", category: "style", styleGroup: "design-retro", zhName: "瑞士网格海报", enName: "Swiss Grid Poster", defaultWeight: 1, image: img("style-swiss-grid-poster"), zhPrompt: "瑞士现代主义网格海报，留白、秩序、清晰平面构成，无文字", enPrompt: "Swiss modernist grid poster style without text, strict layout, clean negative space, graphic order" },
  { id: "style-art-deco", category: "style", styleGroup: "design-retro", zhName: "装饰艺术", enName: "Art Deco", defaultWeight: 1, image: img("style-art-deco"), zhPrompt: "装饰艺术视觉语言，以阶梯形、放射扇形和锐利几何边框建立轴线对称，黑色、象牙白、翡翠绿与金属金形成有限色盘，材质平滑精确并带二十世纪都市奢华感", enPrompt: "Art Deco visual language, stepped forms sunburst fans and sharp geometric borders establishing axial symmetry, limited black ivory emerald and metallic gold palette with smooth precision and metropolitan 1920s luxury" },
  { id: "style-art-nouveau", category: "style", styleGroup: "design-retro", zhName: "新艺术运动", enName: "Art Nouveau", defaultWeight: 1, image: img("style-art-nouveau"), zhPrompt: "新艺术运动视觉语言，鞭状曲线把人物、藤蔓、花卉和边框连续连接，轮廓细长流动，扁平柔和色块与植物不对称共同形成有机版面，避免装饰艺术式硬几何", enPrompt: "Art Nouveau visual language, whiplash curves continuously linking figures vines flowers and borders, elongated flowing contours, soft flat color and botanical asymmetry creating an organic layout distinct from hard Art Deco geometry" },
  { id: "style-vaporwave", category: "style", styleGroup: "design-retro", zhName: "蒸汽波", enName: "Vaporwave", defaultWeight: 1, image: img("style-vaporwave"), zhPrompt: "蒸汽波复古数码美学以粉紫晚霞、青色网格地平线、低保真三维雕像和旧电脑界面碎片建立怀旧未来感，带 VHS 色散、扫描线和早期压缩噪点；构图保留冷静空旷感，避免仅用霓虹渐变替代完整视觉语言", enPrompt: "vaporwave retro-digital language combining pink-violet sunsets cyan grid horizons lo-fi classical busts and fragments of early computer interfaces, with VHS chromatic bleed scanlines and primitive compression noise; preserve cool spacious composition rather than reducing the style to a generic neon gradient" },
  { id: "style-synthwave", category: "style", styleGroup: "design-retro", zhName: "合成波", enName: "Synthwave", defaultWeight: 1, image: img("style-synthwave"), zhPrompt: "合成波视觉语言，橙粉条纹夕阳沉入紫蓝地平线，透视网格、黑色剪影和少量铬面结构构成八十年代未来想象，霓虹辉光受控并带轻微扫描线", enPrompt: "synthwave visual language, striped orange-pink sun sinking into a violet-blue horizon, perspective grid, black silhouettes and sparse chrome forms shaping an imagined 1980s future with controlled neon bloom and faint scanlines" },
  { id: "style-risograph", category: "style", styleGroup: "design-retro", zhName: "Risograph印刷", enName: "Risograph", defaultWeight: 1, image: img("style-risograph"), zhPrompt: "Risograph 孔版印刷语言，仅用两到三种专色叠印出新的综合色，网点密度承担明暗，套色边缘保留轻微错位；油墨吸入未涂布纸形成纤维颗粒和不均匀实地色，避免数字渐变和光滑矢量表面", enPrompt: "Risograph stencil-print language using only two or three spot inks whose overlaps create secondary color, halftone density carrying tone and slight registration drift at edges; ink absorbs into uncoated fibrous paper with uneven solids, avoiding digital gradients and slick vector surfaces" },
  { id: "style-screenprint", category: "style", styleGroup: "design-retro", zhName: "丝网印刷", enName: "Screenprint", defaultWeight: 1, image: img("style-screenprint"), zhPrompt: "丝网印刷视觉语言，厚实不透明油墨形成边缘清楚的平涂色块，局部通过粗网点或多次刮印建立明暗，颜色叠压处可见第三色与轻微错版；纸纹从薄墨区透出，保持手工刮板压力差异", enPrompt: "screenprint language with thick opaque ink forming crisp flat color masses, coarse halftone or repeated pulls building tone, overlaps producing a third color and slight misregistration; paper texture shows through thinner areas with visible variation in squeegee pressure" },
  { id: "style-linocut", category: "style", styleGroup: "design-retro", zhName: "亚麻油毡版画", enName: "Linocut", defaultWeight: 1, image: img("style-linocut"), zhPrompt: "亚麻油毡版画语言，以宽刀和圆刀形成粗壮轮廓、锥形刻痕与大片实黑，细节通过黑白面积和刻线方向表达，墨色边缘略有压印不均并保留纸张纤维", enPrompt: "linocut print language, broad gouges and rounded cutters forming heavy contours tapered marks and solid black masses, detail carried by black-white area and cut direction, slightly uneven ink pressure on visible paper fiber" },
  { id: "style-stained-glass", category: "style", styleGroup: "design-retro", zhName: "彩色玻璃", enName: "Stained Glass", defaultWeight: 1, image: img("style-stained-glass"), zhPrompt: "彩色玻璃视觉语言，深色铅条把主体拆分为可制作的封闭色块，玻璃内部呈现气泡、波纹与色密变化，背光穿透后在边缘形成明亮宝石色，不使用普通马赛克颗粒", enPrompt: "stained-glass language, dark lead came dividing the subject into manufacturable closed color cells, bubbles ripples and density variation inside glass, transmitted light creating jewel-bright edges rather than granular mosaic texture" },
  { id: "style-papercraft-diorama", category: "style", styleGroup: "design-retro", zhName: "纸艺立体场景", enName: "Papercraft Diorama", defaultWeight: 1, image: img("style-papercraft-diorama"), zhPrompt: "纸艺立体场景语言，人物、建筑和植物由不同厚度的纸板逐层裁切、折叠并前后错开，切边与纸纤维清楚，柔和侧光在层间产生真实投影，整体保持手工装配感", enPrompt: "papercraft diorama language, figures architecture and plants cut folded and offset in layers of varied paper thickness, visible cut edges and fibers, soft side light casting real interlayer shadows with a handcrafted assembled character" },
  { id: "style-holographic-iridescent", category: "style", styleGroup: "design-retro", zhName: "镭射虹彩", enName: "Holographic", defaultWeight: 1, image: img("style-holographic-iridescent"), zhPrompt: "镭射虹彩视觉以衍射薄膜和多层干涉为依据，视角变化处出现受控的青、品红、金与紫色带，基底仍能辨认金属、透明塑料或晶体结构；高光锐利、暗部保持中性，彩虹只沿曲率和反射方向移动，避免全画面随意渐变或荧光雾", enPrompt: "holographic iridescent visual language grounded in diffraction film and thin-layer interference, producing controlled cyan magenta gold and violet bands where viewing angle changes while the metal transparent polymer or crystal substrate remains legible; highlights stay sharp and shadows neutral, with color following curvature and reflection rather than an arbitrary full-frame rainbow gradient or neon haze" },
  { id: "style-gathered-scenes-zine", category: "style", styleGroup: "design-retro", zhName: "拾景纸刊", enName: "Gathered Scenes Zine", defaultWeight: 1, image: img("style-gathered-scenes-zine"), zhPrompt: "拾景纸刊风格，真实照片局部、温暖旧纸、手撕纤维边缘、抽象插画场域和复印网点颗粒", enPrompt: "gathered-scenes zine style, partial real-photo area, warm aged paper, torn fiber edge, abstract illustrated field, xerox halftone grain" },
  { id: "style-photo-abstract-editorial", category: "style", styleGroup: "design-retro", zhName: "照片抽象社论", enName: "Photo Abstract Editorial", defaultWeight: 1, image: img("style-photo-abstract-editorial"), zhPrompt: "照片抽象社论风格，从照片轮廓提炼几何块面、留白、克制配色和高级杂志感", enPrompt: "photo abstract editorial style, photographic silhouettes reduced into geometric planes, generous negative space, restrained palette, premium magazine mood" },
  { id: "style-fresh-whitespace-watercolor", category: "style", styleGroup: "design-retro", zhName: "清新留白水彩", enName: "Fresh White-Space Watercolor", defaultWeight: 1, image: img("style-fresh-whitespace-watercolor"), zhPrompt: "清新留白水彩风格，透明水彩、暖白纸面、简化块面、通透治愈和大面积空白", enPrompt: "fresh white-space watercolor style, transparent washes, warm off-white paper, simplified blocks, airy healing mood and generous blank space" },
  { id: "style-starryear-monet-stamp", category: "style", styleGroup: "design-retro", zhName: "星年莫奈邮票", enName: "Starryear Monet Stamp", defaultWeight: 1, image: img("style-starryear-monet-stamp"), zhPrompt: "星年莫奈邮票风格，印象派碎笔触、柔和蓝绿花园光、邮票边缘和精致纸面印刷感", enPrompt: "Starryear Monet stamp style, impressionist broken brushwork, soft blue-green garden light, perforated stamp edge, refined printed paper texture" },
  { id: "style-vintage-travel-journal", category: "purpose", styleGroup: "cover", zhName: "复古旅行手账", enName: "Vintage Travel Journal", defaultWeight: 1, image: img("style-vintage-travel-journal"), zhPrompt: "复古旅行手账成片用途，旧纸肌理、手绘场景、贴纸元素、低饱和色和轻微颗粒", enPrompt: "vintage travel journal finished-image use, aged notebook paper, hand-drawn scene, sticker-like extracted elements, muted colors and subtle grain" },
  { id: "style-modern-minimal-logo", category: "purpose", styleGroup: "design", zhName: "现代极简标志", enName: "Modern Minimal Logo", defaultWeight: 1, image: img("style-modern-minimal-logo"), zhPrompt: "现代极简标志成片用途，将主体提炼为几何图形、清晰剪影、品牌符号感和干净色卡", enPrompt: "modern minimal logo finished-image use, subject reduced into geometric forms, clear silhouette, brand-symbol clarity and clean color swatches" },
  { id: "purpose-photo-sketch-editorial", category: "purpose", styleGroup: "cover", zhName: "摄影速写编辑页", enName: "Photo Sketch Editorial Page", defaultWeight: 1, image: img("purpose-photo-sketch-editorial"), zhPrompt: "摄影与手绘旅行速写编辑页，上方真实照片、暖白大留白纸面、下方小幅彩铅速写", enPrompt: "photography plus hand-drawn travel sketch editorial page, real photo on top, warm-white negative-space paper, small colored-pencil sketch below" },
  { id: "purpose-photo-slice-whitespace-poster", category: "purpose", styleGroup: "cover", zhName: "摄影切片留白海报", enName: "Photo Slice White-Space Poster", defaultWeight: 1, image: img("purpose-photo-slice-whitespace-poster"), zhPrompt: "摄影切片留白海报成片用途，真实照片区域、主体缩小居中、竖向切片、淡色块和大面积空白", enPrompt: "photo slice white-space poster purpose, real-photo area, small centered subject, vertical slices, pale extracted color blocks, generous blank space" },
  { id: "purpose-artist-travel-manuscript", category: "purpose", styleGroup: "cover", zhName: "艺术家旅行手稿", enName: "Artist Travel Manuscript", defaultWeight: 1, image: img("purpose-artist-travel-manuscript"), zhPrompt: "艺术家旅行手稿成片用途，米白纸张、水彩淡彩、钢笔铅笔速写、观察标记和随性留白", enPrompt: "artist travel manuscript purpose, ivory paper, watercolor tint, pen and pencil sketches, observation marks, loose generous negative space" },
  { id: "purpose-photo-second-world", category: "purpose", styleGroup: "cover", zhName: "照片里的第二世界", enName: "Second World in a Photo", defaultWeight: 1, image: img("purpose-photo-second-world"), zhPrompt: "摄影与极简线稿融合的第二世界海报，照片结构自然延伸到暖白纸面，小比例线稿人物与延伸结构发生真实互动", enPrompt: "second-world photo editorial, photographic structure extending naturally onto warm ivory paper, tiny line-drawn figures physically interacting with the extension" },
  { id: "purpose-geometric-rubbing-atlas", category: "purpose", styleGroup: "cover", zhName: "几何拓印图录", enName: "Geometric Rubbing Atlas", defaultWeight: 1, image: img("purpose-geometric-rubbing-atlas"), zhPrompt: "几何拓印图录海报，将主体轮廓重构为严谨几何骨架、负形与符号，结合木刻拓印、干刷丝网印刷和旧图录纸感", enPrompt: "geometric rubbing atlas poster, subject rebuilt as a strict geometric framework, negative shapes and symbols, with woodblock rubbing, dry screenprint and archival catalog paper" },
  { id: "purpose-isometric-miniature-editorial", category: "purpose", styleGroup: "cover", zhName: "等距微缩编辑页", enName: "Isometric Miniature Editorial", defaultWeight: 1, image: img("purpose-isometric-miniature-editorial"), zhPrompt: "等距微缩编辑页，将真实场景概括为纸面微缩模型、清晰体块、有限色盘和大面积留白", enPrompt: "isometric miniature editorial page, real scene reduced into a paper diorama with clear volumes, limited sampled palette and generous negative space" },
  { id: "style-rough-charcoal", category: "style", styleGroup: "craft-print", zhName: "粗碳笔黑白画", enName: "Rough Charcoal Drawing", defaultWeight: 1, image: img("style-rough-charcoal"), zhPrompt: "粗碳笔黑白画风格，粗黑干性笔触、断续毛边、暖白纸留白和少量红色强调", enPrompt: "rough charcoal black-and-white drawing style, thick dry broken strokes, ragged edges, warm white paper margins and tiny red accent" },
  { id: "style-child-crayon", category: "style", styleGroup: "design-retro", zhName: "儿童蜡笔手绘", enName: "Children's Crayon Drawing", defaultWeight: 1, image: img("style-child-crayon"), zhPrompt: "儿童蜡笔手绘风格，稚拙线条、明亮高明度色彩、油画棒颗粒和米白纸张", enPrompt: "children's crayon drawing style, naive uneven outlines, bright high-key colors, wax pastel grain and warm off-white paper" },

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

  { id: "render-cinematic-texture", category: "render", styleGroup: "realism", zhName: "电影级质感", enName: "Cinematic Texture", defaultWeight: 1, image: img("render-cinematic-texture"), zhPrompt: "电影级画面质感，亮暗层次平滑，高光克制、暗部保留细节，材质反应真实并带统一的胶片式色彩关系", enPrompt: "cinematic image finish with smooth tonal roll-off, controlled highlights, detailed shadows, believable material response and cohesive filmic color separation" },
  { id: "render-game-engine", category: "render", styleGroup: "realism", zhName: "虚幻引擎渲染", enName: "Game Engine Render", defaultWeight: 1, image: img("render-game-engine"), zhPrompt: "高端实时游戏引擎渲染，PBR 材质具备正确粗糙度、法线与金属响应，动态全局光照、接触阴影和反射探针保持一致，细节清晰但避免离线渲染般过度平滑", enPrompt: "high-end real-time game-engine rendering, PBR materials with correct roughness normals and metallic response, coherent dynamic global illumination contact shadows and reflection probes, crisp detail without offline-render oversmoothing" },
  { id: "render-octane", category: "render", styleGroup: "realism", zhName: "Octane 渲染", enName: "Octane Render", defaultWeight: 1, image: img("render-octane"), zhPrompt: "高端无偏路径追踪渲染，面光源形成柔和但精确的高光，玻璃、金属和半透明材质具备真实能量衰减与焦散，间接光干净细腻且不出现塑料般过度光滑", enPrompt: "high-end unbiased path-traced render, area lights producing soft precise highlights, glass metal and translucent materials with believable energy falloff and caustics, clean indirect light without plasticky oversmoothing" },
  { id: "render-realistic-texture", category: "render", styleGroup: "realism", zhName: "写实纹理", enName: "Realistic Texture", defaultWeight: 1, image: img("render-realistic-texture"), zhPrompt: "写实微观纹理，皮肤毛孔、织物纤维、木石细孔与使用痕迹符合真实尺度，粗糙度变化自然且不过度锐化", enPrompt: "physically scaled realistic microtexture, visible skin pores, textile fibers, wood or stone grain and natural wear, nuanced roughness without oversharpening" },
  { id: "render-shallow-depth", category: "render", styleGroup: "realism", zhName: "浅景深", enName: "Shallow DOF", defaultWeight: 1, image: img("render-shallow-depth"), zhPrompt: "浅景深效果，焦点平面准确落在主体关键部位，前后景逐渐柔化为自然散景，主体边缘过渡真实且不出现抠图感", enPrompt: "shallow depth of field with the focus plane locked to the subject's key feature, gradual foreground and background falloff, natural bokeh and believable edge transition" },
  { id: "render-film-grain", category: "render", styleGroup: "technical", zhName: "胶片颗粒", enName: "Film Grain", defaultWeight: 1, image: img("render-film-grain"), zhPrompt: "有机胶片颗粒，亮部颗粒细、暗部颗粒稍明显，密度随明暗自然变化，保留模拟底片的层次而非数字噪点", enPrompt: "organic analog film grain, finer in highlights and more visible in shadows, density responding naturally to exposure with tonal depth rather than digital noise" },
  { id: "render-hdr", category: "render", styleGroup: "technical", zhName: "HDR", enName: "HDR", defaultWeight: 1, image: img("render-hdr"), zhPrompt: "自然高动态范围，强光与深阴影同时保留纹理，局部对比清晰但不过度映射，不产生光晕、脏灰或塑料质感", enPrompt: "natural high dynamic range retaining texture in bright highlights and deep shadows, clear local contrast without overmapping, halos, muddy gray or plastic surfaces" },
  { id: "render-ultra-detailed-material", category: "render", styleGroup: "realism", zhName: "高细节材质", enName: "Material Detail", defaultWeight: 1, image: img("render-ultra-detailed-material"), zhPrompt: "高细节材质表现，表面微划痕、织纹、孔隙、磨损与反射随结构变化，近看信息丰富但整体轮廓仍干净可读", enPrompt: "high-detail material rendering with micro-scratches, weave, pores, wear and structure-aware reflections, rich close inspection while preserving a clean readable silhouette" },

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
  ...styleExpansionParameters,
  ...styleExpansionParameters2,
  ...styleExpansionParameters3,
  ...styleExpansionParameters4,
  ...styleExpansionParameters5,
  ...styleExpansionParameters6,
  ...styleExpansionParameters7,
  ...styleExpansionParameters8,
  ...styleExpansionParameters9,
  ...styleExpansionParameters10,
  ...styleExpansionParameters11,
  ...styleExpansionParameters12,
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
