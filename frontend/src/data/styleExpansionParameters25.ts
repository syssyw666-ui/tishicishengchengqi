import type { PromptParameter } from "../types";

const img = (id: string) => `${import.meta.env.BASE_URL}assets/parameters/${id}.jpg?v=20261026-featured-skill-h`;
const noReplica = ["readable text", "logo", "watermark", "brand mark", "recognizable character", "exact copy of existing artwork"];

export const styleExpansionParameters25: PromptParameter[] = [
  {
    id: "style-portrait-structural-surrealism",
    category: "style",
    styleGroup: "design-retro",
    zhName: "人物结构超现实摄影",
    enName: "Portrait Structural Surrealism",
    defaultWeight: 1,
    image: img("style-portrait-structural-surrealism"),
    zhPrompt: "人物结构超现实摄影从人物真实手势、接触点、发丝质量、衣料受力、肩颈曲线或身体负形中发现第二结构，让人体局部通过连续轮廓、共享材质、拉力、支撑、尺度反转或负形嵌套自然成为新的场景或物件；第一阅读仍是可信肖像，第二阅读才出现视觉双关，五官、表情和人物身份保持完整。构图围绕一个清楚机制展开，媒介和色彩只负责强化连接。避免普通换背景、装饰花框、贴附道具、任意液化、切割五官、重复面孔、身体融合、恐怖化和多个隐喻互相竞争。",
    enPrompt: "portrait structural surrealism that discovers a second structure inside an authentic gesture, point of contact, hair mass, fabric tension, shoulder curve or bodily negative space. One local part becomes a new scene or object through continuous contour, shared material, visible force, support, reversed scale or nested negative shape; the first reading remains a believable portrait and the second reveals the visual metaphor while facial identity and expression stay intact. Build the composition around one legible mechanism and let medium and color reinforce that connection. Avoid ordinary background replacement, decorative floral frames, pasted props, arbitrary liquify distortion, cut facial features, duplicated faces, fused anatomy, horror treatment or competing metaphors.",
    negative: noReplica
  },
  {
    id: "style-ghost-line-zine",
    category: "style",
    styleGroup: "craft-print",
    zhName: "余影线稿拼贴",
    enName: "Ghost-Line Zine",
    defaultWeight: 1,
    image: img("style-ghost-line-zine"),
    zhPrompt: "余影线稿拼贴把真实照片作为有限色块保留，只让被照片边缘实际截断的建筑、枝条、山脊、云层、道路或人物轮廓在暖白纤维纸上继续生长为轻盈墨线；线条从精确连接点出发，遵循源图的比例、透视与运动方向，越远越概括，最终回到留白。照片与纸面的边缘克制且只服务衔接，缺失部分通过线稿而非实色补全。避免延伸画面内部已经完整的对象、画出复制主体、无来源飘线、实色填充、普通外扩、四边规则撕纸框、贴纸白边和满页装饰。",
    enPrompt: "ghost-line zine language retaining the photograph as a bounded field of real color while only structures genuinely cut by its edge—architecture, branch, ridge, cloud, road or figure contour—continue onto warm fibrous paper as light ink drawing. Lines start at exact connection points, obey source scale, perspective and movement, simplify with distance and finally return to untouched space. The photo-paper edge stays restrained and exists only to support continuity; absence is completed through line rather than solid fill. Avoid extending subjects already complete inside the frame, drawing duplicate objects, source-less floating strokes, solid filled additions, ordinary outpainting, four-sided torn-paper templates, sticker borders or full-page decoration.",
    negative: noReplica
  },
  {
    id: "style-dreamcore-archive-collage",
    category: "style",
    styleGroup: "design-retro",
    zhName: "梦核档案拼贴",
    enName: "Dreamcore Archive Collage",
    defaultWeight: 1,
    image: img("style-dreamcore-archive-collage"),
    zhPrompt: "梦核档案拼贴以一个可辨主体为锚点，把二至五个局部细节作为回声碎片，通过错误尺度、镜像、重复、倒置、透明层或伪界面窗口形成不稳定的数字记忆；矩形切片、圆形孔洞、网格和窄条只选择一种主要秩序，画面高密度但保持锚点、回声与环境的清楚层级。色盘限制在二至四种，表面叠加扫描线、粗网点、复印颗粒、轻微 RGB 偏移、JPEG 压缩块或磨损中的少数媒介痕迹。避免商业广告层级、普通故障滤镜、稀疏极简版式、随机贴纸、九宫格模板、彩虹噪声和主体被碎片吞没。",
    enPrompt: "dreamcore archive collage built around one recognizable anchor and two to five echo fragments, using broken scale, mirroring, repetition, inversion, translucent layers or pseudo-interface windows to create an unstable digital memory. Choose one dominant ordering device from rectangular slices, circular apertures, grids or narrow bands; keep the composition dense yet preserve a clear hierarchy of anchor, echoes and environment. Limit the palette to two to four colors and apply only a few media defects from scanlines, coarse halftone, photocopy grain, slight RGB offset, JPEG blocks or worn surfaces. Avoid commercial-ad hierarchy, generic glitch filters, sparse minimal layouts, random stickers, nine-panel templates, rainbow noise or fragments overwhelming subject recognition.",
    negative: noReplica
  }
];
