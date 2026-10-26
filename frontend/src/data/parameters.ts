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
import { styleExpansionParameters13 } from "./styleExpansionParameters13";
import { styleExpansionParameters14 } from "./styleExpansionParameters14";
import { styleExpansionParameters15 } from "./styleExpansionParameters15";
import { styleExpansionParameters16 } from "./styleExpansionParameters16";
import { styleExpansionParameters17 } from "./styleExpansionParameters17";
import { styleExpansionParameters18 } from "./styleExpansionParameters18";
import { styleExpansionParameters19 } from "./styleExpansionParameters19";
import { styleExpansionParameters20 } from "./styleExpansionParameters20";
import { styleExpansionParameters21 } from "./styleExpansionParameters21";
import { recroppedParameterAssets } from "./recroppedParameterAssets";

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
    { id: "social-role", zhName: "社会角色 / 人物关系" },
    { id: "body-type", zhName: "体态比例" },
    { id: "fantasy", zhName: "幻想身份" },
    { id: "sci-fi", zhName: "科幻身份" }
  ],
  ethnicity: [
    { id: "all", zhName: "全部族裔外貌" },
    { id: "region", zhName: "地域族裔参考" },
    { id: "skin-tone", zhName: "肤色与皮肤细节" },
    { id: "facial-feature", zhName: "面部骨相特征" },
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
    { id: "hair-texture", zhName: "自然发质" },
    { id: "hair-shape", zhName: "发型轮廓" },
    { id: "hair-styling", zhName: "造型 / 发色" },
    { id: "makeup-natural", zhName: "自然妆容" },
    { id: "makeup-stylized", zhName: "风格妆容" }
  ],
  pose: [
    { id: "all", zhName: "全部姿势" },
    { id: "standing", zhName: "站姿" },
    { id: "sitting", zhName: "坐姿 / 跪姿" },
    { id: "motion", zhName: "行走 / 动态" },
    { id: "action", zhName: "运动 / 战斗" },
    { id: "dance", zhName: "舞蹈" },
    { id: "lying", zhName: "躺卧 / 趴卧" },
    { id: "interaction", zhName: "多人互动" },
    { id: "emotion", zhName: "手势 / 情绪动作" },
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
    { id: "camera-angle", zhName: "主体观察角度" },
    { id: "angle", zhName: "机位高度 / 视角" },
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
    { id: "palette", zhName: "基础色彩关系" },
    { id: "fabric", zhName: "织物柔材" },
    { id: "stone", zhName: "木石 / 陶瓷 / 珠玉" },
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

  { id: "style-warm-fantasy-animation", category: "style", styleGroup: "anime", zhName: "温暖奇幻手绘动画", enName: "Warm Fantasy Animation", defaultWeight: 1, image: img("style-warm-fantasy-animation"), zhPrompt: "温暖奇幻手绘动画以清楚手绘轮廓、分层赛璐璐阴影和水粉般自然背景构成可信童话世界，角色动作轻盈且表情克制，树木、云与建筑归纳成连贯大形；色彩明亮柔和，暖光穿过空气但不形成刺眼光效，避免复制版权角色、碎片化细节和塑料3D表面", enPrompt: "warm hand-drawn fantasy animation combining clear expressive contours, layered cel shadows and gouache-like natural backgrounds into a believable fairy-tale world, with light character motion restrained expressions and scenery simplified into cohesive trees clouds and architecture; keep a bright gentle palette with diffuse warm light, avoiding copyrighted character replicas fragmented microdetail or plastic 3D surfaces" },
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
  { id: "style-collectible-3d", category: "style", styleGroup: "photo-film-3d", zhName: "收藏玩具3D", enName: "Collectible 3D", defaultWeight: 1, image: img("style-collectible-3d"), zhPrompt: "收藏玩具 3D 以清楚的大形体、略夸张头身比例和可制造的分件结构塑造原创角色，树脂或 PVC 表面呈哑光、半哑光与局部亮面差异，接缝、底座和微小喷涂层次可信；棚拍柔光强调体积，不出现真实毛孔、廉价塑料高光或无法脱模的碎小结构", enPrompt: "collectible-toy 3D rendering shaping an original character through clear primary masses slightly exaggerated proportions and manufacturable part breaks, with resin or PVC surfaces varying between matte satin and selective gloss plus credible seams base and restrained paint layers; soft studio light reveals volume without human pores cheap plastic glare or fragile details impossible to mold" },
  { id: "style-isometric-diorama", category: "style", styleGroup: "photo-film-3d", zhName: "等距3D场景", enName: "Isometric Diorama", defaultWeight: 1, image: img("style-isometric-diorama"), zhPrompt: "等距微缩场景，以平行轴测而非广角透视展示建筑、道路和人物，模块沿统一网格排列，屋顶与立面同时清楚可读；边缘像被整齐切开的桌面沙盘，柔和投影区分高度，细节服务空间关系而不堆满画面", enPrompt: "isometric miniature scene using parallel axonometric projection rather than wide-angle perspective, buildings roads and figures aligned to one grid with roofs and facades simultaneously legible; clean cutaway tabletop edges and soft shadows separate height while detail serves spatial relationships instead of clutter" },

  { id: "style-bauhaus-poster", category: "style", styleGroup: "design-retro", zhName: "包豪斯海报", enName: "Bauhaus Poster", defaultWeight: 1, image: img("style-bauhaus-poster"), zhPrompt: "包豪斯海报以圆、方、三角、轴线和比例网格建立功能优先的非对称秩序，红、黄、蓝、黑与暖白作为有限色彩，通过尺度跳跃、重叠和负形形成视觉层级；纸面保持平整、边缘清脆，不生成可读文字，避免孟菲斯装饰、渐变立体和随意几何堆砌", enPrompt: "Bauhaus poster language builds functional asymmetric order from circles squares triangles axes and proportional grids, using a limited red yellow blue black and warm-white palette with scale shifts overlaps and negative space establishing hierarchy; keep the paper flat and edges crisp with no readable text, avoiding Memphis decoration gradient volume or arbitrary geometric clutter" },
  { id: "style-swiss-grid-poster", category: "style", styleGroup: "design-retro", zhName: "瑞士网格海报", enName: "Swiss Grid Poster", defaultWeight: 1, image: img("style-swiss-grid-poster"), zhPrompt: "瑞士国际主义海报以严格模数网格、不对称对齐、清楚基线和大面积留白建立信息秩序，照片或几何色块只占少量跨栏区域；黑、白、红或单一强调色层级明确，边距稳定且视觉重量平衡，画面不生成可读文字，避免居中装饰排版、随意拼贴或复古做旧", enPrompt: "Swiss International Style poster organized by a strict modular grid asymmetric alignment consistent baselines and generous negative space, with photography or geometric color occupying only selected column spans; black white red or one accent maintains clear hierarchy stable margins and balanced visual weight, with no readable text and no centered decoration arbitrary collage or distressed nostalgia" },
  { id: "style-art-deco", category: "style", styleGroup: "design-retro", zhName: "装饰艺术", enName: "Art Deco", defaultWeight: 1, image: img("style-art-deco"), zhPrompt: "装饰艺术视觉语言，以阶梯形、放射扇形和锐利几何边框建立轴线对称，黑色、象牙白、翡翠绿与金属金形成有限色盘，材质平滑精确并带二十世纪都市奢华感", enPrompt: "Art Deco visual language, stepped forms sunburst fans and sharp geometric borders establishing axial symmetry, limited black ivory emerald and metallic gold palette with smooth precision and metropolitan 1920s luxury" },
  { id: "style-art-nouveau", category: "style", styleGroup: "design-retro", zhName: "新艺术运动", enName: "Art Nouveau", defaultWeight: 1, image: img("style-art-nouveau"), zhPrompt: "新艺术运动视觉语言，鞭状曲线把人物、藤蔓、花卉和边框连续连接，轮廓细长流动，扁平柔和色块与植物不对称共同形成有机版面，避免装饰艺术式硬几何", enPrompt: "Art Nouveau visual language, whiplash curves continuously linking figures vines flowers and borders, elongated flowing contours, soft flat color and botanical asymmetry creating an organic layout distinct from hard Art Deco geometry" },
  { id: "style-vaporwave", category: "style", styleGroup: "design-retro", zhName: "蒸汽波", enName: "Vaporwave", defaultWeight: 1, image: img("style-vaporwave"), zhPrompt: "蒸汽波复古数码美学以粉紫晚霞、青色网格地平线、低保真三维雕像和旧电脑界面碎片建立怀旧未来感，带 VHS 色散、扫描线和早期压缩噪点；构图保留冷静空旷感，避免仅用霓虹渐变替代完整视觉语言", enPrompt: "vaporwave retro-digital language combining pink-violet sunsets cyan grid horizons lo-fi classical busts and fragments of early computer interfaces, with VHS chromatic bleed scanlines and primitive compression noise; preserve cool spacious composition rather than reducing the style to a generic neon gradient" },
  { id: "style-synthwave", category: "style", styleGroup: "design-retro", zhName: "合成波", enName: "Synthwave", defaultWeight: 1, image: img("style-synthwave"), zhPrompt: "合成波视觉语言，橙粉条纹夕阳沉入紫蓝地平线，透视网格、黑色剪影和少量铬面结构构成八十年代未来想象，霓虹辉光受控并带轻微扫描线", enPrompt: "synthwave visual language, striped orange-pink sun sinking into a violet-blue horizon, perspective grid, black silhouettes and sparse chrome forms shaping an imagined 1980s future with controlled neon bloom and faint scanlines" },
  { id: "style-risograph", category: "style", styleGroup: "design-retro", zhName: "Risograph印刷", enName: "Risograph", defaultWeight: 1, image: img("style-risograph"), zhPrompt: "Risograph 孔版印刷语言，仅用两到三种专色叠印出新的色彩，网点密度承担明暗，套色边缘保留轻微错位；油墨吸入未涂布纸形成纤维颗粒和不均匀实地色，避免数字渐变和光滑矢量表面", enPrompt: "Risograph stencil-print language using only two or three spot inks whose overlaps create secondary color, halftone density carrying tone and slight registration drift at edges; ink absorbs into uncoated fibrous paper with uneven solids, avoiding digital gradients and slick vector surfaces" },
  { id: "style-screenprint", category: "style", styleGroup: "design-retro", zhName: "丝网印刷", enName: "Screenprint", defaultWeight: 1, image: img("style-screenprint"), zhPrompt: "丝网印刷视觉语言，厚实不透明油墨形成边缘清楚的平涂色块，局部通过粗网点或多次刮印建立明暗，颜色叠压处可见第三色与轻微错版；纸纹从薄墨区透出，保持手工刮板压力差异", enPrompt: "screenprint language with thick opaque ink forming crisp flat color masses, coarse halftone or repeated pulls building tone, overlaps producing a third color and slight misregistration; paper texture shows through thinner areas with visible variation in squeegee pressure" },
  { id: "style-linocut", category: "style", styleGroup: "design-retro", zhName: "亚麻油毡版画", enName: "Linocut", defaultWeight: 1, image: img("style-linocut"), zhPrompt: "亚麻油毡版画语言，以宽刀和圆刀形成粗壮轮廓、锥形刻痕与大片实黑，细节通过黑白面积和刻线方向表达，墨色边缘略有压印不均并保留纸张纤维", enPrompt: "linocut print language, broad gouges and rounded cutters forming heavy contours tapered marks and solid black masses, detail carried by black-white area and cut direction, slightly uneven ink pressure on visible paper fiber" },
  { id: "style-stained-glass", category: "style", styleGroup: "design-retro", zhName: "彩色玻璃", enName: "Stained Glass", defaultWeight: 1, image: img("style-stained-glass"), zhPrompt: "彩色玻璃视觉语言，深色铅条把主体拆分为可制作的封闭色块，玻璃内部呈现气泡、波纹与色密变化，背光穿透后在边缘形成明亮宝石色，不使用普通马赛克颗粒", enPrompt: "stained-glass language, dark lead came dividing the subject into manufacturable closed color cells, bubbles ripples and density variation inside glass, transmitted light creating jewel-bright edges rather than granular mosaic texture" },
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
  { id: "style-child-crayon", category: "style", styleGroup: "design-retro", zhName: "儿童蜡笔手绘", enName: "Children's Crayon Drawing", defaultWeight: 1, image: img("style-child-crayon"), zhPrompt: "儿童蜡笔手绘风格，稚拙线条、明亮高明度色彩、油画棒颗粒和米白纸张", enPrompt: "children's crayon drawing style, naive uneven outlines, bright high-key colors, wax pastel grain and warm off-white paper" },
  { id: "style-mono-ink-editorial", category: "style", styleGroup: "design-retro", zhName: "单双色社论印刷", enName: "One-Two Ink Editorial Print", defaultWeight: 1, image: img("style-mono-ink-editorial"), zhPrompt: "单双色社论印刷语言，以纸张本色承担高光和主动留白，一至两种职责明确的专色构成主体、网点影像与克制信息层级，允许轻微套色偏移和油墨吸收但保持重要轮廓清楚", enPrompt: "one- or two-ink editorial print language using the paper tone for highlights and active negative space, one or two role-specific spot inks for subject halftone image and restrained information hierarchy, allowing slight registration drift and ink absorption while keeping key contours clear" },
  { id: "style-retro-crt-interface", category: "style", styleGroup: "design-retro", zhName: "复古CRT位图界面", enName: "Retro CRT Bitmap Interface", defaultWeight: 1, image: img("style-retro-crt-interface"), zhPrompt: "复古 CRT 位图界面语言，有限单色点阵、共享像素网格、重叠早期桌面窗口和低分辨率图标置于轻微弧面的玻璃屏幕中，带克制扫描线、荧光余辉和边缘亮度衰减", enPrompt: "retro CRT bitmap-interface language with a restricted monochrome dot matrix shared pixel grid overlapping early desktop windows and low-resolution icons on subtly curved glass, with restrained scanlines phosphor persistence and edge falloff" },
  { id: "style-roughcast-early-3d", category: "style", styleGroup: "photo-film-3d", zhName: "粗模早期3D", enName: "Roughcast Early 3D", defaultWeight: 1, image: img("style-roughcast-early-3d"), zhPrompt: "粗模早期三维语言，以笨拙但可辨的低面几何、有限且可见重复的低分辨率贴图、僵硬动作、朴素灯光和简单阴影呈现真实制作限制，避免现代 PBR 与刻意像素滤镜", enPrompt: "roughcast early-3D language using awkward yet readable low-face geometry limited visibly reused low-resolution textures stiff motion plain lighting and simple shadows as genuine production constraints, avoiding modern PBR and deliberate pixel filters" },
  { id: "style-jrpg-npc-interface", category: "style", styleGroup: "anime", zhName: "原创JRPG角色界面", enName: "Original JRPG Character Interface", defaultWeight: 1, image: img("style-jrpg-npc-interface"), zhPrompt: "原创日式角色扮演游戏人物界面，以手绘角色肖像、统一边框、对话区、物品格、地点小地图和有限状态图标建立冒险叙事，人物设计与界面均保持原创且不复刻现有游戏", enPrompt: "original Japanese role-playing character-interface language combining a hand-painted portrait coherent frames dialogue area inventory slots small location map and limited status icons into an adventure narrative, with both character and interface kept original rather than copied from an existing game" },
  { id: "style-photo-perler-charm", category: "style", styleGroup: "craft-print", zhName: "照片拼豆工艺", enName: "Photo Perler Craft", defaultWeight: 1, image: img("style-photo-perler-charm"), zhPrompt: "拼豆熔合珠工艺语言，以规则方格上的等尺寸圆柱珠和有限色盘概括主体，每颗珠孔方向统一、相邻珠真实接触并形成无孤岛的可熔合结构，轮廓像素化但材料体积清楚", enPrompt: "fused-bead craft language reducing the subject to equal cylindrical beads on a regular grid and a limited palette, with aligned holes, real contact between neighboring beads and no isolated pieces, producing a pixel-like contour with clear material volume" },
  { id: "style-textile-toy-portrait", category: "style", styleGroup: "craft-print", zhName: "织物玩偶肖像", enName: "Textile Toy Portrait", defaultWeight: 1, image: img("style-textile-toy-portrait"), zhPrompt: "织物玩偶肖像语言，以棉布、毛毡、针织和绒布分区重构主体，刺绣五官、可见缝线、包边、填充厚度和略不齐的手工裁片共同建立可缝制的柔软立体结构", enPrompt: "textile-toy portrait language rebuilding the subject through cotton felt knit and plush zones, with embroidered features visible seams bound edges stuffing thickness and slightly irregular hand-cut pieces forming a sewable soft three-dimensional structure" },

  { id: "framing-extreme-wide", category: "framing", styleGroup: "shot-size", zhName: "远景", enName: "Extreme Wide", defaultWeight: 1, image: img("framing-extreme-wide"), zhPrompt: "远景让主体只占画面很小比例，完整交代地貌、建筑或群体所在的大环境，并用前中后景和明确地平线建立尺度；主体仍保留可辨轮廓和落脚关系，避免缩成无意义黑点或被环境完全吞没", enPrompt: "extreme wide shot keeping the subject small while clearly establishing the surrounding terrain architecture or crowd context, using foreground midground background and a legible horizon to communicate scale; retain a recognizable silhouette and grounded placement instead of reducing the subject to a meaningless speck or losing it entirely" },
  { id: "framing-wide", category: "framing", styleGroup: "shot-size", zhName: "全景", enName: "Wide Shot", defaultWeight: 1, image: img("framing-wide"), zhPrompt: "全景完整呈现人物或物体从顶部到落脚点，并保留足够环境说明位置、行动方向和空间关系；主体比例适中、边缘不被切断，避免只剩半身、脚部出框或背景空泛无信息", enPrompt: "wide full-body shot showing the complete subject from top to point of contact while retaining enough environment to explain location movement direction and spatial relationships; keep a moderate subject scale and intact edges, avoiding accidental half-body framing cropped feet or an empty contextless background" },
  { id: "framing-medium", category: "framing", styleGroup: "shot-size", zhName: "中景", enName: "Medium Shot", defaultWeight: 1, image: img("framing-medium"), zhPrompt: "中景通常从腰部或膝部以上取景，使表情、手势与上半身动作同时清楚，并保留少量环境交代情境；裁切位置避开关节，主体与背景层级明确，避免误切手腕膝盖或变成拥挤近景", enPrompt: "medium shot generally framing from the waist or knees upward so facial expression hand gesture and upper-body action remain readable together with a small amount of situational context; crop between joints and separate subject from background, avoiding cuts through wrists or knees and avoiding an unintentionally crowded close-up" },
  { id: "framing-close-up", category: "framing", styleGroup: "shot-size", zhName: "近景", enName: "Close-Up", defaultWeight: 1, image: img("framing-close-up"), zhPrompt: "近景让面部、手部或关键物件占据主要画面，集中展示表情、材质与细节，同时留下少量方向空间；焦点准确落在最重要部位，边缘裁切有意且稳定，避免鼻尖耳朵或功能结构被随意切断", enPrompt: "close-up framing letting a face hands or key object occupy most of the image to reveal expression material and fine detail while preserving a little directional space; place focus precisely on the essential area and make edge crops deliberate, avoiding arbitrary cuts through the nose ears or functional structure" },
  { id: "framing-extreme-close-up", category: "framing", styleGroup: "shot-size", zhName: "特写", enName: "Extreme Close-Up", defaultWeight: 1, image: img("framing-extreme-close-up"), zhPrompt: "极近特写只选取眼睛、嘴唇、指尖、纹理或机械节点等一个关键局部，以极浅景深和精确焦点强调微小变化；构图必须让局部身份仍可判断，避免无依据裁切、焦点漂移或把细节放大成不可识别的抽象噪声", enPrompt: "extreme close-up isolating one decisive detail such as an eye lips fingertips surface texture or mechanical joint, with precise focus and very shallow depth emphasizing minute variation; preserve enough context to identify the detail, avoiding arbitrary cropping focus drift or magnification into unrecognizable visual noise" },
  { id: "framing-panoramic", category: "framing", styleGroup: "shot-size", zhName: "极远景", enName: "Panoramic", defaultWeight: 1, image: img("framing-panoramic"), zhPrompt: "极远景以宽阔横向视野展示大尺度地貌、城市或事件全貌，主体作为空间中的尺度参照而非唯一焦点；通过多层远近、连续地平线和清楚路线组织视线，避免把多个不连续视点硬拼接或产生弯曲断裂建筑", enPrompt: "panoramic establishing view spanning a broad landscape city or event, with the subject functioning as a scale reference rather than the sole focal point; organize attention through layered distance a continuous horizon and readable routes, avoiding stitched incompatible viewpoints or warped broken architecture" },

  { id: "camera-macro", category: "camera", styleGroup: "focal-length", zhName: "微距镜头", enName: "Macro Lens", defaultWeight: 1, image: img("camera-macro"), zhPrompt: "微距镜头，呈现细微纹理和极浅焦点范围", enPrompt: "macro lens detail, tactile close surface texture, extremely shallow focus range" },
  { id: "camera-fisheye", category: "camera", styleGroup: "lens-effect", zhName: "鱼眼镜头", enName: "Fisheye", defaultWeight: 1, image: img("camera-fisheye"), zhPrompt: "鱼眼镜头使用接近或超过一百八十度视场，中心区域放大、边缘强烈拉伸，直线向画框外侧弯曲并形成明显桶形透视；主体尽量靠近光轴保持可辨，避免把鱼眼误写成普通超广角或让面部在边缘无控制变形", enPrompt: "fisheye lens with a near or beyond 180-degree field of view, enlarged center strong peripheral stretching and straight lines bowing toward the frame edge in pronounced barrel projection; keep the main subject near the optical axis for readability, avoiding an ordinary ultra-wide look or uncontrolled facial distortion at the perimeter" },
  { id: "camera-top-down", category: "camera", styleGroup: "angle", zhName: "俯拍", enName: "Top Down", defaultWeight: 1, image: img("camera-top-down"), zhPrompt: "垂直俯拍让镜头光轴近似垂直地面，从正上方清楚展示物件分布、人物路线和图形关系；透视压缩、遮挡减少、边缘方向统一，避免混入斜视地平线或让桌面物件出现互相矛盾的投影方向", enPrompt: "true top-down view with the optical axis nearly perpendicular to the ground, clearly revealing object arrangement movement paths and graphic relationships; compress perspective reduce occlusion and keep edge directions coherent, avoiding a tilted horizon or contradictory projection directions across tabletop objects" },
  { id: "camera-low-angle", category: "camera", styleGroup: "angle", zhName: "低机位", enName: "Low Angle", defaultWeight: 1, image: img("camera-low-angle"), zhPrompt: "低机位将相机置于主体视线或腰线以下向上观察，使近处基座、腿部或前景形成透视引导，主体在天空或高处背景前更具体量；垂直线和落脚点保持可信，避免无限拉长肢体或把仰拍等同于广角畸变", enPrompt: "low-angle camera placed below the subject's eye or waist level and looking upward, using the near base legs or foreground as perspective leads so the subject gains mass against sky or elevated background; preserve credible verticals and contact points, avoiding endlessly stretched limbs or confusing an upward view with arbitrary wide-angle distortion" },
  { id: "camera-high-angle", category: "camera", styleGroup: "angle", zhName: "高机位", enName: "High Angle", defaultWeight: 1, image: img("camera-high-angle"), zhPrompt: "高机位从主体视线以上斜向下观察，在保留侧面体积的同时交代人物、家具或道路之间的位置关系；近远尺度按透视自然递减，主体头顶与地面均可读，避免误成完全垂直俯拍或把人物压扁成无体积图标", enPrompt: "high-angle camera looking diagonally downward from above eye level, preserving side volume while clarifying relationships among people furniture or routes; let scale recede naturally and keep both subject crown and ground readable, avoiding a true vertical overhead view or flattening figures into volume-free icons" },
  { id: "camera-aerial", category: "camera", styleGroup: "angle", zhName: "航拍", enName: "Aerial", defaultWeight: 1, image: img("camera-aerial"), zhPrompt: "航拍从高空展示连续地貌、城市纹理、交通路线或群体分布，镜头可轻度倾斜以同时保留地平线和地表纵深；道路、河流与建筑尺度保持一致，天气层次自然，避免卫星贴图般完全扁平或复制粘贴重复楼群", enPrompt: "aerial view from substantial altitude revealing continuous terrain urban texture transport routes or crowd distribution, optionally with a slight oblique tilt that preserves both horizon and ground depth; maintain consistent scale across roads rivers and buildings with natural atmospheric layering, avoiding a completely flat satellite texture or copy-pasted repeated blocks" },
  { id: "camera-symmetrical", category: "camera", styleGroup: "composition", zhName: "对称构图", enName: "Symmetrical", defaultWeight: 1, image: img("camera-symmetrical"), zhPrompt: "对称构图，稳定庄重的画面秩序", enPrompt: "perfectly symmetrical composition, balanced visual order, formal framing" },
  { id: "camera-centered", category: "camera", styleGroup: "composition", zhName: "中心构图", enName: "Centered", defaultWeight: 1, image: img("camera-centered"), zhPrompt: "中心构图把唯一主视觉稳定放在画面几何中心，周围留白、透视线或环境结构共同向中心汇聚；主体边界完整且重心明确，可非完全对称但不能出现竞争焦点，避免仅机械居中却忽略头顶空间和视觉重量", enPrompt: "centered composition placing the single primary visual anchor at the geometric center while negative space perspective lines or environmental structure converge toward it; preserve complete boundaries and a clear center of gravity, allowing asymmetry without competing focal points and avoiding mechanical centering that ignores headroom or visual weight" },

  { id: "lighting-volumetric", category: "lighting", styleGroup: "dramatic", zhName: "丁达尔光", enName: "Tyndall Rays", defaultWeight: 1, image: img("lighting-volumetric"), zhPrompt: "丁达尔光，阳光穿过窗户与空气微粒形成可见光束，光路清晰且有空间纵深", enPrompt: "Tyndall rays, sunlight passing through a window and airborne particles to form visible shafts with clear light paths and spatial depth" },
  { id: "lighting-backlight", category: "lighting", styleGroup: "dramatic", zhName: "逆光", enName: "Backlight", defaultWeight: 1, image: img("lighting-backlight"), zhPrompt: "逆光将主光源放在主体后方，使头发、肩线和透明材质出现连续轮廓光，面向镜头的一侧自然压暗但仍保留必要细节；控制高光溢出和镜头雾化，避免背景整片纯白、主体完全死黑或轮廓光无方向地包围全身", enPrompt: "backlight placing the key source behind the subject so hair shoulders and translucent materials gain a continuous rim while the camera-facing side falls darker yet retains necessary detail; control highlight bloom and lens haze, avoiding a blank white background a completely crushed silhouette or directionless outline glow around the entire body" },
  { id: "lighting-soft", category: "lighting", styleGroup: "natural", zhName: "柔光", enName: "Soft Light", defaultWeight: 1, image: img("lighting-soft"), zhPrompt: "柔光来自大面积窗光、阴天或扩散布，阴影边缘宽而渐变，皮肤与材质保留细节但反差温和；光线方向仍可辨并塑造体积，避免把柔光做成没有明暗关系的扁平补光、塑料磨皮或全局灰雾", enPrompt: "soft light from a broad window overcast sky or diffusion surface, producing wide graduated shadow edges and gentle contrast while retaining skin and material detail; keep a readable direction that still models volume, avoiding flat fill with no light relationship plastic skin smoothing or a global gray haze" },
  { id: "lighting-hard", category: "lighting", styleGroup: "dramatic", zhName: "硬光", enName: "Hard Light", defaultWeight: 1, image: img("lighting-hard"), zhPrompt: "硬光由较小且距离较远的直射光源形成，投影边缘清晰、亮暗分区明确，并以高光和阴影切面强化结构；保持单一可信光向和适度暗部细节，避免多组互相冲突的影子、无依据黑块或全局过曝", enPrompt: "hard light produced by a relatively small direct source, creating crisp cast-shadow edges decisive light-dark separation and highlights that carve structural planes; maintain one credible direction with controlled shadow detail, avoiding multiple conflicting shadows arbitrary black patches or global clipping" },
  { id: "lighting-blinds-shadow", category: "lighting", styleGroup: "interior", zhName: "百叶窗投影", enName: "Venetian Blinds Light", defaultWeight: 1, image: img("lighting-blinds-shadow"), zhPrompt: "百叶窗投影光，平行窗帘阴影切过墙面和主体，图形感强、方向明确", enPrompt: "venetian blinds lighting, parallel window shadows cutting across wall and subject with a strong graphic directional pattern" },
  { id: "lighting-dappled-leaf", category: "lighting", styleGroup: "natural", zhName: "树影斑驳光", enName: "Dappled Leaf Light", defaultWeight: 1, image: img("lighting-dappled-leaf"), zhPrompt: "树影斑驳光，阳光经叶片筛落形成自然不规则光斑，温暖且有呼吸感", enPrompt: "dappled leaf light, sunlight filtered through foliage into organic irregular patches, warm natural and alive" },
  { id: "lighting-sodium-vapor", category: "lighting", styleGroup: "dramatic", zhName: "钠灯街光", enName: "Sodium Vapor Streetlight", defaultWeight: 1, image: img("lighting-sodium-vapor"), zhPrompt: "钠灯街光，深夜街道的琥珀色低色温灯池与湿地反射，周围暗部保持冷静", enPrompt: "sodium vapor streetlight, amber low-temperature pools of light and wet-street reflections at night with restrained cool shadows" },
  { id: "lighting-golden-hour", category: "lighting", styleGroup: "natural", zhName: "黄金时刻", enName: "Golden Hour", defaultWeight: 1, image: img("lighting-golden-hour"), zhPrompt: "黄金时刻暖光，温暖柔和的夕阳氛围", enPrompt: "golden hour warm light, soft sunset atmosphere, long gentle shadows" },
  { id: "lighting-neon", category: "lighting", styleGroup: "sci-fi", zhName: "霓虹光", enName: "Neon Light", defaultWeight: 1, image: img("lighting-neon"), zhPrompt: "霓虹光由画面内真实管灯、招牌或发光装置提供蓝青与洋红等局部色彩，色彩在皮肤、金属和湿地面上产生方向一致的反射；保留深色中性区分隔色彩，避免整幅无来源紫蓝覆盖、荧光溢出或赛博元素无差别堆叠", enPrompt: "neon lighting motivated by visible tubes signs or luminous fixtures, casting localized cyan blue and magenta color onto skin metal and wet ground with directionally consistent reflections; retain dark neutral zones between colors, avoiding a source-free purple wash uncontrolled fluorescence or indiscriminate cyber decoration" },
  { id: "lighting-low-key", category: "lighting", styleGroup: "dramatic", zhName: "低调光", enName: "Low Key", defaultWeight: 1, image: img("lighting-low-key"), zhPrompt: "低调光让大部分画面处于深色，仅用窄侧光、顶光或实景小光源刻画面部与关键轮廓，黑位深但保留层次；亮部面积小且位置有叙事目的，避免简单压暗曝光、阴影堵死或多个随机亮斑破坏焦点", enPrompt: "low-key lighting keeping most of the frame dark while a narrow side key top light or small practical source reveals the face and essential contour, with deep but separated blacks; highlights remain limited and narratively placed, avoiding mere underexposure crushed shadow detail or random bright spots that break focus" },
  { id: "lighting-high-key", category: "lighting", styleGroup: "natural", zhName: "高调光", enName: "High Key", defaultWeight: 1, image: img("lighting-high-key"), zhPrompt: "高调光以大面积明亮背景和充分柔和补光把色彩集中在中高亮区，阴影很浅但仍保留五官、白色材质和边缘分离；整体通透干净，避免所有白色融成一片、肤色过曝或完全失去体积", enPrompt: "high-key lighting using a broad bright background and ample soft fill to concentrate tones in the middle and upper range, with shallow shadows that still separate facial features white materials and edges; keep the result airy and clean without merging every pale surface clipping skin or eliminating volume" },
  { id: "lighting-fog", category: "lighting", styleGroup: "dramatic", zhName: "体积雾", enName: "Atmospheric Fog", defaultWeight: 1, image: img("lighting-fog"), zhPrompt: "体积雾让空气中的细小水滴随距离逐层降低色彩与对比，近景保持清楚、中景柔化、远景缓慢消失，并在侧逆光下显出有限光路；雾密度服从空间深度，避免均匀白膜覆盖、主体边缘全部糊掉或没有光源却出现光柱", enPrompt: "atmospheric fog using suspended droplets to reduce saturation and contrast progressively with distance, keeping foreground clear softening midground and letting the background recede while limited light paths appear under side or backlight; density must follow depth, avoiding a uniform white veil erased subject edges or beams with no source" },
  { id: "lighting-rainy-night", category: "lighting", styleGroup: "natural", zhName: "雨夜", enName: "Rainy Night", defaultWeight: 1, image: img("lighting-rainy-night"), zhPrompt: "雨夜光线由路灯、窗光或车辆灯照亮真实雨丝、水滴和积水反射，湿表面高光沿地面透视延伸，暗部保持冷静层次；控制色彩来源和反射方向，避免把雨做成白色噪点、路面镜像过强或全画面统一蓝滤镜", enPrompt: "rainy-night lighting motivated by street lamps windows or vehicle lights that reveal actual rain streaks droplets and puddle reflections, with wet highlights extending along ground perspective and cool layered shadows; control color sources and reflection direction, avoiding rain as white noise mirror-like pavement or a uniform blue filter over the entire scene" },

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
  ...styleExpansionParameters13,
  ...styleExpansionParameters14,
  ...styleExpansionParameters15,
  ...styleExpansionParameters16,
  ...styleExpansionParameters17,
  ...styleExpansionParameters18,
  ...styleExpansionParameters19,
  ...styleExpansionParameters20,
  ...styleExpansionParameters21,
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

const promptOptimizations: Record<string, { zhPrompt: string; enPrompt: string }> = {
  "expression-neutral": {
    zhPrompt: "自然中性表情，眉眼与嘴角保持放松，视线稳定但不过度直瞪，面部肌肉没有明显喜怒张力；保留真实眨眼、唇线与左右轻微差异，避免僵硬证件照、空洞眼神或假笑残留",
    enPrompt: "natural neutral expression with relaxed brows eyes and mouth corners, a steady gaze without staring, and no obvious emotional tension in the facial muscles; retain believable blinking lip shape and slight left-right asymmetry, avoiding a rigid passport-photo face vacant eyes or traces of a forced smile",
  },
  "expression-slight-smile": {
    zhPrompt: "浅笑由嘴角轻微上扬和眼周细小放松共同形成，牙齿通常不露或仅微露，面颊变化克制且符合人物气质；保持左右自然差异，避免夸张咧嘴、僵硬商业笑容或只改变嘴唇而眼神无反应",
    enPrompt: "subtle smile formed by a gentle lift at the mouth corners and a small softening around the eyes, usually with no teeth or only a slight glimpse and restrained cheek movement suited to the character; preserve natural asymmetry, avoiding a broad grin a rigid commercial smile or lips changing while the eyes remain emotionally blank",
  },
  "expression-bright-smile": {
    zhPrompt: "灿烂微笑让嘴角充分展开、面颊抬起并带动眼周收紧，牙齿露出程度自然，眼神明亮且与头部姿态协调；保留嘴唇、牙列和面部比例，避免过度拉伸、重复牙齿、闭眼变形或塑料般统一笑脸",
    enPrompt: "bright genuine smile with fully lifted mouth corners raised cheeks and corresponding eye crinkles, naturally visible teeth and lively eyes coordinated with the head pose; preserve lip dentition and facial proportions, avoiding overstretching duplicated teeth distorted closed eyes or a uniform plastic grin",
  },
  "expression-serious": {
    zhPrompt: "严肃神态以稳定直视、轻收眉间和闭合唇线表达专注与分量，头颈姿态端正但不僵硬；控制皱眉强度并保留真实肤质，避免误成愤怒、威胁性瞪视、夸张下压眉毛或完全无生气",
    enPrompt: "serious expression conveyed through a steady gaze slight brow engagement and a closed relaxed lip line, with upright but not rigid head and neck posture; control the frown intensity and preserve real skin texture, avoiding an angry glare threatening stare exaggerated lowered brows or a lifeless face",
  },
  "expression-sad": {
    zhPrompt: "悲伤神态通过内眉轻抬、眼神下沉、眼睑略重与嘴角微垂共同呈现，情绪内敛并保留人物尊严；眼眶可有轻微湿润但不必落泪，避免夸张哭脸、整张脸扭曲或仅靠蓝色滤镜代替表情",
    enPrompt: "sad expression shown through subtly raised inner brows a lowered gaze slightly heavy eyelids and gently downturned mouth corners, restrained and dignified; the eyes may appear faintly moist without active tears, avoiding an exaggerated crying face full facial distortion or a blue color filter standing in for emotion",
  },
  "expression-crying": {
    zhPrompt: "真实落泪状态包含湿润眼眶、沿重力方向滑落的少量泪痕、鼻翼与唇部轻微紧张，表情强度与情境一致；保持泪水透明反光和皮肤接触关系，避免对称瀑布泪、黑色泪线、过度扭曲五官或戏剧面具式哭喊",
    enPrompt: "believable crying with moist eyes a limited number of tears following gravity and subtle tension around the nose and lips, with intensity appropriate to the scene; preserve transparent tear reflections and contact with the skin, avoiding symmetrical waterfalls black tear streaks distorted features or a theatrical mask-like wail",
  },
  "expression-angry": {
    zhPrompt: "愤怒神态由眉间收紧、目光集中、下颌与唇部张力构成，强度可读但面部结构仍稳定；让颈肩姿态回应情绪并保留个体特征，避免眼球凸出、整脸通红、牙齿畸变或把愤怒误做成怪物表情",
    enPrompt: "angry expression built from contracted brows concentrated eyes and controlled tension in the jaw and lips, clearly readable while facial structure remains stable; let the neck and shoulders support the emotion while retaining identity, avoiding bulging eyes an entirely red face malformed teeth or a monster-like grimace",
  },
  "expression-surprised": {
    zhPrompt: "惊讶神态以眉毛抬起、眼睑打开和嘴唇自然微张形成瞬间反应，程度与事件相符且五官比例不变；面部方向和视线指向惊讶来源，避免眼睛巨大化、下巴脱臼、重复牙齿或卡通化尖叫",
    enPrompt: "surprised expression formed by lifted brows opened eyelids and naturally parted lips as an immediate reaction, with intensity matching the event and facial proportions preserved; direct the face and gaze toward the cause, avoiding oversized eyes a dislocated jaw duplicated teeth or a cartoon scream",
  },
  "expression-proud": {
    zhPrompt: "骄傲神态通过下巴微抬、胸肩舒展、目光稳定和克制嘴角表达自信与成就感，姿态挺拔但不傲慢僵硬；保留人物亲和度与自然呼吸，避免夸张仰头、蔑视斜眼、双手无故叉腰或权力符号堆砌",
    enPrompt: "proud expression conveyed by a slightly raised chin open shoulders a steady gaze and restrained mouth corners, suggesting confidence and achievement without rigid arrogance; retain warmth and natural breathing, avoiding an extreme head tilt contemptuous side-eye arbitrary hands-on-hips posing or piled-up status symbols",
  },
  "hair-curly": {
    zhPrompt: "卷发造型由大小一致但不过度复制的卷束构成，发根有支撑、卷曲方向随头骨和重力变化，外轮廓蓬松而面部边缘清楚；保留零散碎发与真实层次，避免方便面式重复卷、整块头盔感或卷发穿过耳朵和衣物",
    enPrompt: "curly hairstyle built from coherent but non-repeating curl clusters, with root lift and curl direction responding to the skull and gravity, a voluminous silhouette and a clear facial edge; retain flyaways and believable layering, avoiding instant-noodle repetition helmet-like mass or curls intersecting ears and clothing",
  },
  "hair-bun": {
    zhPrompt: "盘发将发束沿真实梳理方向收拢至发髻，发髻体积、固定点与头骨比例合理，鬓角和后颈保留少量自然碎发；轮廓整洁但不过分光滑，避免悬空发髻、无来源发量、塑料表面或发簪穿透头部",
    enPrompt: "hair bun gathering strands along believable combing directions into an updo with plausible volume anchoring and proportion to the skull, retaining a few natural wisps at the temples and nape; keep the silhouette tidy but not unnaturally slick, avoiding a floating bun impossible hair volume plastic surfaces or pins intersecting the head",
  },
  "hair-windblown": {
    zhPrompt: "风吹发丝具有统一来风方向，主发束先产生整体偏移，细碎发丝再以不同长度和弧度响应速度；发根仍连接头皮并避开眼口关键区域，避免所有发丝平行、无重力漂浮、穿模或用运动模糊掩盖结构",
    enPrompt: "windblown hair with one coherent wind direction, primary masses shifting first and finer strands responding with varied length and curvature according to speed; roots remain attached to the scalp and key eyes and mouth stay readable, avoiding perfectly parallel strands weightless floating intersections or motion blur hiding broken structure",
  },
  "makeup-natural": {
    zhPrompt: "自然裸妆以轻薄底妆均匀肤色而不遮盖毛孔、细纹和面部起伏，眉毛、睫毛与唇色仅做接近本色的精细整理；高光服从真实光源，边界充分晕开，避免假面厚粉、过白肤色、玻璃皮或明显彩妆色块",
    enPrompt: "natural barely-there makeup using a light base to even skin tone without hiding pores fine lines or facial relief, with brows lashes and lips refined close to their natural color; highlights follow the real light source and edges are fully blended, avoiding mask-like foundation over-whitened skin glassy plastic texture or obvious cosmetic color blocks",
  },
  "camera-symmetrical": {
    zhPrompt: "对称构图以明确中轴组织主体、建筑线和左右视觉重量，透视消失点与镜头高度保持居中，细节可有少量真实差异而整体平衡稳定；避免仅把主体放中间却背景失衡、镜像复制痕迹、倾斜地平线或边缘裁切不一致",
    enPrompt: "symmetrical composition organized around a clear central axis with subject architecture and visual weight balanced left to right, centered vanishing point and camera height, while allowing small natural differences within an overall stable order; avoid merely centering the subject against an unbalanced background visible mirror duplication a tilted horizon or inconsistent edge crops",
  },
  "purpose-id-photo": {
    zhPrompt: "标准证件照用途，人物正面平视镜头，头肩完整、姿态端正、面部无遮挡，背景为均匀浅色且边缘分离清楚；使用柔和均匀照明还原真实肤色和五官比例，避免美颜变形、戏剧光、强景深、夸张表情、首饰遮挡或生成文字水印",
    enPrompt: "standard identification portrait with the person facing the camera at eye level, complete head and shoulders upright posture and unobstructed facial features against an even pale background with clean separation; use soft uniform light for accurate skin tone and proportions, avoiding beauty-filter distortion dramatic lighting shallow focus exaggerated expression obstructive jewelry text or watermark",
  },
  "purpose-poster-key-visual": {
    zhPrompt: "海报主视觉以单一强焦点、清楚阅读顺序和远距离可辨轮廓组织画面，依据标题与副文案预留连续干净的负空间，同时让主体动作或视线引导至排版区；保持上下左右安全边距，避免直接生成乱码文字、焦点分散、装饰堆满或关键主体被后续排版遮挡",
    enPrompt: "poster key visual organized around one strong focal point a clear reading order and a silhouette legible from distance, reserving continuous clean negative space for headline and supporting copy while pose or gaze leads toward that typography zone; maintain safe margins, avoiding generated gibberish text scattered focal points decorative overload or key subject areas that future layout would cover",
  },
  "color-warm": {
    zhPrompt: "暖色方案以琥珀、赭石、橙金和暖白建立主次，亮部温暖但肤色与白色物体仍保持可辨，中性深色负责稳定画面；控制整体色温来源与饱和度，避免整幅橙色滤镜、阴影发红、不同材质失去固有色或高光泛黄过曝",
    enPrompt: "warm palette led by amber ochre orange-gold and warm white with clear hierarchy, keeping skin and white objects distinguishable while neutral darks stabilize the frame; control the source and saturation of warmth, avoiding a uniform orange filter red-contaminated shadows lost local material color or yellow clipped highlights",
  },
  "color-cool": {
    zhPrompt: "冷色方案以蓝灰、青灰、冷白和深靛建立清晰层级，环境显得清醒宁静但人物肤色与暖色重点仍有自然分离；让阴影偏冷而非全部染蓝，避免单一蓝滤镜、灰脏低对比、肤色发青或所有材质颜色趋同",
    enPrompt: "cool palette structured with blue-gray cyan-gray cool white and deep indigo, creating a clear calm atmosphere while naturally separating skin and selected warm accents; let shadows lean cool without dyeing everything blue, avoiding a single blue filter muddy low contrast cyan skin or materials collapsing into one hue",
  },
  "material-fabric": {
    zhPrompt: "织物材质通过可辨的经纬、纱线粗细、绒毛方向和真实褶皱表现柔软度与重量，受力点、缝线和边缘厚度符合服装或软装结构；高光随织法和纤维变化，避免把布料做成光滑塑料、重复纹理贴图、无重力褶皱或穿模",
    enPrompt: "fabric material described through readable weave yarn thickness nap direction and physically plausible folds that communicate softness and weight, with stress points seams and edge thickness matching the garment or furnishing construction; highlights respond to fiber structure, avoiding smooth plastic cloth repeating texture maps weightless wrinkles or geometry intersections",
  },
  "material-ceramic": {
    zhPrompt: "陶瓷材质具有烧制后的细微不规则、合理壁厚与釉面粗糙度，亮釉形成受控高光和环境反射，哑光釉则保留柔和漫反射；边缘、底足与接触面结构可信，避免塑料光泽、玻璃般完全透明、无厚度薄片或随机裂纹覆盖",
    enPrompt: "ceramic material with subtle fired irregularity believable wall thickness and glaze roughness, glossy glaze producing controlled highlights and environmental reflection while matte glaze retains soft diffuse response; keep rims feet and contact surfaces structurally credible, avoiding plastic shine glass-like transparency paper-thin walls or random crackle covering every surface",
  },
  "expression-scared": {
    zhPrompt: "害怕神态由内眉抬起、眼睑紧张、瞳孔聚焦威胁方向和嘴唇轻张共同形成，呼吸、颈肩收缩与身体退让相互呼应；保留人物身份与五官比例，避免夸张凸眼、无缘由尖叫、整脸扭曲或仅用黑暗滤镜代替恐惧",
    enPrompt: "fearful expression built from raised inner brows tense eyelids pupils focused toward the threat and slightly parted lips, with breathing contracted shoulders and a subtle backward body response working together; preserve identity and facial proportions, avoiding bulging eyes an unmotivated scream full-face distortion or darkness used as a substitute for fear",
  },
  "pose-lying-supine": {
    zhPrompt: "仰躺姿势让后脑、肩胛、背部、骨盆和脚跟按表面软硬程度形成合理接触与受力，四肢自然展开或弯曲，胸腹透视服从镜头高度；衣物与头发受重力铺开，避免身体悬空、脊柱反折、手脚穿透地面或平躺却保持站立轮廓",
    enPrompt: "supine lying pose with the back of the head shoulder blades spine pelvis and heels making plausible contact according to surface softness, limbs naturally extended or bent and torso perspective matching camera height; clothing and hair spread under gravity, avoiding a floating body reversed spine hands or feet intersecting the ground or a standing silhouette pasted flat",
  },
  "hair-bob": {
    zhPrompt: "波波头以颌线至肩上的整齐长度包裹头骨，内外层次、后颈收束和发尾弧度清楚，左右可有轻微自然差异；发丝高光随曲面连续变化并保留少量碎发，避免头盔般硬壳、完全镜像、发尾齐切成平板或穿过脸颊",
    enPrompt: "bob haircut wrapping the skull at jaw-to-shoulder length with readable inner and outer layers a shaped nape and coherent curved ends, allowing slight natural asymmetry; strand highlights follow the rounded mass with a few flyaways, avoiding a helmet shell perfect mirroring ends cut into a flat board or hair intersecting the cheeks",
  },
  "expression-calm": {
    zhPrompt: "平静神态保持眉眼舒展、呼吸均匀和嘴唇自然闭合，视线有落点但没有紧张追踪，头颈与肩部处于稳定放松状态；以细微眼神和姿态传达安定感，避免空洞无表情、困倦垂头、僵硬凝视或强行添加微笑",
    enPrompt: "calm expression with open relaxed brows even breathing naturally closed lips and a gaze that has a clear resting point without tense tracking, supported by stable relaxed neck and shoulders; communicate composure through subtle eyes and posture, avoiding a vacant neutral face drooping sleepiness rigid staring or an imposed smile",
  },
  "character-elegant-slender": {
    zhPrompt: "修长优雅体态通过较长四肢、舒展颈肩、清楚腰胯转折和稳定重心呈现，比例纤细但关节、肌肉与骨骼结构仍符合真实人体；姿态线流畅且衣物随体型垂落，避免过度拉长、纸片腰、病态消瘦或头身比例失真",
    enPrompt: "elegant slender build expressed through relatively long limbs an open neck and shoulder line clear waist-to-hip transition and stable center of gravity, while joints musculature and skeletal structure remain anatomically credible; keep the gesture fluid and clothing draping with the body, avoiding extreme elongation a paper-thin waist unhealthy emaciation or distorted head-to-body proportion",
  },
  "makeup-red-lip": {
    zhPrompt: "红唇妆沿真实唇形精确上色，唇峰、嘴角与上下唇厚度保持自然，唇色可在正红、砖红或莓红中选择并与肤色协调；质地可哑光或缎光但不越界，避免荧光红、牙齿染色、嘴唇膨胀变形或整张脸同步泛红",
    enPrompt: "red-lip makeup applied precisely to the natural lip contour with believable cupid's bow corners and upper-lower volume, choosing true red brick red or berry red to harmonize with skin; finish may be matte or satin but stays within the lip edge, avoiding fluorescent red stained teeth inflated distorted lips or red contamination across the entire face",
  },
  "feature-soft-round-face": {
    zhPrompt: "柔和圆脸具有饱满但有骨骼支撑的面颊、较短下庭和圆润下颌线，颧骨、鼻唇与下巴转折自然连续；保留年龄与个体差异，避免把脸做成完美圆形、婴儿化五官、过度膨胀双颊或消除全部骨点",
    enPrompt: "soft round face with full but structurally supported cheeks a relatively short lower face and a rounded jawline, while cheekbone nasolabial and chin transitions remain natural and continuous; preserve age and individuality, avoiding a perfect circular head infantilized features overinflated cheeks or removal of every bony landmark",
  },
  "color-low-saturation": {
    zhPrompt: "低饱和配色将主色压入含灰但仍可区分的色阶，以明度、冷暖和材质差异维持层次，少量较纯颜色可作为视觉焦点；中性色保持干净，肤色不发灰，避免全局灰雾、颜色互相混脏、对比消失或简单降低透明度",
    enPrompt: "low-saturation palette moving primary hues into muted yet distinguishable ranges, preserving hierarchy through value temperature and material differences while allowing one restrained purer accent; keep neutrals clean and skin alive, avoiding a global gray veil muddy color mixing vanished contrast or the appearance of merely lowering opacity",
  },
  "clothing-sleeveless-top": {
    zhPrompt: "无袖上衣清楚呈现领口、肩线、袖窿和侧缝结构，布料围绕胸背与腋下形成合理张力，肩臂活动不被虚构布片遮挡；款式可贴身或宽松但边缘厚度一致，避免袖窿穿模、肩带凭空消失、腋下褶皱混乱或误生成短袖",
    enPrompt: "sleeveless top with clearly constructed neckline shoulder edge armholes and side seams, fabric tension responding plausibly around chest back and underarm while shoulder movement remains unobstructed; fitted or loose forms keep consistent edge thickness, avoiding intersecting armholes disappearing straps chaotic underarm folds or accidental short sleeves",
  },
  "color-high-saturation": {
    zhPrompt: "高饱和配色使用少量纯度高的主色和明确配色关系制造冲击，依靠中性色、面积比例与明度差让各色互不争抢；肤色和白色物体保持准确，避免所有颜色同时拉满、荧光溢色、暗部染脏或失去视觉主次",
    enPrompt: "high-saturation palette using a limited set of intense primary hues and clear color relationships for impact, controlled by neutral zones area ratios and value separation so colors do not compete equally; protect accurate skin and white objects, avoiding every hue pushed to maximum fluorescent bleeding contaminated shadows or loss of hierarchy",
  },
  "material-leather": {
    zhPrompt: "皮革材质呈现自然毛孔、细微皱褶、边缘厚度与使用磨损，拉伸区变亮、折弯处形成密集纹理，缝线和裁片结构符合制作方式；区分哑光、油蜡或漆皮光泽，避免塑料反光、重复压纹、无厚度表面或随机破损",
    enPrompt: "leather material showing natural pores fine creases edge thickness and use wear, with stretched zones becoming smoother and bends gathering denser texture while stitching and pattern pieces follow plausible construction; distinguish matte waxed or patent finishes, avoiding plastic glare tiled embossing thickness-free surfaces or random damage",
  },
  "clothing-off-shoulder": {
    zhPrompt: "露肩上衣的领缘横跨胸背并稳定停留在上臂或锁骨下方，弹性、褶裥或结构支撑解释其固定方式，肩颈轮廓完整清楚；衣片随抬臂产生合理位移，避免领口悬空、两侧高度矛盾、布料穿过手臂或误生成普通吊带",
    enPrompt: "off-shoulder top with a neckline spanning chest and back and resting plausibly on the upper arms or below the collarbones, supported by elastic gathering or internal structure that explains how it stays in place; fabric shifts credibly with raised arms, avoiding a floating neckline contradictory side heights cloth intersecting limbs or conversion into a camisole",
  },
  "material-metal": {
    zhPrompt: "金属材质依据粗糙度、加工方向和环境形成可信反射，拉丝纹沿单一方向延伸，抛光面保留清楚但不过曝的高光，边缘与接缝有合理厚度；区分钢、铝、铜等固有色，避免镜面复制场景、塑料银漆、随机划痕或无来源彩虹反光",
    enPrompt: "metal material producing believable reflections from roughness machining direction and surroundings, with brushed grain following one orientation polished areas holding crisp controlled highlights and edges and seams showing real thickness; distinguish steel aluminum and copper color, avoiding mirror-copy environments plastic silver paint random scratches or source-free rainbow reflections",
  },
  "expression-laughing": {
    zhPrompt: "自然大笑由张开的嘴形、抬起的面颊、眼周收紧和呼吸带动的头肩动作共同构成，牙齿、舌头与口腔暗部结构正确；笑容强烈但仍保留人物身份，避免复制牙齿、嘴角撕裂、双眼完全消失或只张嘴而面部其他区域静止",
    enPrompt: "natural laughter combining an open mouth raised cheeks eye crinkles and head-shoulder movement driven by breath, with correct teeth tongue and oral cavity structure; keep the expression strong while preserving identity, avoiding duplicated teeth torn mouth corners vanished eyes or an open mouth with the rest of the face frozen",
  },
  "hair-long": {
    zhPrompt: "长发从头皮分区连续生长，主发束沿肩背和重力方向垂落，前后层次、长度变化和与衣物的接触关系清楚；高光顺着发束而非整片涂亮，保留少量碎发，避免发量无限增殖、穿透身体、瀑布般平板或每根发丝同样清晰",
    enPrompt: "long hair growing continuously from readable scalp sections, primary masses falling along shoulders back and gravity with clear front-back layering length variation and contact with clothing; highlights follow strand groups rather than coating one sheet, with a few flyaways, avoiding infinite volume body intersections waterfall-flat slabs or every strand rendered equally sharp",
  },
  "hair-ponytail": {
    zhPrompt: "马尾由发根向真实扎点汇聚，皮筋附近具有收束张力，尾部重量、弧线和摆动方向随动作与重力变化，头顶仍保留头骨体积；碎发适量且不遮挡五官，避免马尾悬空、扎点缺失、发束穿透背部或形状像固定塑料管",
    enPrompt: "ponytail gathering hair roots toward a believable tie point with visible tension near the band, while tail weight curvature and swing respond to movement and gravity and the crown retains skull volume; keep flyaways restrained and facial features clear, avoiding a floating tail missing anchor hair intersecting the back or a rigid plastic-tube shape",
  },
  "expression-shy": {
    zhPrompt: "害羞神态通过短暂移开的视线、轻收下巴、克制浅笑和略向内的肩臂姿态表达，面颊可有自然轻微泛红但不覆盖整脸；动作细小且符合情境，避免低头到看不见脸、夸张双手捂脸、动漫腮红条或把害羞误成恐惧",
    enPrompt: "shy expression communicated through a briefly averted gaze slightly tucked chin restrained smile and subtly inward shoulder or arm posture, with only a faint natural cheek flush; keep gestures small and contextually believable, avoiding a face hidden completely downward exaggerated hands covering the face anime blush marks or confusion with fear",
  },
  "hair-short": {
    zhPrompt: "短发贴合头骨并通过顶部、侧区和后颈的长度差塑造轮廓，发旋、分缝与生长方向连续，耳际和鬓角边缘干净但保留自然碎发；避免头皮贴图感、每根发丝直立、左右完全复制或短发变成无结构毛球",
    enPrompt: "short hair following the skull with controlled length differences across crown sides and nape, continuous whorl parting and growth direction and clean ear and temple edges retaining a few natural flyaways; avoid a painted scalp every strand standing upright perfect bilateral duplication or an unstructured fuzzy sphere",
  },
  "character-musician": {
    zhPrompt: "音乐人形象通过与乐器或演出设备的正确接触、符合演奏动作的手型、稳定节拍姿态和真实舞台或排练环境建立身份，服装服务音乐类型但不依赖品牌；保留专注听觉反应，避免手指错位、乐器比例错误、道具悬空或用音符装饰代替职业表现",
    enPrompt: "musician identity established through correct contact with an instrument or performance equipment hand shapes suited to playing rhythmic posture and a credible stage or rehearsal setting, with wardrobe supporting the genre without brand dependence; retain attentive listening behavior, avoiding misplaced fingers wrong instrument scale floating props or music-note decoration standing in for the profession",
  },
  "makeup-fantasy": {
    zhPrompt: "幻想妆容围绕一个明确主题设计眼部、颧骨或额头的彩色图形，并让珠光、金属、鳞片或发光效果服从面部起伏和真实光源；保留眼口可读性与皮肤纹理，控制装饰数量，避免随机彩绘铺满整脸、左右结构冲突、贴片悬浮或遮盖人物身份",
    enPrompt: "fantasy makeup organized around one clear concept across eyes cheekbones or forehead, with color graphics pearlescence metallic accents scales or glow conforming to facial relief and the real light source; preserve readable eyes mouth and skin texture while limiting ornament count, avoiding random full-face paint conflicting bilateral structure floating appliques or loss of character identity",
  },
  "clothing-straight-pants": {
    zhPrompt: "直筒裤从臀部到裤脚保持近似稳定的裤管宽度，腰头、门襟、侧缝和裤线结构清楚，坐立行走时褶皱集中在胯部、膝部与脚背；布料垂坠符合材质重量，避免裤腿忽宽忽窄、两腿粘连、裤脚穿鞋或误生成紧身裤",
    enPrompt: "straight-leg trousers maintaining a nearly consistent width from hip to hem, with readable waistband fly side seams and crease lines and folds concentrating naturally at the crotch knees and shoe break during movement; drape follows fabric weight, avoiding legs that randomly taper or flare fused trouser tubes hems intersecting shoes or accidental skinny pants",
  },
  "clothing-shirt-tie-set": {
    zhPrompt: "衬衫领带套装包含结构正确的领座、翻领、门襟、袖口与领带结，领带沿胸前中线自然垂落并与领口尺寸匹配；布料褶皱服从肩臂动作，保持正式整洁但不过分僵硬，避免领带穿透领子、结位偏移、扣子错位或袖口消失",
    enPrompt: "formal shirt-and-tie set with correctly built collar stand points placket cuffs and knot, the tie falling along the chest centerline at a scale matching the collar; fabric folds respond to shoulder and arm movement while remaining neat but not rigid, avoiding a tie intersecting the collar displaced knots misaligned buttons or missing cuffs",
  },
  "clothing-shorts": {
    zhPrompt: "短裤清楚呈现腰头、裆部、左右裤管和裤脚厚度，长度与版型一致，坐下或抬腿时布料在胯部形成合理拉伸与褶皱；保持腿部遮挡关系和口袋位置，避免左右裤管融合、裆线缺失、裤脚穿透大腿或误生成短裙",
    enPrompt: "shorts with readable waistband crotch construction two separate legs and hem thickness, consistent length and cut, and plausible tension and folds at the hips when sitting or lifting a leg; preserve leg occlusion and pocket placement, avoiding fused openings a missing crotch seam hems intersecting thighs or conversion into a short skirt",
  },
  "clothing-long-sleeve": {
    zhPrompt: "长袖上衣的袖山、肩缝、肘部和袖口结构完整，袖长覆盖至手腕附近，手臂弯曲时褶皱沿肘窝和受力方向聚集；面料厚薄影响垂坠与轮廓，避免袖子与手臂粘连、袖口消失、左右长度矛盾或误生成短袖",
    enPrompt: "long-sleeve top with complete sleeve cap shoulder seam elbow shaping and cuff, extending naturally to the wrist and gathering folds along the inner elbow and force direction when the arm bends; fabric weight controls drape and silhouette, avoiding sleeves fused to arms missing cuffs contradictory lengths or accidental short sleeves",
  },
  "clothing-leather-pants": {
    zhPrompt: "皮裤以裁片、侧缝、腰头和膝部活动量构成真实版型，皮革在拉伸区呈连续高光、弯折处形成细密皱纹，厚度和摩擦感可见；控制反射方向并保留腿部结构，避免乳胶般镜面、塑料贴膜、无裆部结构或褶皱随机覆盖",
    enPrompt: "leather trousers built from believable panels side seams waistband and knee articulation, with smoother highlights across stretched zones and fine creasing at bends plus visible thickness and friction; control reflection direction while preserving leg structure, avoiding latex mirror shine plastic wrap a missing crotch construction or random wrinkles covering every surface",
  },
  "clothing-camisole": {
    zhPrompt: "吊带上衣由两条有固定点和合理宽度的肩带支撑，领口、胸省或弹性结构解释贴合方式，衣身与腰线随动作自然垂落；肩带不能悬空或穿过头发，避免左右连接点错位、领口贴图化、腋下穿模或误生成无袖背心",
    enPrompt: "camisole supported by two straps with believable width and attachment points, with neckline darts or elastic structure explaining the fit and the body falling naturally around waist movement; straps must not float or pass through hair, avoiding mismatched anchors a texture-only neckline underarm intersections or conversion into a broad-shouldered tank top",
  },
  "clothing-pencil-skirt": {
    zhPrompt: "铅笔裙从腰胯贴合后沿大腿收窄至膝部附近，腰省、侧缝和后开衩或活动褶保证行走空间，坐姿时前摆产生合理横向张力；轮廓利落但不束缚人体结构，避免裙摆粘腿、双腿融合、开衩位置错误或误生成鱼尾裙",
    enPrompt: "pencil skirt fitted through waist and hips then narrowing along the thighs toward the knee, with darts side seams and a back vent or movement pleat allowing walking and plausible horizontal tension when seated; keep a clean silhouette without erasing anatomy, avoiding fabric glued to legs fused limbs misplaced vents or conversion into a mermaid skirt",
  },
  "scene-underground-station": {
    zhPrompt: "地下车站场景以站台边缘、轨道、顶棚结构、立柱和连续导向灯建立深度，消失点与列车运行方向一致，人物尺度服从真实站台宽度；材质包含磨损地面、金属与玻璃反射，避免轨道穿过站台、无出口封闭空间、乱码标牌或结构比例失真",
    enPrompt: "underground station scene using platform edge tracks ceiling systems columns and repeated wayfinding lights to establish depth, with vanishing point aligned to train direction and people scaled to a believable platform width; include worn flooring metal and glass response, avoiding tracks crossing the platform sealed spaces with no exits gibberish signage or impossible structural proportions",
  },
  "scene-starry-clear-night": {
    zhPrompt: "晴朗星夜具有低湿度透明天空、由地平线到天顶逐渐加深的夜色和符合曝光的星点密度，月光或微弱环境光只勾勒地景轮廓；星座分布自然且远离城市强光，避免满天等大白点、银河与月亮同时过曝、白昼地景或梦幻粒子替代真实星空",
    enPrompt: "clear starry night with low-humidity transparency a sky that deepens from horizon to zenith and star density appropriate to exposure, while moonlight or faint ambient light only outlines the landscape; keep stellar distribution natural and away from strong city glow, avoiding equal-sized white dots everywhere an overexposed moon and Milky Way daylight terrain or fantasy particles standing in for stars",
  },
  "scene-desert-dunes": {
    zhPrompt: "沙漠沙丘由主风向塑造连续迎风坡、锐利沙脊和较陡背风坡，前中远景通过尺度、空气透视与色温变化展开，少量足迹或植被提供尺度；光线强调细沙纹而不过锐，避免每座沙丘形状相同、海浪质感、随机岩石堆或无依据绿洲",
    enPrompt: "desert dunes shaped by one prevailing wind into continuous windward slopes sharp crests and steeper slip faces, with foreground middle distance and horizon separated by scale atmospheric perspective and temperature shifts plus sparse tracks or vegetation for scale; reveal fine sand ripples without oversharpening, avoiding identical dunes ocean-wave texture random rock piles or an unmotivated oasis",
  },
  "scene-grassland": {
    zhPrompt: "草原场景以连续地形起伏、不同高度草层和远处低矮地平线表现开阔尺度，风向通过草浪和云影统一可见，近景保留少量花草与土壤细节；色彩随距离降低饱和度，避免均匀绿色地毯、重复草贴图、森林密度或缺乏落脚面的漂浮人物",
    enPrompt: "grassland scene conveying open scale through rolling terrain layered grasses of varied height and a low distant horizon, with one wind direction visible in grass waves and cloud shadows and limited flowers and soil detail in the foreground; reduce saturation with distance, avoiding a uniform green carpet tiled grass texture forest density or figures floating without grounded contact",
  },
  "scene-monsoon-jungle": {
    zhPrompt: "季风雨林具有多层阔叶植被、藤蔓、湿润树干和被雨雾削弱的远景，降雨在叶面形成水珠、滴流与深浅不同的湿痕，林下光线柔暗但仍有空间通道；避免热带植物随机堆满、统一绿色滤镜、无来源体积光或地面干燥无积水",
    enPrompt: "monsoon jungle with layered broadleaf canopy vines wet trunks and distance softened by rain haze, rainfall producing droplets runoff and varied wet marks across leaves while the forest floor remains dim yet spatially navigable; avoid random tropical foliage filling every gap a uniform green filter source-free god rays or a dry ground with no pooled water",
  },
  "scene-river-valley": {
    zhPrompt: "河谷场景让河道沿地势最低处蜿蜒，阶地、冲积岸线与两侧山坡共同指向纵深，水面反射受天空、流速和岸边遮挡控制；植被密度随水源变化并提供尺度，避免河流爬坡、两岸镜像对称、水面像玻璃贴片或山谷没有出口",
    enPrompt: "river valley with the channel winding along the lowest terrain, terraces alluvial banks and flanking slopes guiding depth, while reflections respond to sky current and bank occlusion; vegetation density changes with access to water and supplies scale, avoiding a river flowing uphill mirrored banks a glass-sheet surface or a valley with no geographic outlet",
  },
  "scene-spring-rain": {
    zhPrompt: "春日细雨由细密短雨丝、湿润空气和新生植被上的水珠表现，雨量轻且方向统一，地面只形成浅薄反光与零散小水洼；柔和阴天光保留嫩绿、花色与肤色，避免暴雨瀑布、夸张闪电、整幅蓝灰滤镜或地面完全干燥",
    enPrompt: "gentle spring rain shown through fine short streaks moist air and droplets on new foliage, with light volume and one coherent direction plus thin pavement sheen and scattered shallow puddles; soft overcast light preserves fresh greens blossoms and skin, avoiding torrential curtains dramatic lightning a uniform blue-gray filter or completely dry ground",
  },
  "camera-macro": {
    zhPrompt: "微距镜头以接近一比一的放大率呈现微小主体，焦点精确落在关键纹理或眼部，景深极浅并沿真实焦平面渐进衰减；控制工作距离、反光与背景散景，避免整幅同时锐利、无尺度参照、数字裁切伪微距或主体边缘抠图化",
    enPrompt: "macro-lens view approaching life-size reproduction of a small subject, with focus precisely placed on the key texture or eye and extremely shallow depth falling gradually along a real focus plane; control working distance reflection and background bokeh, avoiding edge-to-edge sharpness no scale cue a digitally cropped pseudo-macro or cutout-looking subject edges",
  },
  "camera-profile-view": {
    zhPrompt: "侧面视角让主体主要结构与镜头光轴近似垂直，人物鼻梁、唇线、下颌与耳部形成清楚单侧轮廓，身体朝向和视线保持一致；保留少量空间深度而非完全扁平，避免同时出现两只正面眼睛、面部扭转、肩膀正对镜头或剪影失去关键特征",
    enPrompt: "profile view placing the subject's primary plane nearly perpendicular to the optical axis, with a readable single-side contour of nose lips jaw and ear and consistent body and gaze direction; retain some spatial depth rather than flattening completely, avoiding two frontal eyes a twisted face shoulders square to camera or a silhouette losing identifying features",
  },
  "camera-golden-spiral": {
    zhPrompt: "黄金螺旋构图让主体焦点落在螺旋收束区，环境轮廓、道路、肢体或光线沿渐进弧线引导视线由大到小进入核心；元素密度随曲线收紧且边缘留有呼吸空间，避免机械绘制可见螺旋、所有物体排成圆圈或焦点落在无关空白",
    enPrompt: "golden-spiral composition placing the focal subject near the spiral's convergence while environmental contours roads limbs or light guide the eye through a progressively tightening curve from broad field to detail; density increases toward the focus with breathing room at edges, avoiding a visibly drawn spiral every object arranged in a circle or convergence on irrelevant empty space",
  },
  "camera-birds-eye": {
    zhPrompt: "鸟瞰俯拍从主体正上方或高空近垂直向下观察，地面成为主要构图平面，道路、屋顶、人群和影子按真实尺度组织图案；透视压缩但高度关系仍可辨，避免把普通高机位误作垂直鸟瞰、建筑侧面同时完整可见或人物方向混乱",
    enPrompt: "bird's-eye overhead view looking nearly straight down from above so the ground becomes the primary compositional plane and roads roofs crowds and shadows form patterns at believable scale; perspective is compressed but height relationships remain readable, avoiding a merely high oblique angle full facades visible at once or people with contradictory orientations",
  },
  "camera-radial-composition": {
    zhPrompt: "放射构图以一个明确核心为起点，让建筑线、物体排列、光束或动作方向向外扩散或向内汇聚，形成强烈聚焦与节奏；放射线来源必须属于场景并保持透视一致，避免无意义装饰射线、多个竞争中心、边缘过密或中心被主体遮死",
    enPrompt: "radial composition organized around one explicit center with architecture object placement light or action expanding outward or converging inward to create focus and rhythm; radiating directions must arise from the scene and obey one perspective, avoiding decorative rays with no source multiple competing centers overcrowded edges or a center completely blocked by the subject",
  },
  "camera-tracking-motion": {
    zhPrompt: "跟拍动感让镜头与移动主体保持近似同步，主体关键部位相对清晰，背景沿运动反方向形成连续方向性拖影，前景掠过可加强速度；快门效果与步态或载具速度一致，避免主体整体糊掉、拖影方向冲突、静止姿势配高速背景或数字径向模糊",
    enPrompt: "tracking-motion shot with the camera moving approximately alongside the subject so key body or vehicle features stay relatively sharp while the background streaks continuously opposite the travel direction and passing foreground may strengthen speed; shutter behavior matches gait or vehicle velocity, avoiding a fully blurred subject conflicting streak directions a static pose against a racing background or generic radial blur",
  },
  "clothing-tank-top": {
    zhPrompt: "背心具有较宽肩带、清楚领口和完整袖窿，衣身围绕胸背与腰部形成合理贴合或垂坠，肩带受力点与侧缝位置稳定；边缘厚度随面料变化，避免肩带变成细吊带、袖窿穿透腋下、领口贴图化或左右结构不一致",
    enPrompt: "tank top with broad shoulder straps a readable neckline and complete armholes, the body fitting or draping plausibly around chest back and waist with stable strap anchors and side seams; edge thickness follows fabric type, avoiding conversion into thin camisole straps underarm intersections a texture-only neckline or contradictory left-right construction",
  },
  "clothing-mermaid-skirt": {
    zhPrompt: "鱼尾裙从腰胯至膝部贴合并在小腿下方有结构地展开，扩摆起点、裁片接缝和裙摆重量清楚，行走时褶皱与拖尾服从重力；保留双腿活动空间，避免膝部以下突然爆开、裙摆悬浮、身体与裙身融合或误生成普通长裙",
    enPrompt: "mermaid skirt fitted from waist and hips through the knees then structurally flaring below the calves, with a readable flare point panel seams and weighted hem whose folds and train obey gravity during movement; preserve leg mobility, avoiding an abrupt explosion below the knees a floating hem body-skirt fusion or conversion into an ordinary long skirt",
  },
  "clothing-pleated-skirt": {
    zhPrompt: "百褶裙由规律但不完全僵硬的连续褶片构成，褶线从腰头向下展开，转身或行走时内外褶依次张合并保持裙摆厚度；面料决定褶皱锐度，避免褶数随机变化、纹理贴图代替立体折叠、裙摆穿腿或每条褶完全平行无运动",
    enPrompt: "pleated skirt formed from regular yet non-rigid repeated folds descending from the waistband, inner and outer pleats opening in sequence during turning or walking while retaining hem thickness; fabric controls fold sharpness, avoiding random pleat counts printed texture replacing dimensional folds a hem intersecting legs or perfectly parallel pleats with no motion",
  },
  "clothing-kimono": {
    zhPrompt: "和服以左襟压右襟的交叠前片、直线裁片、宽袖和腰带构成，领口、袖付与下摆比例遵循真实穿着逻辑，纹样随布片连续但不过度堆满；布料垂直下落且动作受袖幅约束，避免左右襟反置、腰带悬浮、混入其他服饰结构或挪用特定家纹",
    enPrompt: "kimono constructed from straight panels with the left front crossing over the right broad sleeves and an obi, keeping plausible collar sleeve attachment and hem proportions while patterns flow across cloth pieces without filling every area; fabric falls vertically and movement respects sleeve width, avoiding reversed overlap a floating obi mixed unrelated costume structures or copied family crests",
  },
  "clothing-sweatshirt": {
    zhPrompt: "卫衣具有柔软针织面料、罗纹领口或连帽结构、落肩或常规肩线以及收口袖口和下摆，布料在肘部与腹部形成松弛褶皱；厚度与内层空气感真实，避免像硬塑料外套、袖口消失、帽子与头部融合或误生成薄T恤",
    enPrompt: "sweatshirt with soft knit fabric a ribbed neck or hood structure dropped or regular shoulders and gathered cuffs and hem, forming relaxed folds at elbows and torso; thickness and trapped-air volume remain believable, avoiding a rigid plastic jacket missing cuffs a hood fused to the head or conversion into a thin T-shirt",
  },
  "clothing-cape": {
    zhPrompt: "披肩从肩颈或明确扣点悬垂，覆盖背部与上臂但保留前方开口，边缘、里衬和重量随转身或风向产生连续弧面；固定方式必须可见且不勒住颈部，避免布料无支点悬浮、变成长袖外套、穿过手臂或形成不合理巨大翼片",
    enPrompt: "cape or shoulder mantle suspended from the neck-shoulder line or visible fastening points, covering back and upper arms while retaining a front opening, with edge lining and weight forming continuous arcs during turns or wind; attachment must be readable without choking the neck, avoiding unsupported floating cloth conversion into a sleeved coat arm intersections or implausibly huge wings",
  },
  "clothing-cargo-pants": {
    zhPrompt: "工装裤以耐磨面料、宽松裤管、加固膝部和位于大腿外侧的立体袋构成，袋盖、缝线与容量符合实际使用，腰胯和膝部褶皱支持蹲走动作；控制口袋数量与对称性，避免满腿随机小包、袋体悬浮、裤管粘连或误生成战术装甲",
    enPrompt: "cargo trousers built from durable fabric relaxed legs reinforced knees and dimensional thigh pockets whose flaps stitching and capacity are functional, with hip and knee folds supporting crouching and walking; control pocket count and symmetry, avoiding random pouches covering the legs floating pockets fused trouser tubes or conversion into tactical armor",
  },
  "clothing-neckerchief": {
    zhPrompt: "领巾围绕颈部或衣领自然折叠，结点、两端长度和布料厚度清楚，松紧留出呼吸空间并随风或动作产生轻微摆动；领巾配色与服装协调但保持辨识度，避免结点悬空、布条穿过下巴、变成领带或产生多余重复尾端",
    enPrompt: "neckerchief folded naturally around the neck or collar with a readable knot two controlled ends and believable fabric thickness, leaving breathing room and moving subtly with wind or action; color coordinates with the outfit while remaining distinct, avoiding a floating knot cloth intersecting the chin conversion into a tie or duplicated extra tails",
  },
  "purpose-icon": {
    zhPrompt: "图标用途要求主体在小尺寸下仍能一眼识别，以单一核心轮廓、有限内部细节和稳定边距居中组织，背景与主体明度对比分明；形状适应方形或圆角裁切，避免细碎纹理、可读文字、多个竞争物体、贴边元素或缩小后消失的弱对比",
    enPrompt: "icon-purpose image remaining instantly recognizable at small size through one central silhouette limited internal detail stable padding and clear value contrast between subject and background; shape must survive square or rounded-square cropping, avoiding fine texture readable text multiple competing objects edge-touching elements or weak contrast that disappears when reduced",
  },
  "purpose-exploded-view": {
    zhPrompt: "物品拆分视图沿清楚中心轴或装配方向依次分离零件，所有部件保持原比例、朝向与对应位置，间距足以看清连接关系但不改变结构；可用细引导线辅助对齐，避免遗漏部件、重复零件、连接顺序错误、无依据内部结构或爆炸式随机飞散",
    enPrompt: "exploded product view separating components sequentially along a clear central axis or assembly direction while preserving original scale orientation and corresponding position, with spacing sufficient to read connections without redesigning the object; fine guide lines may support alignment, avoiding missing or duplicated parts incorrect assembly order invented internals or random explosive scattering",
  },
  "purpose-product-shot": {
    zhPrompt: "商业产品图以准确外形、材质和色彩为首要目标，主体完整可见并与背景清楚分离，棚拍主光、补光与轮廓光共同控制高光和接触阴影；预留版式空间但不生成文字，避免透视变形、包装信息乱码、材质塑料化、悬浮无落点或装饰抢过产品",
    enPrompt: "commercial product image prioritizing accurate shape material and color, with the complete object clearly separated from the background and studio key fill and rim lights controlling highlights and contact shadow; reserve layout space without generating text, avoiding perspective distortion gibberish packaging plasticized materials unsupported floating or decoration overpowering the product",
  },
  "purpose-social-cover": {
    zhPrompt: "社媒封面按照横向安全区组织主体，在桌面端和移动端不同裁切下仍保留核心信息，焦点偏离头像或界面遮挡区域，并预留简洁标题空间；轮廓在缩略尺寸可辨，避免主体贴边、重要内容只在极侧、生成乱码文字或细节密度过高",
    enPrompt: "social-media cover composed for a wide safe area so the core subject survives desktop and mobile crops, with focus kept away from avatar or interface overlays and clean room reserved for a headline; silhouette stays legible at thumbnail size, avoiding edge-hugging subjects essential content placed only at extremes generated gibberish or excessive detail density",
  },
  "purpose-portrait": {
    zhPrompt: "写真用途以人物身份、神态和姿态为核心，面部焦点准确、肤质真实，环境与服装共同支持叙事而不抢主体；构图保留头顶、关节和身体裁切的合理位置，光线塑造五官但不过度美颜，避免肢体截断失当、背景穿头、塑料皮肤或五官改变",
    enPrompt: "portrait-purpose image centered on identity expression and pose with precise facial focus and believable skin, while environment and wardrobe support the story without competing; crop head joints and body at intentional locations and use light to model features without excessive beautification, avoiding awkward limb cuts background tangencies plastic skin or altered facial identity",
  },
  "purpose-character-sheet": {
    zhPrompt: "角色设定图在统一网格中展示同一角色的主全身形象、必要角度、表情或局部细节，所有视图保持五官、体型、服装和配色一致；背景简洁并留有注释区但不生成乱码，避免不同视图变成不同人物、姿势遮挡设计、比例漂移或重复无意义小图",
    enPrompt: "character design sheet arranging one primary full-body figure and necessary angle expression or detail callouts on a consistent grid, with facial identity body type costume and palette matching across every view; keep the background clean with annotation space but no gibberish, avoiding different people across views poses hiding the design drifting proportions or redundant meaningless thumbnails",
  },
  "purpose-environment-concept": {
    zhPrompt: "场景概念图清楚说明空间功能、行走路径、地标、尺度和前中后景关系，光线与天气服务世界观并突出一个主要视觉焦点；材质和建筑细节集中在关键区域，其余概括，避免只画氛围而无法施工、尺度混乱、道路无出口或全景细节同等密集",
    enPrompt: "environment concept image clearly communicating spatial function circulation landmarks scale and foreground-middle-distance-background relationships, with light and weather supporting the world and one primary focal point; concentrate material and architectural detail in key areas while simplifying the rest, avoiding mood-only scenery impossible to build inconsistent scale roads with no destination or equal detail everywhere",
  },
  "purpose-turnaround": {
    zhPrompt: "三视图用途在同一基线和比例尺下展示正面、严格侧面与背面，角色保持中立站姿、统一头身比例、五官、发型和服装结构，四肢不遮挡关键轮廓；背景与光线一致，避免透视角度混入、视图高度不齐、左右细节矛盾或每幅生成不同角色",
    enPrompt: "turnaround sheet showing front strict side and back views on one baseline and scale with a neutral stance and consistent proportions identity hairstyle and costume construction, limbs positioned to reveal key silhouettes; keep background and lighting uniform, avoiding perspective three-quarter views mismatched heights contradictory left-right details or a different character in each panel",
  },
  "lighting-golden-hour": {
    zhPrompt: "黄金时刻光来自接近地平线的低角度太阳，形成温暖主光、较长投影和被天空冷光轻填的阴影，空气中可有克制金色散射；高光柔和滚降并保留肤色与白色，避免整幅橙滤镜、太阳位置与影子矛盾、过曝轮廓或虚假镜头光斑",
    enPrompt: "golden-hour illumination from a low sun near the horizon creating a warm key long cast shadows and shadows gently filled by cooler sky light with restrained golden atmospheric scatter; highlights roll off softly while skin and whites remain distinct, avoiding a uniform orange filter contradictory sun and shadow directions clipped rim light or artificial lens flares",
  },
  "lighting-stage-spotlight": {
    zhPrompt: "舞台追光以单一可追踪光束锁定表演者，光斑边缘由灯具焦距形成适度软硬变化，主体明亮而舞台其余区域逐渐落入暗部；空气微粒可显示有限光路，避免多个无来源光圈、脸部过曝、背景全黑无层次或追光偏离人物",
    enPrompt: "stage follow-spot using one traceable beam locked onto the performer, with beam-edge softness controlled by fixture focus and the subject bright while the rest of the stage falls gradually into darkness; limited haze may reveal the path, avoiding multiple source-free circles clipped facial highlights a featureless black background or a spotlight missing the performer",
  },
  "light-stained-glass": {
    zhPrompt: "彩窗投影光让阳光穿过有铅条分隔的彩色玻璃，在墙面、地面或人物上形成带透视的彩色投影，色块边缘随距离适度柔化并保留窗格结构；颜色叠加服从光学混合，避免贴纸般平涂、无窗来源彩斑、霓虹辉光或投影方向与窗户冲突",
    enPrompt: "stained-glass light passing sunlight through colored panes divided by lead cames to cast perspective-aware color shapes across walls floor or subject, with edges softening appropriately over distance while window structure remains recognizable; overlaps follow optical mixing, avoiding sticker-like flat fills color patches with no window source neon glow or projection direction contradicting the window",
  },
  "light-red-blue-strobe": {
    zhPrompt: "红蓝警示光由两侧或交替闪烁的真实警灯提供，在人物、车辆和湿润表面形成方向明确的红蓝交替反射，中性暗部仍保留结构；可有轻微曝光差但不覆盖全部色彩，避免红蓝均匀劈脸、无光源霓虹、肤色完全丢失或两组影子方向混乱",
    enPrompt: "red-blue emergency strobe motivated by real alternating beacons from distinct directions, creating directional red and blue reflections on people vehicles and wet surfaces while neutral shadows retain structure; slight exposure variation is acceptable without replacing all local color, avoiding an even split-color face source-free neon lost skin tone or conflicting shadow directions",
  },
  "lighting-underwater-caustics": {
    zhPrompt: "水下焦散光由水面波纹折射阳光，在主体和水底形成缓慢移动的弯曲亮纹，光纹尺度随深度增大、对比随浑浊度降低，并伴随整体蓝绿吸收；保留水体悬浮颗粒与方向性，避免静态白色贴图、陆地场景无水焦散、亮纹过曝或全画面同一密度",
    enPrompt: "underwater caustic light created by surface ripples refracting sunlight into slowly moving curved highlights across subjects and the floor, with pattern scale increasing with depth contrast falling with turbidity and overall blue-green absorption; retain suspended particles and directionality, avoiding a static white texture caustics in a dry scene clipped highlights or identical density across the frame",
  },
  "lighting-laser-beams": {
    zhPrompt: "激光束从可见发射器沿笔直光路穿过烟雾或微粒，仅在散射介质中显示细窄光柱，并在接触表面形成小而明亮的落点；颜色和反射受环境控制，避免光束无来源、在清洁空气中像实体棍棒、随意弯曲、穿透不透明物体或满屏交叉遮挡主体",
    enPrompt: "laser beams originating from visible emitters and traveling along straight paths through haze or particles, appearing as narrow shafts only where scattering medium exists and ending in small bright contact points on surfaces; color and reflection respond to the environment, avoiding source-free beams solid rods in clean air arbitrary curves passage through opaque objects or a screen-filling lattice obscuring the subject",
  },
  "lighting-lantern": {
    zhPrompt: "灯笼光来自半透明罩体内部的暖色小光源，纸、纱或玻璃将亮度柔化并在近处人物与墙面形成渐弱暖光，远处仍保留环境冷色；灯笼自身高光不过曝且结构可见，避免像发光球、整间空间均匀橙化、无接触阴影或火焰穿出罩体",
    enPrompt: "lantern light motivated by a small warm source inside a translucent paper fabric or glass enclosure, diffusing onto nearby faces and walls with natural falloff while distant ambient color remains cooler; preserve the lantern structure without clipping, avoiding a featureless glowing orb uniform orange illumination across the whole room missing contact shadows or flame protruding through the shade",
  },
  "lighting-projector-beam": {
    zhPrompt: "投影机光束从可见镜头投向屏幕或墙面，在空气微尘中形成逐渐扩展的光锥，投影区域亮度高于环境但仍保留墙面纹理和边缘失焦；人物遮挡时产生符合位置的影子，避免无设备光柱、投影穿过身体、图像漂浮离墙或屏幕过曝纯白",
    enPrompt: "projector beam expanding from a visible lens toward a screen or wall as a widening cone revealed by fine airborne dust, with the projected area brighter than the room yet retaining wall texture and edge defocus; people crossing it cast positionally correct shadows, avoiding a beam with no device projection passing through bodies imagery floating off the wall or a clipped white screen",
  },
  "pose-arms-crossed": {
    zhPrompt: "双臂抱胸时左右前臂在胸前自然交叠，手掌分别收于对侧上臂附近，肩部略向内但颈部放松，肘部高度符合人物情绪与体型；保持手指数目和遮挡关系清楚，避免手臂穿胸、双手消失、肘关节反折或姿态僵硬如捆绑",
    enPrompt: "arms-crossed pose with forearms naturally overlapping across the chest and each hand resting near the opposite upper arm, shoulders slightly inward but neck relaxed and elbow height matching mood and build; preserve finger count and occlusion, avoiding arms intersecting the torso vanished hands reversed elbows or a rigid pose that looks bound",
  },
  "pose-back-to-back": {
    zhPrompt: "背靠背互动让两个人的肩胛或上背在同一接触点承重，身体朝相反方向但脚下各自保持稳定重心，身高差和服装厚度影响接触位置；可通过视线与姿态表达关系，避免背部留出不合理空隙、身体互相穿透、双脚悬空或比例突然变化",
    enPrompt: "back-to-back interaction with two people sharing weight at one believable shoulder-blade or upper-back contact point, facing opposite directions while each maintains a stable stance and height and clothing thickness affect the contact level; use gaze and posture to express relationship, avoiding an impossible gap body intersections floating feet or sudden scale changes",
  },
  "pose-holding-hands": {
    zhPrompt: "牵手动作让两人的对应手掌或手指在合理高度真实接触，手腕、肘部和肩线沿同一受力链自然延伸，距离与步伐允许手臂放松；明确哪只手相连并保留指间结构，避免多余手指、左右手错接、手掌融合、手臂过长或身体距离与臂长矛盾",
    enPrompt: "holding-hands interaction with corresponding palms or fingers meeting at a plausible height, wrists elbows and shoulders forming one relaxed kinetic chain and spacing and stride allowing natural arm length; make the connected hands unambiguous, avoiding extra fingers mismatched left-right hands fused palms elongated arms or body distance contradicting reach",
  },
  "pose-side-sitting": {
    zhPrompt: "侧坐姿势让骨盆稳定落在座面，双腿转向同一侧或前后错开，躯干通过腰背轻微反向调整保持平衡，靠近镜头的肢体遮挡关系清楚；衣物随髋膝弯曲产生褶皱，避免骨盆悬空、双腿融合、膝关节方向错误或坐面穿过身体",
    enPrompt: "side-sitting pose with the pelvis grounded on the seat, both legs directed to one side or staggered and the torso counterbalancing subtly through waist and back, with clear near-far limb occlusion; clothing folds around bent hips and knees, avoiding a floating pelvis fused legs misoriented knee joints or the seat intersecting the body",
  },
  "pose-looking-back": {
    zhPrompt: "回眸站姿以身体主要朝前、头颈和上躯干适度旋转向后形成，视线准确指向后方目标，肩线与骨盆仍保留可承受的扭转范围；头发和衣领响应转身方向，避免颈部旋转过度、面部与后脑混合、双肩完全翻转或脚位与身体朝向冲突",
    enPrompt: "looking-back standing pose with the body continuing forward while head neck and upper torso rotate moderately toward a rear target, gaze accurately aligned and shoulder-pelvis twist remaining anatomically possible; hair and collar respond to the turn, avoiding an overrotated neck blended face and back of head fully reversed shoulders or feet contradicting body direction",
  },
  "pose-skateboard-pose": {
    zhPrompt: "滑板动作让前后脚明确踩在板面与轮轴附近，膝髋弯曲吸收冲击，躯干和手臂围绕运动方向保持动态平衡，板身倾角与轮子接地关系可信；可表现滑行或腾跃但必须有受力逻辑，避免脚底离板却无跳跃、轮子穿地、板体弯折或人物静止摆拍",
    enPrompt: "skateboard pose with front and rear feet clearly planted near appropriate deck and truck zones, knees and hips bent to absorb force and torso and arms balancing around travel direction, with credible deck tilt and wheel-ground contact; cruising or airborne action must retain force logic, avoiding feet detached without a jump wheels intersecting ground a bent board or a static fashion pose",
  },
  "pose-spinning": {
    zhPrompt: "旋转动作围绕清楚的身体轴线展开，支撑脚或腾空中心提供转动来源，肩、髋、手臂与衣摆沿同一旋向依次滞后，头部可短暂定点保持视线；运动模糊只出现在快速边缘，避免上下身反向无受力、双脚同时固定、裙摆随机炸开或主体整体糊掉",
    enPrompt: "spinning pose organized around a clear body axis with a supporting foot or airborne center generating rotation, shoulders hips arms and garments trailing sequentially in one direction and the head optionally spotting a target; motion blur appears only at fast edges, avoiding unsupported opposite torso rotation both feet fixed random skirt explosion or the entire subject blurred away",
  },
  "pose-hugging": {
    zhPrompt: "拥抱动作让双方胸肩距离、手臂环绕路径和手掌落点符合身高与关系，接触区域产生轻微衣物压缩，头部自然错开避免碰撞；重心可以共享但双脚仍有支撑，避免手臂穿透身体、手掌凭空消失、脸部融合、人物比例变化或只有靠近而没有真实接触",
    enPrompt: "hugging interaction with chest and shoulder distance arm paths and hand placement matching height and relationship, slight garment compression at contact and heads naturally offset to avoid collision; weight may be shared while feet remain supported, avoiding arms through bodies disappearing hands fused faces changing scale or figures merely standing close without contact",
  },
  "scene-rooftop": {
    zhPrompt: "城市天台场景包含女儿墙、设备机组、通风管、出入口和可辨认的楼顶材质，远处天际线与所在建筑高度形成真实视差；人物活动区保留安全落脚面，风与光线符合高处环境，避免没有护栏的随机平台、设备比例失真、城市背景贴图化或边缘无故悬空",
    enPrompt: "urban rooftop scene including parapets service units vents access structures and readable roof materials, with distant skyline parallax consistent with the building height; preserve safe walkable areas and high-altitude wind and light cues, avoiding a random platform with no protection incorrectly scaled equipment a pasted city backdrop or unsupported floating edges",
  },
  "scene-cozy-bedroom": {
    zhPrompt: "温馨卧室以床、床头柜、衣柜或书桌建立可使用的动线，床品褶皱、织物、木材和个人小物体现真实生活痕迹，窗光与局部暖灯形成柔和层次；保持空间整洁但不样板化，避免家具互相穿透、床铺比例错误、满屋装饰堆积或统一橙色滤镜",
    enPrompt: "cozy bedroom with a usable circulation path organized by bed bedside storage wardrobe or desk, believable bedding folds textiles wood and restrained personal traces, and layered window light with local warm lamps; keep the room tidy but lived in, avoiding intersecting furniture wrong bed scale decorative clutter covering every surface or a uniform orange filter",
  },
  "scene-overcast-rooftops": {
    zhPrompt: "阴天屋顶场景由连续灰白云层提供大面积柔和漫射光，屋瓦、金属顶与远处建筑的反差随距离逐渐降低，潮湿空气可让材质略暗但不必下雨；色温中性偏冷且阴影仍有方向，避免把阴天做成浓雾、天空纯白无层次、全景灰脏或地面出现无来源强硬投影",
    enPrompt: "overcast rooftop scene lit by broad diffuse light from layered gray-white cloud cover, with tiled metal and distant roofs losing contrast progressively through moist air while surfaces may darken slightly without active rain; keep a neutral-cool temperature and faint directional shadow, avoiding dense fog a blank white sky muddy global gray or hard shadows with no source",
  },
  "scene-light-drizzle-alley": {
    zhPrompt: "小巷微雨场景以窄巷透视、连续檐口、墙面湿痕和浅薄路面反光建立空间，细雨方向统一，排水沟与零散水滴说明降水正在发生；店面或住宅细节保持克制，避免暴雨水幕、镜面街道、乱码招牌、雨丝穿过屋檐或巷道没有出口",
    enPrompt: "light-drizzle alley built from narrow perspective continuous eaves wet wall marks and a thin pavement sheen, with one rain direction plus gutters and scattered droplets confirming active precipitation; keep shop or residential detail restrained, avoiding a torrential curtain mirror-like street gibberish signs rain passing through roofs or an alley with no exit",
  },
  "scene-volcanic-lava-field": {
    zhPrompt: "火山熔岩地包含冷却形成的黑色绳状或块状熔岩、仍在发红的裂隙、热空气扰动和远处火山地貌，亮度与温度由裂隙向外衰减；地表崎岖且尺度明确，避免整片像橙色河流、人物直接站在熔岩上、无烟热却满屏火焰或岩石重复贴图",
    enPrompt: "volcanic lava field combining cooled black ropy or blocky lava with red-hot fissures heat distortion and distant volcanic terrain, brightness and temperature falling away from cracks; keep the ground rugged with readable scale, avoiding an entire orange river people standing directly on molten rock screen-filling flames with no heat or smoke or tiled stone texture",
  },
  "scene-night-market": {
    zhPrompt: "夜市街景以连续摊位、遮雨棚、食物蒸汽、局部灯箱和行人动线形成生活密度，暖灯照亮商品与面部，环境暗部保留街道结构和湿润反射；招牌只作色块不生成乱码，避免摊位复制、所有区域同样明亮、人群肢体融合或霓虹取代真实市井光源",
    enPrompt: "night-market street organized by continuous stalls awnings food steam local light boxes and pedestrian flow, with warm practicals revealing goods and faces while darker areas retain street structure and selective wet reflection; treat signage as graphic color rather than gibberish, avoiding cloned stalls uniform brightness fused crowd limbs or neon replacing believable market sources",
  },
  "scene-temple-courtyard": {
    zhPrompt: "古寺庭院以院墙、石阶、廊柱、屋檐和主殿轴线形成清楚层级，柏树、苔痕与磨损石材说明年代和气候，空间安静但保持真实通行尺度；光线服从建筑遮挡，避免混搭不同时代构件、虚构神像、旅游人群堆积、屋檐悬空或庭院比例失真",
    enPrompt: "historic temple courtyard structured by enclosing walls stone steps colonnades eaves and a readable hall axis, with cypress moss and worn stone conveying age and climate while circulation remains realistically scaled; light follows architectural occlusion, avoiding mixed-period components invented sacred figures tourist crowds floating roofs or distorted courtyard proportions",
  },
  "scene-thunderstorm-distance": {
    zhPrompt: "远处雷暴让厚重积雨云在地平线上形成清楚云体和雨幕，闪电局限于远方云层内部或云地之间，前景仍处于较稳定环境光中；空气透视与风向连接远近，避免闪电贴脸、每处同时暴雨、云层像黑墙、无地平线尺度或把雷暴误作灾难爆炸",
    enPrompt: "distant thunderstorm with a structured cumulonimbus tower and rain shaft on the horizon, lightning confined to the far cloud interior or cloud-to-ground path while the foreground remains under steadier ambient light; aerial perspective and wind connect depth, avoiding foreground lightning rain everywhere at once a flat black cloud wall missing horizon scale or an explosive disaster look",
  },
  "purpose-album-cover": {
    zhPrompt: "专辑封面以一个能承载音乐气质的主视觉、清楚轮廓和可缩小识别的构图为核心，为艺人名与专辑名预留连续负空间但不直接生成文字；画面适应方形裁切并保持边缘安全，避免普通人像摆拍、装饰堆砌、焦点分散或关键主体被未来排版覆盖",
    enPrompt: "album-cover image centered on one visual idea that communicates musical character through a strong silhouette and composition recognizable at small size, reserving continuous negative space for artist and title without generating text; survive square cropping with safe edges, avoiding a generic portrait decorative overload scattered focus or key subject areas blocked by future typography",
  },
  "purpose-profile-avatar": {
    zhPrompt: "头像裁切让面部或核心标志在圆形与方形小尺寸中都保持清楚，主体置于中心安全区，眼睛、发型或识别轮廓不被边缘切断，背景简洁且明度分离；避免全身远景、侧边留白过多、头顶贴边、复杂文字或缩略后五官模糊",
    enPrompt: "profile-avatar composition keeping a face or identifying mark clear in both circular and square small crops, placing the subject within a central safe zone so eyes hair and key silhouette survive the edge while the background remains simple and value-separated; avoid distant full-body framing excessive side space a head touching the crop complex text or facial detail disappearing at thumbnail size",
  },
  "purpose-jewelry-macro": {
    zhPrompt: "珠宝微距用途精确呈现金属镶爪、宝石刻面、抛光与磨砂差异，焦点落在主石或关键工艺，浅景深仍保证产品识别轮廓完整；布光控制高光与火彩并清理杂反射，避免宝石塑料化、爪位错乱、反射中出现设备、过度星芒或产品边缘糊掉",
    enPrompt: "jewelry macro image resolving prongs metal finish gemstone facets and polished-versus-matte differences, with focus on the hero stone or craft detail while shallow depth preserves the recognizable product silhouette; lighting controls highlights and dispersion while removing stray reflections, avoiding plastic gems misplaced settings visible equipment excessive starbursts or lost product edges",
  },
  "purpose-video-thumbnail": {
    zhPrompt: "视频缩略图以单一强焦点、夸张但真实可读的动作或表情和明确前后景对比吸引点击，同时在平台安全区预留短标题位置但不生成文字；主体在手机小尺寸仍清晰，避免多个同等人物、细节过密、边缘信息被裁、假按钮元素或低俗误导性表情",
    enPrompt: "video-thumbnail image using one strong focal point an amplified yet believable action or expression and clear foreground-background contrast, with space inside platform-safe zones for a short headline but no generated text; remain legible on a phone, avoiding multiple equal subjects dense microdetail edge content lost to crops fake interface buttons or misleading grotesque expressions",
  },
  "purpose-educational-diagram": {
    zhPrompt: "教学示意图将一个过程、结构或因果关系拆成有限步骤，以一致视角、清楚箭头、颜色编码和充足间距呈现，主体轮廓优先于装饰细节；标签区可留空但不生成乱码，避免步骤顺序矛盾、箭头无起止点、比例误导、图标风格混杂或信息堆叠",
    enPrompt: "educational diagram breaking one process structure or causal relationship into a limited sequence with consistent viewpoint clear arrows restrained color coding and ample spacing, prioritizing readable silhouettes over decoration; reserve blank label zones without gibberish, avoiding contradictory order arrows with no origin or destination misleading scale mixed icon styles or information overload",
  },
  "purpose-interior-design-render": {
    zhPrompt: "室内设计效果图准确表达墙体、门窗、家具尺度、通行距离和材料连接，垂直线保持稳定，主光与实景灯共同说明时间和功能；画面可精致但不能牺牲可建造性，避免家具穿墙、过宽广角拉伸、无门空间、材质重复、窗外过曝或只追求氛围而看不清布局",
    enPrompt: "interior-design visualization accurately communicating walls openings furniture scale circulation clearance and material junctions, with stable verticals and daylight plus practical fixtures explaining time and function; polish must not sacrifice buildability, avoiding furniture through walls extreme wide-angle stretching rooms with no doors tiled materials blown windows or atmosphere that hides the plan",
  },
  "purpose-wallpaper": {
    zhPrompt: "壁纸背景用途以连续、耐看且不过度抢眼的视觉节奏覆盖完整画幅，依据桌面或手机比例把主要装饰避开图标与文字区域，边缘允许安全裁切；色彩层次稳定且大面积区域不过曝，避免中央密集焦点、可读文字、明显拼接缝、四角杂乱或缩放后纹理过密",
    enPrompt: "wallpaper-background image filling the frame with a continuous restrained visual rhythm, placing major accents away from icon and text zones according to desktop or phone ratio and allowing safe edge crops; maintain stable color hierarchy and unclipped broad areas, avoiding a dense central focal point readable text visible seams cluttered corners or texture too fine after scaling",
  },
  "purpose-ui-mockup": {
    zhPrompt: "界面样机将设计放入比例正确的屏幕或设备框架，透视、圆角、边框厚度和环境反射一致，界面层级清楚但正文使用不可读占位而非乱码；设备与桌面有真实接触阴影，避免屏幕内容倾斜错位、界面溢出边框、品牌复制、手指穿屏或多个设备争抢焦点",
    enPrompt: "UI mockup placing a design inside a correctly proportioned screen or device frame with consistent perspective corner radius bezel thickness and environmental reflection, clear hierarchy but unreadable placeholder copy rather than gibberish; device has believable contact shadow, avoiding skewed content overflow beyond the frame copied brands fingers intersecting screens or multiple devices competing for focus",
  },
  "character-plus-size": {
    zhPrompt: "丰满体态以真实骨架为基础呈现较充实的躯干、手臂与腿部体积，脂肪分布、关节活动和身体褶皱随姿势自然变化，服装尺寸与受力匹配；保持人物自信和个体差异，避免夸张球形、嘲讽表情、四肢异常变细、服装穿模或把体态等同于年龄和职业",
    enPrompt: "plus-size body built on a credible skeleton with fuller torso arms and legs, natural variation in soft-tissue distribution joint mobility and body folds according to pose, and clothing sized and tensioned appropriately; preserve confidence and individuality, avoiding spherical caricature mocking expression unnaturally thin limbs garment intersections or assumptions about age and occupation",
  },
  "character-athletic": {
    zhPrompt: "运动型体态具有与训练项目相符的肌肉分布、稳定关节和协调姿态，肩背、核心与腿部线条在放松状态下仍自然，不把所有肌肉同时夸张绷紧；动作体现力量与灵活性，避免健美赛式过度块状、极低体脂、解剖错位或仅靠运动服暗示体态",
    enPrompt: "athletic build with muscle distribution joint stability and coordination appropriate to the implied activity, shoulders back core and legs remaining natural even at rest rather than every muscle flexed at once; movement communicates strength and mobility, avoiding bodybuilding exaggeration extreme leanness anatomical displacement or sportswear used as the only evidence of fitness",
  },
  "character-young-adult": {
    zhPrompt: "青年人物具有成熟但仍富活力的面部与身体比例，肤质、姿态和服装反映具体生活状态而非统一模板，年龄主要通过骨相稳定、动作节奏与少量真实细节表达；避免儿童化大眼、过度磨皮、固定潮流造型或把青年默认成单一性别与职业",
    enPrompt: "young adult character with mature yet energetic facial and body proportions, skin posture and wardrobe reflecting an individual life context rather than one template, with age conveyed through settled bone structure movement rhythm and restrained real detail; avoid childlike oversized eyes excessive smoothing mandatory trend styling or assuming one gender or occupation",
  },
  "character-elderly": {
    zhPrompt: "老年人物通过符合个体经历的皱纹走向、皮肤厚薄、白发比例、手部细节与姿态变化表达年龄，同时保留清楚骨相、眼神和独立个性；体态可健康或需要支撑但不默认虚弱，避免夸张满脸裂纹、统一驼背、牙齿缺失刻板化或把所有老人画成同一面孔",
    enPrompt: "elderly character whose age appears through individually plausible wrinkle direction skin thickness gray-hair proportion hand detail and posture while retaining clear bone structure gaze and personality; the body may be vigorous or supported without assuming frailty, avoiding exaggerated cracked skin mandatory stooping stereotyped missing teeth or one generic old face",
  },
  "character-child": {
    zhPrompt: "儿童人物采用符合具体年龄段的头身比例、较短四肢、柔和骨相和自然动作，服装、道具与环境符合儿童尺度并保持安全；表情活泼但不过度萌化，避免成人身体配大头、成熟妆容、性化姿势、危险场景无监护或手脚比例随意缩小",
    enPrompt: "child character using age-appropriate head-to-body proportion shorter limbs softer bone structure and natural movement, with clothing props and environment scaled safely for a child; expression may be lively without forced cuteness, avoiding an adult body with a large head mature makeup sexualized posing unsafe context without care or arbitrarily tiny hands and feet",
  },
  "character-mage": {
    zhPrompt: "法师角色通过可解释的施法媒介、知识工具、服装层级和与世界观一致的符号建立身份，手势、法器与光效之间存在明确因果，材质磨损说明使用经历；保持原创造型，避免复制知名角色、随机星月符号堆砌、法术无来源、长袍遮住全部动作或道具悬浮穿模",
    enPrompt: "mage character established through an understandable casting medium knowledge tools layered costume and symbols coherent with the world, with clear cause between gesture focus object and magical response plus material wear suggesting use; keep the design original, avoiding copied famous characters random celestial symbols source-free effects robes hiding all action or floating intersecting props",
  },
  "camera-handheld-documentary": {
    zhPrompt: "手持纪实镜头保留轻微呼吸式晃动、瞬间倾斜和边缘切入，摄影者与事件距离可感知，但主体关键动作与环境关系仍清楚；快门速度允许少量真实运动模糊，曝光服从现场光，避免故意剧烈抖动、全片失焦、伪造监控噪点或把随意构图误当纪实",
    enPrompt: "handheld documentary camera retaining subtle breathing movement momentary tilt and imperfect edge entries so the photographer's distance to events is perceptible while key action and context remain readable; shutter allows limited real motion blur and exposure follows available light, avoiding violent artificial shake universal defocus fake surveillance noise or careless framing mistaken for documentary truth",
  },
  "camera-dutch-angle": {
    zhPrompt: "倾斜构图让相机绕光轴有意旋转，使地平线和垂直线产生可读斜角，用于不安、失衡或高速叙事，同时主体重心与画框对角线形成呼应；倾斜幅度应有目的，避免只是画面歪斜、建筑透视崩坏、人物无法站立或每个场景都套用同一角度",
    enPrompt: "Dutch-angle composition intentionally rolling the camera around its optical axis so horizon and verticals form a readable slant for unease imbalance or speed, while subject weight relates to the frame diagonal; roll amount must serve the scene, avoiding accidental crookedness collapsed architectural perspective a person who cannot physically stand or the same tilt applied everywhere",
  },
  "camera-vanishing-point": {
    zhPrompt: "单点透视让所有主要纵深线汇聚到地平线上的一个消失点，正对镜头的平面保持平行，走廊、街道或室内结构沿统一网格缩小；主体可放在汇聚区附近引导视线，避免多个互相冲突消失点、墙线弯曲、尺度不随距离变化或把放射装饰误作透视",
    enPrompt: "one-point perspective directing all major depth lines toward a single horizon vanishing point while frontal planes remain parallel and corridors streets or interiors recede on one coherent grid; place the subject near the convergence when useful, avoiding conflicting vanishing points bent walls scale that does not diminish with distance or decorative rays mistaken for perspective",
  },
  "camera-triangular-composition": {
    zhPrompt: "三角构图让三个主要视觉节点或人物群形成稳定或倾斜三角形，底边提供承托、顶点形成焦点，内部视线与动作方向共同维持层级；三角关系应由主体自然位置产生，避免画出可见三角线、三个元素等权僵硬摆放、顶点被裁或背景线条破坏结构",
    enPrompt: "triangular composition arranging three primary visual nodes or a figure group into a stable or dynamic triangle, with the base providing support the apex creating focus and internal gazes and gestures maintaining hierarchy; geometry should emerge from natural placement, avoiding a drawn triangle three equally weighted rigid objects a cropped apex or background lines that break the structure",
  },
  "camera-rule-of-thirds": {
    zhPrompt: "三分法构图把地平线或主要结构放在三分线上，并将关键焦点置于交叉点附近，另一侧保留与视线、动作或环境相关的空间；画面保持视觉重量平衡但不机械对齐，避免把所有物体塞进交叉点、主体贴边、留白无叙事作用或网格线直接出现",
    enPrompt: "rule-of-thirds composition placing horizon or major structure along a third line and the key focus near an intersection, leaving purposeful room in the direction of gaze motion or environment; maintain balanced visual weight without mechanical alignment, avoiding every object forced onto intersections a subject touching the edge meaningless empty space or visible grid lines",
  },
  "camera-freeze-motion": {
    zhPrompt: "高速凝固使用足够快的快门把飞溅、跳跃、运动器材或飘动物体定格在受力最清楚的瞬间，主体边缘锐利而运动方向仍可由姿势和粒子轨迹判断；光量和曝光合理，避免所有物体像静态摆拍、漂浮无重力、快门过慢拖影或锐化光环",
    enPrompt: "high-speed freeze motion using a sufficiently fast shutter to arrest splashes jumps equipment or airborne material at the clearest force moment, with crisp subject edges while pose and particle trajectory still reveal direction; maintain plausible light and exposure, avoiding a staged static look unsupported weightlessness slow-shutter streaks or sharpening halos",
  },
  "mood-joyful": {
    zhPrompt: "欢快明亮氛围通过开放姿态、轻快动作节奏、清晰高光和明度较高但有主次的色彩建立，环境留有呼吸空间并支持人物互动；快乐来自具体事件与表情而非装饰符号，避免强行大笑、满屏彩纸、所有颜色过饱和或亮到失去细节",
    enPrompt: "joyful bright mood built through open posture lively movement rhythm clear highlights and a high-value yet hierarchical palette, with breathing room supporting interaction; happiness arises from specific event and expression rather than decorative symbols, avoiding forced grins confetti everywhere maximum saturation in every color or brightness that erases detail",
  },
  "mood-mysterious": {
    zhPrompt: "神秘悬疑氛围通过局部遮挡、有限线索、深浅分层和画外空间建立，关键物体只被一束有来源的光揭示，观众能感到未知但仍可理解场景；避免单纯压黑曝光、满地浓雾、随机恐怖符号、血腥元素或完全看不清主体",
    enPrompt: "mysterious suspenseful mood built through partial occlusion limited clues layered darkness and implied off-screen space, with one motivated light revealing a key object so the unknown remains intriguing while the scene stays understandable; avoid mere underexposure fog covering everything random horror symbols gore or a subject too dark to read",
  },
  "mood-romantic": {
    zhPrompt: "浪漫梦幻氛围由亲密但自然的空间距离、柔和目光与手势、细腻冷暖关系和克制高光辉光形成，环境元素服务双方关系而不抢戏；保留真实肤色与场景质感，避免粉色滤镜覆盖、爱心装饰堆砌、僵硬摆拍、过度磨皮或把浪漫等同于婚纱照",
    enPrompt: "romantic dreamlike mood formed by intimate yet natural spatial distance subtle gaze and gesture nuanced warm-cool relationships and restrained highlight bloom, with surroundings supporting the relationship rather than competing; preserve real skin and setting texture, avoiding a blanket pink filter heart decorations rigid posing excessive smoothing or reducing romance to wedding photography",
  },
  "mood-lonely": {
    zhPrompt: "孤独忧郁氛围以单人和较大环境尺度差、具有方向的大面积留白、轻微背向姿态和低密度声音想象构成，光线与色彩克制但保留真实层次；孤独来自人与空间关系，避免只加蓝灰滤镜、人物永远低头、空场景无叙事线索或过度戏剧化哭泣",
    enPrompt: "lonely melancholic mood created through scale contrast between one figure and a larger environment directional negative space slightly withdrawn posture and an implied quiet soundscape, with restrained light and color retaining real layers; loneliness comes from the person-space relationship, avoiding only a blue-gray filter constant bowed heads empty scenery with no clue or melodramatic crying",
  },
  "mood-melancholic-rain": {
    zhPrompt: "雨窗忧郁氛围利用玻璃水痕、窗内外明度差、被雨模糊的远景和安静停顿表现内省，人物可被窗框局部分隔但面部或动作仍有信息；冷湿环境与少量室内暖光形成克制对照，避免雨滴贴图重复、整幅蓝滤镜、夸张哭泣或玻璃反射遮住主体",
    enPrompt: "melancholic rain-window mood using water trails on glass interior-exterior value separation softened distance and a quiet pause to suggest introspection, with framing that may partially divide the figure while face or action remains informative; contrast cool wet surroundings with restrained indoor warmth, avoiding tiled raindrop texture a global blue filter exaggerated crying or reflection obscuring the subject",
  },
  "mood-peaceful": {
    zhPrompt: "平静安宁氛围通过稳定水平线、舒展构图、缓慢动作、柔和但有方向的光线和适度留白建立，色彩关系协调且材质细节不过度刺激；环境具有可停留感，避免完全没有对比的灰雾、人物僵直无神、装饰性禅意符号堆砌或把安静误做成空白无内容",
    enPrompt: "peaceful calm mood built from stable horizontals spacious composition slow movement soft directional light and measured negative space, with harmonious color relationships and material detail that never becomes visually abrasive; make the environment feel inhabitable, avoiding contrastless gray haze lifeless rigid figures decorative zen symbols or emptiness with no meaningful content",
  },
  "character-monk": {
    zhPrompt: "修行者角色以朴素合身的服装、克制随身物和长期生活留下的真实使用痕迹建立身份，姿态稳定、呼吸放松、眼神专注，环境与文化背景保持一致；尊重具体传统但不混杂宗教符号，避免神秘化刻板印象、悬浮打坐、华丽奇幻盔甲或复制现实宗教人物",
    enPrompt: "monastic or contemplative practitioner defined by modest well-fitted clothing restrained personal objects and believable traces of daily use, with grounded posture relaxed breathing and attentive gaze in a culturally coherent setting; respect the chosen tradition without mixing symbols, avoiding exotic stereotypes levitating meditation ornate fantasy armor or copying a real religious figure",
  },
  "character-explorer": {
    zhPrompt: "探险家角色的服装、鞋靴、背负系统、地图与工具应匹配具体气候和任务，装备重量通过肩带受力、磨损与姿态真实体现，视线和动作指向正在观察或穿越的环境；避免无用途装备堆砌、崭新制服、危险地形中无保护、道具穿模或只靠宽檐帽表达身份",
    enPrompt: "explorer character whose clothing footwear load-bearing system map and tools match a specific climate and objective, with equipment weight shown through strap tension wear and posture while gaze and action engage the terrain being studied or crossed; avoid purposeless gear piles pristine costume missing protection in hazardous terrain intersecting props or identity conveyed only by a wide-brim hat",
  },
  "character-teenager": {
    zhPrompt: "青少年角色采用符合具体年龄阶段的骨相、身高与肢体比例，以自然姿态、学习或社交情境和个人化服装表现青春状态，表情可活泼或内向但保持真实；避免儿童大头配成人身体、成熟浓妆、性化姿势、统一校服模板或仅用潮流配饰判断年龄",
    enPrompt: "teenage character using age-appropriate bone structure height and limb proportion, with natural posture an identifiable school social or everyday context and individualized clothing conveying youth without caricature; expression may be lively or reserved, avoiding a childlike oversized head on an adult body mature heavy makeup sexualized posing a single uniform template or age indicated only by trendy accessories",
  },
  "character-warrior": {
    zhPrompt: "战士角色的护甲覆盖、武器尺寸、携行方式与战斗传统彼此一致，关节活动区保留真实可动空间，磨损集中在接触和受击位置，站姿与目光体现训练经验；保持原创文化设计，避免无支撑超大武器、盔甲穿入身体、左右装备矛盾、满身尖刺或复制知名角色",
    enPrompt: "warrior character with armor coverage weapon scale carry method and martial tradition designed as one coherent system, preserving articulation at joints and placing wear at believable contact and impact zones while stance and gaze suggest training; keep the culture original, avoiding unsupported oversized weapons armor intersecting the body contradictory left-right equipment gratuitous spikes or copied famous characters",
  },
  "character-medical-worker": {
    zhPrompt: "医护人员角色以符合岗位的洁净工作服、防护用品、身份牌位置与专业工具建立可信身份，动作体现规范操作、沟通或照护而非摆拍，环境保持卫生且功能清楚；避免品牌标志、错误佩戴防护装备、把所有岗位都画成医生、血腥猎奇或用夸张圣洁光环替代专业性",
    enPrompt: "healthcare worker identified through role-appropriate clean workwear protective equipment badge placement and professional tools, performing a credible care communication or clinical task rather than posing in a functional hygienic setting; avoid brand marks incorrectly worn protection treating every role as a physician sensational gore or replacing professional competence with a saintly glow",
  },
  "character-chef": {
    zhPrompt: "厨师角色的围裙、工作服、鞋帽和工具符合具体厨房与菜系，双手执行清楚的备料、烹饪或装盘动作，蒸汽、油光和台面使用痕迹真实但卫生；避免刀具握法错误、食材悬浮、制服过度洁净如戏服、火焰无来源或用刻板体型和夸张表情表现职业",
    enPrompt: "chef character with apron uniform footwear headwear and tools appropriate to a specific kitchen and cuisine, hands carrying out a clear preparation cooking or plating task amid believable steam sheen and sanitary work-surface wear; avoid incorrect knife grip floating ingredients costume-like spotless clothing source-free flames or occupational stereotypes based on body shape and exaggerated expression",
  },
  "character-craftsman": {
    zhPrompt: "手艺人角色通过与具体工艺相符的工具、材料、工作台和手部动作建立身份，视线落在加工位置，手指握持、材料受力、碎屑与磨损呈现真实制作过程；尊重工艺逻辑和安全规范，避免把不同工种工具混用、手部穿过材料、只做摆拍或用泛化古装代替专业细节",
    enPrompt: "craftsperson defined by tools materials bench and hand actions specific to one craft, gaze fixed on the working point with credible grip material resistance debris and wear revealing an actual making process; respect technical sequence and safety, avoiding mixed tools from unrelated trades hands intersecting material posed inactivity or generic historical costume replacing professional detail",
  },
  "camera-anamorphic-lens": {
    zhPrompt: "变形宽银幕镜头以较宽水平视野、受压缩后恢复的画面和椭圆焦外建立电影感，横向炫光只在强点光源经过镜头时出现，人物比例与建筑垂直线仍保持可信；边缘畸变和呼吸效应适度，避免无光源蓝色光条、所有高光拉丝、极端拉宽面部或把普通裁切误作变形镜头",
    enPrompt: "anamorphic widescreen cinematography using a broad horizontal field of view desqueezed geometry and oval out-of-focus highlights, with horizontal flare appearing only when a strong point source enters the lens while faces and architectural verticals remain credible; keep edge distortion and focus breathing restrained, avoiding source-free blue streaks every highlight stretched facial widening or a simple wide crop mistaken for anamorphic optics",
  },
  "camera-worms-eye": {
    zhPrompt: "虫视仰拍把镜头放在接近地面的位置并明确向上倾斜，近处地面或脚部适度放大，垂直线向高处汇聚以强化主体高度和压迫感，同时保留可判断的落脚面与天空比例；避免人物脚部无限膨胀、建筑线条弯折、镜头埋入地面或主体看似悬浮",
    enPrompt: "worm's-eye view placing the camera very near the ground and tilting clearly upward, allowing nearby ground or feet to enlarge moderately while verticals converge above to emphasize height and pressure, yet preserving a readable support plane and controlled amount of sky; avoid infinitely enlarged feet bent architecture a lens buried below the surface or a subject that appears to float",
  },
  "camera-split-diopter": {
    zhPrompt: "分焦镜头让紧邻镜头的前景主体与远处主体同时清晰，二者由同一叙事关系连接，中间景深过渡可见轻微分界但不形成拼接画面；焦平面、透视和光线保持统一，避免整幅普通深景深、左右两张图硬拼、人物边缘重影或中景异常扭曲",
    enPrompt: "split-diopter shot keeping a very near foreground subject and a distant subject simultaneously sharp because they share one narrative relationship, with a subtle focus transition through the middle rather than a composite seam; preserve one perspective exposure and lighting setup, avoiding ordinary deep focus two images pasted side by side doubled figure edges or unnaturally warped midground",
  },
  "camera-first-person-pov": {
    zhPrompt: "第一人称视角把镜头置于角色眼位，前景仅出现与当前动作有关的手、手臂、工具或身体边缘，视线高度、手臂透视和交互目标形成同一动作链；环境仍应清楚可读，避免看到角色自己的完整脸部、漂浮双手、超长手臂、游戏界面元素或没有交互目的的前景遮挡",
    enPrompt: "first-person point of view positioning the camera at the character's eye line, showing only hands arms tools or body edges relevant to the present action so eye height arm perspective and interaction target form one coherent chain; keep the environment readable, avoiding the character's own full face floating hands elongated arms game HUD elements or foreground obstruction with no interactive purpose",
  },
  "camera-over-shoulder": {
    zhPrompt: "过肩镜头从近处人物肩后观察对话对象或行动目标，前景头肩只占画面一侧并保持柔焦，远处主体眼线与空间方向连续，双方距离和镜头高度符合场景；避免前景肩膀遮住主角、两人视线错位、左右轴线跳变、头部被异常裁切或把背影全景误作过肩镜头",
    enPrompt: "over-the-shoulder shot viewing a conversation partner or action target past one nearby figure, with the foreground head and shoulder softly focused on one side while the distant subject's eye line and screen direction remain continuous and spacing and camera height fit the scene; avoid the shoulder hiding the main face mismatched gazes crossing the axis awkward head crops or a full back view mislabeled as OTS",
  },
  "camera-tilt-shift": {
    zhPrompt: "移轴微缩效果从较高视点观察真实城市或场景，以一条窄而有方向的清晰带穿过主要活动区，前后景逐渐虚化并配合压缩尺度、均匀日光和模型般色彩产生微缩错觉；避免径向模糊滤镜、主体本身失焦、建筑垂直线倾倒或把真实玩具模型误当移轴摄影",
    enPrompt: "tilt-shift miniature photography viewing a real city or scene from an elevated position, with one narrow directional plane of focus crossing the main activity while foreground and distance soften gradually and compressed scale even daylight and model-like color support the illusion; avoid a radial blur filter an unfocused subject falling architectural verticals or an actual toy model presented as tilt-shift photography",
  },
  "camera-telephoto-compression": {
    zhPrompt: "长焦压缩使用较远机位和长焦视角把前景主体与远处山体、建筑或人群在画面中拉近，背景尺度明显增大但各物体自身透视保持自然，景深依据光圈和距离合理变化；避免简单放大裁切、主体边缘抠图感、背景真实距离矛盾或把广角畸变混入画面",
    enPrompt: "telephoto compression using a distant camera position and long focal length to bring a foreground subject visually close to mountains architecture or crowds behind it, enlarging the background while each object's internal perspective stays natural and depth of field follows aperture and distance; avoid mere digital cropping cutout edges impossible spatial distance or wide-angle distortion mixed into the frame",
  },
  "camera-leading-lines": {
    zhPrompt: "引导线构图利用道路、栏杆、轨道、光影边界或建筑接缝从画面入口连续指向唯一主焦点，线条宽度与间距随透视递减，途中次要节点只辅助视线节奏；避免线条在主体前突然中断、多个方向互相争抢、画出装饰箭头或让引导线直接穿过人物面部",
    enPrompt: "leading-lines composition using roads rails tracks light-shadow boundaries or architectural joints to travel continuously from a frame entry toward one primary focal point, with spacing and width diminishing in perspective and secondary nodes only pacing the eye; avoid lines stopping before the subject competing directions drawn decorative arrows or a guide line cutting directly through a face",
  },
  "camera-eye-level": {
    zhPrompt: "平视角度让镜头高度与主要主体眼线或物体中心近似齐平，地平线和垂直关系自然，观众与主体形成中性、平等且可接近的观看关系；焦距与距离应避免夸张透视，除非场景要求不刻意俯仰，避免把平视误作证件式正面、地平线穿脸或儿童与成人共用错误机位",
    enPrompt: "eye-level camera placing the lens approximately at the main subject's eye line or the object's visual center, with natural horizon and vertical relationships creating a neutral equal and approachable viewpoint; focal length and distance avoid exaggerated perspective and the camera does not tilt without purpose, avoiding a passport-like frontal pose horizon crossing the face or one incorrect height used for both children and adults",
  },
  "mood-tense": {
    zhPrompt: "紧张危险氛围通过被压缩的空间、即将发生的动作、偏离中心的重心、有限视野和具有方向的硬光建立，人物目光与身体预备动作指向明确威胁，但仍保留逃生路径和叙事线索；避免只用红色滤镜、无来源风暴、血腥堆砌、所有人夸张尖叫或画面暗到无法判断风险",
    enPrompt: "tense dangerous mood built through compressed space imminent action off-center balance limited visibility and directional hard light, with gaze and preparatory body language pointing toward a specific threat while escape route and narrative clues remain readable; avoid relying only on a red filter source-free storms gore piles everyone screaming theatrically or darkness that hides the actual risk",
  },
  "mood-sacred": {
    zhPrompt: "神圣庄严氛围以清楚轴线、垂直尺度、克制对称、缓慢仪式动作和有真实入口的高位光建立，材质回声、烟尘或空间留白强化敬畏但不绑定单一宗教；符号应与设定一致，避免混搭信仰标志、廉价金色辉光、人物悬浮、过度装饰或把庄严等同于漆黑压抑",
    enPrompt: "sacred solemn atmosphere built from a clear axis vertical scale restrained symmetry deliberate ritual movement and elevated light with a believable architectural source, using material resonance dust or spatial pause to create awe without assuming one religion; keep symbols coherent with the setting, avoiding mixed faith emblems cheap golden glow levitating figures decorative overload or confusing solemnity with featureless darkness",
  },
  "mood-whimsical": {
    zhPrompt: "童趣奇想氛围让一个日常规则发生清楚而温和的变化，例如尺度、重力或物件用途被重新想象，并用圆润形态、轻快节奏和有限明快配色维持可读叙事；奇想应围绕主体展开，避免随机堆放气球彩虹、所有物体长出笑脸、糖果色过饱和或元素虽可爱却没有互动关系",
    enPrompt: "whimsical playful mood changing one everyday rule in a clear gentle way such as scale gravity or object function, then supporting the readable story with rounded forms lively rhythm and a limited bright palette; let the invention revolve around the subject, avoiding random balloons and rainbows faces placed on every object oversaturated candy color or cute elements with no interaction",
  },
  "mood-nostalgic": {
    zhPrompt: "怀旧温暖氛围由具有年代依据的生活物件、被使用过的材质、柔和侧逆光和略微褪色但仍区分肤色与环境的色彩建立，人物动作像真实记忆片段而非复古摆拍；保留具体时代细节，避免统一棕黄滤镜、随意胶片划痕、跨年代道具混搭或只靠旧相框表达怀旧",
    enPrompt: "warm nostalgic mood grounded in period-specific everyday objects used material surfaces soft side or back light and gently faded color that still separates skin from environment, with action feeling like an observed memory rather than retro posing; preserve coherent era detail, avoiding a blanket sepia filter arbitrary film scratches mixed-period props or nostalgia communicated only by an old frame",
  },
  "mood-hopeful": {
    zhPrompt: "希望重启的氛围通过由暗到亮的空间路径、人物朝向开放区域的姿态、低处冷色向远处暖光的渐进和一个具体的新行动建立，光线提供方向而不是神迹；保持困难后的真实余韵，避免俗套胜利手势、满屏金光、无原因彩虹、夸张励志文字或把所有阴影完全抹除",
    enPrompt: "hopeful new-beginning mood built through a spatial path from shadow toward openness, a figure oriented toward available space, gradual movement from cooler near tones to distant warmth and one specific initiating action, with light providing direction rather than a miracle; retain traces of prior difficulty, avoiding clichéd victory poses floods of gold source-free rainbows motivational text or erasing every shadow",
  },
  "clothing-short-sleeve": {
    zhPrompt: "短袖上衣的袖口结束在上臂中段并与肩线、袖山和腋下接缝自然连接，衣身松量与面料厚度决定垂坠和褶皱，抬臂时袖口与腋部产生合理牵拉；保持左右袖长一致，避免袖子粘住手臂、腋下破洞、肩缝错位或把短袖误画成无袖",
    enPrompt: "short-sleeve top with each sleeve ending around the mid upper arm and connecting naturally through shoulder seam sleeve cap and underarm, while garment ease and fabric weight determine drape and folds and raised arms create plausible tension around sleeve opening and armhole; keep sleeve lengths consistent, avoiding sleeves fused to skin missing underarms displaced shoulder seams or conversion into a sleeveless top",
  },
  "clothing-turtleneck": {
    zhPrompt: "高领上衣以连续领片包覆颈部并在下颌下保留舒适空间，领高、翻折方式和针织弹性清楚可见，肩颈转动时形成纵向或斜向软褶但不限制姿态；保持头颈从领口正确穿出，避免领子遮住嘴部、像硬筒悬浮、皮肤穿透布料或前后领结构混乱",
    enPrompt: "turtleneck top using a continuous collar piece around the neck with believable clearance below the jaw, clearly showing collar height fold method and knit elasticity while head movement produces soft vertical or diagonal folds without immobilizing the pose; ensure head and neck emerge correctly, avoiding a collar covering the mouth floating like a rigid tube skin intersecting fabric or confused front and back construction",
  },
  "clothing-v-neck": {
    zhPrompt: "V 领上衣由左右领边在胸前中心形成清楚尖点，领深与服装场合相符并由贴边或罗纹稳定，肩带宽度、胸部松量和面料垂坠共同保持领口贴合；避免领尖偏斜、领边悬空、左右不对称、胸部穿模或把 V 领画成开裂的圆领",
    enPrompt: "V-neck top whose left and right neckline edges meet at one clean center point, with depth appropriate to the garment context and stabilized by facing ribbing or binding while shoulder width bust ease and fabric drape keep the opening seated against the body; avoid an off-center point floating edges accidental asymmetry body intersection or a round neck that merely appears torn open",
  },
  "clothing-button-shirt": {
    zhPrompt: "纽扣衬衫具有连续门襟、可辨纽扣间距、翻领、肩缝、袖窿和袖口结构，面料挺度与合体松量决定胸腰褶皱，坐姿或抬臂时门襟受力但仍闭合自然；避免纽扣数量随机、门襟断裂、领片左右不同、袖口消失或布料像贴在皮肤上",
    enPrompt: "button shirt with a continuous front placket evenly spaced buttons coherent collar shoulder seams armholes and cuffs, where fabric crispness and garment ease control chest and waist folds and sitting or raised arms tension the placket without breaking closure; avoid random button counts interrupted plackets mismatched collar points vanished cuffs or cloth shrink-wrapped onto the skin",
  },
  "clothing-t-shirt": {
    zhPrompt: "基础 T 恤以圆领罗纹、短袖、肩缝和简洁衣身构成，针织棉的厚薄决定领口回弹、下摆垂度与躯干褶皱，版型可合身或宽松但必须随姿势真实受力；避免领口拉成硬圆环、袖山缺失、衣摆粘腿、无来源图案文字或胸腰比例被布料扭曲",
    enPrompt: "plain T-shirt built from a ribbed crew neck short sleeves shoulder seams and simple body, with jersey weight controlling neckline recovery hem drape and torso folds; fit may be close or relaxed but must respond to posture and gravity, avoiding a rigid circular collar missing sleeve caps a hem stuck to the legs source-free graphics or fabric distorting chest and waist anatomy",
  },
  "clothing-knit-sweater": {
    zhPrompt: "针织毛衣展示连续织目、罗纹领口袖口与下摆，纱线粗细、组织密度和蓬松度在不同区域保持一致，肘部、腋下和腰部褶皱随动作与重力形成；织纹遵循衣片方向和透视，避免随机网格贴图、针目尺寸突变、手指勾入错误孔洞或毛衣像硬壳",
    enPrompt: "knit sweater showing continuous stitches and ribbed neckline cuffs and hem, with yarn thickness stitch density and loft remaining coherent across panels while elbows underarms and waist form folds from movement and gravity; knit direction follows pattern pieces and perspective, avoiding a random grid texture changing stitch scale fingers caught in impossible holes or a sweater behaving like a rigid shell",
  },
  "clothing-crop-top": {
    zhPrompt: "短款上衣的下摆明确结束在肋骨下方或自然腰线附近，肩袖和领口结构保持完整，衣长、版型与下装腰高共同形成清楚比例；动作时下摆可轻微上移但仍遵循布料受力，避免衣服无故消失成内衣、胸腹穿模、边缘粘皮或把人物躯干比例压缩",
    enPrompt: "crop top with a deliberate hem ending below the ribs or near the natural waist while shoulder sleeve and neckline construction remain complete, using garment length fit and lower-garment rise to create a clear proportion; the hem may lift slightly with motion but follows fabric tension, avoiding unexplained conversion into underwear torso intersections edges glued to skin or shortening the character's anatomy",
  },
  "clothing-oversized-shirt": {
    zhPrompt: "宽松衬衫以落肩、加大胸围、较长衣身和宽袖形成松弛体积，轻薄或中等厚度面料从肩部自然下垂并在肘腰处形成大而少的褶皱，手腕与下摆仍有清楚边界；避免简单放大人物衣服、袖长左右失衡、身体完全消失、布料鼓成气球或门襟纽扣比例异常",
    enPrompt: "oversized shirt shaped by dropped shoulders added chest ease longer body and roomy sleeves, with light or medium fabric hanging from the shoulders and forming broad sparse folds at elbows and waist while cuffs and hem remain readable; avoid merely scaling up normal clothing uneven sleeve lengths erasing the body balloon-like inflation or placket and buttons enlarged out of proportion",
  },
  "clothing-blazer": {
    zhPrompt: "西装外套通过翻领、驳头折线、肩部结构、胸省、前片扣位和袖口建立剪裁，面料挺度保持轮廓同时在肘部与腰侧产生克制褶皱，内搭与外套层次清楚；避免翻领左右错接、扣子悬浮、肩垫过度方硬、袖子穿手或衣身贴皮失去立体余量",
    enPrompt: "tailored blazer defined by lapels roll line shoulder construction chest shaping front button stance and cuffs, with fabric structure preserving silhouette while allowing restrained folds at elbows and waist and keeping the inner layer distinct; avoid crossed or mismatched lapels floating buttons excessively boxy shoulder pads sleeves intersecting hands or a body painted flat onto the torso",
  },
  "clothing-trench-coat": {
    zhPrompt: "风衣保留双排或单排门襟、宽翻领、肩章、风暴挡片、腰带和长下摆等明确结构，防风面料在行走和风力下形成方向一致的大褶皱，腰带必须穿过带袢并有真实垂端；避免结构元素随机增殖、腰带穿身、下摆像斗篷无开口、风向矛盾或衣长改变腿部比例",
    enPrompt: "trench coat retaining a coherent single or double front broad lapels epaulettes storm flap belt loops tied belt and long vented hem, with weather-resistant fabric forming broad directional folds during walking or wind and belt ends hanging from real loops; avoid multiplying details randomly a belt passing through the body a cloak-like sealed hem conflicting wind directions or coat length altering leg anatomy",
  },
  "clothing-wool-coat": {
    zhPrompt: "羊毛大衣以厚实毛呢、清楚肩线、翻领或立领、袋口和长衣身塑造冬季轮廓，重量让下摆稳定下垂并在肘部与坐姿处形成圆钝褶皱，表面可见细密绒毛但不过度蓬松；避免像薄风衣飘动、毛绒玩具质感、领口穿插、口袋位置矛盾或厚衣下身体比例异常",
    enPrompt: "wool coat using dense heavy cloth clear shoulders lapel or stand collar pocket openings and a long body to create a winter silhouette, with weight keeping the hem grounded and producing rounded folds at elbows and seated areas plus a fine restrained nap; avoid movement like a thin trench plush-toy fuzz intersecting collars contradictory pocket placement or distorted anatomy beneath the coat",
  },
  "clothing-puffer-jacket": {
    zhPrompt: "羽绒服由连续外壳、均匀充绒分仓、拉链、袖口和下摆构成，蓬松体积随肘肩弯曲被压缩并在放松区域回弹，面料高光表现轻质防风层而非塑料；保持缝线围绕身体透视连续，避免每格膨胀不同、人物像气球、手臂穿出分仓或拉链无法闭合",
    enPrompt: "puffer jacket constructed from one outer shell evenly filled baffles zipper cuffs and hem, with insulated volume compressing at bent elbows and shoulders and recovering in relaxed areas while highlights suggest a lightweight weather shell rather than plastic; keep quilting continuous in body perspective, avoiding random baffle inflation balloon anatomy arms breaking through chambers or a zipper that cannot meet",
  },
  "scene-snowy-mountain": {
    zhPrompt: "雪山垭口场景由两侧岩壁或山脊夹出可通行鞍部，积雪随坡度、风向和日照形成迎风堆积与背风裸岩，远近山体通过冷色空气透视拉开尺度；保留安全落脚与路径线索，避免雪像均匀白布、山峰重复、人物比例失真或晴空下出现无来源暴雪",
    enPrompt: "snowy mountain pass formed by ridges or rock walls enclosing a traversable saddle, with snow accumulation and exposed lee rock responding to slope wind and sunlight while cool atmospheric perspective separates near and distant peaks; preserve footing and route clues, avoiding snow as a uniform white sheet repeated mountains mis-scaled people or a source-free blizzard beneath clear sky",
  },
  "scene-primeval-forest": {
    zhPrompt: "原始森林以不同年龄和直径的巨树、倒木、蕨类、苔藓层与潮湿腐殖地面建立生态层次，树冠遮蔽使光线以有限斑驳光或雾中光束进入，前中后景密度逐渐变化；避免每棵树复制、满地装饰蘑菇、无来源绿色辉光、路径过度整齐或植被遮死全部尺度参照",
    enPrompt: "primeval forest built from ancient trees of varied age and diameter fallen logs ferns moss layers and damp humus, with canopy cover admitting limited dappled light or shafts through mist and vegetation density changing across foreground middle distance and background; avoid cloned trunks decorative mushrooms everywhere source-free green glow an overly tidy path or foliage hiding every scale reference",
  },
  "scene-tropical-rainforest": {
    zhPrompt: "热带雨林具有多层树冠、板根、藤本、阔叶植物、湿润岩面和真实排水地形，高温水汽降低远景反差，瀑布或溪流只在地形允许处出现并影响附近苔藓与反光；保持物种形态多样，避免温带松树混入、全景霓虹绿色、每片叶子同样清晰或水流悬空无源",
    enPrompt: "tropical rainforest with layered canopy buttress roots lianas broadleaf plants wet stone and believable drainage terrain, where humid heat reduces distant contrast and waterfalls or streams occur only where topography supports them while affecting nearby moss and reflections; maintain varied plant morphology, avoiding temperate conifers neon green everywhere identical sharpness on every leaf or water floating without a source",
  },
  "scene-volcanic": {
    zhPrompt: "火山黑岩场景以冷却熔岩形成的绳状、块状与多孔岩面为主体，灰烬、硫气和少量热裂隙遵循风向与地形分布，黑岩高光和远处火山轮廓说明材质与尺度；与活跃熔岩河区分，避免满地橙色火焰、岩石重复贴图、人物直接踩高温裂隙或烟雾无风乱散",
    enPrompt: "volcanic black-rock landscape dominated by cooled ropey blocky and vesicular lava surfaces, with ash sulfur vapor and limited hot fissures distributed according to wind and terrain and mineral highlights plus distant volcanic form establishing material and scale; distinguish it from an active lava river, avoiding orange flames everywhere tiled rocks people standing on hot cracks or smoke drifting against no coherent wind",
  },
  "scene-polar-aurora": {
    zhPrompt: "极地极光场景包含有裂隙和风蚀纹理的冰原、低矮雪脊与深色夜空，极光沿地磁方向形成高空帘幕并在冰雪上留下柔和彩色反射，地平线和微小尺度物说明辽阔感；避免极光像实体丝带贴地、彩虹全色过饱和、星空重复噪点或冰面像玻璃室内地板",
    enPrompt: "polar aurora scene containing a wind-sculpted ice field with cracks low snow ridges and a dark night sky, where high-altitude auroral curtains follow geomagnetic arcs and cast restrained color onto snow and ice while horizon and small scale cues communicate vastness; avoid solid ribbons touching the ground oversaturated rainbow color repeated star noise or ice resembling an indoor glass floor",
  },
  "scene-ancient-town": {
    zhPrompt: "古镇街道以连续青石路、尺度一致的木构或砖木沿街建筑、檐口、排水和门窗建立真实生活空间，时代相符的小摊、灯笼与使用痕迹适度出现，湿润表面反光服从光源；保持通行路径和远景出口，避免景区式装饰堆砌、乱码招牌、不同朝代建筑混搭或街道无限重复",
    enPrompt: "historic town street built from continuous stone paving consistently scaled timber or brick-timber shop houses eaves drainage doors and windows, with restrained period-coherent stalls lanterns and traces of use plus wet reflections tied to actual lights; preserve circulation and a visible destination, avoiding theme-park decoration gibberish signs mixed architectural eras or an endlessly tiled street",
  },
  "scene-modern-rooftop": {
    zhPrompt: "摩天楼观景露台位于现代高层顶部，以玻璃或金属安全栏、铺装地面、少量座椅和明确出入口形成可使用空间，近处楼顶与远处天际线呈现真实高度视差，暮色灯光逐层亮起；区别于设备屋顶，避免空中无支撑平台、护栏过低、城市背景贴图化或人物尺寸与楼群矛盾",
    enPrompt: "skyscraper observation terrace at the top of a modern tower, using safe glass or metal balustrades paved flooring restrained seating and a clear access point to create a usable public space, with credible height parallax between the nearby roof and distant skyline as evening lights emerge; distinguish it from a service rooftop, avoiding an unsupported platform low barriers a pasted city backdrop or people scaled inconsistently with the towers",
  },
  "scene-cyberpunk-alley": {
    zhPrompt: "赛博朋克小巷由高密度建筑夹缝、外露管线、维修层、摊位和潮湿路面构成，霓虹与屏幕必须依附真实店面或设备并在金属、水面和雾气中产生方向明确的反射，人物尺度保持可读；避免随机中文乱码、满屏同色霓虹、无入口建筑、线缆穿人或只靠紫蓝滤镜表现未来",
    enPrompt: "cyberpunk alley formed by a dense gap between buildings exposed utilities maintenance levels stalls and wet pavement, with neon and displays attached to real shops or devices and casting directional reflections across metal water and haze while human scale remains readable; avoid random gibberish characters one-color neon everywhere buildings with no entrances cables through people or futurism reduced to a purple-blue filter",
  },
  "scene-library": {
    zhPrompt: "现代公共图书馆以开放书架、清楚分类动线、阅读桌、借阅区与自然采光形成安静而可使用的当代室内，吸音材料、木材和柔和工作灯控制回声与视觉密度；区别于宏伟古典图书馆，避免高耸宫殿书墙、书脊乱码特写、书架无通道、家具比例错误或统一暖黄滤镜",
    enPrompt: "modern public library organized by accessible open shelving clear circulation reading tables lending zones and daylight, with acoustic surfaces wood and gentle task lighting creating a quiet usable contemporary interior; distinguish it from a monumental classical library, avoiding palace-height book walls close-up gibberish spines shelves with no aisles incorrectly scaled furniture or a blanket warm-yellow filter",
  },
  "scene-museum": {
    zhPrompt: "当代艺术画廊采用白盒子展墙、灵活隔断、轨道灯或天窗和少量现代作品建立开放观看路径，作品与观众保持合理距离并由受控照明形成清楚焦点，墙面保留呼吸空间；区别于历史博物馆陈列，避免密集古物展柜、乱码说明牌、作品贴满墙、灯光直射观众眼睛或空间没有出口",
    enPrompt: "contemporary art gallery using white-cube walls flexible partitions track lighting or skylights and a restrained set of modern works to create an open viewing route, with proper viewing distance controlled focal lighting and breathing room around each piece; distinguish it from a historical museum display, avoiding dense artifact cases gibberish labels salon-style wall clutter glare aimed at visitors or a space with no exit",
  },
  "scene-industrial-factory": {
    zhPrompt: "工业厂房以承重钢架、行车或设备平台、管线桥架、检修通道和符合生产流程的机械建立尺度，工作灯、安全色和局部潮湿反光服务真实操作而非装饰，空气中粉尘或蒸汽有明确来源；避免机器随机堆叠、管道无连接、平台无护栏、满地镜面水或人物与设备比例冲突",
    enPrompt: "industrial factory built from load-bearing steel frames cranes or equipment decks pipe and cable runs maintenance access and machinery arranged by a plausible production flow, with work lights safety colors and limited wet reflections serving operation while dust or steam has a traceable source; avoid random machine piles disconnected pipes unguarded platforms mirror-wet floors everywhere or people scaled incorrectly beside equipment",
  },
  "scene-product-studio": {
    zhPrompt: "产品摄影棚包含无缝背景纸或可控布景、主光补光与轮廓光、反光板、旗板和稳固产品台，灯位与反射面围绕材质特性布置并保留真实接触阴影，工作区边缘可见但不抢画面；避免设备反射进产品、背景折痕、主体悬浮、多个矛盾高光或把摄影棚误作最终纯背景产品图",
    enPrompt: "product photography studio containing a seamless sweep or controllable set key fill and rim lights reflectors flags and a stable product table, with light positions and reflective surfaces arranged for the object's material and a believable contact shadow while working-zone edges may remain visible without competing; avoid equipment reflected in the product creased backdrops floating objects contradictory highlights or confusing the studio environment with a finished isolated product image",
  },
  "clothing-leather-jacket": {
    zhPrompt: "皮夹克以分片皮革、肩袖接缝、拉链或按扣、口袋和衬里形成可穿结构，皮面高光随曲率连续变化，肘部与腰侧出现使用褶皱和轻微磨损，厚度让衣身保持一定挺度；避免塑料镜面、拉链无终点、皮片穿入身体、左右口袋失配或所有区域反射同一高光",
    enPrompt: "leather jacket constructed from joined leather panels shoulder and sleeve seams zipper or snaps pockets and lining, with highlights flowing continuously over curvature and believable wear creases at elbows and waist while material thickness preserves some structure; avoid plastic mirror shine zippers with no endpoint panels intersecting the body mismatched pockets or one identical highlight pasted across every surface",
  },
  "clothing-denim-jacket": {
    zhPrompt: "牛仔夹克展示粗斜纹丹宁、金属扣、胸袋、门襟、领片和双线车缝，水洗褪色集中在肩部、肘部和凸起接缝，面料在动作处形成硬挺折痕而非柔软丝褶；保持缝线沿衣片连续，避免全身均匀做旧、口袋悬浮、纽扣随机增殖或丹宁像光滑皮革",
    enPrompt: "denim jacket showing coarse twill metal buttons chest pockets placket collar and double topstitching, with washed fading concentrated on shoulders elbows and raised seams and movement producing firm angular creases rather than silky folds; keep stitching continuous across pattern pieces, avoiding uniform distress everywhere floating pockets multiplying buttons or denim rendered as smooth leather",
  },
  "clothing-bomber-jacket": {
    zhPrompt: "飞行夹克以短款鼓形衣身、罗纹领口袖口与下摆、前中拉链和略宽袖管构成，轻质外壳与内衬形成适度蓬松，弯臂时袖部压缩而腰部罗纹稳定贴合；避免整体像羽绒球、袖口消失、拉链错位、衣摆悬空或把军用徽章和品牌标识随意加入",
    enPrompt: "bomber jacket built from a short rounded body rib-knit collar cuffs and waistband centered front zipper and roomy sleeves, with a light shell and lining creating restrained volume while bent arms compress the sleeves and the waistband remains grounded; avoid turning the garment into a puffer ball vanished cuffs displaced zippers a floating hem or arbitrary military patches and brand marks",
  },
  "clothing-cardigan": {
    zhPrompt: "针织开衫保留前开襟、纽扣或无扣边、V 形或圆形领线、袖口与下摆罗纹，柔软织物从肩部自然下垂并在腰侧形成纵向褶皱，打开时左右前片受重力分开；避免前片粘合成套头衫、纽扣孔不对应、织纹方向混乱、衣摆穿腿或布料无厚度",
    enPrompt: "knit cardigan retaining an open front buttoned or plain bands a V or rounded neckline and ribbed cuffs and hem, with soft knit hanging from the shoulders and forming vertical folds at the waist while open fronts separate under gravity; avoid fusing it into a pullover mismatched buttons and holes incoherent knit direction a hem through the legs or fabric with no thickness",
  },
  "clothing-cloak": {
    zhPrompt: "长斗篷从颈部扣件或肩部结构悬垂，以完整大布片包围背部并留出前开口，厚重面料形成宽大纵褶，转身或风吹时下摆沿同一方向展开且仍受重力控制；避免没有固定点的悬浮布幕、斗篷穿过手臂、下摆无限延长、风向冲突或误画成带袖大衣",
    enPrompt: "long cloak suspended from a visible neck fastening or shoulder structure, using a broad continuous fabric panel around the back with a clear front opening, heavy cloth forming wide vertical folds and the hem opening in one direction during turning or wind while remaining gravity-bound; avoid a floating curtain with no attachment cloth intersecting arms an endless hem conflicting wind or conversion into a sleeved coat",
  },
  "clothing-wide-leg-pants": {
    zhPrompt: "阔腿裤从腰臀处合体后以宽直或轻微外扩裤管垂落，前后裆、侧缝、腰头和裤脚结构清楚，面料重量决定纵向褶线，行走时两条裤管分别摆动并保留腿间负形；避免裤腿融合成裙子、裆部消失、裤脚穿地、双腿比例被夸大或宽松度从膝下突然改变",
    enPrompt: "wide-leg trousers fitted through waist and hip before falling in broad straight or gently flared legs, with readable front and back rise side seams waistband and hems and fabric weight controlling long vertical folds; during walking each leg moves separately with negative space between them, avoiding fusion into a skirt missing crotch hems through the floor distorted leg proportions or width changing abruptly below the knee",
  },
  "clothing-jeans": {
    zhPrompt: "牛仔裤具有腰头、门襟、铆钉、前后袋、侧缝和清楚裤脚，丹宁粗斜纹与水洗在膝、髋和接缝处按使用规律变化，坐立时裆部与膝弯形成硬挺放射褶；避免口袋位置漂移、拉链无门襟、全腿同样破洞、布料像紧身乳胶或双腿被一块纹理粘连",
    enPrompt: "jeans with waistband fly rivets front and back pockets side seams and defined hems, where coarse denim twill and wash vary plausibly around knees hips and raised seams and sitting or standing produces firm radiating folds at crotch and knee; avoid drifting pockets a zipper without fly identical tears along both legs latex-like cling or one texture sheet fusing the legs",
  },
  "clothing-tailored-trousers": {
    zhPrompt: "西装裤通过腰头、前中门襟、斜插袋、中缝线和精确裤脚建立正式剪裁，臀裆留量保证站坐活动，垂坠面料让裤线纵向稳定并只在髋膝处出现克制褶皱；避免中缝弯曲断裂、裤腰悬空、裤裆过低、袋口贴图化或裤管像紧身打底裤",
    enPrompt: "tailored trousers defined by waistband centered fly slanted pockets pressed creases and precise hems, with enough seat and rise ease for standing and sitting and draping suiting cloth keeping vertical lines stable while folds remain restrained at hip and knee; avoid broken wandering creases a floating waistband dropped crotch printed-on pockets or legs rendered like tight leggings",
  },
  "clothing-overalls": {
    zhPrompt: "背带裤由胸前围片、可调肩带、金属扣、腰臀连接、侧缝和裤管构成，肩带从背部越过肩膀后真实扣在胸片，内搭上衣与背带层次清楚，坐立时胸片和裤腰共同受力；避免肩带凭空结束、左右扣件不一致、胸袋穿身体、裤装变连衣裙或带子与头发手臂粘连",
    enPrompt: "overalls constructed from a front bib adjustable shoulder straps metal fasteners waist and seat joining side seams and trouser legs, with straps crossing from the back over shoulders to attach visibly at the bib and the underlayer remaining distinct while bib and waist share tension during movement; avoid straps ending in midair mismatched hardware a bib pocket through the torso conversion into a dress or straps fused with hair and arms",
  },
  "clothing-joggers": {
    zhPrompt: "运动束脚裤以弹力腰头、抽绳、宽松臀腿、侧袋和脚踝罗纹收口形成舒适轮廓，针织或轻梭织面料在膝弯与裤脚上方堆出柔软褶皱，动作时裤腰稳定不滑移；避免抽绳无孔悬浮、裤脚收口消失、膝盖位置错误、两条裤腿融合或运动裤被误画成紧身裤",
    enPrompt: "joggers shaped by an elastic waistband drawcord relaxed seat and thigh side pockets and ribbed ankle cuffs, with knit or light woven fabric gathering softly behind knees and above cuffs while the waist stays secure during movement; avoid drawstrings floating without eyelets vanished cuffs misplaced knees fused trouser legs or joggers turning into compression tights",
  },
  "clothing-a-line-skirt": {
    zhPrompt: "A 字裙从腰部贴合并向下摆连续外扩，前后片、省道或褶量和侧缝共同维持清楚梯形轮廓，面料厚度决定下摆张度，行走或坐下时褶皱从腰髋向外展开；避免裙摆两侧角度不一致、腰线悬空、裙内腿部穿模、轮廓突然变伞裙或布料无重力贴腿",
    enPrompt: "A-line skirt fitted at the waist and widening continuously toward the hem, with front and back panels darts or controlled ease and side seams maintaining a clear trapezoid silhouette while fabric weight controls flare and movement sends folds outward from waist and hip; avoid uneven side angles a floating waistband legs intersecting the skirt sudden conversion into a full circle skirt or gravity-free cloth stuck to the legs",
  },
  "clothing-tulle-skirt": {
    zhPrompt: "纱裙由多层半透明薄纱、可见腰头和不透明内衬建立体积，每层边缘、长度和透明叠加略有差异，空气感来自轻质材料和层间空间而非实心膨胀；运动时外层延迟摆动，避免薄纱像烟雾消失、腿部无内衬暴露、所有层边缘完全重合或裙体像硬塑料罩",
    enPrompt: "tulle skirt built from multiple translucent mesh layers a visible waistband and an opaque lining, with slight variation in layer edge length and accumulated transparency so airiness comes from light material and spacing rather than solid inflation; outer layers trail during movement, avoiding tulle dissolving like smoke exposed legs without lining every edge perfectly coincident or a rigid plastic dome",
  },
  "pose-neutral-standing": {
    zhPrompt: "正面自然站立时头、胸廓、骨盆与双脚沿稳定垂直轴排列，双脚约与髋同宽并完整接触地面，膝盖放松不过伸，双臂自然垂落且左右略有真实差异；视线平直、呼吸感自然，避免军姿僵硬、双脚粘连、肩髋完全镜像、手掌贴腿或身体悬浮",
    enPrompt: "neutral front standing pose aligning head rib cage pelvis and feet around a stable vertical axis, feet about hip-width and fully grounded knees relaxed without hyperextension and arms hanging naturally with slight believable asymmetry; keep gaze level and breathing relaxed, avoiding rigid military posture fused feet perfectly mirrored shoulders and hips palms glued to thighs or a floating body",
  },
  "pose-three-quarter-standing": {
    zhPrompt: "三分之二侧身站立让骨盆与躯干相对镜头转约三十至六十度，近侧肩髋略大并形成清楚前后遮挡，头部可回看镜头但颈部旋转在自然范围，双脚方向支持身体朝向；避免把侧面与正面五官拼接、远侧肢体消失、肩髋扭向相反极端或双脚仍平行正对镜头",
    enPrompt: "three-quarter standing pose rotating pelvis and torso roughly thirty to sixty degrees from camera, with near shoulder and hip slightly larger and clear near-far occlusion while the head may return toward camera within natural neck range and foot direction supports body orientation; avoid combining frontal and profile facial features vanished far limbs shoulders and pelvis twisted to opposite extremes or feet still parallel and square to camera",
  },
  "pose-contrapposto": {
    zhPrompt: "重心偏移站姿把大部分体重落在一条支撑腿上，使该侧髋部抬高、膝盖稳定，另一条腿放松或轻触地面，骨盆与肩线形成自然反向倾斜并由脊柱柔和衔接；避免双腿同时承重却强扭骨盆、支撑脚悬空、腰部折断、肩线过度倾斜或姿势像即将跌倒",
    enPrompt: "contrapposto placing most body weight over one supporting leg so that hip rises and knee remains stable while the other leg relaxes or touches lightly, with pelvis and shoulder lines counter-tilting naturally through a gentle spinal curve; avoid forcing pelvic twist while both legs bear equal weight a floating support foot a broken waist excessive shoulder slope or a pose that appears to fall",
  },
  "pose-hands-in-pockets": {
    zhPrompt: "双手插袋姿势要明确口袋位置和开口方向，手掌部分进入袋内而手腕、前臂和肘部沿真实路径连接肩部，衣物在袋口周围产生轻微拉力，双手可采用不同深度增加自然感；避免手掌完全消失、手臂穿过衣服、口袋凭空生成、肘关节反折或双肩被强行抬高",
    enPrompt: "hands-in-pockets pose with pocket locations and opening directions clearly established, palms entering partially while wrists forearms elbows and shoulders follow plausible paths and garment fabric pulls subtly around each opening, with slightly different insertion depth allowed for natural asymmetry; avoid vanished hands arms passing through clothing invented pockets reversed elbows or shoulders forced unnaturally high",
  },
  "pose-leaning-wall": {
    zhPrompt: "倚墙站姿由肩背、手掌或一侧髋部与墙面形成明确接触点，身体重心向墙移动并由靠墙侧与双脚共同支撑，接触处衣料轻微压平且投影贴合；保持墙面透视与身体距离一致，避免身体悬在墙前、手掌穿墙、双脚离地、脊柱折角或影子方向与接触关系矛盾",
    enPrompt: "wall-leaning pose using a clear contact point at shoulder back palm or one hip, with center of mass shifting toward the wall and support shared by that contact and grounded feet, plus slight garment compression and attached shadow; keep wall perspective and body distance consistent, avoiding a figure hovering before the wall a hand passing through it feet off the ground a kinked spine or shadow contradicting contact",
  },
  "pose-hero-low-angle": {
    zhPrompt: "英雄式站姿以双脚稳定分开、胸廓打开、骨盆中立和下颌适度抬起形成自信轮廓，低机位透视可以增强高度但手脚尺寸仍受焦距控制，披风或道具围绕主轴辅助而不遮挡身体；避免夸张叉腰僵直、脚部无限放大、头部过小、武器无支撑或把自信表现成攻击性咆哮",
    enPrompt: "heroic low-angle stance using grounded separated feet an open rib cage neutral pelvis and moderately raised chin to create a confident silhouette, with low-camera perspective increasing stature while focal length controls hand and foot scale and cape or prop supports the main axis without hiding anatomy; avoid rigid exaggerated akimbo posing infinitely enlarged feet a tiny head unsupported weapons or replacing confidence with aggressive shouting",
  },
  "pose-sitting-chair": {
    zhPrompt: "端坐椅子时骨盆完整落在座面，坐骨承担重量，背部可直立但保持自然曲线，双脚稳定着地或按椅高合理悬垂，膝髋弯曲角度与座高一致，双手有明确落点；避免骨盆悬空、椅面穿身、膝盖高低无因、双脚穿地、手指粘在扶手或椅子比例无法承重",
    enPrompt: "upright chair sitting pose with pelvis fully resting on the seat and sit bones bearing weight, the back erect yet naturally curved, feet grounded or hanging plausibly for chair height, hip and knee angles matching the seat and hands placed deliberately; avoid a floating pelvis seat through the body unexplained knee heights feet through the floor fingers fused to armrests or a chair too small to support the figure",
  },
  "pose-cross-legged-sitting": {
    zhPrompt: "盘腿坐姿让骨盆稳定接触地面或坐垫，两条小腿在身体前方交叉并保持膝、踝方向符合关节活动范围，躯干从骨盆向上延伸，双手可落在膝部或腿前；明确左右腿遮挡关系，避免脚掌穿过大腿、膝盖反折、双腿融合成环或身体没有接触阴影",
    enPrompt: "cross-legged sitting pose with pelvis grounded on floor or cushion, lower legs crossing in front within natural knee and ankle ranges and torso rising from the pelvis while hands may rest on knees or before the legs; make left-right occlusion explicit, avoiding feet through thighs reversed knees legs fused into a loop or a body with no contact shadow",
  },
  "pose-floor-sitting": {
    zhPrompt: "席地而坐姿势根据选择的腿位让骨盆、腿部和一只支撑手形成稳定三点关系，躯干可放松倾斜但重心投影仍落在支撑范围内，衣物在臀部、膝弯和地面接触处产生压褶；避免臀部离地、手掌无承重却扭曲、腿部互穿、脚踝方向错误或地面穿过身体",
    enPrompt: "casual floor-sitting pose arranging pelvis legs and an optional supporting hand into a stable support relationship, allowing a relaxed torso lean while the projected center of mass remains inside the base and clothing compresses at seat bent knees and floor contact; avoid hips off the ground a distorted non-weight-bearing palm intersecting legs reversed ankles or the floor passing through the body",
  },
  "pose-kneeling": {
    zhPrompt: "单膝跪姿让一侧膝盖与小腿接触地面，另一只脚完整踩地并让膝盖位于脚踝上方，骨盆落在两处支撑之间，躯干可直立或前倾但受力链连续；地面接触处有衣料压缩，避免跪地膝盖悬空、前脚脚跟抬起无因、腿部穿插或骨盆扭断",
    enPrompt: "one-knee kneeling pose placing one knee and shin on the ground while the opposite foot plants fully with knee aligned over ankle, pelvis balanced between the supports and torso upright or leaning through a continuous force chain; show garment compression at contact, avoiding a hovering grounded knee an unexplained lifted front heel intersecting legs or a twisted broken pelvis",
  },
  "pose-sitting-steps": {
    zhPrompt: "台阶坐姿让骨盆落在某一级台阶，双脚位于更低踏步并保持不同高度或自然错开，膝髋角度由台阶尺寸决定，手可支撑在身侧但掌根真实受力；台阶透视和人物比例一致，避免腿穿踏步、骨盆坐在边缘外、双脚悬空、手掌粘墙或阶梯高度随机变化",
    enPrompt: "sitting-on-steps pose placing the pelvis on one tread and feet on lower levels at plausible staggered heights, with hip and knee angles determined by step dimensions and any supporting hand carrying weight through the palm heel; keep stair perspective and body scale coherent, avoiding legs through steps pelvis beyond the edge floating feet a hand glued to a wall or randomly changing riser heights",
  },
  "pose-lying-prone": {
    zhPrompt: "俯卧姿势让胸腹与骨盆沿地面或床面形成连续接触，头部由颈部轻微抬起或侧转，前臂可支撑上身但肘部位于肩下，双腿向后自然延伸并产生真实压痕；避免面部埋入平面、腰部反折、肘腕错位、脚部漂浮或身体与支撑面之间出现无理由空隙",
    enPrompt: "prone lying pose with chest abdomen and pelvis forming continuous contact along floor or bed, head lifted slightly through the neck or turned to one side, forearms optionally supporting the torso with elbows beneath shoulders and legs extending naturally behind with believable compression; avoid the face buried through the plane a broken lower back misaligned elbows and wrists floating feet or unexplained gaps beneath the body",
  },
  "pose-side-lying": {
    zhPrompt: "侧躺姿势让一侧肩、胸廓、骨盆与腿部依次接触支撑面，下侧手臂放在身体前方或托头而不被压断，上侧腿可轻微前移维持平衡，脊柱和颈部保持连续；接触处有柔和压痕，避免双肩同时平躺、骨盆悬空、手臂穿身、双腿融合或头部无支撑漂浮",
    enPrompt: "side-lying pose with one shoulder rib cage pelvis and leg contacting the support in sequence, the lower arm placed forward or supporting the head without being crushed and the upper leg shifting slightly for balance while spine and neck remain continuous; show soft compression at contact, avoiding both shoulders lying flat a floating pelvis an arm through the torso fused legs or an unsupported hovering head",
  },
  "pose-reclining": {
    zhPrompt: "半躺倚靠由骨盆落在座面、背部或肘前臂接触靠垫形成斜向支撑，胸廓打开但腰椎不过度塌陷，双腿根据家具长度自然伸展或弯曲，手掌和脚部有明确落点；避免身体像悬浮斜板、肘部无接触承重、脊柱折断、家具穿身或双腿与座面透视矛盾",
    enPrompt: "reclining pose supported diagonally by pelvis on the seat and back elbow or forearm against a cushion, with rib cage open without collapsing the lower spine and legs extending or bending according to furniture length while hands and feet have clear placements; avoid a body hovering like a rigid plank an elbow bearing weight without contact a broken spine furniture through the torso or legs contradicting seat perspective",
  },
  "pose-curling-up": {
    zhPrompt: "蜷缩姿势让髋膝向胸前屈曲、双臂环抱小腿或身体，脊柱形成连续圆弧并由肩颈顺势内收，重心完整落在座面或侧卧接触区，手指与腿部遮挡关系清楚；避免膝盖穿胸、手臂形成闭合圆环、颈部折叠、四肢数量混乱或身体缩成无骨球体",
    enPrompt: "curled-up pose flexing hips and knees toward the chest with arms wrapping the shins or torso, spine forming one continuous curve and shoulders and neck following inward while weight remains grounded on the seat or side contact area and hand-leg occlusion stays clear; avoid knees through the chest arms forming an impossible closed loop a folded neck confused limb count or a boneless spherical body",
  },
  "pose-walking": {
    zhPrompt: "行走动作表现一脚承重、另一脚向前摆动的步态瞬间，骨盆随支撑腿轻微升降，肩部与手臂自然反向摆动，脚跟到脚尖的滚动和身体前移方向一致；衣摆和头发响应速度，避免双脚同时平贴、同侧手脚同步僵摆、迈步腿反折或人物在原地漂浮",
    enPrompt: "walking gait captured with one leg bearing weight and the other swinging forward, pelvis rising subtly over the support leg while shoulders and arms counter-swing naturally and heel-to-toe roll agrees with forward travel; clothing and hair respond to speed, avoiding both feet flat at once rigid same-side arm-leg motion a reversed stepping knee or a figure hovering in place",
  },
  "pose-running": {
    zhPrompt: "奔跑动作以单脚短暂支撑或双脚腾空阶段表现，躯干略向前、髋膝快速屈伸、后腿蹬地并由对侧手臂前摆维持平衡，落脚点和运动方向清楚；衣物与发丝向后延迟，避免双脚并排站立却加拖影、膝盖反折、手臂同向摆动、步幅超出关节范围或没有地面受力",
    enPrompt: "running action shown in a single-support or brief airborne phase, torso leaning slightly forward hips and knees cycling rapidly rear leg pushing off and opposite arm driving ahead for balance with a clear landing point and travel direction; clothing and hair trail behind, avoiding two parallel planted feet with added blur reversed knees arms swinging together stride beyond joint range or motion with no ground force",
  },
  "pose-jumping": {
    zhPrompt: "跳跃姿势明确起跳后的腾空阶段，髋膝根据跳跃方向收起或伸展，双臂用于提升、旋转或着陆平衡，身体重心与预期落点连成可信抛物线，衣物和松散物件稍后跟随；避免无起跳来源悬浮、双腿长度变化、脚尖穿地、所有肢体随机张开或运动模糊遮掉关节",
    enPrompt: "jumping pose clearly captured after takeoff, hips and knees tucking or extending according to travel direction and arms contributing lift rotation or landing balance while center of mass follows a credible arc toward an implied landing point and loose garments trail slightly; avoid source-free levitation changing leg length feet intersecting ground random star-shaped limbs or blur hiding all joints",
  },
  "pose-reaching": {
    zhPrompt: "伸手触碰动作从肩胛、肩关节、肘和手腕形成连续方向链，身体会向目标轻微移重并由另一侧脚或手保持平衡，指尖与目标之间距离明确且视线同步；若已接触则出现轻微压感，避免手臂无限伸长、肩膀脱位、指头融合、手掌穿过目标或视线指向别处",
    enPrompt: "reaching action forming one directional chain through shoulder blade shoulder elbow wrist and fingers, with body weight shifting subtly toward the target and the opposite foot or hand maintaining balance while gaze follows the same destination and fingertip distance remains clear; if contact occurs show slight pressure, avoiding elongated arms dislocated shoulders fused fingers a palm through the object or gaze pointing elsewhere",
  },
  "pose-turning-around": {
    zhPrompt: "转身动作捕捉双脚换向、骨盆先行或肩部先行的动态中间帧，躯干沿脊柱产生连续扭转，头部和视线随动作略有提前或滞后，衣摆与头发沿原运动方向延迟；区别于静态回眸，避免双脚固定却上身旋转一百八十度、腰部折断、左右肢体互穿或全身没有惯性",
    enPrompt: "turning-around action captured mid-transition as feet redirect and either pelvis or shoulders initiate the rotation, torso twisting continuously through the spine while head and gaze lead or lag slightly and garments and hair trail the previous direction; distinguish it from a static look-back pose, avoiding fixed feet with a 180-degree torso broken waist crossing limbs or a body with no inertia",
  },
  "pose-hair-flip": {
    zhPrompt: "甩发动作由头颈和上躯干的转动产生，发束从发根到发梢沿同一运动弧依次滞后，较重发束弧度更低、细碎发丝在边缘分离，面部仍保持可辨；避免头颈过度反折、全部头发像硬扇、发丝穿脸、左右风向矛盾或只加放射模糊代替真实运动",
    enPrompt: "hair-flip action generated by rotation of head neck and upper torso, with strands trailing sequentially from roots to ends along one motion arc, heavier locks following lower curves and fine flyaways separating at edges while the face remains readable; avoid an overextended neck all hair forming a rigid fan strands through the face conflicting directions or radial blur substituted for physical movement",
  },
  "pose-ballet-dance": {
    zhPrompt: "芭蕾舞姿以清楚支撑脚、外开髋位、延伸膝踝和有控制的躯干轴线建立，手臂从肩背柔和展开，颈部和视线延续动作方向，足尖或半脚尖必须与训练阶段和地面接触相符；避免脚踝反折、膝盖内扣、无支撑高抬腿、僵硬手指或把芭蕾误作普通跳跃摆拍",
    enPrompt: "ballet pose built from a clear supporting foot hip turnout extended knees and ankles and a controlled torso axis, with arms opening softly from the back and neck and gaze continuing the movement while pointe or demi-pointe use matches training and floor contact; avoid reversed ankles collapsed knees unsupported extreme leg height rigid fingers or a generic jump mislabeled as ballet",
  },
  "pose-street-dance": {
    zhPrompt: "街舞动作依据一个具体律动或定格瞬间组织重心、胸髋分离、膝部弹性和手臂节奏，鞋底与地面保持摩擦或腾空逻辑，宽松服装随急停产生方向明确的褶皱；姿态可不对称但受力清楚，避免随机关节扭曲、手脚同向僵摆、漂浮无落点或用涂鸦背景代替舞蹈动作",
    enPrompt: "street-dance pose organized around one specific groove or freeze with readable weight chest-hip isolation spring through knees and rhythmic arm accents, while shoe-floor friction or airborne logic remains credible and loose clothing forms directional folds at sudden stops; asymmetry is welcome when force is clear, avoiding random joint distortion rigid same-direction limbs unsupported floating or graffiti background used instead of actual dance movement",
  },
  "pose-ballroom-dance": {
    zhPrompt: "双人舞姿让领舞与跟随者通过一只相握手和肩背或上臂接触形成稳定舞架，双方脚步沿同一节奏错开，身体间距、视线和旋转轴符合舞步，衣摆随共同运动展开；避免手掌融合、四条腿互穿、身高比例变化、双方各跳不同方向或拥抱过紧失去舞架结构",
    enPrompt: "ballroom dance pose connecting lead and follow through one joined hand and a controlled shoulder-back or upper-arm frame, with staggered steps sharing one rhythm and spacing gaze and rotation axis coherent with the dance while garments open around common movement; avoid fused hands four legs intersecting changing body scale partners moving in unrelated directions or a tight hug replacing the dance frame",
  },
  "scene-floating-island-city": {
    zhPrompt: "浮空岛城由具有厚度的岩体岛基、可读的城市街区、桥梁、码头或升降设施组成，瀑布必须从岛上水源和排水系统落入云海，建筑尺度随距离递减并由雾层分隔，岛体悬浮机制在世界观中保持一致；避免多个相同岛屿复制、建筑贴在垂直岩壁、瀑布无水源、桥梁无落点或云层像实心地板",
    enPrompt: "floating-island city built on rock masses with visible thickness and readable districts bridges docks or lift infrastructure, with waterfalls fed by island water and drainage before falling into the cloud sea, architecture diminishing with distance through haze and one coherent in-world suspension logic; avoid cloned identical islands buildings pasted onto vertical cliffs source-free waterfalls bridges with no destination or clouds behaving like a solid floor",
  },
  "scene-underwater-ruins": {
    zhPrompt: "海底遗迹以沉降倾斜的石柱、墙体和铺地建立原有建筑秩序，珊瑚、海草、沉积物和生物附着随水深与流向分布，蓝绿环境光、悬浮颗粒和水面焦散共同说明水体；保持遗迹尺度和可探索路径，避免干燥石材、鱼群穿墙、无水光束、所有表面同样长满珊瑚或泡泡满屏",
    enPrompt: "underwater ruins retaining the former architectural order through settled tilted columns walls and paving, with coral seagrass sediment and marine growth distributed by depth and current while blue-green ambient light suspended particles and surface caustics establish water; preserve monument scale and an explorable route, avoiding dry stone fish through walls light shafts without water identical coral coverage on every surface or bubbles filling the frame",
  },
  "scene-space-station": {
    zhPrompt: "空间站观景台以承压舱壁、加固观察窗、扶手、座椅或工作台和密封通道形成可使用空间，窗外行星弧线、恒星与舱内尺度保持物理一致，冷暖实景灯沿结构布置并在玻璃上产生克制反射；避免开放式无舱壁平台、地球尺寸错误、窗外声音视觉化、玻璃反射遮满星空或无重力物件随意悬浮",
    enPrompt: "space-station observation deck built from pressure hull reinforced viewing windows handrails seating or consoles and sealed circulation, with planetary curvature stars and interior scale physically coherent and practical warm-cool lights attached to structure with restrained glass reflection; avoid an open unpressurized balcony incorrect planet size visualized sound outside windows reflections hiding the entire view or random objects floating without a zero-gravity context",
  },
  "scene-alien-planet": {
    zhPrompt: "异星峡谷通过一种连贯地质机制塑造陌生岩柱、侵蚀层和谷底路径，天空颜色、多月亮位置、重力和奇异植被遵循同一生态逻辑，空气散射拉开远近尺度；保留可辨地平线和落脚面，避免随机混合所有科幻元素、每块岩石发光、月亮大小方向矛盾或植被像地球盆栽换色",
    enPrompt: "alien canyon shaped by one coherent geological process into unfamiliar spires erosion strata and a traversable valley floor, with sky color moon placement gravity and unusual vegetation following one shared ecology while atmospheric scattering separates distance; retain a readable horizon and support plane, avoiding every science-fiction motif mixed at random glowing rocks everywhere contradictory moon scale or direction and Earth houseplants merely recolored",
  },
  "scene-magical-academy": {
    zhPrompt: "魔法学院以可通行大厅、教室、楼梯、书架和训练设施建立真实教育空间，悬浮星仪、符号或法术只作为有规则的教学工具，并由烛光、天窗或法术光提供明确照明，建筑风格保持统一；避免复制知名影视学校、楼梯无连接、随机符号贴满墙、所有物品悬浮或学生与家具比例失衡",
    enPrompt: "magical academy designed as a functioning educational environment with navigable halls classrooms stairs libraries and training facilities, where floating instruments symbols or spells operate as rule-bound teaching tools and lighting comes from candles skylights or specific magic within one architectural language; avoid copying a famous fictional school disconnected stairs symbols covering every wall everything floating or students mis-scaled beside furniture",
  },
  "scene-apocalyptic-ruins": {
    zhPrompt: "废土城市遗迹保留道路、楼体骨架和基础设施的原始城市逻辑，再通过坍塌方向、风化、植被回占和有限遗留物说明长期无人维护，光线与天气支持寂静尺度而非灾难瞬间；设置可行走路线，避免每栋楼同样破损、满屏火焰、无来源车辆残骸、乱码警示牌或把废墟做成杂物堆",
    enPrompt: "post-apocalyptic urban ruins preserving the original logic of streets structural frames and infrastructure, then showing long abandonment through directional collapse weathering ecological return and restrained remnants, with light and weather supporting quiet scale rather than an active disaster; retain a traversable route, avoiding identical damage on every building flames everywhere source-free wrecked vehicles gibberish warnings or ruins reduced to a random junk pile",
  },
  "scene-steampunk-workshop": {
    zhPrompt: "蒸汽朋克工坊由工作台、车床、锅炉、压力表、传动轴、铜管和检修通道构成，齿轮只出现在需要传递动力的位置，蒸汽从阀门或接头泄出并受光线照亮，金属磨损集中在操作区；避免把齿轮贴满墙、管道无连接、压力设备没有安全结构、蒸汽穿墙或用统一棕色滤镜代替机械逻辑",
    enPrompt: "steampunk workshop organized around benches lathes boilers gauges drive shafts brass pipes and maintenance access, with gears appearing only where power must transfer, steam escaping from valves or joints and becoming visible in light and metal wear concentrated at operating zones; avoid gears wallpapered everywhere disconnected pipes pressure vessels without safety structure steam through walls or a uniform brown filter replacing mechanical logic",
  },
  "scene-dream-cloud-world": {
    zhPrompt: "梦境云端世界选择一种清楚的超现实规则，例如阶梯穿过云层或建筑倒置漂浮，并用柔和天光、有限粉蓝配色和大面积空气留白保持宁静，主体与云层仍有尺度和遮挡关系；避免随机堆叠独角兽和彩虹、云朵像棉花球复制、所有物体无重力散落或配色过甜失去层次",
    enPrompt: "dream cloud world governed by one clear surreal rule such as stairs passing through clouds or inverted architecture floating above them, using soft sky light a restrained pink-blue palette and broad atmospheric negative space while subjects retain scale and occlusion against cloud layers; avoid random unicorns and rainbows cloned cotton-ball clouds every object scattered without gravity or sugary color that erases depth",
  },
  "scene-bamboo-forest-path": {
    zhPrompt: "竹林小径以不同粗细和年龄的竹竿、节间、枝叶与落叶地面建立真实群落，道路随地形轻微弯曲并有远景出口，雾气和林间光随竹冠遮蔽形成前后层次；保持竹竿垂直生长但不过度平行，避免复制栅栏感、竹叶尺寸一致、路径悬空、满屏绿色辉光或加入无关热带植物",
    enPrompt: "bamboo forest path formed by culms of varied age and diameter visible nodes branches foliage and leaf-litter ground, with the trail bending gently through terrain toward a distant exit and canopy-filtered haze and light separating depth; keep bamboo generally upright without fence-like parallel cloning, avoiding identical leaf scale a floating path green glow everywhere or unrelated tropical vegetation",
  },
  "scene-terraced-rice-fields": {
    zhPrompt: "梯田晨光场景让等高线田埂顺山势层层延伸，每级水田有合理宽度、灌排连接和水面反射，村落与劳作人物按山体尺度布置，低角度晨光与薄雾逐层衰减；避免梯田像规则楼梯、田埂断裂、水面在陡坡上垂直、人物巨大或每层反射同一片天空贴图",
    enPrompt: "terraced rice fields following mountain contours in successive bands, each paddy having plausible width connected irrigation and reflective water while village and workers match landscape scale and low morning light and mist diminish through layers; avoid terraces shaped like perfect stairs broken bunds water standing vertically on steep slopes giant people or the same sky reflection pasted into every level",
  },
  "scene-karst-river-valley": {
    zhPrompt: "喀斯特河谷由陡峭石灰岩峰丛、河流冲积平地和自然岸线构成，峰体溶蚀纹理与植被覆盖随坡度变化，水面倒影受流速和视角影响，湿润空气使远峰逐层变淡；保持河道去向与山体尺度，避免山峰复制成锯齿、镜面倒影完全对称、河流无入口出口或混入雪山地貌",
    enPrompt: "karst river valley built from steep limestone tower clusters an alluvial floor and natural banks, with dissolution texture and vegetation changing by slope while water reflection responds to current and viewpoint and humid air fades distant peaks progressively; preserve river direction and mountain scale, avoiding cloned sawtooth peaks perfectly mirrored water a river with no source or outlet or unrelated alpine snow geology",
  },
  "scene-glacier-ice-cave": {
    zhPrompt: "冰川冰洞以受压冰层、气泡带、裂隙和融水雕刻形成半透明蓝色洞壁，洞顶厚度、入口日光和内部反射共同说明空间，地面湿滑但保留可判断路径与尺度人物；颜色来自冰体吸收而非霓虹灯，避免玻璃宫殿般规则墙面、满洞水晶、无来源蓝光、尖冰穿人或洞顶没有承重厚度",
    enPrompt: "glacier ice cave shaped by compressed ice layers bubble bands fractures and meltwater into translucent blue walls, with roof thickness entrance daylight and internal reflection explaining depth plus a wet but readable route and scale figure; color comes from light absorption through ice rather than neon, avoiding regular glass-palace walls crystals everywhere source-free blue glow spikes through people or a roof with no structural mass",
  },
  "layout-bg-vermilion-paper": {
    zhPrompt: "朱红色哑光纸背景采用均匀但不过度纯平的传统暖红，近看可见细小纸纤维、轻微吸墨斑与压平痕迹，漫射光下几乎无镜面高光，适合节庆、国风或产品衬底并保留清楚主体分离；避免塑料红、渐变霓虹、金箔花纹、可读文字、折痕抢眼或整面无纹理色块",
    enPrompt: "vermilion matte paper background using a warm traditional red that is even without becoming digitally flat, with fine fibers subtle absorbent mottling and pressed traces visible at close range and almost no specular glare under diffuse light; suitable for festive East Asian or product presentation while separating the subject, avoiding plastic red neon gradients gold motifs readable text distracting creases or a textureless color fill",
  },
  "layout-bg-chinese-red-silk": {
    zhPrompt: "中国红丝绸背景由连续织物铺陈，细密经纬与柔亮丝光随褶皱曲率移动，宽缓垂褶从固定点自然下落，亮部呈温润红而暗部保留深红层次；光源方向与高光带一致，避免塑料缎面、每条褶皱同宽、无支撑悬浮、色彩溢出主体或擅自加入龙凤文字图案",
    enPrompt: "Chinese red silk background made from one continuous textile with fine weave and soft luster moving across fold curvature, broad relaxed drapes falling naturally from visible support points and highlights remaining warm red while shadows deepen without turning black; align sheen with the light direction, avoiding plastic satin identical fold widths unsupported floating cloth color spill overwhelming the subject or invented dragons phoenixes and text",
  },
  "layout-bg-xuan-paper": {
    zhPrompt: "宣纸背景呈温和米白或淡灰白，长短植物纤维随机交织，纸面薄而哑光，对墨或水有轻微吸收扩散但本身保持干净平整，边缘和厚度只在需要时可见；适合作为水墨、书画或极简设计底材，避免普通打印纸、强烈皱纹、陈旧污渍、规则网格纤维或把纸面画成云雾",
    enPrompt: "xuan paper background in a gentle warm white or pale gray-white with randomly interwoven long and short plant fibers, a thin matte clean surface that allows restrained ink or water absorption when used while remaining mostly flat and showing edge thickness only where needed; suited to ink painting calligraphy or minimal design, avoiding printer paper heavy wrinkles antique stains regular fiber grids or paper rendered as atmospheric fog",
  },
  "layout-bg-warm-ivory-studio": {
    zhPrompt: "暖象牙无缝影棚背景由垂直背板平滑过渡到地面形成无折角弧面，象牙白在主光和补光下产生轻柔明度渐变，主体脚下保留可信接触阴影但背景没有可见接缝；色温保持中性偏暖，避免纯白过曝、明显地平线、脏黄滤镜、中心光斑过强或渐变出现条带",
    enPrompt: "warm ivory seamless studio sweep curving smoothly from vertical backdrop into floor without a hard corner, with ivory white receiving a gentle value gradient from key and fill lights and retaining a believable contact shadow beneath the subject while no seam is visible; keep the tone neutral-warm, avoiding clipped pure white a hard horizon dirty yellow filtering an overpowering central hotspot or banded gradients",
  },
  "layout-bg-black-velvet": {
    zhPrompt: "黑色天鹅绒背景利用密集短绒吸收大部分入射光，只在掠射角和褶皱边缘出现极细柔光，黑位深但仍能分辨绒向与少量层次，布料从固定点平稳垂落；适合珠宝或低调肖像，避免纯数字黑洞、闪亮缎面、灰尘满布、褶皱压过主体或背景边缘露出支架",
    enPrompt: "black velvet background using dense short pile to absorb most incident light, revealing only a fine soft sheen at grazing angles and fold edges so blacks remain deep yet retain nap direction and limited depth while cloth hangs from a stable support; suited to jewelry or low-key portraits, avoiding a digital black void shiny satin dust everywhere folds overpowering the subject or exposed stands at the edges",
  },
  "layout-bg-brushed-dark-metal": {
    zhPrompt: "深色拉丝金属背景具有同一加工方向的细密线纹、冷灰基底和随视角移动的窄幅反射，高光被拉丝打散而非镜面复制环境，板材接缝与厚度克制可见；保持纹理尺度一致，避免随机交叉划痕、塑料灰渐变、满屏强反射、锈蚀污染或拉丝方向在各区域突然旋转",
    enPrompt: "dark brushed-metal background with fine linear grain following one machining direction on a cool gray base and narrow view-dependent reflections, the brushing diffusing highlights rather than mirroring the environment while panel seams and thickness remain restrained; keep grain scale coherent, avoiding random cross scratches plastic gray gradients overwhelming reflections rust contamination or brushing direction rotating unpredictably across regions",
  },
  "layout-bg-terrazzo": {
    zhPrompt: "水磨石背景由浅色或中性色胶结基体包裹不同尺寸、形状和矿物色彩的石粒，切磨后的表面平整并带克制哑光或半光反射，颗粒在透视中尺度稳定且随机分布；适合现代产品和室内视觉，避免彩纸屑感、颗粒规则重复、所有石粒同色同形、镜面过亮或接缝穿过主体",
    enPrompt: "terrazzo background made from a light or neutral cementitious matrix containing stone chips of varied size shape and mineral color, ground to a flat surface with restrained matte or semi-polished reflection while aggregate scale remains stable in perspective and distribution feels random; suited to modern product and interior visuals, avoiding confetti appearance tiled repetition identical chips mirror glare or seams cutting through the subject",
  },
  "layout-bg-bamboo-fiber": {
    zhPrompt: "竹纤维背景呈淡麦黄或自然浅棕，压制植物纤维沿大致纵向交错分布，可见细长丝束、微小节点与哑光多孔表面，整体平整但保留轻微手工不均；强调环保自然材料而非竹竿图案，避免木纹年轮、草席编织、规则竖条贴图、强亮清漆或绿色滤镜",
    enPrompt: "bamboo-fiber background in pale straw yellow or natural light brown, with pressed plant fibers crossing in a mostly vertical flow and showing slender bundles tiny nodes and a matte porous surface that stays flat with slight handmade variation; emphasize the sustainable material rather than bamboo-stalk imagery, avoiding wood growth rings woven mat patterns regular striped texture glossy varnish or a green filter",
  },
  "layout-bg-cloud-sky": {
    zhPrompt: "云朵天空背景采用具有明确光源和高度层次的真实天空，近云体积、远云尺度和蓝色空气透视自然递减，主体周围预留干净负空间并避免云边切入轮廓；可明朗但保留高光细节，避免重复棉花云、纯蓝色块、无方向白光、过度 HDR、地平线歪斜或幻想建筑混入",
    enPrompt: "cloud-sky background using a believable atmosphere with a clear light source and altitude layers, cloud volume nearby and scale and blue aerial perspective diminishing into distance while clean negative space surrounds the subject and cloud edges avoid tangencies; keep it bright without clipping detail, avoiding cloned cotton clouds a flat blue fill directionless white light excessive HDR a tilted horizon or unrelated fantasy architecture",
  },
  "layout-bg-ink-wash": {
    zhPrompt: "水墨烟云背景以吸水纸上的淡墨层、边缘回渗、水痕和少量干笔建立远近，墨色从留白到灰黑逐层过渡并在主体区域主动减弱，形态像山岚或云气但不描成完整景物；保持大面积呼吸感，避免数字烟雾滤镜、满屏黑墨、重复云纹、硬边矢量渐变或文字印章",
    enPrompt: "ink-wash mist background built from pale ink layers capillary backruns water edges and limited dry-brush marks on absorbent paper, transitioning from open white through gray to deep ink while deliberately fading around the subject and suggesting mountain haze or cloud without becoming a complete landscape; preserve broad breathing space, avoiding a digital smoke filter black ink everywhere repeating cloud motifs hard vector gradients or text and seals",
  },
  "bg-misty-blue-studio-sweep": {
    zhPrompt: "雾蓝无缝影棚由蓝灰背板向地面连续弯曲，蓝灰色调低饱和并随柔光从中心到边缘缓慢变化，主体下方接触阴影和轻微地面反射说明空间但不出现墙地接缝；适合冷静科技或护肤产品，避免赛博霓虹、纯蓝抠图布、渐变条带、地面镜像过强或雾气遮住轮廓",
    enPrompt: "misty blue seamless studio sweep curving continuously from a blue-gray backdrop to the floor, with low saturation and a slow soft-light transition from center to edge plus a contact shadow and faint floor reflection establishing space without a wall-floor seam; suitable for calm technology or skincare products, avoiding cyber neon chroma-key blue gradient banding strong mirror reflection or haze obscuring the silhouette",
  },
  "bg-natural-linen": {
    zhPrompt: "天然亚麻背景展示不完全均匀的经纬纱、细小纱结和温暖原麻色，布面哑光、透气且略有粗糙感，宽缓褶皱随悬挂或铺放方向自然形成，光线只产生柔和明暗；避免黄麻麻袋般过粗、规则网格、丝绸高光、污渍破洞、褶皱随机翻转或主体被织纹干扰",
    enPrompt: "natural linen background showing slightly irregular warp and weft tiny slubs and a warm flax tone, with a matte breathable mildly coarse surface and broad relaxed folds following the hanging or laid direction under soft tonal light; avoid burlap-level coarseness a perfect grid silk sheen stains and holes folds reversing randomly or weave contrast competing with the subject",
  },
  "bg-deep-navy-velvet": {
    zhPrompt: "深海军蓝天鹅绒背景保留接近黑色的蓝色底调，绒毛方向使掠射光形成窄而柔的深蓝高光，褶皱层次比纯黑天鹅绒更易分辨但仍保持吸光和庄重；适合金属、珠宝或正式人像，避免亮蓝缎面、紫色偏色、黑位堵死、褶皱过密或绒面像毛皮",
    enPrompt: "deep navy velvet background retaining a blue undertone close to black, with pile direction creating narrow soft dark-blue highlights under grazing light so folds remain more legible than pure black velvet while preserving absorption and formality; suited to metal jewelry or formal portraits, avoiding bright blue satin purple color cast crushed blacks overly dense folds or velvet rendered as fur",
  },
  "bg-recycled-kraft-paper": {
    zhPrompt: "再生牛皮纸背景呈自然棕灰色，短纤维、回收纸屑和轻微色差随机嵌在哑光纸浆中，表面平整但不精制，边缘可见适度厚度和毛边；适合环保包装或手作设计，避免木板纹理、咖啡污渍做旧、规则彩点、瓦楞沟槽、印刷文字或纤维大到像草杆",
    enPrompt: "recycled kraft-paper background in a natural brown-gray tone with short fibers reclaimed flecks and slight color variation embedded randomly in matte pulp, flat yet unrefined and showing modest edge thickness or deckle when visible; suited to sustainable packaging and handmade design, avoiding wood grain coffee-stain aging regular colored dots corrugation readable print or fibers enlarged into straw",
  },
  "bg-white-marble": {
    zhPrompt: "白色大理石背景以乳白石基、少量连续灰色矿脉和半透明晶体深度构成，抛光程度决定柔和反射但仍可看到石材内部层次，纹脉跨越画面时方向连贯且不过密；适合高端产品衬底，避免随机闪电裂纹、纯白塑料、每块区域不同石种、镜面倒影或金色矿脉喧宾夺主",
    enPrompt: "white marble background formed by a milky stone base a limited number of continuous gray mineral veins and subtle crystalline depth, with polish controlling gentle reflection while internal stone layers remain visible and veins travel coherently without crowding the frame; suited to premium product presentation, avoiding random lightning cracks plain white plastic mixed stone species across patches mirror reflections or dominant gold veining",
  },
  "bg-natural-corkboard": {
    zhPrompt: "天然软木板背景由压制树皮颗粒形成暖棕色多孔表面，颗粒大小、孔隙和深浅随机但密度均衡，哑光质地吸光并保留轻微厚度，适合便签、手作或自然产品；避免碎石墙感、重复贴图接缝、木纹年轮、过度锐利孔洞、满板图钉纸张或主体边缘被颗粒吞没",
    enPrompt: "natural corkboard background made from compressed bark granules in a warm brown porous surface, with varied particle size cavities and tone distributed evenly and a matte light-absorbing finish plus slight visible thickness; useful for notes crafts or natural products, avoiding a stone-wall appearance repeating texture seams wood growth rings overly sharp holes a board already crowded with pins and papers or grain swallowing subject edges",
  },
  "bg-glazed-ceramic-tile": {
    zhPrompt: "釉面陶瓷砖背景由尺寸一致的砖片、窄而连续的填缝和轻微烧成色差组成，釉面反射随光源和砖面曲率变化，边缘可有细微手工不齐但整体铺贴平整；明确透视与接缝比例，避免无限镜面、塑料方格、每块砖随机花色、填缝断裂或高光跨越多块砖不变化",
    enPrompt: "glazed ceramic-tile background composed of consistently sized tiles narrow continuous grout and slight firing variation, with glaze reflections responding to light source and tile curvature and tiny handmade edge irregularity within an overall flat installation; preserve perspective and joint scale, avoiding an endless mirror plastic checkerboard random motifs on every tile broken grout or one highlight crossing many tiles unchanged",
  },
  "bg-leafy-shadow-plaster": {
    zhPrompt: "树影石膏墙背景以温和浅色矿物墙面承接真实枝叶投影，投影方向、软硬和尺度由窗外距离与阳光角度决定，叶影局部重叠并随墙面细孔和轻微抹痕变化，主体区域保持可读；避免直接贴上叶片图案、无来源多方向影子、纯黑硬边、墙面像纸张或叶影覆盖全部画面",
    enPrompt: "leaf-shadow plaster wall background using a pale mineral surface to receive real branch and foliage shadows whose direction softness and scale follow sunlight angle and distance outside the frame, with overlapping silhouettes responding subtly to pores and trowel marks while the subject zone remains readable; avoid pasted leaf graphics multiple source-free shadow directions pure black cutout edges a paper-like wall or foliage shadow covering the entire image",
  },
  "bg-pale-oak-grain": {
    zhPrompt: "浅橡木纹背景呈淡蜂蜜或米金色，长直纹理间穿插少量山形纹和细密导管，木板拼接方向一致、宽度合理，哑光透明涂层保留触感并产生柔和反射；适合北欧或自然产品，避免深胡桃色调、重复木纹贴图、板缝无透视、树结过多、亮漆镜面或木纹穿过接缝",
    enPrompt: "pale oak-grain background in light honey or beige-gold, with mostly long straight grain plus limited cathedral patterns and fine pores, boards joined in one direction at plausible widths and protected by a matte clear finish that preserves touch with soft reflection; suited to Nordic or natural products, avoiding dark walnut color repeated grain tiles seams without perspective excessive knots mirror varnish or grain continuing through board joints",
  },
  "bg-raw-concrete": {
    zhPrompt: "清水混凝土墙背景呈中性灰色，细小气孔、模板接缝、拉杆孔和轻微色差依据真实浇筑工艺分布，表面哑光坚实且大面积保持克制，侧光可揭示浅微起伏；适合工业极简视觉，避免破败裂墙、均匀噪点滤镜、砖纹、夸张水渍、重复孔洞或把混凝土画成粗糙岩石",
    enPrompt: "raw architectural-concrete wall background in neutral gray with fine air pores formwork joints tie holes and slight tonal variation distributed according to real casting, the surface matte solid and restrained across broad areas while side light reveals shallow relief; suited to industrial minimal visuals, avoiding a ruined cracked wall uniform noise filter brick pattern exaggerated leaks repeating holes or concrete rendered as rough natural rock",
  },
  "bg-antique-parchment": {
    zhPrompt: "古典羊皮纸背景呈暖象牙至浅赭色，纤维与胶质表面因年代产生不均匀氧化、边缘暗化和少量自然波浪，中心仍保留可书写的干净区域，厚度与透光感符合真实皮纸或历史纸张；避免咖啡泼洒式做旧、烧焦破洞、藏宝图纹样、乱码文字、重复污点或整体棕黑看不清主体",
    enPrompt: "antique parchment background ranging from warm ivory to pale ochre, with fibrous sized surface showing uneven oxidation edge darkening and limited natural waviness while the center remains clean enough for content and thickness and translucency feel like real vellum or historic paper; avoid coffee-spill aging burned holes treasure-map motifs gibberish text repeated stains or an overall dark brown field that obscures the subject",
  },
  "bg-translucent-acrylic": {
    zhPrompt: "半透明亚克力背景由有清楚厚度和抛光边缘的板材组成，光线穿过后产生柔和扩散、轻微折射与边缘亮线，板后物体只形成朦胧色块而非完全透明，接触面和支架保持简洁；适合现代产品摄影，避免玻璃裂纹、塑料浑浊、无厚度色片、过强镜像或板材悬空无支撑",
    enPrompt: "translucent acrylic background made from panels with readable thickness and polished edges, transmitting light as soft diffusion mild refraction and a bright edge line while objects behind become blurred color shapes rather than fully visible and contacts or supports remain clean; suited to modern product photography, avoiding glass cracks cloudy cheap plastic thicknessless color sheets strong mirror images or unsupported floating panels",
  },
  "bg-wrinkled-rice-paper": {
    zhPrompt: "皱褶宣纸背景保留米白植物纤维和薄纸透光性，非规则浅皱从受压或展开位置自然延伸，折峰捕捉柔光、凹处略暗但不形成硬折纸结构，纸面仍可承载水墨或极简主体；避免揉成团的剧烈褶皱、塑料膜高光、重复折线贴图、污渍做旧或皱纹穿过主体轮廓造成干扰",
    enPrompt: "wrinkled xuan-paper background retaining warm-white plant fibers and thin-paper translucency, with irregular shallow wrinkles extending naturally from compressed or unfolded areas so ridges catch soft light and valleys darken gently without becoming origami structure; remain usable for ink or minimal subjects, avoiding violently crumpled paper plastic-film shine repeated crease textures antique stains or wrinkles cutting distractingly through the subject",
  },
  "bg-dark-walnut": {
    zhPrompt: "深胡桃木背景以深棕至巧克力色心材、流动山形与直纹、细孔和偶发小结疤构成，板材拼接宽度与纹理方向一致，哑光油蜡处理让高光温润而不镜面；适合成熟高端产品，避免黑色塑料、重复木纹块、树结过密、板缝无透视、橙红色调过强或纹理跨板连续",
    enPrompt: "dark walnut background formed from deep brown to chocolate heartwood with flowing cathedral and straight grain fine pores and occasional small knots, boards joined at plausible widths in consistent direction and finished with matte oil-wax for warm non-mirror highlights; suited to mature premium products, avoiding black plastic repeated grain tiles excessive knots seams without perspective overpowering orange-red color or grain continuing across separate boards",
  },
  "bg-soft-gradient-paper": {
    zhPrompt: "柔和渐变纸背景使用真实纸张或卡纸承载一到两种邻近色的缓慢过渡，纤维和细颗粒在全部色区连续可见，渐变由喷涂、染色或柔光形成且不改变纸面哑光属性，保留充足留白；避免数字色带、彩虹多色、中心发光洞、塑料高光、边缘突变或渐变污染主体轮廓",
    enPrompt: "soft gradient-paper background using real paper or card to carry a slow transition between one or two neighboring colors, with fibers and fine grain remaining continuous through every color region and the blend created by spray dye or soft light without losing matte paper character and ample negative space; avoid digital banding rainbow palettes a glowing central hole plastic shine abrupt edges or muddy color contamination around the subject",
  },
  "bg-pearl-satin": {
    zhPrompt: "珍珠缎面背景以珠白或淡奶油织物形成宽缓褶皱，紧密织法产生沿曲率流动的柔亮高光，暗部仍保持中性乳白层次并可见细微经纬，不应像镜面或透明丝绸；适合珠宝、婚礼或护肤视觉，避免过曝纯白、塑料膜、每条褶同宽、彩虹珠光或褶皱遮没主体",
    enPrompt: "pearl satin background in pearl white or pale cream forming broad relaxed folds, with a tight weave producing soft flowing highlights that follow curvature while shadows retain neutral creamy layers and subtle yarn structure rather than mirror or transparent silk; suited to jewelry bridal or skincare visuals, avoiding clipped white plastic film identical folds rainbow iridescence or drapery overwhelming the subject",
  },
  "bg-red-lacquer": {
    zhPrompt: "朱红大漆背景由多层薄漆打磨叠加形成深浅红色内透感，表面平整温润、镜面度受控并在边缘或掠射光下显示漆层深度，细小手工波纹可见但不做破旧；强调大漆工艺而非红塑料，避免金色纹样自动出现、强烈镜面反射、橙色荧光、裂纹满布或主体倒影喧宾夺主",
    enPrompt: "vermilion lacquer background built from multiple thin polished coats creating optical depth across dark and bright reds, with a smooth warm surface controlled gloss and layer depth visible at edges or grazing light plus restrained handmade waviness without distressing; emphasize true lacquer rather than red plastic, avoiding automatic gold motifs harsh mirror reflections fluorescent orange crackle everywhere or a subject reflection taking over",
  },
  "bg-museum-gray-wall": {
    zhPrompt: "博物馆灰墙背景采用中性偏暖或偏冷的低彩度灰色矿物涂层，墙面大幅平整、细孔克制，柔和轨道灯或洗墙光形成有边界但不过硬的展示亮区，地面接触和墙体转角保持真实；适合艺术品或雕塑陈列，避免水泥废墟感、纯数字灰、舞台光圈、乱码标牌或墙面纹理抢过主体",
    enPrompt: "museum gray-wall background using a low-chroma neutral mineral coating that may lean slightly warm or cool, broad and smooth with restrained pores while soft track or wall-wash lighting creates a bounded but gentle display zone and floor contact and wall corners remain real; suited to art or sculpture presentation, avoiding ruined concrete character flat digital gray a theatrical spotlight circle gibberish labels or texture competing with the subject",
  },
  "lighting-studio-softbox": {
    zhPrompt: "影棚柔光箱作为面积可见或位置可推断的大光源，近距离产生宽阔柔和高光、渐进阴影边缘与自然眼神光，补光和负补光控制明暗比但不抹平体积，背景亮度独立可控；避免无方向平光、多个相同眼神光、皮肤塑料化、鼻影完全消失或高光形状与光箱位置矛盾",
    enPrompt: "studio softbox acting as a large-area source whose position is visible or inferable, creating broad soft highlights gradual shadow edges and natural catchlights while fill and negative fill control contrast without flattening volume and background exposure remains independently managed; avoid directionless flat light multiple identical catchlights plastic skin vanished nose shadow or highlight shape contradicting softbox placement",
  },
  "lighting-candlelight": {
    zhPrompt: "烛光由画面内或近处可推断的微小火焰提供，暖色照度随距离快速衰减，在面部和物体下方形成柔中带硬的局部阴影，远处保留冷暗环境色，火焰可轻微跳动但结构可见；避免整屋均匀橙光、蜡烛照亮巨大空间、火焰过曝成白球、影子方向混乱或人物皮肤纯黄色",
    enPrompt: "candlelight motivated by a small visible or nearby flame, falling off rapidly with distance and producing localized warm illumination with moderately crisp shadows beneath facial features and objects while distant surroundings retain cool darkness and the flame may flicker without losing structure; avoid uniform orange room light one candle illuminating a vast hall a clipped white fireball conflicting shadows or entirely yellow skin",
  },
  "lighting-firelight": {
    zhPrompt: "火光来自篝火、壁炉或燃烧物的低位不规则光源，橙红高光随火焰变化落在朝火一侧，背光面保留环境冷色，附近烟尘和材质反射响应热源，投影可轻微跳动；避免火焰无燃料、全景红色滤镜、每处高光同亮、人物离火很远仍过曝或烟雾方向与热对流冲突",
    enPrompt: "firelight originating from a low irregular campfire fireplace or burning material, placing fluctuating orange-red highlights on surfaces facing the flame while away sides retain cooler ambient color and nearby smoke dust and reflective materials respond to heat with subtly moving shadows; avoid flame with no fuel a global red filter equal highlights everywhere distant subjects overexposed or smoke contradicting thermal rise",
  },
  "lighting-practical-lamp": {
    zhPrompt: "实景台灯或壁灯作为画面内可见光源，灯罩形状决定向上、向下或侧向的照明范围，亮度随距离衰减并在桌面、墙面和人物上形成一致色温与接触阴影，环境补光只保留必要细节；避免灯具自身不亮却照亮全屋、灯罩穿光、多个影子方向、统一暖黄滤镜或电线与安装位置不合理",
    enPrompt: "practical table or wall lamp visible within the scene, with shade geometry controlling upward downward or lateral spread and brightness falling naturally across desk wall and figure in one color temperature with coherent contact shadows while ambient fill preserves only necessary detail; avoid an unlit fixture illuminating the room light passing through an opaque shade multiple shadow directions a blanket warm filter or implausible wiring and mounting",
  },
  "lighting-window-light": {
    zhPrompt: "窗边自然光从可辨窗户方向进入，窗框大小与天空状态决定光斑形状和软硬，靠窗侧明亮、背窗侧由室内反射柔和填充，亮度与色温随距离逐步衰减；保留窗外不过曝的少量信息，避免左右同时来光、窗框投影方向错误、脸部一半纯黑、整幅白雾或把影棚柔光误称窗光",
    enPrompt: "window daylight entering from a readable window direction, with opening size and sky condition determining patch shape and softness so the near side is bright and the far side receives gentle interior bounce while intensity and color fall with distance; retain limited exterior detail without clipping, avoiding light from both sides wrong frame-shadow direction half the face pure black global white haze or studio soft light mislabeled as window light",
  },
  "lighting-moonlight-blue": {
    zhPrompt: "蓝色月光以夜空和月亮方向为依据形成低照度冷色主光，边缘高光柔和、阴影深但保留环境结构，地面和水面反射受材质控制，室内暖光若存在则只作局部冷暖色彩对比；避免把夜景统一染成亮蓝、月亮照度像太阳、无来源轮廓光、星空过曝或人物肤色完全失真",
    enPrompt: "blue moonlight using the night sky and moon direction as a low-intensity cool key, with soft edge highlights and deep shadows that retain environmental structure while ground and water reflections respond to material and any indoor warmth remains a local color contrast; avoid dyeing the whole night bright blue sunlight-level lunar exposure source-free rim light blown stars or completely unnatural skin color",
  },
  "light-fluorescent-office": {
    zhPrompt: "办公室荧光灯由天花板条形或格栅灯具提供宽而偏冷的顶光，桌面和墙面照度较均匀但眼窝、下颌与物体底部仍有轻微顶光阴影，不同灯管可有细微色差与频闪痕迹；避免绿色滤镜覆盖全景、灯具位置与高光不符、空间无阴影像渲染图或每根灯管亮度随机",
    enPrompt: "office fluorescent lighting from ceiling strips or troffers creating broad slightly cool overhead illumination, fairly even across desks and walls while retaining mild top-down shadows in eye sockets under jaws and beneath objects plus subtle tube-to-tube color variation or flicker traces; avoid a global green filter highlights unrelated to fixtures a shadowless rendered room or random brightness on every tube",
  },
  "light-laser-scan": {
    zhPrompt: "激光扫描光由可见扫描器发出一条细线或薄光平面，沿主体表面按深度连续弯折并在烟尘中显示有限传播路径，扫描到的区域可产生局部数据感高光但不生成界面文字；区别于多束舞台激光，避免光线穿透不透明物、无发射器、满屏交叉线、实体光墙或扫描线与表面透视无关",
    enPrompt: "laser scan light emitted by a visible scanner as one narrow line or thin light plane, bending continuously across subject surfaces according to depth and revealing only a limited path through haze while scanned zones may gain local data-like highlights without interface text; distinguish it from multiple stage beams, avoiding passage through opaque objects no emitter a screen full of crossing lines a solid light wall or a scan line unrelated to surface perspective",
  },
  "light-rim-only-silhouette": {
    zhPrompt: "纯轮廓逆光把主要光源放在主体后方并略偏侧，使光只沿头发、肩膀和外轮廓形成连续窄边，正面大部分进入暗部但仍可由极弱环境光保留少量结构，背景与轮廓有足够明度分离；避免整个人白边描线、轮廓光无来源、脸部被正面照亮、两侧高光完全对称或边缘过曝断裂",
    enPrompt: "rim-only silhouette lighting placing the main source behind and slightly to one side so a narrow continuous edge appears only along hair shoulders and outer contour, with the front mostly dark yet retaining minimal structure from faint ambient fill and sufficient background separation; avoid a white outline drawn around the whole figure source-free rim light a front-lit face perfectly symmetric edges or clipped broken highlights",
  },
  "material-glass": {
    zhPrompt: "玻璃材质通过清楚厚度、边缘折射、内部透光和随视角变化的环境反射表现，透明区域仍会弯曲背景并在接触面产生焦散或阴影，抛光边缘高光连续但不过曝；根据制品选择实心或空心结构，避免完全不可见、塑料透明片、无厚度轮廓、反射与环境矛盾或玻璃穿过相邻物体",
    enPrompt: "glass material expressed through readable thickness edge refraction internal transmission and view-dependent environmental reflection, with transparent regions bending the background and producing caustics or shadows at contact while polished edge highlights remain continuous without clipping; choose solid or hollow construction appropriately, avoiding invisible glass clear plastic sheets thicknessless outlines reflections contradicting the scene or glass intersecting nearby objects",
  },
  "material-wood": {
    zhPrompt: "木质材质由具体树种对应的色泽、年轮或直纹、导管、端面与顺纹方向构成，切削、打磨或涂装改变光泽但不能抹掉纤维，接缝和受力方向符合木工结构，边缘可见真实厚度；避免统一木纹贴图、纹理跨越不同零件、塑料亮漆、树结满布、端面与侧面纹理相同或把木材画成石头",
    enPrompt: "wood material defined by species-appropriate color growth or straight grain pores end grain and fiber direction, with cutting sanding or finish changing gloss without erasing structure and joints and load direction following believable woodworking while edges show real thickness; avoid one tiled grain across everything texture crossing separate parts plastic varnish knots everywhere identical end and side grain or wood rendered as stone",
  },
  "material-liquid": {
    zhPrompt: "液体凝胶材质具有连续体积、弯月面、表面张力和受重力影响的流动形态，透明或半透明内部会吸收与折射色彩，边缘高光和气泡随厚度变化，接触容器或表面时形成合理润湿线；避免固体塑料块、无重力悬浮水滴、液体穿壁、所有气泡同大或高光与光源无关",
    enPrompt: "liquid-gel material with continuous volume meniscus surface tension and gravity-driven flow, transparent or translucent interiors absorbing and refracting color while edge highlights and bubbles vary with thickness and contact against a vessel or surface creates a plausible wetting line; avoid solid plastic blocks weightless floating droplets liquid passing through walls identical bubbles or highlights unrelated to the light source",
  },
  "color-pastel-palette": {
    zhPrompt: "粉彩色盘以提高明度、降低色彩纯度的柔和粉、杏、薄荷、天蓝和薰衣草等有限颜色组成，仍通过冷暖、明度和面积比例建立主次，白色或中性色承担呼吸空间；保留主体局部对比，避免所有颜色同亮同饱和、糖果荧光、灰白发脏、色彩数量过多或肤色被统一漂白",
    enPrompt: "pastel palette built from a limited set of high-value reduced-chroma pink apricot mint sky blue lavender and related hues, still creating hierarchy through temperature value and area proportion while white or neutral space provides breathing room; retain selective subject contrast, avoiding every color equally light and saturated fluorescent candy tones muddy chalkiness too many hues or skin uniformly bleached",
  },
  "color-monochrome": {
    zhPrompt: "单色黑白灰方案依靠从深黑到高光白的完整灰阶、局部对比和材质反射区分主体与空间，色彩信息转译为明度而非简单去饱和，必要时保留一种纸色或银盐色调但不引入其他色相；避免中间调全丢、黑位堵死、白位过曝、灰雾无焦点或用蓝色滤镜冒充黑白",
    enPrompt: "monochrome black-white-gray palette using a full tonal scale from deep black to highlight white plus local contrast and material reflection to separate subject and space, translating color information into value rather than merely desaturating and optionally retaining one paper or silver-gelatin cast without other hues; avoid missing midtones crushed blacks clipped whites flat gray fog or a blue filter masquerading as monochrome",
  },
  "color-duotone": {
    zhPrompt: "双色调方案只选两种有明确角色的颜色，一种承担暗部、文字区或结构，另一种承担亮部、主体或强调，并通过套色叠印或明度变化扩展层次但不产生第三种主色；两色需保持可读对比，避免随机渐变、彩虹高光、黑白灰之外偷偷加入多色或面积五五开失去焦点",
    enPrompt: "duotone scheme selecting exactly two colors with explicit roles, one carrying shadows structural zones or typography space and the other carrying highlights subject or accents, expanding depth through overprint or value variation without introducing a third dominant hue; maintain readable contrast, avoiding random gradients rainbow highlights hidden multicolor additions beyond neutral support or an equal split that removes hierarchy",
  },
  "color-complementary": {
    zhPrompt: "互补色对比选择色相环相对的两组颜色并设定明显主次，大面积主色控制环境，小面积补色聚焦主体或关键动作，中性色缓冲边界，亮度和饱和度分别调整以避免视觉震动；避免两色等面积满饱和、混色变成脏灰、所有物体交替上色、肤色失真或加入第三个竞争强调色",
    enPrompt: "complementary color scheme using two opposite hue families with clear hierarchy, the dominant color controlling the environment and a smaller complement focusing the subject or key action while neutrals buffer edges and value and saturation are tuned separately to avoid vibration; avoid equal-area maximum saturation muddy mixing every object alternating colors distorted skin or a third competing accent",
  },
  "material-iridescent": {
    zhPrompt: "虹彩珠光材质通过薄膜干涉在曲面和掠射角产生随视角缓慢变化的粉、青、紫或金色偏光，基底颜色仍可辨，亮部呈柔和珍珠光而非金属镜面，阴影保留材质体积；避免整物彩虹条纹、荧光渐变贴图、无视角变化、色彩发脏、过曝白边或与镭射衍射箔混同",
    enPrompt: "iridescent pearlescent material using thin-film interference to shift gradually among pink cyan violet or gold over curvature and grazing angles while the base color remains visible, highlights stay softly nacreous rather than mirror-metallic and shadows retain volume; avoid rainbow stripes across the whole object fluorescent gradient textures no view dependence muddy color clipped white edges or confusion with diffractive holographic foil",
  },
  "material-holographic-foil": {
    zhPrompt: "镭射箔膜材质由薄金属化基底和细密衍射光栅构成，强点光源下出现方向明确的光谱条带或碎片，高光随视角快速移动，未受光区域保持银灰或彩色基底；表面可有轻微折痕但仍薄而贴合，避免柔和珠光、满屏彩虹、厚塑料体积、无光源发亮或衍射纹跨越不同面不转向",
    enPrompt: "holographic foil material built from a thin metallized base and fine diffraction grating, producing directional spectral bands or fragments under a strong point source with highlights moving rapidly by view angle while unlit areas remain silver-gray or retain a colored base; allow restrained creasing while staying thin and conformal, avoiding soft pearlescence rainbow everywhere thick plastic volume source-free glow or diffraction continuing unchanged across differently oriented faces",
  },
  "material-velvet": {
    zhPrompt: "丝绒材质由密集短绒形成随触摸和方向改变的深浅色块，正面吸光、掠射处出现柔和窄高光，折叠时绒向和压痕连续覆盖服装或物体曲面，暗部仍有层次；适用于主体材质而非背景布景，避免缎面镜光、毛皮长毛、塑料黑、全表面同亮或绒向在相邻区域随机翻转",
    enPrompt: "velvet material formed by dense short pile whose direction creates shifting dark and light patches, absorbing frontal light and revealing a soft narrow sheen at grazing angles while nap and pressure marks follow folds and object curvature with layered shadows; use as a subject material rather than a backdrop instruction, avoiding satin mirror shine long fur plastic black uniform brightness or pile direction changing randomly across adjacent areas",
  },
  "material-marble": {
    zhPrompt: "大理石材质具有晶体质感石基、连续矿脉和深浅不同的内部层次，切割后的不同面共享同一块石料逻辑但纹脉方向随面转折，抛光面产生柔和环境反射，断面更哑光；明确重量和边缘厚度，避免随机闪电纹、塑料白、纹理平铺重复、每个面使用不同石种或薄得像纸",
    enPrompt: "marble material with a crystalline stone body continuous mineral veining and internal tonal depth, where different cut faces remain logically from one block while veins change orientation across edges, polished faces give soft environmental reflection and broken faces are more matte; communicate weight and edge thickness, avoiding random lightning veins white plastic tiled repetition a different stone on every face or paper-thin slabs",
  },
  "material-concrete": {
    zhPrompt: "清水混凝土材质由水泥浆、细骨料、微小气孔和真实模板痕迹构成，中性灰色调有轻微不均，边缘厚重、断面颗粒更粗，表面哑光且只在潮湿处略深；用于主体或建筑构件时强调重量和浇筑逻辑，避免泡沫板、均匀噪点、石材裂纹、满面水渍或每个孔洞完全相同",
    enPrompt: "architectural concrete material made from cement paste fine aggregate small air pores and plausible formwork traces, with slightly uneven neutral gray color heavy edges coarser broken sections and a matte surface darkening only where damp; when applied to objects or structure communicate mass and casting logic, avoiding foam board uniform noise natural-stone cracks water stains everywhere or identical repeated pores",
  },
  "material-matte-rubber": {
    zhPrompt: "哑光软触橡胶材质用于握柄、保护壳或包胶表面，细微均匀颗粒打散高光，边缘圆润、触感柔和但形体保持稳定，受压处仅有轻微形变并迅速回弹，接缝和包胶边界清楚；避免轮胎胎纹、湿亮乳胶、绒面粉末、塑料硬壳、指纹油污过多或整件物体像融化",
    enPrompt: "matte soft-touch rubber material for grips protective housings or overmolded surfaces, using fine even microtexture to diffuse highlights with rounded edges and a soft tactile impression while form remains stable and compression deforms only slightly before recovery and overmold boundaries stay clear; avoid tire tread wet latex suede powder hard plastic excessive oily fingerprints or an object that appears melted",
  },
  "material-pearl-nacre": {
    zhPrompt: "珍珠母贝材质由层状文石结构产生乳白基底、细腻虹彩和随曲率移动的柔光，内部可见云状或生长层纹理但不透明如玻璃，切片边缘显示薄层厚度和自然不规则；避免塑料珠光漆、彩虹饱和条纹、金属镜面、完全透明、所有区域同一纹理或把母贝误画成圆形珍珠串",
    enPrompt: "mother-of-pearl nacre material using layered aragonite structure to create a milky base fine iridescence and soft moving luster across curvature, with cloudy growth layers inside yet remaining opaque rather than glass and cut edges revealing thin natural lamination and irregularity; avoid pearlescent plastic paint saturated rainbow stripes metallic mirror transparency identical texture everywhere or turning nacre into a string of round pearls",
  },
  "material-jade": {
    zhPrompt: "玉石材质呈半透明至微透的致密矿物体，颜色在白、青、绿或暖黄之间有细微云絮、色根和内部漫散射，抛光面高光清晰但不玻璃化，厚处更深、薄边透光；雕刻边缘圆润且有重量，避免塑料荧光绿、满布裂纹、完全透明、玻璃焦散、金属反射或把不同玉种特征随机混合",
    enPrompt: "jade material appearing as a dense translucent-to-subtranslucent mineral body in white celadon green or related hues with restrained cloudy inclusions color roots and internal scattering, a polished highlight that remains softer than glass and deeper color in thick sections with luminous thin edges; carving edges feel rounded and weighty, avoiding fluorescent green plastic cracks everywhere full transparency glass caustics metallic reflection or random mixing of unrelated jade varieties",
  },
  "material-brushed-metal": {
    zhPrompt: "拉丝金属材质具有沿加工方向连续的细纹和各向异性高光，高光被拉成长带并随物体曲率转向，底色与反射符合不锈钢、铝或有色合金种类，切边、倒角和接缝保留真实厚度；避免随机交叉刮痕、镜面铬、灰色塑料、纹理跨面不转折、所有零件同一拉丝方向或边缘无高光",
    enPrompt: "brushed metal material with continuous machining grain and anisotropic highlights stretched along the brushing direction and turning with object curvature, while base tone and reflection fit a chosen metal such as stainless steel aluminum or tinted alloy and cut edges bevels and joints retain real thickness; avoid random cross scratches mirror chrome gray plastic grain ignoring face orientation every part brushed identically or edges without highlights",
  },
  "material-frosted-glass": {
    zhPrompt: "磨砂玻璃材质通过喷砂或酸蚀形成均匀微粗糙表面，透光但将后方物体扩散成柔和轮廓，边缘和未磨砂切面仍显示玻璃厚度、折射与窄高光，指纹或接触痕迹克制可见；避免乳白塑料、完全不透明、普通透明玻璃、噪点贴图、内部发光或背景轮廓清晰得像未处理玻璃",
    enPrompt: "frosted glass material using sandblasted or acid-etched micro-roughness to transmit light while diffusing objects behind into soft shapes, with edges and untreated cut faces still revealing glass thickness refraction and narrow highlights plus restrained fingerprints or contact traces; avoid milky plastic complete opacity ordinary clear glass a noise texture internal glow or background details remaining as sharp as untreated glass",
  },
  "material-translucent-resin": {
    zhPrompt: "透明树脂材质具有浇注形成的实体厚度、圆润边缘和较玻璃更柔和的折射，内部可包含少量气泡、着色层或嵌入物但分布受工艺控制，抛光面高光连续并在厚处增强吸收；避免水状无定形、玻璃般锐利焦散、廉价塑料浑浊、气泡均匀铺满、嵌入物穿出表面或主体没有接触阴影",
    enPrompt: "translucent cast-resin material with solid poured thickness rounded edges and softer refraction than glass, optionally containing limited bubbles colored layers or inclusions distributed by a believable process, with continuous polished highlights and stronger absorption through thick sections; avoid shapeless water sharp glass caustics cheap cloudy plastic uniformly spread bubbles inclusions protruding through the surface or an object with no contact shadow",
  },
  "material-rubber": {
    zhPrompt: "弹性橡胶材质用于轮胎、密封圈、软管或功能部件，具有可压缩回弹、弯曲处外侧拉伸内侧起皱和略带抓地力的表面，黑色或有色配方保留低至中等高光，模压接缝和胎纹只在功能需要处出现；避免软触涂层感、硬塑料、液态融化、无受力变形或所有橡胶都自动生成轮胎花纹",
    enPrompt: "elastic rubber material for tires seals hoses or functional components, showing compressive recovery outer-surface stretch and inner wrinkling at bends plus a mildly grippy surface with low-to-medium highlights in black or a colored compound and molding seams or tread only where function requires; avoid soft-touch coating character hard plastic liquid melting deformation without force or tire patterns appearing on every rubber object",
  },
  "material-acrylic": {
    zhPrompt: "亚克力材质由切割或浇注聚合物形成清楚板厚、抛光边缘和干净折射，透明度高但反射较玻璃柔和，彩色板会在边缘聚光，粘接处可见极细接缝而不出现气泡泛白；适合展示架或现代产品，避免玻璃裂纹、廉价塑料浑浊、无厚度轮廓、边缘过曝、弯折无热塑痕迹或不同板件互相穿透",
    enPrompt: "acrylic material formed by cut or cast polymer with readable sheet thickness polished edges and clean refraction, high clarity but softer reflection than glass and colored sheets concentrating light at their edges while bonded joints show only fine seams without cloudy bubbles; suited to displays or modern products, avoiding glass cracks cheap haze thicknessless outlines clipped edges bends with no thermoplastic logic or intersecting panels",
  },
  "color-analogous": {
    zhPrompt: "邻近色方案选择色相环上相邻的两到四个颜色建立和谐过渡，由一个主色、一个辅助色和少量强调组成，并通过明度和色彩纯度区分层级，中性色负责停顿与文字安全区；保持主体与背景可分，避免渐变成无焦点彩虹、所有颜色同等面积、色相过近导致糊成一片或偷偷加入互补色抢焦点",
    enPrompt: "analogous color scheme selecting two to four neighboring hue families for a coherent transition, organized as one dominant one supporting and limited accents with value and chroma differences creating hierarchy while neutrals provide pauses and typography-safe space; keep subject and background separable, avoiding a focusless rainbow every hue at equal area values so close they merge or an unplanned complementary accent stealing focus",
  },
  "purpose-book-cover": {
    zhPrompt: "书籍封面主视觉依据开本比例安排单一清楚焦点，并为书名、作者名、系列标识和书脊裁切保留连续安全区，缩略图尺寸仍能辨认题材与主色，四周出血允许适度裁切；图像本身不生成文字，避免主体贴边、细节密度均匀、标题区被高反差元素占据或正反封无法延展",
    enPrompt: "book-cover key visual composed for a defined trim ratio with one clear focal idea and continuous safe areas for title author series mark and spine crop, remaining recognizable at thumbnail size while bleed permits moderate edge trimming and subject color communicates genre; generate no text in the image, avoiding edge-hugging subjects uniform detail density high-contrast clutter in the title zone or imagery that cannot extend across a full cover",
  },
  "purpose-movie-poster": {
    zhPrompt: "电影海报主视觉用一个核心人物、冲突或象征建立类型与叙事层级，面部、动作和环境尺度清楚，并为片名、演职员表与发行信息预留不干扰主体的区域，竖版裁切后仍有强轮廓；不生成文字或品牌，避免角色头像堆叠、所有元素同大、无故事光线、标题压脸或过度模仿现有电影海报",
    enPrompt: "movie-poster key art using one central character conflict or symbol to establish genre and narrative hierarchy, with readable face action and environmental scale plus zones for title credits and release information that do not interfere with the subject and a strong silhouette after vertical cropping; generate no text or brands, avoiding stacked floating heads every element equally large storyless lighting typography over faces or imitation of an existing film poster",
  },
  "purpose-game-splash-art": {
    zhPrompt: "游戏启动图以主角或主要事件为唯一第一焦点，通过动作方向、环境地标和前中后景引导玩家进入世界观，同时为启动按钮、加载状态或 Logo 安全区留出低干扰空间但不生成界面文字；横竖适配时核心轮廓不能被裁，避免多人等权站队、特效遮脸、界面元素伪造或复制现成游戏角色",
    enPrompt: "game splash art centered on one hero or primary event, using action direction environmental landmarks and foreground-middle-background depth to introduce the world while reserving a low-interference safe area for start control loading state or logo without generating interface text; preserve the core silhouette across wide and vertical crops, avoiding equal-weight character lineups effects hiding faces fake UI elements or copied existing game characters",
  },
  "purpose-social-thumbnail": {
    zhPrompt: "社媒缩略图以手机小尺寸可辨的单一主体、清楚表情或动作和强烈明暗分离建立点击焦点，主体置于平台裁切安全区并为短标题预留连续低细节色块但不生成文字，边缘允许不同画幅裁切；避免多人物争抢、细节过密、虚假按钮、主体贴边、背景与脸同明度或夸张失真的诱导表情",
    enPrompt: "social-media thumbnail using one subject legible at phone size a clear expression or action and strong value separation to create a click focal point, placing the subject within platform crop-safe zones and reserving one continuous low-detail color area for a short headline without generating text while edges tolerate ratio changes; avoid competing figures dense microdetail fake buttons edge-bound subjects face and background at the same value or distorted clickbait expressions",
  },
  "purpose-isometric-map": {
    zhPrompt: "等距地图以统一轴测角度、无透视缩短的模块化地块、道路、水体和建筑建立可导航空间，地标通过色彩、体量和位置区分但保持同一尺度系统，路径连接连续并留出图例或标签区但不生成文字；避免混入鸟瞰透视、道路断头、建筑比例随机、阴影方向不一、重复模块或装饰遮住路线",
    enPrompt: "isometric map using one consistent axonometric angle and modular terrain roads water and buildings without perspective convergence to create a navigable space, with landmarks distinguished by color mass and position within one scale system and paths connecting continuously while room remains for legend or labels without generated text; avoid perspective aerial views dead-end roads random building scale conflicting shadows repeated modules or decoration obscuring routes",
  },
  "purpose-food-photography": {
    zhPrompt: "美食摄影以菜品温度、湿润度、脆度或细腻度等可感质地为核心，摆盘结构清楚且食材形态真实，主光、补光和彩色反射控制油亮与蒸汽，餐具和桌面只辅助叙事；保持可食用色彩与份量，避免塑料食物、过度饱和、无来源蒸汽、油光覆盖全部表面、餐具穿过食物或堆料失去主次",
    enPrompt: "food photography centered on tactile cues of temperature moisture crispness or delicacy, with readable plating and truthful ingredient form while key fill and colored reflection control sheen and steam and tableware supports rather than competes; preserve appetizing natural color and believable portion size, avoiding plastic food oversaturation source-free steam oil coating every surface utensils intersecting food or piled ingredients with no hierarchy",
  },
  "purpose-collectible-toy-render": {
    zhPrompt: "潮玩手办渲染以完整可生产造型、稳定底座或站立受力和可辨材质分件为核心，头身比例、关节、涂装边界与配件连接在不同角度保持一致，影棚光展示轮廓并保留接触阴影；背景简洁且无品牌文字，避免角色悬浮、树脂像皮肤、接缝消失、配件穿模、比例漂移或复制知名 IP",
    enPrompt: "collectible-toy render centered on a complete manufacturable form stable base or grounded stance and readable material part separation, with head-body proportion joints paint boundaries and accessory connections remaining consistent across the visible design while studio light reveals silhouette and contact shadow; keep the background clean with no brands or text, avoiding floating figures resin rendered as skin vanished seams intersecting accessories drifting proportions or copied famous IP",
  },
  "purpose-exhibition-display": {
    zhPrompt: "展览陈列图同时说明展墙、展柜、作品、灯光、参观动线和人与空间尺度，主入口、焦点展项与休息或转折区域层级清楚，材质和安全距离符合真实布展，画面可采用透视或轴测但必须一致；标签区留空不生成乱码，避免作品贴满墙、灯光无灯具、观众堵塞通道或展柜穿墙",
    enPrompt: "exhibition-display visualization communicating walls cases artworks lighting visitor circulation and human scale together, with a clear entrance focal exhibit and rest or transition zones plus buildable materials and safety clearances in one consistent perspective or axonometric system; reserve blank label areas without gibberish, avoiding every wall crowded with works lighting without fixtures visitors blocking paths or cases intersecting architecture",
  },
  "purpose-sticker-sheet": {
    zhPrompt: "贴纸套组在统一主题、线条粗细和色彩体系下提供若干彼此独立的图形，每枚贴纸有完整轮廓、适度白边或切割边界和足够间距，可单独裁切且不相互遮挡，大小有主次但视觉语言一致；背景保持简洁，不生成文字，避免元素粘连、白边宽度随机、重复同一图形、细节过密或把整张做成一幅连续插画",
    enPrompt: "sticker sheet presenting several independent graphics within one theme line weight and color system, each with a complete silhouette controlled white or die-cut border and enough spacing for separate cutting, with varied scale hierarchy but one visual language; keep the background clean and generate no text, avoiding merged elements random border widths repeated identical graphics excessive detail or turning the sheet into one continuous illustration",
  },
  "purpose-packaging-render": {
    zhPrompt: "包装展示渲染准确呈现盒、袋、瓶或罐的结构比例、折线、封口、标签区域和材质连接，正面与侧面透视一致，印刷区可保留干净占位但不生成乱码，产品在台面上有真实接触阴影并可展示一到两个辅助角度；避免包装悬浮、封口不可能、图案跨折线错位、标签弯曲错误或品牌复制",
    enPrompt: "packaging presentation render accurately showing the structural proportion folds closure label area and material junctions of a box pouch bottle or jar, with coherent front-side perspective clean placeholder print zones without gibberish and a real contact shadow on the surface plus at most one or two supporting views; avoid floating packs impossible closures artwork misregistered across folds incorrectly warped labels or copied branding",
  },
  "layout-centered-hero": {
    zhPrompt: "中心主视觉版式把唯一核心主体放在画面几何中心或略高于中心的位置，主体轮廓完整、左右视觉重量稳定，背景细节从中心向外递减，并在四周保留可裁切余量与必要标题区；适合产品、人物或标志性物体，避免机械绝对对称、主体过小、中心被高光掏空、四角同样拥挤或多个对象争抢焦点",
    enPrompt: "centered hero layout placing one primary subject at the geometric center or slightly above it, with a complete silhouette stable left-right visual weight and background detail decreasing outward while safe crop margins and optional title space remain around the frame; suited to products people or iconic objects, avoiding rigid perfect symmetry an undersized subject a blown-out empty center equally busy corners or multiple objects competing for focus",
  },
  "layout-left-empty": {
    zhPrompt: "左侧留空版式将主体集中在右侧约三分之一至二分之一范围，动作、视线和背景线条不能逆向挤压左侧，左侧形成连续、低细节且明度稳定的标题或文案安全区，主体与留白之间有自然过渡；避免把主体贴到右边缘、留白中出现强高光或杂物、背景透视线切断文字区或仅用纯色矩形硬分割",
    enPrompt: "left-negative-space layout concentrating the subject within the right third to half of the frame while gaze action and background lines avoid pushing back into the left, creating one continuous low-detail stable-value safe area for copy with a natural transition into the subject zone; avoid pinning the subject to the right edge bright highlights or clutter inside the empty area perspective lines cutting through copy space or a hard flat rectangle used as separation",
  },
  "layout-right-empty": {
    zhPrompt: "右侧留空版式将主体安置在左侧约三分之一至二分之一范围，人物视线、产品朝向或环境动线可以自然指向右侧但不占满，右侧保持连续低细节和可读对比供标题或按钮使用；边缘预留裁切余量，避免主体贴左边、右侧出现树枝人群等干扰、留白被强烈纹理填满或用生硬分栏切割空间",
    enPrompt: "right-negative-space layout placing the subject within the left third to half of the frame, allowing gaze product orientation or environmental flow to lead naturally toward the right without filling it while the right remains a continuous low-detail readable zone for title or controls; keep crop allowance at edges, avoiding a subject stuck to the left border branches or crowds entering the open area strong texture filling the space or a rigid split panel replacing spatial continuity",
  },
  "layout-top-empty": {
    zhPrompt: "上方留空版式把主要主体与地面关系稳定放在下半部或下三分之二，上方保留连续天空、墙面或低细节色彩区作为标题安全区，垂直动线从主体向上延伸但不能穿满留白，画面重心仍稳定；避免主体被压扁在底边、上方出现树冠灯具等杂物、地平线过高、纯色硬盖或留白亮度导致文字不可读",
    enPrompt: "top-negative-space layout grounding the main subject and support plane in the lower half or lower two thirds, preserving continuous sky wall or low-detail color above as a title-safe zone while vertical flow may rise from the subject without filling that space and the composition remains stable; avoid crushing the subject against the bottom edge branches or fixtures cluttering the top an excessively high horizon a hard color overlay or brightness that makes future type unreadable",
  },
  "layout-bottom-empty": {
    zhPrompt: "下方留空版式将主体与主要叙事集中在上半部，底部保留连续纸面、地面虚化或低细节色带供说明与信息排版，主体必须有合理支撑或环境连接而非悬浮，空白高度在不同裁切下仍稳定；避免脚部被切断、底部出现强反射杂物、硬贴白色条带、留白与上方光线割裂或主体头顶贴边",
    enPrompt: "bottom-negative-space layout concentrating the subject and narrative in the upper half while reserving a continuous paper field defocused ground or low-detail band below for explanatory information, with the subject remaining physically supported or connected rather than floating and the open height surviving alternate crops; avoid severed feet strong reflections or clutter below a pasted white strip lighting discontinuity between zones or the subject touching the top edge",
  },
  "layout-lower-left": {
    zhPrompt: "左下角主体版式把主体锚定在左下三分交点附近并保留完整接触面，视觉重量由右上方的空间、光线或次要环境平衡，主体朝向和动线可指向画面内部，右侧及上方形成连续信息区；避免主体贴两条边、视线朝画外、脚或底座被裁、空白无方向感或右上角加入同等强度第二主体",
    enPrompt: "lower-left subject layout anchoring the figure or object near the lower-left thirds intersection with a complete support contact, balancing its weight through space light or secondary environment toward the upper right while orientation and movement lead inward and continuous information space remains above and right; avoid touching both edges looking out of frame cropped feet or base directionless emptiness or an equally strong second subject in the upper right",
  },
  "layout-lower-right": {
    zhPrompt: "右下角主体版式把主体锚定在右下三分交点附近并保留底座、脚部或接触阴影，左上方以开阔空间、光线或环境线条平衡，人物视线或产品正面朝向画面内部，左侧和上方可承载标题；避免主体被右下角夹住、动作朝外、接触面消失、左上角高反差杂物或留白被随机纹理破坏",
    enPrompt: "lower-right subject layout anchoring the subject near the lower-right thirds intersection while preserving base feet or contact shadow, balanced by open space light or environmental lines toward the upper left and with gaze or product front facing inward so title room remains above and left; avoid trapping the subject against both borders outward-facing action missing support high-contrast clutter in the upper left or random texture breaking the negative space",
  },
  "layout-panoramic-breathing": {
    zhPrompt: "宽幅呼吸感版式使用明显横向画幅，以一条稳定地平线或横向结构组织远近关系，主体只占适中比例并留出左右延展空间，前景、中景和远景密度递减，边缘裁切不伤核心信息；适合风景、汽车或群像，避免把普通画面横向拉伸、主体过小无焦点、两侧重复填充、地平线歪斜或上下空间被压成细条",
    enPrompt: "panoramic breathing layout using a distinctly wide aspect ratio and one stable horizon or horizontal structure to organize depth, with the subject at a moderate scale and room extending on both sides while foreground middle distance and background density step down and edge crops preserve core information; suited to landscapes vehicles or ensembles, avoiding stretched normal images a tiny focusless subject repeated filler at both sides a tilted horizon or vertical space compressed into unusable strips",
  },
  "layout-square-safe-center": {
    zhPrompt: "方图安全区版式把核心主体、脸部、产品标志面和关键动作全部收在中央约百分之七十范围，四边背景具有可裁切延展，圆形头像裁切或平台缩略图仍能保留识别轮廓，视觉重量不依赖极侧元素；避免主体贴边、手脚跨出安全区、角落放关键信息、中心细节过密或为填满方图而拉伸比例",
    enPrompt: "square safe-center layout keeping the primary subject face product front and essential action within roughly the central seventy percent, with extendable crop-tolerant background on every side so circular avatars or platform thumbnails preserve recognition and visual balance does not depend on extreme edges; avoid edge-bound subjects limbs leaving the safe area critical corner information an overpacked center or distorted proportions used merely to fill a square",
  },
  "layout-poster-safe-center": {
    zhPrompt: "竖版海报安全区在纵向画幅中把核心主体放在中央偏上或中段，头顶、脚部和关键轮廓远离裁切线，上下分别为标题与说明保留连续低细节区域，主体与背景形成清楚明暗分离；适配二比三或三比四裁切，避免主体顶天立地、文字区穿过脸、底部无落脚、装饰贴边或不同竖幅一裁就丢失焦点",
    enPrompt: "vertical poster safe-center layout positioning the core subject in the middle or slightly above center, keeping head feet and key silhouette away from trim lines while continuous low-detail zones remain above and below for title and information and subject separates clearly by value; tolerate 2:3 or 3:4 crops, avoiding a figure touching top and bottom copy space across the face missing ground edge-bound decoration or a focal point lost by minor ratio changes",
  },
  "layout-diagonal-balance": {
    zhPrompt: "对角平衡版式沿一条主对角线安排主体、动作或光线，并在相反角用较小次要元素、色块或留白平衡重量，视觉动线从入口经过主体后自然停留，透视和重力仍可信；避免简单把画面旋转、两个角放同大主体、对角线穿脸、空角完全无作用、元素沿线机械等距或倾斜导致地平线错误",
    enPrompt: "diagonal-balance layout arranging subject action or light along one primary diagonal and counterbalancing it in the opposite corner with a smaller secondary element color mass or negative space, so the eye enters travels through the subject and settles while perspective and gravity remain believable; avoid merely rotating the frame equal subjects in both corners a diagonal cutting the face a purposeless empty corner mechanically spaced items or a wrongly tilted horizon",
  },
  "layout-frame-within-frame": {
    zhPrompt: "框中框留白利用门洞、窗框、拱廊、前景遮挡或图形开口形成内层取景框，主体完整位于开口内或有意跨越一处边界，外框四周仍保留呼吸空间并引导视线，内外两层透视一致；避免画出厚重装饰相框、框线穿过脸、开口与主体比例失衡、多重框套娃或外框细节比主体更抢眼",
    enPrompt: "frame-within-frame layout using a doorway window arch foreground occlusion or graphic opening as an inner viewing frame, keeping the subject complete inside it or intentionally crossing one boundary while outer margins breathe and guide attention and inner and outer perspective agree; avoid a heavy decorative picture frame lines cutting the face an opening mis-scaled to the subject nested frames within frames or outer detail louder than the subject",
  },
  "layout-split-panel": {
    zhPrompt: "左右分栏版式将画面分成主次明确的两个竖向区域，一侧承载主体或主图，另一侧承担说明、细节或留白，两栏通过基线、色彩或环境连续性相关联，分界可清楚但不必像硬表格；保持各栏独立可读，避免五五开无主次、主体被分界切开、两栏透视冲突、重复同一图或在信息栏生成乱码文字",
    enPrompt: "left-right split-panel layout dividing the frame into two vertical regions with clear hierarchy, one carrying the main subject or image and the other explanation detail or negative space, linked through baseline color or environmental continuity while the division may be clear without becoming a rigid table; keep each panel independently readable, avoiding an equal focusless split a subject cut by the divider conflicting perspectives duplicated imagery or gibberish text generated in the information panel",
  },
  "layout-product-copy-space": {
    zhPrompt: "产品文案位版式把产品完整放在一侧或下方稳定台面，另一侧保留连续、低纹理且明暗对比可控的文案区域，产品高光、视线和辅助道具不能侵入安全区，边缘允许不同广告尺寸裁切；图像不生成文字，避免产品过小、文案区出现杂物、背景渐变导致可读性不稳、台面倾斜或多个产品等权陈列",
    enPrompt: "product-with-copy-space layout placing the complete product on one side or a stable lower surface and reserving a continuous low-texture area with controlled contrast for copy on the other, while product highlights sight lines and props stay out of that safe zone and edges tolerate multiple advertising crops; generate no text, avoiding an undersized product clutter in the copy area unstable readability from gradients a tilted platform or several products with equal weight",
  },
  "layout-cover-title-safe": {
    zhPrompt: "封面标题安全区版式在顶部、中上部或一侧预留一块连续低细节区域，长度足以容纳主标题与副标题，核心主体、脸部和强高光与该区域保持距离，背景色彩与明度确保深浅文字均有可选对比；兼容书刊与专辑封面裁切，避免预生成文字、树枝穿过标题区、标题位过窄、主体被迫缩小或留白像后贴色块",
    enPrompt: "cover title-safe layout reserving one continuous low-detail region at the top upper middle or one side with enough length for title and subtitle, keeping the core subject face and strong highlights away while background color and value allow either light or dark typography; support book magazine or album crops, avoiding generated text branches crossing the title zone a space too narrow for type a needlessly tiny subject or negative space that looks like a pasted rectangle",
  },
  "clothing-slip-dress": {
    zhPrompt: "吊带裙由两条细肩带、清楚领口、贴合上身与连续垂落裙身构成，丝质或柔软面料沿胸腰和髋部形成长而少的褶皱，肩带真实连接前后衣片并承担轻微张力，内衬控制透明度；避免肩带悬空或穿肩、领口粘皮、裙身像液体、内衣化过度、下摆穿腿或身体曲线被错误压缩",
    enPrompt: "slip dress constructed from two fine straps a clear neckline a fitted upper section and one continuous falling skirt, with silk or soft fabric forming long sparse folds over chest waist and hips while straps connect front and back panels under slight tension and lining controls transparency; avoid floating or shoulder-intersecting straps a neckline glued to skin liquid cloth excessive lingerie styling a hem through the legs or distorted body curves",
  },
  "clothing-shirt-dress": {
    zhPrompt: "衬衫裙把翻领、门襟、纽扣、肩袖和袖口等衬衫结构延伸为完整裙身，腰部可通过省道、腰带或自然松量收束，下摆随面料重量形成纵向褶皱，坐立时门襟连续；避免上衣与裙子硬拼、纽扣中途消失、腰带穿身、领片左右不同、下摆没有开衩却限制步幅或裙长改变腿部比例",
    enPrompt: "shirt dress extending shirt construction such as collar placket buttons shoulders sleeves and cuffs into one complete dress, with waist shaped by darts belt or natural ease and the skirt falling in vertical folds according to fabric weight while the placket remains continuous when sitting or standing; avoid a top and skirt pasted together disappearing buttons a belt through the body mismatched collar points a restrictive hem with no vent or dress length changing leg anatomy",
  },
  "clothing-evening-gown": {
    zhPrompt: "礼服长裙以清楚胸衣或上身结构、腰线、支撑内层和长裙摆形成正式轮廓，面料可能为缎、雪纺或天鹅绒但每种光泽与重量保持一致，裙摆在地面产生受重力控制的拖尾和接触褶；避免无骨架坍塌、满身随机亮片、裙摆悬浮、脚穿过布料、不同面料混成塑料或夸张裸露破坏结构",
    enPrompt: "evening gown built from a readable bodice or upper construction waistline supporting inner layer and long skirt, with satin chiffon or velvet behaving consistently in sheen and weight and any train resting on the floor through gravity and contact folds; avoid structureless collapse random sequins everywhere a floating train feet through fabric mixed materials rendered as plastic or exaggerated exposure that destroys garment construction",
  },
  "clothing-bodycon-dress": {
    zhPrompt: "修身连衣裙通过弹性面料、纵向或曲线裁片和合理负松量贴合躯干与髋部，仍保留接缝、下摆厚度和动作所需伸展，坐姿或转身时在腰腹与髋侧产生真实拉伸褶皱；避免像皮肤涂色、身体器官轮廓过度显露、裙身穿入腿部、面料无厚度、关节处不变形或把修身误作不合身勒紧",
    enPrompt: "bodycon dress fitted through elastic fabric vertical or curved panels and plausible negative ease around torso and hips while retaining seams hem thickness and stretch for movement, creating real tension folds at waist abdomen and hip during sitting or turning; avoid painted-on skin excessive anatomical outlining fabric intersecting legs no material thickness no deformation at joints or confusing fitted construction with painfully undersized clothing",
  },
  "clothing-sundress": {
    zhPrompt: "夏日连衣裙采用轻薄透气面料、肩带或短袖、开放领口和有活动量的裙摆，腰线可自然收束，阳光下织物略透但由内衬保持得体，微风使裙摆产生方向一致的轻柔波动；避免完全透明、肩带错接、裙摆像硬伞、浅色面料过曝成白片、风向矛盾或把夏日感只靠花朵图案表达",
    enPrompt: "sundress using lightweight breathable fabric straps or short sleeves an open neckline and a skirt with movement ease, optionally shaped at the waist and slightly luminous in sun while lining preserves opacity and breeze moves the hem in one coherent direction; avoid full transparency misattached straps a rigid umbrella skirt clipped white fabric conflicting wind or relying only on floral print to communicate summer",
  },
  "clothing-suit-set": {
    zhPrompt: "西装套装由同一面料和颜色的外套与西裤或半裙组成，肩线、翻领、扣位、腰头、中缝和裤脚共享一致剪裁语言，内搭层次清楚且活动时外套与下装分别受力；保持正式比例但允许个体版型，避免上下装颜色不一致、翻领错接、裤腰穿外套、纽扣随机、全身过紧或品牌标志",
    enPrompt: "matching suit set composed of jacket and trousers or skirt in one fabric and color, sharing a coherent tailoring language across shoulders lapels button stance waistband pressed lines and hems while the inner layer remains distinct and jacket and lower garment respond separately to movement; keep formal proportion with individualized fit, avoiding mismatched set colors crossed lapels waistband through the jacket random buttons an overly tight full outfit or brand marks",
  },
  "clothing-academy-uniform": {
    zhPrompt: "学院制服由衬衫、针织背心或西装外套、领带或领结和规整下装组成，校服配色与滚边形成有限的学校视觉体系，衣物尺码符合年龄、穿着方式整洁但保留日常褶皱，徽章区域可留空不复制真实校徽；避免不同学校元素混搭、成人化剪裁、领带悬浮、百褶数量随机、过度性化或生成可读校名",
    enPrompt: "academy uniform assembled from shirt knit vest or blazer tie or bow and a neat lower garment, with a limited school color and piping system, age-appropriate sizing and tidy wear that still retains everyday folds while any badge zone remains generic without copying a real crest; avoid mixed institutions adultized tailoring floating ties random pleat counts sexualized styling or generated readable school names",
  },
  "clothing-sailor-uniform": {
    zhPrompt: "水手领制服以方形后领、前方 V 形领片、条纹滚边、领巾结和百褶或规整下装构成，领片从肩部自然覆盖背部并与上衣结构连接，领巾有真实打结和垂端；保持制服端庄与年龄适配，避免领片悬浮、条纹数量左右不一、领巾穿胸、过短下装、过度性化或复制特定学校标识",
    enPrompt: "sailor-style uniform built from a square back collar front V panel striped trim tied neckerchief and pleated or neat lower garment, with the collar lying naturally from shoulders over the back and connecting to the top and the scarf showing a real knot and ends; keep the uniform modest and age appropriate, avoiding a floating collar unequal stripe counts scarf through the chest excessively short lower garments sexualization or copied school insignia",
  },
  "clothing-medical-uniform": {
    zhPrompt: "医护制服根据具体岗位采用合体但便于活动的刷手服、白大衣或护理服，领口、口袋、袖口和闭合方式符合卫生与工作需求，面料耐洗并在肘腰处产生克制褶皱，身份牌和工具位置合理但不出现真实机构标志；避免所有角色都穿医生白袍、防护用品错误、衣物过紧透明、口袋无用途或血污猎奇",
    enPrompt: "medical workwear selected for a specific role as practical scrubs lab coat or nursing uniform, with neckline pockets cuffs and closures meeting hygiene and mobility needs, washable fabric forming restrained folds at elbows and waist and badge and tool placement remaining plausible without real institution marks; avoid putting every worker in a physician coat incorrectly worn protection tight transparent clothing purposeless pockets or sensational blood staining",
  },
  "skin-warm-fair": {
    zhPrompt: "暖白肤色呈偏暖的浅肤色基底，面颊、耳廓、指节和关节处保留自然血色，额头与鼻梁高光柔和，阴影仍含少量暖色而不是灰黑；不同光源下维持真实色温与毛孔、细纹和绒毛，避免漂白过曝、通体橙黄、塑料磨皮、脸颈色差或用肤色推断族群身份",
    enPrompt: "warm fair skin with a light warm undertone, natural circulation visible in cheeks ears knuckles and joints, soft highlights across forehead and nose and shadows retaining a trace of warmth rather than turning gray-black; preserve believable color adaptation plus pores fine lines and facial hair under different lighting, avoiding bleached clipping uniform orange cast plastic smoothing face-neck mismatch or inferring ethnicity from skin tone",
  },
  "skin-medium-brown": {
    zhPrompt: "中棕肤色以均衡棕色素为基底，在额头、颧骨、鼻梁和肩部形成宽而柔和的高光，暗部仍保留棕红或金色底调与皮肤细节，手掌、嘴唇和关节存在自然但不过度的色差；曝光优先保护高光与面部层次，避免提亮成浅肤色、阴影压成纯黑、油亮塑料感或用单一色板刻画所有人物",
    enPrompt: "medium brown skin with a balanced melanin-rich base, broad soft highlights over forehead cheekbones nose and shoulders, shadows retaining brown-red or golden undertones and skin detail, and restrained natural variation across palms lips and joints; expose to protect highlights and facial volume, avoiding lightening into fair skin crushing shadows to black oily plastic sheen or rendering every person from one flat color swatch",
  },
  "skin-tan-wheat": {
    zhPrompt: "小麦肤色呈阳光感的中浅暖棕底色，脸、颈、手臂与衣物遮挡处可有轻微合理晒痕，颧骨和肩部高光偏金而不过曝，阴影保留真实肤质和血色；户外感由光照与色素分布共同形成，避免全身统一橙色滤镜、夸张晒伤、脸手颜色断裂、过度磨皮或把健康状态等同于某种体型",
    enPrompt: "wheat-tan complexion using a sun-touched light-to-medium warm brown base, with subtle plausible tan variation between face neck arms and covered areas, golden but controlled highlights on cheekbones and shoulders and shadows retaining texture and circulation; communicate outdoor exposure through light and pigmentation together, avoiding a uniform orange filter exaggerated sunburn disconnected face and hands excessive smoothing or equating health with one body type",
  },
  "skin-light-medium": {
    zhPrompt: "浅中性肤色位于浅色与中等肤色之间，底调不过分偏冷或偏暖，面颊、鼻翼、眼周和下颌具有细微肤色差异与真实血流变化，柔光下保持清楚体积，硬光下高光不过曝；保留毛孔、细纹和局部色素，避免灰白无生气、粉底面具、脸颈手三段色差或自动改变人物原有身份特征",
    enPrompt: "light-medium neutral complexion positioned between fair and medium values without a strong cool or warm cast, with subtle natural color variation and circulation around cheeks nostrils eyes and jaw, readable volume in soft light and protected highlights in hard light; retain pores fine lines and localized pigmentation, avoiding lifeless gray-white skin a foundation mask three-way mismatch among face neck and hands or automatic alteration of identity features",
  },
  "skin-freckled": {
    zhPrompt: "自然雀斑由大小、浓淡和边缘各异的浅褐色素点组成，主要分布在鼻梁、面颊和日晒区域并随面部曲率、毛孔和光影连续变化，局部可稀疏延伸到肩臂；雀斑位于皮肤层而非表面贴纸，避免均匀网点、左右镜像、每颗同大、覆盖嘴唇眼白、与阴影无关或把雀斑误作污渍和严重皮损",
    enPrompt: "natural freckles formed by light-brown pigment marks with varied size density softness and edges, concentrated across nose cheeks and sun-exposed areas while following facial curvature pores and illumination and optionally thinning across shoulders or arms; keep freckles within the skin rather than pasted on top, avoiding uniform dot grids bilateral mirroring identical spots marks over lips or sclera lighting-independent placement or confusion with dirt and severe lesions",
  },
  "skin-porcelain-fair": {
    zhPrompt: "冷白肤色具有偏冷或中性的浅色基底与轻微半透明感，眼周、耳廓和薄皮区域可见克制的粉红或蓝紫血管色，亮部保持细节而非纯白，阴影柔和转为冷灰但仍有肤色；保留毛孔和细小色素差异，避免瓷器硬壳、全脸蓝紫、过曝发光、无血色蜡像或把“冷白”写成不真实漂白",
    enPrompt: "cool porcelain-fair skin with a light neutral-to-cool base and restrained translucency, allowing subtle pink circulation or blue-violet vascular hints near eyes ears and thin-skin areas while highlights retain detail and shadows turn softly cool without losing skin color; preserve pores and minute pigment variation, avoiding a ceramic shell an all-over blue cast clipped glow bloodless wax or interpreting cool fairness as artificial bleaching",
  },
  "skin-vitiligo-pattern": {
    zhPrompt: "白癜风皮肤特征以边界自然、形状不规则的脱色斑呈现，斑块可跨越脸、手或身体并顺应皮肤曲率，区域内部仍保留相同毛孔、细纹、毛发与光泽，只改变色素而不改变厚度；尊重个体差异，避免对称装饰花纹、纯白油漆边、发光、鳞片、伤口化、污渍化或把特征夸张成奇幻符号",
    enPrompt: "vitiligo represented as naturally bounded irregular depigmented patches that may cross face hands or body while following skin curvature, with the same pores fine lines hair and surface sheen inside each area so only pigmentation changes rather than thickness; respect individual variation, avoiding symmetrical decorative motifs painted-white edges glow scales wounds dirt treatment or exaggeration into a fantasy symbol",
  },
  "feature-almond-eyes": {
    zhPrompt: "杏仁眼具有两端渐收、中段适度开阔的眼裂轮廓，内外眼角、上下眼睑厚度、虹膜遮挡和眨眼褶皱符合真实解剖，左右可有轻微自然差异；眼型通过轮廓与眼睑结构表达而非夸张眼线，保留视线方向和高光一致，避免动漫放大、尖锐拉长、虹膜悬浮、双眼完全复制或据此推断族群",
    enPrompt: "almond-shaped eyes with a gently widened center and tapered inner and outer corners, anatomically coherent lid thickness iris occlusion canthi and blink folds plus subtle natural asymmetry; express the shape through eyelid structure rather than exaggerated liner while gaze direction and catchlights remain consistent, avoiding anime enlargement razor-sharp elongation floating irises perfectly duplicated eyes or ethnic inference from one feature",
  },
  "expression-tired": {
    zhPrompt: "疲惫神态通过略下垂但不闭合的眼睑、减弱的聚焦、轻微眼下阴影、放松嘴角和较低头位表现，肩颈与呼吸节奏也显得沉重，但人物仍保持可辨认意识与自然肌肉张力；避免用夸张黑眼圈、病态惨白、双眼方向不一、面部融化或昏迷姿势代替日常疲劳",
    enPrompt: "tired expression conveyed through slightly lowered yet open lids softened focus restrained under-eye shadow relaxed mouth corners and a modestly lowered head, with heavier shoulder-neck posture and breathing while the person remains alert and facial muscles anatomically coherent; avoid replacing ordinary fatigue with exaggerated black circles sickly pallor divergent gaze melting features or an unconscious pose",
  },
  "expression-mysterious": {
    zhPrompt: "神秘神态以部分隐藏的信息建立：视线略偏离镜头或停留在画外，嘴角只有细微未定变化，眉眼被克制侧光、前景或姿态轻度遮挡，但五官仍清楚且情绪不可被简单归为喜怒；避免固定邪笑、整脸藏黑、遮住全部眼睛、夸张挑眉、恐怖化或用烟雾面具等道具直接替代表情",
    enPrompt: "mysterious expression built from partial information: gaze resting just off camera or beyond the frame, mouth corners carrying an unresolved micro-change and eyes or brows lightly screened by restrained side light foreground or pose while features remain legible and emotion resists a simple happy-angry reading; avoid a stock villain smirk a fully blacked-out face both eyes hidden exaggerated brows horror coding or props such as smoke and masks replacing expression",
  },
  "expression-confident": {
    zhPrompt: "自信神态由稳定直接或有明确目标的视线、放松眉间、自然闭合或轻扬的嘴角、抬起但不过仰的下巴和开放肩颈共同形成，面部肌肉没有紧张防御，姿势重心可靠；允许安静或外向两种表达，避免把自信等同于怒视、夸张叉腰、下巴过高、僵硬假笑或压迫他人的傲慢表情",
    enPrompt: "confident expression formed by steady direct or purposefully aimed gaze a relaxed brow naturally closed or slightly lifted mouth corners a raised but not overtilted chin and open shoulders and neck, with no defensive facial tension and a reliable body center; allow quiet or outgoing confidence, avoiding angry staring exaggerated hands-on-hips posture an excessively high chin a rigid promotional smile or contempt toward others",
  },
  "hair-bangs": {
    zhPrompt: "刘海从可辨认的前额发际与分区自然生长，依据直刘海、空气刘海或侧刘海形成不同束宽与间隙，发梢落在额头并受重力、风向和头部转动影响，仍露出合理眉眼区域；避免整片塑料帘、无发根悬浮、每根等距、左右机械镜像、穿过眼球或刘海与后发完全不同材质",
    enPrompt: "bangs growing naturally from a readable frontal hairline and sectioning, using strand-group width and gaps appropriate to blunt airy or side-swept fringe, tips resting against the forehead and responding to gravity wind and head turn while preserving a plausible view of brows and eyes; avoid a solid plastic curtain rootless floating hair equally spaced strands mechanical symmetry intersections through eyeballs or fringe rendered as a different material from the rest of the hair",
  },
  "hair-braided": {
    zhPrompt: "编发由连续分区的发束按明确交叉顺序编织，辫节从发根到末端逐渐收窄，松紧、毛躁和发量保持一致，固定带或发簪位于真实受力点，动作中辫子作为有重量的整体延迟摆动；避免辫股数量中途改变、无限复制纹理、辫子穿过肩背、发根无分区、末端突然消失或每节像金属链条",
    enPrompt: "braided hair constructed from continuously sectioned locks crossing in a readable sequence, braid units narrowing from root toward the end with coherent tension volume and flyaways, ties or pins placed at real load points and the braid moving as a weighted form with delayed swing; avoid strand counts changing mid-braid endlessly tiled texture intersections through shoulders or back unsectioned roots vanishing ends or every segment appearing like a metal chain",
  },
  "hair-buzz-cut": {
    zhPrompt: "寸头沿头骨曲面呈均匀但非贴图化的短发长度，头顶、鬓角与后颈可按理发渐变自然过渡，发旋、生长方向和发际线清楚，掠射光显示细小发茬而不暴露成光滑头皮；避免黑色帽壳、毛绒球、随机秃斑、发际线画笔描边、每根直立同长或把短发错误渲染为皮肤纹理",
    enPrompt: "buzz cut following skull curvature with short even yet non-textured hair, optionally transitioning through a believable clipper fade across crown temples and nape while whorl growth direction and hairline remain readable and grazing light reveals fine stubble without turning the scalp smooth; avoid a black cap shell fuzzy sphere random bald patches painted hairline every strand equally upright or short hair mistaken for skin texture",
  },
  "hair-silver-gray": {
    zhPrompt: "银灰发色由冷灰、柔和银白和少量原生深色发根组成，颜色沿真实发束与光线变化而非整片金属涂层，高光偏冷但保持角蛋白柔光，暗部仍可区分层次；年轻染发与自然白发可按主体设定区分，避免纯白过曝、蓝紫金属丝、脸部同步变灰、发根发梢随机换色或把银灰误作发光材质",
    enPrompt: "silver-gray hair color built from cool gray soft silver-white and optionally a restrained darker natural root, changing along real strand groups and illumination rather than becoming a metallic coating, with cool highlights retaining keratin softness and shadows preserving depth; distinguish intentional dye from natural graying according to the subject, avoiding clipped pure white blue-violet wire a face turned gray random root-tip swaps or luminous hair material",
  },
  "makeup-smoky-eye": {
    zhPrompt: "烟熏眼妆以眼睑、睫毛根部和外眼角为中心分层晕染深色眼影，边缘向眉骨和下眼睑逐渐减淡，左右形状适配真实眼型，内眼角与眼球高光保持干净；整体色彩可为黑灰、棕或低饱和色但不遮盖皮肤结构，避免熊猫眼硬圈、整片纯黑、眼影越过鼻梁、双眼不对称失控或把疲惫黑眼圈当妆容",
    enPrompt: "smoky eye makeup layered around lids lash lines and outer corners with dark pigment diffusing gradually toward brow bone and lower lid, each side adapted to real eye shape while inner corners and ocular highlights stay clean; use charcoal brown or restrained color without hiding skin structure, avoiding hard panda-eye rings solid black blocks shadow crossing the nose uncontrolled bilateral mismatch or ordinary fatigue circles mistaken for makeup",
  },
  "story-reading": {
    zhPrompt: "阅读事件让人物以视线、手指和姿势真实回应书页或阅读设备，双手分别承担托持、翻页或标记动作，文本内容无需可读但页面方向、厚度和装订连续，环境光适合阅读并与情绪一致；可表现专注、休闲或共同阅读，避免书本倒置、手穿页面、视线离开读物、文字乱码占满画面或只把书当静态摆件",
    enPrompt: "reading event in which gaze fingers and posture genuinely respond to a book or reading device, hands taking distinct roles such as supporting turning or marking while text need not be legible but page orientation thickness and binding remain continuous and available light suits reading and mood; allow focused casual or shared reading, avoiding upside-down books hands through pages gaze unrelated to the material prominent gibberish text or a book used only as a static prop",
  },
  "story-cooking": {
    zhPrompt: "烹饪事件围绕一道明确工序组织人物、食材、厨具与热源，手部抓握和工具角度符合切配、翻炒、揉制或装盘动作，原料从未处理到成品保持阶段一致，蒸汽、油光和火焰有可信来源；工作台留出安全空间，避免刀具反握、手穿锅具、生熟食混乱、无热源冒烟、食材悬浮或把厨房堆成无关物件展台",
    enPrompt: "cooking event organized around one clear process with person ingredients tools and heat source, hand grip and utensil angle matching chopping stirring kneading or plating while ingredients remain consistent with the chosen stage and steam oil sheen and flame have credible causes; preserve safe workspace, avoiding reversed knife grip hands through cookware mixed raw and finished states smoke without heat floating food or a kitchen turned into an unrelated prop display",
  },
  "story-waiting": {
    zhPrompt: "等待事件通过暂时停止的动作、反复查看方向或时间、身体重心停驻和环境中持续流动的人车建立时间差，人物与座椅、站台、门口或约定地点有明确空间关系，表情可期待、焦虑或平静；避免人物无缘由僵站、所有背景都静止、夸张看表、缺少等待对象线索或把等待直接画成睡眠和绝望",
    enPrompt: "waiting event communicated by paused action repeated attention toward a direction or time a settled center of weight and continuing movement of people or traffic around the subject, with a clear spatial relation to a seat platform doorway or meeting point and emotion ranging from anticipation to anxiety or calm; avoid unexplained rigid standing a fully frozen background theatrical watch-checking no clue to what is awaited or reducing waiting to sleep and despair",
  },
  "story-discovering": {
    zhPrompt: "发现事件需要一个刚被揭示的对象、入口、线索或现象，人物视线、手势和身体前倾共同指向它，遮挡被移开或光线变化解释“刚发现”的瞬间，周围同伴可产生不同强度的次级反应；信息层级先显示发现者再引导至目标，避免角色看向空处、目标无视觉区别、所有人同一夸张表情、凭空宝箱或用发光轮廓代替叙事因果",
    enPrompt: "discovery event requiring a newly revealed object entrance clue or phenomenon, with gaze gesture and body lean converging on it and removed occlusion or changing light explaining the instant of recognition while companions may show secondary reactions of varied intensity; hierarchy reveals the discoverer then guides the eye to the target, avoiding characters staring at nothing an indistinct target identical exaggerated reactions a generic treasure chest or glowing outlines replacing narrative cause",
  },
  "character-engineer": {
    zhPrompt: "工程师角色应先明确机械、土木、电气、软件或其他具体方向，再用与任务相关的图纸、仪器、样机、控制台或安全装备体现专业，动作集中在测量、调试、检查或协作而非摆拍；服装和工作环境符合场所风险，避免用安全帽概括所有工程师、屏幕乱码、工具用途错误、实验室与工地混搭或把理性气质写成冷漠刻板印象",
    enPrompt: "engineer character defined first by a specific field such as mechanical civil electrical software or another discipline, then supported by task-relevant drawings instruments prototypes consoles or safety equipment and shown measuring testing inspecting or collaborating rather than posing; clothing and environment match workplace hazards, avoiding a hard hat as shorthand for every engineer gibberish screens misused tools mixed laboratory and construction settings or treating analytical ability as emotional coldness",
  },
  "character-detective": {
    zhPrompt: "侦探角色通过观察现场、记录细节、比较证据或与人物交谈建立调查职责，服装与时代和地点一致，随身物件数量克制且用途清楚，视线和站位回应真实线索；可为官方或私人调查者但不直接复制著名角色，避免固定风衣放大镜模板、证据污染、武器抢占主体、无缘由阴暗滤镜或把推理能力表现成超自然发光效果",
    enPrompt: "detective character established through observing a scene recording details comparing evidence or interviewing someone, with clothing appropriate to period and place restrained purposeful carried objects and gaze and placement responding to real clues; allow official or private investigators without copying famous characters, avoiding the stock trench-coat magnifier template contaminated evidence a weapon dominating the role arbitrary dark grading or supernatural glow used to represent reasoning",
  },
  "character-scholar": {
    zhPrompt: "学者角色由具体研究领域、材料和工作方法体现，可在档案、实地、实验或书桌环境中阅读原始资料、比较样本、注释或讨论，服装符合时代和场所而非统一古板造型；书籍与器具数量服务研究主题，避免堆满无关卷轴、无法阅读的巨量文字、把学者等同于年长男性、无功能眼镜或用沉默孤僻取代专业活动",
    enPrompt: "scholar character communicated through a specific field source material and working method, reading primary documents comparing specimens annotating or discussing in an archive field laboratory or desk setting with clothing suited to era and place rather than one dusty stereotype; books and instruments serve the research topic, avoiding unrelated scroll piles vast illegible text assumptions of an older male scholar purposeless glasses or replacing professional activity with silent isolation",
  },
  "character-astronaut": {
    zhPrompt: "宇航员角色根据舱内、舱外或行星表面任务选择压力服、舱内服和生命保障组件，头盔密封、手套关节、软管接口与工具固定方式符合环境，身体姿态回应微重力、低重力或地面重力；面罩反射来自真实舱体或地景，避免鱼缸头盔、松脱管线、无气环境裸露皮肤、国旗品牌乱用、漂浮方向矛盾或仅靠星空背景表示职业",
    enPrompt: "astronaut character equipped according to an intravehicular extravehicular or planetary-surface task, with pressure suit or cabin garment life-support components sealed helmet articulated gloves hose interfaces and tethered tools appropriate to the environment and posture responding to microgravity low gravity or ground gravity; visor reflections derive from real cabin or terrain, avoiding fishbowl helmets loose hoses exposed skin in vacuum random flags or brands contradictory floating direction or relying on a star background alone to signal the profession",
  },
  "feature-broad-nose-bridge": {
    zhPrompt: "宽鼻梁通过鼻骨与软骨形成较宽但连续的鼻背、自然鼻翼和与面颊协调的鼻基底，正侧面比例都服从完整面部结构，光线沿鼻梁和鼻翼产生柔和转折而非硬直高光；保留左右轻微差异与真实毛孔，避免夸大鼻孔、压扁鼻尖、卡通化增宽、改变其他五官或据此推断族群和性格",
    enPrompt: "broad nose bridge formed by a wider yet continuous bony and cartilaginous dorsum natural alae and a base proportionate to the cheeks, remaining coherent in front and profile while light turns softly across bridge and wings rather than creating a hard stripe; preserve subtle asymmetry and pores, avoiding exaggerated nostrils a flattened tip cartoon widening changes to unrelated features or inference of ethnicity and personality",
  },
  "feature-deep-set-eyes": {
    zhPrompt: "深邃眼窝由眉骨、眶缘和眼球相对位置形成自然凹深，眼睑、泪阜和眼白仍清楚，侧上方光在眉骨下产生受控阴影但不会把眼睛涂黑，视线与高光方向一致；保留年龄和个体差异，避免骷髅化凹陷、双眼黑洞、夸张眉骨、眼球后缩错位或用阴暗性格替代解剖描述",
    enPrompt: "deep-set eyes created by the natural relationship among brow ridge orbital rim and globe, with lids tear ducts and sclera still legible and upper-side light casting controlled shadow below the brow without blacking out the eyes while gaze and catchlights remain aligned; retain age and individual variation, avoiding skeletal hollows black-hole sockets exaggerated brow bone displaced recessed globes or substituting a dark personality for anatomy",
  },
  "feature-square-jaw": {
    zhPrompt: "方下颌具有清楚但不过度锐利的下颌角、较平直的下缘和与颏部连续的骨骼转折，咬肌与软组织覆盖保持自然，正面宽度和侧面深度与头骨、颈部及体态协调；不同年龄和性别均保留个体差异，避免立方体脸、刀切直角、无限加宽、颈部断开或把方下颌自动等同于强壮和攻击性",
    enPrompt: "square jaw with readable yet not razor-sharp mandibular angles a comparatively straight lower edge and continuous transition into the chin, covered by natural masseter and soft tissue while frontal width and profile depth remain proportionate to skull neck and body; preserve individual variation across age and gender, avoiding a cube face cut-metal corners unlimited widening a disconnected neck or equating jaw shape with strength and aggression",
  },
  "feature-high-cheekbones": {
    zhPrompt: "高颧骨由颧弓位置、面颊软组织和太阳穴过渡共同表现，侧光在颧部形成清楚高光并向眼下与面颊平滑衰减，正面和四分之三角度均保持连续面部体积；高低只描述骨相而不自动削瘦脸部，避免尖锐突刺、塌陷脸颊、左右高度错位、过度阴影修容或把特征绑定某一族群",
    enPrompt: "high cheekbones expressed through zygomatic arch placement cheek soft tissue and transition toward temples, with side light creating a readable highlight that falls smoothly beneath the eyes and across the cheek while frontal and three-quarter views preserve continuous facial volume; describe bone placement without automatically hollowing the face, avoiding sharp spikes collapsed cheeks mismatched heights excessive contour makeup or tying the feature to one ethnicity",
  },
  "feature-narrow-nose-bridge": {
    zhPrompt: "窄鼻梁以较细但有真实骨骼宽度的鼻背连接眉间与鼻尖，鼻翼、鼻孔和鼻基底仍保持呼吸所需的自然体积，正侧面透视一致，窄高光随光源渐变而非画成一条白线；避免夹捏感、鼻翼消失、鼻尖过细、整鼻像塑料刀片、过度医美化或通过改变眼距来强行制造窄鼻",
    enPrompt: "narrow nose bridge using a slender yet anatomically plausible dorsum connecting glabella and tip while alae nostrils and base retain natural breathing volume, with coherent front-profile perspective and a narrow highlight graded by the light source rather than painted as a white line; avoid a pinched appearance missing wings needle tip plastic blade excessive cosmetic-surgery polish or forcing narrowness by changing eye spacing",
  },
  "skin-olive": {
    zhPrompt: "橄榄肤色以中性至暖棕基底结合克制的黄绿或金色底调，在日光、阴影和室内光下分别呈现不同色彩偏移但仍像真实皮肤，面颊与嘴唇保留自然血色，高光不过分泛黄；保留毛孔和局部色素，避免军绿色滤镜、灰病感、通体棕黄、脸颈不一致或用橄榄底调推断地域身份",
    enPrompt: "olive skin using a neutral-to-warm brown base with restrained yellow-green or golden undertones that shift plausibly across daylight shade and interior light while remaining living skin, with natural circulation in cheeks and lips and highlights not turning excessively yellow; preserve pores and localized pigmentation, avoiding an army-green filter sickly gray cast uniform ochre-brown face-neck mismatch or regional inference from undertone",
  },
  "skin-deep-brown": {
    zhPrompt: "深棕肤色具有高黑色素但层次丰富的棕红、冷棕或金色底调，额头、颧骨、鼻梁和肩部以宽柔高光塑造体积，暗部保持肤色和毛孔而非压成纯黑，嘴唇、手掌与关节存在自然差异；曝光依据皮肤测光并保护高光，避免过度提亮、灰化降饱和、油亮塑料、边缘融入背景或把所有深色皮肤画成同一种颜色",
    enPrompt: "deep brown skin with melanin-rich yet layered red-brown cool-brown or golden undertones, broad soft highlights shaping forehead cheekbones nose and shoulders while shadows retain skin color and pores rather than crushing to black and lips palms and joints show natural variation; meter exposure for the skin and protect highlights, avoiding over-lightening gray desaturation oily plastic edges disappearing into the background or rendering all deep skin as one flat color",
  },
  "hair-straight-natural": {
    zhPrompt: "自然直发由头皮分区连续生长，发束整体顺直但保留细微弯曲、不同粗细和少量碎发，光泽沿发束与头骨曲面形成窄而连续的高光，发尾受重力和剪裁自然收束；直发不等于贴头皮或无体积，避免整片塑料板、每根完全平行、镜面反射、发根悬浮或发丝穿过耳朵与衣物",
    enPrompt: "natural straight hair growing continuously from scalp sections, broadly straight yet retaining minute bends varied strand thickness and limited flyaways, with narrow continuous sheen following strand direction and skull curvature and ends settling by gravity and haircut; straightness does not mean flat or volumeless, avoiding plastic sheets every strand perfectly parallel mirror reflection floating roots or hair intersecting ears and clothing",
  },
  "hair-wavy-natural": {
    zhPrompt: "自然波浪发质由宽缓的 S 形发束组成，波峰、波谷和卷度随头骨、层次、湿度与重力逐渐变化，发根通常较松、发中至发尾更明显，整体有空气感但脸部轮廓仍可读；高光沿弧线断续移动，避免所有波纹同频复制、海浪贴图、过度蓬胀、突然变成紧卷或发束互相穿透",
    enPrompt: "natural wavy hair built from broad relaxed S-shaped groups whose peaks troughs and curvature vary with skull layering humidity and gravity, often looser at the roots and clearer through mid-lengths and ends while preserving airy volume and a readable face; highlights move intermittently along curves, avoiding identically repeated waves an ocean-wave texture excessive inflation abrupt conversion into tight curls or intersecting locks",
  },
  "hair-curly-natural": {
    zhPrompt: "自然卷发由不同直径与方向的螺旋、环卷和松散卷束共同形成，发根有真实支撑，内部密度与外轮廓层次清楚，卷束在重力、湿度和接触衣物处产生拉长或压缩，碎发适量；保持卷型连续但不复制，避免方便面纹理、头盔球体、无发根体积、每卷同大或用模糊块面掩盖穿模",
    enPrompt: "natural curly hair combining spirals ringlets and looser curl groups of varied diameter and direction, with credible root lift readable internal density and layered silhouette while curls lengthen or compress under gravity humidity and clothing contact plus restrained flyaways; keep curl pattern continuous without cloning, avoiding noodle texture a helmet sphere rootless volume identical curls or blurred masses hiding intersections",
  },
  "hair-coily-natural": {
    zhPrompt: "自然紧卷发质由细密弹性的小螺旋、Z 形或折角卷束构成，收缩率、发根密度和发尾长度变化真实，整体轮廓饱满但仍能看见分区、局部卷束与光线层次，可表现自然蓬松、辫前状态或有意识造型；避免压成纯黑块、钢丝刷纹理、所有卷束同形、边缘无细节或把紧卷发错误拉直和异化",
    enPrompt: "natural coily hair built from dense elastic small spirals Z-patterns or angled coils with believable shrinkage root density and varied visible length, forming a full silhouette while retaining sectioning local coil groups and light hierarchy whether worn loose pre-braided or intentionally styled; avoid a solid black mass wire-brush texture identical coils detail-free edges or involuntary straightening and exoticization of coily texture",
  },
  "makeup-cyber": {
    zhPrompt: "赛博妆容以少量几何眼线、金属箔、冷色珠光或电路式细线围绕眼部、颧骨和太阳穴建立未来感，图形服从面部曲率与左右设计逻辑，底妆仍保留皮肤纹理，发光效果只在有光源或反射材质处出现；避免满脸随机线路、真实品牌标志、霓虹贴纸悬浮、眼线穿过眼球、皮肤塑料化或把科技感等同于蓝紫滤镜",
    enPrompt: "cyber makeup using a restrained set of geometric liner metallic foil cool pearlescence or circuit-like fine marks around eyes cheekbones and temples, with graphics following facial curvature and a coherent bilateral design while base makeup preserves skin texture and glow appears only from a source or reflective material; avoid random circuitry covering the face real brand marks floating neon stickers liner through eyeballs plastic skin or reducing futurism to a blue-violet filter",
  },
  "hair-wet-look": {
    zhPrompt: "湿发造型让发束因水分或造型品聚合成粗细不同的清晰组块，发根贴合但头骨体积仍存在，局部水光沿发丝方向移动，发尾和鬓角可有小水滴或黏附皮肤的真实接触；明确是刚淋湿还是时尚定型，避免整头油亮塑料、无重力尖刺、每根等宽、脸部像浸水、滴水方向错误或湿发穿过衣领",
    enPrompt: "wet-look hair grouping strands into clearly separated locks of varied width through water or styling product, roots lying closer while skull volume remains and localized sheen follows strand direction with optional small droplets or believable adhesion at tips and temples; distinguish freshly wet from editorial styling, avoiding uniformly greasy plastic hair weightless spikes identical locks a soaked-looking face incorrect droplet direction or hair intersecting the collar",
  },
  "hair-box-braids": {
    zhPrompt: "盒子辫从头皮上规则但不机械的方形或几何分区起辫，每股由一致数量发束连续编至末端，粗细、长度和张力符合发量，辫根、边缘碎发与固定方式清楚，运动时各辫有独立但受重力一致的摆动；避免分区漂移、辫子从皮肤凭空长出、长度无限、每股复制粘贴、穿过肩颈或挪用不相干文化饰物",
    enPrompt: "box braids beginning from orderly yet non-mechanical square or geometric scalp sections, each braid maintaining a coherent strand count to the end with thickness length and tension proportional to available hair plus readable roots edge hairs and fastening while individual braids swing separately under one gravity direction; avoid drifting parts braids emerging from skin infinite length copy-pasted strands intersections through shoulders or neck or unrelated cultural ornaments",
  },
  "makeup-dewy-skin": {
    zhPrompt: "水光肌妆感以轻薄保湿底妆均匀肤色，在颧骨、鼻梁、眉骨和唇峰放置服从主光源的柔和湿润高光，毛孔、细纹和面部起伏仍可见，额头鼻翼等易出油区域控制反射范围；肤色不被漂白，避免全脸镜面油光、玻璃皮、磨皮蜡像、没有光源的白色亮斑或将汗水与妆面混为一体",
    enPrompt: "dewy-skin makeup using a thin hydrating base to even tone while placing soft moist highlights on cheekbones nose bridge brow bone and cupid's bow according to the key light, retaining pores fine lines and facial relief and controlling reflection in naturally oily forehead and nose areas; preserve original complexion, avoiding mirror shine across the whole face glass skin waxy smoothing source-free white spots or confusing sweat with intentional makeup finish",
  },
  "makeup-stage": {
    zhPrompt: "舞台妆根据舞台距离、灯光颜色和角色设定强化眉眼、轮廓、腮红与唇部，使远景仍能读取表情，但近看保持清楚边缘、分层晕染和真实皮肤，不遮盖眼口动作；色彩与服装、布景统一，避免日常妆容简单加深、左右失衡、亮片落入眼睛、整脸白底、文化脸谱误用或在摄影近景中显得脏厚",
    enPrompt: "stage makeup calibrated to viewing distance lighting color and character, strengthening eyes brows facial planes blush and lips so expression reads from afar while close inspection retains clean edges layered blending and real skin without blocking eye or mouth movement; coordinate palette with costume and set, avoiding ordinary makeup merely darkened bilateral imbalance glitter in the eyes an all-white face misuse of cultural face-paint traditions or muddy thickness in photographic close-up",
  },
  "story-celebrating": {
    zhPrompt: "庆祝事件先明确所庆祝的成果、节日或关系，再通过拥抱、举杯、掌声、分享礼物或共同观看成果等一致动作建立群体焦点，人物反应强弱和时间阶段有所差异，道具与场所符合语境；避免所有人同时张嘴举手、无缘由彩纸爆炸、杯具穿手、文化仪式混搭、品牌文字或只有装饰却没有可辨事件核心",
    enPrompt: "celebration event first defining the achievement festival or relationship being honored, then creating a shared focal point through coherent actions such as embracing toasting applauding exchanging a gift or viewing the result, with varied reaction intensity and timing and context-appropriate setting and objects; avoid everyone shouting with raised hands simultaneously unexplained confetti explosions glasses through fingers mixed cultural rituals brand text or decoration without an identifiable cause",
  },
  "story-painting": {
    zhPrompt: "绘画创作事件明确使用油画、水彩、国画、壁画或数字绘画等媒介，人物一手控制笔刷、画刀或触控笔，另一手支撑调色盘、纸面或快捷设备，画面、颜料和工具状态对应同一创作阶段，视线落在实际落笔处；避免画笔反握、笔尖离画面却出现笔迹、颜料颜色不对应、画布正反混乱、乱码成品或只在旁边摆满未使用画具",
    enPrompt: "painting event specifying a medium such as oil watercolor ink mural or digital work, with one hand controlling brush knife or stylus and the other supporting palette paper or shortcut device while artwork pigment and tools correspond to one stage and gaze follows the actual mark; avoid reversed brush grip marks appearing away from the tip mismatched paint colors confused canvas front and back gibberish finished art or unused supplies merely piled around the person",
  },
  "story-repairing": {
    zhPrompt: "维修事件围绕一个有明确故障位置的物件或设备展开，人物先检查、拆卸、校准或更换具体部件，手部、工具和固定件在同一受力点，已拆零件有顺序放置，电气、机械或家具维修遵循各自安全条件；避免万能扳手随意碰触、工具穿模、设备带电裸修、零件悬浮、故障与动作无关或把维修场景堆成杂乱废品站",
    enPrompt: "repair event centered on an object or machine with a readable fault location, showing inspection disassembly calibration or replacement of a specific component while hands tools and fasteners meet at one load point and removed parts remain ordered, with electrical mechanical or furniture work following its own safety conditions; avoid a generic wrench touching anything tool intersections exposed live repair floating parts actions unrelated to the fault or a workshop reduced to a junk pile",
  },
  "story-investigating": {
    zhPrompt: "调查事件以一个可观察问题和有限线索构成推理链，人物测量、记录、比对、询问或检查现场，视线与手势依次连接证据而不是面向镜头摆姿势，证物位置和现场边界保持完整，可通过同伴分工形成次级动线；避免随意踩踏证据、满墙红线模板、无意义放大镜、乱码档案、所有线索发光或直接展示结论而没有调查过程",
    enPrompt: "investigation event built around an observable question and a limited chain of clues, with people measuring recording comparing interviewing or examining while gaze and gesture connect evidence sequentially instead of posing to camera, evidence positions and scene boundaries remaining intact and collaborators creating secondary paths through divided tasks; avoid trampling evidence a stock red-string wall a purposeless magnifier gibberish files every clue glowing or displaying the answer without an investigative process",
  },
  "story-farewell": {
    zhPrompt: "告别事件通过即将分开的空间方向、逐渐松开的拥抱或握手、回望、挥手和行李等少量线索呈现，离开者与留下者的重心、视线和距离形成不对称情绪，车站、门口或道路提供明确去向；情感可温暖或克制，避免所有人同时哭泣、夸张跪地、人物面向错误方向、行李悬浮或用夕阳滤镜替代真实关系",
    enPrompt: "farewell event expressed through diverging spatial directions a slowly released embrace or handshake a backward glance wave and limited luggage cues, with leaver and stayer showing asymmetric weight gaze and distance while a station doorway or road establishes destination; emotion may be warm or restrained, avoiding everyone crying simultaneously theatrical kneeling figures facing the wrong direction floating luggage or a sunset filter replacing the actual relationship",
  },
  "story-rescue": {
    zhPrompt: "救援事件先明确危险来源、受困者状态和安全出口，救援者以支撑、拖拽、固定绳索、急救或引导撤离等适合场景的动作介入，手部接触、受力方向和装备连接真实，其他人员维持安全距离与分工；表现紧迫但不过度猎奇，避免单手无支点举人、绳索无锚点、错误急救、装备穿模、围观堵塞通道或血腥伤口成为焦点",
    enPrompt: "rescue event first establishing the hazard casualty condition and safe exit, then using context-appropriate support dragging rope securing first aid or guided evacuation with believable hand contact force direction and equipment connection while others maintain distance and roles; convey urgency without spectacle, avoiding one-handed unsupported lifting unanchored ropes incorrect first aid intersecting gear bystanders blocking access or graphic wounds becoming the focus",
  },
  "story-negotiation": {
    zhPrompt: "谈判事件由两个或多个立场不同的参与方围绕一项明确议题展开，座位距离、身体前倾或后撤、手势、文件与物件交换呈现权力和让步变化，视线在发言者、对方和材料之间自然转移，旁听者反应克制；避免双方机械对称怒视、手指乱指、乱码合同占满画面、所有人同时发言、文化刻板动作或把谈判简化为握手成交照",
    enPrompt: "negotiation event involving two or more parties with distinct positions around one clear issue, where seating distance forward or backward lean gestures and exchange of documents or objects reveal shifts in leverage and compromise and gaze moves naturally among speaker counterpart and material while observers react with restraint; avoid mechanically symmetrical glaring random pointing gibberish contracts dominating the image everyone speaking at once cultural stereotypes or reducing negotiation to a closing-handshake photo",
  },
  "story-chase": {
    zhPrompt: "追逐事件需要明确追赶者、被追者、移动方向和可达路线，奔跑、骑行或载具姿态对应速度阶段，衣物、尘土、雨水和背景视差沿同一运动轴响应，前后距离与障碍物安排产生即将变化的张力；避免双方并排像合影、腿部循环错位、无路径穿墙、运动模糊掩盖人体、多个速度方向冲突或只用倾斜画面制造紧张",
    enPrompt: "chase event defining pursuer pursued subject travel direction and a traversable route, with running riding or vehicle posture matching the phase of speed and clothing dust rain and background parallax responding along one motion axis while spacing and obstacles create tension about the next change; avoid subjects side by side like a portrait cyclically broken legs wall-crossing paths blur hiding anatomy conflicting speed directions or a tilted frame used as the sole source of urgency",
  },
  "clothing-tang-suit": {
    zhPrompt: "中式盘扣唐装采用立领、对襟或偏襟、布袢盘扣和有适度松量的直身剪裁，面料、滚边与纹样服从同一现代中式设计语境，袖口、侧缝和下摆结构完整，坐立时衣襟仍连续；明确这是近现代中式服装而非唐代服饰，避免朝代混穿、盘扣随机增殖、纹样贴图、衣襟左右错接或复制真实品牌与团体制服",
    enPrompt: "modern Chinese Tang-style jacket using a stand collar symmetrical or offset front cloth frog closures and a straight cut with usable ease, with fabric piping and motifs belonging to one coherent contemporary Chinese design context and complete cuffs side seams and hem that remain continuous when sitting or standing; distinguish it from Tang-dynasty dress, avoiding mixed historical periods multiplied closures pasted patterns crossed front panels or copied brands and organization uniforms",
  },
  "clothing-bow": {
    zhPrompt: "蝴蝶结配饰先明确位于领口、发间、腰部或鞋面，再由中心结、左右环片和两端垂带构成完整受力关系，材质厚度决定挺括或垂软程度，固定点与服装、头发或鞋面真实连接；尺寸服从佩戴位置，避免悬浮蝴蝶结、左右复制却无中心结、带尾穿身体、无限叠加、误生成弓箭或把儿童化作为唯一气质",
    enPrompt: "bow accessory with placement specified at collar hair waist or shoe, built from a central knot two looped wings and optional tails under a coherent tension relationship, material thickness controlling crispness or drape and the attachment point connecting physically to garment hair or footwear; scale it to its location, avoiding floating bows mirrored loops without a knot tails through the body endless duplication confusion with an archery bow or treating childishness as its only character",
  },
  "clothing-hat": {
    zhPrompt: "帽子应先指定礼帽、棒球帽、遮阳帽或其他具体类型，并以帽冠、帽檐、帽带和内围尺寸贴合头骨，头发在帽缘下受到合理压缩，透视和阴影随头部方向一致，风中需要可见固定方式；避免万能无结构帽形、帽子悬浮、帽檐穿脸、头发穿冠、尺寸大于头部失控或不同帽型部件随机混合",
    enPrompt: "hat specified as a concrete type such as fedora baseball cap sun hat or another form, with crown brim band and inner circumference fitting the skull while hair compresses plausibly beneath the edge and perspective and shadow follow head orientation with visible fastening when wind requires it; avoid a generic structureless hat floating placement a brim through the face hair piercing the crown uncontrolled oversizing or randomly mixed parts from unrelated hat types",
  },
  "clothing-lace-detail": {
    zhPrompt: "蕾丝细节由底网、重复花叶或几何单元、连接桥和收边共同构成，可作为领口、袖口、嵌片或局部覆层，孔隙密度、线粗和透明度符合织造或刺绣工艺，并随衣片褶皱连续变形；内衬与皮肤边界清楚，避免随机洞孔、每处纹样同尺寸贴图、蕾丝穿过身体、整件服装无结构透明或把纸剪花误作织物",
    enPrompt: "lace detail constructed from ground mesh repeating floral or geometric units connecting bars and finished edges, used at collar cuffs inserts or a localized overlay with opening density thread weight and transparency plausible for woven or embroidered construction and pattern deforming continuously over garment folds; keep lining and skin boundaries clear, avoiding random holes same-scale texture everywhere lace through the body a fully structureless transparent garment or paper-cut motifs mistaken for textile",
  },
  "clothing-satin-fabric": {
    zhPrompt: "缎面服装材质以长浮线织法产生沿曲面流动的宽柔高光，底色在折叠处加深但不变成金属反射，面料具有适中重量和滑顺垂坠，缝线、卷边与受力褶皱仍可读；根据真丝或合成缎选择光泽强度，避免液态塑料、镜面白斑、所有区域同亮、布料无厚度、褶皱方向与身体动作矛盾或误作乳胶",
    enPrompt: "satin garment material using long-float weave to create broad soft highlights flowing across curvature, with base color deepening in folds without becoming metallic and fabric carrying moderate weight smooth drape readable seams rolled edges and tension folds; tune sheen for silk or synthetic satin, avoiding liquid plastic mirror-white spots uniform brightness thicknessless cloth folds contradicting body movement or confusion with latex",
  },
  "clothing-chef-uniform": {
    zhPrompt: "厨师制服由耐洗透气的双排扣或单排厨师上衣、便于活动的裤装、围裙和按岗位需要选择的帽子组成，翻领、袖口、扣位和口袋远离火源与食材污染区，面料在肘腰处有工作褶皱但保持整洁；根据厨房类型与职位调整，不强制高帽，避免夸张白袍、围裙穿身、袖口靠近明火、品牌标志、血污猎奇或把服务员制服混入",
    enPrompt: "chef uniform built from a washable breathable single- or double-breasted jacket movement-friendly trousers apron and role-appropriate headwear, with collar cuffs closures and pockets positioned for food and heat safety while working folds appear at elbows and waist without losing cleanliness; adapt to kitchen and rank without forcing a tall toque, avoiding theatrical white robes an apron through the body sleeves near flame brand marks sensational stains or confusion with waiter attire",
  },
  "clothing-belt": {
    zhPrompt: "腰带围绕真实腰线或髋位形成连续环路，通过针扣、插扣、系结或束封等一种明确结构固定，带身穿过正确腰袢并在扣件处承受张力，尾端长度和垂向服从材质与动作；腰带可收束或装饰但不改变人体，避免穿过躯干、腰袢错位、无孔扣合、无限尾带、扣头悬浮或把腰带误生成独立漂浮圆环",
    enPrompt: "belt forming a continuous loop around a real waist or hip line and fastening through one explicit mechanism such as prong buckle side-release buckle tie or sash closure, passing through correct loops and carrying tension at the fastener while tail length and direction follow material and movement; allow shaping or decoration without altering anatomy, avoiding torso intersections displaced loops impossible fastening endless tails floating buckles or a detached hovering ring",
  },
  "clothing-gloves": {
    zhPrompt: "手套依据用途选择贴合礼服手套、保暖手套、工作手套或防护手套，掌片、手背、拇指叉、指缝和腕口结构包覆真实手部体积，弯曲时在指关节与掌心形成受力褶皱，抓握物体仍显示各指位置；左右成对但保留姿态差异，避免多余手指、指套融合、手套穿物、腕口悬浮或防护等级与场景不符",
    enPrompt: "gloves selected by use as fitted formal warm work or protective equipment, with palm back thumb gusset finger webs and cuff enclosing real hand volume and tension folds forming at knuckles and palm during flexion while object grip still reveals finger placement; pair left and right while preserving pose differences, avoiding extra fingers fused stalls objects passing through the glove floating cuffs or protection level mismatched to the scene",
  },
  "clothing-beret": {
    zhPrompt: "贝雷帽由柔软圆形帽身、贴合头围的窄帽边和略偏一侧的自然塌落构成，羊毛或毡料保留细微纤维与厚度，帽体随头部倾斜但不会脱离发际，头发在帽边下合理压缩；可调整佩戴角度而不依赖刻板职业形象，避免硬盘状帽冠、悬浮、左右镜像折痕、帽边穿耳或自动添加无关徽章",
    enPrompt: "beret formed by a soft circular crown a narrow fitted headband and a natural slouch toward one side, with wool or felt retaining fine fiber and thickness while the cap follows head tilt without leaving the hairline and hair compresses plausibly beneath the band; vary wearing angle without relying on occupational stereotypes, avoiding a rigid disk crown floating placement mirrored folds a band through ears or automatically added unrelated badges",
  },
  "clothing-sneakers": {
    zhPrompt: "运动鞋由鞋面、鞋舌、鞋带系统、后跟支撑、中底与外底组成，左右鞋与脚型对应，鞋带穿过真实孔位并有合理系结，脚掌落地或弯曲时鞋面折线、鞋底压缩和接触阴影符合动作；先确定跑鞋、板鞋或训练鞋用途，避免鞋底融入地面、鞋带乱码、左右同脚、鞋头穿脚或复制品牌标识",
    enPrompt: "sneakers built from upper tongue lacing system heel support midsole and outsole, with left and right shoes matching foot anatomy and laces routed through real eyelets into a plausible knot while forefoot flex sole compression and contact shadow respond to stance or motion; specify running skate or training function first, avoiding soles melted into ground gibberish laces two same-side shoes toes intersecting feet or copied brand marks",
  },
  "clothing-hanfu": {
    zhPrompt: "汉服应先指定大致历史时期与形制，再使用交领右衽、对襟、圆领、襦裙或袍服等相互兼容的衣片系统，系带、腰线、袖型和下摆层次符合穿着顺序，面料与纹样参考可靠资料并随动作受力；人物仍可自然生活而非只摆古装照，避免不同朝代混搭、左衽误用、腰带穿身、袖长失控、现代拉链暴露或影视仙侠模板取代历史服饰",
    enPrompt: "hanfu specified by an approximate historical period and garment system, using mutually compatible crossed right-over-left fronts parallel fronts round collars ruqun layers or robes with ties waist placement sleeve form and hems following real dressing order and researched fabric and motifs responding to movement; allow ordinary lived activity rather than only costume posing, avoiding mixed dynasties accidental left-over-right closure belts through the body uncontrolled sleeves exposed modern zippers or fantasy-drama templates replacing historical dress",
  },
  "clothing-qipao": {
    zhPrompt: "旗袍采用立领、斜襟或连肩式上身、盘扣、合体但可活动的省道与一处或两处合理开衩，肩胸腰髋之间由连续衣片和接缝塑造，坐立行走时下摆与开衩产生真实张力；根据年代选择宽松民国形制或现代剪裁，避免全身涂层般紧贴、开衩过高、盘扣漂移、左右襟错接、身体穿布或把所有中式纹样堆满衣身",
    enPrompt: "qipao constructed with a stand collar diagonal or continuous-shoulder front frog closures fitted yet mobile darts and one or two plausible slits, using continuous panels and seams to shape shoulder bust waist and hip while hem and slit carry real tension during sitting standing and walking; choose a looser Republican-era or modern cut, avoiding painted-on tightness excessive slit height drifting closures crossed fronts body-cloth intersections or every Chinese motif crowded onto the garment",
  },
  "pose-holding-object": {
    zhPrompt: "手持物品姿势先依据物体重量、尺寸、温度和易碎性决定单手、双手、托底或夹持方式，手掌与手指在真实接触点弯曲，腕肘肩形成连续受力链，人物视线和躯干可回应物品用途；物体重心应落在支撑范围内，避免手指穿透、掌心无接触、单手托举超重物、左右手混接、物品悬浮或用模糊隐藏坏手",
    enPrompt: "object-holding pose choosing one hand two hands bottom support or pinch according to the object's weight size temperature and fragility, with palm and fingers bending at real contact points and wrist elbow and shoulder forming a continuous load chain while gaze and torso may respond to use; keep the object's center of mass over its support, avoiding fingers through surfaces contactless palms one-handed impossible loads crossed hands floating objects or blur hiding malformed hands",
  },
  "pose-yoga-stretch": {
    zhPrompt: "瑜伽伸展姿势应指定具体体式或伸展目标，让支撑点、重心、脊柱延展、髋肩方向和呼吸空间符合人体活动范围，手掌、脚底或坐骨与垫面真实接触，左右侧受力可不对称但保持稳定；服装随关节拉伸且不遮盖关键姿态，避免极限反折、膝肘方向错误、悬浮肢体、无支撑平衡或把普通体操随意命名为瑜伽",
    enPrompt: "yoga stretch specifying a pose or mobility goal so support points center of mass spinal extension hip and shoulder orientation and breathing space remain within human range, with palms soles or sitting bones contacting the mat and asymmetric loading still stable; clothing stretches with joints without hiding the form, avoiding extreme backfolding reversed knees or elbows floating limbs unsupported balance or casually labeling generic gymnastics as yoga",
  },
  "pose-waving": {
    zhPrompt: "挥手动作让一侧手臂从肩部自然抬起，肘部保持轻微弯曲，手掌朝向被问候者，五指分开或小幅摆动，腕部与前臂方向连续，人物视线和表情回应同一对象；另一手与身体保持自然平衡，避免手掌反向、拇指位置错误、额外手指、手腕断折、整臂贴脸或把挥手误生成敬礼",
    enPrompt: "waving gesture raising one arm naturally from the shoulder with a lightly bent elbow palm facing the greeted person fingers separated or moving through a small arc and wrist aligned with forearm while gaze and expression address the same target; the other hand and body remain balanced, avoiding a reversed palm misplaced thumb extra fingers broken wrist an arm pasted to the face or confusion with a salute",
  },
  "pose-contemporary-dance": {
    zhPrompt: "现代舞姿以收缩、释放、落地、悬停或失衡恢复中的一个明确动作阶段组织身体，脊柱、骨盆、肩带和四肢形成连续动力链，支撑脚或接触面承担真实重量，自由肢体与衣物具有延迟；情绪来自动作质量而非随机扭曲，避免无重力悬浮、关节反折、四肢互穿、每个方向同时发力或用夸张拖影掩盖人体结构",
    enPrompt: "contemporary dance pose organized around one clear phase of contraction release floor work suspension or recovery from imbalance, with spine pelvis shoulder girdle and limbs forming a continuous kinetic chain and the supporting foot or surface bearing real weight while free limbs and clothing lag naturally; derive emotion from movement quality rather than random distortion, avoiding weightless levitation reversed joints intersecting limbs force in every direction or exaggerated blur hiding anatomy",
  },
  "pose-archery-stance": {
    zhPrompt: "拉弓姿势让持弓手臂向目标延伸但肘部不过度锁死，拉弦手沿箭尾向后到达稳定锚点，肩胛下沉并共同承担张力，弓弦、箭杆、箭台和视线位于一致射击平面，前后脚形成可靠站姿；根据弓型调整细节，避免弦穿脸或手臂、箭不搭弦、弓向错误、双肩耸起、手指数量异常或在无防护情况下夸张满弓",
    enPrompt: "archery stance extending the bow arm toward target without hyperlocking the elbow while the string hand draws the nock to a stable anchor and lowered shoulder blades share tension, with string arrow shaft rest and gaze aligned on one shooting plane and staggered feet creating a reliable base; adapt details to bow type, avoiding string through face or arm an unnocked arrow reversed bow raised shoulders malformed fingers or exaggerated full draw without appropriate protection",
  },
  "pose-handshake": {
    zhPrompt: "握手互动让两人的对应右手或指定手在身体之间相遇，拇指交叉位、掌面和四指真实贴合，腕部保持中立，肘肩根据身高和距离形成自然角度，双方站位允许正常臂长并通过视线与躯干朝向建立关系；避免两只同侧手、手掌融合、多余手指、手臂过长、身体距离无法触及或把握手画成互相抓腕",
    enPrompt: "handshake interaction bringing corresponding right hands or explicitly chosen hands together between two people with crossed thumb webs palms and four fingers making real contact, wrists neutral and elbows and shoulders adapting to height and distance while stance permits normal arm length and gaze and torso orientation establish relationship; avoid two same-side hands fused palms extra fingers elongated arms unreachable body spacing or a wrist grab mistaken for a handshake",
  },
  "pose-pointing": {
    zhPrompt: "指向动作由肩、肘、腕和食指形成清楚但不僵直的引导线，指尖准确落向画面内可辨目标或画外方向，人物视线、头部转向和躯干轻微旋转与指向一致，其余手指自然收拢；避免指向空处却无叙事目的、食指数量异常、手腕折断、手臂穿过身体、视线反向或把指向误成持枪姿势",
    enPrompt: "pointing gesture forming a clear but relaxed guide line through shoulder elbow wrist and index finger, with fingertip aimed at a recognizable in-frame target or purposeful off-screen direction and gaze head turn and slight torso rotation aligned while remaining fingers curl naturally; avoid aimless pointing extra index fingers broken wrist an arm through the torso gaze in the opposite direction or confusion with a firearm pose",
  },
  "pose-thinking": {
    zhPrompt: "托腮思考姿势让手掌侧缘、指节或一两根手指轻触下巴或面颊，前臂由桌面、另一只手或身体结构合理支撑，头部重量只造成轻微皮肤压痕，视线可偏离焦点并与安静呼吸、眉眼微表情配合；避免整只手穿脸、手指覆盖五官、无支撑肘部悬空、头颈折断、夸张皱眉或把思考固定为单一刻板动作",
    enPrompt: "thinking pose using the side of the palm knuckles or one or two fingers to touch chin or cheek lightly while the forearm is plausibly supported by a table opposite hand or body structure and head weight causes only slight skin compression, with defocused gaze quiet breathing and subtle brow-eye expression; avoid a hand through the face fingers covering all features an unsupported floating elbow broken neck theatrical frowning or treating one stock gesture as the only sign of thought",
  },
  "pose-covering-face": {
    zhPrompt: "遮脸姿势先明确用手掌、前臂、衣袖或道具遮挡的范围和原因，只覆盖部分五官并保留可读轮廓，手指与面部曲率真实接触，腕肘肩提供自然路径，剩余眼神和身体姿态承担情绪；遮挡可表达害羞、防护或神秘但不自动恐怖化，避免手掌融脸、多余手指、双臂交叉穿透、全部信息消失或道具悬浮",
    enPrompt: "face-covering pose specifying whether palm forearm sleeve or prop conceals a limited area and why, preserving a readable silhouette while fingers contact facial curvature and wrist elbow and shoulder provide a natural path and the remaining gaze and body carry emotion; allow shyness protection or mystery without automatic horror, avoiding a palm fused into the face extra fingers crossed intersecting arms all information erased or a floating prop",
  },
  "pose-fashion-runway": {
    zhPrompt: "走秀台步捕捉一步落地与下一步摆动的明确瞬间，支撑脚沿台步轴线承重，另一腿从髋部自然前送并产生视觉交叉但不扭曲膝踝，骨盆、肩线和手臂以克制摆动平衡，目光沿前进方向；服装与饰物延迟响应步伐，避免双腿融合、脚踩同一点、极端扭胯、手臂僵直、鞋跟离脚或用拉长人体代替修长姿态",
    enPrompt: "fashion runway walk captured at a clear instant between one grounded step and the next swing, with the support foot carrying weight along the runway axis and the free leg advancing from the hip into visual crossover without twisting knees or ankles while pelvis shoulders and restrained arm swing balance and gaze follows travel; garments and accessories lag behind the step, avoiding fused legs both feet on one point extreme hip distortion rigid arms heels detached from shoes or elongated anatomy used to fake elegance",
  },
  "pose-fighting-stance": {
    zhPrompt: "战斗架势应先指定拳击、格斗、武术或虚构体系，再让双脚错开建立重心、膝髋保留移动余量、核心稳定、双手按防守与攻击距离布置，头部受到肩与前臂保护，视线锁定对手或威胁；服装和装备允许动作，避免随机英雄姿势、双脚平行僵站、拳头贴脸、关节反折、武器与空手体系混乱或无目标怒吼",
    enPrompt: "fighting stance specified as boxing combat sport martial art or a fictional system, then built from staggered feet a mobile knee-hip base stable core hands placed for guard and range and head protected by shoulders and forearms with gaze fixed on opponent or threat; clothing and gear permit movement, avoiding a random heroic pose parallel rigid feet fists glued to the face reversed joints mixed weapon and empty-hand systems or shouting without a target",
  },
  "pose-sword-ready": {
    zhPrompt: "持剑准备姿势先确定单手或双手剑及其重量，主手和辅手在剑柄上形成正确握距，腕肘肩对齐并让剑尖指向安全而明确的威胁线，双脚、髋部和躯干共同承担武器惯性，剑鞘与服装不干扰动作；避免握住剑刃、手指穿柄、巨剑无重量、剑尖穿身体、双手位置互换、无支撑漂浮或混用不相容时代装备",
    enPrompt: "sword-ready pose first specifying one- or two-handed weapon and weight, with lead and support hands spaced correctly on the grip wrists elbows and shoulders aligned and blade aimed along a clear safe threat line while feet hips and torso absorb weapon inertia and scabbard and clothing stay out of the motion; avoid gripping the blade fingers through the hilt weightless oversized swords blade through the body swapped hands unsupported floating or incompatible historical equipment mixed together",
  },
  "camera-group-diagonal-line": {
    zhPrompt: "多人对角线队列沿一个清楚的前后轴线递进，最近者、核心人物和远端成员在大小、遮挡与间距上共同建立透视，所有人的行进方向或站姿关系一致但动作不机械复制，队列两侧保留可读环境；对角线应服务叙事与纵深，避免人物等大贴图、间距完全相同、身体互穿、队列越过不可通行区域或仅把画面整体倾斜",
    enPrompt: "group diagonal-line composition advancing along one clear near-to-far axis, with nearest figure principal subject and distant members using scale occlusion and spacing to establish perspective while travel or stance remains coherent without cloned poses and readable environment stays on both sides; let the diagonal serve narrative and depth, avoiding equal-size cutout people mechanical intervals body intersections a line crossing impassable space or merely tilting the whole frame",
  },
  "camera-back-silhouette": {
    zhPrompt: "背影镜头把人物背部、肩线、头部和面向目标的方向作为主要叙事信息，机位与人物视线共同指向远景、门口或事件，轮廓由环境亮度分离但衣物、头发和姿态仍保留适量细节；可表达观察、离开或探索而非固定孤独，避免全黑纸片、头颈粘连、脚部无落点、远景与朝向无关或误生成正脸回头",
    enPrompt: "back-view shot using the subject's back shoulder line head and facing direction as narrative information, with camera axis and implied gaze leading toward a landscape doorway or event and silhouette separated by environmental value while retaining measured garment hair and posture detail; allow observation departure or exploration rather than automatic loneliness, avoiding a pure black cutout fused head and neck unsupported feet an unrelated background or an unintended frontal face",
  },
  "camera-reflection-shot": {
    zhPrompt: "倒影镜头先明确水面、镜子、金属或玻璃的反射平面，再按入射与观察角度生成方向正确的倒影，反射受表面粗糙度、波纹、污迹和透光率影响，主体与倒影之间保持可追溯几何关系；可用倒影补充信息或制造双层叙事，避免复制粘贴式第二主体、左右方向错误、水面倒影比实物更清晰、玻璃无透射或反射穿越边框",
    enPrompt: "reflection shot first defining water mirror metal or glass as the reflecting plane, then constructing directionally correct reflection from incident and viewing angles with roughness ripples marks and transmission affecting clarity while subject and image retain traceable geometry; use reflection to reveal extra information or layered narrative, avoiding a copied second subject reversed orientation water reflection sharper than reality glass without transmission or reflection continuing through a frame",
  },
  "camera-deep-focus": {
    zhPrompt: "全景深镜头让前景、中景和远景的重要信息同时达到可用清晰度，通过较小光圈、合适焦距、充足光线与超焦距位置建立真实光学结果，空间层次主要依靠尺度、遮挡、空气透视和明暗区分而非虚化；焦点仍有叙事优先级，避免所有像素同样锐利、边缘过度锐化、远景无空气衰减或把平面拼贴误作深焦摄影",
    enPrompt: "deep-focus shot keeping essential foreground midground and distance detail simultaneously usable through a smaller aperture suitable focal length adequate light and hyperfocal placement, with depth separated by scale occlusion atmosphere and value rather than blur; narrative priority still guides attention, avoiding every pixel equally sharpened halos from oversharpening distant objects without atmospheric loss or flat collage mistaken for optical deep focus",
  },
  "camera-panning-shot": {
    zhPrompt: "摇摄追随在较慢快门下让镜头沿移动主体方向同步转动，主体关键轮廓和面部或载具标志面相对清楚，背景沿运动轴形成连续水平或弧形拖影，脚轮和肢体可保留适量动作模糊；地面接触与速度方向一致，避免主体与背景都糊、径向爆炸模糊、拖影方向相反、重复肢体或静止人物被强行套速度效果",
    enPrompt: "panning shot using a slower shutter while the camera rotates with a moving subject, keeping the key silhouette and face or vehicle identity relatively clear as the background streaks continuously along a horizontal or curved motion axis and wheels feet or limbs retain measured motion blur; ground contact and speed direction agree, avoiding both subject and background blurred radial zoom streaks opposite motion direction duplicated limbs or a stationary subject given an artificial speed effect",
  },
  "camera-group-facing-each-other": {
    zhPrompt: "双人对视构图让两人的眼线在同一空间高度或合理高差上相交，身体朝向、脚位和距离支持交流、冲突、谈判或亲密关系，中间负空间可容纳共同对象或情绪张力，近远关系保持视线轴一致；避免两人都看向镜头、眼线错开、身体距离与臂长冲突、面部比例不一、完全镜像僵站或中间被无关物体阻断",
    enPrompt: "two-person face-to-face composition aligning eyelines at one spatial height or a plausible height difference, with torso orientation foot placement and distance supporting conversation conflict negotiation or intimacy and central negative space holding a shared object or tension while near-far staging respects the eyeline axis; avoid both people looking at camera missed gaze unreachable spacing mismatched facial scale rigid mirror poses or irrelevant obstruction between them",
  },
  "camera-group-triangle": {
    zhPrompt: "三角人物站位让三名角色分别占据三角形顶点，通过前后高低、身体朝向和视线形成清楚主次，可由前方一人配后方两人或反向结构建立稳定关系，遮挡只发生在非关键轮廓；三角形不必几何等边但重心需稳定，避免三人同高同动作排排站、头部重叠、关系轴互相矛盾或为了凑形状扭曲空间",
    enPrompt: "three-person triangular blocking placing each figure near one vertex and using depth height torso direction and gaze to establish hierarchy, whether one forward with two behind or the inverse while occlusion avoids key silhouettes; the triangle need not be equilateral but visual weight stays stable, avoiding three identical people in a row overlapping heads contradictory relationship axes or distorted space used merely to force a geometric shape",
  },
  "camera-silhouette-doorway": {
    zhPrompt: "门框剪影构图利用真实门洞、拱口或通道形成内层取景框，主体位于开口内或跨越门槛，前景框体曝光更暗但保留厚度和透视，门后环境光解释轮廓并引导进入或离开的动线；框与主体尺度符合建筑，避免画成装饰相框、门框穿脸、主体悬浮、内外透视冲突、暗部纯黑堵死或重复多层门框抢焦点",
    enPrompt: "doorway silhouette composition using a real door arch or passage as an inner frame, placing the subject within the opening or crossing the threshold while the foreground structure exposes darker yet retains thickness and perspective and light beyond explains the contour and path of entry or exit; keep frame scale architectural, avoiding a decorative picture frame edges through the face a floating subject conflicting inside-outside perspective crushed blacks or repeated nested doorways stealing focus",
  },
  "camera-dolly-zoom": {
    zhPrompt: "滑动变焦镜头通过相机前后移动并反向调整焦距，使主体在画面中的尺寸近似稳定而背景视角、物体间距和透视压缩明显变化，效果集中在纵深结构而不是主体变形；在单帧中以异常拉伸或压缩的背景关系暗示运动，避免径向模糊、普通数码缩放、主体大小变化、广角脸部畸变或背景物体凭空移动",
    enPrompt: "dolly-zoom shot moving the camera forward or backward while changing focal length in the opposite direction so subject size remains nearly stable as background angle spacing and perspective compression shift visibly, concentrating the effect in depth rather than deforming the subject; imply motion in a still through unusual background expansion or compression, avoiding radial blur ordinary digital zoom changing subject scale wide-angle facial distortion or background objects physically relocating",
  },
  "camera-side-profile": {
    zhPrompt: "侧面轮廓镜头让主体头部或身体轴线接近九十度侧向，鼻唇颏、额头后脑和肩髋轮廓保持清楚，近远侧肢体按透视适当重叠，视线与动作方向在前方保留空间；光线可用轮廓或侧光塑形但不抹去面部体积，避免误成四分之三视角、双眼同时完整可见、鼻部变形、耳朵错位或人物面对画框边缘无空间",
    enPrompt: "side-profile shot turning head or body axis close to ninety degrees so forehead nose lips chin back of head and shoulder-hip silhouette remain readable while near and far limbs overlap by perspective and room remains ahead of gaze or motion; rim or side light may shape the outline without erasing facial volume, avoiding accidental three-quarter view both eyes fully visible distorted nose displaced ear or a subject facing directly into the frame edge",
  },
  "camera-s-curve": {
    zhPrompt: "S 曲线构图让道路、河流、栏杆、队列或光带从前景入口以两次方向变化引向主体和远景，曲线宽度、透视收缩与地形连续，主体可位于转折点而不堵塞流线，周围元素简化以保持引导作用；避免生硬绘制字母 S、曲线无起止、道路突然变窄或爬墙、多个竞争曲线以及只靠后期光带覆盖真实空间",
    enPrompt: "S-curve composition using a road river railing procession or light path that enters from the foreground and changes direction twice toward subject and distance, with width perspective taper and terrain continuity intact and the subject optionally placed at a bend without blocking flow while surrounding detail stays subordinate; avoid literally drawing the letter S a curve without entry or destination roads narrowing abruptly or climbing walls competing curves or a postproduction light streak laid over unrelated space",
  },
  "camera-ultra-wide-angle": {
    zhPrompt: "超广角镜头使用约 12–20mm 全画幅等效焦段和近距离机位，显著放大前景、拉开近远尺度并容纳广阔空间，中央主体比例相对稳定而边缘透视逐渐增强，垂直线是否汇聚取决于机位俯仰；利用畸变服务空间叙事，避免数字横向拉伸、边缘人物肢体异常、弯曲地平线无依据、近景遮满画面或与长焦压缩同时出现",
    enPrompt: "ultra-wide-angle lens around 12–20mm full-frame equivalent from a close camera position, strongly enlarging foreground separating near and far scale and encompassing broad space while central proportions stay relatively stable and edge perspective increases gradually and vertical convergence follows camera tilt; use distortion for spatial narrative, avoiding digital horizontal stretching malformed edge limbs an unjustified curved horizon foreground covering everything or simultaneous telephoto compression",
  },
  "scene-desert-oasis": {
    zhPrompt: "沙漠绿洲位于低洼含水层或泉眼周围，有限水面、湿润岸缘、棕榈或耐旱植被由水源向外逐渐稀疏，外围沙丘仍服从主风向，水面反射、蒸发雾气和足迹提供真实尺度；绿洲应稀有且生态集中，避免在沙海中铺满热带雨林、无来源瀑布、沙丘像海浪、植被根部无湿土或把场景画成豪华度假村",
    enPrompt: "desert oasis located around a low aquifer spring or seep, with limited water damp shore palms or drought-tolerant plants thinning outward from the source while surrounding dunes follow prevailing wind and reflections evaporation haze and tracks provide scale; keep the oasis scarce and ecologically concentrated, avoiding rainforest filling the desert source-free waterfalls ocean-like dunes plants rooted in dry sand or an automatic luxury resort",
  },
  "scene-moonlit-beach": {
    zhPrompt: "月光海滩由低亮度天空、月光在海面形成的方向性银色反光带、潮湿沙面和潮池的局部倒影共同建立，浪线按海岸透视递减，远处地平线清楚但不过亮，人物与岩石获得柔和侧逆光；夜色保留蓝灰层次，避免白昼海滩套蓝滤镜、整片海面发光、月亮与反光方向不一致、星空过密或阴影全黑",
    enPrompt: "moonlit beach built from a low-luminance sky a directional silver path of moonlight across water localized reflections on wet sand and tide pools and wave lines tapering by coastal perspective, with a readable but restrained horizon and soft side-backlight on people or rocks; retain blue-gray night detail, avoiding a daylight beach under a blue filter a uniformly glowing sea moon and reflection misalignment overcrowded stars or crushed black shadows",
  },
  "scene-rooftop-garden": {
    zhPrompt: "城市屋顶花园设置在可承重、防水并有安全护栏的屋面上，种植槽、耐风植物、步道、座椅和排水组织成可使用空间，远处楼群与屋顶机电设施保持合理关系，风向与高处日照影响植物形态；强调城市生态而非地面公园，避免巨树无根基、花园跨越屋檐、护栏缺失、植被遮满天际线或与普通露台完全同质",
    enPrompt: "urban rooftop garden placed on a load-bearing waterproof roof with safety parapets, organizing planters wind-tolerant vegetation paths seating and drainage into usable space while distant buildings and rooftop mechanical equipment remain plausible and exposure and wind affect plant form; emphasize elevated urban ecology rather than a ground park, avoiding unsupported giant trees gardens spilling over edges missing rails vegetation hiding the skyline or no distinction from an ordinary terrace",
  },
  "scene-summer-heat-haze": {
    zhPrompt: "盛夏热浪场景以高太阳角、短而硬的阴影、被晒白的高光、远处地表上升热空气造成的轻微折射扭曲和稀薄空气层表现，高温还会影响人物姿态、植物叶片与路面状态；近景主体保持清楚，热扰动主要位于远处地平线，避免全画面液化、火焰特效、橙色滤镜、潮湿蒸汽与干热混淆或无强光却出现热浪",
    enPrompt: "summer heat-haze scene using a high sun angle short hard shadows sun-bleached highlights subtle refractive shimmer rising above distant ground and thin dry air, with heat also affecting posture foliage and road surfaces; keep near subjects clear and confine strongest turbulence near the distant horizon, avoiding the whole image melting flame effects an orange filter confusion between humid steam and dry heat or mirage without strong heating",
  },
  "scene-winter-blizzard": {
    zhPrompt: "冬季暴雪由强风驱动的密集斜向雪粒、近地吹雪、被削弱的远景和迅速积雪的迎风背风差异构成，树木、建筑和人物姿态共同响应单一风向，脚印与道路会被逐渐覆盖，冷光中仍保留可导航的轮廓；强调危险天气但不猎奇，避免纸屑般大雪片、每层同密度、人物衣着单薄、地面无积雪或风雪方向互相矛盾",
    enPrompt: "winter blizzard built from dense wind-driven diagonal snow ground drift reduced distant visibility and different accumulation on windward and leeward surfaces, with trees architecture and posture responding to one wind direction while tracks and roads gradually disappear and navigable silhouettes remain in cold light; convey hazardous weather without spectacle, avoiding paper-like giant flakes equal density at every depth inadequate clothing bare ground or contradictory snow directions",
  },
  "scene-foggy-morning-valley": {
    zhPrompt: "晨雾山谷让低温雾气沿谷底、河道和低洼地层叠聚集，较高山脊与树梢逐层穿出雾面，初晨侧逆光产生柔和亮边和有限光束，近景对比高于远景并可见露水；雾厚度受地形控制而非均匀白幕，避免山体悬浮、所有层同清晰、无来源丁达尔光、天空过曝或把云海和地面雾混成一层",
    enPrompt: "foggy morning valley with cool mist pooling in the valley floor river course and depressions while higher ridges and treetops emerge in layers, early side-backlight creating soft edges and limited shafts and foreground contrast exceeding distance with optional dew; let terrain control fog thickness rather than a uniform white screen, avoiding floating mountains equal clarity at all depths source-free light rays clipped sky or cloud sea and ground fog merged into one flat layer",
  },
  "scene-rainbow-after-rain": {
    zhPrompt: "雨后彩虹场景同时保留远处仍有雨幕或湿润空气、观察者背后的低角度阳光、与太阳相反方向出现的主虹以及地面水迹和清晰度逐渐恢复的天空，彩虹色序与弧线自然且半透明；可有极淡副虹但不过分，避免彩虹任意方向、饱和实体彩带、晴空无水汽、多个同亮彩虹、彩虹落到前景物体前方或地面完全干燥",
    enPrompt: "post-rain rainbow scene retaining distant rain or moist air low-angle sunlight behind the viewer a primary bow opposite the sun wet-ground evidence and a sky clearing in stages, with natural color order curvature and translucent intensity; allow a very faint secondary bow when appropriate, avoiding arbitrary orientation a solid saturated ribbon a dry clear sky multiple equally bright bows a rainbow appearing in front of nearby objects or completely dry ground",
  },
  "scene-sandstorm-desert": {
    zhPrompt: "沙尘暴以强风卷起近地沙流并形成逐层加厚的黄褐色沙幕，远景轮廓、太阳和地平线被颗粒逐渐削弱，沙粒沿地形和障碍物绕流，人物、车辆与植被朝同一风向防护或倾斜；近处仍保留少量尺度信息，避免纯色棕雾、烟雾般向上飘、每层同清晰、无风姿态、巨大石块飞舞或把普通薄尘误作灾害级沙暴",
    enPrompt: "desert sandstorm using strong wind to drive low ground streams of sand into progressively thick ochre-brown curtains, reducing distant silhouettes sun and horizon while particles flow around terrain and obstacles and people vehicles and vegetation protect or lean against one direction; retain limited near-scale cues, avoiding a flat brown fog smoke rising vertically equal visibility at all depths windless posture flying boulders or ordinary light dust mislabeled as a severe storm",
  },
  "scene-snowy-pine-forest": {
    zhPrompt: "雪松森林由针叶树高低密度、枝条承雪量、林间通道和被积雪覆盖的地面起伏建立纵深，近树可见树皮与雪团，远树因冷空气和微雾逐渐简化，散射天光在雪面形成蓝灰阴影与柔亮高光；脚印或人物提供尺度，避免每棵树复制、雪均匀涂白、枝条无承重下垂、地面平板或把常绿针叶误画成阔叶树",
    enPrompt: "snowy conifer forest using varied tree height density branch snow load paths and covered ground relief to build depth, with near trunks showing bark and clumps while distant trees simplify through cold air and slight mist and diffuse sky light creates blue-gray snow shadows and soft highlights; tracks or figures may provide scale, avoiding cloned trees uniform white coating branches ignoring load flat ground or evergreen needles rendered as broad leaves",
  },
  "scene-crystal-cave-sanctuary": {
    zhPrompt: "水晶洞圣所建立在可信岩洞结构中，晶体从矿脉和裂隙成簇生长，透明度、颜色和发光强度按矿物与厚度变化，光线在湿岩、浅水与切面间产生克制反射，步道、祭台或休憩点说明圣所用途与尺度；神秘感来自空间与材质，避免水晶随机铺满、无能源全洞自发光、彩虹过饱和、晶体穿人或把洞穴变成玻璃宫殿",
    enPrompt: "crystal-cave sanctuary grounded in believable geology, with crystal clusters growing from veins and fractures and transparency color and luminosity varying by mineral and thickness while restrained light reflects among damp rock shallow water and facets and a path altar or refuge explains sacred use and scale; derive mystery from space and material, avoiding crystals carpeting everything source-free glow throughout saturated rainbow color crystals intersecting people or a cave turned into a glass palace",
  },
  "scene-autumn-maple-road": {
    zhPrompt: "秋叶道路以进入秋季不同阶段的树冠、枝头残叶、地面落叶层和清楚可行走的道路共同构成，红橙黄叶色保留品种和光照差异，少量叶片按风向移动，远景通过暖冷变化与空气透视展开；避免每片叶同色同形、道路被叶子完全埋没、满屏悬浮叶片、红色滤镜覆盖天空和肤色或把秋景误作森林火灾",
    enPrompt: "autumn maple road built from canopies at varied seasonal stages remaining leaves on branches a fallen-leaf layer and a clearly traversable road, with red orange and yellow retaining species and lighting variation and a limited number of leaves moving with one wind while distance opens through warm-cool shift and atmosphere; avoid identical leaves a road completely buried leaves floating everywhere a red filter over sky and skin or autumn mistaken for wildfire",
  },
  "scene-first-snow-town": {
    zhPrompt: "小镇初雪表现刚开始覆盖的薄雪、仍露出的屋瓦与道路、屋檐融水和零散脚印，街灯或窗内暖光与阴天冷环境形成克制对比，雪花数量适中并在不同景深中变化，居民与车辆保持日常尺度；强调季节初转而非深冬，避免半米积雪、暴风雪能见度、所有屋顶纯白无结构、圣诞装饰自动出现或街面完全干燥",
    enPrompt: "small-town first snow showing a thin new covering with roof tiles and roads still partly visible eave melt and scattered tracks, restrained warm street or window light against cool overcast surroundings and moderate flakes varying across depth while residents and vehicles keep everyday scale; emphasize seasonal transition rather than deep winter, avoiding half-meter drifts blizzard visibility blank white roofs automatic Christmas decoration or a completely dry street",
  },
  "camera-three-quarter-view": {
    zhPrompt: "三分之三视角让主体相对镜头转动约三十至四十五度，同时展示正面识别信息与一侧体积，近侧轮廓稍大、远侧自然缩短，脸部只完整显示近侧耳或边缘，身体肩髋方向保持一致或有意形成自然扭转；适合人物、产品和角色设定，避免误成纯正面、严格侧面、双侧完全对称、远侧肢体消失或透视方向互相矛盾",
    enPrompt: "three-quarter view rotating the subject roughly thirty to forty-five degrees from camera to reveal frontal identity and one side's volume, with the near contour slightly larger the far side naturally foreshortened and only the near ear or edge fully visible while shoulder and hip orientation agree or twist intentionally; suitable for portraits products and character design, avoiding pure frontal or strict profile view bilateral symmetry missing far limbs or contradictory perspective directions",
  },
  "camera-person-background": {
    zhPrompt: "人物背景位置把角色放在远景、地平线或空间深处，使其占画面较小比例但通过色彩明度对比、光线、道路或建筑轴线保持可辨，前中景承担环境叙事并提供到人物的视觉路径，人物脚下与场景透视、雾化程度一致；避免小人像贴纸悬浮、远景却比前景更锐、人物比例错误、地平线穿身体或靠荧光描边强行抢焦点",
    enPrompt: "background-positioned person placed in the distance near the horizon or deep within space at a small scale yet kept recognizable through value-color contrast light roads or architectural axes, with foreground and midground carrying environmental narrative and a visual path toward the figure while footing perspective and atmospheric softness match depth; avoid a tiny sticker-like floating person sharper than foreground wrong scale horizon cutting the body or forced fluorescent outline",
  },
  "camera-person-lower-left": {
    zhPrompt: "人物左下角位置将角色完整锚定在左下三分交点附近，保留脚部、座面或接触阴影，人物视线和动作朝向画面内部，右侧与上方环境承担目的地、叙事或文案空间；人物大小由具体景别决定而非固定缩小，避免同时贴住左边和底边、朝画外看、脚被裁断、右上出现同强度人物或把这项误作所有主体通用的版式留白",
    enPrompt: "lower-left person placement anchoring the complete figure near the lower-left thirds point with feet seat or contact shadow retained and gaze and action directed inward while environment to the right and above carries destination narrative or copy space; determine figure scale from the chosen shot rather than always making it tiny, avoiding contact with both borders looking out of frame cropped feet an equally strong person upper right or treating this as a generic layout rule for every subject",
  },
  "camera-person-lower-right": {
    zhPrompt: "人物右下角位置将角色完整锚定在右下三分交点附近，保留脚部、座面或接触阴影，人物朝左侧或画面内部建立视线与运动方向，左侧和上方环境可展开道路、事件或文案；人物比例由景别和距离控制，避免被两条边夹住、朝画外移动、肢体被裁、左上角出现竞争焦点或把人物位置与普通右下角图形版式混为一谈",
    enPrompt: "lower-right person placement anchoring the complete figure near the lower-right thirds point with feet seat or contact shadow retained and gaze or motion leading leftward or inward while the environment opens across the left and upper frame for a path event or copy; control figure scale through shot and distance, avoiding entrapment against two borders outward movement cropped limbs a competing upper-left focus or confusion with a generic lower-right graphic layout",
  },
  "camera-group-back-to-back": {
    zhPrompt: "双人背靠背站位让两人的肩胛或上背在一个真实接触区域相靠，脚位分别支撑自身重心，躯干和头部可朝相反方向观察不同威胁或表达分歧，人物身高差与接触点自然，手臂和道具位于各自活动空间；避免脊柱完全重叠、身体互穿、两人像镜像复制、脚离地、头朝同一方向却无叙事或武器穿过对方",
    enPrompt: "back-to-back pair placing shoulder blades or upper backs in one plausible contact area while each person keeps an independent grounded stance and torso and head may watch opposite directions or express disagreement, with natural height difference and contact point and arms and props staying in separate working space; avoid merged spines intersecting bodies mirrored clones floating feet both heads facing identically without purpose or weapons passing through the partner",
  },
  "camera-depth-layering": {
    zhPrompt: "前中后景层次用至少三个可辨空间平面组织画面：前景提供尺度、遮挡或入口，中景承载核心主体与动作，远景交代地点和天气，各层通过尺寸递减、重叠、对比和空气透视建立连续深度，焦点策略可全清晰或选择性清晰；避免三层像独立贴图、前景遮住主体、远景比例过大、所有层同对比或用单纯上下分栏冒充空间纵深",
    enPrompt: "foreground-midground-background layering organizing at least three readable spatial planes: foreground supplies scale occlusion or entry, midground carries the core subject and action and distance establishes place and weather, connected through diminishing size overlap contrast and atmosphere with either deep or selective focus; avoid three pasted images foreground blocking the subject oversized distance equal contrast across every plane or simple horizontal bands mistaken for spatial depth",
  },
  "camera-scale-contrast": {
    zhPrompt: "尺度对比构图将小人物、车辆或已知尺寸物体放在巨大建筑、地貌或生物旁作为参照，二者处于可比较的空间深度并共享地面、光线和透视，巨大主体的局部细节与空气透视进一步说明体量；保持小主体仍可辨，避免远近错位造成假比例、巨物像背景贴纸、人物悬浮、尺度参照被裁掉或只靠夸张广角畸变制造大小差",
    enPrompt: "scale-contrast composition placing a small person vehicle or known-size object beside monumental architecture terrain or creature as a reference, with both in comparable depth sharing ground light and perspective while detail and atmosphere reinforce the large form's volume; keep the small subject recognizable, avoiding false scale from unrelated depth a giant pasted as background floating people cropped reference objects or size difference created only by extreme wide-angle distortion",
  },
  "camera-rack-focus": {
    zhPrompt: "焦点转移镜头设置前后两个有叙事关系的主体，并明确当前瞬间焦点落在其中之一，另一主体按距离和光圈产生连续自然虚化，构图与视线暗示焦点刚转入或即将转走，焦平面厚度符合镜头参数；单帧只能表现一个清晰阶段，避免前后主体同时锐利却声称转焦、虚化边缘像抠图、焦点落在空处或用径向模糊代替景深变化",
    enPrompt: "rack-focus shot staging two narratively related subjects at different depths and specifying which one is sharp at the current instant while the other falls into continuous optical blur according to distance and aperture, with framing and gaze implying focus has just shifted or will shift and focal-plane thickness matching lens settings; a still shows one focus phase, avoiding both subjects equally sharp cutout blur edges focus on empty space or radial blur substituting for depth transition",
  },
  "camera-85mm-portrait": {
    zhPrompt: "85mm 人像焦距采用适当后退机位获得轻度空间压缩和自然面部比例，头肩或半身主体与背景分离，鼻耳距离不过度夸张，浅景深由光圈、拍摄距离和背景距离共同形成，眼睛焦点准确；适合安静肖像而非自动磨皮，避免把数码裁切当长焦、背景完全消失、耳朵压平、双眼焦点不一或在狭小空间强行使用导致构图拥挤",
    enPrompt: "85mm portrait lens from an appropriately increased camera distance creating gentle spatial compression and natural facial proportion, separating a head-and-shoulders or half-length subject from background without exaggerating nose-to-ear distance and deriving shallow depth from aperture subject distance and background distance with accurate eye focus; suited to calm portraits without automatic smoothing, avoiding digital crop masquerading as telephoto a vanished background flattened ears mismatched eye focus or forced use in an impossibly tight room",
  },
  "camera-shoulder-level": {
    zhPrompt: "肩平视角将镜头高度放在主体肩线附近，可从人物身旁、背后或同行位置观察，使头部略高于镜头并保留身体与环境的跟随关系，地平线和垂直线仍符合真实机位；若出现前景肩部，应只作为有限遮挡并与主角距离可信，避免误成越肩对话镜头、无来源巨大肩膀、镜头歪斜、头部被切断或把低机位英雄感混入",
    enPrompt: "shoulder-level camera placing lens near the subject's shoulder line from beside behind or alongside movement so the head sits modestly above camera while body and environment retain a following relationship and horizon and verticals remain consistent with the position; if a foreground shoulder appears keep it limited and spatially credible, avoiding accidental over-the-shoulder dialogue framing a source-free giant shoulder camera roll a severed head or heroic low-angle exaggeration",
  },
  "camera-person-large-full-body": {
    zhPrompt: "大人物全身构图让单个角色从头顶到脚底完整可见并占据画面约六成至八成高度，头顶和脚下保留稳定安全边距，姿势、服装和表情仍清楚，少量环境只用于落脚、地点和光线说明；机位与焦距控制近端肢体比例，避免裁脚裁头、人物贴满四边、广角手脚膨胀、环境完全消失或把全身图误生成半身肖像",
    enPrompt: "large full-body person framing keeping one figure visible from head to feet at roughly sixty to eighty percent of image height with stable headroom and ground margin while pose clothing and expression remain readable and limited environment explains footing place and light; use camera distance and focal length to control near-limb proportion, avoiding cropped head or feet contact with all borders enlarged wide-angle hands and shoes no environmental context or conversion into a half portrait",
  },
  "camera-person-left-third": {
    zhPrompt: "人物左三分线位置把角色视觉中心放在左侧三分交点或竖线上，保留完整轮廓与落脚，人物视线、动作或身体朝向引导至右侧环境、对话对象或信息区，左右重量可由光线和景物平衡；人物大小由选定景别决定，避免机械贴线、朝左画外看、右侧无内容却空洞、脚部被裁或与左侧留白版式产生相反功能",
    enPrompt: "left-thirds person placement setting the figure's visual center near the left thirds intersection or vertical line with complete silhouette and footing while gaze action or torso leads toward environment partner or information space on the right and light and scenery balance weight; let shot scale determine figure size, avoiding mechanical line placement outward left gaze empty purposeless right space cropped feet or conflict with a layout intended to leave the left side empty",
  },
  "scene-dry-season-grassland": {
    zhPrompt: "旱季草原以金黄至灰褐的低矮草层、裸露土壤、季节性水源收缩和稀疏耐旱灌木表现，地平线开阔，远处空气因干燥与热量略有分层，动物或人物行动围绕剩余水源和路径；仍保留草原生态而非沙漠，避免满地绿色新草、无依据沙丘、每株草同高、天空灰尘过重或把旱季直接等同于灾难性荒芜",
    enPrompt: "dry-season grassland using low golden-to-gray-brown grasses exposed soil reduced seasonal water and sparse drought-tolerant shrubs beneath an open horizon, with distant air lightly stratified by dryness and heat and people or animals moving around remaining water and paths; retain grassland ecology rather than desert, avoiding lush new green growth unjustified dunes identical grass height excessive dust sky or equating a normal dry season with total ecological collapse",
  },
  "scene-greenhouse": {
    zhPrompt: "温室花房由透明玻璃或聚碳板屋面、承重框架、种植床、灌溉与通风系统构成，植物按高度、湿度和光照需求分区，凝结水珠、叶片透光和地面湿度回应真实微气候，通道保持可行走；阳光经结构形成有规律投影，避免热带植物随机塞满、玻璃无反射厚度、雾气遮死空间、藤蔓穿墙或把温室画成普通室内花店",
    enPrompt: "greenhouse built from transparent glass or polycarbonate roof structural framing beds irrigation and ventilation, with plants zoned by height humidity and light needs while condensation leaf transmission and damp flooring respond to a real microclimate and paths remain usable; sunlight casts patterned shadows through the structure, avoiding random tropical overcrowding thicknessless reflection-free glazing opaque fog vines through walls or an ordinary indoor flower shop",
  },
  "scene-library-archive": {
    zhPrompt: "图书档案馆以恒温恒湿的封闭书库、移动密集架、档案盒、目录工作台和受控阅读区构成，照明低紫外且均匀，纸张、标签位和储存容器呈现秩序但不生成可读隐私文字，工作人员操作符合取档与保护流程；区别于开放公共图书馆，避免华丽大厅取代储藏功能、阳光直晒档案、书架无限迷宫、盒子尺寸混乱或无防护饮食",
    enPrompt: "library archive organized around climate-controlled closed stacks compact shelving archival boxes catalog workstations and a supervised reading area, with even low-UV light and orderly paper label zones and storage containers without readable private text while staff follow retrieval and conservation procedures; distinguish it from an open public library, avoiding a grand hall replacing storage direct sun on records infinite maze shelves chaotic box sizes or food and drink near unprotected material",
  },
  "scene-red-rock-canyon": {
    zhPrompt: "红岩峡谷由层状砂岩或沉积岩、侵蚀形成的陡壁、冲沟与狭窄通道构成，岩层走向和裂隙在两侧保持地质连续，日光在壁面形成暖红高光与深色反射阴影，人物、植被或水迹提供尺度与气候线索；避免岩壁像塑料布景、每层等距条纹、通道无出口、随机巨石悬浮或将所有红岩峡谷复制成同一著名景点",
    enPrompt: "red-rock canyon formed by layered sandstone or sedimentary walls erosional gullies and narrow passages, with strata and fractures remaining geologically continuous across sides while sun creates warm red highlights and deep reflected shadow and people vegetation or water marks provide scale and climate clues; avoid plastic stage walls equally spaced stripe textures a passage with no outlet floating boulders or copying every canyon from one famous landmark",
  },
  "scene-hospital-corridor": {
    zhPrompt: "现代医院走廊具有清楚分区、易清洁墙地面、连续扶手、病房或诊室入口、导向节点和不阻塞的运输宽度，顶灯与窗光均匀控制眩光，医护、病床或访客只按实际流程出现，画面不暴露患者隐私；保持临床秩序但非恐怖空院，避免设备堵塞逃生通道、乱码标牌、血污猎奇、所有表面过曝纯白或门窗比例不符合建筑规范",
    enPrompt: "modern hospital corridor with clear zoning cleanable wall and floor surfaces continuous handrails room entrances navigation nodes and unobstructed transport width, using ceiling and window light to control glare while staff beds or visitors appear only according to workflow and patient privacy remains protected; keep clinical order without horror emptiness, avoiding equipment blocking egress gibberish signs sensational blood clipped-white surfaces or doors and windows at implausible scale",
  },
  "scene-school-campus": {
    zhPrompt: "校园庭院围绕教学楼、树荫、步道、操场或公共座椅形成真实日常动线，不同年龄学生的尺度、服装和活动符合具体学校类型，午后光线穿过树冠在地面形成自然斑驳，建筑入口和安全边界清楚；强调学习与社交生活而非广告摆拍，避免校徽校名乱码、所有学生同姿势、成人化造型、空旷豪宅校园或设施年代混乱",
    enPrompt: "school campus courtyard organized by classroom buildings shade trees paths play or sports areas and shared seating into believable daily circulation, with student age scale clothing and activity matching the school type and afternoon light filtering through foliage while entrances and safety boundaries remain clear; emphasize learning and social life rather than advertising poses, avoiding gibberish school marks cloned students adultized styling a luxury-estate campus or facilities from conflicting eras",
  },
  "scene-restaurant-open-kitchen": {
    zhPrompt: "餐厅开放厨房通过顾客区与烹饪区之间的玻璃、吧台或传菜口建立可见但卫生分隔，炉灶、备餐台、排烟、冷藏与洗涤按工作流程布置，厨师动作、蒸汽和暖色实用灯均有明确来源，地面保持防滑与通道畅通；避免顾客进入火线、油烟无排风、食材与清洁区混放、蒸汽遮满画面、品牌文字或把家庭厨房直接放大",
    enPrompt: "restaurant open kitchen using glazing counter or pass to create visible yet hygienic separation from diners, arranging ranges prep exhaust refrigeration and washing along a real workflow while chef action steam and warm practical light have clear sources and non-slip circulation stays open; avoid diners inside the hot line fumes without ventilation mixed food and cleaning zones steam obscuring everything brand text or a household kitchen simply enlarged",
  },
  "scene-rooftop-terrace": {
    zhPrompt: "屋顶露台以可承重铺装、安全护栏、户外座椅、遮阳或照明和少量盆栽组成面向城市天际线的休憩空间，屋面排水、门口和机电设施位置合理，高处风影响织物与人物但不把家具吹起；区别于以种植为主的屋顶花园，避免无护栏边缘、室内家具直接搬出、巨树无根基、露台跨越屋檐或天际线比例错误",
    enPrompt: "rooftop terrace formed by load-bearing paving safety rails outdoor seating shade or lighting and limited planters as a resting space facing the skyline, with plausible drainage access door and mechanical equipment and elevated wind affecting fabric and people without lifting furniture; distinguish it from a planting-led roof garden, avoiding unguarded edges indoor furniture simply moved outside unsupported giant trees a terrace extending beyond the roof or wrong skyline scale",
  },
  "scene-modern-classroom": {
    zhPrompt: "现代教室按教学方式布置可移动课桌椅、教师或展示区、白板或抽象屏幕、储物与自然采光，通道、视线和声学表面支持小组或面向前方学习，学生物品有日常使用痕迹但不杂乱；屏幕和板面不生成乱码文字，避免桌椅比例错误、所有人同姿势、投影无设备来源、豪华办公室化或不同年龄教学设施混用",
    enPrompt: "modern classroom arranged for its teaching method with movable desks and chairs instructor or presentation zone whiteboard or abstract screen storage and daylight, preserving circulation sightlines and acoustic surfaces for group or front-facing learning and everyday student traces without clutter; generate no gibberish on boards or screens, avoiding mis-scaled furniture cloned poses source-free projection a luxury-office look or facilities for conflicting age groups",
  },
  "scene-coral-reef-underwater": {
    zhPrompt: "珊瑚礁海底包含附着在岩基上的不同珊瑚形态、沙地与缝隙生态、按水深变化的蓝绿色光谱和从水面下射的柔和光束，鱼群尺度、方向与礁体通道相适应，悬浮颗粒随距离降低清晰度；表现活体生态而非装饰水族箱，避免珊瑚悬浮、所有鱼同向复制、阳光像舞台聚光、过饱和荧光或深海生物与浅礁无依据混居",
    enPrompt: "underwater coral reef containing varied coral forms attached to rock substrate plus sand and crevice habitats, blue-green spectral shift by depth and soft downwelling shafts from the surface while fish scale and direction fit reef channels and suspended particles reduce distance clarity; depict a living ecosystem rather than decorative aquarium, avoiding floating coral cloned fish source-free spotlights oversaturated fluorescence or unjustified mixing of deep-sea species with shallow reef life",
  },
  "scene-cloud-sea-summit": {
    zhPrompt: "云海山巅让低层云或雾填满山谷，较高峰脊、岩石与植被从云层上方穿出，近峰细节清楚、远峰受空气透视和云雾遮挡递减，日出或侧光沿云面与山脊形成方向一致的亮边，人物提供宏大尺度；云海受地形约束并有层次，避免棉花平铺、山峰悬浮、所有远峰同清晰、光源多向或把普通高空云层画在人物脚边无支撑",
    enPrompt: "mountain summit above a sea of clouds with low cloud or fog filling valleys while higher ridges rock and vegetation emerge above it, near peaks detailed and distant ones fading through atmosphere and occlusion as sunrise or side light creates consistent edges across cloud tops and ridges and a figure supplies scale; terrain controls layered cloud, avoiding flat cotton sheets floating mountains equal clarity at all distance multidirectional light or unsupported high clouds placed at a person's feet",
  },
  "scene-subway-platform-night": {
    zhPrompt: "夜间地铁站台由轨道、站台安全边缘、结构柱、候车区和连续人工照明建立纵深，末班车或进站列车可产生方向明确的反光与有限速度拖影，湿润鞋印或雨具说明外部天气但室内不应积水成镜；乘客分布符合候车动线，避免站在轨道上、乱码站名、列车穿柱、整站霓虹化、无来源浓雾或把地下站台画成露天街道",
    enPrompt: "night subway platform using tracks safety edge structural columns waiting zones and continuous artificial light to establish depth, with a late or arriving train producing directional reflection and limited speed blur and damp footprints or umbrellas referencing weather without mirror-deep indoor flooding; passenger distribution follows waiting flow, avoiding people on tracks gibberish station names trains through columns neon everywhere source-free heavy fog or an underground platform rendered as an open street",
  },
  "style-child-crayon": {
    zhPrompt: "儿童蜡笔手绘以粗短、压力不均的蜡质笔触和略微歪斜的轮廓概括主体，颜色允许越出边界、叠擦露出纸纹，并用高明度基础色表达直接童真；形体保持一眼可辨但不过分精确，背景只留少量太阳、云朵或地面线，避免成人商业插画式平滑描边、写实明暗、数字渐变、过密装饰或把稚拙误作脏乱涂鸦",
    enPrompt: "children's crayon drawing built from short broad waxy strokes with uneven pressure and slightly wandering outlines, simplifying the subject while keeping it immediately recognizable; allow color to cross contours, layered rubbing to reveal warm paper tooth, and bright primary or secondary colors to communicate direct childlike observation, with only a few supporting marks such as a sun cloud or ground line; preserve intentional naivety rather than polished illustration, avoiding smooth vector outlines realistic anatomy modeled shading digital gradients dense decoration random scribble or an adult commercial character style disguised with a crayon filter",
  },
  "style-oil-pastel": {
    zhPrompt: "油画棒媒介以厚实不透明的蜡质色层塑造形体，笔触随结构方向堆叠，局部通过刮刻、擦拭、断色和互补色叠压露出底纸，边缘在坚实块面与松散毛边之间变化；高光可由浅色覆盖，暗部保留混合色层而非发黑，强调手工温度与颜料体积，避免水彩透明晕染、油画湿润反光、喷枪式无痕渐变或全画面同一种颗粒滤镜",
    enPrompt: "oil-pastel image using dense opaque wax color to build volume, with strokes following the direction of each form and local scratching wiping broken color and complementary layering revealing the paper beneath; vary edges between firm blocked shapes and loose granular drag, let pale sticks cover darker passages for highlights, and keep shadows chromatically mixed rather than simply black, so the surface carries physical pigment depth and handmade warmth; avoid transparent watercolor blooms glossy wet oil-paint reflections airbrushed seamless gradients uniform digital grain or thin colored-pencil hatching that loses the substantial wax character",
  },
  "style-photo-abstract-editorial": {
    zhPrompt: "照片抽象社论风格先保留一处可识别的真实摄影主体，再从其轮廓、运动线或色彩关系提炼少量几何切片、负形和淡色块，在大面积留白中形成杂志式视觉节奏；摄影与抽象元素共享轴线、透视或颜色来源，文字区保持克制可选，纸面带轻微印刷颗粒，避免把整张照片滤镜化、随机堆几何、密集拼贴、无关装饰、商业促销版式或让抽象层遮掉主体身份",
    enPrompt: "photo-abstract editorial style retaining one clearly recognizable photographic subject and extracting only a few contours motion paths or color relationships into geometric slices negative spaces and restrained pale blocks across generous whitespace; photographic and abstract parts must share an axis perspective rhythm or sampled palette so the transformation feels reasoned rather than decorative, with optional small editorial typography and subtle print grain; avoid filtering the entire photo into illustration random geometry dense scrapbook collage unrelated symbols advertising layout excessive text or abstract layers that conceal the subject's identity and original spatial logic",
  },
  "style-fresh-whitespace-watercolor": {
    zhPrompt: "清新留白水彩以暖白冷压纸为底，用透明薄洗和少量湿画法概括主体色块，关键轮廓由干笔或负形留白控制，颜色在局部自然渗化但不铺满页面；主体集中在中部或偏下并保留充足呼吸空间，明度清亮、层次轻柔、纸纹可见，避免厚重不透明颜料、全幅背景、深黑描边、过度甜腻粉彩、数字柔焦或把留白误作缺失未完成",
    enPrompt: "fresh whitespace watercolor on warm cold-pressed paper, using transparent washes and limited wet-on-wet passages to summarize major color masses while dry-brush accents and reserved negative paper define essential contours; keep the painted subject concentrated around the center or lower area with generous breathing space, allow pigments to softly mingle only where form and atmosphere require it, and retain luminous values visible paper tooth and a few crisp focal details; avoid opaque gouache coverage a fully painted background heavy black outlines sugary pastel haze digital blur muddy repeated glazing or treating whitespace as an unfinished empty margin with no compositional purpose",
  },
  "style-cyanotype": {
    zhPrompt: "蓝晒印相以感光乳剂形成深浅不均的普鲁士蓝纸面，植物、织物或半透明物体因遮挡紫外光留下从纯白到浅蓝的接触影像，边缘清晰度随物体与纸面距离变化；保留刷涂边、药液浓淡、水洗痕和纸纤维，但主体结构仍可辨，避免普通照片简单套蓝色滤镜、黑色油墨线稿、蓝白反转错误、均匀数码噪点或添加不存在的多色颜料",
    enPrompt: "cyanotype print created through light-sensitive chemistry rather than a blue filter, with an uneven Prussian-blue coated field and botanical textile or translucent objects blocking ultraviolet exposure to leave contact silhouettes ranging from paper white to pale blue; edge sharpness should vary with object-to-paper distance while brushed emulsion borders wash marks concentration shifts and visible fibers reveal the handmade process, yet the chosen subject remains legible; avoid ordinary monochrome photography recolored blue black ink line art incorrect positive-negative logic uniform digital noise glossy photographic paper or added multicolor pigment that contradicts the historic process",
  },
  "style-tempera-painting": {
    zhPrompt: "蛋彩画以木板或细致石膏底为承载，用蛋黄结合颜料的细短笔触反复薄层叠加，形成干燥哑光、边缘精确且色彩清透的表面；人物、衣褶和装饰通过平行排线与微小色阶塑形，金色细节可用克制金箔表现，整体具有早期板画的静穆秩序，避免油画厚涂、湿润融合、现代喷绘渐变、塑料高光或把裂纹做成夸张老化滤镜",
    enPrompt: "egg-tempera painting on a prepared wood or fine gesso ground, building form through many thin layers of small controlled strokes bound in egg yolk to create a dry matte surface with precise edges and luminous color; model faces drapery and ornament through disciplined parallel hatching and minute value steps, with restrained gilded details when appropriate and the calm ordered presence of an early panel painting; avoid impasto oil texture wet blended transitions airbrushed modern gradients plastic highlights uncontrolled watercolor bleeding or exaggerated crackle applied as a generic antique filter across every surface",
  },
  "style-photogravure": {
    zhPrompt: "照相凹版以铜版蚀刻与油墨压印呈现连续而细腻的摄影灰阶，暗部浓厚如天鹅绒，亮部由纸白和稀薄墨层透出，颗粒细密且随明暗变化；边缘略带墨迹扩散和压版痕，适合安静肖像与景观，避免报纸半调网点、纯黑阈值木刻、现代喷墨锐化、均匀噪点或让所有中间调塌成同一灰色",
    enPrompt: "photogravure print translated through an etched copper plate and rich intaglio ink, preserving a continuous photographic tonal scale with velvety deep shadows, luminous paper-supported highlights and fine grain whose density changes with value; allow subtle ink spread at delicate edges and a restrained plate impression in the paper, especially suited to quiet portraiture and atmospheric landscape; avoid coarse newspaper halftone thresholded woodcut blacks modern inkjet sharpening uniform noise flat gray midtones glossy digital contrast or decorative scratches unrelated to the actual etched printing process",
  },
  "style-starryear-monet-stamp": {
    zhPrompt: "星年莫奈邮票风格把柔和花园、水面或季节天空概括为印象派碎笔触和相邻色闪烁，光色变化优先于精细线描；画面被克制地收纳进具有齿孔、窄边和轻微套印偏差的纸质邮票载体，色盘以雾蓝、叶绿、淡紫与暖光为主，避免复刻具体名作、生成可识别国家邮资文字、粗糙贴纸白边、现代矢量渐变或把邮票框压过核心景物",
    enPrompt: "Starryear Monet-inspired stamp aesthetic translating a soft garden water surface or seasonal sky into broken impressionistic strokes and vibrating adjacent colors, prioritizing changing light over precise contour; contain the scene within a restrained paper stamp object with believable perforations narrow margins slight registration drift and fine printed texture, favoring mist blue leaf green pale violet and warm reflected light without copying a specific historical painting; avoid readable national postage text oversized sticker borders modern vector gradients rigid line art photoreal detail or a decorative frame that overwhelms the landscape and turns the result into clip art",
  },
  "render-wireframe-overlay": {
    zhPrompt: "线框叠加渲染在同一物体上同时显示实体材质与准确拓扑，线框沿真实多边形边、曲面流线和结构转折排列，可通过局部剖开或渐变遮罩从成品过渡到网格；边线粗细、密度与透视随距离变化，背景保持简洁以便读形，避免随机三角纹理、线条穿透前表面、网格与轮廓错位、所有区域同密度或把普通霓虹轮廓误作三维线框",
    enPrompt: "wireframe-overlay rendering showing a finished material and its actual topology on the same object, with edges following polygon boundaries surface flow and structural turns and a local cutaway or controlled mask transitioning from solid shading into mesh; vary line weight density and perspective with distance, preserve occlusion so hidden edges do not indiscriminately pass through front surfaces, and keep the setting quiet enough to read form; avoid random triangular texture mesh detached from silhouette equal density everywhere neon outline masquerading as topology impossible intersections or a decorative grid pasted over unrelated background regions",
  },
  "render-photogrammetry-scan": {
    zhPrompt: "摄影测量扫描渲染表现真实物体由多角度照片重建为高密度彩色点云和三角网格的过程，扫描完整区保留可信纹理与几何，边缘和遮挡区出现有限缺口、噪点或稀疏采样；点云、网格和实体可分区过渡并严格贴合轮廓与尺度，避免随机粒子爆炸、完全光滑的程序模型、点位漂浮在物体外、纹理错投或把激光扫描绿色界面与摄影测量混为一谈",
    enPrompt: "photogrammetry-scan rendering depicting a real object reconstructed from overlapping photographs into a dense colored point cloud and triangulated mesh, with complete regions retaining believable texture and geometry while edges and occluded recesses show limited holes noise or sparse samples; transition spatially among point cloud wire mesh and textured solid while keeping all representations aligned to one silhouette scale and camera solution; avoid random particle explosions perfectly smooth procedural geometry points floating away from the surface smeared texture projection impossible topology or confusion with a generic green lidar interface unrelated to photographic reconstruction",
  },
  "render-ambient-occlusion": {
    zhPrompt: "环境光遮蔽渲染使用中性哑光材质和柔和环境光，在缝隙、接触点、内角、叠压和物体靠近处产生距离相关的渐进阴影，从而清楚说明形体装配与空间深度；开阔表面保持明亮干净，阴影不取代主光或投影，避免所有边缘统一黑线、凹槽发脏、悬空物体出现接触影、远距离仍强烈遮蔽或把普通高反差灰模误作 AO",
    enPrompt: "ambient-occlusion rendering with neutral matte materials and soft environmental illumination, producing distance-dependent gradual darkening inside creases contact points concave corners overlaps and closely facing surfaces so assembly and depth become easy to read; broad exposed planes remain clean and bright, while occlusion supplements rather than replaces directional light and cast shadows; avoid uniform black outlines around every edge dirty cavities floating objects with false contact patches strong occlusion across wide gaps crushed global contrast or an ordinary dramatic grayscale clay render mislabeled as physically meaningful AO",
  },
  "render-cinematic-texture": {
    zhPrompt: "电影级质感以真实材质响应、受控高光、可读暗部和统一色彩科学建立可信画面，皮肤、织物、金属、潮湿表面各自具有不同粗糙度与微细节，灯光服务叙事焦点并保留摄影机动态范围；适度加入镜头柔化与有机颗粒但不掩盖结构，避免全局锐化、塑料皮肤、黑位死黑、HDR 光晕、所有材质同亮或把青橙滤镜直接等同电影质感",
    enPrompt: "cinematic surface rendering grounded in believable material response controlled highlights readable shadow detail and consistent color science, giving skin fabric metal wood and wet surfaces distinct roughness scale and microstructure while lighting supports a narrative focal point within camera-like dynamic range; allow restrained optical softness and organic grain without erasing structural detail, and keep production polish subordinate to physical coherence; avoid global oversharpening plastic skin crushed blacks HDR halos identical shine on every material gratuitous anamorphic flare or assuming that an orange-and-teal filter alone creates cinematic texture",
  },
  "render-realistic-texture": {
    zhPrompt: "写实纹理按真实尺度分层表现宏观结构、中尺度磨损和微观表面：皮肤有毛孔与细纹，织物有纤维方向，木石有孔隙与断面，使用痕迹集中在接触和受力区域；粗糙度、反射与法线细节彼此一致并受光线正确揭示，避免全表面均匀刮痕、超锐微纹、重复贴图、污垢随机铺满、材质尺度错乱或把增加噪点当成真实感",
    enPrompt: "realistic texture organized by physical scale, from macro construction through medium wear to micro surface response: skin retains pores and fine lines, fabric follows fiber direction, wood and stone show appropriate pores and fractures, and use marks accumulate only at contact load and weather-exposed areas; roughness reflection color and normal detail agree with one another and become visible through plausible lighting rather than artificial sharpness; avoid uniformly scattered scratches oversharpened microtexture obvious tiling random dirt everywhere mismatched material scale identical roughness across substances or generic noise mistaken for realism",
  },
  "render-film-grain": {
    zhPrompt: "胶片颗粒模拟感光乳剂中随机但有机的银盐或染料云结构，暗部颗粒更明显、亮部更细，尺寸与画幅及感光度相符，并随颜色通道呈轻微差异；颗粒覆盖连续影调但不破坏眼睛、文字或关键边缘，可伴随克制高光溢出，避免均匀数字噪点、彩色椒盐、压缩方块、全局锐化后加砂或把灰尘划痕与胶片颗粒混为一谈",
    enPrompt: "film grain modeled as stochastic yet organic silver or dye-cloud structure within a photosensitive emulsion, more apparent in shadows and finer in highlights with size appropriate to format and sensitivity and slight variation across color layers; grain rides through continuous tone without destroying eyes typography or essential edges and may accompany restrained highlight halation, but it should remain integrated with exposure rather than applied as a surface screen; avoid uniform digital noise colored salt-and-pepper pixels compression blocks sand added after global sharpening repeated grain tiles or confusion between emulsion grain and dust scratches",
  },
  "effect-double-exposure": {
    zhPrompt: "双重曝光将两个有叙事关联的影像通过同一曝光逻辑叠合，主轮廓保持清楚，第二场景主要填入剪影内部并在亮部自然透出，二者的明暗、方向和尺度共同形成新的负形与视觉焦点；边缘允许少量溢出但不变成普通透明图层，避免整屏五五混合、五官重影、多个无关景物堆叠、主体轮廓丢失或仅用低透明度复制照片",
    enPrompt: "double-exposure effect combining two narratively related images through one coherent exposure logic, keeping the primary silhouette readable while the secondary landscape texture or architecture develops mainly inside it and naturally opens through bright regions; align value direction scale and negative space so both exposures create a new focal structure, allowing only limited spill beyond the contour rather than a generic transparent overlay; avoid fifty-fifty blending across the whole frame doubled facial features piles of unrelated scenes a lost silhouette repeated copies at low opacity muddy midtones or masks with hard cutout edges",
  },
  "effect-ink-diffusion": {
    zhPrompt: "墨迹扩散表现浓墨进入清水或湿纸后的真实流体过程：核心保持深色密度，边缘分裂为羽状细丝、卷曲涡流和半透明灰阶，扩散方向受重力、毛细作用或水流统一控制；墨迹可围绕主体形成节奏但不遮没焦点，避免烟雾云贴图、随机黑团、每条边同样模糊、无水介质仍悬浮扩散或把水彩彩色晕染误作单色墨液运动",
    enPrompt: "ink-diffusion effect following a believable fluid process as dense black pigment enters clear water or damp paper, preserving a dark core while edges divide into feathered filaments curling vortices and translucent gray layers governed consistently by gravity capillary action or current; diffusion may frame or reveal the subject but must not bury the focal structure, and the medium should determine whether motion is volumetric or planar; avoid stock smoke clouds random black blobs equally blurred edges unsupported floating ink colored watercolor blooms mislabeled as monochrome ink or symmetrical decorative tendrils that ignore real flow",
  },
  "effect-torn-paper-transition": {
    zhPrompt: "撕纸转场用一到两层真实纸张在画面中揭开另一场景，撕裂方向顺应主体轮廓或叙事动线，边缘可见纸纤维、厚度、卷曲和短小接触阴影，前后图像在空间上有明确层级；开口大小保留双方关键信息，避免规则矩形假撕边、贴纸白框、无限纸层、巨大阴影、纤维像毛发或仅给照片套一圈锯齿蒙版",
    enPrompt: "torn-paper transition using one or two physically believable paper layers to reveal another scene, with tear direction following subject contour or narrative movement and the edge showing fibers thickness slight curl and a short contact shadow that establishes front-to-back order; size and placement of the opening preserve essential information from both images and make the transition participate in composition; avoid a regular rectangular pseudo-tear sticker-like white border endless nested sheets oversized drop shadows hairlike fibers perfect mirrored rips or simply applying a jagged digital mask around an otherwise unchanged photograph",
  },
  "effect-chromatic-aberration": {
    zhPrompt: "色差边缘模拟镜头在高反差区域无法让不同波长完全同焦的轻微误差，红青或蓝黄色边只出现在画面外围、逆光边缘和少量反差轮廓，中心主体与面部仍然清楚，偏移量随离轴距离渐增；整体保持摄影可读性，避免所有物体三色描边、中心严重分离、故障艺术块状错位、霓虹光环或把普通颜色阴影误认为镜头色差",
    enPrompt: "chromatic-aberration effect simulating a lens that cannot focus every wavelength at exactly the same point, producing subtle red-cyan or blue-yellow fringes only near frame edges backlit boundaries and selected high-contrast contours while the central subject and face remain clean; displacement increases gradually with off-axis distance and follows the optical edge rather than painting arbitrary color outlines; avoid triple-color borders on every object severe separation in the center blocky glitch displacement neon aura duplicated geometry or ordinary colored shadows mislabeled as lens aberration",
  },
  "effect-heat-haze-distortion": {
    zhPrompt: "热浪空气扭曲由地面、发动机或火源上升的高温气流造成，远处道路、地平线和建筑边缘在局部产生连续细微折射波动，强度随离热源距离和空气层变化，前景热源及主体关键部位保持相对稳定；可伴随远景闪烁和轻度明度漂移，避免整张水波滤镜、垂直烟雾替代热扰动、物体融化变形、无热源区域同样扭曲或夸张成迷幻液化",
    enPrompt: "heat-haze distortion caused by rising hot air above sun-baked ground engines or flame, making distant road horizon and architectural edges locally shimmer through continuous small refractive waves whose strength changes with height distance and thermal layers while the immediate heat source and essential foreground subject remain comparatively stable; allow subtle mirage flicker and value displacement without altering object identity; avoid a full-frame water ripple vertical smoke substituted for refraction melting geometry equal distortion in cool regions source-free waves or exaggerated psychedelic liquefaction unrelated to atmospheric temperature",
  },
  "grading-wong-kar-wai": {
    zhPrompt: "港片霓虹情绪调色以潮湿夜景中的深绿、暗红和琥珀灯光建立分离色域，肤色偏暖但不过橙，阴影浓郁仍保留环境细节，霓虹在玻璃与路面形成有限反射；可加入推片颗粒、轻微拖影和不均匀曝光强化孤独亲密感，避免直接模仿具体电影镜头、全屏红绿滤镜、肤色发灰、黑位堵死或无光源霓虹泛滥",
    enPrompt: "Hong Kong neon mood grade separating humid night color into deep green environments muted red accents and amber practical light, keeping skin warm without turning orange and preserving environmental information inside rich shadows while signs reflect selectively in glass and wet pavement; pushed-film grain limited motion smear and slight exposure inconsistency may support a lonely intimate atmosphere without copying a specific film frame; avoid a global red-green filter gray or radioactive skin crushed blacks neon without physical sources excessive bloom or assuming every daytime scene should become a saturated nightclub",
  },
  "grading-y2k-flash": {
    zhPrompt: "Y2K 闪光直拍使用靠近镜头轴线的小型闪光灯直接照亮主体，形成快速亮度衰减、背景偏暗、墙面硬边投影和皮肤局部高光，整体保留早期消费级数码相机略冷白平衡、有限动态范围与轻微像素锐感；构图随性但主体清楚，避免影棚柔光、现代手机 HDR、整脸过曝、红眼泛滥、仿胶片重颗粒或把白色描边当作直闪效果",
    enPrompt: "Y2K direct-flash grade using a small near-axis camera flash to illuminate the subject with rapid falloff, a comparatively dark background, crisp wall shadow and local specular highlights on skin, combined with the slightly cool white balance limited dynamic range and modest pixel sharpness of an early consumer digital camera; framing may feel spontaneous while the person remains clearly exposed; avoid soft studio lighting modern phone HDR a completely clipped face excessive red-eye heavy analog film grain glamorous diffusion or a white cutout outline mistaken for direct flash",
  },
  "grading-ccd-digital": {
    zhPrompt: "CCD 数码复古调色模拟早期小型传感器相机的色彩与曝光特征：日光略偏青，高光较快进入纯白，暗部有细小彩色噪声，边缘带克制的数字锐化，直闪场景呈清楚硬影与暖肤色；保持真实照片结构而非低清破坏，避免统一蓝绿滤镜、过度 JPEG 马赛克、胶片漏光、夸张色差或把现代超清照片只降分辨率冒充 CCD",
    enPrompt: "CCD digital-retro grade recreating the color and exposure behavior of an early compact sensor camera: daylight leans slightly cyan, highlights reach clean white sooner, shadows carry fine chromatic noise, edges show restrained in-camera sharpening and direct-flash scenes combine crisp shadows with comparatively warm skin; preserve the photographic structure and recognizable detail instead of merely degrading resolution; avoid a global aqua filter severe JPEG blocks analog light leaks oversized film grain extreme chromatic splitting fake date stamps or a modern ultra-clean image simply blurred and labeled CCD",
  },
  "grading-mobile-hdr-clean": {
    zhPrompt: "手机 HDR 清晰调色通过多帧曝光逻辑恢复窗外、高光天空和室内暗部，同时保持主体面部自然对比与颜色，局部映射只作用于确有信息的区域，边缘和纹理适度清楚但不过锐；白平衡统一、天空不过饱和、阴影不发灰，避免每个物体都有光晕、云层戏剧化过度、皮肤塑料、暗部像白昼、微反差拉满或出现多帧合成鬼影",
    enPrompt: "clean mobile-HDR grade using a believable multi-exposure logic to recover bright windows sky and interior shadows while maintaining natural facial contrast and color, applying local tone mapping only where captured information exists and keeping edges and texture clear without brittle sharpening; white balance stays coherent, blue sky remains plausible and lifted shadows retain depth rather than gray haze; avoid halos around every object overdramatic clouds plastic skin night shadows turned into daylight maximum microcontrast duplicated moving subjects or the flat compressed look of indiscriminate automated HDR",
  },
  "grading-kodak-portra": {
    zhPrompt: "Portra 式人像负片调色以宽容高光、温暖而准确的肤色、柔和对比和细腻颗粒为核心，红橙色受控，绿色略显自然柔和，阴影可带轻微青灰但不污染皮肤；曝光偏亮时仍保留面部层次并呈奶油色高光，适合自然光肖像与生活记录，避免品牌包装文字、橙黄滤镜、黑位死黑、过度褪色、粗颗粒或让所有场景变成同一米黄色",
    enPrompt: "Portra-like portrait negative grade centered on forgiving highlights warm yet accurate skin soft contrast and fine organic grain, controlling red-orange saturation, rendering foliage in restrained natural green and allowing a slight cyan-gray bias in shadows without contaminating the face; a modestly bright exposure should retain facial transitions and produce creamy highlights suitable for daylight portraiture and everyday documentary work; avoid branded packaging or border text a blanket orange-yellow filter crushed blacks extreme fading coarse grain identical beige treatment across every scene or unrealistic skin whitening presented as film color",
  },
  "artist-keith-haring": {
    zhPrompt: "以公共壁画式粗黑连续线组织简化人形、动物与日常符号，轮廓厚度稳定，动作通过弯曲肢体、放射短线和重复节奏表达，红黄蓝绿等高纯度平涂色被黑线清楚分隔；构图可密集但负形仍可读，强调参与感与城市公共艺术能量，避免复制具体作品、加入签名或商标、把人物画成写实解剖、使用三维渐变、细碎纹理或无规律填满所有空隙",
    enPrompt: "public-mural graphic language built from bold continuous black contours that organize simplified people animals and everyday symbols, with stable line weight and movement communicated through bent limbs radiating action marks and repeated rhythm; use a small set of high-chroma flat red yellow blue or green areas clearly separated by black while keeping negative space readable even in a busy composition, creating participatory urban energy rather than polished branding; avoid copying a specific artwork adding signatures or trademarks realistic anatomy three-dimensional gradients fine surface texture random filler marks or confusing this vocabulary with generic emoji and clip-art icons",
  },
  "artist-gekiga": {
    zhPrompt: "剧画硬派漫画以较写实的人体比例、克制表情和沉重都市空间承载心理叙事，黑白墨线结合密集排线、机械网点与大片黑影，镜头在特写、斜角和狭窄环境间制造压迫；人物动作符合重量和时代生活细节，画面像严肃成人向连环叙事，避免可爱大眼、轻松少年漫画速度线、纯照片灰度、无意义血腥、网点覆盖五官或把每格都做成同一高反差海报",
    enPrompt: "gekiga-inspired hard-boiled sequential art using relatively realistic anatomy restrained expressions and weighty urban environments for psychological narrative, combining black ink contour dense hatching mechanical screentone and large controlled shadow masses; alternate close observation oblique framing and compressed interiors to create pressure, while gestures props clothing and architecture retain believable weight and period detail like serious adult graphic storytelling; avoid cute enlarged eyes cheerful youth-manga motion vocabulary plain grayscale photography gratuitous gore screentone obscuring faces identical poster contrast in every panel or melodrama unsupported by character action and environment",
  },
  "artist-japanese-nihonga": {
    zhPrompt: "日本画矿物色以和纸或绢本为底，使用岩绘具颗粒、胡粉白、墨线和克制金箔分层塑造花鸟、人物或自然景物；色面哑光而细腻，轮廓简洁，空间通过留白、屏风式分区和季节性节奏展开，矿物颗粒在侧光下微微闪烁，避免把它做成普通水彩、浮世绘木版、金色商业包装、油画厚涂、满屏樱花或混入不相关的东亚符号",
    enPrompt: "Nihonga mineral-pigment painting on washi or silk, layering granular iwa-enogu color shell-white gofun restrained ink contour and limited gold leaf to shape birds flowers figures or natural motifs; surfaces remain matte and finely particulate, outlines economical, and space unfolds through reserved ground folding-screen-like divisions and seasonal rhythm, with mineral grains catching side light subtly rather than glittering; avoid ordinary transparent watercolor ukiyo-e woodblock conventions commercial gold packaging oil impasto universal cherry-blossom decoration synthetic airbrush gradients or an indiscriminate mixture of unrelated East Asian symbols",
  },
  "artist-monet": {
    zhPrompt: "印象派户外光色以短小分离笔触记录同一景物在特定时刻的空气、反射和色温变化，阴影由蓝紫、绿灰等多种色层构成而非黑色，水面、雾气和树影在相邻色并置中颤动；形体从整体光色关系中显现，近看笔触独立、远看融合，避免复制具体名画、硬线勾边、摄影级细节、数码柔焦、全画面同一碎笔或把蓝紫滤镜当作印象派",
    enPrompt: "Impressionist plein-air light language using short separated strokes to record atmosphere reflections and temperature at one specific time of day, building shadows from mixed blue violet green and neutral color rather than black and allowing water mist foliage and architecture to vibrate through adjacent hues; forms emerge from the overall light relationship so strokes remain distinct nearby but optically unite at viewing distance; avoid copying a specific historical painting hard contour drawing photographic microdetail digital blur identical daubs across every surface a universal blue-violet filter or decorative water lilies inserted when the subject does not contain them",
  },
  "artist-mondrian": {
    zhPrompt: "新造型主义几何抽象以垂直和水平黑线划分不等比例矩形，大片白或浅灰留白与少量红、黄、蓝原色块形成动态平衡；线宽、色块面积和边缘张力经过控制，不使用斜线、透视和物体写实轮廓，视觉重点来自非对称秩序而非随机方格，避免复制具体画作、均匀棋盘格、三维阴影、圆形装饰、过多颜色或把任何网格界面都误标为该风格",
    enPrompt: "De Stijl neoplastic geometric abstraction dividing the field with vertical and horizontal black lines into unequal rectangles, balancing broad white or pale-gray negative space against a limited number of primary red yellow and blue blocks; control line weight area proportion and edge tension so asymmetry feels deliberate, deriving visual energy from relational order without diagonal perspective or representational contour; avoid reproducing a specific painting uniform checkerboards three-dimensional shadows circular decoration too many colors centered symmetry random UI grids or filling every compartment and thereby losing the essential breathing space",
  },
  "artist-pollock": {
    zhPrompt: "行动绘画以画布作为全幅连续场域，颜料由滴落、甩动、倾倒和细线轨迹形成多层线网，粗细、速度、方向与干湿状态可辨，局部交叠产生空间密度但没有传统中心主体；底层、中层和新鲜表层保留时间顺序与重力痕迹，避免复制具体作品、电脑随机粒子、均匀意面线、单层喷溅、对称构图、可识别人物轮廓或把普通泼墨等同于西方行动绘画",
    enPrompt: "action-painting language treating the canvas as a continuous all-over field, with pigment dripped flung poured and trailed into multiple interlocking networks whose thickness speed direction viscosity and wetness remain distinguishable; overlaps create changing spatial density without a conventional central subject, and lower middle and fresh upper layers retain a readable sequence of bodily movement gravity and drying; avoid copying a specific artwork computer-random particles uniform spaghetti lines a single splash layer symmetrical composition hidden figurative silhouettes spray-paint decoration or confusing every spontaneous ink splash with this physically layered paint process",
  },
  "artist-munch": {
    zhPrompt: "表现主义心理绘画通过波动的天空、弯曲地平线、拉长人物和压缩透视把主观焦虑投射到环境，颜色使用不自然但有情绪逻辑的红橙、病绿与深蓝，笔触和轮廓随心理压力起伏；人物仍保持可读姿态与叙事关系，重点是内在体验而非恐怖妆效，避免复刻具体名作姿势、无依据尖叫脸、随机扭曲所有物体、霓虹高饱和或把普通鱼眼畸变当作表现主义",
    enPrompt: "expressionist psychological painting projecting subjective anxiety into a wavering sky curved horizon elongated figure and compressed perspective, with emotionally coherent yet non-natural red-orange sickly green and deep blue color and contours that rise and fall with mental pressure; figures retain readable posture and narrative relationship so the environment carries inner experience rather than functioning as horror makeup; avoid reproducing an iconic pose arbitrary screaming faces distorting every object equally fluorescent saturation photographic fisheye warping generic dark fantasy or decorative swirls unsupported by the emotional structure",
  },
  "artist-bada-shanren": {
    zhPrompt: "八大山人式写意以极少墨线、枯湿并置和大片留白描绘鱼、鸟、荷、石等对象，形体简到近乎符号却保留骨法与生命感，鸟眼、鱼眼和倾斜姿态形成孤峭含蓄的情绪；题跋区域只保留抽象印章或空白，不生成伪文字，避免工笔填色、满纸山水、可爱卡通表情、均匀黑线、复制具体作品或用大面积灰雾取代有结构的留白",
    enPrompt: "Bada Shanren-inspired freehand ink language using very few strokes dry-wet contrast and expansive untouched paper to depict fish birds lotus rock or branches, simplifying forms almost to signs while retaining calligraphic bone and living tension; an upward glance tilted posture or isolated placement may carry austere restrained emotion, with seal or inscription zones kept abstract rather than producing false readable writing; avoid meticulous gongbi coloring a fully occupied landscape cute cartoon expressions uniform marker outlines copies of a known painting decorative gray fog replacing structured blank paper or arbitrary symbols detached from brush rhythm",
  },
  "artist-charley-harper": {
    zhPrompt: "几何自然插画把鸟兽、昆虫和植物拆解为圆、三角、弧线与整洁负形，在保留物种关键轮廓和行为特征的同时减少写实纹理；有限平涂色盘通过尺寸、重复和方向建立生态节奏，边缘锐利但不僵硬，画面兼具观察性与装饰秩序，避免复制具体插画、通用企业矢量、拟真毛发、复杂渐变、对称徽章化或将动物简化到失去物种识别度",
    enPrompt: "geometric natural-history illustration reducing birds mammals insects and plants into circles triangles arcs and carefully shaped negative space while retaining the decisive silhouette markings and behavior that identify each species; use a limited flat palette and organize ecological rhythm through scale repetition direction and overlap, keeping edges crisp but not mechanically sterile so observation and decorative order coexist; avoid copying a specific illustration generic corporate vectors photoreal fur complex gradients symmetrical badge layouts arbitrary cute faces or simplification so extreme that every animal becomes the same anonymous icon",
  },
  "artist-midcentury-editorial": {
    zhPrompt: "中世纪现代社论插画以剪纸般不规则平面形、少量墨线和两到五种专色概括人物、产品或社会议题，套印轻微偏移、纸张颗粒和干刷边缘保留印刷年代感；构图强调聪明隐喻、非对称留白与文字安全区，人物比例可简化但动作清楚，避免把“中世纪”误作欧洲古代、现代矢量无纹理、怀旧杂物堆砌、仿旧过脏或随机添加不可读标题",
    enPrompt: "mid-century modern editorial illustration using irregular cut-paper-like flat shapes a few economical ink lines and roughly two to five spot colors to summarize people products or social ideas, with slight registration drift paper grain and dry printed edges preserving period production character; composition relies on an intelligent visual metaphor asymmetric whitespace and a clear copy-safe zone, while simplified figures retain readable action; avoid confusing mid-century with medieval Europe textureless contemporary vectors piles of nostalgic props excessive dirty aging random illegible headlines corporate stock icons or a literal scene that leaves no editorial concept",
  },
  "artist-moebius-comic": {
    zhPrompt: "欧漫清线分镜使用均匀而灵活的细墨线描绘人物、建筑与奇异地貌，轮廓闭合清楚，内部细节丰富但按空间层级减弱；平涂色明亮克制，阴影少而准确，广阔环境与人物尺度共同建立清晰叙事动线，分镜可奇幻却保持透视可信，避免复制具体角色、日漫速度线、粗重美漫阴影、照片贴图、无层次密线或用赛博霓虹替代宁静科幻感",
    enPrompt: "European clear-line sequential-art language using even yet responsive fine ink contours for figures architecture and unfamiliar terrain, keeping silhouettes closed and readable while interior detail decreases by spatial depth; apply bright restrained flat color with sparse accurate shadows, and use broad environments plus human scale to establish a lucid narrative path even when the setting is surreal and speculative; avoid copying recognizable characters Japanese speed-line grammar heavy American-comic black masses photographic texture pasted into drawings undifferentiated dense linework cyber-neon substituted for atmosphere or impossible perspective hidden beneath ornament",
  },
  "artist-raphael": {
    zhPrompt: "文艺复兴古典和谐以稳定三角或弧形群像组织人物，视线、手势与身体转向构成清楚关系，解剖理想化但自然，衣褶和建筑透视服从统一空间；柔和明暗塑造圆润体积，红蓝、肤色与中性背景保持平衡，整体宁静庄重而不僵硬，避免复制具体圣像、现代时装混入、巴洛克式极端黑暗、蜡像皮肤、人物等距排队或加入不可读宗教文字",
    enPrompt: "High Renaissance classical harmony arranging figures through a stable triangular or gently arcing group, with gaze gesture and body orientation creating explicit relationships, anatomy idealized yet natural and drapery architecture and linear perspective belonging to one coherent space; soft modeling gives rounded volume while red blue flesh and neutral surroundings remain balanced, producing calm dignity without stiffness; avoid reproducing a specific devotional painting inserting modern fashion extreme Baroque darkness waxy skin evenly spaced figures disconnected expressions impossible hands or illegible sacred text used as decoration",
  },
  "ethnic-hezhe": {
    zhPrompt: "赫哲族鱼皮工艺条目聚焦传统鱼皮材料处理与江河生活视觉：鱼皮经刮治、鞣制和拼缝后保留细密鳞纹与半哑光纤维，衣饰或器物上的云水、鱼形和几何边饰沿接缝有序展开；配色取银灰、河蓝、桦木白与少量暖棕，并用船具或江岸环境说明材料来源，避免把单一工艺等同整个族群、混入海洋热带符号、塑料鱼鳞、奇装异服或伪文字图腾",
    enPrompt: "Hezhe fish-skin craft reference focused on the visual process and river culture of the material: scraped cured and stitched fish skin retains fine scale pattern and semi-matte fiber, while water fish and geometric border motifs follow garment or object seams in an orderly way; draw the palette from silver gray river blue birch white and limited warm brown, with restrained boat tools or riverside context explaining material origin; do not treat one craft as a complete representation of the people, and avoid tropical marine symbols plastic mermaid scales fantasy costume invented sacred glyphs random fur or unrelated motifs from other northern cultures",
  },
  "ethnic-gaoshan": {
    zhPrompt: "高山族海岛织纹条目以台湾原住民族群中具体社区的织造、串珠或几何服饰语言为参考，先注明地域与资料来源，再使用菱形、阶梯、人物或山海节奏形成经纬清楚的边带；色彩从黑白、红、蓝绿等有限组合中选择并保留纱线厚度，背景可提示山地与海风但不替代纹样研究，避免把多个族群混成一种“高山风”、复制祭仪服饰作日常装饰、泛热带羽毛、伪图腾或无依据的神秘化",
    enPrompt: "Gaoshan island textile reference should begin from a specified Indigenous community and documented weaving beadwork or geometric clothing vocabulary rather than collapsing distinct Taiwan peoples into one style; build clear warp-and-weft borders from diamonds steps human figures or mountain-sea rhythm, selecting a limited black white red blue or green palette with visible yarn thickness and using mountain or coastal context only as support; avoid mixing multiple communities into a generic exotic look copying ceremonial dress as casual decoration pan-tropical feathers invented totems pseudo-script mystical stereotyping or patterns whose structure ignores actual weaving constraints",
  },
  "craft-filigree-inlay": {
    zhPrompt: "花丝镶嵌以拉制均匀的金银细丝为骨架，通过掐、填、攒、焊形成卷草、云纹和几何镂空，再在可靠爪镶或包镶结构中嵌入宝石；丝线交点、焊点、厚度和受力均可解释，金属表面有细微手工痕迹与克制高光，避免把花丝画成印刷金线、宝石悬浮、纹样无支撑、所有区域同样密集、塑料黄金或将普通蕾丝纹直接贴在首饰表面",
    enPrompt: "Chinese filigree inlay constructed from evenly drawn gold or silver wires shaped coiled filled assembled and soldered into scroll cloud and geometric openwork, then set with stones using believable prongs or bezels; wire intersections solder points thickness and load paths should be physically understandable, with subtle hand-tool evidence and restrained metallic highlights revealing scale; avoid printed gold lines floating gems unsupported ornament equal density everywhere plastic yellow metal lace texture pasted onto a solid surface impossible zero-thickness wire or decorative complexity that would collapse if fabricated",
  },
  "craft-chinese-paper-cut": {
    zhPrompt: "中国剪纸工艺以一张或少量叠纸通过折剪、刻刀和连续镂空形成花鸟、人物或吉祥叙事，正负形互相支撑，细线必须与主体连接，刀口有轻微毛边而轮廓整体清楚；红纸可见纤维和折痕，投影只说明纸张厚度，不把平面剪纸变成立体场景，避免无支撑碎片、激光般完美边缘、普通矢量图加红色、复杂渐变、伪文字窗花或与波兰剪纸及动画纸偶混为一谈",
    enPrompt: "Chinese paper-cut craft made from one sheet or a small folded stack through scissor and knife cuts, forming birds flowers people or auspicious narrative through continuous openwork where positive and negative shapes structurally support one another and every fine bridge remains connected; red paper may show fiber fold memory and minute cut fuzz, with only a short shadow explaining thickness rather than turning the flat cut into a 3D scene; avoid unsupported floating fragments laser-perfect edges a generic vector recolored red gradients false written characters decorative window patterns with no structural logic or confusion with Polish layered cut paper and articulated animation puppets",
  },
  "craft-wheat-straw-painting": {
    zhPrompt: "麦秆画以经过选料、劈分、熨平和染色的真实麦秆薄片拼贴成主体，纤维方向随羽毛、衣褶、叶脉或建筑面转折，天然金黄至棕色光泽随观察角度变化；接缝、层叠和局部烙色建立细节但不遮住材料身份，底面保持平整，避免把麦秆画成木片马赛克、金属箔、均匀黄色滤镜、立体稻草束、纤维方向随机或加入无法切割的微小悬浮线",
    enPrompt: "wheat-straw painting assembled from real stalk material that has been selected split flattened pressed and selectively dyed, with fiber direction following feathers drapery leaf veins or architectural planes and natural gold-to-brown sheen shifting subtly with viewing angle; seams overlaps and limited scorching supply detail while preserving the identity of thin straw veneer on a flat support; avoid wooden mosaic metal foil a uniform yellow filter three-dimensional bundles of hay random fiber direction synthetic glitter or microscopic floating lines and unsupported fragments that could not be cut and adhered by hand",
  },
  "ethnic-pattern-dong-drum-tower": {
    zhPrompt: "侗锦鼓楼风雨桥纹样从鼓楼层檐、风雨桥廊架和织锦经纬中提取可重复的阶梯、菱形与木构剪影，先将建筑比例简化为边带单元，再以青蓝、黑白和少量暖红形成有节拍的连续纹；纹样应符合织造网格而非直接贴照片，建筑元素保持可辨但不过度写实，避免把真实鼓楼当背景插图、混入铜鼓太阳纹、伪文字、任意苗绣符号或将一种纹样代表全部侗族文化",
    enPrompt: "Dong brocade pattern derived specifically from the tiered eaves of drum towers the covered rhythm of wind-and-rain bridges and the warp-weft logic of weaving, simplifying architectural proportion into repeatable steps diamonds and timber silhouettes before arranging a measured blue black white and limited warm-red border; motifs should obey a textile grid rather than paste photographs into cloth, remaining identifiable without architectural realism; avoid using a full drum tower as background scenery mixing in bronze-drum sun emblems invented script unrelated Miao embroidery symbols or claiming one decorative band represents all Dong culture",
  },
  "ethnic-pattern-tibetan-cloud-jewel": {
    zhPrompt: "藏式云纹宝相花以卷云、莲瓣、宝珠和对称团花建立中心与边框层级，线条转折圆润连续，矿物红、石青、石绿与克制金线按内外圈分配，色面具有手绘或织绘质感而非数码渐变；图案可用于器物、墙面或织物时应匹配载体尺度，并注明装饰语境，避免随意拼接宗教符号、生成伪经文、把法器当普通装饰、霓虹宝石色或将所有藏地视觉归结为单一花纹",
    enPrompt: "Tibetan cloud-and-jewel floral ornament organizing curling clouds lotus petals wish-granting jewel forms and symmetrical medallions into a clear center-border hierarchy, with rounded continuous turns and mineral red azurite blue malachite green plus restrained gold assigned by concentric structure; surfaces should feel painted woven or carved according to the chosen support rather than digitally gradient-filled, and scale must fit an object wall or textile context; avoid arbitrary mixtures of sacred symbols pseudo-script decorative use of ritual implements neon gemstone color unrelated East Asian clouds or presenting one floral vocabulary as the totality of Tibetan visual culture",
  },
  "ethnic-pattern-hui-geometric-arabesque": {
    zhPrompt: "回族几何缠枝纹以连续几何网格、拱券比例和抽象植物卷草构成可无限延展但接点严谨的装饰面，蓝白、青绿或土红色块服从重复单元，线宽和旋转对称保持一致；若用于建筑、瓷砖或织物，应分别体现釉面、拼砖或纤维边界，避免伪造阿拉伯文字、随意加入人物神像、无闭合的几何结、不同网格硬拼、泛化为任意“伊斯兰风”或忽略中国本土建筑语境",
    enPrompt: "Hui geometric arabesque using continuous grids arch-derived proportion and abstract botanical scrolls to form an extensible ornamental field with exact junctions, consistent line weight and rotational symmetry, while blue-white turquoise or earth-red color stays subordinate to the repeat unit; when applied to architecture tile or textile, express glaze masonry joints or fiber boundaries accordingly and retain the Chinese regional building context; avoid fabricated Arabic writing figurative sacred imagery open broken knots incompatible grids forced together generic pan-Islamic styling with no local grounding or a decorative pattern that cannot repeat cleanly at its edges",
  },
  "ethnic-pattern-hani-terrace-line": {
    zhPrompt: "哈尼梯田线纹从山地水田随等高线弯曲的层层田埂、水面反光与引水关系中提炼连续曲线和阶梯边带，低饱和绿、泥褐、雾蓝与少量日落暖色按季节分配；纹样应保持水系由高到低的方向和织造可行性，可搭配有限山形轮廓，避免把卫星照片直接描边、随机同心波纹、所有梯田等宽、无水源逻辑、混入无关民族符号或将农业景观浪漫化为脱离劳动的纯装饰",
    enPrompt: "Hani terrace-line pattern abstracted from contour-following rice embankments reflected water and gravity-fed irrigation across mountain slopes, turning them into continuous curves and stepped borders with muted green soil brown mist blue and limited sunset warmth selected by season; preserve the high-to-low direction of water and the feasibility of weaving or printing the repeat, with only restrained mountain silhouettes as support; avoid tracing a satellite photo literally random concentric waves terraces of identical width no water-source logic unrelated ethnic emblems or romantic decoration that erases the agricultural structure and labor embedded in the landscape",
  },
  "craft-carved-lacquer": {
    zhPrompt: "雕漆以数十层朱红、黑或黄漆反复髹涂形成足够厚度，再从表层向下雕出圆润深浮雕、斜坡刀口和清楚层间色线；卷草、花卉或云纹沿器物曲率连续展开，凹处哑暗、凸处经打磨呈温润高光，边缘不露木胎，避免普通木雕涂红、塑料注塑纹、金属锐角、薄漆无法雕深、纹样穿透器壁或把大漆光泽做成镜面汽车漆",
    enPrompt: "carved lacquer built from dozens of repeatedly applied cinnabar red black or yellow lacquer layers thick enough to cut, revealing rounded high-relief forms sloped knife walls and fine color strata as carving descends; scroll foliage flower or cloud motifs follow the curvature of the vessel, recesses remain softly matte and raised areas gain a warm hand-polished sheen without exposing the wood core; avoid ordinary wood carving painted red injection-molded plastic texture sharp metallic edges impossibly deep cuts in a thin coating motifs piercing through the object or automotive mirror gloss replacing the dense mellow lacquer surface",
  },
  "craft-mother-of-pearl-inlay": {
    zhPrompt: "螺钿镶嵌在黑漆、深木或其他稳定胎体上嵌入按纹样切割的贝壳薄片，虹彩随角度在青绿、蓝紫和粉金之间变化，片与片之间保留极细拼缝并与底面齐平；花鸟、山水或几何纹由贝壳天然纹理共同构成，局部缺口与手工磨边克制可见，避免彩虹贴纸、整面珍珠光滤镜、厚壳悬浮、无缝塑料印刷、过度霓虹或把配色方案当作真实工艺结构",
    enPrompt: "mother-of-pearl inlay setting motif-cut shell veneer into black lacquer dark wood or another stable ground, with iridescence shifting by angle among green blue violet and soft pink-gold while hairline seams remain visible and the polished shell sits flush with its support; flowers birds landscapes or geometry should use the shell's natural growth pattern as part of the design, allowing restrained hand-ground edges and minute variation; avoid rainbow stickers a full-surface pearlescent filter thick shell floating above the object seamless plastic printing uniform neon glow or treating a black-and-iridescent color palette alone as evidence of actual inlay construction",
  },
  "craft-zisha-teapot": {
    zhPrompt: "紫砂陶艺以含砂颗粒的紫褐、朱泥或段泥手工拍打、围片和精修成型，壶身、流、把、盖与钮在比例、接合和出水功能上完整可信，表面哑光细腻并保留极轻工具痕；刻绘或贴花顺应器形且不过密，使用后的温润包浆集中于触摸区，避免普通陶瓷喷成棕色、镜面釉、壶嘴堵塞、盖口悬浮、对称穿模、伪造名家印款或把所有紫砂器都做成同一标准壶型",
    enPrompt: "zisha pottery formed from granular purple-brown zhuni or duanni clay through hand beating slab joining and careful trimming, with body spout handle lid and knob proportionally and functionally connected for believable pouring; the surface remains finely matte with minute tool evidence, restrained incising or applied ornament follows the vessel form, and gentle use patina concentrates where hands actually touch; avoid ordinary glazed ceramic recolored brown mirror finish a blocked spout floating lid impossible handle joints perfect plastic symmetry forged maker seals or reducing the entire craft to one generic teapot silhouette regardless of clay and intended use",
  },
  "artist-cezanne": {
    zhPrompt: "后印象派结构绘画以圆柱、球体和锥体般的体积关系组织静物、人物或山体，短而方向明确的笔触沿形面叠加，冷暖色交替塑造空间而不过分依赖明暗；桌面、果盘和建筑允许轻微多视点偏移，但整体重量和构图仍稳定，避免复制具体名画、硬性低多边形、摄影透视完全统一、物体悬浮、颜色平涂无笔触或把几何化误作立方体拼装",
    enPrompt: "post-impressionist structural painting organizing still life figures or landscape through volumes akin to cylinder sphere and cone, with short directional strokes accumulating along planes and warm-cool shifts constructing space without depending entirely on tonal modeling; tabletops vessels fruit and architecture may carry slight multi-view displacement while retaining weight balance and a stable overall composition, so observation and construction coexist; avoid copying a specific painting literal low-poly geometry perfectly unified photographic perspective floating objects textureless flat color cubist fragmentation or reducing every natural form to obvious assembled blocks",
  },
  "artist-malevich": {
    zhPrompt: "至上主义抽象以方形、矩形、圆、十字和窄条等基础几何在浅色平面上漂浮、旋转并形成张力，大小、倾角、间距和红黑白等有限色彩共同控制视觉重心；形体保持绝对简洁且无透视阴影，空白是构图的一部分，避免复制具体画作、均匀随机散点、三维图标、装饰纹样、渐变发光、可辨物体剪影或用大量小几何填满整个画布",
    enPrompt: "Suprematist abstraction using elementary squares rectangles circles crosses and narrow bars that float and rotate across a light plane, with scale angle interval and a restrained red black white or limited-color system controlling visual gravity and tension; forms remain radically simple without perspective or cast shadow, and open ground functions as an active compositional field rather than leftover space; avoid reproducing a specific artwork uniformly random confetti three-dimensional icons decorative pattern repeats gradients glow recognizable object silhouettes centered logo design or filling every area with tiny geometry until the spatial tension disappears",
  },
  "artist-rothko": {
    zhPrompt: "色域绘画以两到四个大尺度柔边色块悬浮在有复合色层的底色上，边缘由薄层罩染、擦拭和颜料渗透形成呼吸般过渡，色块内部明度与色温有微妙不均；画幅强调沉浸、静默和观看距离，不出现传统主体或硬性几何边，避免复制具体画作、数码线性渐变、霓虹发光矩形、墙纸纹理、过多颜色、清晰描边或把普通模糊背景当作色域绘画",
    enPrompt: "color-field painting built from roughly two to four monumental soft-edged zones suspended over a chromatically layered ground, with boundaries produced by thin glazing wiping and pigment penetration so they breathe rather than follow a digital blur; each field contains minute shifts of value temperature and density, and the overall scale invites quiet immersive viewing without a conventional subject or precise geometric edge; avoid copying a specific canvas linear software gradients neon glowing rectangles wallpaper texture many competing colors crisp outlines photographic scenery hidden beneath blur or a generic background swatch with no layered optical depth",
  },
  "artist-dali": {
    zhPrompt: "古典写实技术承载超现实梦境：清晰低地平线、深远荒漠或寂静建筑空间中，日常物体按梦的逻辑软化、拉长、错置或发生尺度矛盾，投影和材质仍以精确光线维持可信；象征物数量克制并围绕一个核心悖论，避免复制软钟等标志性作品元素、随机融化所有物体、堆满神秘符号、恐怖血腥、无透视拼贴或只用鱼眼畸变冒充超现实主义",
    enPrompt: "surreal dream construction rendered with controlled classical realism: beneath a clear low horizon or within a silent architectural space, familiar objects soften elongate relocate or contradict scale according to one dream logic while cast shadows material and directional light remain precisely credible; keep symbolic elements limited and organized around a central paradox so the impossible feels lucid rather than arbitrary; avoid copying iconic melting clocks or another recognizable composition melting every object at random piles of occult symbols gratuitous horror incoherent collage broken perspective or relying on fisheye distortion alone to claim surrealism",
  },
  "artist-magritte": {
    zhPrompt: "冷静超现实以普通室内、街道、天空和清晰日常物件构成一个逻辑悖论，例如比例、遮挡、昼夜或物体身份发生单一而准确的矛盾；绘画表面平静、光线中性、边缘清楚，构图像理性陈述，使不可思议来自概念而非奇幻特效，避免复制礼帽男子等具体母题、密集象征、烟雾魔法、任意漂浮、戏剧霓虹或用说明文字替代视觉悖论",
    enPrompt: "calm conceptual surrealism staging an ordinary interior street clear sky and familiar objects around one exact logical contradiction involving scale occlusion day-night relation or object identity; paint handling remains quiet, illumination neutral and edges legible, with a matter-of-fact composition that makes the impossible emerge from thought rather than fantasy spectacle; avoid copying recognizable bowler-hat figures or another famous motif dense symbolic clutter magic smoke arbitrary floating objects dramatic neon dream filters explanatory text replacing the visual paradox or multiple unrelated impossibilities competing in the same frame",
  },
  "artist-pan-tianshou": {
    zhPrompt: "强构成水墨以奇险取势，将山石、鹰鸟、花卉或枝干压在画面一角、边缘或对角线上，以方折硬朗的骨线、焦墨大块和枯笔飞白对抗大片留白；落墨讲究重心与气势，少量设色只强化结构，印章区域克制且不生成伪文字，避免柔媚小写意、平均铺满纸面、照片式山水、无支撑黑团、装饰金线或把所有中国画对象都做成同一构图",
    enPrompt: "forceful modern Chinese ink composition placing rock raptor flower or branch at a risky corner edge or diagonal, opposing angular bone-like contour dense dark ink masses and dry-brush flying white against expansive untouched paper; every heavy mark must carry visual weight and momentum, with limited color serving structure rather than decoration and seal or inscription zones kept abstract without false readable text; avoid delicate uniformly soft freehand painting evenly filling the sheet photographic landscape unsupported black blobs ornamental gold lines timid centered balance or forcing every subject into one repeated corner formula",
  },
  "artist-roy-lichtenstein": {
    zhPrompt: "漫画波普将单一戏剧瞬间压缩为粗黑轮廓、有限原色和平整阴影，肤色或中间调由规则本戴点表现，网点大小与印刷色版一致；人物表情、裁切和对话关系具有漫画分格张力，但默认不生成文字，轻微套印偏差可见，避免复制具体画格、照片直接加网点、渐变塑料高光、全画面同密度圆点、过多颜色或加入可识别商标和台词",
    enPrompt: "comic-pop image compressing one dramatic instant into thick black contour a restricted primary palette and flat shadow shapes, with skin or midtones described by regular Ben-Day dots whose scale and registration follow a coherent print plate; expression cropping and implied dialogue carry panel tension even when no text is generated, and slight color misregistration may reveal the mechanical process; avoid reproducing a known panel applying dots over an unchanged photograph glossy gradients identical dot density everywhere too many colors random speech balloons readable trademarks or confusing halftone texture with painterly stippling",
  },
  "artist-edmund-dulac": {
    zhPrompt: "黄金时代幻想插图以透明水彩薄层、精细铅墨轮廓和深蓝、孔雀绿、紫罗兰与金色构建夜色童话，人物服饰和植物装饰华丽却保持层次，画面像嵌入书页的完整叙事场景；柔和暗部中保留宝石般局部色彩，边框可克制出现，避免复制具体插图、泛化异域符号、现代动漫五官、数码霓虹、金色覆盖全部细节或让装饰压倒故事动作",
    enPrompt: "Golden Age fantasy illustration using transparent watercolor glazing fine pencil-and-ink contour and a deep sapphire peacock green violet and limited gold palette to build a nocturnal tale, with richly observed costume and botanical ornament organized in readable layers like a complete narrative plate set into a book page; jewel-like accents remain visible within soft darkness and a restrained border may support the scene; avoid copying a specific illustration generic exotic symbols modern anime facial design digital neon gold covering every detail decorative framing that overwhelms action or an empty costume display with no story relationship",
  },
  "artist-nc-wyeth": {
    zhPrompt: "经典冒险小说插画以清楚剪影、强烈日光和带重量的动作捕捉叙事高潮，人物身体、服装、船具或武器遵循真实受力，厚实油画笔触与宽阔色块快速建立海岸、荒野或历史环境；机位略低但不夸张，英雄感来自行动和尺度而非摆拍，避免复制具体书封、现代超级英雄姿势、无来源逆光、塑料服装、过度细碎背景或把冲突画成静态合影",
    enPrompt: "classic adventure-book illustration using a clear silhouette forceful sunlight and physically weighted action to capture a narrative climax, with bodies clothing rigging tools or weapons obeying real load and thick painterly strokes plus broad color masses rapidly establishing coast wilderness or historical setting; a modestly low viewpoint may add scale without distorting anatomy, and heroism should arise from consequential action rather than posing; avoid copying a known book cover modern superhero stances source-free rim light plastic costume excessive background trivia weightless props or turning conflict into a static group portrait",
  },
  "artist-saul-steinberg": {
    zhPrompt: "机智社论线画以少量敏捷墨线、符号化物件和大片纸面留白提出一个视觉概念，线条可在人物、文字形状、地图或建筑之间发生双关转换，但默认不生成可读长文；构图像思考草图，局部有轻微笔压、断线和克制色块，幽默来自关系而非卡通表情，避免复制具体作品、无意义涂鸦、复杂写实阴影、密集填满、公司图标或靠说明句解释笑点",
    enPrompt: "witty editorial line drawing using a small number of agile ink marks symbolic objects and expansive paper to articulate one visual idea, allowing a line to shift meaning among a figure letter-like form map or architecture without defaulting to readable long text; composition should feel like intelligent thinking on paper, retaining pen pressure broken marks and perhaps one restrained color block, with humor emerging from relationships rather than exaggerated faces; avoid copying a specific drawing meaningless doodle realistic modeled shadow dense filling corporate iconography random labels or explanatory sentences that state the joke instead of showing it",
  },
  "artist-aaron-douglas": {
    zhPrompt: "装饰现代主义壁画语言以层叠深色人物剪影、同心圆或放射光束、阶梯城市和音乐劳动场景组织历史叙事，人物姿态在侧面轮廓中保持节奏，色盘限于黑、棕、绿、紫或金黄的协调色阶；透明层叠形成时间与空间推进，避免复制具体壁画、把人物做成无身份图标、随意非洲纹样拼贴、三维光效、霓虹色或让射线遮断核心动作",
    enPrompt: "decorative modernist mural language organizing historical narrative through layered dark human silhouettes concentric discs or radiating beams stepped city forms and scenes of music labor or collective movement, with profile gestures carrying rhythm inside a limited black brown green violet or ochre tonal system; transparent overlaps should advance time and space rather than create generic glow, and each silhouette remains tied to an action; avoid copying a specific mural turning people into anonymous icons arbitrary pan-African pattern collage three-dimensional light effects neon color beams cutting through essential gestures or decorative spectacle detached from narrative context",
  },
  "artist-tove-jansson": {
    zhPrompt: "北欧童书气质以柔软而准确的墨线、少量排线和水彩灰蓝、苔绿、暖白描绘海岸、森林、岛屿与小型角色，环境细节具有自然观察，留白和天气共同制造安静、孤独又温柔的情绪；角色互动克制且有生活逻辑，避免复制具体角色造型、过分可爱大眼、糖果色、三维动画质感、密集装饰或把忧郁处理成阴森恐怖",
    enPrompt: "Nordic storybook atmosphere drawn with soft accurate ink contour sparse hatching and watercolor gray-blue moss green and warm paper, observing coast forest island weather and small figures with natural specificity while whitespace and climate create a mood that is quiet solitary yet kind; character interaction remains restrained and grounded in everyday logic, and the landscape carries as much narrative weight as the figures; avoid copying recognizable characters oversized cute eyes candy color glossy 3D animation dense decoration generic cottagecore or turning gentle melancholy into sinister horror and darkness",
  },
  "ethnic-oroqen": {
    zhPrompt: "鄂伦春桦皮森林条目聚焦寒地白桦材料、桦皮器具和具体生活环境：剥取后处理的桦树皮呈浅米色层片、深色皮孔与自然卷边，可通过刻划、缝接和压花形成几何或植物边饰；皮革、木构和针叶林只作为材料语境，色彩克制，避免把历史狩猎生活固定成当代族群唯一身份、随意添加羽毛头饰、混入其他北方民族纹样、奇幻兽皮或把桦皮画成普通木板",
    enPrompt: "Oroqen birch-bark forest reference focused on cold-region material culture and a specific lived environment: prepared bark shows pale layered sheets dark lenticel marks and natural curling edges, with scored stitched or embossed geometric and botanical borders on a believable vessel or object; leather timber and conifer forest provide material context in a restrained palette rather than costume spectacle; avoid freezing historic hunting life as the sole identity of contemporary people adding generic feather headdresses mixing motifs from unrelated northern cultures fantasy pelts invented sacred symbols or rendering flexible layered bark as ordinary solid lumber",
  },
  "ethnic-pattern-yi-sun-fire": {
    zhPrompt: "彝族太阳火纹以放射太阳、回旋火焰、三角和连续几何边带构成有中心层级的装饰系统，黑底承托红、黄与少量白色，纹样可根据漆器、刺绣或织物载体分别呈现光泽、针脚或经纬边界；节庆气质来自节奏与色彩而非堆火焰，避免伪造文字、混入无关图腾、所有表面同样高光、霓虹色、随机锯齿或将单一火纹概括为全部彝族文化",
    enPrompt: "Yi sun-and-fire ornament using a radiating solar center spiral flame forms triangles and continuous geometric borders in a clear hierarchy, with black supporting red yellow and limited white; adapt the same vocabulary to lacquer embroidery or weaving through appropriate gloss stitches or warp-weft boundaries rather than applying one flat texture everywhere, and derive festival energy from rhythm and color; avoid invented writing unrelated totems identical shine on every support fluorescent hues random zigzags literal flames covering the object or presenting one fire motif as a complete account of Yi culture",
  },
  "ethnic-pattern-bai-tie-dye-flower": {
    zhPrompt: "白族扎染团花以棉布或麻布折叠、扎结、缝缀和靛蓝浸染形成白色防染团花，中心与外圈因压力和染液渗透产生自然深浅、毛边和微小不对称；重复纹样保持手工节奏，布纹、扎结痕和多次浸染层次可见，避免电脑完美同心花、蓝色印刷油墨、硬边矢量、无纤维塑料布、随意渐变或混同蜡染龟裂与普通水彩晕染",
    enPrompt: "Bai tie-dye medallion made by folding binding stitching and indigo-dipping cotton or hemp so reserved white flower forms emerge with natural tonal rings feathered seepage and slight asymmetry determined by pressure; repeats retain handmade rhythm, with fabric weave knot marks and multiple immersion depth visible in the blue rather than a printed surface; avoid computer-perfect concentric flowers blue ink printing hard vector edges plastic cloth without fiber arbitrary gradients wax-resist crackle from batik watercolor blooms or identical motifs that ignore the variable mechanics of binding and dye penetration",
  },
  "ethnic-pattern-mongolian-cloud-knot": {
    zhPrompt: "蒙古云结毡毯纹将连续回纹、卷云和结饰安排在厚实羊毛毡或编织毯的中心与边框，蓝、红、金黄和自然羊毛色按对称轴与边带节奏分配；图形边缘略受纤维绒毛软化，针脚或毡化厚度可见，纹样适应帐幕、坐垫或鞍毯尺度，避免把金属云纹直接贴在毡面、过度宫廷化、伪文字、混入藏式法器、无缝数码重复或将草原文化简化成马匹剪影",
    enPrompt: "Mongolian cloud-knot felt-rug pattern arranging continuous meanders curling clouds and knot motifs between a central field and structured borders on thick wool felt or woven carpet, with blue red golden yellow and natural fleece distributed through symmetry and border rhythm; fiber nap gently softens edges while stitching or felt thickness remains visible, and motif scale suits a yurt furnishing cushion or saddle rug; avoid metallic palace clouds pasted onto wool excessive court styling pseudo-script Tibetan ritual objects seamless digital repeats generic horse silhouettes or treating one furnishing pattern as the whole of steppe culture",
  },
  "ethnic-pattern-yao-panwang": {
    zhPrompt: "瑶族盘王纹样应从具体支系、服饰部位和节庆语境出发，以经纬可实现的山形、菱形、人物或神话叙事符号组成密集但有边界的织带与刺绣区；彩线在深色布底上保持针法、方向和层次，银饰仅作结构性点缀，避免把不同瑶族支系图案混成一套、伪造神圣文字、随意堆人像、荧光杂色、现代印花替代手工针脚或将节庆服饰当作日常统一装束",
    enPrompt: "Yao Panwang-related ornament should begin from a specified subgroup garment location and festival context, organizing weaveable mountain diamonds figures or mythic narrative signs into dense yet bounded bands and embroidered zones; colored thread stays directionally and technically legible against dark cloth, with silver used only as a structural accent rather than generic sparkle; avoid merging distinct Yao subgroup vocabularies into one costume fabricated sacred writing random piles of human icons fluorescent color modern printed texture substituting for stitches or presenting ceremonial dress as a uniform everyday appearance",
  },
  "ethnic-pattern-qiang-floral-embroidery": {
    zhPrompt: "羌绣羊角花纹以黑、深蓝或素色布为底，用彩线针脚构成对称或连续的羊角曲线、山地花卉和几何边饰，线迹在转弯、填充和轮廓处使用不同密度，背衬与布纹仍可见；图案顺应围腰、袖口、鞋面或包袋结构，避免把曲线画成印刷卷草、针脚无方向、颜色无限堆叠、混入无关民族符号、伪文字或把所有羌绣都固定为同一黑底模板",
    enPrompt: "Qiang ram-horn floral embroidery on black deep-blue or undyed cloth, using colored thread to form symmetrical or continuous horn curves mountain flowers and geometric borders with distinct stitch density for turns fills and contour while backing weave remains visible; place motifs according to the construction of apron cuff shoe upper or bag so seams and wear make sense, and allow documented regional variation; avoid printed scrollwork masquerading as embroidery directionless thread unlimited colors unrelated ethnic emblems pseudo-writing plastic machine-perfect surfaces or reducing all Qiang embroidery to one identical black-ground template",
  },
  "craft-blue-calico": {
    zhPrompt: "蓝印花布通过镂版将石灰豆粉等防染浆刮在棉布上，干燥后反复靛蓝浸染，再洗除浆料显出白色花鸟、植物或几何纹；白纹边缘有细小浆裂、渗蓝和布纤维，蓝色深浅来自浸染次数，重复单元清楚但不机械完美，避免普通蓝白印刷、蜡染大龟裂、水彩晕染、瓷器釉面、无纤维矢量图或把所有白处做成纯净数码镂空",
    enPrompt: "blue calico produced by scraping a lime-soy resist paste through a cut stencil onto cotton, drying and repeatedly dipping it in indigo before washing the paste away to reveal white botanical bird or geometric motifs; reserved edges retain tiny paste cracks blue seepage and cloth fiber, indigo depth reflects repeated immersion and the repeat remains orderly without mechanical perfection; avoid ordinary blue-and-white printing large batik wax crackle watercolor bleeding ceramic glaze textureless vectors pristine digital cutouts or a generic navy pattern with no evidence of stencil and resist process",
  },
  "craft-shadow-puppet-leather": {
    zhPrompt: "皮影镂刻以刮薄、鞣制的半透明兽皮分件雕刻人物，刀口形成连续镂空和细密纹样，矿物或透明染料在背光下呈清亮叠色，关节由线或铆钉连接并允许真实转动；侧面人物轮廓、服饰与戏曲身份清楚，幕布投影与实体皮影方向一致，避免普通纸剪影、三维塑料人偶、关节穿模、正面写实五官、无来源霓虹或把所有区域刻到失去结构支撑",
    enPrompt: "Chinese shadow-puppet craft cut from thinned cured translucent hide in articulated figure segments, with continuous knife-cut openwork and fine pattern, mineral or transparent dye glowing under backlight and joints connected by thread or rivets that permit real movement; profile silhouette costume and theatrical role remain readable while the projected shadow agrees with the physical puppet and lamp direction; avoid ordinary paper silhouettes glossy 3D plastic figures impossible intersecting joints frontal photoreal faces source-free neon excessive carving that removes structural bridges or a shadow cast in a direction inconsistent with the puppet",
  },
  "craft-huishan-clay-figurine": {
    zhPrompt: "惠山泥人以细腻黏土塑成圆润紧凑的人物或儿童造型，体块饱满、重心稳定，衣褶和手势简练；干燥底胎上施白地与红、绿、金等民间彩绘，笔触沿面部和衣饰结构，局部保留手捏与模制痕，表情温和而不过分卡通，避免塑料潮玩高光、瓷器薄胎、身体比例极端、颜色喷涂无笔迹、复制具体名作或混同凤翔泥塑的强烈兽纹造型",
    enPrompt: "Huishan clay figurine formed from fine local clay into rounded compact people or children with full volumes stable balance economical folds and clear gestures, then coated after drying with a pale ground and hand-painted folk red green gold and related colors that follow face and costume structure; retain modest pinching molding and brush evidence, with a gentle expression that does not become a glossy mascot; avoid plastic collectible shine thin porcelain body extreme caricature airbrushed color without strokes copies of a known figurine or confusion with the stronger beast motifs and graphic contrast of Fengxiang clay sculpture",
  },
  "craft-fengxiang-clay-sculpture": {
    zhPrompt: "凤翔泥塑以厚实体块和夸张但稳定的虎、兽、人物造型承载民间彩绘，白底上用黑线分区，再填入红、绿、黄等高对比色和花叶、旋涡、护佑纹样；表面保留粗陶颗粒、模印接缝和手绘偏差，气质粗朴有力量，避免惠山泥人式温软人物、塑料玩具光泽、写实动物皮毛、无限细纹、荧光混色或将图案画到看不出泥塑结构",
    enPrompt: "Fengxiang clay sculpture using thick stable masses and exaggerated tiger beast or human forms as the support for folk painting, dividing a white ground with black contour before filling strong red green yellow and protective floral or spiral motifs; retain coarse clay grain mold seams and small hand-painted variation so the object feels robust and vernacular; avoid the softer gentle figure language of Huishan clay figurines glossy plastic toys photoreal fur endless micro-pattern fluorescent color anatomical distortion that loses balance or ornament so dense that the underlying clay volume can no longer be read",
  },
  "craft-silver-chasing": {
    zhPrompt: "银饰錾刻以银片经锤揲起伏成型，再用不同錾子从正反面敲出点、线、鱼子地和高低浮雕，花鸟、涡纹或几何边饰顺应项圈、冠饰和挂件曲面；锤痕、氧化暗部和抛光凸面共同显示层次，连接件与重量可信，避免将纹样印成黑线、铸造塑料感、所有凹槽同黑、薄片无支撑、悬浮铃片、过度镜面或把不同民族银饰结构混为一套",
    enPrompt: "silver chasing and repousse beginning with sheet metal raised by hammering and worked from front and back with varied punches to create dots lines ring-matted ground and graduated relief, letting floral bird spiral or geometric borders follow the curvature of a collar headdress or pendant; hammer evidence dark oxidation in recesses and polished highlights on raised areas build depth, while connectors and weight remain believable; avoid printed black lines cast-plastic texture equally black grooves unsupported foil floating bells excessive mirror finish impossible thin relief or combining distinct regional and ethnic silver structures into one invented object",
  },
  "craft-lacquer-thread-sculpture": {
    zhPrompt: "漆线雕以漆料、砖粉等调成可塑细线，搓制后逐段盘、绕、堆、贴在坚实胎体上，形成有连续起伏的龙凤、卷草或吉祥浮雕，线条交接、转角和层高符合真实黏附与承重；金色表层只覆盖凸起漆线，红黑底仍可见，避免把它画成金属花丝、普通金漆描边、无限细线悬浮、注塑浮雕、无底胎结构或让金色镜面遮掉手工盘线层次",
    enPrompt: "lacquer-thread sculpture made by mixing lacquer and mineral filler into pliable cords, rolling them to controlled thickness and coiling looping stacking and adhering each segment onto a firm body to create continuous relief dragons phoenixes scrolls or auspicious ornament; junctions turns height and load must reflect real adhesion, with gold applied primarily to raised cord while red or black ground remains visible; avoid confusing it with metal filigree ordinary painted gold outlines infinitely thin floating lines injection-molded relief unsupported openwork or mirror gold that erases the tactile sequence of hand-laid lacquer cords",
  },
  "palette-morandi-blue": {
    zhPrompt: "莫兰迪雾蓝配色以雾蓝和岩板灰承担约七成背景与大面积结构，燕麦色和柔白用于受光面与留白，低饱和赭黄只占约一成作为温暖焦点；整体明度中高、彩度克制，蓝灰阴影与暖中性色保持冷暖平衡，适合现代室内、静物和编辑视觉，避免五色等量铺满、纯正亮蓝、灰雾吞没层次、赭黄过量或把人物肤色染成蓝灰",
    enPrompt: "Morandi mist-blue palette assigning roughly seventy percent of the field to hazy blue and stone-slab gray for background and major structure, using oatmeal and soft white on lit planes and whitespace, and reserving muted ochre for about ten percent as a warm focal accent; keep value moderately high and saturation restrained, balancing cool blue-gray shadows with warm neutrals for interiors still life and editorial design; avoid equal use of all swatches pure vivid blue gray haze that collapses depth excessive ochre blue-gray skin contamination fluorescent accents or a flat overlay that ignores material and illumination",
  },
  "palette-morandi-lavender": {
    zhPrompt: "莫兰迪雾紫以灰紫和暖灰作为约六成主色，奶油白提供三成明亮空间，褪灰绿与烟梅色只在植物、织物边缘或视觉焦点小面积出现；色相彼此掺灰但仍能分辨，阴影偏暖灰而不发脏，适合静物、女性时装与安静品牌视觉，避免糖果紫、粉色滤镜、所有物体同灰度、烟梅过重、绿紫互相污染或低对比到主体与背景无法分离",
    enPrompt: "Morandi mist-lavender palette using gray violet and warm gray for around sixty percent of the main field, creamy white for roughly thirty percent of luminous breathing space, and faded green plus smoky plum only as small accents on foliage textile edges or focal objects; every hue is softened with gray yet remains distinguishable, with warm-neutral shadows preventing a dirty cast and supporting still life fashion or quiet branding; avoid candy purple global pink filters identical gray value on every object dominant plum green-violet contamination muddy shadows or contrast so low that subject and background merge",
  },
  "palette-nordic-neutral": {
    zhPrompt: "北欧中性配色让燕麦白、暖灰和石灰色覆盖墙面、天空或大面积留白，浅木色承担家具与触感中层，柔黑仅用于框架、文字或少量轮廓建立秩序；明度整体偏高但保留木纹、织物和石材差异，冷暖中性互相校正，适合室内、产品与生活方式摄影，避免全白过曝、米黄单色化、黑色面积过大、木色发橙或用高饱和装饰破坏安静结构",
    enPrompt: "Nordic neutral palette covering walls sky or broad whitespace with oat white warm gray and lime-stone tones, assigning pale natural wood to tactile middle layers and reserving soft black for frames typography or limited contour that establishes order; keep the scene high-key while preserving differences among wood textile plaster and stone, with cool and warm neutrals correcting one another for interiors products and lifestyle imagery; avoid clipped all-white exposure monochrome beige treatment excessive black orange wood synthetic saturated decor or smooth surfaces that erase the material variation essential to the restrained palette",
  },
  "palette-morandi-terracotta": {
    zhPrompt: "莫兰迪陶土配色以灰陶土和沙色构成约六成温暖主体，橄榄绿承担三成自然平衡，烟灰与浅粉只在阴影、织物或小物件中点到为止；陶土色应偏灰红而非亮橙，材质保持粉质、陶器与亚麻般柔和，适合室内和静物，避免全画面棕橙、橄榄绿发荧光、浅粉甜腻、阴影死黑、颜色平均分配或将所有材质染成同一种土色",
    enPrompt: "Morandi terracotta palette using gray-red clay and sand for roughly sixty percent of the warm foundation, olive green for about thirty percent of natural counterbalance, and smoke gray plus pale blush only in shadows textile or small objects; terracotta should remain dusty and mineral rather than bright orange, with powdery pottery and linen-like surfaces suited to interiors and still life; avoid an all-brown-orange frame fluorescent olive sugary pink crushed black shadows equal distribution of every swatch or tinting wood skin fabric and ceramic into one indistinguishable earthen color",
  },
  "palette-morandi-olive": {
    zhPrompt: "莫兰迪橄榄灰以灰橄榄和腻子灰占据约七成环境与主体基色，燕麦白用于受光和留白，烟灰加深结构，褪珊瑚仅占少量作为面部、花卉或标签焦点；绿调保持偏黄灰而不军事化，暗部有层次，适合成熟品牌、时装和安静空间，避免军绿色铺满、珊瑚色过亮、灰色发脏、人物面部泛绿、五色同面积或缺乏明度差导致画面扁平",
    enPrompt: "Morandi olive-gray palette placing gray olive and putty gray across roughly seventy percent of environment and base forms, using oat white for light and negative space, smoke gray to articulate structure and faded coral only as a limited focus on faces flowers or labels; keep olive yellowed and muted without turning militaristic, and maintain layered dark values for mature branding fashion and quiet interiors; avoid blanket army green vivid coral dirty neutral haze green-contaminated skin equal swatch area or insufficient value separation that flattens every material into one dull surface",
  },
  "palette-citrus-summer": {
    zhPrompt: "柑橘夏日配色以明亮暖白或天空蓝提供约六成清爽背景，橘子橙和柠檬黄集中在水果、标题或关键产品，珊瑚与叶绿作为次级节奏，总高饱和面积控制在三成以内；光线清透、阴影保持中性，让色彩像日晒而非荧光，适合食品、饮品和夏季活动视觉，避免五色满屏竞争、黄绿污染肤色、橙色过曝、糖果渐变、黑色重阴影或缺少大面积呼吸空间",
    enPrompt: "citrus-summer palette using bright warm white or open sky blue for roughly sixty percent of a fresh background, concentrating orange and lemon yellow on fruit headline or key product while coral and leaf green create secondary rhythm and total high-chroma area remains below about one third; light should feel sunlit and transparent with neutral shadows so the hues read as natural citrus rather than fluorescent ink, suitable for food beverage and seasonal event imagery; avoid all five colors competing everywhere yellow-green skin spill clipped orange candy gradients heavy black shadow or the absence of a broad quiet field",
  },
  "palette-morandi-rose": {
    zhPrompt: "莫兰迪粉绿配色以鼠尾草绿、暖灰和奶油白构成约八成安静基底，灰粉用于主体柔和转折，雾蓝只在阴影或远景少量降温；粉与绿都掺入中性灰，肤色保持自然，织物和纸张呈哑光，适合家居、婚礼和生活方式视觉，避免粉绿各占一半造成甜腻、薄荷荧光、全局柔焦、肤色灰白、蓝影过重或把所有物体做成同一粉彩明度",
    enPrompt: "Morandi rose-and-sage palette building roughly eighty percent of the calm foundation from sage green warm gray and cream, using dusty rose for gentle subject transitions and mist blue only as a cooling note in shadow or distance; both pink and green are neutralized with gray while skin remains believable and textile or paper stays matte, suitable for home wedding and lifestyle imagery; avoid equal pink-green candy distribution fluorescent mint global soft focus ashen skin dominant blue shadow or giving every object the same pale pastel value and therefore losing focal hierarchy",
  },
  "palette-mediterranean-coast": {
    zhPrompt: "地中海海岸配色以石灰白占据墙面和日照留白，蔚蓝用于天空、水体与门窗形成约三成清凉结构，陶土橙和橄榄绿分布在屋瓦、土壤与植物，日光黄只作极小高光；色彩应由强烈自然光和材质反射产生，阴影偏清凉，适合建筑与旅行视觉，避免蓝橙滤镜、所有房屋纯白过曝、黄绿色过饱和、随意摩洛哥纹样、海水与天空无明度差或城市被涂成主题乐园",
    enPrompt: "Mediterranean coastal palette giving lime white the broad walls and sunlit negative space, using clear azure for sky water doors and shutters as roughly a third of the cool structure, placing terracotta orange and olive green on roofs soil and vegetation and reserving sunlight yellow for tiny highlights; color should arise from strong natural light and material reflection with cooler shadows, supporting architecture and travel imagery; avoid a generic blue-orange filter clipped white buildings oversaturated yellow-green arbitrary Moroccan pattern water and sky at the same value or repainting a real town like a synthetic theme park",
  },
  "palette-morandi-apricot": {
    zhPrompt: "莫兰迪杏桃以灰杏和奶油白承担约六成暖亮背景，藕紫米和鼠尾草灰构成柔和中层，烟蓝只在阴影、玻璃或远景少量出现；杏色接近被日光漂淡的果肉而非橙粉荧光，冷暖在低饱和范围内平衡，适合人像、包装和室内，避免全局杏色滤镜、紫米发脏、烟蓝污染肤色、粉甜儿童感、缺少深色锚点或每种颜色都平均分配",
    enPrompt: "Morandi apricot palette assigning dusty apricot and cream to roughly sixty percent of a warm luminous ground, using muted mauve-beige and sage gray for the middle layer and reserving smoke blue for limited shadow glass or distance; apricot should resemble fruit flesh faded by daylight rather than fluorescent orange-pink, with warm and cool notes balanced at low saturation for portrait packaging or interiors; avoid a global apricot filter muddy mauve blue-contaminated skin sugary juvenile styling no dark anchor or equal allocation of every swatch regardless of subject hierarchy",
  },
  "palette-morandi-sea-salt": {
    zhPrompt: "莫兰迪海盐配色让雾白、贝壳灰和沙米色覆盖约七成纸面、墙面与光照区域，灰水绿承担海岸或主体中层，褪珊瑚只在小物、花卉或人物局部提供温度；整体轻盈但用明度差分开水、天空、砂石和织物，材质保持粉雾哑光，避免全画面苍白、薄荷绿发亮、珊瑚色抢焦、海天融成一片、无深色结构或套用廉价海滩滤镜",
    enPrompt: "Morandi sea-salt palette covering roughly seventy percent of paper walls and lit areas with mist white shell gray and sandy beige, using gray water-green for coastal or subject midtones and faded coral only as a small source of warmth on an object flower or figure; keep the image airy while value differences still separate water sky sand stone and textile, with powdery matte surfaces rather than glossy resort color; avoid an entirely washed-out frame luminous mint dominant coral merged sea and sky no darker structural anchor or a cheap beach filter applied regardless of material and weather",
  },
  "palette-alpine-lake": {
    zhPrompt: "高山湖泊配色以深湖蓝和花岗岩灰构成山体、阴影与约六成空间，冰川松石集中在受光水面，雪白用于峰顶和高光，高山林绿沿岸少量压住冷色；颜色随水深、空气透视和高度自然变化，整体清澈冷冽但不荧光，适合自然风景和户外品牌，避免整湖统一青色、雪面过曝、树林发黑、松石覆盖天空、五色等量或把高海拔空气做成强 HDR",
    enPrompt: "alpine-lake palette using deep lake blue and granite gray for mountain shadow and roughly sixty percent of spatial structure, concentrating glacial turquoise in sunlit water, reserving snow white for peaks and highlights and placing limited alpine forest green along the shore to anchor the cool field; colors should vary naturally with depth elevation and atmospheric distance, remaining crystalline and cold without fluorescence for landscape or outdoor branding; avoid one uniform cyan lake clipped snow black forest turquoise sky equal swatch usage or aggressive HDR that destroys the soft high-altitude air",
  },
  "palette-moroccan-tile": {
    zhPrompt: "摩洛哥花砖配色以象牙白或浅灰作为约五成底色，钴蓝和松石绿建立重复几何主纹，陶土色只在边框或节点注入温度，黄铜用于极少缝线和器物高光；颜色受釉面、手绘边界和烧制差异影响而略有变化，适合瓷砖与装饰设计，避免把五色平均填格、霓虹蓝绿、无限复杂图案、金色大面积覆盖、无缝电脑复制或将任意阿拉伯纹样混为一谈",
    enPrompt: "Moroccan tile palette using ivory or pale gray for about half of the ground, cobalt blue and turquoise to establish the repeating geometric motif, terracotta only at borders or junctions for warmth and brass in very limited grout-adjacent or object highlights; let glaze hand-painted edges and firing variation produce slight color irregularity suitable for zellige and decorative design; avoid filling every cell equally fluorescent blue-green endlessly complex geometry broad metallic gold seamless computer repetition or treating every Arabesque tradition as one interchangeable pattern without regional and material context",
  },
  "palette-baltic-winter": {
    zhPrompt: "波罗的海冬日配色以冰蓝、羊毛灰和雾白占据天空、积雪与室内基底，松林灰绿提供中深层次，浅木色温暖家具或建筑，浆果红严格控制在手套、门窗或小型焦点；整体冷中有暖、明度柔和，适合冬季生活方式与旅行画面，避免纯蓝滤镜、雪地死白、松绿发黑、红色面积过大形成节庆广告、木色橙黄或所有材质被统一降饱和到无差别",
    enPrompt: "Baltic winter palette using ice blue wool gray and fog white across sky snow and interior foundations, setting pine gray-green as the middle-dark layer, warming furniture or architecture with pale wood and strictly reserving berry red for gloves a door or another small focal cue; maintain gentle value and a cool field containing measured warmth for winter lifestyle or travel imagery; avoid a blanket blue filter blank clipped snow near-black pine excessive red turning the scene into holiday advertising orange wood or indiscriminate desaturation that makes wool ice timber skin and stone visually identical",
  },
  "palette-mexican-folk": {
    zhPrompt: "墨西哥民俗配色以奶油白、土墙色或深色背景保留约五成承载空间，万寿菊黄与仙人掌绿建立主要节奏，热粉和钴蓝只在花饰、纸艺或局部建筑上交替强调；颜色高纯度但边界和面积有秩序，并保留手刷、织物或陶器材质，避免五色满屏同亮、泛拉美符号拼贴、霓虹渐变、肤色被染色、亡灵节元素自动出现或忽略具体地区与节庆语境",
    enPrompt: "Mexican folk palette retaining roughly half the field as cream adobe earth or a dark supporting ground, using marigold yellow and cactus green for the principal rhythm and alternating hot pink with cobalt blue only on flowers paper craft textile or selected architectural details; hues may be highly saturated but boundaries area and material remain ordered with brush fiber or ceramic evidence; avoid all colors equally bright everywhere generic pan-Latin symbol collage neon gradients contaminated skin automatic Day of the Dead motifs or using the palette without specifying the region object and celebration context it belongs to",
  },
  "palette-sci-fi-amber-cyan": {
    zhPrompt: "琥珀青科幻配色以石墨灰、冷黑和冷白构成约七成设备、舱体与信息背景，电光青只表示导航、扫描或安全状态，琥珀橙承担交互焦点和暖光，警示红严格限于异常或危险；每种发光色必须对应功能与光源并影响邻近材质，适合工业科幻界面和空间，避免青橙平均对半、所有边缘发光、红色装饰化、黑位堵死、无来源霓虹或把人物肤色染成双色金属感",
    enPrompt: "amber-cyan science-fiction palette assigning roughly seventy percent of machinery hull and interface ground to graphite gray cool black and controlled white, using electric cyan only for navigation scanning or safe-state information, amber orange for interaction focus and warm practical light, and restricting warning red to actual fault or hazard; each luminous color must have a function and physical source that affects nearby material, suitable for industrial sci-fi systems; avoid equal cyan-orange division glowing every edge decorative warning red crushed blacks source-free neon or turning human skin into a two-tone metallic surface",
  },
  "palette-spring-rain": {
    zhPrompt: "春雨新绿配色以云灰、雨水蓝和雾白形成约六成湿润空气与背景，新叶绿集中在刚萌发植物，湿土棕稳定地面，花粉黄只作细小生机点；表面受水后略加深并出现克制反光，远景因水汽降低饱和度，适合自然、城市雨景和生活方式图像，避免通篇青绿滤镜、荧光嫩绿、积水像镜子、天空纯白、黄色乱撒或雨天仍保持干燥高反差材质",
    enPrompt: "spring-rain palette using cloud gray rainwater blue and mist white for roughly sixty percent of moist air and background, concentrating new-leaf green on fresh growth, grounding paths and soil with wet brown and reserving pollen yellow for tiny signs of life; surfaces darken modestly when wet and carry restrained reflection while distance loses saturation through humidity, suitable for nature city rain and lifestyle imagery; avoid a global cyan-green filter fluorescent foliage mirror-like flooding blank white sky yellow scattered without purpose or dry high-contrast materials that contradict the rainy atmosphere",
  },
  "palette-rainforest-orchid": {
    zhPrompt: "雨林兰花配色以深叶绿、湿炭黑和雾白构成约七成多层植被与潮湿空气，兰花紫集中在花朵或主体焦点，黄绿仅用于透光新叶；暗部仍区分叶片、树皮与水汽，紫色不扩散到整片环境，适合热带自然与香氛美妆视觉，避免荧光森林、黑位一片死暗、紫绿等量竞争、所有叶子同色、无水汽层次或把人工霓虹照明误作自然雨林色彩",
    enPrompt: "rainforest-orchid palette building roughly seventy percent of layered vegetation and humid air from deep leaf green wet charcoal and mist white, concentrating orchid violet on flowers or the principal focal subject and reserving yellow-green for backlit new leaves; shadows must still distinguish foliage bark water and vapor, while violet remains localized for tropical nature fragrance or beauty imagery; avoid a fluorescent forest crushed black void equal purple-green competition identical leaves no atmospheric depth or artificial neon lighting misrepresented as the natural color behavior of a wet rainforest",
  },
  "palette-morandi-mustard": {
    zhPrompt: "莫兰迪芥末配色以燕麦、炭灰和灰绿承担约七成空间与结构，灰芥末黄作为主要暖色集中在家具、服装或标题，陶土色只在小面积呼应；黄色掺灰且明度适中，不像警示色，纹理偏哑光织物、陶器与纸张，适合复古现代室内和品牌视觉，避免满屏黄褐、亮柠檬黄、灰绿发脏、陶土过红、缺少深色锚点或把人物肤色也处理成芥末色",
    enPrompt: "Morandi mustard palette assigning roughly seventy percent of space and structure to oatmeal charcoal and gray green, concentrating muted mustard on furniture clothing or a headline and using terracotta only as a small echo; yellow stays gray-mixed and moderate in value rather than warning-bright, with matte textile ceramic and paper surfaces supporting retro-modern interiors and branding; avoid an all yellow-brown frame vivid lemon dirty green dominant red clay no dark anchor equal swatch use or tinting human skin and every natural material into the same mustard cast",
  },
  "palette-beauty-nude-rose": {
    zhPrompt: "裸粉美妆配色以裸米与柔白覆盖约六成背景和包装，灰玫瑰贴合腮红、唇色或花材，可可棕用于文字与轮廓，香槟金只在金属边缘和高光小面积出现；肤色保持多样且不被统一漂白，表面呈丝绒、粉霜与细腻金属差异，适合美妆产品和人像，避免通篇粉色滤镜、金色廉价闪粉、肤色塑料化、可可棕过重、五色平均或文字对比不足",
    enPrompt: "nude-rose beauty palette covering roughly sixty percent of background and packaging with nude beige and soft white, relating dusty rose to blush lip or botanical accents, using cocoa brown for type and contour and reserving champagne gold for tiny metallic edges and highlights; preserve diverse believable skin rather than whitening every complexion, and distinguish velvet powder cream and fine metal surfaces for cosmetic product or portrait imagery; avoid a blanket pink filter cheap gold glitter plastic skin dominant cocoa equal swatch allocation low text contrast or making package face and background one undifferentiated nude tone",
  },
  "palette-celadon-garden": {
    zhPrompt: "青瓷园林配色以青瓷绿、淡青和暖象牙白占据约七成建筑、器物与留白，墨黑只勾勒木构、石景或文字层次，低饱和金色严格用于扣件与小型焦点；青色应具有釉层深浅和水汽透明感，材质区分瓷、纸、木与石，适合中式空间和产品视觉，避免整画面青绿色滤镜、金色大面积宫廷化、瓷器塑料光、墨黑堵塞、青白无明度差或随意添加古文字",
    enPrompt: "celadon-garden palette assigning roughly seventy percent of architecture object and whitespace to celadon green pale cyan and warm ivory, using ink black only to articulate timber stone or typographic structure and strictly reserving muted gold for hardware and a small focal accent; cyan-green should carry glaze depth and humid transparency while ceramic paper wood and stone remain materially distinct, suitable for Chinese interiors and product design; avoid a global green filter broad palace gold plastic ceramic shine crushed ink black no value difference between pale blue and white or arbitrary pseudo-classical writing",
  },
  "palette-dunhuang-mineral": {
    zhPrompt: "敦煌矿物配色以沙色和赭黄构成约五成壁面与历史基底，石青、石绿分配在服饰、天空和装饰层，朱砂红只强化核心人物或边带；颜色来自矿物颗粒与胶彩叠层，亮而不荧光，磨损处露出底层而非统一褪色，适合壁画与文化视觉，避免五色同饱和铺满、金碧商业化、伪经文、石青污染肤色、随机龟裂或混入不同时代的装饰体系",
    enPrompt: "Dunhuang mineral palette using sand and ochre for roughly half of the wall and historical ground, distributing azurite blue and malachite green across garments sky and ornament and reserving cinnabar red to reinforce a principal figure or border; color should arise from granular mineral pigment and layered binder, vivid without fluorescence, with wear revealing underlayers rather than a uniform fade; avoid every color at equal saturation commercial gold excess pseudo-script blue-contaminated skin random crackle or mixing decorative systems from unrelated periods and regions into one generic ancient mural",
  },
  "palette-neon-night": {
    zhPrompt: "霓虹夜景配色以黑色、深紫和铬灰保留约七成夜间环境，青蓝与洋红分别绑定不同灯牌、车灯或室内光源，并只在湿地、玻璃和金属上产生方向一致的反射；肤色由附近主光有限染色，暗部仍有结构，适合都市电影和科幻夜景，避免青紫满屏滤镜、所有边缘发光、无来源色雾、黑位死黑、反射方向混乱、人物双色塑料皮肤或霓虹亮度完全相同",
    enPrompt: "neon-night palette preserving roughly seventy percent of the night environment in black deep violet and chrome gray, assigning cyan and magenta to distinct signs vehicle lamps or interior sources and allowing them to reflect consistently only on wet pavement glass and metal; nearby key light may tint skin locally while shadow structure remains readable, suitable for urban cinema and science-fiction night scenes; avoid a full-screen cyan-purple filter glowing every edge source-free colored fog crushed blacks contradictory reflection directions two-tone plastic skin or every neon source having identical intensity and no spatial falloff",
  },
  "palette-japanese-indigo": {
    zhPrompt: "日式靛蓝配色以靛蓝和褪蓝构成约六成织物、墙面或夜色层次，暖白承担纸张与留白，雪松棕用于木构和器物，炭黑只压住细节和轮廓；靛蓝随纤维、染色次数和磨损出现深浅，不把所有材质统一染蓝，适合服饰、包装和安静空间，避免纯电蓝、蓝白瓷化、黑色过重、木色发橙、无纤维数码平涂或随意加入红日与伪日文符号",
    enPrompt: "Japanese indigo palette using indigo and faded blue for roughly sixty percent of textile wall or evening depth, warm white for paper and negative space, cedar brown for timber and objects and charcoal only to anchor fine contour; indigo varies with fiber immersion count folds and wear rather than tinting every material uniformly, supporting clothing packaging and quiet interiors; avoid electric blue automatic blue-and-white porcelain styling excessive black orange wood textureless digital fill or arbitrary red suns pseudo-Japanese writing and unrelated motifs used as shortcuts for cultural identity",
  },
  "palette-morandi-charcoal-rose": {
    zhPrompt: "莫兰迪炭粉配色以炭灰、灰褐和骨白建立约八成成熟中性结构，灰玫瑰用于主体或面部附近柔化，褪莓红只占极小比例引导视线；暗部保持织物、皮革与纸张细节，粉色不甜腻、红色不变酒红主调，适合时装、品牌与编辑摄影，避免全画面灰蒙、黑色压死、粉红滤镜、莓红抢焦、肤色失真、颜色同明度或无留白的沉闷商业感",
    enPrompt: "Morandi charcoal-rose palette establishing roughly eighty percent of a mature neutral structure with charcoal taupe and bone white, using dusty rose to soften the principal subject or area near a face and reserving faded berry red as a very small eye-leading accent; dark values retain textile leather and paper detail, pink stays unsweet and red does not become a dominant wine scheme, suitable for fashion branding and editorial photography; avoid blanket gray haze crushed black a global pink filter dominant berry distorted skin identical value across all colors or a heavy commercial frame with no breathing space",
  },
  "palette-vermilion-gold": {
    zhPrompt: "朱红鎏金配色以米白、深青或墨黑承担约六成建筑与器物基底，朱红集中在门窗、漆面和核心主体，旧金严格用于边缘、扣件与纹样高点；金属高光随光源变化而非整片发亮，深青平衡红色热度，适合东方宫殿、节庆与高端包装，避免红金各占一半、亮黄代替旧金、满屏宫廷纹样、黑位堵死、肤色染红或将任意中式设计都处理成奢华喜庆",
    enPrompt: "vermilion-and-aged-gold palette assigning roughly sixty percent of architectural or object ground to warm ivory deep teal or ink black, concentrating vermilion on doors lacquer and the principal subject while reserving old gold for edges hardware and raised ornament; metallic highlights follow a real light source rather than glowing everywhere and deep teal moderates the heat of red, suitable for Eastern palace festival or premium packaging imagery; avoid equal red-gold coverage bright yellow substituted for aged metal ornamental overload crushed black red-contaminated skin or turning every Chinese design into a uniformly luxurious celebration",
  },
  "palette-ink-tea": {
    zhPrompt: "水墨茶席配色以旧纸色、暖灰和留白覆盖约七成桌面与背景，茶褐用于器物、茶汤和木质中层，炭黑只压住墨线与结构，苔藓绿作为植物或釉色小面积点缀；明度柔和、材质区分纸、陶、竹木与液体，适合茶文化、静物和安静空间，避免通篇棕灰、黑色墨团、绿色抢焦、仿古过脏、茶汤发黑、无留白或生成不可读书法作为装饰",
    enPrompt: "ink-and-tea palette covering roughly seventy percent of tabletop and background with aged paper warm gray and deliberate whitespace, using tea brown for vessels liquor and wood midtones, charcoal only to anchor ink-like contour and structure, and moss green as a small botanical or glaze accent; keep values gentle while clearly distinguishing paper ceramic bamboo timber and liquid for tea culture still life and quiet interiors; avoid a blanket brown-gray cast heavy black ink blobs dominant green excessive dirty antiquing black tea liquid no whitespace or fabricated unreadable calligraphy used as decoration",
  },
  "palette-silver-blue-noir": {
    zhPrompt: "银蓝黑色电影配色以黑、深海军蓝和钢蓝构成约七成夜景与阴影，银灰与冷白只在月光、金属边缘和湿地反射处出现；亮部方向统一、暗部仍保留服装与建筑结构，肤色可稍微降饱和但不变蓝，适合悬疑、侦探和工业夜景，避免黑位一片死暗、银色满屏发亮、蓝色滤镜覆盖所有材质、无来源轮廓光、肤色尸白或把黑色电影误作纯黑白",
    enPrompt: "silver-blue noir palette building roughly seventy percent of night and shadow from black deep navy and steel blue, reserving silver gray and cold white for moonlight metal edges and wet-surface reflection; every highlight follows one lighting direction, dark areas retain clothing and architectural structure and skin may be subdued without turning blue, suitable for mystery detective and industrial night imagery; avoid featureless crushed blacks silver shining everywhere a global blue filter across every material source-free rim light corpse-pale skin or treating noir as a merely monochrome image with no controlled cool tonal separation",
  },
  "palette-golden-hour-film": {
    zhPrompt: "金棕胶片时刻以蜂蜜金与褪桃色落在受光面和肤色，烟草棕、橄榄阴影与暖黑承担约六成环境和暗部，浅色高光保持奶油而不过曝；色温从太阳方向向阴影自然过渡，可加入细腻胶片颗粒和轻微高光溢出，适合人像与旅行叙事，避免全局黄滤镜、橙肤色、阴影发脏、日落天空过饱和、所有物体同样金黄或把白天任意改成夕阳",
    enPrompt: "golden-hour film palette placing honey gold and faded peach on lit planes and skin while tobacco brown olive shadow and warm black carry roughly sixty percent of environment and darkness, keeping pale highlights creamy without clipping; temperature transitions naturally away from the sun direction and may include fine film grain plus restrained halation for portrait and travel narrative; avoid a global yellow filter orange skin muddy shadow oversaturated sunset sky identical gold on every object or arbitrarily converting neutral daylight into evening without changing light direction and exposure logic",
  },
  "palette-forest-moss": {
    zhPrompt: "森林苔藓配色以苔藓绿、蕨叶绿和树皮棕建立约七成前中景生态层次，雾灰降低远景对比，暖奶油色只用于穿林光、菌类或小型焦点；绿色随叶龄、湿度和光照变化，树皮与土壤不被统一染绿，适合自然、户外和生态视觉，避免单一深绿滤镜、荧光叶片、黑色森林、奶油色无来源发光、所有植物同色或用均匀雾气遮掉空间结构",
    enPrompt: "forest-moss palette using moss green fern green and bark brown for roughly seventy percent of layered foreground and midground ecology, lowering distant contrast with fog gray and reserving warm cream for filtered light fungi or another small focal detail; greens vary with leaf age moisture and illumination while bark and soil retain their own color, suitable for nature outdoor and ecological imagery; avoid a single dark-green filter fluorescent leaves a black forest source-free cream glow identical vegetation or uniform fog that erases spatial structure and the wet-dry differences among surfaces",
  },
  "palette-desert-sunset": {
    zhPrompt: "沙漠落日配色以沙色和浅金黄覆盖约五成地貌与天空过渡，陶土橙、焦橙集中在受光沙丘和岩面，梅紫与深棕承担背光阴影；暖色之间通过明度和空气距离分层，天空高光不发白，适合自然风景与荒漠叙事，避免通篇橙色滤镜、阴影纯紫、沙丘无结构、太阳过曝成白洞、五色同饱和或将所有沙漠都处理成同一种商业旅行海报",
    enPrompt: "desert-sunset palette giving roughly half of terrain and sky transition to sand and pale gold, concentrating terracotta and burnt orange on lit dunes or rock and assigning plum-violet plus deep brown to backlit shadow; separate the warm hues through value atmospheric distance and surface angle while keeping sky highlights below clipping, suitable for natural landscape and desert narrative; avoid a blanket orange filter pure purple shadows structureless dunes a blown white sun equal saturation across all colors or rendering every desert as the same commercial travel poster regardless of geology and weather",
  },
  "palette-french-vintage": {
    zhPrompt: "法式复古配色以旧纸色、灰橄榄和低饱和海军蓝构成约七成墙面、织物与印刷基底，褪色酒红集中在标题、服装或小型焦点，黄铜仅用于五金和旧器物反光；色彩像自然褪色而非黄色滤镜，材质保留纸纤维、亚麻和木漆，适合编辑、室内与包装，避免埃菲尔铁塔等符号堆砌、酒红过量、金属亮黄、统一仿旧污渍或将“复古”变成棕色单调",
    enPrompt: "French vintage palette building roughly seventy percent of wall textile and print ground from aged paper gray olive and muted navy, concentrating faded wine red on title garment or a small focal element and reserving brass for hardware and old-object reflection; color should feel naturally faded rather than covered by a yellow filter, with paper fiber linen and painted wood remaining distinct for editorial interiors and packaging; avoid piles of stereotypical Paris symbols dominant burgundy bright yellow metal uniform dirty aging or reducing vintage character to a monotonous brown treatment",
  },
  "palette-chinese-opera": {
    zhPrompt: "戏曲华彩配色以玉白或墨黑稳定舞台与面部基底，胭脂红、孔雀蓝和明黄分别绑定角色服饰、脸谱或道具的具体区域，三种高纯度颜色总面积受控并由黑白分隔；金属与丝绸按真实灯光反射，角色身份优先于装饰，适合舞台、海报与文化设计，避免五色均匀铺满、脸谱随意混画、肤色荧光、无来源金光、伪文字或将不同剧种服饰规则混为一套",
    enPrompt: "Chinese opera vivid palette using jade white or ink black to stabilize stage and facial ground, assigning rouge red peacock blue and bright yellow to specific costume makeup or prop regions according to character role while controlling their total high-chroma area and separating them with black-white structure; metal and silk respond to actual stage light and identity takes priority over decoration, suitable for performance poster and cultural design; avoid equal distribution of all colors arbitrary face-paint mixtures fluorescent skin source-free gold glow pseudo-script or combining costume rules from unrelated opera traditions",
  },
  "palette-bamboo-scholar": {
    zhPrompt: "竹林文人配色以宣纸白、墨灰和竹青覆盖约七成环境与留白，胡桃褐用于书案、框架和器物，浅赭只在旧纸、石景或暖光处少量出现；色彩低饱和但通过纸、竹、木、石的纹理与明度区分层次，适合中式空间、文具和静物，避免全局青灰滤镜、黑墨堵塞、木色发橙、竹叶荧光、堆砌卷轴印章或生成不可读书法冒充文人气质",
    enPrompt: "bamboo-scholar palette covering roughly seventy percent of environment and negative space with xuan-paper white ink gray and bamboo green, using walnut brown for desk frame and objects and pale ochre only on aged paper stone or warm light; saturation remains low while value and texture distinguish paper bamboo timber and rock for Chinese interiors stationery and still life; avoid a global blue-gray wash blocked ink black orange wood fluorescent bamboo piles of scrolls and seals or fabricated unreadable calligraphy used as a shortcut for cultivated atmosphere",
  },
  "palette-pastoral-film": {
    zhPrompt: "田园胶片配色以褪草绿、奶油色和灰天蓝组成约七成田野、天空与建筑，桃肤色保护人物面部，暖棕用于土地、木屋和暗部；高光柔和、黑位略抬、整体色彩像负片自然褪色，适合乡野人像与生活叙事，避免米黄滤镜覆盖全图、绿色发灰无生机、肤色粉白、暖棕过重、颗粒粗糙或把现实农村美化成无劳动痕迹的虚假田园布景",
    enPrompt: "pastoral-film palette forming roughly seventy percent of field sky and buildings from faded grass green cream and gray sky blue, protecting faces with peach skin color and using warm brown for soil timber and shadow; highlights stay soft, black level lifts slightly and the hues fade like negative film rather than a blanket filter, suitable for rural portrait and everyday narrative; avoid all-over beige lifeless gray vegetation pink-white skin dominant brown coarse grain or beautifying a real working countryside into a spotless stage with no material wear labor or weather evidence",
  },
  "palette-autumn-maple": {
    zhPrompt: "秋枫山林配色以树皮棕、雾灰和残余深绿承担约六成林地与远景，枫叶红、焦橙和赭黄按树种、光照与季节阶段分层出现，最亮颜色只集中在受光叶簇；地面落叶比树冠更暗，空气透视压低远色，避免整幅橙红滤镜、每片叶同色、红色污染天空与肤色、绿色完全消失、黑树干或把秋景误作森林火灾",
    enPrompt: "autumn-maple palette assigning roughly sixty percent of woodland and distance to bark brown mist gray and remaining deep green, layering maple red burnt orange and ochre according to species illumination and seasonal stage with the brightest hue restricted to sunlit clusters; fallen leaves stay darker than canopy and atmosphere mutes distant color; avoid an all-over orange-red filter identical leaves red contamination of sky or skin complete removal of green black trunks or a palette so fiery that a normal autumn forest appears to be burning",
  },
  "palette-tibetan-mineral": {
    zhPrompt: "藏地矿物色以雪白、风化土色或深色织物提供约五成承载面，绛红与藏黄建立主要节奏，群青和松石绿用于壁画、织物或器物的有限区域；矿物色具有颗粒、磨损和日照褪变，不以霓虹表现，高纯度颜色必须匹配具体建筑、服饰或绘画语境，避免伪经文、法器装饰化、五色同亮、泛藏式拼贴或将整片自然景观强行染成宗教配色",
    enPrompt: "Tibetan mineral palette giving roughly half the supporting field to snow white weathered earth or dark textile, establishing primary rhythm with deep red and Tibetan yellow and reserving ultramarine plus turquoise for limited mural fabric or object regions; mineral color carries grain wear and sun fading rather than neon intensity, and every high-chroma area must fit a specified architectural garment or painting context; avoid pseudo-script ritual objects used as casual decoration all colors equally bright generic Tibetan collage or forcing an entire natural landscape into a sacred decorative palette",
  },
  "palette-teal-orange-cinema": {
    zhPrompt: "青橙电影配色以深海军蓝、炭黑和青色阴影承担约七成环境，橙色只绑定主光、肤色暖区或实用灯，肤色米保留人物自然中间调；冷暖分离随光源和空间深度变化，不把所有高光染橙，也不让暗部纯青，适合动作、城市与商业电影画面，避免一键双色滤镜、橙色皮肤、青色白眼、无来源轮廓光、黑位堵塞或背景与人物完全相反的生硬抠像感",
    enPrompt: "teal-orange cinema palette assigning roughly seventy percent of environment to deep navy charcoal and teal shadow, binding orange only to key light warm skin regions or visible practical lamps while beige midtones preserve natural faces; cool-warm separation changes with source and depth rather than tinting every highlight orange or every shadow cyan, suitable for action urban and commercial film imagery; avoid a one-click two-color filter orange skin cyan eye whites source-free rim light crushed blacks or a hard cutout relationship where subject and background carry perfectly opposite colors without shared illumination",
  },
  "palette-harbor-night-cinema": {
    zhPrompt: "港湾雨夜电影配色以石油蓝、黑色和雾灰构成约七成海面、天空与码头阴影，琥珀灯光来自船舱、路灯或窗户，旧青绿只在潮湿金属和工业表面出现；反射方向、长度与光源一致，远景因雨雾降对比，适合港口与都市悬疑，避免青橙滤镜套用、整片水面像镜子、无来源绿光、黑位死暗、所有灯同色同亮或雨夜却缺少湿润材质变化",
    enPrompt: "harbor rain-night palette using petroleum blue black and fog gray for roughly seventy percent of sea sky and dock shadow, sourcing amber from cabins street lamps or windows and placing aged blue-green only on wet metal and industrial surfaces; reflection direction and length agree with each lamp while rain mist lowers distant contrast, supporting port and urban suspense imagery; avoid a generic teal-orange grade mirror-like water everywhere source-free green glow crushed darkness identical lamp color and intensity or a supposedly wet night with no change in roughness reflection and atmospheric depth",
  },
  "palette-coastal-mist": {
    zhPrompt: "海岸晨雾配色以浅雾蓝、珍珠灰和暖白占据约七成天空、雾气与远海，海沫绿用于近岸水体，漂流木米色稳定沙滩与木构，柔海军蓝只作礁石或船只焦点；远近明度逐级变化，颜色清凉但不苍白，适合海岸风景与安静品牌，避免海天完全同色、薄荷绿荧光、雾层均匀盖住主体、海军蓝过重、沙滩发黄或用低对比掩盖空间错误",
    enPrompt: "coastal-mist palette covering roughly seventy percent of sky fog and distant sea with pale mist blue pearl gray and warm white, using seafoam green in nearshore water, driftwood beige to stabilize sand and timber and soft navy only for rock boat or another focal anchor; values step gradually across distance so the image remains cool without becoming blank, suited to coast landscape and quiet branding; avoid sea and sky merging into one color fluorescent mint uniform fog hiding the subject dominant navy yellow sand or low contrast used to conceal incorrect depth and shoreline structure",
  },
  "palette-pop-graphic": {
    zhPrompt: "波普图形配色以白色或黑色提供约五成清晰底面，樱桃红、钴蓝和柠檬黄分配给不同主体块面与信息层级，另一中性色负责轮廓和文字；原色保持平涂、边界锐利，并通过面积而非渐变建立主次，适合海报、包装和潮流图形，避免三原色等量棋盘格、所有文字彩色、渐变塑料感、黑线过密、照片直接加高饱和滤镜或使用可识别品牌标志",
    enPrompt: "pop-graphic palette retaining roughly half the field as a clean white or black ground, assigning cherry red cobalt blue and lemon yellow to separate subject masses and information levels while the opposite neutral carries contour and typography; primary colors remain flat and sharply bounded, with hierarchy created by area rather than gradients for posters packaging and fashion graphics; avoid an equal primary-color checkerboard multicolored text everywhere glossy gradient plastic dense black outlines an unchanged photograph with saturation boosted or recognizable brand marks used as shortcuts for pop culture",
  },
  "palette-black-gold-luxury": {
    zhPrompt: "黑金轻奢配色以哑光黑、炭灰和暖象牙白构成约八成背景与信息结构，古金仅用于细边、标志性部件和受光金属，深翡翠可作为单一宝石色焦点；黑色表面通过粗糙度区分皮革、纸张和金属，金色不发黄不满版，适合珠宝、包装与高端空间，避免黑底加大面积亮金、镜面塑料、翡翠荧光、文字低对比、无光源金边或把奢华等同于纹样堆砌",
    enPrompt: "black-and-aged-gold luxury palette building roughly eighty percent of background and information structure from matte black charcoal and warm ivory, reserving old gold for fine borders signature hardware and lit metal and allowing deep emerald as one isolated jewel-color focus; differentiate black leather paper and metal through roughness while keeping gold subdued rather than yellow or full-bleed, suitable for jewelry packaging and premium interiors; avoid broad bright-gold coverage mirror plastic fluorescent emerald low-contrast text source-free gold edges or equating luxury with dense ornamental pattern and empty visual hierarchy",
  },
  "palette-volcanic-earth": {
    zhPrompt: "火山大地配色以玄武岩黑、火山灰和铁锈棕构成约七成冷却岩层与地表，熔岩红只在裂隙和高温核心出现，硫磺黄限制在矿物沉积或最亮热区；亮度随温度衰减并真实照亮附近岩面，适合地质与灾变场景，避免整片红色地面、黄色装饰线、黑位无纹理、熔岩像霓虹塑料、冷热区域无边界或普通沙漠被误套成火山景观",
    enPrompt: "volcanic-earth palette using basalt black ash gray and iron-rust brown for roughly seventy percent of cooled rock and terrain, restricting lava red to fissures and hot cores and sulfur yellow to mineral deposits or the highest-temperature points; luminosity falls with temperature and genuinely lights nearby stone, suitable for geology and disaster scenes; avoid an entirely red ground decorative yellow lines textureless black lava resembling neon plastic no boundary between hot and cooled zones or an ordinary desert recolored as volcanic terrain without geological evidence",
  },
  "palette-tang-sancai": {
    zhPrompt: "唐三彩配色以乳白和陶褐呈现胎体与未覆釉区，琥珀橙、深釉绿和稻草黄在器物表面随重力流淌、交融并露出深浅，三种釉色不必平均；高光集中在釉面，断口和底足保持陶土哑光，适合陶塑与文化产品，避免普通物体套三色滤镜、荧光绿、无重力均匀渐变、金属光泽、伪古文字或把所有唐代视觉都简化为三彩釉色",
    enPrompt: "Tang sancai palette exposing creamy white and pottery brown at clay body or unglazed areas while amber orange deep glaze green and straw yellow flow mingle and thin under gravity across ceramic surfaces without equal allocation; highlights belong to glaze and fractures or foot rings remain matte earthen material, suitable for pottery sculpture and cultural products; avoid placing a three-color filter on unrelated objects fluorescent green gravity-free uniform gradients metallic reflections pseudo-ancient text or reducing every Tang-period visual subject to sancai glaze regardless of medium and context",
  },
  "palette-desert-sci-fi": {
    zhPrompt: "荒漠科幻配色以沙金、浅砂岩和铁锈橙承担约六成地貌、尘埃与自然暖光，钢蓝灰、深黑用于机械设施、服装和阴影；冷硬材质与干燥暖地貌在接触处共享尘土和反射，少量冷白用于界面或能源点，适合星球探索与工业叙事，避免青橙滤镜生硬分割、设施无尘、黑色塑料、满屏发光线、沙色污染肤色或把普通沙漠只加飞船就称作世界观",
    enPrompt: "desert science-fiction palette assigning roughly sixty percent of terrain dust and natural warm light to sand gold pale sandstone and rust orange, using steel blue-gray and deep black for machinery clothing and shadow; cool engineered materials share dust reflection and contact staining with the dry landscape, while limited cold white marks interfaces or energy points, supporting planetary exploration and industrial narrative; avoid a hard teal-orange split spotless equipment black plastic glowing lines everywhere sand-contaminated skin or calling an ordinary desert a complete world merely by adding a spaceship",
  },
  "palette-coral-reef": {
    zhPrompt: "珊瑚礁配色以深海青和清水蓝绿构成约七成水体与远景，珊瑚红、阳光黄和贝壳白集中在特定珊瑚、鱼类与水面光斑；颜色随水深衰减，红色在远处更快消失，近景暖色仍受蓝绿环境光影响，适合海洋生态视觉，避免水下五彩霓虹、所有珊瑚同红、鱼群颜色随机、白色过曝、深度无色偏变化或将活礁画成装饰水族箱",
    enPrompt: "coral-reef palette using deep ocean teal and clear blue-green for roughly seventy percent of water and distance, concentrating coral red sunlight yellow and shell white on selected coral fish and surface caustic highlights; color attenuates with depth, red disappearing sooner in distance while near warm hues still receive blue-green ambient light, supporting marine ecological imagery; avoid underwater rainbow neon every coral identical red randomly colored fish clipped white no depth-dependent spectral change or turning a living reef into a decorative aquarium with evenly distributed color",
  },
  "palette-cherry-moss": {
    zhPrompt: "樱花苔庭配色以暖纸白、苔绿和嫩灰绿覆盖约七成庭园、石景与留白，樱粉和浅花瓣粉只集中在花冠、落瓣与局部反光；绿色按湿度和植物种类变化，粉色不扩散到天空和肤色，整体春日轻盈但有石木深色锚点，避免粉绿各占一半、糖果滤镜、荧光嫩绿、满屏花瓣、无季节层次或自动加入与场景无关的日式符号",
    enPrompt: "cherry-and-moss garden palette covering roughly seventy percent of garden stone and negative space with warm paper white moss green and tender gray-green, concentrating cherry pink and pale petal pink on blossom crowns fallen petals and selected reflections; greens vary by moisture and species while pink stays out of sky and skin, with darker stone or timber anchoring an airy spring image; avoid equal pink-green candy division fluorescent foliage petals filling the frame no seasonal depth or automatic addition of unrelated Japanese symbols merely because cherry color is present",
  },
  "palette-blue-white-porcelain": {
    zhPrompt: "青花瓷蓝白配色以暖白作为约六成瓷面、纸面或空间底色，钴蓝承担主要纹样和结构，墨海军蓝只加深轮廓与阴影，浅灰和少量青瓷绿用于层次过渡；蓝色浓淡来自笔触、釉下渗化与烧制，不是数码纯色，适合器物与东方设计，避免蓝白平均条纹、冷白刺眼、所有材质瓷器化、海军蓝堵塞、无来源金边或生成伪书法和乱码纹样",
    enPrompt: "blue-and-white porcelain palette giving warm white roughly sixty percent of ceramic paper or spatial ground, using cobalt for principal motif and structure, ink navy only to deepen contour and shadow and pale gray plus limited celadon green for transitions; blue variation should arise from brush loading underglaze feathering and firing rather than one digital solid color, supporting objects and Eastern design; avoid equal blue-white stripes glaring cold white making every material ceramic blocked navy source-free gold borders or fabricated calligraphy and gibberish ornament used to fill the surface",
  },
  "palette-y2k-chrome": {
    zhPrompt: "Y2K 铬彩配色以亮黑、冷灰和铬银构成约六成数码设备与背景，电光蓝承担界面主色，半透明淡紫和热粉仅在塑料、凝胶或焦点按钮中出现；金属反射必须映出环境，透明材质有厚度和折射，适合千禧潮流与数码产品，避免所有表面镜面、热粉满屏、廉价彩虹渐变、无来源发光、文字可读性差、肤色金属化或把降低分辨率当作 Y2K 设计",
    enPrompt: "Y2K chrome palette using glossy black cool gray and chrome silver for roughly sixty percent of digital device and background structure, assigning electric blue to the primary interface and reserving translucent lavender plus hot pink for plastic gel or a focal control; metal must reflect its environment and transparent material needs thickness and refraction, supporting millennium fashion and digital products; avoid mirror finish on every surface hot pink everywhere cheap rainbow gradients source-free glow unreadable typography metallic skin or assuming that lower resolution alone creates a coherent Y2K visual language",
  },
};

const metadataOptimizations: Record<string, { zhName: string; enName: string }> = {
  "style-kraft-paper-drawing": { zhName: "牛皮纸黑白素描", enName: "Kraft Paper Monochrome Drawing" },
  "scene-modern-rooftop": { zhName: "摩天楼观景露台", enName: "Skyscraper Observation Terrace" },
  "scene-library": { zhName: "现代公共图书馆", enName: "Modern Public Library" },
  "scene-museum": { zhName: "当代艺术画廊", enName: "Contemporary Art Gallery" },
  "material-matte-rubber": { zhName: "哑光软触橡胶", enName: "Matte Soft-Touch Rubber" },
  "material-rubber": { zhName: "弹性橡胶", enName: "Elastic Rubber" },
  "clothing-bow": { zhName: "蝴蝶结配饰", enName: "Bow Accessory" },
  "scene-snowy-pine-forest": { zhName: "积雪针叶林", enName: "Snow-Covered Conifer Forest" },
  "scene-overcast-rooftops": { zhName: "阴天屋顶群", enName: "Overcast Rooftops" },
  "layout-bg-holographic": { zhName: "数码镭射渐变背景", enName: "Digital Holographic Gradient" },
  "character-elegant-slender": { zhName: "修长体态", enName: "Slender Proportions" },
  "layout-split-panel": { zhName: "图文左右分栏", enName: "Image-Copy Split Panel" },
  "layout-circular-focal-window": { zhName: "圆形蒙版窗口", enName: "Circular Mask Window" },
  "layout-circular-focus": { zhName: "环形视觉动线", enName: "Circular Visual Flow" },
  "layout-frame-within-frame": { zhName: "内框安全区", enName: "Inset Frame Safe Area" },
  "ethnic-sui": { zhName: "水族马尾绣服饰视觉", enName: "Sui Horsetail Embroidered Dress Visual" },
  "ethnic-uyghur": { zhName: "维吾尔艾德莱斯服饰视觉", enName: "Uyghur Atlas Silk Dress Visual" },
  "ethnic-bai": { zhName: "白族扎染服饰与场景", enName: "Bai Tie-Dye Dress and Setting" },
  "ethnic-hani": { zhName: "哈尼梯田人文景观", enName: "Hani Terrace Cultural Landscape" },
  "grading-beauty-retouch": { zhName: "商业妆面精修调色", enName: "Commercial Beauty Retouch Grade" },
  "retouch-makeup-cleanup": { zhName: "局部妆面修整", enName: "Localized Makeup Cleanup" },
};

const paletteGuidanceByGroup: Record<string, { zh: string; en: string }> = {
  commercial: {
    zh: "；以前两种颜色承担约六成背景与主体结构，中间色建立约三成产品或信息层级，最亮或最深色只作一成以内的按钮、标签和焦点。颜色必须服从材质、文字对比与真实肤色，不要五色平均铺满、全局滤镜、荧光污染、文字低对比或用颜色掩盖产品结构",
    en: "; assign the first two colors to roughly sixty percent of background and principal structure, use the middle tones for about thirty percent of product and information hierarchy, and reserve the brightest or darkest hue for less than ten percent of controls labels and focal accents. Make color obey material response typographic contrast and believable skin, avoiding equal coverage of every swatch global filtering fluorescent contamination unreadable text or color used to conceal product form",
  },
  cinema: {
    zh: "；以最深两色承担约七成环境、阴影与空间层次，暖色或高亮色必须绑定可见主光、实用灯或叙事焦点，并随距离衰减和影响邻近材质。保留自然肤色与暗部细节，不要把色卡做成一键双色滤镜、无来源霓虹、黑位堵塞、反射方向矛盾或所有灯光同色同亮",
    en: "; let the two deepest hues carry roughly seventy percent of environment shadow and spatial depth, while warm or bright colors must belong to a visible key light practical lamp or narrative focus and fall off with distance while affecting nearby material. Preserve believable skin and readable dark detail, avoiding a one-click two-color filter source-free neon crushed blacks contradictory reflection direction or every light rendered with the same hue and intensity",
  },
  nature: {
    zh: "；让地貌、水体、植被和天空按真实深度分配主色，前景保留材质差异，远景通过空气、水汽或水深自然降低对比，最鲜艳颜色只集中在受光或生态焦点。不要五色同饱和、全景统一染色、荧光植物、天空水面同明度、忽略季节与天气或把自然环境处理成装饰性渐变背景",
    en: "; distribute the principal hues across terrain water vegetation and sky according to real depth, preserving material differences in the foreground and reducing distant contrast through atmosphere moisture or water depth, with the most saturated color restricted to light or an ecological focal point. Avoid equal saturation across all swatches blanket tinting fluorescent plants sky and water at one value ignored season or weather and a natural environment reduced to a decorative gradient backdrop",
  },
  chinese: {
    zh: "；先明确色彩应用于建筑、陶瓷、漆器、织物、纸张或绘画中的哪一种载体，再以两种基色覆盖约六至七成，其他颜色按纹样、釉层、光线和结构小面积展开。保留材料工艺与年代语境，不要五色平均、金色满版、伪文字、不同历史体系混用或仅凭全局偏色冒充东方审美",
    en: "; first specify whether the palette belongs to architecture ceramic lacquer textile paper or painting, then give two base colors roughly sixty to seventy percent of the field and distribute the others through motif glaze light and structure in smaller areas. Preserve material process and period context, avoiding equal use of five colors full-bleed gold pseudo-writing mixtures of unrelated historical systems or a global color cast used as a shortcut for Chinese aesthetics",
  },
  global: {
    zh: "；先指定具体地域、年代和应用载体，让两种主色承担约六成基底，次要颜色服从织造、印刷、建筑或器物结构，最鲜艳颜色只作有限节奏。保留手工误差和材料边界，不要把多个地区符号拼成泛异域风、五色同亮、文化刻板化、伪文字或脱离载体的装饰色块",
    en: "; specify the region period and physical support before use, assign two principal colors to roughly sixty percent of the ground, make secondary hues follow weaving printing architecture or object construction and reserve the most vivid color for limited rhythm. Preserve handmade variation and material boundaries, avoiding a generic exotic collage of multiple regions every swatch equally bright cultural stereotyping pseudo-script or decorative color blocks detached from their support",
  },
};

const eraGuidanceByGroup: Record<string, { zh: string; en: string }> = {
  ancient: {
    zh: "；先明确地域、世纪或文明阶段，再让建筑方法、交通、照明、工具、衣料与社会活动共同证明时代；自然环境与聚落规模应符合资源条件。避免把多个古代文明混成装饰拼贴、现代材料与电力设备、跨世纪服饰、无依据巨型建筑、伪文字或仅靠棕黄色滤镜制造历史感",
    en: "; specify a region century or civilization phase before generation, then make construction method transport illumination tools textile and social activity jointly prove the period while landscape and settlement scale reflect available resources. Avoid decorative mixtures of unrelated ancient cultures modern materials or electrical devices clothing from conflicting centuries unsupported monumental architecture pseudo-writing or a brown-yellow filter used as the only evidence of history",
  },
  modern: {
    zh: "；锁定具体十年、城市与社会场景，用当时真实的道路、交通、广告载体、通讯设备、室内设施和服装剪裁建立时代，人物仍按日常任务行动。避免相邻年代物件随意混用、现代智能手机穿帮、品牌与乱码海报、所有人穿礼服、过度怀旧滤镜或只靠一辆旧车说明整个时代",
    en: "; lock the scene to a specific decade city and social setting, using period-correct roads transport advertising media communication devices interior fixtures and garment cuts while people perform ordinary tasks. Avoid casually mixing adjacent decades contemporary smartphones recognizable brands and gibberish posters everyone wearing formal costume excessive nostalgia filtering or relying on one old vehicle to establish an entire era",
  },
  future: {
    zh: "；说明能源、交通、通信、建筑维护和公共生活如何运作，让科技水平在同一体系内一致，并通过材料磨损、服务设施与普通人的使用体现真实世界。避免只堆悬浮屏和霓虹、所有表面洁白发光、能源无来源、技术互相矛盾、城市无人生活、可读品牌文字或把未来简单等同于赛博朋克",
    en: "; define how energy transport communication building maintenance and public life function, keeping technology within one coherent capability level and showing the world through wear service infrastructure and ordinary use. Avoid piles of floating screens and neon every surface white and glowing source-free energy contradictory technologies cities with no lived activity readable brand text or treating every future as interchangeable cyberpunk",
  },
  "ancient-china": {
    zh: "；锁定朝代、地域与具体城市或乡野场景，建筑屋顶、城防、道路、车马、器物、发式和服装形制均服从同一时代，市井活动体现真实生产与礼制。避免汉唐宋明清元素混穿、泛化影楼汉服、现代水泥玻璃、满街灯笼、伪书法、宫殿比例失真或把所有中国古代都做成同一种金红宫廷景象",
    en: "; lock the scene to one dynasty region and specific urban or rural setting, making roof construction fortification road cart vessel hairstyle and garment form belong to the same period while everyday activity reflects actual production and social order. Avoid mixing Han Tang Song Ming and Qing elements generic studio hanfu modern concrete or glass lanterns everywhere pseudo-calligraphy distorted palace scale or rendering all ancient China as one red-and-gold imperial spectacle",
  },
  "world-history": {
    zh: "；明确地点、年代、贸易或生产关系，并让建筑工法、气候、运输、货物、工具和阶层服饰互相印证；跨文化接触应通过可信路线与物品来源表现。避免泛欧洲或泛异域拼贴、时代错置武器、现代机械、无来源奢华、伪文字、服装舞台化或将复杂历史简化为单一战争与贵族场景",
    en: "; specify place period and the trade or production relationship, making construction climate transport goods tools and class-specific clothing corroborate one another while cultural contact appears through credible routes and object origins. Avoid generic European or exotic collage anachronistic weapons modern machinery source-free luxury pseudo-writing theatrical costume or reducing a complex historical world to only war and aristocratic spectacle",
  },
  apocalypse: {
    zh: "；先说明灾变类型、发生后的时间长度与仍可用的基础设施，再表现水电、食物、交通、避难、修复和社区协作留下的可观察痕迹；破坏程度按地点变化，并保留因果。避免无原因万能废墟、每栋楼同样破损、随意血腥、装备拼贴、道路仍崭新、植物一夜覆盖全城或把生存者只画成武装摆拍",
    en: "; define the disaster type elapsed time and surviving infrastructure before showing observable evidence of water power food transport shelter repair and community adaptation, with damage varying by location and preserving cause. Avoid unexplained universal ruins every building damaged identically gratuitous gore random survival-gear collage pristine roads vegetation covering a city overnight or survivors reduced to armed poses with no credible daily systems",
  },
  "eastern-fantasy": {
    zh: "；先建立武学、灵气或神话力量的来源、限制与社会用途，再让地形、建筑、交通、服饰、门派或市井生活遵守同一套世界规则；超自然现象必须影响光线、重力和人物行动。避免仙雾遮满画面、楼阁随意悬浮、不同朝代服饰混用、发光文字、无代价万能法术、著名角色复制或只靠灯笼竹林冒充东方幻想",
    en: "; establish the source limits and social use of martial spiritual or mythic power, then make terrain architecture transport clothing institutions and everyday life obey the same world rules while supernatural phenomena affect light gravity and human action. Avoid mist covering everything arbitrary floating pavilions mixed-dynasty costume glowing writing consequence-free universal magic copies of famous characters or lanterns and bamboo used as the sole evidence of Eastern fantasy",
  },
};

const framingGuidanceByGroup: Record<string, { zh: string; en: string }> = {
  "shot-size": {
    zh: "；先确定最终横竖画幅，再明确主要对象占画面高度的比例、边缘裁切意图与视线或运动方向的留空。人物裁切避开关节和五官中段，物体保留决定身份与功能的结构，多人场景维持前后尺度、遮挡和焦点连续；景别改变时同步调整环境信息量、透视和景深，而不是仅把同一画面放大缩小。避免头顶或脚底意外贴边、主体悬浮、关键手势出框、多人比例跳变、背景与主体清晰度矛盾、横竖版机械裁切或后期数码放大导致的低清细节",
    en: "; establish the final horizontal or vertical aspect ratio first, then specify the principal subject height within the frame, intentional edge crops and breathing room in the gaze or movement direction. For people avoid cuts through joints and central facial features, for objects retain structures that establish identity and function, and in group scenes preserve depth scale occlusion and focus continuity. When shot size changes, adjust contextual information perspective and depth of field rather than merely scaling the same composition. Avoid accidental contact with the top or bottom edge floating subjects clipped key gestures inconsistent group scale contradictory subject-background sharpness mechanical portrait-to-landscape cropping or low-resolution detail caused by digital enlargement",
  },
};

const layoutStyleBaseGuidance = {
  zh: "；先确认成品媒介与横竖画幅，建立可见但不僵硬的页边距、列网和基线，再分配主视觉、标题区、副信息、标识与行动区域的面积和阅读顺序。所有对齐、跨栏、叠压和留白都服务同一个视觉焦点，并预留裁切出血与多尺寸安全区；用户提供文字时保持原文与层级，未提供时只保留结构清晰的占位形态。避免乱码、伪品牌、信息同权、卡片无目的堆叠、边距忽大忽小、元素贴边、装饰压住主体或把排版误作覆盖在成图上的随机模板",
  en: "; establish the final medium and horizontal or vertical aspect ratio first, then build deliberate margins columns and a baseline before assigning area and reading order to the principal image headline supporting information identity and action zone. Every alignment column span overlap and negative space must support one visual focus while allowing trim bleed and multi-format safe zones. Preserve user-supplied wording and hierarchy exactly; when no copy is supplied use only clean structural placeholders rather than invented language. Avoid gibberish pseudo-brands equal emphasis everywhere purposeless card stacking inconsistent margins edge collisions decoration covering the subject or a random template pasted over an otherwise finished image",
};

const layoutStyleGuidanceByGroup: Record<string, { zh: string; en: string }> = {
  minimal: {
    zh: "；以少量元素、显著尺度差和不对称平衡建立节奏，空白必须围绕主体形成呼吸与方向，细线、淡色块和小字号信息只承担辅助层级。避免把极简做成空洞居中、米白滤镜、所有元素过小、装饰性日文韩文或缺少明确阅读入口",
    en: "; create rhythm with few elements decisive scale contrast and asymmetrical balance, making whitespace form breathing room and direction around the subject while hairlines pale fields and small information remain subordinate. Avoid empty centered minimalism beige filtering everything uniformly tiny elements decorative Japanese or Korean pseudo-writing or a composition with no clear entry point",
  },
  grid: {
    zh: "；明确列数、栏距、模块比例和主对齐轴，图像与信息跨栏必须服从同一数学关系，并用一处有意破格制造重点。避免假网格、模块尺寸随意、几何形等量铺满、对齐线互相冲突或把历史现代主义简化成红黄蓝装饰",
    en: "; define column count gutters module ratios and a principal alignment axis, keeping image and information spans within one mathematical system and allowing a single intentional grid break for emphasis. Avoid a fake grid arbitrary module sizing equal geometric decoration conflicting alignment lines or reducing historical modernism to red yellow and blue ornament",
  },
  editorial: {
    zh: "；按开篇、主图、正文、引语、图注与页码建立出版节奏，跨页时保护装订中缝并让图片裁切、标题尺度和正文栏宽形成连续阅读。避免把社论做成电商卡片、正文栏过宽、图注脱离图片、跨页主体被中缝切断或用密度掩盖层级缺失",
    en: "; establish publication pacing through opener hero image body pull quote caption and folio, protecting the binding gutter on spreads and coordinating image crop headline scale and text measure into a continuous reading path. Avoid turning editorial work into commerce cards overly wide body columns detached captions a subject severed by the gutter or density used to hide missing hierarchy",
  },
  commercial: {
    zh: "；先锁定产品、利益点与单一行动目标，主商品保持完整轮廓和真实材质，价格、卖点、按钮与品牌安全区按转化顺序排列，并保留平台裁切余量。避免虚构价格折扣、多个行动按钮争抢、产品被文字遮挡、促销爆炸贴满画面、假品牌或把奢华等同于黑金堆砌",
    en: "; lock the product benefit and one action objective first, preserve the complete silhouette and real material of the hero item, and order price value proposition control and brand safe area according to conversion priority with platform crop tolerance. Avoid invented prices or discounts competing calls to action copy covering the product promotional bursts filling the frame fake brands or treating luxury as indiscriminate black-and-gold decoration",
  },
  digital: {
    zh: "；按真实视口和响应式断点组织导航、内容、状态、控件与数据密度，交互目标尺寸、对比度和间距满足可读与可点击要求，装饰界面只出现在有功能的位置。避免微小不可读文字、无意义 HUD 线框、移动端沿用桌面密度、卡片无限嵌套、发光边框泛滥或控件没有状态反馈",
    en: "; organize navigation content states controls and data density for a real viewport and responsive breakpoints, keeping interaction targets contrast and spacing readable and operable while decorative interface language appears only where function supports it. Avoid microscopic text meaningless HUD linework desktop density on mobile infinitely nested cards glow around every panel or controls with no legible state feedback",
  },
  experimental: {
    zh: "；先保留一个稳定锚点和可追踪阅读路径，再有控制地打破网格，通过纸层、旋转、遮挡、错位或图形节奏形成张力；每种材料和偏移必须有前后层级。避免随机散落、所有元素同时倾斜、主体被拼贴吞没、胶带贴纸无来源、颜色和纹理过量或用混乱冒充实验性",
    en: "; retain one stable anchor and a traceable reading path before breaking the grid in a controlled way, creating tension through paper layers rotation occlusion displacement or graphic rhythm while every material and offset has a clear depth order. Avoid random scattering every element tilted at once the subject consumed by collage source-free tape and stickers excessive color and texture or chaos presented as experimentation",
  },
  cultural: {
    zh: "；先指定地域、年代、阅读方向和真实载体，再把卷轴、装帧、印刷或水墨的结构原则转化为当代层级；文化元素只在有材料与语境依据的位置出现。避免伪书法、乱码印章、不同东亚体系混用、符号堆砌、泛红金配色或以竹子灯笼替代完整设计逻辑",
    en: "; specify region period reading direction and physical support before translating scroll binding print or ink principles into a contemporary hierarchy, placing cultural elements only where material and context justify them. Avoid pseudo-calligraphy gibberish seals mixtures of unrelated East Asian systems piles of symbols generic red-and-gold color or bamboo and lanterns used in place of a complete design logic",
  },
  print: {
    zh: "；明确纸张、印刷方式、色版数量、裁切线和出血，套色偏移、压痕、网点与油墨不均必须来自真实工艺并保持关键轮廓清楚。避免数码噪点冒充印刷、所有边缘同样磨损、套印完全错位、纸张纹理覆盖主体、不可印刷的发光渐变或将政治海报结构无语境复刻",
    en: "; define paper printing method plate count trim and bleed, making registration shift impression halftone and ink variation arise from a plausible process while important contours remain clear. Avoid digital noise standing in for print every edge equally distressed unusable misregistration paper texture covering the subject unprintable luminous gradients or copying political-poster structure without historical context",
  },
  youth: {
    zh: "；用活泼比例、圆润形状和有限亮色建立年轻节奏，同时保留清楚标题入口、主体边界和可读信息区；材质效果服从层级而不是铺满。避免糖果色无主次、透明塑料遮挡内容、儿童版式幼儿化、铬面反射无环境、贴纸泛滥或把低分辨率当作潮流",
    en: "; build youthful rhythm through lively proportion rounded forms and a limited bright palette while retaining a clear headline entry subject boundary and readable information zone, keeping material effects subordinate to hierarchy rather than covering the page. Avoid candy colors with no priority transparent plastic obscuring content infantilizing children's layouts environment-free chrome sticker overload or treating low resolution as fashion",
  },
  "soft-ui": {
    zh: "；透明度、模糊、内外阴影和高光必须共同说明层级与可交互状态，卡片边界在浅深背景上都保持足够对比，文字与图标不依赖阴影才能识别。避免玻璃层彼此穿透、背景过花、按钮与底面同色、新拟物控件看不出凹凸状态、无光源柔影或牺牲可访问性换取柔和感",
    en: "; make transparency blur inner and outer shadow and highlight jointly explain depth and interaction state, keeping card boundaries sufficiently contrasted on both light and dark grounds and ensuring text and icons remain identifiable without shadow. Avoid glass layers visually passing through one another busy backgrounds controls matching the surface indiscernible raised and pressed states source-free soft shadow or softness achieved by sacrificing accessibility",
  },
  catalog: {
    zh: "；按作品或造型编号建立可复查序列，主图、局部、信息说明与页码位置保持跨页一致；同组图片采用统一裁切基准、人物尺度和色彩管理，并给每件内容足够独立空间。避免杂志式随意拼贴、不同产品比例跳变、图注错配、人物头脚被切、背景风格不统一或装饰抢过作品本身",
    en: "; create an auditable sequence through artwork or look numbering, keeping hero detail information and folio positions consistent across pages. Use one crop baseline subject scale and color-management approach for a series while giving each item sufficient independent space. Avoid casual magazine collage jumping product proportions mismatched captions cropped heads or feet inconsistent backgrounds or decoration competing with the work being cataloged",
  },
};

const moodBaseGuidance = {
  zh: "；先明确情绪发生在事件之前、当下还是之后，并指定主要人物或物件的可观察反应，再用距离、姿态、视线、动作速度、空间密度、光线方向和环境声响的视觉线索共同建立氛围。色彩只负责强化已有因果，人物肤色和关键材质保持真实，强度应与场景规模一致；画面至少保留一个能说明情绪来源的叙事线索和一条可继续阅读的视觉路径。避免只套单色滤镜、让所有人物做同一表情、依赖文字表情符号、无来源雾气或光晕、过度戏剧化、随机装饰以及氛围压过主体身份和实际动作",
  en: "; identify whether the emotion occurs before during or after an event and specify an observable response from the principal person or object, then build atmosphere jointly through distance posture gaze movement speed spatial density light direction and visual evidence of environmental sound. Color should reinforce an existing cause rather than replace it, preserving credible skin and key material response, with intensity proportional to the scale of the scene. Retain at least one narrative clue explaining the emotion and one visual path that continues through the image. Avoid a single-color filter identical expressions on everyone reliance on written emotion or emoji source-free fog and glow melodrama random decoration or atmosphere overwhelming subject identity and actual action",
};

const moodGuidanceByGroup: Record<string, { zh: string; en: string }> = {
  positive: {
    zh: "；积极情绪通过开放空间、向外或向上的动作、可完成的小目标和清晰中高调光线表达，明亮色只集中在人物互动与结果反馈上。避免所有人强行大笑、彩纸气球泛滥、曝光过白、五色同饱和或把希望表现成无条件胜利",
    en: "; express positive emotion through open space outward or upward movement an achievable immediate goal and clear middle-to-high-key light, concentrating brighter color on interaction and visible feedback. Avoid compulsory laughter confetti and balloon overload clipped white exposure every hue equally saturated or hope represented as effortless unconditional victory",
  },
  quiet: {
    zh: "；安静状态依靠稳定构图、缓慢动作、柔和连续明度和低密度细节维持，主体仍有正在进行的观察、休息或工作而不是失去生命感。避免整幅灰雾、人物僵直、空间空到没有用途、低对比吞掉焦点或用禅意符号代替真实平静",
    en: "; sustain quiet states through stable composition slow action gentle continuous values and low detail density while the subject still observes rests or works rather than appearing lifeless. Avoid blanket gray haze rigid figures a space emptied of purpose low contrast swallowing the focal point or symbolic zen decoration substituted for credible calm",
  },
  dark: {
    zh: "；黑暗情绪必须保留可识别风险、异常规则或未知空间，利用局部遮挡、受限视野、冷暖断裂和线索出现顺序制造不安，暗部仍能读出结构。避免单纯压黑、血腥惊吓、怪物随意出现、满屏绿雾、主体不可见或把悬疑直接做成恐怖片",
    en: "; dark emotion must retain an identifiable risk abnormal rule or unknown space, using partial occlusion restricted visibility interrupted temperature and the order in which clues appear to create unease while structural information remains readable in shadow. Avoid merely crushing exposure gore or jump-scare imagery arbitrary monsters green fog everywhere invisible subjects or converting every suspenseful situation directly into horror",
  },
  dramatic: {
    zh: "；戏剧强度来自尺度差、明确轴线、即将完成的动作和具有方向的光，而不是所有元素同时夸张；人物重心、风向、尘雾和衣物响应应支持同一力量。避免无来源风暴、悬浮英雄、满屏金光、宗教符号混搭、极端仰角滥用或宏大却没有事件焦点",
    en: "; derive dramatic intensity from scale contrast a legible axis imminent action and directional light rather than exaggerating every element at once, making body weight wind dust and clothing response support the same force. Avoid source-free storms floating heroes gold light everywhere mixed religious symbols habitual extreme low angles or grandeur with no event focus",
  },
  romantic: {
    zh: "；浪漫由双方距离、互相回应的视线与手势、共享环境线索和克制的私密空间形成，可保留犹豫、错过或未说出口的张力。避免粉紫滤镜、花瓣爱心堆砌、双方像广告模特摆拍、过度磨皮、强行亲密或把任何双人画面自动处理成婚礼",
    en: "; build romance through interpersonal distance reciprocated gaze and gesture shared environmental clues and restrained private space, allowing hesitation missed timing or unspoken tension to remain. Avoid pink-purple filtering piles of petals and hearts advertising-model poses over-smoothed skin forced intimacy or automatically turning every two-person image into a wedding scene",
  },
  lonely: {
    zh: "；孤独与告别以人物和环境的尺度差、被中断的同行路径、未被占用的位置或逐渐拉远的交通线索表达，同时给人物保留尊严和具体行动。避免永远低头哭泣、全局冷蓝、空场无叙事、雨滴贴图重复、把孤独等同于危险或用巨大留白掩盖构图失衡",
    en: "; express loneliness and farewell through subject-to-environment scale interrupted shared paths an unoccupied place or transport clues receding with distance while preserving dignity and a concrete action. Avoid constant bowed-head crying a global cold-blue cast empty space with no narrative repeated rain overlays loneliness equated with danger or huge blank fields used to hide an unbalanced composition",
  },
  surreal: {
    zh: "；超现实只改变一到两个清楚规则，并让重力、尺度、反射或空间连接在整幅画面中持续一致；人物必须以动作回应异常。避免随机漂浮物、无关联梦境符号、所有透视同时失效、柔雾遮盖逻辑、知名超现实作品复制或把奇怪元素堆积当作潜意识",
    en: "; alter only one or two legible rules and keep gravity scale reflection or spatial connection consistently changed across the image, requiring figures to respond physically to the anomaly. Avoid random floating objects unrelated dream symbols every perspective system failing simultaneously soft haze hiding logic copies of famous surreal works or piles of strange elements presented as subconscious meaning",
  },
  luxury: {
    zh: "；奢华感来自稀缺材料、精确接缝、克制陈列、充足空间和有依据的高光，服务动作从容但不僵硬；金属、玻璃、织物和皮革保持不同反射。避免黑金模板、满屏水晶、伪品牌、镜面塑料、无来源轮廓光、所有表面同时发亮或把昂贵感等同于装饰密度",
    en: "; derive luxury from scarce material precise joins restrained display generous space and justified highlights, with composed service or human action that does not become stiff, preserving distinct reflection for metal glass textile and leather. Avoid generic black-and-gold templates crystal everywhere fake brands mirror plastic source-free rim light every surface shining at once or cost signaled only through decorative density",
  },
};

const colorGradingBaseGuidance = {
  zh: "；先以正确曝光、白平衡和中性参考建立基础，再分别控制黑位、阴影、中间调、高光肩部、色温、色偏与局部色相，所有调整都应服从原场景光源和材质反射。人物肤色、白色物体和产品标准色作为保护锚点，局部蒙版边缘自然，颗粒、晕光、锐化或降噪只在成像机制需要时加入；同一组图片保持镜头间曝光与色彩连续。避免一键 LUT 覆盖、直方图两端剪切、HDR 光晕、阴影泛青、肤色橙红、白色染色、天空色阶断裂、边缘过锐、降噪蜡化或用全局滤镜掩盖原图光线错误",
  en: "; establish a correct exposure white balance and neutral reference before shaping black point shadows midtones highlight shoulder temperature tint and local hue independently, with every adjustment following the original light sources and material reflections. Protect skin white objects and known product colors as anchors, feather local masks naturally and introduce grain halation sharpening or denoising only when the intended imaging process requires them. Maintain shot-to-shot exposure and color continuity across a set. Avoid one-click LUT coverage clipped histogram ends HDR halos cyan-contaminated shadows orange-red skin tinted whites banded skies oversharpened edges waxy denoising or a global filter used to hide incorrect original lighting",
};

const retouchBaseGuidance = {
  zh: "；采用局部、可逆和小幅度修整，先确认需要处理的是临时干扰还是人物身份特征，再保持五官比例、骨相、年龄、体型、关节位置、发际线和皮肤真实纹理。修复区域的毛孔频率、绒毛、褶皱、受光、透视和背景直线必须与周围连续，并在正常观看尺寸下自然，而不是只在放大状态下平滑。避免未经要求改变身份、过度年轻化、液化背景、左右完全对称、塑料皮肤、重复修补纹理、模糊补丁、锐利剪贴边、身体结构改变或把真实而无害的特征当作必须消除的缺陷",
  en: "; make local reversible low-amplitude corrections after distinguishing a temporary distraction from an identity-defining feature, preserving facial proportions bone structure age body type joint placement hairline and authentic skin texture. Match pore frequency peach fuzz folds illumination perspective and background lines across every repaired region so the result appears natural at ordinary viewing size rather than merely smooth under magnification. Avoid unsolicited identity change implausible de-aging liquified backgrounds perfect bilateral symmetry plastic skin repeated healing texture blurred patches sharp pasted edges altered anatomy or treating harmless real characteristics as defects that must be erased",
};

const colorGradingGuidanceByGroup: Record<string, { zh: string; en: string }> = {
  "camera-look": {
    zh: "；用传感器或胶片响应、动态范围、镜头微对比、色彩分离和闪光衰减体现具体成像气质，不能只增加边框与噪点。保留拍摄时的焦点和曝光逻辑，避免伪相机水印、品牌标志、所有镜头同一色偏、数字锐化冒充解析力或把画质下降当作复古",
    en: "; express the capture character through sensor or emulsion response dynamic range lens microcontrast color separation and flash falloff rather than borders and noise alone. Preserve the original focus and exposure logic, avoiding fake camera watermarks brand marks one identical cast on every lens digital sharpening presented as resolving power or general quality degradation used as shorthand for vintage capture",
  },
  "clean-bright": {
    zh: "；提亮以面部和主体中间调为中心，白色背景仍保留层次，高光柔和滚降，阴影轻而不灰，低饱和颜色之间有清楚分离。避免背景纯白吞边、肤色粉白、黑位全部抬平、柔焦覆盖眼睛、粉彩污染中性色或以过曝制造清透感",
    en: "; lift the image around subject and facial midtones while retaining structure in white backgrounds, using a soft highlight rolloff light but non-gray shadows and clean separation among low-saturation colors. Avoid pure-white backgrounds erasing edges pink-white skin fully lifted blacks diffusion covering eyes pastel contamination of neutrals or overexposure used as a shortcut for airiness",
  },
  "film-vintage": {
    zh: "；按照负片、反转片、银盐或即时成像的不同曲线设计趾部、肩部、色层偏移、颗粒尺寸和高光溢出，并让磨损程度符合保存年代。避免所有胶片统一黄绿、随机划痕漏光、颗粒覆盖纯色区、边框伪造、黑位脏灰或把具体胶片语言简化成通用褪色滤镜",
    en: "; design toe shoulder dye-layer shift grain scale and highlight bloom according to whether the reference is negative slide silver-gelatin or instant imaging, with wear proportional to storage age. Avoid making every film yellow-green random scratches and light leaks grain covering flat fields fabricated borders muddy gray blacks or reducing a specific photochemical language to one generic faded filter",
  },
  "drone-aerial": {
    zh: "；依据拍摄高度校正空气雾霾、远近色温、地表反射和水体偏振，保留道路、屋顶、植被与地形的真实尺度和材质差异；天空与地面亮度平衡但不做伪 HDR。避免地平线光晕、阴影发黑、森林荧光绿、水体统一青蓝、沙雪过曝、锐化建筑锯齿或把俯拍几何误当无人机调色",
    en: "; correct atmospheric haze distance-dependent temperature ground reflection and water polarization according to capture altitude while preserving true scale and material differences among roads roofs vegetation and terrain, balancing sky and land without synthetic HDR. Avoid horizon halos blocked shadows fluorescent forests uniformly cyan water clipped sand or snow jagged sharpened buildings or treating any top-down geometry as a complete drone color grade",
  },
  cinematic: {
    zh: "；先定义场景主光、实用灯和叙事焦点，再用受控对比、冷暖分离和亮度层级完成镜头匹配；黑位保持空间信息，高光保留光源颜色，不同肤色均自然。避免青橙一键套色、无来源轮廓光、夜景霓虹染白眼、每个镜头对比不同、阴影堵死或把电影感等同于上下黑边",
    en: "; define key light practical sources and narrative focus before using controlled contrast temperature separation and luminance hierarchy for shot matching, retaining spatial information in blacks source color in highlights and natural rendering across different skin tones. Avoid a one-click teal-orange split source-free rim light neon tinting eye whites inconsistent contrast between shots crushed shadows or equating cinematic grading with letterbox bars",
  },
  mood: {
    zh: "；色调必须从天气、时段、室内光源或叙事状态获得依据，主色只占据对应受光或环境区域，中性色与肤色提供稳定参照。避免全图单色覆盖、情绪与事件无关、冷色等于悲伤暖色等于快乐的机械映射、黑位染色、饱和度平均下降或莫兰迪变成灰褐一片",
    en: "; ground the color mood in weather time of day practical interior light or narrative state, restricting the principal hue to corresponding illumination and environmental regions while neutrals and skin provide stable references. Avoid monochrome coverage emotion disconnected from events mechanical cold-equals-sad and warm-equals-happy mapping tinted blacks uniform saturation reduction or Morandi treatment collapsing into undifferentiated gray-brown",
  },
  commercial: {
    zh: "；先锁定交付平台、商品标准色和目标受众，主体边缘、标签、材质光泽与背景分离均服务真实展示；美食保留食材质感，珠宝控制高光形状，家居维持木材织物中性。避免虚构包装文字、品牌色漂移、产品悬浮、白底吞边、食品过橙、珠宝爆点过多或社媒高饱和污染肤色",
    en: "; lock delivery platform known product color and audience first, making subject edges labels material sheen and background separation serve truthful presentation. Preserve ingredient texture in food, shape specular highlights on jewelry and maintain neutral timber and textile in furniture. Avoid invented packaging copy shifted brand color floating products white backgrounds swallowing edges overly orange food excessive jewelry sparkle or social-media saturation contaminating skin",
  },
  "skin-detail": {
    zh: "；只处理指定的局部色差、临时瑕疵或过强反光，修复边缘沿皮肤曲率和毛孔方向过渡，并保留自然红润、细纹、痣、雀斑及年龄信息，除非用户明确要求调整。避免整脸频率分离抹平、肤色漂白、左右复制皮肤、眼周失去结构、毛孔消失或把医学状况擅自美化和消除",
    en: "; address only the specified local discoloration temporary blemish or excessive reflection, blending along skin curvature and pore direction while retaining natural circulation fine lines moles freckles and age information unless the user explicitly requests change. Avoid flattening the whole face with frequency separation bleaching skin copying texture bilaterally erasing eye structure removing every pore or cosmetically altering a medical condition without instruction",
  },
  "portrait-retouch": {
    zh: "；几何调整限制在镜头畸变、姿势挤压或短暂衣物问题造成的小范围偏差，变形时同步保护背景线条、图案、首饰、衣缝和肢体关节；清理背景后补回正确透视与噪点。避免尖下巴、拉长四肢、机械挺胸、牙眼荧光、头发头盔边、服装纹理融化或让修图结果脱离本人特征",
    en: "; limit geometric correction to small deviations caused by lens distortion pose compression or temporary garment issues, protecting background lines patterns jewelry seams and limb joints through every warp and restoring correct perspective and noise after cleanup. Avoid pointed chins elongated limbs mechanically forced posture fluorescent teeth or eyes helmet-like hair edges melted fabric texture or a retouched result that no longer resembles the person",
  },
};

const styleGroupCorrections: Record<string, string> = {
  "style-risograph": "craft-print",
  "style-screenprint": "craft-print",
  "style-linocut": "craft-print",
  "style-stained-glass": "craft-print",
  "style-child-crayon": "craft-print",
  "style-marker-rendering": "craft-print",
  "style-airbrush-illustration": "craft-print",
};

const visualStyleBaseGuidance = {
  zh: "；先把该风格落实为可观察的制作或成像机制，再依次说明主体轮廓、形体概括、边缘语言、空间深度、光线、色层、材质响应和最终表面，不以风格名称本身代替画面描述。若与其他风格混用，必须指定一个主风格和一个只负责局部的辅风格，并保持人物、建筑和道具在同一视觉规则内；主体身份、动作和功能结构优先于装饰。避免复制知名作品、角色、签名或品牌，避免伪文字、媒介互相矛盾、随机滤镜、纹理覆盖主体、局部精细度不一致、只靠配色冒充风格以及把多个年代和地域符号无依据拼在一起",
  en: "; translate the style into an observable production or imaging mechanism, then define subject silhouette form simplification edge language spatial depth illumination color layers material response and final surface rather than relying on the style name itself. When combining styles, establish one primary language and one secondary language limited to a specific region or function, keeping figures architecture and props within the same visual rules while subject identity action and functional structure take priority over decoration. Avoid copies of famous works characters signatures or brands pseudo-writing contradictory media random filtering texture covering the subject inconsistent local detail color alone used as proof of style or unsupported mixtures of periods and regions",
};

const visualStyleGuidanceByGroup: Record<string, { zh: string; en: string }> = {
  "photo-film-3d": {
    zh: "；明确是实拍摄影、电影剧照、监控成像、微缩特摄还是三维制作，并据此固定镜头高度、焦段、快门或帧感、景深、光源尺寸和物理尺度。摄影保留传感器与镜头特征，微缩模型保留比例线索，3D 保持拓扑、粗糙度和接触阴影一致。避免把所有写实风格统一成电影青橙、监控画面过度清晰、微缩场景无尺度参照、3D 塑料化、无来源轮廓光或后期虚化冒充光学景深",
    en: "; specify whether the image is live photography a film still surveillance capture practical miniature or 3D production and set camera height focal length shutter or frame character depth of field source size and physical scale accordingly. Photography retains sensor and lens behavior, miniatures retain scale evidence, and 3D maintains coherent topology roughness and contact shadow. Avoid forcing every realistic style into teal-orange cinema surveillance footage that is implausibly clean miniatures with no scale reference plastic 3D source-free rim light or post-production blur presented as optical depth of field",
  },
  anime: {
    zh: "；明确线稿粗细、赛璐璐或绘制层数、背景媒介、运动帧感和角色比例，重复人物在不同镜头中保持脸型、服装、发色与道具一致；动画特效沿动作方向和遮挡关系展开。避免复制版权角色、眼睛手指错位、每个面都使用渐变、线稿与厚涂冲突、背景突然照片写实、运动线无方向或二维角色产生塑料三维表面",
    en: "; define line weight cel or painted layer count background medium motion-frame character and figure proportion, preserving face clothing hair color and props for repeated characters across shots while animated effects follow action direction and occlusion. Avoid copyrighted character replicas displaced eyes or fingers gradients on every plane conflict between line art and heavy rendering suddenly photoreal backgrounds directionless speed lines or plastic 3D surfaces on an otherwise two-dimensional character",
  },
  "design-retro": {
    zh: "；先锁定设计年代、传播媒介与使用场景，用网格、几何、图像裁切、有限色盘和信息占位建立层级；复古效果来自当时真实印刷、屏幕或软件限制，实验性破格仍保留阅读入口。避免年代元素混杂、随机拼贴、假品牌和乱码、所有元素同权、装饰覆盖主体、数字噪点冒充印刷、霓虹渐变泛滥或仅降低分辨率制造复古感",
    en: "; lock the design period distribution medium and use case first, building hierarchy through grid geometry image crop limited palette and information placeholders. Retro character must arise from authentic print screen or software constraints of that period, and experimental rule-breaking must retain a reading entry. Avoid mixed-period motifs random collage fake brands and gibberish equal emphasis everywhere decoration covering the subject digital noise pretending to be print uncontrolled neon gradients or reduced resolution used as the sole evidence of retro design",
  },
  "craft-print": {
    zh: "；明确基底材料、工具、制作顺序、颜料或纤维如何附着，以及压印、刻痕、针脚、接缝、烧制或干燥留下的边界；工艺细节随实际尺度变化并尊重重力、厚度和受力。避免把工艺做成平面滤镜、重复贴图、无材料来源的纹理、所有边缘同样粗糙、金属织物纸张反射一致、针脚不闭合、版画出现连续数码渐变或手工误差大到破坏主体识别",
    en: "; specify substrate tool sequence and how pigment fiber or material is attached, including boundaries left by impression carving stitch seam firing or drying. Craft detail must scale with the object and obey gravity thickness and structural load. Avoid reducing a process to a flat filter repeated texture marks with no material source equally rough edges identical reflection on metal textile and paper unclosed stitches continuous digital gradients in relief print or handmade variation so extreme that subject identity is lost",
  },
  eastern: {
    zh: "；先确定地域、年代、画科与载体，按真实笔墨、矿物颜料、木版套色、壁面层次或皮影分件建立语言；透视、留白、题材、服饰和建筑均服从同一文化语境。避免泛东方红金模板、汉唐宋明清混穿、不同国家纹样拼贴、满屏灯笼竹子、伪书法印章、壁画像现代数码插画、宗教图像娱乐化或把所有东亚绘画都处理成同一种水墨",
    en: "; specify region period pictorial genre and support before using authentic brush and ink mineral pigment multi-block printing wall layering or articulated shadow-puppet construction, keeping perspective negative space subject clothing and architecture within one cultural context. Avoid generic red-and-gold Oriental templates mixed Chinese dynasties collages of unrelated national motifs lanterns and bamboo everywhere pseudo-calligraphy and seals murals rendered like contemporary digital art casual treatment of sacred imagery or every East Asian tradition reduced to one ink-wash look",
  },
};

const artistCategoryCorrections: Record<string, { category: "ethnic-style"; styleGroup: string }> = {
  "artist-jian-tenmoku": { category: "ethnic-style", styleGroup: "traditional-craft" },
  "artist-jun-ware": { category: "ethnic-style", styleGroup: "traditional-craft" },
};

const artistStyleBaseGuidance = {
  zh: "；将名称转译为可观察的构图、比例、线条、笔触、色层、空间、光线和材料特征，不复制任何具体作品、标志性角色、签名、题字或独有构图。先指定主体与叙事目的，再选择最能体现该语言的二到四个核心机制，其余细节服从同一时代和媒介；人物身份、动作、器物结构与环境逻辑保持原创和可信。若引用艺术家，只表达公开可概括的历史视觉特征，不生成作品仿制品。避免只写姓名、堆砌代表符号、混合不相容画派、伪文字、随意老化、笔触贴图重复、局部精细度冲突、媒介表面错误或把艺术史风格降格成单一配色滤镜",
  en: "; translate the name into observable composition proportion line brushwork color layers space light and material characteristics without copying any specific artwork iconic character signature inscription or unique composition. Define subject and narrative purpose first, then select two to four core mechanisms that best express the language while every other detail obeys the same period and medium, preserving original credible identity action object structure and environment. When an artist is referenced, use only broadly describable historical visual traits rather than producing a replica. Avoid relying on the name alone piles of signature motifs incompatible schools pseudo-writing arbitrary aging repeated brush textures conflicting local detail incorrect medium surfaces or an art-historical language reduced to one color filter",
};

const artistStyleGuidanceByGroup: Record<string, { zh: string; en: string }> = {
  "renaissance-baroque": {
    zh: "；以稳定几何、可信人体与衣褶、分层罩染、局部明暗和有来源的室内或天光建立古典体积，背景建筑与器物符合时代。避免蜡像皮肤、姿势僵硬、所有区域同等昏暗、宗教符号混用、现代物件穿帮或仅靠棕金色调冒充古典油画",
    en: "; build classical volume through stable geometry credible anatomy and drapery layered glazing localized chiaroscuro and motivated interior or daylight, with architecture and objects appropriate to the period. Avoid waxy skin rigid posing equal darkness everywhere mixed sacred symbols modern intrusions or a brown-gold cast used as the only evidence of classical painting",
  },
  "impression-post": {
    zh: "；从具体时段、天气和观察距离出发，用并置色、断续笔触、色块结构或点彩表现光如何改变物体，不让笔触破坏主体识别。避免复制睡莲、星空等著名母题、全图旋涡、五色同亮、数字模糊冒充空气或把任何风景简单加颗粒称作印象派",
    en: "; begin with a specific time weather and viewing distance, using juxtaposed color broken brushwork structural planes or pointillist marks to show how light changes objects without destroying subject recognition. Avoid copies of famous water-lily or starry motifs swirls everywhere every hue equally bright digital blur standing in for atmosphere or any landscape with grain labeled Impressionist",
  },
  "decorative-illustration": {
    zh: "；让轮廓、边框、植物曲线、金属色或重复纹样服务主体姿态与信息层级，装饰密度在焦点周围收放并尊重真实印刷或镶嵌材料。避免纹样铺满人物面部、金色无光源、边框压住主体、花卉重复贴图、伪海报文字或把新艺术、装饰艺术和民艺花纹混成一套",
    en: "; make contour border botanical curves metallic color and repeating motif support subject pose and information hierarchy, modulating ornament density around the focal point while respecting actual print or inlay material. Avoid patterns covering faces source-free gold borders crushing the subject repeated floral texture pseudo-poster copy or Art Nouveau Art Deco and folk ornament merged indiscriminately",
  },
  "modern-avantgarde": {
    zh: "；先明确要改变的是透视、形体分解、色域、几何秩序、动作轨迹还是材料行为，并让这一形式规则贯穿整幅画面；随机性也必须有尺度和密度控制。避免无目的几何堆砌、所有规则同时失效、颜料飞溅遮住主体、现代主义流派互混或只用红黄蓝黑制造先锋感",
    en: "; specify whether the intervention concerns perspective fragmentation color field geometric order movement trace or material behavior and carry that formal rule across the entire image, controlling scale and density even when chance is involved. Avoid purposeless geometry every rule failing simultaneously paint splatter obscuring the subject mixed modernist movements or red yellow blue and black used alone as proof of an avant-garde language",
  },
  "surreal-symbolic": {
    zh: "；建立一个清楚的悖论、象征关系或不可能物理规则，并让光线、重力、反射和人物反应持续支持它；象征物数量克制且与主题有关。避免随机漂浮物、著名钟表或苹果等母题复制、柔雾掩盖逻辑、所有物体尺度混乱或用奇怪元素堆积代替真正的概念",
    en: "; establish one legible paradox symbolic relation or impossible physical rule and make light gravity reflection and human response support it consistently, keeping symbolic objects few and relevant to the theme. Avoid random floating items copies of famous clock or apple motifs haze concealing logic universal scale confusion or a pile of strange objects substituted for an actual concept",
  },
  "east-asian": {
    zh: "；锁定地域、年代、画科和纸绢墙面等载体，以真实用笔、墨色层次、矿物颜料、界线或卷轴阅读方向组织空间，服饰建筑与器物保持同一语境。避免伪书法印章、朝代混穿、泛东方红金、竹子灯笼堆砌、不同国家绘画体系混合或把全部东方艺术处理成同一种水墨留白",
    en: "; lock region period genre and support such as paper silk or wall, organizing space through authentic stroke behavior ink value mineral pigment ruled line or scroll reading direction while clothing architecture and objects share one context. Avoid pseudo-calligraphy and seals mixed dynasties generic red-and-gold Oriental styling bamboo and lantern piles blended national traditions or every East Asian art form reduced to one ink-and-whitespace treatment",
  },
  "american-pop": {
    zh: "；通过丝网套色、漫画网点、粗轮廓、重复模块或街头书写建立大众媒介感，主体必须原创且不出现可识别商品商标；重复与错版有明确节奏。避免复制著名名人肖像或罐头、品牌标志、所有颜色同饱和、网点覆盖五官或将波普简化为高饱和卡通滤镜",
    en: "; establish mass-media language through screenprint layers comic halftone bold contour repeated modules or street-written marks while keeping the subject original and free of recognizable product trademarks, with repetition and misregistration following a deliberate rhythm. Avoid famous celebrity or package replicas brand logos equal saturation everywhere halftone covering facial structure or pop reduced to a high-saturation cartoon filter",
  },
  "international-illustration": {
    zh: "；先确定出版年代、读者和印刷限制，再以线描、水粉、钢笔排线、孔版或有限色盘完成叙事，主体动作和道具关系在缩小尺寸下仍清楚。避免复制经典书封、把异域题材刻板化、细节密度无主次、边缘全部描黑或让印刷肌理压过故事",
    en: "; define publication era audience and reproduction constraint before building the narrative through line gouache pen hatching stencil or a limited palette, keeping action and prop relationships legible at reduced size. Avoid copies of classic covers stereotyped exotic subjects detail with no hierarchy every edge outlined in black or print texture overpowering the story",
  },
  "editorial-graphic": {
    zh: "；围绕一个观点建立视觉隐喻，以清楚剪影、有限元素和可留出标题的结构快速传达概念，线条、拼贴或色块只承担必要信息。避免直译每个词、符号堆砌、文字成为主体、隐喻与主题无关、拼贴来源混乱或缩略图尺寸下失去识别",
    en: "; build one visual metaphor around a point of view, communicating it quickly through a clear silhouette limited elements and a structure that leaves room for a headline while line collage or color blocks carry only necessary information. Avoid literal illustration of every word symbol piles typography becoming the subject unrelated metaphor incoherent collage sources or loss of recognition at thumbnail size",
  },
  "childrens-picturebook": {
    zh: "；先确定目标年龄、阅读距离和页面情绪，用可辨角色轮廓、清楚动作、友好色彩和有节奏的背景细节支持翻页叙事；危险情节保留安全边界。避免复制知名角色、婴幼儿化所有题材、人物比例在页面间跳变、表情僵硬、背景过密或用糖果色取代真正的故事",
    en: "; define target age reading distance and page emotion, supporting page-turn narrative with recognizable character silhouettes clear action approachable color and rhythmically controlled background detail while keeping danger age-appropriate. Avoid famous character replicas infantilizing every subject changing proportions between pages rigid expressions overloaded backgrounds or candy color substituted for an actual story",
  },
  "folk-global": {
    zh: "；必须注明具体社区、地域、年代与载体，遵循当地绘画、染织、雕刻或仪式物件的真实构造和颜色来源；只选与主题相关的纹样。避免把多个文化拼成泛异域风、神圣符号装饰化、服饰支系混用、伪文字、霓虹化传统色或用单一图腾代表整个民族",
    en: "; specify the community region period and support, following the actual construction and color sources of its painting textile carving or ceremonial object and selecting only motifs relevant to the subject. Avoid combining cultures into a generic exotic style sacred signs used casually as decoration mixed garment branches pseudo-writing neon traditional color or one emblem presented as an entire people",
  },
  "poster-print": {
    zh: "；按真实制版、套色、网点、压印和纸张吸墨建立海报语言，主图、标题占位和信息区在远看时层级明确，并保留裁切出血。避免伪政治口号、乱码大字、套印偏差破坏轮廓、纹理满版、不可印刷渐变、复古污渍平均分布或复制历史宣传画构图",
    en: "; build poster language through plausible plate making color separation halftone impression and paper absorption, keeping hero image headline placeholder and information zone clearly ranked at viewing distance with proper bleed. Avoid fake political slogans gibberish display type registration error destroying contours texture everywhere unprintable gradients evenly distributed distress or copied historical propaganda compositions",
  },
  "comic-sequential": {
    zh: "；保持角色脸型服装、道具、光源和场景轴线跨格连续，用镜头距离、动作方向和格间节奏说明因果；对话框若无用户文字则保持为空。避免版权角色复制、左右方向跳变、同一动作重复、气泡乱码、速度线遮脸、每格背景完全不同或只画单幅海报却称作分镜",
    en: "; preserve character face clothing props light and scene axis across panels, using shot distance movement direction and gutter rhythm to explain causality while leaving speech balloons empty when no user copy is supplied. Avoid copyrighted character replicas left-right continuity jumps repeated identical action gibberish balloons speed lines covering faces unrelated backgrounds in every panel or a single poster image mislabeled as sequential art",
  },
};

const heritageCraftCorrectionGuidance = {
  zh: "；按真实陶土胎体、施釉厚薄、窑内温度和还原氧化气氛形成流釉、结晶、开片或窑变，器形、足底和断面保持陶瓷结构，高光随釉面曲率变化。避免把釉色做成数码渐变贴图、荧光金属、全器均匀纹样、无重力流动、伪古文字或用裂纹滤镜替代烧成机制",
  en: "; derive glaze flow crystal crazing and kiln variation from a real clay body glaze thickness firing temperature and reduction or oxidation atmosphere, preserving ceramic structure at vessel profile foot and fracture while highlights follow glaze curvature. Avoid digital gradient textures fluorescent metal uniform pattern across the vessel gravity-free flow pseudo-ancient writing or a crack filter substituted for firing behavior",
};

const ethnicStyleBaseGuidance = {
  zh: "；先明确具体民族、支系、地域、年代、日常或节庆语境以及图案所依附的服饰、建筑、器物或工艺载体，只选与该场景真实相关的两到四个视觉证据。人物保持自然个体差异和实际活动，不把民族身份等同于统一服装或性格；纹样、色彩、材料和空间结构必须能追溯到具体用途与制作方式。避免跨民族拼贴、把节庆盛装当作日常制服、夸张头饰银饰、神圣符号装饰化、伪文字、泛红金滤镜、旅游舞台摆拍、环境与气候错误或用单一图腾概括整个群体",
  en: "; specify the people community branch region period everyday or ceremonial context and the garment architecture object or craft support carrying the visual language, selecting only two to four pieces of evidence genuinely relevant to the scene. Preserve natural individual variation and real activity rather than equating identity with one uniform costume or personality, and make motif color material and spatial structure traceable to a specific use and production method. Avoid cross-ethnic collage festival dress treated as daily uniform exaggerated headdress and silver sacred signs used casually as decoration pseudo-writing generic red-gold filtering tourist-stage posing incorrect climate or environment and one emblem presented as an entire community",
};

const ethnicStyleGuidanceByGroup: Record<string, { zh: string; en: string }> = {
  "traditional-craft": {
    zh: "；按材料准备、成形、连接、上色或施釉、烧制固化和收尾顺序描述工艺，让铜丝、纤维、木竹、陶土、漆层、纸张与矿物颜料各自遵守厚度、重力、收缩和反射规律。避免平面滤镜冒充手作、步骤互相矛盾、纹理重复、所有材料同样光亮、工具痕无来源或用成品图案掩盖错误结构",
    en: "; describe the process in material preparation forming joining coloring or glazing firing or curing and finishing order, making wire fiber timber bamboo clay lacquer paper and mineral pigment obey their own thickness gravity shrinkage and reflection. Avoid flat filters pretending to be craft contradictory steps repeated texture every material equally glossy source-free tool marks or a finished motif used to conceal incorrect construction",
  },
  major: {
    zh: "；对汉族或苗族等覆盖地域广、内部差异大的条目，必须继续指定省域、支系和具体生活场景，再选择庭院、织染、刺绣或服饰中的一个主要载体。避免以单一宫廷、蜡染或银饰形象代表全部人群，也不要把不同地区习俗合成通用民族套装",
    en: "; for broad internally diverse identities such as Han or Miao, further specify province branch and concrete life setting before selecting one principal support such as courtyard textile dye embroidery or garment. Avoid allowing one courtly batik or silver-jewelry image to stand for every community or merging regional customs into a generic ethnic costume",
  },
  south: {
    zh: "；让湿热气候、河海交通、木石竹建筑、染织材料与当地生活方式共同支持华南语境，并区分沿海、山地和河谷支系；高饱和颜色集中在真实织物或节庆部位。避免热带植物乱加、所有建筑吊脚楼化、孔雀铜鼓等符号跨民族复用或将岭南少数民族统一成同一蓝染村寨",
    en: "; support southern context through humid climate river or maritime movement timber stone and bamboo construction textile materials and local daily practice, distinguishing coastal mountain and valley branches while concentrating vivid color on actual cloth or ceremonial areas. Avoid arbitrary tropical plants every building turned into a stilt house peacock or bronze-drum motifs reused across communities or all southern minorities reduced to one indigo village",
  },
  southwest: {
    zh: "；依据高原、峡谷、茶山或梯田等具体地形调整建筑、道路、材料和服饰层次，纹样与银饰必须绑定支系和身体部位；人物从事耕作、织造、交易或日常出行。避免所有场景雪山化、满身银饰、彩条纹通用化、神秘化叙事或把西南不同民族混成一个节庆队伍",
    en: "; adapt architecture routes material and garment layers to a specified plateau gorge tea mountain or terrace landscape, binding motif and silverwork to a particular branch and body placement while people farm weave trade or travel in daily life. Avoid snow mountains everywhere silver covering every body generic rainbow stripes mystical framing or different southwestern communities merged into one festival procession",
  },
  northwest: {
    zh: "；按草原、绿洲、戈壁或帕米尔等环境确定毡、毛织、木石、金属与服装保暖结构，几何和植物纹样服从真实载体及宗教边界。避免沙漠滤镜覆盖所有地区、帐篷骆驼泛用、异域化眼神、满屏金色、不同语言伪文字或把草原与绿洲服饰互换",
    en: "; determine felt wool timber stone metal and thermal garment construction from a specified steppe oasis desert or Pamir environment, keeping geometric and botanical motifs tied to real supports and religious boundaries. Avoid one desert filter for every region generic tents and camels exoticized expressions gold everywhere pseudo-writing in unrelated languages or interchange of steppe and oasis clothing",
  },
  northeast: {
    zh: "；以森林、河谷、渔猎、寒地农业或木屋聚落中的具体一项建立东北语境，桦皮、鱼皮、皮毛、织物和木构按季节与用途出现。避免所有人物穿厚皮草、驯鹿和雪景泛滥、俄式与满族装饰混用、狩猎刻板化或忽略现代日常生活",
    en: "; establish northeastern context through one specific forest river fishing hunting cold-climate farming or timber-settlement situation, introducing birch bark fish skin fur textile and wood according to season and function. Avoid heavy fur on everyone reindeer and snow everywhere mixtures of Russian and Manchu ornament hunting stereotypes or erasure of contemporary daily life",
  },
  island: {
    zh: "；区分海岛沿岸、山地聚落与不同支系，以湿热气候、海陆资源、植物纤维、织机结构和真实染料建立材料逻辑；人形纹与色带只出现在对应织物部位。避免泛波利尼西亚图腾、沙滩椰树模板、所有服饰彩虹化或把高山族和黎族纹样互换",
    en: "; distinguish island coast mountain settlement and community branch, building material logic from humid climate marine and land resources plant fibers loom structure and authentic dyes while human figures and color bands stay on their proper textile zones. Avoid generic Polynesian emblems beach-and-palm templates rainbow clothing everywhere or interchange of Gaoshan and Li motifs",
  },
  "pattern-craft": {
    zh: "；先拆解母题单元、正负形、对称方式、重复方向、边饰和主纹比例，再将纹样准确放到衣襟、织带、毯面、陶器或建筑构件上，随曲面和接缝发生合理变形。避免把纹样铺满所有表面、单元被截断、镜像文字、不同民族纹样混排、无缝贴图重复感或脱离载体单独悬浮",
    en: "; decompose motif unit positive-negative space symmetry repeat direction border and primary-to-secondary ratio before placing the pattern accurately on placket band rug ceramic or architectural member, allowing credible deformation across curves and seams. Avoid covering every surface cut motif units mirrored writing mixed community patterns obvious seamless tiling or ornament floating without a support",
  },
};

const purposeBaseGuidance = {
  zh: "；先确认最终交付平台、画幅方向、成品尺寸、观看距离和是否需要文字，再按该用途安排一个清楚的第一视觉、必要的第二信息层和可安全裁切的边缘。主体数量、朝向、动作、留白和背景复杂度必须服务实际使用，不把用途名称当作风格滤镜；系列图片保持人物、商品、色彩、镜头高度和版式规则一致。文字未由用户提供时只预留干净区域，不生成乱码、伪品牌、虚假参数或不可核实信息。输出前检查主体完整、关键结构可读、图文不冲突、缩小后仍能识别，并为横竖版、圆形头像或多端裁切保留安全区。避免装饰压过功能、所有信息同权、主体贴边、关节或产品边缘被裁、背景喧宾夺主、错误透视、虚假材质、无意义徽标、水印、模板化排版以及为了填满画面擅自增加内容",
  en: "; define the final delivery platform orientation finished dimensions viewing distance and whether real copy is required, then organize one clear primary focal point a necessary secondary information layer and crop-safe outer margins for that use. Subject count direction action negative space and background complexity must serve the actual deliverable rather than treating the use-case name as a visual filter, and a series must preserve character product color camera height and layout rules. When the user has not supplied copy, reserve a clean text zone instead of generating gibberish fake brands invented specifications or unverifiable claims. Before output verify complete subjects readable functional structure non-conflicting image and type recognition at reduced size and safe areas for landscape portrait circular-avatar or multi-device crops. Avoid decoration overriding function equal emphasis everywhere edge collisions cropped joints or product boundaries competitive backgrounds incorrect perspective false material meaningless badges watermarks generic templates or invented content added merely to fill space",
};

const purposeGuidanceByGroup: Record<string, { zh: string; en: string }> = {
  photography: {
    zh: "；把结果当作可由真实摄影完成的一次拍摄：先确定摄影对象、地点、时间、相机高度、焦段、快门需求、景深和主光来源，再保留真实比例、皮肤或表面纹理、接触阴影和环境反射。纪实用途不摆拍改写事件，档案与商品记录保持颜色、尺寸和损耗可信，人像保留本人身份与年龄特征。避免多余肢体、重复人物、过度磨皮、无来源轮廓光、HDR 光晕、背景液化、物体悬浮、不同镜头物理规律冲突或把写实照片做成电影海报",
    en: "; treat the result as one photograph that could credibly be captured, defining subject location time camera height focal length shutter requirement depth of field and motivated key light before preserving real proportion skin or surface texture contact shadow and environmental reflection. Documentary uses must not restage or rewrite the event, archive and listing uses must retain truthful color dimension and wear, and portraits must preserve identity and age characteristics. Avoid extra limbs duplicated people excessive skin smoothing source-free rim light HDR halos warped backgrounds floating objects conflicting physical behavior across lenses or a realistic photograph reformatted as a cinematic poster",
  },
  cover: {
    zh: "；先定义封面或海报的发行载体、书脊或裁切方向、标题区、作者或副标题区和远看识别目标，以一个主图承担主题，次要元素只负责节奏与语境。标题和标识均使用占位区，保证高对比、可读行长、出血和装订安全；图像需同时支持缩略图与近看细节。避免把正文塞进主视觉、字体压住脸和关键物体、标题区被纹理破坏、上下半区机械拼接、伪文字、每处都做焦点或用电影光效掩盖缺乏概念",
    en: "; define publication medium spine or crop direction title zone author or subtitle zone and distance-recognition goal, allowing one hero image to carry the theme while secondary elements provide only rhythm and context. Treat title and identity marks as placeholders with sufficient contrast readable line length bleed and binding safety, and make the image work both as a thumbnail and under close inspection. Avoid body copy forced into the key visual type covering faces or functional objects texture destroying the title zone mechanical top-bottom assembly pseudo-writing focal emphasis everywhere or cinematic effects used to conceal the absence of a concept",
  },
  commercial: {
    zh: "；锁定商品或服务、目标消费者、销售渠道、唯一主卖点和必须保真的标准色、标签、形状与比例；使用光线和视角解释材质、尺度、使用方式和包装层级。电商图为价格、规格与行动按钮预留真实信息位，多图组合统一 SKU、道具、阴影方向和背景。前后对比必须同机位同光线并明确变化对象。避免虚构商标和功效、包装文字乱码、产品变形或重复、白底吞边、反射不真实、食品不可食、珠宝爆点遮细节、过度饱和和误导性对比",
    en: "; lock the product or service target customer sales channel single principal benefit and every color label shape and proportion that must remain truthful, using light and viewpoint to explain material scale use and packaging hierarchy. E-commerce imagery reserves real information zones for price specification and action, while multi-image sets keep SKU props shadow direction and background consistent. Before-and-after comparisons require the same camera and light with the changed variable identified. Avoid invented trademarks or performance claims gibberish packaging copy distorted or duplicated products white backgrounds erasing edges implausible reflections inedible food sparkle hiding jewelry detail excessive saturation and misleading comparisons",
  },
  design: {
    zh: "；把结果作为可交付给制作、建模或评审的设计资料，先定义比例、视图数量、正投影或透视规则、标注层级、材质说明和需要保持一致的版本。三视图与拆解图共享同一尺度和结构，信息图只展示可验证数据，刀模、平面图、纹理与精灵图遵守对应技术边界；展示效果图与技术图不得混为一张。避免视图互相矛盾、零件缺失、尺寸编造、线宽失序、透明底伪棋盘、无缝贴图接缝、PBR 通道混淆、界面控件不可用或用漂亮渲染掩盖结构错误",
    en: "; treat the output as design material that can be handed to fabrication modeling or review, defining scale view count orthographic or perspective convention annotation hierarchy material notes and versions that must remain consistent. Turnarounds and exploded views share one scale and structure, infographics show only verifiable data, and dielines plans textures and sprite sheets obey their own technical boundaries; presentation renders and technical drawings must not be conflated in one sheet. Avoid contradictory views missing parts invented dimensions disordered line weights fake checkerboards for transparency visible seams in tileable maps confused PBR channels unusable interface controls or attractive rendering used to conceal structural errors",
  },
  social: {
    zh: "；先确定具体平台与桌面、移动端或圆形裁切方式，以缩略图尺寸仍清楚的单一轮廓、面部或图标建立识别，并把文字和关键信息放在所有裁切都安全的中央区域。轮播图保持封面、内容页和结尾页的网格与色彩连续，贴纸与图标需有统一边缘、透明背景和小尺寸测试。避免角落文字被界面遮挡、头像裁掉下巴或头顶、复杂背景影响识别、每页风格跳变、表情和人物身份不一致、图标细线消失或直接复用横版海报而不重排",
    en: "; specify the platform and desktop mobile or circular crop behavior first, building recognition around one silhouette face or icon that remains legible at thumbnail size and keeping copy and critical information in a central zone safe across every crop. Carousel cover content and ending pages retain grid and color continuity, while sticker and icon sets share edge treatment transparency and small-size testing. Avoid corner copy hidden by interface chrome avatars cutting chin or crown complex backgrounds reducing recognition style changes between slides inconsistent expression or identity icon strokes disappearing or a landscape poster reused without recomposition",
  },
};

const renderBaseGuidance = {
  zh: "；先明确该项控制的是成像算法、材质着色、几何简化、后期表面还是特定年代的实时渲染限制，再固定相机尺度、光源尺寸、阴影类型、动态范围、色彩管理和最终输出媒介。几何、法线、粗糙度、金属度、透射、次表面、体积与接触阴影必须符合物体材料和物理尺度；风格化也要保持轮廓、遮挡、受光方向和角色跨镜头一致。只在该机制真正影响的区域增加特征，不把渲染器名称当作质量口号。避免无来源轮廓光、所有表面同样光亮、浮空接触、错误反射、塑料皮肤、锐化光晕、材质贴图拉伸、阴影穿模、景深遮住主体、噪点覆盖细节、伪文字、水印或把后期滤镜误称为渲染流程",
  en: "; identify whether the item controls an imaging algorithm material shading geometric simplification post-process surface or the real-time limitations of a particular era, then fix camera scale source size shadow model dynamic range color management and final output medium. Geometry normals roughness metallic response transmission subsurface volume and contact shadow must match material and physical scale, while stylization still preserves silhouette occlusion light direction and character continuity across shots. Apply the mechanism only where it can physically or graphically affect the image rather than using a renderer name as a quality slogan. Avoid source-free rim light identical gloss on every surface floating contact incorrect reflection plastic skin sharpening halos stretched maps shadow intersections depth of field hiding the subject noise covering detail pseudo-writing watermarks or a post filter mislabeled as a rendering pipeline",
};

const renderGuidanceByGroup: Record<string, { zh: string; en: string }> = {
  realism: {
    zh: "；以能量守恒和真实尺度建立写实结果：先设置主次光源与环境光，再让全局光、反射、折射、散射和景深由镜头与材质共同产生。高细节集中在焦点与近景，远处按像素覆盖和空气透视递减；实时引擎效果需说明是实时近似还是离线路径追踪。避免所有材质镜面化、玻璃无厚度、皮肤蜡感、光追反射无限清晰、路径追踪噪点、景深抠图边、开放世界截图缺少交互尺度或以“8K”代替可信细节",
    en: "; build realism from energy conservation and physical scale, establishing key fill and environmental illumination before allowing global light reflection refraction scattering and depth of field to arise jointly from lens and material. Concentrate high detail at the focal region and foreground, reducing it with pixel coverage and atmospheric perspective in distance, and distinguish real-time approximation from offline path tracing. Avoid every material becoming specular thicknessless glass waxy skin infinitely sharp ray-traced reflections path-tracing noise depth-of-field cutout edges open-world captures with no interaction scale or an 8K label substituted for credible detail",
  },
  stylized: {
    zh: "；先定义形体简化级别、轮廓曲率、边缘硬软、色阶数量和材质夸张规则，再让线稿、赛璐璐色块、纸层、陶土指痕、树脂半光或低模顶点结构贯穿主体与环境。风格特征随尺度变化：远景简化轮廓，近景展示真实制作痕迹。避免二维线稿与塑料三维混杂、纸艺无层厚、陶土纹理贴图重复、树脂玩具像真人皮肤、矢量图出现摄影噪点、微缩场景无比例参照或怀旧低模只靠降低分辨率",
    en: "; define form simplification silhouette curvature edge softness value-step count and material exaggeration before carrying line work cel blocks paper layers clay fingerprints resin semi-gloss or low-poly vertex structure through subject and environment. Style evidence changes with scale: distant forms simplify while close views reveal authentic making traces. Avoid mixing flat line art with plastic 3D paper craft without layer thickness repeated clay texture resin toys with human skin photographic noise in vector work miniatures without scale evidence or nostalgic low-poly treatment based only on reduced resolution",
  },
  technical: {
    zh: "；明确技术层的测量对象和色标、图例、通道或叠加顺序：热成像依据温差，线框依据真实拓扑，蓝图依据结构投影，摄影测量保留扫描误差与尺度，AO 只强化接触与凹部，HDR 保留高光肩部而非全局提亮。胶片颗粒、全息与早期实时渲染均遵循各自载体限制。避免伪数据、任意伪彩、线框穿透错误、AO 脏边、HDR 光晕、全息无投射源、程序纹理无尺度或把技术叠加层覆盖成装饰滤镜",
    en: "; define what the technical layer measures and the color scale legend channel or overlay order: thermal imaging follows temperature difference wireframe follows actual topology blueprint follows structural projection photogrammetry preserves scan uncertainty and scale AO reinforces only contact and recesses and HDR preserves a highlight shoulder rather than brightening everything. Film grain holography and early real-time rendering each obey the limitations of their carrier. Avoid fabricated data arbitrary false color incorrect hidden-line behavior dirty AO edges HDR halos holograms with no projector procedural texture without scale or a technical overlay spread across the image as decoration",
  },
};

const visualEffectBaseGuidance = {
  zh: "；先定义特效的物理或图形来源、发生时刻、运动方向、持续时间、遮挡关系和与主体的接触点，再决定亮度、透明度、粒子尺寸、衰减和景深；效果必须响应场景光、风、重力、表面碰撞与相机曝光，并只占据叙事需要的区域。人物面部、动作轮廓、产品结构和文字安全区始终可读。多种特效同时使用时只保留一个主效应，其余作为低强度辅助。避免无来源发光、粒子平均铺满、贴纸式烟火、轮廓穿透、透明层排序错误、特效遮脸、反射与环境不响应、所有颜色同时高饱和、随机镜头污渍、伪文字、水印或以特效数量替代画面重点",
  en: "; define the physical or graphic source event timing motion direction duration occlusion and contact point of the effect before setting luminance opacity particle scale falloff and depth of field. The effect must respond to scene light wind gravity surface collision and camera exposure and occupy only the region required by the narrative, while face action silhouette product structure and copy-safe zones remain readable. When several effects coexist retain one primary event and use the rest only as low-intensity support. Avoid source-free glow particles spread uniformly sticker-like smoke or fire contour penetration incorrect transparency order effects covering faces reflections and environment that do not react every hue at maximum saturation random lens dirt pseudo-writing watermarks or quantity of effects substituted for a focal idea",
};

const visualEffectGuidanceByGroup: Record<string, { zh: string; en: string }> = {
  "light-particle": {
    zh: "；光绘来自可见光源在曝光期间的连续移动，车辆或城市光轨沿真实路径延伸，粒子轨迹由离散粒子和生命周期构成，镜头眩光必须对应画内或画外强光，散景形状由光圈和失焦距离决定，棱镜折射遵循入射方向。避免光带无起止点、眩光与光源错位、散景覆盖焦点、闪粉大小一致、粒子不受透视或能量波纹没有传播中心",
    en: "; light painting comes from continuous movement of a visible emitter during exposure, vehicle or urban streaks follow real paths, particle trails consist of discrete particles with lifetimes, lens flare corresponds to a strong on- or off-frame source, bokeh shape follows aperture and defocus distance, and prism refraction follows incidence direction. Avoid light ribbons with no origin or endpoint flare misaligned with its source bokeh covering the focus identical sparkle size particles unaffected by perspective or energy ripples without a propagation center",
  },
  atmosphere: {
    zh: "；烟雾依据热源、风向、密度和空间体积发生卷吸、扩散与遮挡，热浪只在高温表面上方沿视线造成局部折射扰动；远近层级通过密度和对比递减表现。避免全屏灰雾、烟柱无来源、热扭曲覆盖冷区、主体边缘被均匀模糊、空气效果像平面透明贴图或暗部被烟雾彻底堵死",
    en: "; smoke entrains expands and occludes according to heat source wind density and spatial volume, while heat haze introduces local refractive disturbance only above a hot surface along the viewing path, with depth expressed through density and contrast falloff. Avoid full-frame gray fog source-free smoke columns heat distortion over cold regions uniformly blurred subject edges atmosphere resembling a flat transparent overlay or shadows completely blocked by smoke",
  },
  elemental: {
    zh: "；火焰沿燃料、氧气和上升气流变化并产生对应光照，电弧连接电势点并分叉衰减，水花从碰撞方向形成水膜与液滴，雨雪按风、快门和景深分层，余烬由热源抛出后冷却变暗。避免火不照亮环境、电弧悬空、水滴像玻璃珠、雨丝穿过遮挡物、雪花同尺寸同清晰度、火星逆重力或元素效果与人物衣物完全不互动",
    en: "; flame changes with fuel oxygen and rising flow while casting corresponding light, electric arcs connect potential points and branch with attenuation, splashes form sheets and droplets from collision direction, rain and snow layer according to wind shutter and depth, and embers dim as they cool after leaving a heat source. Avoid fire that does not illuminate its environment floating electrical arcs droplets like glass beads rain passing through occluders snowflakes identical in size and focus embers defying gravity or elemental effects that never interact with clothing and surfaces",
  },
  digital: {
    zh: "；色差只在镜头边缘或特定高反差区域产生不同色通道位移，数字故障则指定扫描线、块压缩、数据丢失、帧撕裂或同步错误中的一种主要机制，并尊重屏幕与编码结构。避免整幅 RGB 描边、随机彩条、五种故障叠加、人物五官错位不可读、真实物体无屏幕媒介却发生数字破损或把任何低清画面称作故障艺术",
    en: "; chromatic aberration displaces color channels only near lens edges or selected high-contrast boundaries, while digital glitch selects one principal mechanism such as scanline block compression data loss frame tearing or synchronization error and respects screen and codec structure. Avoid RGB outlines over the whole frame random color bars five glitch modes stacked together unreadable displaced facial features digital corruption on a physical scene with no display medium or any low-resolution image labeled glitch art",
  },
  dynamic: {
    zh: "；动作残影保留少量离散姿态说明路径，速度拖影沿加速方向产生受控拉伸，动态模糊依据快门时间对运动连续积分；主体至少保留一个清晰锚点，背景与相机运动采用一致方向。避免重复完整人物像克隆、所有边缘同样模糊、速度线方向冲突、脸和手失去结构、静止物体出现拖影或用模糊掩盖动作设计错误",
    en: "; motion afterimage keeps a few discrete poses that explain a path, speed ramping creates controlled directional stretch along acceleration, and motion blur continuously integrates movement over shutter time. Preserve at least one sharp anchor and keep background response consistent with camera motion. Avoid duplicated full figures resembling clones equal blur on every edge conflicting speed-line direction loss of facial and hand structure trails on stationary objects or blur used to conceal incorrect action design",
  },
  surreal: {
    zh: "；先设定一个清楚的超现实转换规则，例如曝光层叠、墨液扩散、纸层撕开、玻璃破裂、碎片漂浮或能量场，再让边缘、遮挡、阴影和材质全过程服从该规则。双重曝光控制两层亮度与负形，碎玻璃保留厚度和反射，撕纸显示纤维层。避免随机漂浮装饰、全部边缘发光、纸玻璃墨水材质混同、碎片穿过主体、能量光环像贴纸或多种转换互相争抢焦点",
    en: "; establish one legible surreal transformation rule such as exposure layering ink diffusion torn paper broken glass suspended fragments or an energy field, then make edge occlusion shadow and material behavior obey it throughout. Double exposure controls the luminance and negative space of two layers, shattered glass retains thickness and reflection, and torn paper reveals fiber layers. Avoid arbitrary floating decoration glow on every edge paper glass and ink sharing one material fragments passing through the subject sticker-like aura or multiple transformations competing for focus",
  },
};

const cameraGroupCorrections: Record<string, string> = {
  "camera-eye-level": "angle",
  "camera-shoulder-level": "angle",
  "camera-ground-level": "angle",
  "camera-crane-high-angle": "angle",
  "camera-surveillance-high": "angle",
};

const cameraBaseGuidance = {
  zh: "；先固定最终画幅、主体数量、观察对象、叙事重点和焦点位置，再明确这张卡只控制焦距、机位、观察方向、构图关系、人物位置、快门运动或光学效果中的一个变量；未被该卡控制的变量保持中性，避免多项设置互相覆盖。说明相机与主体的实际距离、镜头高度、水平与俯仰、画面边界、焦平面、运动方向和需要保留的视线或动作空间。人物比例、建筑垂直线、地平线、遮挡、接触点和前中后景必须符合透视与重力；多人场景保持身份、肢体、眼神和轴线连续。输出前检查头顶、手脚、关节、产品边缘和关键道具没有意外裁切。避免把焦距等同景别、用数码裁切冒充机位变化、无目的倾斜、广角拉伸面部、长焦压平所有层次、焦点漂移、越轴、悬浮人物、重复肢体、背景液化或为了套构图法则强行移动主体",
  en: "; fix final aspect ratio subject count observed object narrative priority and focus location first, then make this card control only one variable among focal length camera position viewing direction compositional relation figure placement shutter movement or optical effect while leaving uncontrolled variables neutral so settings do not overwrite one another. State real camera-to-subject distance lens height yaw and pitch frame boundary focal plane movement direction and required gaze or action space. Figure scale architectural verticals horizon occlusion contact and foreground-midground-background must obey perspective and gravity, while multi-person scenes preserve identity limbs eye lines and screen-axis continuity. Before output verify crown hands feet joints product edges and essential props are not accidentally cropped. Avoid equating focal length with shot size digital cropping presented as camera movement purposeless tilt wide-angle facial stretching telephoto flattening every layer drifting focus axis jumps floating figures duplicated limbs warped backgrounds or forcing a subject to move merely to satisfy a composition rule",
};

const cameraGuidanceByGroup: Record<string, { zh: string; en: string }> = {
  "focal-length": {
    zh: "；用传感器等效焦段、相机距离、视场角和透视关系定义镜头：超广角强调近大远小与边缘管理，35mm 保留环境，50mm 接近自然观察，85mm 与 135mm 通过后退距离获得人像分离，超长焦压缩远距离层次，微距说明放大倍率、工作距离和焦平面。保持同一景别时必须移动相机而非只裁切。避免鱼眼畸变误加到普通广角、长焦背景像平面贴图、微距景深覆盖整个物体或焦段标签与实际透视矛盾",
    en: "; define the lens through full-frame-equivalent focal range camera distance angle of view and perspective: ultra-wide emphasizes near-far scale with edge management, 35 mm retains environment, 50 mm approximates natural observation, 85 and 135 mm obtain portrait separation through greater distance, super-telephoto compresses remote layers, and macro specifies magnification working distance and focal plane. Maintaining the same framing requires moving the camera rather than merely cropping. Avoid fisheye distortion added to an ordinary wide lens telephoto backgrounds resembling flat backdrops macro depth covering the entire object or a focal-length label contradicted by perspective",
  },
  "lens-effect": {
    zh: "；让效果来自明确光学结构：鱼眼具有可预期曲线畸变，变形宽银幕有方向性散景和水平耀斑，移轴通过焦平面或透视校正，分焦镜同时维持近远两个焦区，焦点转移给出起止对象，变焦爆炸沿光轴辐射。避免在静态图中伪造无对象的焦点转移、光斑方向错误、所有直线随意弯曲、移轴只做饱和微缩滤镜或长焦压缩与实际相机距离不一致",
    en: "; derive the effect from a defined optical structure: fisheye has predictable curvilinear distortion anamorphic optics produce directional bokeh and horizontal flare tilt-shift changes focal plane or corrects perspective split diopter holds distinct near and far focus zones rack focus names origin and destination and zoom burst radiates along the optical axis. Avoid simulating a focus pull with no subject transition incorrect bokeh orientation arbitrarily curved lines tilt-shift reduced to a saturated miniature filter or telephoto compression inconsistent with camera distance",
  },
  angle: {
    zh: "；以镜头中心离地高度、俯仰角、水平线位置和视点载体定义机位，并说明该高度如何改变前景面积、人物权力感、遮挡和空间可读性。航拍、鸟瞰、吊臂、监控、俯拍和平铺保持不同高度与透视；第一人称和随身相机需出现合理身体、装备或运动线索。避免低机位等同仰拍、鸟瞰等同垂直平铺、航拍无尺度、监控机位电影化、POV 出现不可能身体关系或倾斜角度破坏地平线而无叙事原因",
    en: "; define viewpoint by lens-center height pitch horizon position and camera carrier, explaining how height changes foreground area perceived power occlusion and spatial readability. Aerial bird's-eye crane surveillance top-down and flat-lay views retain distinct altitude and perspective, while first-person and body-mounted views include plausible body equipment or movement evidence. Avoid treating low height as automatically upward-looking bird's-eye as identical to perpendicular flat lay aerial views without scale surveillance framed like cinema impossible body relations in POV or tilted horizons with no narrative reason",
  },
  "camera-angle": {
    zh: "；这里只控制主体相对镜头的转向：正面强调左右结构与直接交流，四分之三角度同时显示正面识别和侧面体积，侧面强调轮廓、鼻唇线或物体厚度；相机高度和焦距保持中性。眼睛、双肩、骨盆、产品轴线与投影必须服从同一转角。避免把人物转向误做成相机升降、左右五官错位、正侧面同时出现、四分之三角度过度扭颈或产品透视与主体方向矛盾",
    en: "; control only the subject's rotation relative to camera: frontal view emphasizes bilateral structure and direct address, three-quarter view retains front recognition with side volume, and profile emphasizes silhouette facial contour or object thickness while camera height and focal length remain neutral. Eyes shoulders pelvis product axis and cast shadow must obey one rotation. Avoid replacing subject rotation with camera elevation misaligned bilateral features simultaneous front and profile anatomy excessive neck twisting in three-quarter view or product perspective contradicting subject direction",
  },
  composition: {
    zh: "；把对称、中心、过肩、背影、侧轮廓、倒影或门镜当作整幅画面的叙事取景方式，明确主次主体、遮挡边界、画面轴线和信息揭示程度。过肩前景只占必要比例，倒影与实体遵守表面方向和亮度，门镜或孔洞边缘必须有真实厚度。避免中心构图变成所有元素堆中间、对称复制人物、肩膀遮脸、倒影内容不一致、背影没有环境目标或框景边缘像后期贴纸",
    en: "; use symmetry centering over-shoulder back view side silhouette reflection or peephole as a whole-frame narrative framing device, defining primary and secondary subjects occlusion boundary screen axis and amount of revealed information. Over-shoulder foreground occupies only what is needed, reflection and source obey surface direction and luminance, and apertures have real thickness. Avoid centering every object in one pile cloned symmetry shoulders covering faces inconsistent reflections a back view with no environmental target or framing edges that resemble a post-production sticker",
  },
  motion: {
    zh: "；指定是相机跟随、手持微动、摇摄、长曝光、高速凝固或滑动变焦，并给出主体速度、相机路径、快门时间和至少一个清晰锚点。跟拍保持主体相对稳定，摇摄让背景沿运动方向拖动，长曝光只积分移动亮度，高速凝固保留冲击瞬间，滑动变焦同步改变距离与焦距。避免全画面同样模糊、静止物体拖影、手持变成随机旋转、长曝光出现实体克隆或运动方向与残影相反",
    en: "; specify camera tracking handheld micro-movement panning long exposure high-speed freeze or dolly zoom and provide subject velocity camera path shutter duration and at least one sharp anchor. Tracking stabilizes the subject relative to frame, panning drags background along motion, long exposure integrates moving luminance, high speed preserves impact, and dolly zoom synchronizes camera distance with focal length. Avoid equal blur everywhere trails on stationary objects handheld motion reduced to random rotation solid clones in long exposure or afterimages pointing opposite the movement",
  },
  "composition-rule": {
    zh: "；把三分线、黄金螺旋、三角、放射或重复视为元素关系而不是叠加网格，先放置主焦点，再用次要形体、方向与留白完成视觉路径；真实人物和建筑不为命中几何而变形。重复图案至少保留一个节奏变化或中断点。避免同时套用多种法则、焦点落在空白误区、螺旋线可见、三角形机械描边、放射线穿脸或复制粘贴式重复",
    en: "; treat thirds golden spiral triangle radial order or repetition as relations among elements rather than visible grid overlays, placing the primary focus first and completing a visual path with secondary forms direction and negative space while real people and buildings do not deform to match geometry. Repetition retains at least one rhythmic variation or interruption. Avoid applying several rules simultaneously focus falling into an accidental void visible spiral guides mechanically outlined triangles radial lines through faces or copy-paste repetition",
  },
  "visual-guide": {
    zh: "；让道路、栏杆、光带、S 曲线、建筑边缘或门框等真实场景元素从画面入口引向焦点，透视消失点与地平线必须一致；引导元素在到达主体前逐渐降低对比或收束。避免凭空画箭头、引导线绕开主体、单点透视扭曲非平行结构、门框切断头部、S 曲线过于工整或所有边缘都指向不同焦点",
    en: "; use real scene elements such as road rail light path S-curve architectural edge or doorway to lead from an entry point toward focus, keeping vanishing point and horizon consistent and allowing guides to converge or lose contrast before reaching the subject. Avoid invented arrows lines that bypass the subject one-point perspective warping nonparallel structure doorways cutting heads overly perfect S-curves or every edge pointing to a different focus",
  },
  depth: {
    zh: "；通过前景、中景、背景的尺度、遮挡、清晰度、对比和空气透视建立空间，而非只靠虚化；尺度对比提供可识别参照，全景深让各层都清楚但仍有主次，前景遮挡只占边缘并保留视线入口。避免前景贴片、人物比例跳变、远景比近景更锐更饱和、遮挡覆盖焦点、全景深等同过度锐化或缩放参照物尺寸失真",
    en: "; establish space through scale occlusion focus contrast and atmospheric perspective across foreground middle distance and background rather than blur alone. Scale contrast uses recognizable reference, deep focus keeps layers legible while preserving hierarchy, and foreground obstruction occupies an edge while retaining a visual entry. Avoid flat foreground stickers figure scale jumps distant detail sharper and more saturated than near detail occlusion covering focus deep focus equated with oversharpening or distorted reference-object size",
  },
  "person-position": {
    zh: "；明确人物在成品中的高度占比、前中后景、水平和垂直位置、朝向以及为视线与动作保留的空间；位置变化不自动改变焦距或人物身份。边缘裁切必须有意并避开关节，多人尺度参照遵守同一地面与消失点。避免“远处人物”仍占满画面、左右三分线颠倒、底部人物悬空、头顶贴边、局部裁切像失误或通过缩小人物却不改变空间关系制造假远近",
    en: "; specify figure height as a percentage of final frame depth plane horizontal and vertical location facing direction and space reserved for gaze and action, without automatically changing focal length or identity when position changes. Edge crop must be intentional and avoid joints, while multi-figure scale references share one ground plane and vanishing system. Avoid a supposedly distant person filling the frame reversed left-right thirds figures floating at the bottom crown collisions accidental-looking crops or false depth made by shrinking a figure without changing spatial relations",
  },
  "group-relationship": {
    zh: "；先确定人数、角色关系、共同地面、身体间距、朝向、眼神、遮挡顺序和动作目的，再采用并排、对视、背靠背、三角、圆形、队列、分散纵深或围合结构。每人保留独立轮廓和合理落脚点，领导、保护、追逐或孤立关系由距离和姿态证明。避免人物融合、多余肢体、完全复制姿势、所有脸朝镜头、眼神不相交、前后尺度错误、围合堵死中心或用队形替代真实互动",
    en: "; define count role relation shared ground spacing facing eye line occlusion order and action purpose before choosing side-by-side facing back-to-back triangle circle line distributed depth or surrounding structure. Each figure retains an independent silhouette and plausible footing, while leadership protection pursuit or isolation is proven through distance and posture. Avoid fused bodies extra limbs cloned poses every face toward camera eye lines that never meet incorrect depth scale a surrounding group sealing the center or formation substituted for real interaction",
  },
};

const lightingBaseGuidance = {
  zh: "；先定义每个光源的真实位置、尺寸、方向、距离、颜色、强度和衰减，再说明主光、辅光、轮廓光、环境光与实景灯的职责；阴影方向、高光形状、反射、透射、体积散射和人物眼神光必须与同一光源系统一致。光线只照亮能到达的表面，并受到门窗、叶片、烟雾、织物和物体遮挡；不同肤色、金属、玻璃、木材和布料保持各自响应。先保护主体面部、手部、产品标签和关键结构，再塑造氛围。避免无来源发光、多组互相矛盾的阴影、轮廓光环绕全身、眼神光与主光错位、高光爆白、暗部堵死、彩光污染肤色、阴影像贴图、体积光穿过实体、所有表面同亮、伪 HDR 光晕或仅用色温名称代替真实布光",
  en: "; define the real position size direction distance color intensity and falloff of every source, then assign roles to key fill rim ambient and practical light. Shadow direction highlight shape reflection transmission volumetric scattering and catchlights must belong to the same lighting system. Light reaches only exposed surfaces and is occluded by windows leaves haze fabric and solid objects, while different skin tones metal glass timber and textile retain their own response. Protect face hands product labels and functional structure before shaping mood. Avoid source-free glow contradictory shadow sets rim light wrapped around the entire body catchlights misaligned with the key clipped highlights blocked shadows colored light contaminating skin shadows resembling stickers volumetric rays passing through solids every surface equally bright synthetic HDR halos or a color-temperature label substituted for actual lighting design",
};

const lightingGuidanceByGroup: Record<string, { zh: string; en: string }> = {
  natural: {
    zh: "；明确天气、季节、时段、太阳或月亮高度、天空漫射与地面反弹；柔光、高调、黄金时刻、雨夜、窗光、树影、水下焦散和月光都必须有对应环境。树影随叶片距离产生软硬变化，水下焦散随波面移动，雨夜高光来自湿地反射，月光亮度保持克制。避免黄金时刻全图橙色、月夜亮如白昼、雨夜无雨源和湿反射、水下光纹贴在空气中、窗光没有窗框遮挡或柔光消除全部体积",
    en: "; specify weather season time sun or moon elevation sky diffusion and ground bounce, grounding soft high-key golden-hour rainy-night window dappled underwater-caustic and moonlit treatment in a corresponding environment. Leaf shadows change softness with distance, underwater caustics follow the moving surface, rainy-night highlights arise from wet reflection, and moonlight remains restrained in luminance. Avoid an entirely orange golden hour moonlit scenes as bright as day rain nights without rain source or wet reflection caustic patterns floating in air window light with no frame occlusion or soft light that removes all volume",
  },
  interior: {
    zh: "；以房间尺寸、墙顶反射、灯具形状和色温建立室内布光：柔光箱有可见大面积方向，蜡烛和灯笼近暖远暗，台灯只照亮局部，彩窗投影服从窗格，蝴蝶光与书页反射光说明反光板位置。单支荧光灯强调长条光源与局部频闪色偏，办公室荧光灯强调成排顶灯和工作空间均匀度。避免所有室内角落同亮、烛光照遍大厅、灯具亮却不投光、彩窗颜色越过遮挡、荧光灯变霓虹或影棚人像没有背景光比",
    en: "; build interior lighting from room size wall and ceiling bounce fixture shape and color temperature: a softbox has a visible broad direction, candle and lantern light is warm nearby and rapidly dimmer at distance, a practical lamp affects a local zone, stained-glass projection obeys the window lattice, and butterfly or book light names reflector placement. A single fluorescent tube emphasizes an elongated source and local flicker tint, whereas office fluorescence emphasizes repeated ceiling fixtures and workplace uniformity. Avoid every corner equally bright candlelight filling a hall glowing fixtures that cast no light colored glass passing through occlusion fluorescent tubes turned into neon or studio portrait light with no background ratio",
  },
  dramatic: {
    zh: "；戏剧光效必须服务具体事件：丁达尔光由窄光束穿过含尘或含雾空气形成可见方向，体积雾控制介质密度和远近层次；逆光、纯轮廓光、顶光、底光、交叉光、追光和伦勃朗光分别保持其角度与面部结构。火光、钠灯、警示频闪和投影光束都有可见来源与时间变化。避免把丁达尔光等同全屏雾、轮廓光照亮正脸、底光没有恐怖或舞台语境、警示灯红蓝均匀涂脸、投影束无投影机或追光不跟随主体",
    en: "; dramatic light must serve a concrete event: Tyndall rays arise when a narrow directional beam crosses dusty or misty air, while volumetric fog controls medium density and depth. Backlight rim-only silhouette top under cross spotlight and Rembrandt arrangements preserve their distinct angle and facial structure. Fire sodium street warning strobe and projector beams have visible sources and temporal behavior. Avoid equating Tyndall rays with full-frame fog rim light illuminating the frontal face underlight without theatrical or unsettling context red-blue warning light painted uniformly over skin projector beams without a projector or a follow spot that does not track its subject",
  },
  "sci-fi": {
    zh: "；霓虹、激光束和扫描光必须依附真实灯管、发射器、光学路径或设备用途；霓虹通过附近表面和湿地反射扩散，激光在清洁空气中不可见，只有遇到介质或表面才显现，扫描光需表现扫过位置、速度与被测表面反馈。避免满屏青紫、激光任意转弯、光束穿墙、扫描线停在所有位置、人物边缘自动发光、无来源全息色或把普通彩色灯称作科幻",
    en: "; neon laser beams and scanning light must attach to real tubes emitters optical paths or device functions. Neon spreads through nearby surfaces and wet reflection, a laser is invisible in clean air until it intersects participating media or a surface, and scan light shows sweep position speed and response from the measured surface. Avoid cyan-magenta everywhere lasers turning arbitrarily beams passing through walls scan lines frozen at every location automatic glow around people source-free holographic color or ordinary colored illumination labeled science fiction",
  },
};

const sceneGroupCorrections: Record<string, string> = {
  "scene-space-station": "sci-fi",
  "scene-underwater-ruins": "ruins",
  "scene-apocalyptic-ruins": "ruins",
};

const sceneBaseGuidance = {
  zh: "；先明确具体地域或世界位置、季节、时段、天气、空间尺度、地形或建筑结构、主要通行路径和当前正在发生的活动，再用前景入口、中景主体与远景边界建立可进入的空间。道路、门窗、楼梯、水流、植被、家具、设备与人物必须符合重力、透视、气候和实际用途；材料老化、湿度、尘土、积雪、灯光与声音线索应有可追溯来源。只保留能证明地点和叙事的细节，人物与道具不应遮挡关键场景结构。若结合时代或世界观，建筑工法、能源、交通、服装和生活方式保持同一体系。避免地标拼贴、无功能建筑、道路断裂、门窗比例错误、植被气候错配、室内外光线矛盾、所有表面同样干净或破旧、人物悬浮、装饰堆满、随机雾气、伪文字、水印以及仅用色调或名称冒充场景",
  en: "; specify a concrete geographic or world location season time weather spatial scale terrain or architectural structure primary circulation route and current activity, then establish an inhabitable space with a foreground entry middle-ground subject and distant boundary. Roads doors windows stairs water vegetation furniture equipment and people must obey gravity perspective climate and real use, while aging moisture dust snow illumination and sound cues have traceable sources. Retain only details that prove place and narrative, keeping figures and props from blocking essential spatial structure. When an era or world setting is combined, construction energy transport clothing and daily life remain one coherent system. Avoid landmark collage functionless buildings broken circulation incorrect door and window proportions climate-incompatible vegetation contradictory indoor and outdoor light every surface equally pristine or ruined floating people decoration everywhere arbitrary fog pseudo-writing watermarks or mood color and a scene name substituted for an actual environment",
};

const sceneGuidanceByGroup: Record<string, { zh: string; en: string }> = {
  city: {
    zh: "；用道路等级、人行尺度、建筑首层、店面或入口、交通设施、管线和公共照明证明城市类型，并区分观景台、可使用屋顶露台与未经装饰的维护天台。古镇、赛博小巷、夜市、校园、地铁和机场各自保留不同流线与人群密度。避免街道无出口、同一霓虹招牌重复、屋顶没有安全边界、地铁像机场、古镇混入现代材料或城市只剩高楼背景板",
    en: "; prove the type of city through road hierarchy pedestrian scale active ground floors shop or building entries transit infrastructure utilities and public lighting, distinguishing a public observation deck a furnished usable roof terrace and an undecorated service rooftop. Old town cyber alley night market campus metro and airport retain distinct circulation and crowd density. Avoid streets with no outlet repeated identical neon signage roofs without safety boundaries metro spaces resembling airports modern material inserted into an old town or a city reduced to a skyline backdrop",
  },
  interior: {
    zh: "；先建立房间长宽高、入口出口、窗户与主要功能区，再按真实使用频率放置家具、工具、储物、线缆和磨损；照明由窗光、顶灯和实景灯共同解释。现代公共图书馆强调开放阅读与服务，宏伟图书馆强调纪念性大厅，档案馆强调受控存储和检索流线。避免家具漂浮、门被堵住、设备无电源、医院与教室缺少功能设施、工作坊只有装饰道具或所有室内都像整洁摄影棚",
    en: "; establish room width depth height entries exits windows and principal work zones before placing furniture tools storage cables and wear according to actual frequency of use, with window ceiling and practical light jointly explaining illumination. A modern public library emphasizes open reading and services, a grand library a monumental hall, and an archive controlled storage and retrieval circulation. Avoid floating furniture blocked doors equipment without power functional hospital or classroom spaces missing essential facilities workshops made only of decorative props or every interior resembling a pristine photo studio",
  },
  nature: {
    zh: "；以地质、海拔、水文、土壤、植被带和天气共同建立自然地貌，前景材质、坡度与水流方向必须支持远景地形。河谷与喀斯特河谷、火山黑岩与活跃熔岩地、沙丘与绿洲分别按成因和生态区分；珊瑚、红树林、冰洞和高山场景保留真实生境。避免不相容生态混放、河流逆坡、沙丘随机纹理、雪与热带植物同场、珊瑚像装饰花园或极光出现在错误纬度和天气",
    en: "; build natural landform through geology elevation hydrology soil vegetation zone and weather together, making foreground material slope and drainage support distant terrain. Distinguish ordinary and karst river valleys volcanic black-rock terrain and active lava field dunes and oasis through formation and ecology, while coral mangrove ice cave and alpine settings preserve real habitat. Avoid incompatible ecosystems rivers flowing uphill random dune texture snow with tropical vegetation coral arranged like a decorative garden or aurora under an implausible latitude and weather system",
  },
  weather: {
    zh: "；天气与季节必须改变能见度、地表状态、植物阶段、人物装备、交通和光线，而不是叠加粒子层；雨雪按风和遮挡分布，雾随地形聚散，雷暴、台风、沙尘和热浪具有方向、强度与安全后果。积雪针叶林描述雪覆盖的寒地林而非雪松树种，阴天屋顶群以云层漫射和湿冷材质证明天气。避免所有雨滴同长、雪花穿墙、彩虹无背光雨幕、台风树木不动或季节只靠换色",
    en: "; weather and season must change visibility ground condition plant phase clothing transport and illumination rather than adding a particle overlay. Rain and snow distribute with wind and occlusion, fog pools with terrain, and thunderstorm typhoon sandstorm and heat haze have direction intensity and safety consequences. A snow-covered conifer forest describes a cold forest under snow rather than a cedar species, while overcast rooftops prove conditions through diffuse cloud light and damp cool materials. Avoid identical rain streaks snow passing through walls a rainbow without backlit rain trees unaffected by a typhoon or season represented only by a color swap",
  },
  culture: {
    zh: "；先指定地点、社区、年代和场所功能，再通过建筑结构、展陈方式、摊位、器物、生产活动与人群行为表达文化；神圣或历史空间保持礼仪与使用边界。当代艺术画廊强调当代作品与白盒或实验展陈，博物馆展厅强调文物保护、展柜和说明区；巷道夜市与街景夜市按宽度、摊位和流线区分。避免旅游舞台化、跨地域符号拼贴、伪文字、文物裸露无保护或所有人穿节庆服装",
    en: "; specify location community period and venue function before expressing culture through construction display method stalls objects productive activity and crowd behavior, preserving ritual and access boundaries in sacred or historic spaces. A contemporary art gallery emphasizes current work and white-cube or experimental display, whereas a museum gallery emphasizes collection protection cases and interpretation; alley and street night markets differ in width stall arrangement and circulation. Avoid tourist-stage presentation mixed regional signs pseudo-writing unprotected artifacts or everyone dressed in festival costume",
  },
  ruins: {
    zh: "；明确遗迹原用途、损毁原因、经过时间、剩余承重结构和自然侵入阶段，碎片落点、积水、锈蚀、火烧、弹痕、海洋附着或植物生长符合材料与环境。海底遗迹保留水压、沉积与生物附着，废土城市说明基础设施失效，战场遗迹避免美化伤害。保留安全通路和可读轮廓。避免每个遗迹同样藤蔓化、随机破洞、悬空楼板、碎石均匀撒满、无原因火焰、灾难娱乐化或完整建筑只加裂纹滤镜",
    en: "; define original function cause of damage elapsed time remaining load-bearing structure and stage of natural invasion, with debris fall water pooling corrosion burn marks impact marine growth or vegetation matching material and environment. Underwater ruins preserve pressure sediment and biological encrustation, post-apocalyptic cities explain infrastructure failure, and battlefield remnants avoid aestheticizing harm. Retain safe circulation and a legible silhouette. Avoid identical vine coverage on every ruin random holes unsupported floors evenly scattered rubble source-free flames disaster treated as entertainment or an intact building with only a crack texture",
  },
  "sci-fi": {
    zh: "；先定义设施用途、能源、重力、空气循环、交通、维修和人员工作流程，再让实验室、地下指挥舱、星舰机库、数据中心和空间站拥有不同尺度、设备与安全分区；界面只出现在需要操作的位置。避免无功能发光墙、满屏悬浮屏、服务器无散热、机库没有运输通道、空间站窗外比例错误、洁白表面无维护痕迹或把科幻等同蓝色霓虹",
    en: "; define facility function power gravity air circulation transport maintenance and human workflow before giving laboratory bunker command room starship hangar data center and space station distinct scale equipment and safety zoning, with interfaces only where operation is required. Avoid functionless glowing walls floating displays everywhere servers without cooling hangars without logistics routes incorrectly scaled space-station windows immaculate surfaces with no maintenance evidence or science fiction equated with blue neon",
  },
  fantasy: {
    zh: "；只设定一到两个超自然规则，并说明其能量来源、限制、对建筑材料、交通、生态和日常生活的影响；魔法学院、蒸汽工坊、云端世界、异星峡谷、发光森林、浮空岛与水晶圣所各自保持可通行结构和尺度参照。避免随机漂浮物、所有材质发光、混合多个不相容神话体系、建筑无入口、浮岛无稳定机制或用紫蓝雾和水晶堆砌代替世界逻辑",
    en: "; establish only one or two supernatural rules and explain their energy source limits and effect on construction material transport ecology and daily life. Magical academy steam workshop cloud world alien canyon luminous forest floating city and crystal sanctuary each retain navigable structure and scale evidence. Avoid random floating objects every material glowing mixtures of incompatible mythologies architecture without entries floating islands with no stabilizing mechanism or purple-blue haze and crystal piles substituted for world logic",
  },
};

const backgroundBaseGuidance = {
  zh: "；先把背景定义为一种具体可搭建、可铺设、可印刷或可数字生成的表面，说明成品画幅、主体与背景距离、地面或墙面交界、材质厚度、纹理尺度、光泽、颜色均匀度和受光方向。背景负责分离主体与建立语境，不得改变产品标准色、污染肤色、吞没透明或深色边缘；纹理密度在主体附近降低，重复单元避开明显平铺，接缝、褶皱、纤维、孔洞、反射和透光必须来自真实结构。需要留白或文字时保持对比与安全区。避免背景成为第二主体、纹理穿过人物或产品、所有材质使用相同反射、无来源中心光斑、渐变条带、无限重复贴图、边缘脏污、错误透视、悬浮地面、伪文字、水印或仅用颜色名称代替可观察表面",
  en: "; define the background as a concrete surface that can be built laid printed or digitally generated, specifying final aspect ratio subject-to-background distance floor or wall transition material thickness texture scale gloss color uniformity and light direction. The background separates and contextualizes the subject without shifting product standard color contaminating skin or swallowing transparent or dark edges. Reduce texture density near the subject, conceal obvious tile repetition, and derive seams folds fibers pores reflection and translucency from real construction. When negative space or copy is needed preserve contrast and safe zones. Avoid the background becoming a second subject texture crossing people or products identical reflection for every material source-free central hotspots banded gradients infinitely repeated maps dirty edges incorrect perspective floating floors pseudo-writing watermarks or a color name substituted for an observable surface",
};

const backgroundGuidanceByGroup: Record<string, { zh: string; en: string }> = {
  color: {
    zh: "；纯色底板以受控色值、低反光表面和轻微自然明度变化承托主体，可在地面接触处出现柔和阴影但不形成材质纹理；朱红、暖白、鼠尾草绿和钴蓝保持各自准确色相与明度。避免绝对无层次的数字填色、四角脏灰、中心光晕、色带、荧光溢色、背景反射改变产品颜色或把纯色板误做成布料和墙面",
    en: "; a solid backdrop supports the subject with controlled color value low reflection and slight natural luminance variation, allowing a soft contact shadow at the floor without becoming a textured material. Vermilion warm white sage and cobalt retain accurate hue and value. Avoid perfectly flat digital fill dirty gray corners central glow color banding fluorescent spill background reflection shifting product color or a solid panel accidentally rendered as fabric or plaster",
  },
  paper: {
    zh: "；明确纸浆来源、克重、纤维、压纹、毛边、吸墨和透光性；宣纸平整薄韧，皱褶宣纸有受力来源，水彩棉纸有冷压或粗纹，再生纸显示纤维与压痕，羊皮纸表现真实膜质或历史纸面但不过度做旧。障子纸依附木格，渐变纸的颜色进入纸纤维而非发光。避免纸像塑料、纤维规则重复、所有纸都泛黄、皱纹无方向、压纹穿透背面或墨水尚未使用却满面晕染",
    en: "; specify pulp source weight fiber embossing deckle absorption and translucency. Xuan remains thin resilient and mostly flat, wrinkled xuan has a source of compression, watercolor cotton paper shows cold-press or rough tooth, recycled stock reveals inclusions and pressure, and parchment shows credible membrane or aged paper without excessive distress. Shoji paper attaches to a timber lattice and gradient color sits within fibers rather than glowing. Avoid paper resembling plastic regularly repeated fiber every stock yellowed directionless creases embossing passing through the sheet or ink bleeding everywhere before ink has been applied",
  },
  fabric: {
    zh: "；说明纤维、织法、垂坠、张力、接缝和光泽：丝绸与缎面高光沿褶皱移动，天鹅绒吸光并有绒向，亚麻与画布显示经纬，防撕裂尼龙保留格纹与轻量皱折，欧根纱和纱帘具有透明叠层。避免布面像金属镜、所有褶皱等距、织纹比例过大、透明布无后景影响、天鹅绒纯黑死区或布料悬空无固定点",
    en: "; describe fiber weave drape tension seam and sheen: silk and satin highlights travel along folds, velvet absorbs light with a visible pile direction, linen and canvas reveal warp and weft, ripstop nylon retains a reinforcement grid and lightweight creasing, and organza or sheer curtains form translucent layers. Avoid fabric behaving like a metal mirror equally spaced folds oversized weave transparent cloth unaffected by what lies behind it featureless black velvet or cloth suspended without attachment",
  },
  studio: {
    zh: "；影棚背景需说明无缝纸或墙面宽度、弧形地墙过渡、主体站位、接触阴影和灯光渐变；暖象牙、冷灰、炭黑、雾蓝与暖灰控制色温但不污染主体。博物馆灰墙保留实体墙面与展陈距离，云雾渐变影棚只是受控雾化层而非真实户外云海。避免可见折角、主体超出背景纸、脚下无接触、无缝纸像天空、雾层遮住边缘或渐变产生明显条带",
    en: "; a studio background defines sweep or wall width curved wall-to-floor transition subject mark contact shadow and lighting gradient, with warm ivory cool gray charcoal mist blue and warm gray controlling environment temperature without contaminating the subject. A museum-gray wall retains physical surface and display distance, while a mist-cloud studio uses controlled haze rather than an outdoor cloudscape. Avoid visible hard corners subjects extending beyond the sweep feet without contact seamless paper resembling a sky haze erasing edges or obvious gradient banding",
  },
  material: {
    zh: "；每种底板遵守真实密度、厚度、接缝、加工方向和反射：拉丝金属纹理方向连续，石材孔洞和脉络不重复，木纹沿板材生长，混凝土与石膏有合理抹压，陶砖有釉层和缝，软木与竹纤维保持植物结构，大漆有层积深度，氧化铜绿依附铜基。避免把照片纹理贴到任意平面、边缘不显厚度、木石金属同样光亮、氧化层无基材或尺度大到像地貌",
    en: "; each board obeys real density thickness join processing direction and reflection: brushed metal grain remains directional, stone pores and veins do not repeat, timber grain follows the board, concrete and plaster show plausible finishing, tile has glaze and grout, cork and bamboo retain plant structure, lacquer has layered optical depth, and verdigris remains attached to a copper base. Avoid photographic texture pasted onto any plane edges with no thickness wood stone and metal sharing one gloss oxidation without a substrate or texture scaled so large that it resembles terrain",
  },
  nature: {
    zh: "；自然氛围背景仍需有明确空间层级：云天按高度和天气变化，水墨烟云按纸墨扩散和留白组织，树影石膏墙由真实叶片、太阳方向和墙面共同形成；主体周围保持安静。避免把天空当平面壁纸、水墨雾与摄影云混用、树影没有树叶结构、所有云同清晰度、自然元素穿过主体或背景季节与主体受光不一致",
    en: "; an atmospheric natural background still requires depth: cloud sky changes with altitude and weather, ink mist follows paper absorption and negative space, and leafy plaster shadow arises jointly from real foliage sun direction and wall surface while remaining quiet around the subject. Avoid sky as a flat wallpaper mixed photographic cloud and ink fog leaf shadows without botanical structure every cloud equally sharp natural elements crossing the subject or a background season inconsistent with subject illumination",
  },
  special: {
    zh: "；先区分数字镭射渐变与实体虹彩膜：数字背景用受控色场和折射感，不出现真实褶皱；实体薄膜有厚度、折痕和角度依赖反射。磨砂、雨滴、波纹和彩窗玻璃各自遵循粗糙度、折射、液滴重力和结构纹路，亚克力有厚度与边缘，皱褶银箔保留金属反射。避免所有特殊背景统一彩虹、玻璃无后景折射、雨滴横向悬浮、烟熏材质纯黑、银箔像布或重复高光贴图",
    en: "; distinguish a digital holographic gradient from physical iridescent foil: the digital field uses controlled color and refractive suggestion without real creases, while foil has thickness folds and angle-dependent reflection. Frosted rainy ribbed and stained glass follow their own roughness refraction droplet gravity and structural pattern, acrylic has thickness and edges, and crumpled foil retains metallic reflection. Avoid every special surface turned rainbow glass with no refracted background droplets suspended sideways smoked material becoming featureless black foil behaving like cloth or repeated highlight textures",
  },
};

const characterBaseGuidance = {
  zh: "；先确定人物数量、年龄阶段、身体能力、当前活动、所在环境和叙事作用，再选择与该角色真正相关的服装、工具、姿态和表情；职业、社会身份、体态、族裔、性别表达与性格彼此独立，未被用户选择的属性不得自动推导。保持同一人物在不同视图中的脸型、发型、体型、服装层次、道具和左右特征一致，手脚关节、重心、接触点与工具握持符合解剖和重力。人物应有个体差异、生活痕迹和具体目标，而不是制服化模板。避免复制知名角色或真人、职业刻板装扮、年龄与皮肤纹理矛盾、所有人相同脸型、过度美化、儿童成人化、老年人无差别虚弱、体态羞辱、多余肢体、手指错误、道具悬浮、伪文字、品牌标志或用服装单独替代角色身份",
  en: "; define figure count life stage physical capability current activity environment and narrative function before selecting clothing tools posture and expression genuinely relevant to the character. Profession social status body type ethnicity gender expression and personality remain independent, and no unselected attribute may be inferred automatically. Preserve face hair body build clothing layers props and left-right features for the same person across views, with anatomically and gravitationally credible joints weight contact and tool grip. Give each character individual variation lived evidence and a concrete goal rather than a uniform template. Avoid copies of famous characters or real people occupational costume stereotypes age inconsistent with skin texture identical faces beautification that erases identity adult treatment of children universal frailty in older people body shaming extra limbs malformed fingers floating props pseudo-writing brand marks or costume alone substituted for character identity",
};

const characterGuidanceByGroup: Record<string, { zh: string; en: string }> = {
  "age-stage": {
    zh: "；年龄通过身高比例、骨骼成熟度、皮肤与头发、动作方式和社会活动共同表达，并保留同龄人的广泛个体差异。儿童和青少年姿态与服装符合安全和年龄，中青年不默认完美皮肤，老年保留能力、尊严、肌肉与真实生活状态。避免只加皱纹或缩放身体改变年龄、把少年画成幼童、老年统一白发拐杖或用夸张衰老取代具体人物",
    en: "; express life stage jointly through height proportion skeletal maturity skin and hair movement and social activity while preserving wide variation among peers. Children and adolescents remain age-appropriate and safe, young and middle-aged adults are not assumed to have flawless skin, and older people retain ability dignity musculature and real daily life. Avoid changing age only through wrinkles or body scaling rendering teenagers as small children giving every older person white hair and a cane or replacing a specific person with exaggerated aging",
  },
  profession: {
    zh: "；职业必须由工作环境、正在进行的任务、正确工具、保护装备、身体姿势与协作关系证明；制服只在真实需要时出现，服装保持具体岗位、地区和天气适配。建筑师、摄影师、科研、厨师、医护、工程、艺术、音乐、飞行、运动和表演等工作流程互不混用。避免人物只拿一个象征道具摆拍、工具握法错误、无安全装备、职业空间不真实、所有专业人士穿同一种制服或用性别年龄推导职业",
    en: "; prove profession through workplace active task correct tools protective equipment body mechanics and collaboration. Uniform appears only when actually required and clothing fits role region and weather. Architecture photography research culinary health engineering art music aviation sport and performance workflows remain distinct. Avoid a posed figure holding one symbolic prop incorrect tool grip missing safety equipment an implausible workplace every professional in one generic uniform or profession inferred from gender or age",
  },
  "social-role": {
    zh: "；社会角色和人物关系通过人与人、人与环境之间的决策、距离、目光、责任和资源使用体现；侦探、探险者、学者、导师、学徒、守护者、反叛者、旅行者、商人和修行者具有不同目标。双胞胎保持可辨的共同特征和个体差异，不复制成镜像克隆。避免王室只靠皇冠、游牧者被异域化、反叛者自动暴力化、守护者无保护对象、导师与学徒年龄模板化或角色名称变成固定性格",
    en: "; express social role and relationship through decisions distance gaze responsibility and use of resources between people and environment. Detective explorer scholar mentor apprentice guardian rebel traveler merchant and practitioner carry distinct goals. Twins retain recognizable shared traits with individual differences rather than mirrored clones. Avoid royalty indicated only by a crown exoticized nomads rebels automatically made violent guardians with nothing to protect age-template mentor and apprentice pairs or a role label treated as a fixed personality",
  },
  "body-type": {
    zh: "；体态通过骨架、肌肉与脂肪分布、肩胯比例、四肢长度和姿势自然呈现，并随年龄、动作和服装产生可信压缩与褶皱；运动型、修长和丰盈体态都保持健康个体差异与完整人物尊严。避免液化背景、腰肢不可能、头身比例极端、肌肉贴图、丰盈体态被自动弱化或喜剧化、修长等同病态消瘦、运动型等同健美比赛体型或衣物不受身体影响",
    en: "; render body type naturally through skeleton muscle and fat distribution shoulder-to-hip relation limb length and posture, with credible compression and garment folds according to age action and clothing. Athletic slender and fuller builds all preserve healthy individual variation and full dignity. Avoid warped backgrounds impossible waists extreme head-to-body ratios pasted-on muscle fuller bodies automatically weakened or comic slenderness equated with emaciation athletic build forced into bodybuilding proportions or clothing unaffected by the body beneath",
  },
  fantasy: {
    zh: "；幻想身份先定义所属世界、能力来源、代价、训练和装备功能；战士的防护、武器与动作符合战术和重量，法师的施法媒介、能量规则和环境反应一致。服饰结合文化与气候，不自动套用欧洲中世纪模板。避免巨型武器无重量、盔甲关节不能活动、魔法无来源、所有部位发光、职业性别化、符号混杂或复制游戏与影视角色",
    en: "; define fantasy world ability source cost training and equipment function first. A warrior's protection weapon and movement obey tactics and weight, while a mage's medium energy rules and environmental response remain consistent. Clothing follows culture and climate rather than defaulting to one European-medieval template. Avoid weightless giant weapons immobile armor joints source-free magic glow on every part gendered class design mixed symbols or copies of game and film characters",
  },
  "sci-fi": {
    zh: "；科幻身份以任务、技术等级、接口、生命支持、维修痕迹和身体适配建立；宇航员装备符合环境压力，黑客通过实际终端与信息任务体现，仿生人明确哪些结构是生物或机械以及能源和活动边界。避免满身霓虹线路、无功能透明屏、宇航服像紧身衣、仿生人统一白色塑料、赛博身份自动犯罪化、接口穿过身体或科技细节与世界等级矛盾",
    en: "; establish science-fiction identity through mission technology level interface life support maintenance evidence and bodily adaptation. Astronaut equipment matches environmental pressure, a hacker is shown through an actual terminal and information task, and an android defines which structures are biological or mechanical plus power and movement limits. Avoid neon circuitry everywhere functionless transparent displays spacesuits resembling fashion bodysuits every android in white plastic cyber identity automatically criminalized interfaces passing through anatomy or technical detail contradicting the world's capability",
  },
};

const ethnicityBaseGuidance = {
  zh: "；仅在用户明确选择时，把该项作为宽泛的人物外貌或群像多样性参考；先确定具体个人、家庭或群体的年龄、地域背景和当代或历史语境，并承认任何地域和族裔内部都存在广泛的肤色、脸型、五官、发质与体态差异。不得从外貌自动推断国籍、语言、宗教、阶层、职业、性格或服装，也不得把地区人口简化为一张标准脸。摄影与插画都保持自然皮肤纹理、准确曝光和个体辨识，跨人物时避免换脸与特征平均化。避免种族刻板化、异域化、肤色漂白或加深、把医学皮肤特征当装饰、伪民族服饰、夸张五官、同族所有人相同、混合族裔被机械五五分割、群像只有象征性差异或用地域标签代替具体人物描述",
  en: "; use this item only when explicitly selected as a broad reference for appearance or group diversity. Define the individual family or group life stage regional background and contemporary or historical context while recognizing wide variation in skin tone face shape features hair texture and build within every region and ethnicity. Never infer nationality language religion class profession personality or clothing from appearance, and never reduce a population to one standard face. Photography and illustration preserve natural skin texture accurate exposure and individual identity, avoiding face substitution or feature averaging across people. Avoid racial stereotyping exoticization skin lightening or darkening medical skin features used as decoration fabricated ethnic costume exaggerated features everyone in a group looking identical mixed heritage divided into mechanical halves tokenistic group diversity or a regional label substituted for a specific person",
};

const ethnicityGuidanceByGroup: Record<string, { zh: string; en: string }> = {
  region: {
    zh: "；地域族裔名称只限定可能的参考范围，具体结果应选择少量彼此协调的自然特征，并允许家庭、城市、迁徙与混合背景造成变化；服装和环境必须另由场景或时代参数确定。日本、韩国、汉族、东亚等相近条目不以刻板脸型区分，而以用户提供的个人或地域语境为准。避免国旗色、传统服饰、单一眼形鼻形或肤色成为识别捷径",
    en: "; a regional or ethnic label only bounds a possible reference range. Select a few mutually coherent natural traits for a specific result while allowing family city migration and mixed background to create variation, and determine clothing and environment separately through scene or era choices. Nearby references such as Japanese Korean Han Chinese and broader East Asian are not distinguished by stereotyped face templates but by user-provided personal or regional context. Avoid national colors traditional dress one eye or nose shape or a single skin tone used as a recognition shortcut",
  },
  mixed: {
    zh: "；混合背景人物的特征自然整合于同一张脸和身体，不将左右脸、上下半身或不同部位机械分区；多族裔群像为每个人提供独立身份、年龄、姿态和空间位置，并保持同等视觉尊重。避免平均脸、复制粘贴人物、只改变肤色、不自然拼接五官、某一人物被孤立为象征或群体构成与场景逻辑无关",
    en: "; integrate mixed-heritage traits naturally within one face and body rather than mechanically dividing left-right facial halves upper-lower body or separate features. A diverse group gives each person independent identity age posture and spatial position with equal visual respect. Avoid averaged faces copied figures skin color as the only variation unnatural feature splicing one person isolated as a token or group composition unrelated to the scene",
  },
  "skin-tone": {
    zh: "；用中性可观察的明度、底色、局部红润、日晒与真实光源描述肤色，并通过灰卡或环境中性色保持曝光一致；雀斑保留不规则密度和皮肤层次，白癜风特征保持自然边缘、身体连续性与人物尊严。避免食品或价值化比喻、冷暖灯光被误当肤色、全身色值不一致、过曝漂白、阴影涂黑、雀斑规则贴图或擅自消除和夸大医学特征",
    en: "; describe skin through neutral observable value undertone localized circulation sun exposure and actual light, maintaining exposure with a gray or environmental neutral reference. Freckles retain irregular density and skin depth, while vitiligo retains natural boundaries bodily continuity and personal dignity. Avoid food or value-laden metaphors colored lighting mistaken for skin tone inconsistent body values overexposure used to bleach blocked shadows regular freckle patterns or unsolicited erasure and exaggeration of a medical feature",
  },
  "facial-feature": {
    zh: "；只调整所选局部骨相或五官维度，其余面部比例、身份、年龄和表情保持稳定；眼形、眼窝、颧骨、脸型、下颌和鼻梁与头部转角、光线和软组织共同表现，左右侧保持自然但非复制对称。避免把单一特征绑定族裔或性格、五官过度放大、骨相与皮肤不连接、鼻梁标签改变整个面孔、双眼方向不一致或美化成统一网红脸",
    en: "; alter only the selected local skeletal or facial dimension while preserving all other proportions identity age and expression. Eye shape socket cheekbone face contour jaw and nasal bridge respond jointly to head rotation light and soft tissue, retaining natural rather than cloned bilateral symmetry. Avoid binding one feature to ethnicity or personality exaggerating features disconnecting bone from skin allowing a nasal-bridge label to replace the whole face misaligned gaze or beautifying every person into one social-media face",
  },
};

const hairMakeupBaseGuidance = {
  zh: "；保持人物身份、脸型、发际线、头骨体积、耳朵位置、肤色、年龄和原有皮肤特征不变，只修改所选发长、发质、发型、发色或妆容变量。头发从真实发根和分缝生长，发束数量、粗细、卷曲、垂坠、飞丝和高光服从发质、重力、湿度、风向与动作；前后层次和遮挡关系清楚，不穿过脸、耳、肩和服装。妆容沿真实面部曲率、毛孔与皮肤纹理附着，眼、唇、腮和高光边界与光源一致，左右允许自然差异。保持同一人物跨视图的颜色、长度和造型连续。避免假发头盔感、发根悬浮、发束复制、发丝融入背景、银发变金属、湿发像塑料、眉睫消失、眼线漂浮、唇色越界、整脸滤镜、肤色漂白、磨皮抹除纹理、改变骨相、伪文字、水印或以妆容自动推断性格和身份",
  en: "; preserve identity face shape hairline cranial volume ear position skin tone age and existing skin features, changing only the selected length texture hairstyle color or makeup variable. Hair grows from credible roots and parting, with lock count thickness curl drape flyaways and highlights responding to texture gravity humidity wind and action. Front-back layering and occlusion remain clear without passing through face ears shoulders or clothing. Makeup adheres to facial curvature pores and real skin texture, with eye lip cheek and highlight boundaries responding to the same light and allowing natural bilateral variation. Preserve color length and styling continuity for the same person across views. Avoid wig-like helmet hair floating roots cloned locks hair merging into background metallic silver hair plastic wet hair missing brows or lashes floating eyeliner lipstick outside the lip full-face filters skin bleaching texture-erasing smoothing altered bone structure pseudo-writing watermarks or makeup used to infer personality and identity",
};

const hairMakeupGuidanceByGroup: Record<string, { zh: string; en: string }> = {
  "hair-length": {
    zh: "；发长以发际线到耳、下颌、肩、胸或背部的实际落点定义，并随头部转角和姿势保持一致；短发保留耳颈边界，长发有重量、层次和与衣物接触。避免只缩放同一发片、后脑长度与正面不一致、长发无重力、短发覆盖整张脸或发尾被画幅随意截断",
    en: "; define length by the real endpoint from hairline to ear jaw shoulder chest or back and keep it consistent through head rotation and pose. Short hair preserves ear and neck boundaries, while long hair carries weight layering and contact with clothing. Avoid scaling one hair sheet inconsistent rear and frontal length gravity-free long hair short hair covering the whole face or ends accidentally cut by the frame",
  },
  "hair-texture": {
    zh: "；自然直、波浪、卷曲和紧卷通过毛囊方向、曲率半径、收缩率、发束密度与环境湿度表现，同一头发可有自然不规则但整体纹理连续；紧卷发保留真实体积和边缘。避免把发质绑定族裔、所有发束相同波形、卷曲像弹簧塑料、直发像刚性丝带、紧卷被拉直或用噪点代替真实发丝",
    en: "; describe straight wavy curly and coily natural textures through follicle direction curvature radius shrinkage lock density and humidity, allowing natural irregularity within one coherent texture and preserving real volume and edges for coily hair. Avoid binding texture to ethnicity identical wave patterns plastic spring curls rigid ribbon-like straight hair unwanted straightening of coils or noise substituted for actual strands",
  },
  "hair-shape": {
    zh: "；发型轮廓由剪裁、刘海、侧区、后脑和整体体积定义；波波头、寸头、背头、眉上刘海与普通刘海保持不同边界。“卷发”在此表示经过造型形成的整体卷发轮廓，与天然卷曲发质独立。避免刘海粘成整片、寸头像绘制纹理、波波头左右长度跳变、背头无固定方向或造型轮廓改变头骨",
    en: "; define hairstyle silhouette through cut fringe side zones occipital shape and overall volume, keeping bob buzz slick-back micro fringe and general bangs structurally distinct. Curly hair in this group means an intentionally styled overall curl silhouette independent of natural curl texture. Avoid fringe fused into one slab buzz cuts as painted noise uneven bob length slick-back hair with no set direction or a hairstyle silhouette deforming the skull",
  },
  "hair-styling": {
    zh: "；马尾、盘发、半扎、编发、盒子辫、湿发与风吹发丝需说明束缚点、发绳或发夹、编织路径、张力、松散发丝和运动方向；银灰发色只改变色素与高光，不改变发质和年龄。避免辫子起止不明、发束穿插错误、马尾无连接、盘发悬空、风向冲突、湿发全头镜面或银灰发自动变成老年特征",
    en: "; ponytail updo half-up braid box braid wet styling and windblown hair specify anchor tie or pin braid path tension loose strands and movement direction. Silver-gray color changes pigment and highlight response only, not texture or age. Avoid braids with no origin or endpoint impossible interweaving ponytails without connection floating updos conflicting wind direction fully mirrored wet hair or silver-gray hair automatically aging the character",
  },
  "makeup-natural": {
    zh: "；自然妆容以轻薄底妆、局部遮瑕、眉睫整理和克制唇颊色保持本人特征；柔雾哑光控制油光但保留皮肤体积，水光肌只在受光高点产生湿润反射，裸妆仍可见真实毛孔、细纹与自然血色。避免整脸高光、粉底面具、鼻梁过度提亮、肤色统一漂白、卧蚕消失或把水光做成油腻塑料表面",
    en: "; natural makeup uses thin base local concealing groomed brows and lashes and restrained lip and cheek color while preserving identity. Soft matte finish controls oil without flattening volume, dewy skin creates moist reflection only on illuminated high points, and no-makeup makeup retains pores fine lines and natural circulation. Avoid highlight over the entire face foundation masks overbrightened nasal bridges uniformly bleached skin erased lower-eye structure or dewy finish turned into oily plastic",
  },
  "makeup-stylized": {
    zh: "；图形眼线、单色妆、红唇、烟熏、舞台、幻想和赛博妆先确定使用场景、色盘、覆盖区域与观看距离，再让线条、颜料、亮片或贴饰随面部曲率和表情变形；舞台妆适配远距离，幻想与赛博元素仍有材料和固定方式。避免眼线左右断裂、烟熏遮住眼球、红唇溢出、舞台妆用于证件照、幻想纹样复制文化神圣符号或赛博妆只靠随机霓虹线",
    en: "; graphic liner monochrome red-lip smoky stage fantasy and cyber makeup define context palette coverage and viewing distance before allowing line pigment glitter or appliqué to follow facial curvature and expression. Stage makeup reads at distance, while fantasy and cyber elements retain real material and attachment. Avoid broken bilateral eyeliner smoke covering the eyes lipstick bleeding outside the mouth stage makeup in an ID-photo context sacred cultural motifs copied as fantasy decoration or cyber makeup made only of random neon lines",
  },
};

const expressionBaseGuidance = {
  zh: "；保持人物身份、年龄、五官比例和头部结构不变，通过眉毛内外端、上下面睑、眼神方向、鼻翼、面颊、嘴角、唇部张力、下颌、颈肩和头部姿态的协调变化表达所选状态；表情强度与事件阶段、观看对象和人物性格相符，并保留自然左右不对称。眼泪、泛红、汗液或笑纹只在生理上合理时出现，嘴内牙齿和舌头结构保持可信。多人场景让表情彼此回应而非统一摆拍。避免只改嘴型、眉眼与嘴矛盾、笑时眼睛无变化、哭泣像贴水滴、惊讶嘴巴过大、愤怒自动暴力化、害怕变恐怖脸、神秘等同黑脸、眼球方向不一致、表情改变身份、面部融化、多余牙齿、伪文字或夸张到遮盖叙事",
  en: "; preserve identity age facial proportion and head structure, expressing the selected state through coordinated changes in inner and outer brow upper and lower eyelid gaze direction nostril cheek mouth corner lip tension jaw neck shoulder and head posture. Intensity matches event stage observed object and personality while retaining natural bilateral asymmetry. Tears flushing sweat and smile lines appear only when physiologically justified, with credible teeth tongue and oral anatomy. In group scenes expressions respond to one another rather than forming one posed mask. Avoid changing only the mouth contradictory brow eye and lip signals smiling eyes that do not engage sticker-like tears oversized surprise mouths anger automatically becoming violence fear becoming a horror face mystery equated with a darkened face misaligned gaze identity changes melting features extra teeth pseudo-writing or exaggeration that replaces narrative",
};

const expressionGuidanceByGroup: Record<string, { zh: string; en: string }> = {
  positive: {
    zh: "；如释重负由呼气、肩颈放松和微弱笑意体现，浅笑只轻提嘴角，灿烂微笑增加眼周与面颊参与，大笑允许张口但保持牙列与下颌真实；积极不等于所有人同样露齿。避免过度拉嘴、牙齿荧白、笑纹贴图、眼睛被挤成线或无事件原因的夸张欢乐",
    en: "; relief appears through exhalation relaxed shoulders and slight warmth, a small smile lifts corners minimally, a bright smile engages cheeks and eyes, and laughter may open the mouth while keeping teeth and jaw credible. Positive expression does not require every person to show teeth. Avoid stretched mouths fluorescent teeth pasted smile lines eyes squeezed into symbols or exaggerated joy without an event basis",
  },
  calm: {
    zh: "；自然无表情保持放松肌肉与清醒眼神，严肃增加眉眼和下颌控制但不等同愤怒，平静降低动作幅度并保持均匀呼吸，专注通过焦点、轻微眉眼收束和身体朝向体现。避免面具脸、空洞凝视、严肃皱眉过度、专注变斜视或把平静处理成无生命",
    en: "; neutral expression keeps relaxed muscles and an alert gaze, seriousness increases brow-eye and jaw control without becoming anger, calm reduces movement with even breathing, and concentration is shown through focus subtle narrowing and body orientation. Avoid mask faces vacant staring excessive frowning for seriousness cross-eyed concentration or calm rendered as lifelessness",
  },
  negative: {
    zh: "；悲伤通过眼神下降、眉内端变化、嘴角与姿势收拢体现，疲惫通过眼睑重量、肩颈和动作迟缓体现，但人物仍保持尊严和可辨身份；原因与强度由场景决定。避免默认流泪、黑眼圈夸大、疲惫等同病弱、悲伤全脸发黑或用雨景替代真实表情",
    en: "; sadness appears through lowered gaze inner-brow change mouth corners and contracted posture, while fatigue appears through eyelid weight shoulders neck and slowed action, preserving dignity and identity. Cause and intensity come from the scene. Avoid mandatory tears exaggerated dark circles fatigue equated with illness a sad face uniformly darkened or rain substituted for an actual expression",
  },
  dramatic: {
    zh: "；克制愤怒保留压抑张力而非爆发，含泪微笑同时呈现湿润眼眶与真实笑意，落泪有泪线和原因，愤怒、惊讶与害怕按刺激方向和事件强度逐级表现。避免所有戏剧情绪张口瞪眼、眼泪双侧完全对称、愤怒肌肉过度变形、惊讶下颌脱位或害怕自动加入血腥恐怖元素",
    en: "; contained anger retains suppressed tension rather than eruption, a teary smile combines moist eyes with a genuine smile, crying has a tear path and cause, and anger surprise and fear scale with stimulus direction and event intensity. Avoid every dramatic emotion using an open mouth and wide eyes perfectly symmetric tears muscular distortion in anger dislocated jaws in surprise or fear automatically adding graphic horror",
  },
  personality: {
    zh: "；怀疑侧目、尴尬、害羞、自信、骄傲与神秘通过短暂表情和姿态表达，不把它们固化为人物永久性格；自信保持开放重心，骄傲增加自我肯定但不自动傲慢，神秘来自信息保留而非遮黑面部。避免害羞幼态化、尴尬全脸通红、自信等同强势、骄傲仰头过度或侧目导致眼球错位",
    en: "; skeptical side-eye embarrassment shyness confidence pride and mystery are expressed as temporary facial and postural states rather than permanent personality labels. Confidence keeps an open center of balance, pride adds self-assurance without automatic arrogance, and mystery comes from withheld information rather than a blackened face. Avoid infantilized shyness an entirely red embarrassed face confidence equated with dominance excessive chin elevation for pride or side-eye with displaced pupils",
  },
};

const layoutBaseGuidance = {
  zh: "；先确定最终画幅比例、输出平台、观看距离与是否需要真实文字，再建立可量化的外边距、列网格、基线、视觉中心、主体包围框和裁切安全区。主体、标题区、说明区与装饰元素必须各自拥有明确层级和不冲突的占位；留白是连续的可用空间，不是把背景简单擦空。所有人物、产品、建筑和道具保持完整结构，重要五官、关节、标志、按钮与文字位远离裁切线；背景纹理、透视线、光向和运动方向共同引导视线，但不得侵占预留区域。为横版、竖版、方图或多尺寸适配保留可重新裁切的余量，缩略图下仍能识别核心焦点。若需要后期排字，只生成干净文字安全区和对齐参照，不生成伪文字。避免元素贴边、留白被随机物体填满、主体与文案争抢、左右视觉重量失衡、同级元素尺寸跳变、分割线切断脸或产品、透视跨区错位、过度居中、无意义边框、伪文字、水印以及为适配画幅拉伸主体",
  en: "; first define the final aspect ratio output platform viewing distance and whether real typography will be added, then establish measurable outer margins column grid baseline visual center subject bounding box and crop-safe area. Subject title zone annotation zone and decorative elements each receive a clear hierarchy and non-conflicting footprint; negative space is continuous usable space rather than a background merely erased. Keep people products architecture and props structurally complete, with essential faces joints marks controls and copy zones away from crop lines. Background texture perspective light direction and motion may guide the eye but must not invade reserved space. Preserve enough surrounding context for horizontal vertical square and multi-format recropping, and keep the main focus recognizable at thumbnail scale. When later typography is intended, produce only a clean copy-safe region and alignment reference, never pseudo-text. Avoid edge collisions negative space filled by random objects subject-copy competition unbalanced visual weight inconsistent peer scale dividers cutting faces or products perspective discontinuity across regions excessive centering meaningless borders gibberish watermarks or stretched subjects used to fit a ratio",
};

const layoutGuidanceByGroup: Record<string, { zh: string; en: string }> = {
  "subject-position": {
    zh: "；用九宫格交点、视觉重心和朝向空间精确描述主体位置。中心主视觉依靠尺度与对称稳定，角落和左右下方主体需向画内留出呼吸与视线空间，对角平衡由两个不同量级的视觉锚点建立；圆形窗口是有边界的蒙版开口，环形视觉动线则由多个元素或方向围绕中心组织。避免把角落主体裁断、人物朝向画外、用随机圆框代替构图或把所有方案都退化成正中大头照",
    en: "; define subject placement through rule-of-thirds intersections visual mass and directional breathing room. A centered hero gains stability from scale and symmetry, corner or lower-side anchors retain gaze and movement space toward the frame, and diagonal balance uses two anchors of intentionally different weight. A circular mask window is a bounded aperture, whereas circular visual flow organizes several elements or directions around a center. Avoid cropped corner subjects figures looking out of frame random circles substituted for composition or every layout collapsing into a centered close-up",
  },
  "negative-space": {
    zh: "；把中、左、右、上、下、L 形或斜向留白定义为连续且可排字的几何区域，明确其占画面比例、最小宽度和与主体的边界；主体姿态、视线、道路或光线应朝向留白。留白区域保持低信息密度但仍延续同一背景材质和光照，避免纯白硬洞、零碎空隙、被枝叶穿透、主体验证不足或留白方向与视觉动线相反",
    en: "; define center left right top bottom L-shaped or diagonal negative space as one continuous typographically usable geometry with a stated share of the frame minimum width and clean relation to the subject. Pose gaze road or light should lead toward it. Keep that area low in information while continuing the same background material and illumination, avoiding a hard white hole fragmented gaps foliage crossing the reserve an underdeveloped subject or negative-space direction opposing the visual flow",
  },
  "safe-area": {
    zh: "；安全区需依据方图、竖版海报、宽幅或底部标题的真实裁切范围设置，外圈保留出血和平台遮挡余量，关键内容集中在内部安全框；内框安全区必须由门窗、拱洞、前景或版式边界形成可解释的第二层框架。避免把安全框画成可见 UI 线、四边余量不一致、标题贴底、不同尺寸裁切后丢失主体或框中框遮挡视线",
    en: "; derive the safe zone from the actual square poster panoramic or bottom-title crop, preserving bleed and interface-overlay clearance outside while concentrating essential content inside. An inset frame safe area must arise from an interpretable doorway arch foreground layer or layout boundary. Avoid visible UI guide lines inconsistent edge clearance titles touching the bottom subjects lost after alternate crops or a frame-within-frame blocking the line of sight",
  },
  split: {
    zh: "；斜切、上下、竖向、三联与二三分结构必须定义分区比例、分隔方向和跨区连续元素；各区可呈现不同时间、视角或信息层，但光线、比例与色彩关系需有统一逻辑。竖向分屏强调并列视觉内容，图文左右分栏则明确一侧为图像、一侧为文案安全区。避免每格重复同一画面、分隔穿过关键主体、边线粗重、跨区透视断裂或把多联画误做成随意拼图",
    en: "; diagonal horizontal vertical triptych and asymmetric two-thirds systems define region ratios divider direction and any element continuing across panels. Regions may show different moments viewpoints or information levels while retaining a coherent logic of light scale and color. Vertical split emphasizes parallel visual content, whereas an image-copy split panel reserves one side for imagery and the other for typography. Avoid repeating one image in every cell dividers through the main subject heavy borders broken perspective across regions or a multipanel layout reduced to an arbitrary collage",
  },
  commercial: {
    zh: "；商业版式先确定产品主图、利益点、品牌区、价格或按钮是否真实存在，再为文案、台座和封面标题预留独立层级；产品台座需有接触阴影和承重关系，标题安全区需在复杂背景中保持对比。图文左右分栏不得与等宽双画面混淆。避免伪品牌、乱码、空中悬浮产品、卖点贴满四周、台座透视错误或把商业感等同金色渐变和无来源高光",
    en: "; commercial layouts first determine whether product hero benefit statement brand zone price or control truly exists, then reserve separate hierarchy for copy pedestal and cover title. A pedestal needs contact shadow and load-bearing logic, while title-safe space retains contrast against the background. Do not confuse an image-copy split with two equal image panels. Avoid invented branding gibberish floating products claims around every edge incorrect pedestal perspective or commercial polish reduced to gold gradients and source-free highlights",
  },
  info: {
    zh: "；信息标注、前后对比和时间轴必须以可验证对象、顺序和对应关系为核心：引线不交叉且落到准确部位，对比两侧机位尺度一致，时间轴节点有明确方向和间距。若不生成真实文字，只保留编号位、标签框和空白。避免假数据、引线指向空处、前后图交换构图、时间节点无顺序或装饰图标盖住主体",
    en: "; callout comparison and timeline layouts prioritize verifiable objects order and correspondence: leaders do not cross and terminate on the correct part, before-after sides share camera and scale, and timeline nodes have explicit direction and spacing. If real text is not being generated, reserve only number positions label boxes and blank copy areas. Avoid fabricated data leaders ending in empty space mismatched before-after framing unordered time nodes or decorative icons covering the subject",
  },
  platform: {
    zh: "；轮播横幅、杂志封面、电影片名卡和应用启动页按真实平台阅读方式组织：横幅在移动端裁切后仍保留焦点，封面拥有刊头与主标题安全位，片名卡保持少量高对比标题区，启动页在小屏中心区域保持图标或主视觉清晰。避免把平台名称直接画进图、使用伪界面、忽略状态栏和折叠裁切或在小尺寸堆放细碎信息",
    en: "; carousel banners magazine covers cinematic title cards and app splash screens follow real reading behavior: a banner preserves focus after mobile cropping, a cover reserves masthead and main-title zones, a title card keeps a limited high-contrast title area, and a splash screen keeps its icon or hero clear in the small-screen center. Avoid drawing platform names into the image fake interfaces ignored status-bar or fold crops and dense fine information at small scale",
  },
};

const storyActionBaseGuidance = {
  zh: "；先明确谁在什么地点、为了什么目标、正处于动作的开始、进行或完成阶段，再用身体重心、手部接触、视线、工具状态、对象变化和环境反馈证明事件。每个参与者拥有清楚角色和空间位置，多人互动通过相互视线、距离、传递方向与先后关系连接；关键道具数量、尺寸、握持点和用途正确，动作前后的物理状态连续。画面选择最有信息量的单一瞬间，同时保留必要前因与可推断后果，背景只提供地点、时间和风险证据。避免人物摆拍却没有行为、手与工具不接触、同一物体重复、动作方向冲突、步骤同时发生、表情替代事件、多人互不回应、肢体穿插、悬浮物、危险操作无防护、伪文字、水印或把复杂过程塞成无法阅读的拼贴；除非明确要求流程图，否则输出统一时空中的一个叙事场景",
  en: "; first define who acts where toward what goal and whether the event is at its beginning middle or completion, then prove the action through body balance hand contact gaze tool state object change and environmental response. Each participant has a clear role and spatial position, with group interaction connected through mutual gaze distance transfer direction and sequence. Essential props retain correct count scale grip point and function, and physical states remain continuous before and after the chosen moment. Select one information-rich instant while preserving necessary cause and an inferable consequence; the background supplies only evidence of place time and risk. Avoid posed figures with no action hands missing tools duplicated objects contradictory movement every step happening at once expression substituted for event participants ignoring one another limb intersections floating props unsafe work with no protection pseudo-writing watermarks or an unreadable collage of an entire process. Unless a process diagram is explicitly requested, render one coherent narrative scene in one time and space",
};

const storyActionGuidanceByGroup: Record<string, { zh: string; en: string }> = {
  daily: {
    zh: "；日常行为依靠熟悉环境、自然节奏与小范围物件变化成立：通勤有明确交通和行进方向，园艺有土壤与植物处理，训练有重复动作和器材，收纳有分类前后状态，阅读、烹饪、桌游与等待各有清楚注意对象。避免把日常做成广告摆拍、工具用途错误、食材与火源关系混乱或等待人物无任何时间线索",
    en: "; daily behavior is established through a familiar environment natural rhythm and small object-state changes: commuting has a transport mode and direction, gardening changes soil or plants, training repeats a drill with equipment, organizing reveals categorized before-after states, and reading cooking board games or waiting each has a clear object of attention. Avoid advertising poses incorrect tools confused ingredient-heat relationships or waiting with no temporal evidence",
  },
  creation: {
    zh: "；排练、书写与绘画需表现创作媒介、工作阶段和可见痕迹：乐器姿势与合奏视线正确，笔尖接触纸面且已有内容分布合理，绘画工具、颜料和画面进度对应。避免让成品凭空出现、手握错误、乐器结构变形、画布内容与动作无关或用乱码充当书写成果",
    en: "; rehearsal writing and painting reveal medium work stage and visible trace: instrument posture and ensemble sightlines are correct, a pen contacts the page with plausible existing marks, and painting tools pigment and work-in-progress correspond. Avoid finished work appearing from nowhere incorrect grip deformed instruments canvas content unrelated to the gesture or gibberish used as written output",
  },
  work: {
    zh: "；组装、采访、授课、共创、调试、维修与谈判以任务分工和专业流程为主；零件接口、仪表读数、工具选择、示范对象、提问回应和桌面资料必须相互对应，安全装备符合场所。避免无意义地围着桌子、所有人同时指挥、屏幕乱码成为焦点、工具悬空、错误防护或把谈判简单表现为争吵",
    en: "; assembly interviewing teaching collaboration calibration repair and negotiation center on division of labor and professional workflow. Part interfaces instrument readings tool choice demonstration target question-response and table materials correspond, with safety gear appropriate to the workplace. Avoid people merely gathered around a table everyone directing at once gibberish screens as the focus floating tools incorrect protection or negotiation reduced to shouting",
  },
  adventure: {
    zh: "；露营、调查与发现通过路线、地形、证据和风险管理构成；搭建动作有绳索支点，调查者观察或记录具体线索，发现瞬间让视线与新对象相连，并保留照明、天气和撤离条件。避免无来源宝藏光、角色背对发现物、帐篷结构错误、足迹与行进方向矛盾或把探索做成静态合影",
    en: "; camping investigation and discovery are built from route terrain evidence and risk management. Setup has rope and anchor logic, investigators examine or record a specific clue, and discovery connects gaze to a newly revealed object while preserving light weather and exit conditions. Avoid source-free treasure glow characters facing away from the find impossible tents footprints contradicting travel or exploration rendered as a static group portrait",
  },
  relationship: {
    zh: "；赠礼、庆祝、告别、重逢与祈愿依靠人物间距离、触碰许可、视线和共同关注点表达；礼物有明确传递双方，庆祝围绕具体成果，告别与重逢保留运动方向，祈愿尊重具体文化场所和仪式。避免强制拥抱、所有人同一表情、无对象庆祝、文化符号混用或用夸张眼泪替代关系细节",
    en: "; gift giving celebration farewell reunion and wishing are expressed through interpersonal distance consensual touch gaze and a shared focus. A gift has clear giver and receiver, celebration centers on a specific outcome, farewell and reunion retain movement direction, and wishing respects the particular cultural place and ritual. Avoid forced embraces identical expressions across a group celebration with no cause mixed sacred symbols or exaggerated tears replacing relational detail",
  },
  dramatic: {
    zh: "；疏散、救援与追逐先建立危险来源、逃生或追赶方向、空间障碍和角色优先级；救援者采取正确支撑与防护，群众沿可行通道移动，追逐双方速度、距离和视线连续。避免灾害只靠烟雾滤镜、人员逆着出口奔跑、伤者被错误搬运、车辆与人物尺度失真、血腥猎奇或动作线替代真实物理",
    en: "; evacuation rescue and pursuit first establish the hazard source exit or chase direction spatial obstacles and role priority. Rescuers use correct support and protection, crowds move along a viable route, and pursuer and target maintain coherent speed distance and sightline. Avoid disasters conveyed only by a smoke filter crowds running against the exit unsafe casualty handling distorted vehicle-person scale graphic sensationalism or action lines substituted for physics",
  },
  commercial: {
    zh: "；产品展示由人物、产品和使用情境共同说明卖点：手部握持不遮挡关键结构，标签正面、尺度和材质准确，视线与动作引导到功能而非空泛微笑，并为后期文案留出安全区。避免伪品牌、错误使用方式、产品复制、手指穿模、强行正面朝镜头或让包装文字成为乱码焦点",
    en: "; product presentation communicates benefit through person object and use context together. Grip does not hide essential structure, label orientation scale and material remain accurate, and gaze plus action directs attention to function rather than an empty smile while preserving a copy-safe area. Avoid invented brands incorrect usage duplicated products fingers intersecting geometry forced front-facing orientation or package gibberish becoming the focal point",
  },
};

const clothingBaseGuidance = {
  zh: "；保持人物身份、年龄、体态、姿势和身体比例不变，只改变所选服装部件、版型、材质或搭配。先确定穿着场合、季节、活动强度和内外层顺序，再让领口、肩线、袖窿、腰线、裆部、下摆、开合件与人体关节对齐；布料褶皱从受力点、支撑点、拉伸和重力自然产生，厚薄、挺括、垂坠、弹性、透光与反射符合真实材料。前后片、左右袖、口袋、纽扣、拉链、缝线和图案在转身及多视图中连续，衣物与头发、手、配饰和身体保持正确遮挡，不穿模、不粘皮。服装尺寸与动作匹配，鞋底接地，配饰有固定方式。传统、民族、制服、军装和宗教相关服饰需指明具体地域、年代、身份与穿法，只在合适语境中使用，避免文化混搭或把服装当作身份刻板印象。避免多余袖子、左右结构不一致、领口断裂、扣件漂浮、纹样跨缝错位、透明材质暴露不合理、布料像塑料、盔甲像软布、鞋脚融合、伪品牌、乱码、过度性感化以及无视活动安全性的穿着",
  en: "; preserve identity age body type pose and bodily proportion, changing only the selected garment component silhouette material or styling. First define occasion season activity intensity and inner-to-outer layer order, then align neckline shoulder seam armhole waist rise crotch hem and closures to real joints. Folds arise from tension support stretch and gravity, while thickness stiffness drape elasticity translucency and reflection match the actual material. Front and back panels left and right sleeves pockets buttons zippers seams and motifs remain continuous through turning and multiple views. Clothing maintains correct occlusion with hair hands accessories and body without intersection or skin-tight adhesion. Size supports the action, soles contact the ground and accessories have credible attachment. Traditional ethnic uniform military and religious garments specify region period role and correct wearing context without cultural mixing or using clothing as an identity stereotype. Avoid extra sleeves inconsistent bilateral construction broken necklines floating fasteners motifs misaligned across seams implausible exposure through sheer material plastic fabric soft cloth armor fused feet and shoes fake brands gibberish sexualization or clothing that ignores activity safety",
};

const clothingGuidanceByGroup: Record<string, { zh: string; en: string }> = {
  "tops-sleeves": {
    zh: "；上衣由袖长、肩线、领型、门襟和下摆共同定义；长短袖在肘腕处有明确终点，无袖、背心和吊带保留真实袖窿与肩带受力，高领、V 领、露肩和短款需保持领口覆盖与身体结构合理。衬衫、T恤、卫衣、针织和宽松衬衫通过面料与版型区分。避免仅擦掉袖子、吊带悬空、V领无限下坠、针织纹理贴图化或宽松等同放大身体",
    en: "; tops are defined jointly by sleeve length shoulder seam neckline placket and hem. Long and short sleeves end clearly at elbow or wrist, sleeveless tank and camisole forms retain real armholes and strap tension, and turtleneck V-neck off-shoulder or cropped forms preserve plausible coverage and anatomy. Shirt T-shirt sweatshirt knitwear and oversized shirt differ through construction and fabric rather than labels. Avoid sleeves merely erased floating straps infinitely deep V-necks tiled knit texture or oversized fit achieved by enlarging the body",
  },
  outerwear: {
    zh: "；外套建立在内搭之外并保留厚度、开合、领型和活动余量；西装、风衣、羊毛大衣、羽绒、皮革、牛仔、飞行夹克、开衫、披肩与斗篷以剪裁和材料区分。披肩依靠肩部接触，斗篷和风衣受风但固定点稳定。避免外套与内搭融合、羽绒格线错位、皮革无厚度、披肩悬浮或斗篷遮住全部动作",
    en: "; outerwear sits outside inner layers with visible thickness closure collar and movement allowance. Blazer trench wool coat puffer leather denim bomber cardigan shawl and cloak differ through cut and material. A shawl rests on the shoulders, while cloak and trench respond to wind without losing their anchor. Avoid outer layer fused with the shirt misaligned puffer channels thickness-free leather floating shawls or a cloak hiding every action",
  },
  pants: {
    zh: "；裤装以腰头、裆深、侧缝、膝部和裤脚定义，直筒、阔腿、牛仔、工装、西裤、短裤、背带裤、运动裤和皮裤保持不同结构；口袋与背带可用且左右对应，坐蹲跑时膝裆褶皱随动作变化。避免双腿合成一筒、裆部结构消失、口袋复制、裤脚穿鞋、阔腿裤无重力或皮裤变成镜面塑料",
    en: "; trousers are defined through waistband rise side seam knee and hem, keeping straight wide-leg denim cargo tailored shorts overalls joggers and leather construction distinct. Pockets and straps remain functional and corresponding, while knee and crotch folds change with sitting crouching or running. Avoid legs merged into one tube missing crotch construction cloned pockets hems passing through shoes gravity-free wide trousers or leather rendered as mirror plastic",
  },
  "skirts-dresses": {
    zh: "；裙装和连衣裙明确腰线、裙片数量、长度、开衩、肩带与内衬；百褶保持褶根与展开规律，A字、铅笔、鱼尾和修身版型随步幅限制不同，纱裙有多层轻薄体积，礼服和夏裙符合场合。避免裙摆穿腿、褶皱等间距贴图、鱼尾从错误位置展开、透明纱无内层或坐姿裙片失去支撑",
    en: "; skirts and dresses define waist seam panel count length slit straps and lining. Pleats retain their roots and opening behavior, A-line pencil mermaid and fitted silhouettes allow different strides, tulle gains volume from several light layers, and gowns or sundresses suit their occasion. Avoid hems passing through legs equally tiled pleats mermaid flare beginning at the wrong point sheer fabric with no lining or skirt panels losing support when seated",
  },
  "formal-uniform": {
    zh: "；正式装和制服由岗位、机构、场合与功能决定，西装和衬衫领带保持合体层次，学院、水手、医护、厨师、工装及舞台服遵守真实结构与防护需求；军装风只借鉴剪裁和秩序，不复制现实敏感徽章。避免不同职业制服混搭、无意义肩章、医护与厨师防护错误、领带穿过衣物或舞台服妨碍表演",
    en: "; formalwear and uniforms derive from role institution occasion and function. Suits and shirt-tie sets retain tailored layering, while academy sailor medical chef workwear and stage garments follow real construction and protection needs. Military-inspired clothing may borrow cut and order without copying sensitive real insignia. Avoid mixed occupational uniforms meaningless epaulettes incorrect medical or kitchen protection ties intersecting garments or stage clothing that prevents performance",
  },
  traditional: {
    zh: "；传统服饰需具体说明地域、历史时期、性别表达、礼仪等级与日常或节庆场合；汉服、唐装、旗袍、和服、韩服、纱丽、民族刺绣服、苗银盛装和藏式长袍分别遵循自身交领、系带、裁片、披裹、刺绣与配饰逻辑。避免跨文化部件拼装、左右襟错误、神圣纹样随意装饰、把所有传统服饰做成影楼古装或凭服装推断族裔性格",
    en: "; traditional garments specify region historical period gender expression ceremonial level and everyday or festival context. Hanfu tang-style jacket qipao kimono hanbok sari embroidered ethnic clothing Miao silver ceremonial dress and Tibetan robe each follow their own overlap tie panel wrapping embroidery and accessory logic. Avoid cross-cultural component collage reversed closures sacred motifs used casually every tradition turned into studio costume or ethnicity and personality inferred from dress",
  },
  "fantasy-sci-fi": {
    zh: "；幻想和科幻服装先定义环境危险、能源、行动需求和保护范围；赛博夹克与机能服的口袋带具可用，宇航服有密封、关节和生命支持，机甲与骑士铠甲有分片和活动缝，魔法长袍及蒸汽朋克服有明确材料体系。避免随机发光线、无功能管线、盔甲关节锁死、宇航服漏气结构、历史铠甲与科幻零件无逻辑混合",
    en: "; fantasy and science-fiction clothing first defines environmental hazard energy source mobility and protected area. Cyber jackets and techwear have usable pockets and straps, spacesuits have seals joints and life support, mecha and knight armor use articulated plates and gaps, and magical robes or steampunk outfits maintain a coherent material system. Avoid random luminous lines functionless tubing locked armor joints unsealed spacesuits or illogical mixtures of historical armor and science-fiction parts",
  },
  "accessories-shoes": {
    zh: "；围巾、领巾、蝴蝶结、腰带、手套、帽子、贝雷帽、靴子和运动鞋需有正确系结、尺寸、接触和重力；帽檐围绕头骨，手套贴合手指数量，腰带穿过裤袢，鞋楦与脚踝及地面一致。避免配饰悬浮、围巾穿颈、蝴蝶结无固定点、帽子嵌头、手套多指或左右鞋不成对",
    en: "; scarf neckerchief bow belt gloves hat beret boots and sneakers require correct fastening scale contact and gravity. Brims wrap the skull, gloves match finger count, belts pass through loops, and shoe lasts correspond to ankles and ground. Avoid floating accessories scarves through necks bows with no anchor hats embedded in heads extra glove fingers or unmatched left and right shoes",
  },
  "fit-material": {
    zh: "；叠穿先说明层次顺序与露出范围，修身和宽松只改变衣物余量而不改变体型；薄纱、蕾丝、缎面、毛绒与铆钉皮革分别通过透光、孔隙、各向高光、纤维和固定件表现，并在缝口与受力处保持尺度。避免所有材质同一高光、蕾丝贴花漂浮、薄纱完全透明、毛绒像烟雾、铆钉无背衬或用版型词改造身体比例",
    en: "; layering specifies order and exposed portion, while fitted or loose changes garment ease rather than body shape. Chiffon lace satin fur trim and riveted leather are expressed through transmission openings anisotropic highlight fiber and fastener construction at realistic seam and tension scale. Avoid one highlight response for every material floating lace stickers fully invisible sheer cloth fur rendered as smoke rivets with no backing or fit terms used to reshape the body",
  },
};

const poseBaseGuidance = {
  zh: "；保持人物身份、体态、服装和镜头关系不变，用头、脊柱、骨盆、肩胛、肘、腕、髋、膝和踝的明确角度构建所选姿势。先确定支撑面、承重点、身体重心、运动方向和动作阶段，再让脚底、手掌、膝部、椅面、墙面或道具产生真实接触与反作用力；遮挡顺序、肢体长度和左右关系在透视中保持一致。静态姿势需稳定可持续，动态姿势需有起势、速度、惯性和落点，服装、头发及随身物件跟随同一运动方向。面部表情只辅助动作，不替代姿势。多人姿势为每个人分配独立重心、接触点和安全距离。避免多余或缺失肢体、关节反折、手脚融合、脚底悬空、身体穿过家具、脊柱不自然扭转、左右手混乱、支撑点与重心矛盾、动作冻结无惯性、镜头透视改变肢体比例、遮挡生成重复手脚以及为了夸张姿势破坏人体可行性",
  en: "; preserve identity body type clothing and camera relationship, constructing the selected pose with explicit angles of head spine pelvis scapula elbow wrist hip knee and ankle. First establish support surface load-bearing points center of mass movement direction and action phase, then create real contact and reaction force at soles palms knees chair wall or prop. Occlusion limb length and left-right relation remain consistent in perspective. A static pose is stable and sustainable; a dynamic pose has preparation velocity inertia and landing point, with clothing hair and carried objects following the same motion. Expression supports rather than replaces body action. Group poses give every person an independent center of mass contact point and safe spacing. Avoid extra or missing limbs reversed joints fused hands and feet floating soles bodies passing through furniture impossible spinal twists confused left and right support contradicting center of mass frozen motion without inertia perspective-distorted limb length duplicated extremities from occlusion or anatomical feasibility sacrificed for exaggeration",
};

const poseGuidanceByGroup: Record<string, { zh: string; en: string }> = {
  standing: {
    zh: "；站姿以双脚间距、承重腿、骨盆倾斜和肩线建立稳定性；正面、三分侧、重心偏移、插袋、抱胸、回眸、倚墙和英雄式站姿各有不同支撑。回眸由颈肩和躯干逐级转动，倚墙有明确接触面，低机位英雄姿势仍保持脚底和比例可信。避免双腿粘连、插袋手消失、抱胸手臂穿插、回头超过颈椎范围或倚墙身体悬空",
    en: "; standing poses establish stability through foot spacing weight-bearing leg pelvic tilt and shoulder line. Frontal three-quarter contrapposto pocketed crossed-arm looking-back wall-lean and heroic stances use distinct support. A look back rotates through neck shoulders and torso, wall leaning has a real contact plane, and a low-angle heroic pose keeps feet and proportion credible. Avoid fused legs hands disappearing in pockets intersecting crossed arms cervical overrotation or a body floating beside the wall",
  },
  sitting: {
    zh: "；坐姿和跪姿明确椅面、地面、台阶或膝部承重，骨盆落在支撑面且腿脚有合理去向；端坐、盘腿、侧坐、席地、单膝跪和台阶坐分别处理髋膝角度、衣物压褶和手部支撑。避免臀部悬空、双腿穿椅、盘腿关节打结、跪姿膝盖不接地或裙裤不随坐姿展开",
    en: "; sitting and kneeling define load on chair floor step or knee, with pelvis resting on support and legs placed plausibly. Upright chair sitting cross-legged side sitting floor sitting one-knee kneeling and step sitting each handle hip-knee angle compression folds and hand support differently. Avoid floating pelvis legs through chairs tangled cross-legged joints knees not touching the ground or garments failing to spread and compress with sitting",
  },
  lying: {
    zh: "；仰躺、俯卧、侧躺、半躺和蜷缩由床地、靠背或身体侧面承重，接触部位出现压缩，颈部和脊柱保持可呼吸姿态；半躺需要靠垫或肘臂支撑，蜷缩保持四肢层次可辨。避免身体离开表面、胸腹穿地、头颈悬空、手臂被压消失或躺姿被误做成站立旋转",
    en: "; supine prone side-lying reclining and curled poses bear weight through floor bed backrest or body side, showing compression at contact while neck and spine remain breathable. Reclining needs cushion elbow or arm support, and curling keeps limb layers readable. Avoid bodies separated from the surface torso intersecting the ground unsupported neck arms erased under the body or a lying pose rendered as a rotated standing figure",
  },
  motion: {
    zh: "；行走、奔跑、跳跃、旋转、触碰、转身、甩发和向上伸手选择一个清楚动作相位，区分支撑脚与摆动肢，标明速度方向和下一落点；旋转与甩发共享角动量，触碰动作让指尖与目标距离可信。避免双脚同时无故离地、跑步同手同脚、跳跃没有起落、旋转衣发方向冲突或伸手长度异常",
    en: "; walking running jumping spinning reaching turning hair flipping and overhead reaching select one clear phase, distinguish support foot from swinging limbs and identify speed direction plus next landing. Spin and hair share angular momentum, while reaching leaves a credible fingertip-target distance. Avoid both feet airborne without cause same-side arm-leg running jumps with no takeoff or landing clothing and hair opposing a spin or anatomically extended reach",
  },
  dance: {
    zh: "；舞蹈姿势需指定舞种、节拍阶段、身体轴线和手脚路线；芭蕾强调外开与延伸但保护关节，街舞强调重心与节奏，双人舞有领舞、跟随和接触框架，民族舞尊重具体地域动作语汇，现代舞及手舞保留流动和指尖结构。避免混合不同舞种符号、双人舞无接触、脚位错误、手指数量异常或以飘带代替真实动作",
    en: "; dance specifies form beat phase body axis and hand-foot pathway. Ballet uses turnout and extension without harming joints, street dance emphasizes grounded rhythm, ballroom partners have lead follow and contact frame, traditional dance respects a named regional movement vocabulary, and contemporary or hand dance preserves flow and finger structure. Avoid mixing unrelated dance symbols partners with no contact incorrect foot positions malformed fingers or ribbons substituted for actual movement",
  },
  action: {
    zh: "；战斗、射箭、持剑、瑜伽、弓步、骑行、滑板和蹲姿观察需符合装备与技能力学；武器方向远离自身和同伴，弓弦与箭搭接正确，瑜伽及训练不超伸，骑行和滑板保持脚手接触，蹲姿重心落在脚掌。避免武器穿身、弓弦缺失、剑柄握法错误、运动关节过伸、自行车结构变形或滑板与脚分离",
    en: "; fighting archery sword readiness yoga lunging cycling skateboarding and observational crouching follow equipment and skill mechanics. Weapons point away from self and partners, bowstring and arrow connect correctly, yoga and training avoid hyperextension, cycling and skating maintain hand-foot contact, and a crouch centers weight over the feet. Avoid weapons through bodies missing bowstrings incorrect sword grip hyperextended joints deformed bicycles or feet separated from the skateboard",
  },
  interaction: {
    zh: "；握手、拥抱、牵手、并排、背靠背和亲子互动明确人物数量、身份关系、身高差、接触许可与每只手归属；接触处有轻微压力但不融合，目光和身体朝向互相回应。亲子互动尊重年龄和安全支撑。避免第三只手、手腕扭结、拥抱穿体、背靠背无接触、多人尺寸复制或强迫亲密",
    en: "; handshake embrace hand-holding lineup back-to-back and parent-child interaction define participant count relationship height difference consent and ownership of every hand. Contact has mild pressure without fusion, and gaze plus orientation responds mutually. Parent-child action respects age and safe support. Avoid third hands tangled wrists bodies intersecting in hugs back-to-back figures with no contact cloned participant scale or forced intimacy",
  },
  emotion: {
    zh: "；挥手、指向、托腮、遮脸和持物属于可读手势，必须明确手掌朝向、手指数量、肘部支撑和目标；指向有具体对象，托腮不压穿面部，遮脸保留手与五官遮挡层次，持物符合重量与握法。避免手势与视线相反、手掌翻转、手指融合、物体悬浮或用遮脸掩盖面部生成错误",
    en: "; waving pointing chin-resting face-covering and object-holding are readable gestures requiring palm orientation finger count elbow support and target. Pointing identifies an object, a chin-rest does not pass through the face, face covering preserves hand-feature occlusion, and holding matches object weight and grip. Avoid gesture opposing gaze reversed palms fused fingers floating objects or face covering used to hide facial-generation errors",
  },
  "camera-ready": {
    zh: "；证件照正姿要求头肩正中、双肩接近水平、视线朝镜头并符合证件裁切；走秀台步则保留前后脚节奏、髋肩反向和服装展示面，两者不可混用。避免证件照夸张姿态、走秀静止并腿、镜头畸变、衣物遮脸或为了显瘦改变身体比例",
    en: "; an ID-photo pose centers head and shoulders with nearly level shoulders direct gaze and compliant crop, while runway walking preserves fore-aft step rhythm counter-rotation of hips and shoulders and a readable garment display. Do not mix the two. Avoid exaggerated ID posing a frozen closed-leg runway stance lens distortion clothing over the face or body proportion altered for slimming",
  },
};

const colorMaterialBaseGuidance = {
  zh: "；先确定该选项作用于主体、服装、产品、建筑、背景或全画面的哪一层，并保持光源色、物体固有色与后期色调三者可区分。色彩关系需明确主色、辅色、强调色、明度层级和使用比例，重要文字与主体轮廓保持足够对比，肤色和白色参照不被全局染色。材质需由真实几何厚度、边缘、连接方式、表面微结构、粗糙度、反射、透射、折射和磨损共同证明；纹理尺度随物体距离与透视缩小，接缝、切口、倒角及接触阴影清楚，同一材料在不同朝向受光一致。只让被选中的部件采用该材料，不把人物皮肤、天空和所有背景一起材质化。避免五色平均铺满、全局滤镜替代配色、亮度与饱和度混淆、黑位堵塞、高光剪切、材质纹理平铺、反射无环境、透明体无厚度、金属像灰塑料、玻璃边缘消失、木石纹理跨结构连续、微纹理大于物体、同场所有材料共享一种高光、伪文字、水印或用材质名称替代物理证据",
  en: "; first define whether the control applies to subject clothing product architecture background or the whole image, keeping illuminant color intrinsic object color and post-production grade distinguishable. A color relationship specifies primary secondary accent value hierarchy and coverage ratio, preserving enough contrast for essential typography and silhouette while protecting believable skin and a white reference from blanket tinting. Material is proven through real geometric thickness edges attachment surface microstructure roughness reflection transmission refraction and wear. Texture scale recedes with distance and perspective, while seams cuts bevels and contact shadows remain readable and one material responds consistently across changing orientations. Apply the selected material only to intended components rather than materializing skin sky and every background. Avoid equal coverage of every hue global filters substituted for color design confusion of brightness with saturation crushed blacks clipped highlights tiled texture environment-free reflection transparent solids with no thickness metal rendered as gray plastic disappearing glass edges wood or stone grain continuing across unrelated geometry microtexture larger than the object one highlight shared by every material pseudo-writing watermarks or a material label replacing physical evidence",
};

const colorMaterialGuidanceByGroup: Record<string, { zh: string; en: string }> = {
  palette: {
    zh: "；暖色和冷色只规定总体温度倾向，仍保留少量中性色与自然材质参照；高低饱和控制整体色彩纯度而不改变明暗，粉彩以高明度低至中饱和形成柔和分离，单色用同一色相的明度层级，双色调限定两个职责明确的色族，互补色控制面积避免震动，邻近色依靠明度与材质分层。它们是基础关系而非固定五色色卡。避免暖色等同橙色滤镜、冷色等同全蓝、高饱和荧光化、低饱和灰雾化或互补色各占一半",
    en: "; warm and cool establish an overall temperature tendency while retaining neutral anchors and believable material references. High or low saturation controls chroma rather than exposure; pastel separates forms through high value and low-to-medium chroma, monochrome uses value levels within one hue family, duotone assigns two color families distinct roles, complementary color limits area to prevent vibration, and analogous color relies on value and material separation. These are basic relationships rather than fixed five-swatch palettes. Avoid warm as an orange filter cool as all blue high saturation as fluorescence low saturation as gray haze or complementary colors covering equal halves",
  },
  fabric: {
    zh: "；普通织物、皮革与丝绒分别表现经纬纤维、天然粒面和短绒倒伏方向；织物随折叠产生软褶，皮革在弯折处有细纹与厚边，丝绒高光随绒向移动。缝线和裁片沿结构连接，磨损集中在接触区。避免织纹覆盖皮肤、皮革镜面化、丝绒像毛毯噪点、纤维比例过大或所有褶皱等间距复制",
    en: "; general textile leather and velvet respectively show woven fibers natural grain and directional short pile. Cloth forms soft folds, leather develops fine creases and thick edges at bends, and velvet highlights move with pile direction. Stitching and panels follow construction, with wear concentrated at contact zones. Avoid weave over skin mirror-like leather velvet reduced to blanket noise oversized fibers or folds cloned at equal intervals",
  },
  stone: {
    zh: "；木材、陶瓷、大理石、珍珠母贝和玉石保留各自形成机制：木纹沿纤维和切面变化，陶瓷有胎体与釉层，大理石纹脉穿过体积但不过度重复，母贝呈薄层角度色，玉石以细腻半透、棉絮和抛光边缘表现。避免木纹环绕错误、大理石像印花、陶瓷无厚度、母贝全彩镭射或玉石变透明玻璃",
    en: "; wood ceramic marble pearl nacre and jade retain distinct formation logic: wood grain changes with fiber and cut plane, ceramic has body and glaze, marble veins pass through volume without obvious repetition, nacre shows layered angle-dependent color, and jade combines fine translucency inclusions and polished edges. Avoid grain wrapping incorrectly marble as printed fabric thickness-free ceramic full-rainbow nacre or jade turned into clear glass",
  },
  industrial: {
    zh: "；通用金属先确定钢、铝、铜等基材和加工状态，拉丝金属增加单一方向细纹与各向异性高光；清水混凝土保留模板缝、气孔和矿物颗粒，碳纤维有真实编织与树脂层，软触橡胶低反光且略带阻尼，弹性橡胶通过压缩回弹和较厚边缘证明。避免金属与拉丝金属无差别、混凝土像灰纸、碳纤维棋盘过大、两种橡胶功能混同或工业材质无连接件",
    en: "; generic metal first names a substrate such as steel aluminum or copper and its finish, while brushed metal adds one directional microgroove and anisotropic highlight. Raw concrete retains formwork seams pores and mineral aggregate, carbon fiber shows credible weave beneath resin, soft-touch rubber is low-gloss and damped, and elastic rubber is proven by compression rebound and thicker edges. Avoid generic and brushed metal looking identical concrete as gray paper oversized carbon checkerboard the two rubber functions collapsed together or industrial material with no joints and fasteners",
  },
  translucent: {
    zh: "；玻璃、磨砂玻璃、亚克力、透明树脂、液体凝胶、虹彩珠光和镭射箔膜按厚度与光学机制区分：玻璃有边缘、折射与焦散，磨砂面散射但轮廓仍可见，亚克力边缘清晰且色散较弱，树脂可含气泡或浇注痕，凝胶受容器和表面张力约束，虹彩来自薄膜或片层干涉，箔膜有实体折痕和角度反射。避免所有透明材质都像玻璃、凝胶悬空、虹彩无角度变化、箔膜变数字渐变或透射与反射方向矛盾",
    en: "; glass frosted glass acrylic translucent resin liquid gel iridescent pearl and holographic foil differ by thickness and optical mechanism. Glass has edges refraction and caustics, frosting scatters while preserving a silhouette, acrylic has crisp edges and milder dispersion, resin may contain bubbles or casting traces, gel obeys container and surface tension, iridescence arises from thin-film or layered interference, and foil has physical creases with angle-dependent reflection. Avoid every transparent material looking like glass floating gel iridescence with no angular change foil reduced to a digital gradient or contradictory transmission and reflection directions",
  },
};

for (const parameter of parameters) {
  const recroppedAsset = recroppedParameterAssets[parameter.id];
  if (recroppedAsset) {
    parameter.image = `${import.meta.env.BASE_URL}assets/parameters/${recroppedAsset}?v=20261024-white-frame-recrop`;
  }
  const optimization = promptOptimizations[parameter.id];
  if (optimization) Object.assign(parameter, optimization);
  if (parameter.category === "style" && styleGroupCorrections[parameter.id]) {
    parameter.styleGroup = styleGroupCorrections[parameter.id];
  }
  if (parameter.category === "artist-style" && artistCategoryCorrections[parameter.id]) {
    Object.assign(parameter, artistCategoryCorrections[parameter.id]);
  }
  if (parameter.category === "camera" && cameraGroupCorrections[parameter.id]) {
    parameter.styleGroup = cameraGroupCorrections[parameter.id];
  }
  if (parameter.category === "scene" && sceneGroupCorrections[parameter.id]) {
    parameter.styleGroup = sceneGroupCorrections[parameter.id];
  }
  if (!optimization && parameter.category === "palette") {
    const guidance = paletteGuidanceByGroup[parameter.styleGroup ?? ""];
    if (guidance) {
      parameter.zhPrompt += guidance.zh;
      parameter.enPrompt += guidance.en;
    }
  }
  if (!optimization && parameter.category === "era") {
    const guidance = eraGuidanceByGroup[parameter.styleGroup ?? ""];
    if (guidance) {
      parameter.zhPrompt += guidance.zh;
      parameter.enPrompt += guidance.en;
    }
  }
  if (!optimization && parameter.category === "framing") {
    const guidance = framingGuidanceByGroup[parameter.styleGroup ?? ""];
    if (guidance) {
      parameter.zhPrompt += guidance.zh;
      parameter.enPrompt += guidance.en;
    }
  }
  if (!optimization && parameter.category === "layout-style") {
    const guidance = layoutStyleGuidanceByGroup[parameter.styleGroup ?? ""];
    if (guidance) {
      parameter.zhPrompt += layoutStyleBaseGuidance.zh + guidance.zh;
      parameter.enPrompt += layoutStyleBaseGuidance.en + guidance.en;
    }
  }
  if (parameter.category === "mood") {
    const guidance = moodGuidanceByGroup[parameter.styleGroup ?? ""];
    if (guidance) {
      parameter.zhPrompt += moodBaseGuidance.zh + guidance.zh;
      parameter.enPrompt += moodBaseGuidance.en + guidance.en;
    }
  }
  if (parameter.category === "color-grading") {
    const guidance = colorGradingGuidanceByGroup[parameter.styleGroup ?? ""];
    if (guidance) {
      const base = ["portrait-retouch", "skin-detail"].includes(parameter.styleGroup ?? "")
        ? retouchBaseGuidance
        : colorGradingBaseGuidance;
      parameter.zhPrompt += base.zh + guidance.zh;
      parameter.enPrompt += base.en + guidance.en;
    }
  }
  if (parameter.category === "style") {
    const guidance = visualStyleGuidanceByGroup[parameter.styleGroup ?? ""];
    if (guidance) {
      parameter.zhPrompt += visualStyleBaseGuidance.zh + guidance.zh;
      parameter.enPrompt += visualStyleBaseGuidance.en + guidance.en;
    }
  }
  if (parameter.category === "artist-style") {
    const guidance = artistStyleGuidanceByGroup[parameter.styleGroup ?? ""];
    if (guidance) {
      parameter.zhPrompt += artistStyleBaseGuidance.zh + guidance.zh;
      parameter.enPrompt += artistStyleBaseGuidance.en + guidance.en;
    }
  }
  if (artistCategoryCorrections[parameter.id]) {
    parameter.zhPrompt += heritageCraftCorrectionGuidance.zh;
    parameter.enPrompt += heritageCraftCorrectionGuidance.en;
  }
  if (parameter.category === "ethnic-style") {
    const guidance = ethnicStyleGuidanceByGroup[parameter.styleGroup ?? ""];
    if (guidance) {
      parameter.zhPrompt += ethnicStyleBaseGuidance.zh + guidance.zh;
      parameter.enPrompt += ethnicStyleBaseGuidance.en + guidance.en;
    }
  }
  if (parameter.category === "purpose") {
    const guidance = purposeGuidanceByGroup[parameter.styleGroup ?? ""];
    if (guidance) {
      parameter.zhPrompt += purposeBaseGuidance.zh + guidance.zh;
      parameter.enPrompt += purposeBaseGuidance.en + guidance.en;
    }
  }
  if (parameter.category === "render") {
    const guidance = renderGuidanceByGroup[parameter.styleGroup ?? ""];
    if (guidance) {
      parameter.zhPrompt += renderBaseGuidance.zh + guidance.zh;
      parameter.enPrompt += renderBaseGuidance.en + guidance.en;
    }
  }
  if (parameter.category === "visual-effect") {
    const guidance = visualEffectGuidanceByGroup[parameter.styleGroup ?? ""];
    if (guidance) {
      parameter.zhPrompt += visualEffectBaseGuidance.zh + guidance.zh;
      parameter.enPrompt += visualEffectBaseGuidance.en + guidance.en;
    }
  }
  if (parameter.category === "camera") {
    const guidance = cameraGuidanceByGroup[parameter.styleGroup ?? ""];
    if (guidance) {
      parameter.zhPrompt += cameraBaseGuidance.zh + guidance.zh;
      parameter.enPrompt += cameraBaseGuidance.en + guidance.en;
    }
  }
  if (parameter.category === "lighting") {
    const guidance = lightingGuidanceByGroup[parameter.styleGroup ?? ""];
    if (guidance) {
      parameter.zhPrompt += lightingBaseGuidance.zh + guidance.zh;
      parameter.enPrompt += lightingBaseGuidance.en + guidance.en;
    }
  }
  if (parameter.category === "scene") {
    const guidance = sceneGuidanceByGroup[parameter.styleGroup ?? ""];
    if (guidance) {
      parameter.zhPrompt += sceneBaseGuidance.zh + guidance.zh;
      parameter.enPrompt += sceneBaseGuidance.en + guidance.en;
    }
  }
  if (parameter.category === "background") {
    const guidance = backgroundGuidanceByGroup[parameter.styleGroup ?? ""];
    if (guidance) {
      parameter.zhPrompt += backgroundBaseGuidance.zh + guidance.zh;
      parameter.enPrompt += backgroundBaseGuidance.en + guidance.en;
    }
  }
  if (parameter.category === "character") {
    const guidance = characterGuidanceByGroup[parameter.styleGroup ?? ""];
    if (guidance) {
      parameter.zhPrompt += characterBaseGuidance.zh + guidance.zh;
      parameter.enPrompt += characterBaseGuidance.en + guidance.en;
    }
  }
  if (parameter.category === "ethnicity") {
    const guidance = ethnicityGuidanceByGroup[parameter.styleGroup ?? ""];
    if (guidance) {
      parameter.zhPrompt += ethnicityBaseGuidance.zh + guidance.zh;
      parameter.enPrompt += ethnicityBaseGuidance.en + guidance.en;
    }
  }
  if (parameter.category === "hair-makeup") {
    const guidance = hairMakeupGuidanceByGroup[parameter.styleGroup ?? ""];
    if (guidance) {
      parameter.zhPrompt += hairMakeupBaseGuidance.zh + guidance.zh;
      parameter.enPrompt += hairMakeupBaseGuidance.en + guidance.en;
    }
  }
  if (parameter.category === "expression") {
    const guidance = expressionGuidanceByGroup[parameter.styleGroup ?? ""];
    if (guidance) {
      parameter.zhPrompt += expressionBaseGuidance.zh + guidance.zh;
      parameter.enPrompt += expressionBaseGuidance.en + guidance.en;
    }
  }
  if (parameter.category === "layout") {
    const guidance = layoutGuidanceByGroup[parameter.styleGroup ?? ""];
    if (guidance) {
      parameter.zhPrompt += layoutBaseGuidance.zh + guidance.zh;
      parameter.enPrompt += layoutBaseGuidance.en + guidance.en;
    }
  }
  if (parameter.category === "story-action") {
    const guidance = storyActionGuidanceByGroup[parameter.styleGroup ?? ""];
    if (guidance) {
      parameter.zhPrompt += storyActionBaseGuidance.zh + guidance.zh;
      parameter.enPrompt += storyActionBaseGuidance.en + guidance.en;
    }
  }
  if (parameter.category === "clothing") {
    const guidance = clothingGuidanceByGroup[parameter.styleGroup ?? ""];
    if (guidance) {
      parameter.zhPrompt += clothingBaseGuidance.zh + guidance.zh;
      parameter.enPrompt += clothingBaseGuidance.en + guidance.en;
    }
  }
  if (parameter.category === "pose") {
    const guidance = poseGuidanceByGroup[parameter.styleGroup ?? ""];
    if (guidance) {
      parameter.zhPrompt += poseBaseGuidance.zh + guidance.zh;
      parameter.enPrompt += poseBaseGuidance.en + guidance.en;
    }
  }
  if (parameter.category === "color-material") {
    const guidance = colorMaterialGuidanceByGroup[parameter.styleGroup ?? ""];
    if (guidance) {
      parameter.zhPrompt += colorMaterialBaseGuidance.zh + guidance.zh;
      parameter.enPrompt += colorMaterialBaseGuidance.en + guidance.en;
    }
  }
  const metadata = metadataOptimizations[parameter.id];
  if (metadata) Object.assign(parameter, metadata);
}
