import type { PromptParameter } from "../types";

const img = (id: string) => `${import.meta.env.BASE_URL}assets/parameters/${id}.jpg?v=20261026-featured-skill-i`;
const noReplica = ["readable text", "logo", "watermark", "brand mark", "recognizable character", "exact copy of existing artwork"];

export const styleExpansionParameters26: PromptParameter[] = [
  {
    id: "style-photo-marker-split-media",
    category: "style",
    styleGroup: "design-retro",
    zhName: "写实与单色马克笔",
    enName: "Photoreal and Monochrome Marker",
    defaultWeight: 1,
    image: img("style-photo-marker-split-media"),
    zhPrompt: "写实与单色马克笔混合媒介把一个核心主体保留为完整摄影质感，其余环境压缩为白底上的单色粗细马克笔线稿；真实主体与线稿空间在脚底、手中道具、家具承托和遮挡边界处精准相接，线条以断续笔触和少量排线交代透视，大面积纸白承担空气与节奏。全图只允许主体原色、白底和一种马克笔色，避免主体插画化、抠图白边、贴纸阴影、背景残留、彩色填充和复杂涂鸦。",
    enPrompt: "split-media treatment preserving one hero subject as complete photoreal photography while compressing the surrounding environment into monochrome marker drawing on clean white. The real subject and drawn space meet precisely at feet, held props, furniture support and occlusion edges; variable marker strokes, broken lines and sparse hatching explain perspective while broad untouched paper carries air and rhythm. Restrict the image to the subject's native colors, white ground and one marker color. Avoid illustrating the hero, cutout halos, sticker shadows, fragments of the original background, colored fills or dense decorative doodles.",
    negative: noReplica
  },
  {
    id: "style-ink-clay-transition",
    category: "style",
    styleGroup: "craft-print",
    zhName: "水墨黏土转场",
    enName: "Ink-to-Clay Transition",
    defaultWeight: 1,
    image: img("style-ink-clay-transition"),
    zhPrompt: "水墨黏土转场让同一主体从暖白纸上的平面墨线、淡染和干笔色块，经过逐渐增厚的低浮雕过渡带，连续生长为哑光手塑黏土微景；颜色、轮廓、透视和接触点在两种媒介之间逐项对应，黏土保留轻微手捏痕、圆润边缘与真实接触阴影。构图以单一过渡方向和大量纸面留白建立秩序，避免左右硬切、悬浮模型、塑料亮面、全画面三维化或传统符号堆砌。",
    enPrompt: "ink-to-clay transition in which one subject moves continuously from flat ink contours, pale washes and dry-brush color on warm paper, through a gradually thickening low-relief zone, into a matte hand-modelled clay miniature. Color, contour, perspective and contact points correspond across both media; clay retains subtle finger marks, rounded edges and real contact shadows. Use one transition direction and broad paper negative space. Avoid a hard half-and-half split, floating models, glossy plastic, converting the whole frame to 3D or piling on generic traditional symbols.",
    negative: noReplica
  },
  {
    id: "style-bold-contour-pure-ink",
    category: "style",
    styleGroup: "craft-print",
    zhName: "粗轮廓纯墨",
    enName: "Bold-Contour Pure Ink",
    defaultWeight: 1,
    image: img("style-bold-contour-pure-ink"),
    zhPrompt: "粗轮廓纯墨风格使用纸白与纯黑两值完成角色或物件：中等偏粗、带手绘压力变化的外轮廓负责身份和体积，内部线更轻、更少，仅在凹陷、重叠、孔洞和关键结构处布置零至四组紧凑黑块。大部分表面保持白色，缩小后依靠轮廓和黑块节奏仍可辨识。避免灰阶、半调、密集排线、矢量等宽描边、大面积平均填黑、断裂草稿线和背景叙事。",
    enPrompt: "bold-contour pure-ink language built only from paper white and solid black. Medium-heavy outer contours with visible hand pressure carry identity and volume; internal marks are fewer and lighter, while zero to four compact black-shape families explain recesses, overlaps, apertures and decisive structure. Most surfaces remain white and recognition survives at thumbnail size through silhouette and black-shape rhythm. Avoid grayscale, halftone, dense hatching, uniform vector strokes, indiscriminate solid fills, broken rough-sketch lines or narrative backgrounds.",
    negative: noReplica
  },
  {
    id: "style-material-explainer",
    category: "style",
    styleGroup: "design-retro",
    zhName: "材质化解释插画",
    enName: "Material Explainer Illustration",
    defaultWeight: 1,
    image: img("style-material-explainer"),
    zhPrompt: "材质化解释插画以克制瑞士编辑网格组织柔和哑光三维体块、简洁场景对象、细腻接触阴影和一种语义高亮色，用真实空间关系直接说明流程、循环、层级、对比或因果。形体圆润但不玩具化，标签与箭头只在需要解释关系时出现，缩小后仍有清楚入口。避免装饰性 3D 堆砌、玻璃拟态、渐变泛滥、复杂写实背景、无意义图标和所有模块同权。",
    enPrompt: "material explainer illustration using a restrained Swiss editorial grid, soft matte three-dimensional forms, concise scene objects, delicate contact shadows and one semantic accent color to make process, loop, hierarchy, comparison or causality legible through spatial relationships. Forms are rounded without becoming toy-like; labels and arrows appear only when they explain a relation, and the reading entry remains clear at thumbnail size. Avoid decorative 3D clutter, glassmorphism, excessive gradients, complex realistic backgrounds, meaningless icons or equal emphasis across every module.",
    negative: noReplica
  },
  {
    id: "style-three-color-corner-mascot",
    category: "style",
    styleGroup: "design-retro",
    zhName: "三色角落IP",
    enName: "Three-Color Corner Mascot",
    defaultWeight: 1,
    image: img("style-three-color-corner-mascot"),
    zhPrompt: "三色角落 IP 以四至七个圆润大形建立亲和、可识别的原创角色轮廓，角色从方形画面的左下或右下自然探出并占据主要面积。严格使用两种角色基础色和一种命名纯色背景，面部与肢体只保留必要符号，同色轻微明暗建立克制厚度。避免中心悬浮、复杂场景、尖锐零件、写实毛发、第四种颜色、应用图标外框、文字和版权角色。",
    enPrompt: "three-color corner mascot language using four to seven large rounded shapes for a friendly, recognizable original silhouette that naturally emerges from the lower-left or lower-right of a square and occupies most of the frame. Use exactly two character base colors plus one named solid background; keep facial and limb marks essential and create restrained depth only through subtle value changes within those colors. Avoid centered floating figures, complex scenes, sharp fragile parts, realistic fur, a fourth color, app-icon frames, text or copyrighted characters.",
    negative: noReplica
  }
];
