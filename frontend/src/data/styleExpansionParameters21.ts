import type { PromptParameter } from "../types";

const img = (id: string) => `${import.meta.env.BASE_URL}assets/parameters/${id}.jpg?v=20261026-featured-skill-d`;
const noReplica = ["readable text", "logo", "watermark", "brand mark", "recognizable character", "exact copy of existing artwork"];

export const styleExpansionParameters21: PromptParameter[] = [
  {
    id: "style-scene-score-structural",
    category: "style",
    styleGroup: "design-retro",
    zhName: "场景节奏结构画",
    enName: "Scene-Score Structural Print",
    defaultWeight: 1,
    image: img("style-scene-score-structural"),
    zhPrompt: "场景节奏结构画先从实景中提取一个可辨识的摄影锚点，再把路径、重复建筑、间隔、视线停顿和色彩重音转译成克制的几何色场、细线与负空间；抽象结构必须来自场景本身的节奏，摄影与图形共享同一轴线，避免普通照片拼贴、随意几何装饰或音乐符号主题",
    enPrompt: "scene-score structural print retaining one recognizable photographic anchor while translating source-derived paths repeated architecture intervals visual pauses and color accents into restrained geometric fields fine rules and negative space; abstraction follows the scene's own rhythm on shared axes, avoiding generic photo collage arbitrary geometry or music-note themes",
    negative: noReplica
  },
  {
    id: "style-dark-woven-canvas",
    category: "style",
    styleGroup: "craft-print",
    zhName: "暗幕织纹画布",
    enName: "Dark Woven Canvas",
    defaultWeight: 1,
    image: img("style-dark-woven-canvas"),
    zhPrompt: "暗幕织纹画布以深青、炭黑和少量低饱和暖色形成连续而薄的色层，边缘选择性柔化，明暗像从织物内部缓慢浮现；统一细密经纬覆盖全部色区但不遮住主体结构，保留安静、低照度、具有手工画布吸色感的诗意，避免数字噪点、粗麻袋贴图、全黑死区或高亮霓虹",
    enPrompt: "dark woven-canvas style built from continuous thin fields of deep teal charcoal and sparse muted warmth, selectively softened edges and light emerging slowly through the fabric; a unified fine weave remains visible across every color without obscuring structure, quiet low-key and absorbent, avoiding digital noise coarse burlap overlays crushed blacks or neon highlights",
    negative: noReplica
  },
  {
    id: "style-paper-pulp-relief",
    category: "style",
    styleGroup: "craft-print",
    zhName: "纸浆浅浮雕",
    enName: "Paper-Pulp Bas-Relief",
    defaultWeight: 1,
    image: img("style-paper-pulp-relief"),
    zhPrompt: "纸浆浅浮雕把主体压入暖象牙色手工纸浆，轮廓由毫米级起伏、受压纤维、毛边和窄侧光建立，局部矿物颜料像渗入纸纤维而非覆盖表面；大面积留白与含蓄层次保持纸张轻薄感，避免白色塑料雕塑、厚泡沫浮雕、数字法线贴图或灰色印刷轮廓",
    enPrompt: "paper-pulp bas-relief embedding the subject into warm ivory handmade pulp, defining contours through millimeter-scale elevation compressed fibers deckled edges and narrow grazing light, with sparse mineral pigment absorbed into fibers rather than painted on top; broad whitespace and restrained depth preserve paper lightness, avoiding white plastic sculpture thick foam relief digital normal maps or gray printed outlines",
    negative: noReplica
  },
  {
    id: "style-serpent-line-ink",
    category: "style",
    styleGroup: "craft-print",
    zhName: "蛇发游线墨绘",
    enName: "Serpent-Line Ink",
    defaultWeight: 1,
    image: img("style-serpent-line-ink"),
    zhPrompt: "蛇发游线墨绘用极少、极长且有呼吸停顿的黑色自由线概括人物或物件，局部实墨块提供重量，一至两条蛇首般的曲线自然从头发、衣褶或植物枝条中生成又回到原轮廓；暖象牙纸保留大量空白，整体优雅含蓄，避免恐怖怪物、密集花纹、每根头发都变成蛇或装饰性线团",
    enPrompt: "serpent-line ink drawing using very few long breathing black lines to describe a figure or object, with sparse solid ink masses for weight and one or two serpent-head-like curves emerging naturally from hair folds or branches before returning to the original contour; extensive warm-ivory whitespace stays elegant and restrained, avoiding horror monsters dense ornament every hair becoming a snake or decorative tangles",
    negative: noReplica
  },
  {
    id: "style-primary-hardlight",
    category: "style",
    styleGroup: "design-retro",
    zhName: "原色硬光都市",
    enName: "Primary Hardlight City",
    defaultWeight: 1,
    image: img("style-primary-hardlight"),
    zhPrompt: "原色硬光都市把城市真实几何压缩为天空蓝、珊瑚红、近黑和纸白四种平涂色，硬日光把建筑、车辆和路面切成边缘清楚的高反差形块；透视与街道结构保持可信，颜色承担光影而非装饰，避免柔和渐变、额外色系、赛博霓虹、随机拼贴或粗糙套滤镜",
    enPrompt: "primary hardlight city reducing credible urban geometry to exactly sky blue coral red near-black and paper white, with hard sunlight cutting architecture vehicles and pavement into crisp high-contrast masses; perspective and street structure remain intact and color carries light rather than decoration, avoiding soft gradients extra hues cyber neon random collage or a coarse filter",
    negative: noReplica
  },
  {
    id: "style-cream-hollow-sketch",
    category: "style",
    styleGroup: "design-retro",
    zhName: "奶油纸空心速写",
    enName: "Cream-Paper Hollow Sketch",
    defaultWeight: 1,
    image: img("style-cream-hollow-sketch"),
    zhPrompt: "奶油纸空心速写以断续、略有压力变化的黑色轮廓勾出家居、静物或街景，主要形体内部保留纸白，只在识别关键处加入一至三种低饱和平涂色；线条允许缺口和手绘偏差，大面积奶油纸负空间维持轻盈，避免完整上色、铅笔明暗排线、矢量光滑边或儿童涂色书效果",
    enPrompt: "cream-paper hollow sketch describing interiors still life or streets with broken pressure-varying black contours, leaving major forms open to the paper and adding only one to three muted flat accents at identifying details; gaps and hand-drawn deviation stay visible amid generous cream-paper negative space, avoiding full coloring pencil shading vector-smooth edges or a children's coloring-book look",
    negative: noReplica
  }
];
