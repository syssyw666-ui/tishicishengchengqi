import type { PromptParameter } from "../types";

const img = (id: string) => `${import.meta.env.BASE_URL}assets/parameters/${id}.jpg?v=20261025-featured-skill-c`;
const noBrand = ["readable text", "logo", "watermark", "brand mark", "recognizable character"];
const noReplica = [...noBrand, "exact copy of existing artwork"];

export const styleExpansionParameters20: PromptParameter[] = [
  {
    id: "style-fragmented-mixed-media",
    category: "style",
    styleGroup: "design-retro",
    zhName: "碎片混合媒介",
    enName: "Fragmented Mixed Media",
    defaultWeight: 1,
    image: img("style-fragmented-mixed-media"),
    zhPrompt: "碎片混合媒介风格以一个清晰主形象为视觉锚点，把其余信息拆成来源明确的不规则纸片、石墨线、木炭块、网点、半透明硫酸纸、蓝晒或版画肌理；各媒介承担不同的空间或情绪信息，并通过遮挡和纸层形成前中后景，避免固定撕纸模板、完整主体重复、无关装饰堆砌或全画面同一种滤镜",
    enPrompt: "fragmented mixed-media style anchored by one clear hero form, with supporting information separated into source-derived irregular paper fragments graphite lines charcoal masses halftone translucent vellum cyanotype or print textures; each medium carries a distinct spatial or emotional role and layered occlusion builds foreground middle distance and background, avoiding a fixed torn-paper template repeated full subjects unrelated decoration or one global filter",
    negative: noReplica
  },
  {
    id: "style-opaque-acrylic-marker",
    category: "style",
    styleGroup: "craft-print",
    zhName: "无描边丙烯色块",
    enName: "Outline-Free Acrylic Marker Blocks",
    defaultWeight: 1,
    image: img("style-opaque-acrylic-marker"),
    zhPrompt: "无描边丙烯色块插画使用边界清楚的不透明哑光色面概括物体，体积只依靠相邻色块的色相、冷暖和明度差建立；笔触边缘略有手工不齐，纸纹和少量干刷只在局部可见，绝不使用黑色轮廓、白色贴纸边、柔和水彩晕染或写实渐变",
    enPrompt: "outline-free acrylic-marker block illustration reducing forms to crisp opaque matte color masses, with volume created only through adjacent hue temperature and value shifts; edges retain slight hand-shaped irregularity and paper tooth or dry-brush appears sparingly, with no black contour white sticker rim watercolor bloom or photoreal gradient",
    negative: noReplica
  },
  {
    id: "style-fashion-editorial-sketch",
    category: "style",
    styleGroup: "design-retro",
    zhName: "时装编辑速写",
    enName: "Fashion Editorial Sketch",
    defaultWeight: 1,
    image: img("style-fashion-editorial-sketch"),
    zhPrompt: "时装编辑速写以准确服装版型和垂坠关系为核心，用松弛黑色墨线、石墨结构线与少量水粉色块记录全身造型；面部和环境高度简化，布料接缝、褶皱、鞋包等识别点清楚，暖白纸张保留大面积负空间，避免卡通换装、写实人像、水彩满涂或比例失控的细长人体",
    enPrompt: "fashion editorial sketch centered on accurate garment construction silhouette and drape, using relaxed black ink graphite structure and sparse gouache accents to record a full look; simplify face and setting while keeping seams folds footwear and accessories legible on warm ivory paper with generous negative space, avoiding cartoon dress-up photoreal portrait full watercolor coverage or uncontrolled elongated anatomy",
    negative: noReplica
  },
  {
    id: "style-sparse-daily-line",
    category: "style",
    styleGroup: "design-retro",
    zhName: "日常平涂线描",
    enName: "Sparse Daily Line Illustration",
    defaultWeight: 1,
    image: img("style-sparse-daily-line"),
    zhPrompt: "日常平涂线描用中等偏轻、略有压力变化和自然弯折的黑色手绘线概括人物或物件，只保留动作、关系和一至三个空间锚点；黑色块保持纯实，一两种原图强调色使用安静平涂，近白背景留出大量空白，避免矢量光滑线、重复草稿线、幼儿化大眼、彩铅颗粒或水彩阴影",
    enPrompt: "sparse daily line illustration using medium-light organically bending black lines with mild pressure variation to reduce people or objects to action relationship and one to three spatial anchors; keep black masses solid and one or two source-derived accents as calm flat fills on a near-white field with abundant negative space, avoiding vector-smooth contours repeated sketch lines babyish large eyes colored-pencil grain or watercolor shading",
    negative: noReplica
  },
  {
    id: "style-retro-cardstock-stilllife",
    category: "style",
    styleGroup: "photo-film-3d",
    zhName: "复古卡纸静物摄影",
    enName: "Retro Cardstock Still-Life Photography",
    defaultWeight: 1,
    image: img("style-retro-cardstock-stilllife"),
    zhPrompt: "复古卡纸静物摄影把具体物件通过堆叠、平衡、包裹、重复或斜向接触组织成单一阅读路径，使用带纤维、纸齿和轻微吸色不均的单色卡纸布景；真实棚拍光保留陶土、金属、木材、织物和食物触感，趣味来自物件关系而非文字表演，避免白底电商图、光滑 CGI、生活方式房间或无接触的道具散摆",
    enPrompt: "retro cardstock still-life photography arranging concrete objects through stacking balancing wrapping repetition or diagonal contact into one readable path on monochrome colored-card sets with visible fibers tooth and slight uneven absorption; real studio light preserves clay metal wood textile and food tactility, with wit coming from object relationships rather than copy, avoiding white ecommerce packshots polished CGI lifestyle rooms or disconnected prop scattering",
    negative: noBrand
  },
  {
    id: "style-frosted-object-editorial",
    category: "style",
    styleGroup: "design-retro",
    zhName: "磨砂物件编辑插画",
    enName: "Frosted Object Editorial",
    defaultWeight: 1,
    image: img("style-frosted-object-editorial"),
    zhPrompt: "磨砂物件编辑插画把日常物件重新设计为乳白半透明的大块柔雾平面，内部颜色像隔着磨砂材质般轻微扩散，远侧轮廓柔化并通过重叠显色；背景纯净、主体居中、几乎无投影，只保留说明通透层次所需的柔光与色场，避免对原照片直接模糊、玻璃滤镜覆盖、闪亮硬反射、塑料 3D 或扁平不透明图标",
    enPrompt: "frosted-object editorial illustration redesigning an everyday object as broad milky translucent soft-focus planes, with internal colors gently diffused through frosted material, far contours softened and overlap revealed through color; keep a clean centered field with almost no shadow and only the light and color needed for translucency, avoiding direct source-photo blur glass-overlay filters hard shiny reflections plastic 3D or an opaque flat icon",
    negative: noReplica
  }
];
