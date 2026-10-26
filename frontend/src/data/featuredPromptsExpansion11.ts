import type { FeaturedPromptItem } from "./featuredPrompts";

export const featuredPromptsExpansion11: FeaturedPromptItem[] = [
  {
    id: "img2img-tiled-detail-refinement",
    category: "image-to-image",
    group: "style-transfer",
    zhTitle: "分块超分重点精修",
    enTitle: "Tiled High-Resolution Refinement",
    zhDescription: "按重叠分块逐区补足真实细节，并单独精修面部或关键物件，保持整图结构不漂移。",
    enDescription: "Rebuild overlapping tiles and priority regions at high resolution while keeping the full image structurally stable.",
    originalImage: "/assets/featured/img2img-tiled-detail-refinement-original.jpg",
    resultImage: "/assets/featured/img2img-tiled-detail-refinement-result.jpg",
    prompt: "请对上传图片执行“分块超分重点精修”，目标输出为“2K / 4K / 8K / 自定义长边”，始终保持原始宽高比。先锁定整图构图、人物身份、姿态、物体数量、文字位置、透视、光线方向、色彩关系、景深和原有画风，再把画面规划为带 10% 至 16% 重叠上下文的连续分块；每块只补足在目标尺寸下应当可见的真实纹理、边缘连续性、发丝、织物、材质和环境细节，不改变轮廓、比例或局部内容。相邻块必须通过共同结构、低频色调和颗粒匹配无缝衔接，不出现接缝、重复物体或清晰度跳变。对“面部 / 手部 / 产品标识留空区 / 核心机械结构”中的指定重点区域再做一次受保护局部精修：区域外像素保持不变，区域内与原图的肤色、笔触、焦点、噪点和光线一致。虚焦、胶片颗粒、纸张肌理和平涂边缘属于原作特征时必须保留，不把所有区域强行锐化。最终检查整体缩略图、100% 局部、每条分块边界及重点区域前后对照。避免普通插值放大、AI 换脸、重画构图、凭空新增纹理、过度锐化光晕、塑料皮肤、重复发丝、文字变形、块间色差、接缝、Logo 和水印。"
  },
  {
    id: "img2img-photo-marker-environment",
    category: "image-to-image",
    group: "style-transfer",
    zhTitle: "写实主体马克笔环境",
    enTitle: "Photoreal Subject in Marker World",
    zhDescription: "完整保留写实主体，只把周围环境压缩成单色马克笔线稿与大面积白底。",
    enDescription: "Keep the hero subject photographic while reducing the surrounding world to one-color marker drawing and white space.",
    originalImage: "/assets/featured/img2img-photo-marker-environment-original.jpg",
    resultImage: "/assets/featured/img2img-photo-marker-environment-result.jpg",
    prompt: "请把上传照片转化为“写实主体与单色马克笔环境”的混合媒介作品。先精确分离一个核心人物或物件，完整保留其真实摄影质感、身份、姿势、服装、材质、光线、阴影和边缘细节，不对主体做插画化处理；主体直接接触、握持或遮挡的局部也保留真实接触关系。除主体外的街道、建筑、家具、植物、天空和远景全部改画为“指定单色”的松弛马克笔线稿，使用粗细变化、断续笔触、少量交叉排线和大面积干净白底概括空间，只保留支撑主体位置与故事所需的结构。摄影主体与线稿环境必须在脚底、座椅、桌面、手中道具和遮挡边界处准确相接，不能像抠图贴纸悬浮。全图只使用真实主体原色、白色背景和一种马克笔颜色，不加入第二种插画色。避免把人物脸部转成线稿、保留真实背景碎片、主体白边、贴纸投影、复杂涂鸦、彩色填充、文字、Logo、水印、改变人数或添加无关物件。"
  },
  {
    id: "img2img-ink-to-clay-transition",
    category: "image-to-image",
    group: "style-transfer",
    zhTitle: "水墨生长黏土微景",
    enTitle: "Ink-to-Clay Emerging Miniature",
    zhDescription: "让照片主体先化为平面水墨，再从一个真实接触点逐渐生长成哑光黏土微景。",
    enDescription: "Translate the subject into flat ink and let it physically emerge as a matte clay miniature from one credible contact point.",
    originalImage: "/assets/featured/img2img-ink-to-clay-transition-original.jpg",
    resultImage: "/assets/featured/img2img-ink-to-clay-transition-result.jpg",
    prompt: "请把上传照片制作成“水墨生长黏土微景”混合媒介作品。保留原图最有辨识度的主体轮廓、主要色彩、朝向和空间关系，将画面约 60% 至 70% 转译为铺在暖白手账纸上的平面水墨淡彩：形体以墨线、留白、淡染和少量干笔概括，不逐项描摹琐碎纹理。选择一个符合原图结构的接触点，例如笔尖、道路尽头、屋檐边、枝条末端或水岸，让其余 30% 至 40% 从纸面连续隆起为手工哑光黏土微缩景观；平面墨迹先变厚、形成低浮雕，再成为完整体块，颜色、轮廓和透视在过渡带一一对应。黏土部分保留轻微手捏痕、圆润边缘、真实接触阴影和可信重力，不能像单独摆放的玩具。背景只保留纸张、绘画工具或少量与原场景有关的观察痕迹。避免左右机械对半、突然切换材质、悬浮模型、塑料亮面、全画面 3D、传统水墨元素堆砌、改变主体身份、额外人物、长文字、Logo 和水印。"
  },
  {
    id: "img2img-rippled-glass-portrait",
    category: "image-to-image",
    group: "style-transfer",
    zhTitle: "波纹玻璃折射肖像",
    enTitle: "Rippled-Glass Refracted Portrait",
    zhDescription: "通过一扇清晰视窗保留人物身份，其余轮廓被真实波纹玻璃分段折射。",
    enDescription: "Preserve identity through one clear optical window while real rippled glass refracts the surrounding silhouette.",
    originalImage: "/assets/featured/img2img-rippled-glass-portrait-original.jpg",
    resultImage: "/assets/featured/img2img-rippled-glass-portrait-result.jpg",
    prompt: "请把上传的单人人像制作成“波纹玻璃折射肖像”。保持人物身份、年龄、表情、姿态、服装和原始取景不变，在相机与人物之间加入一整块有真实厚度的竖向波纹旧玻璃。根据面部位置保留一个约占画面 12% 至 20% 的清晰光学视窗，使双眼、鼻口和关键身份特征自然对焦且不被拉伸；视窗之外的头发、肩颈、手臂、服装和背景必须沿玻璃同一组竖向波纹发生连续位移、压缩、重复和柔和折射，畸变强度随距离和表面曲率变化，不能变成随机液化。使用窗边自然光、玻璃边缘高光、少量低饱和棱镜色散与真实反射，玻璃表面可有轻微旧痕但不能遮住脸。人物与折射影像之间保持同源轮廓和正确遮挡。避免多个清晰脸孔、镜像复制、五官错位、普通模糊滤镜、彩虹覆盖全图、碎玻璃、恐怖变形、改变发型服装、文字、Logo 和水印。"
  },
  {
    id: "img2img-bold-contour-ink-portrait",
    category: "image-to-image",
    group: "style-transfer",
    zhTitle: "粗轮廓纯墨肖像",
    enTitle: "Bold-Contour Pure-Ink Portrait",
    zhDescription: "把单个插画角色压缩为白底纯黑墨像，用少量粗轮廓和紧凑黑块保住身份。",
    enDescription: "Compress one illustrated character into pure black ink on white using decisive contours and a few structural black shapes.",
    originalImage: "/assets/featured/img2img-bold-contour-ink-portrait-original.jpg",
    resultImage: "/assets/featured/img2img-bold-contour-ink-portrait-result.jpg",
    prompt: "请把上传的“单个插画角色”重绘为白底纯黑的粗轮廓墨像。保留角色身份、表情、头身比例、视线、姿势、裁切、发型大轮廓、服装层级和最关键的 2 至 4 个识别特征；先删除颜色、渐变、纹理和装饰噪声，再用中等偏粗且有轻微手绘压力变化的外轮廓建立形体，内部只保留比外轮廓更轻、更少的结构线。皮肤、头发和主要衣料大部分保持纸白，只在眼窝、发束重叠、领口、衣褶转折、饰品孔洞或遮挡关系中使用 0 至 4 组紧凑纯黑块解释深度。黑块必须服务结构而非平均填色，轮廓连续、收笔干净，缩小后仍一眼可辨。结果应像完成度高的墨线肖像，不是矢量描边、精细钢笔排线或未完成草稿。避免灰阶、彩色、半调网点、大面积黑发填满、密集排线、断裂毛躁线、改动五官、额外手指道具、背景场景、文字、Logo 和水印。"
  },
  {
    id: "text-material-explainer-illustration",
    category: "text-to-image",
    group: "scene-map",
    zhTitle: "材质化概念解释图",
    enTitle: "Material Concept Explainer",
    zhDescription: "把抽象概念压缩成带短标签、空间关系和柔和材质体块的中心解释图。",
    enDescription: "Turn an abstract concept into a labeled central explainer with clear spatial relations and tactile forms.",
    image: "/assets/featured/text-material-explainer-illustration.jpg",
    prompt: "请根据我提供的“概念 / 流程 / 机制 / 对比 / 数据结论”生成一张材质化概念解释图。先从内容中提炼一个核心结论、3 至 5 个必要对象及它们之间真实的先后、包含、反馈、对比或因果关系，再选择最匹配的单一结构：“横向流程 / 循环回路 / 中心辐射 / 左右对比 / 分层系统 / 场景剖面”。使用克制的瑞士编辑构图、暖白或浅灰背景、柔和哑光 3D 材质体块、细腻接触阴影和一种高亮主题色，使空间关系直观而非只靠装饰。每个标签限制为 2 至 8 个用户提供或可核实的中文字，紧贴对应对象；箭头方向、图例、数值、单位和类别顺序必须准确，未知数据不得编造。画面缩小为社交卡片或 PPT 中心图后仍能读懂，四周保留安全区。避免长段正文、伪数据、中文乱码、所有模块同权、无意义图标、玻璃拟态堆叠、复杂写实场景、角色抢镜、装饰性渐变、品牌 Logo 和水印。"
  },
  {
    id: "text-three-color-corner-mascot",
    category: "text-to-image",
    group: "character-design",
    zhTitle: "三色角落品牌IP",
    enTitle: "Three-Color Corner Mascot",
    zhDescription: "用极少形状和三种语义色设计从画面角落探出的圆润品牌角色。",
    enDescription: "Build a rounded corner-emerging mascot from very few shapes and exactly three semantic colors.",
    image: "/assets/featured/text-three-color-corner-mascot.jpg",
    prompt: "请为“产品 / 社群 / 活动 / 服务”设计一个极简、可爱且可长期使用的原创 IP 角色。先从品牌特质中提炼一个熟悉、亲和且有明确理由的“动物 / 日常物件”原型，再把角色压缩为约 4 至 7 个大的圆润基础形，形成一个远看即可识别的主轮廓；只保留最必要的耳朵、眼口、肢体或功能结构，拒绝尖锐、脆弱和琐碎细节。画面为正方形，角色从左下角或右下角自然探出，占画面约 85% 至 95%，允许边缘裁切强化亲近感，但不能居中悬浮。全图严格使用三种语义色：两种角色基础色和一种有明确名称的纯色背景；角色颜色与背景清楚分离，阴影只用同色轻微明暗变化，不引入第四种颜色。表情友好、有一点婴儿般比例但不过度幼稚，适合后续延展为头像、贴纸和周边。只生成角色图，不出现 Logo、品牌名、文字、应用图标边框、复杂场景、渐变光效、写实毛发、机械零件堆砌、版权角色或水印。"
  }
];
