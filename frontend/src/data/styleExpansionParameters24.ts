import type { PromptParameter } from "../types";

const img = (id: string) => `${import.meta.env.BASE_URL}assets/parameters/${id}.jpg?v=20261026-featured-skill-g`;
const noReplica = ["readable text", "logo", "watermark", "brand mark", "recognizable character", "exact copy of existing artwork"];

export const styleExpansionParameters24: PromptParameter[] = [
  {
    id: "effect-pixel-dissolve-paper",
    category: "visual-effect",
    styleGroup: "digital",
    zhName: "纸面像素消散",
    enName: "Paper Pixel Dissolve",
    defaultWeight: 1,
    image: img("effect-pixel-dissolve-paper"),
    zhPrompt: "纸面像素消散把主体重构为有限色方形块，识别中心和关键结构保持较高像素密度，轮廓、道路、水面、植被或远景则沿真实透视、流向和运动方向逐步减少方块数量、扩大块间距离并回到暖白纸面；消散来自独立实体块的密度递减，不使用透明渐变、羽化、模糊或随机噪声。主体内部仍有完整质量和源图颜色层级，纸白始终是最大色域。避免全图降采样、照片马赛克、RGB 故障、像素切片拉伸、体素 3D、游戏界面、十字绣、满版方块和均匀四向爆散。",
    enPrompt: "paper-based pixel dissolution reconstructing the subject with a compressed source-derived palette of discrete square or near-square blocks. The recognizable center, defining silhouette turns and identity details retain higher block density and coherent mass, while peripheral architecture, road, water, vegetation, reflection or distance progressively loses blocks and increases spacing along the source perspective, flow or motion direction until untouched warm paper becomes dominant. Dissolution is caused only by fewer independent physical-looking blocks, never opacity gradients, feathering, blur or random noise. Interior value steps and identifying colors remain legible and paper white is the largest field. Avoid global downsampling, photo mosaic, RGB glitch, stretched pixel slices, voxel 3D, game UI, cross-stitch, a full-bleed block background, uniform four-direction explosions or loss of the subject anchor.",
    negative: noReplica
  },
  {
    id: "style-sculptural-impasto-miniature",
    category: "style",
    styleGroup: "craft-print",
    zhName: "立体厚涂微景观",
    enName: "Sculptural Impasto Miniature",
    defaultWeight: 1,
    image: img("style-sculptural-impasto-miniature"),
    zhPrompt: "立体厚涂微景观以真实油画颜料的堆积高度塑造小型地景，主体轮廓由刮刀压痕、颜料脊线、抬高边缘、混色断面和半手塑体积组成，水面、道路、山脊或光带被整理为狭长而轻巧的厚涂基座，让主体获得可信落点；重颜料只集中在结构、浪花、云层和高光，周围保留大量白色纹理纸。色彩从场景最明亮的几种色相提炼，既有油画材料重量又有微距模型的清晰尺度。避免普通平面油画滤镜、满版颜料、软陶、公仔、塑料 CGI、糖果玩具感、无落点悬浮和所有表面具有相同厚度。",
    enPrompt: "sculptural impasto miniature language using genuine oil-paint buildup as physical volume rather than a flat painterly filter. The subject and its small landscape are formed by palette-knife compression, raised pigment ridges, lifted edges, broken color cross-sections and partly hand-shaped masses; water, path, ridge or light becomes a narrow lightweight impasto base that gives the subject a credible point of support. Heavy paint concentrates on structural accents, waves, clouds and selected highlights while broad white textured paper remains untouched. A compact palette comes from the scene's brightest identifying hues, balancing the material weight of oil paint with the readable scale of a macro-photographed miniature. Avoid ordinary flat oil-paint filters, full-canvas paint coverage, polymer clay, figurines, plastic CGI, candy-toy color, unsupported floating subjects, equal paint thickness everywhere or a decorative base unrelated to the scene.",
    negative: noReplica
  },
  {
    id: "style-rounded-modular-isometric",
    category: "style",
    styleGroup: "design-retro",
    zhName: "圆角等距模块雕塑",
    enName: "Rounded Isometric Modules",
    defaultWeight: 1,
    image: img("style-rounded-modular-isometric"),
    zhPrompt: "圆角等距模块雕塑先分析主体的重心、轴线、曲线、孔洞、层级、遮挡与关键负形，再用不同尺度的圆角几何体通过堆叠、嵌套、穿插、悬接和前后互锁重建同一结构；大模块承担质量，小模块只服务识别细节，体块节奏来自高度差、密度变化和留白。表面呈细哑光纸浆、粉蜡、软木或柔性复合材料，阴影柔和，配色从对象本身提炼并清理脏灰。避免乐高凸点、规则体素、像素化、机械爆炸图、儿童积木、塑料高光、金属科幻、每块等大或仅把照片切成方块。",
    enPrompt: "rounded isometric modular-sculpture language beginning with the subject's center of gravity, axes, curves, openings, layers, occlusions and defining negative spaces, then rebuilding the same structure through modules of varied scale that stack, nest, interlock, pass through one another or bridge selectively. Large rounded volumes carry mass while smaller units appear only at identity-critical details; stepped height, front-back overlap, density variation and generous empty space create rhythm. Surfaces resemble finely matte pulp, powder wax, soft cork or flexible composite with gentle shadows, and the palette is extracted from the subject then cleaned of muddy mixtures. Avoid LEGO studs, regular voxelization, pixel art, mechanical exploded diagrams, children's blocks, plastic highlights, metallic sci-fi parts, equal-size modules or merely chopping a photograph into cubes.",
    negative: noReplica
  },
  {
    id: "style-kraft-stencil-print",
    category: "style",
    styleGroup: "craft-print",
    zhName: "牛皮纸双色镂印",
    enName: "Kraft Two-Color Stencil",
    defaultWeight: 1,
    image: img("style-kraft-stencil-print"),
    zhPrompt: "牛皮纸双色镂印使用一张连续深棕天然纤维纸与一种高覆盖浅色油墨，以大面积连续浅色负形和少量深色内孔建立主体识别；轮廓顶部与关键开口保持坚实，下缘或次要边缘通过模板切口、局部漏墨、纸纤维露底和不规则压力逐渐回到深色纸面。明暗不依赖摄影渐变或排线，而依靠正负形比例、连桥与孔洞设计。避免普通黑剪影、矢量图标、自动阈值、细密蚀刻、多色套印、规则网点、数字透明度、立体纸雕、伪旧污渍铺满和无结构的破损边。",
    enPrompt: "two-color kraft stencil printing using one continuous dark natural-fiber paper and a single opaque light ink. Recognition is built from one large connected light negative form plus a few dark internal openings; the top silhouette and identity-critical apertures remain firm while the lower or secondary edge recedes through real stencil gaps, incomplete ink transfer, exposed fibers and irregular pressure into the dark paper ground. Tone comes from positive-negative proportion, bridges and cutout logic rather than photographic gradients or hatching. Avoid ordinary black silhouettes, vector icons, automatic threshold filters, fine etching, multicolor registration, regular halftones, digital opacity, dimensional papercraft, all-over fake grime or damaged edges with no structural purpose.",
    negative: noReplica
  },
  {
    id: "style-charcoal-fading-memory",
    category: "style",
    styleGroup: "craft-print",
    zhName: "炭笔物理渐隐",
    enName: "Physical Charcoal Fade",
    defaultWeight: 1,
    image: img("style-charcoal-fading-memory"),
    zhPrompt: "炭笔物理渐隐使用柳条炭、压缩炭、炭笔和极少石墨在干净暖白纸上建立“清楚结构—断裂轮廓—有限擦抹—橡皮提亮—稀疏粉尘—未触碰纸白”的真实材料序列；焦点以短而有方向的宽笔触和深黑质量保持清楚，渐隐只发生在指定边缘，炭粉、碎屑和擦痕局限在主体附近。明度由炭量、纸齿与提亮共同产生，不用透明度。避免数字模糊、羽化、空气笔、雾层、满页脏灰、均匀粉尘、完整学术素描、密排线、黑白照片滤镜和主体四周同样消失。",
    enPrompt: "physical charcoal fading made with willow charcoal, compressed charcoal, charcoal pencil and a trace of graphite on pristine warm drawing paper. The material sequence remains observable: clear structure, broken contour, limited smudge, kneaded-eraser lift, sparse powder residue and finally untouched paper. Short directional broad marks and deep black mass keep the focal structure legible; fading occurs only along a chosen edge, and dust, crumbs and rubbing stay close to the subject. Value comes from charcoal quantity, paper tooth and lifted material rather than opacity. Avoid digital blur, feathering, airbrush, fog layers, dirty paper everywhere, evenly distributed powder, a complete academic drawing, dense hatching, monochrome photo filters or making every edge disappear equally.",
    negative: noReplica
  },
  {
    id: "style-clean-ink-stipple-memory",
    category: "style",
    styleGroup: "craft-print",
    zhName: "纯墨受控点描",
    enName: "Clean Ink Stipple Memory",
    defaultWeight: 1,
    image: img("style-clean-ink-stipple-memory"),
    zhPrompt: "纯墨受控点描以饱和纯黑液体墨块建立主体核心，用少量粗细变化的经济线条说明结构，再以边缘清楚、大小克制、人工布置的圆点承担中间明度和边缘后退，形成“实黑—点描—洁净象牙白纸”的明确顺序；所有点只位于主体及必要延伸，不平均覆盖背景，纸面无灰雾、污迹或随机喷溅。避免炭粉、铅笔排线、水墨晕染、干刷飞白、均匀印刷网点、照片半调滤镜、像素马赛克、全页颗粒、自动描边和装饰性泼墨。",
    enPrompt: "clean ink-and-stipple language establishing the subject core with saturated pure-black liquid-ink masses, explaining structure with only a few economical variable lines, then carrying intermediate tone and edge recession through deliberately placed crisp round dots of restrained size. The visual order is explicit: solid black form, controlled stippling, pristine ivory paper. Every dot belongs to the subject or a necessary extension and never spreads evenly across the background; the sheet remains free of gray fog, stains and random spray. Avoid charcoal powder, pencil hatching, ink wash blooms, dry-brush scuffing, uniform printed halftone screens, photographic halftone filters, pixel mosaics, all-over grain, automatic outlines or decorative splatter.",
    negative: noReplica
  }
];
