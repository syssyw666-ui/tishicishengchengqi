import type { FeaturedPromptItem } from "./featuredPrompts";

export const featuredPromptsExpansion9: FeaturedPromptItem[] = [
  {
    id: "img2img-interior-style-redesign",
    category: "image-to-image",
    group: "scene-compositing",
    zhTitle: "室内风格重设计",
    enTitle: "Geometry-Locked Interior Redesign",
    zhDescription: "保留房间真实结构与视角，只替换可移动家具、软装、色彩和照明方案。",
    enDescription: "Preserve real room geometry while redesigning movable furniture, decor, palette, and lighting.",
    originalImage: "/assets/featured/img2img-interior-style-redesign-original.jpg",
    resultImage: "/assets/featured/img2img-interior-style-redesign-result.jpg",
    prompt: "请把上传的真实室内照片制作成“目标室内风格”的设计预览。严格锁定相机位置、焦距、房间长宽高关系、墙体、梁柱、门窗数量与位置、天花、地板、固定柜体、插座、暖气、楼梯和窗外真实视野；只允许替换或整理可移动家具、窗帘、地毯、灯具、挂画、植物与软装，并把材质和配色统一为“暖调极简 / 现代原木 / 轻法式 / 侘寂”等目标方向。所有家具必须尺度合理、具有通行距离、落脚点、接触阴影和统一透视，光线继续来自原图窗户与灯位。若原图存在结构缺陷或固定设施，不得用装饰遮盖。结果仅作为设计构想，不代表真实施工效果。避免扩宽房间、增加门窗、抬高层高、改变地板、移动固定设施、复制家具、悬浮软装、错误镜面反射、塑料材质、人物、乱码、Logo 和水印。"
  },
  {
    id: "img2img-empty-room-virtual-staging",
    category: "image-to-image",
    group: "scene-compositing",
    zhTitle: "空房虚拟布置",
    enTitle: "Empty-Room Virtual Staging",
    zhDescription: "在不改变建筑事实的前提下，为空房加入尺度可信、功能合理的家具软装。",
    enDescription: "Stage an empty room with plausible furniture while preserving every architectural fact.",
    originalImage: "/assets/featured/img2img-empty-room-virtual-staging-original.jpg",
    resultImage: "/assets/featured/img2img-empty-room-virtual-staging-result.jpg",
    prompt: "请将上传的空房照片制作成“虚拟布置效果图”，目标用途为“住宅展示 / 租赁展示 / 软装规划”，目标风格为“目标风格”。完整保留原房间的摄影视角、墙面边界、门窗、天花高度、地板、踢脚线、固定灯位、插座、暖气、管线、窗外景色、曝光和已有瑕疵；根据房间功能只添加必要的沙发、床、餐桌、椅子、地毯、落地灯、窗帘和少量植物。家具必须符合真实人体尺度，不堵门窗、通道、暖气与插座，地毯、桌椅和灯具具有正确接触阴影、遮挡与反射。不要暗示家具真实包含在房源中，输出视为虚拟布置预览。避免改变户型、增加壁炉或吊顶、改造地板、扩大窗景、隐藏损坏、家具尺寸失真、过度豪华装饰、重复物件、人物、家庭照片、可读文件、乱码、Logo 和水印。"
  },
  {
    id: "img2img-floorplan-isometric-render",
    category: "image-to-image",
    group: "product-structure",
    zhTitle: "户型图等距可视化",
    enTitle: "Floor Plan to Isometric Visualization",
    zhDescription: "把已确认的二维户型严格转成等距剖视空间，保持墙体、开口与房间关系一致。",
    enDescription: "Convert an approved 2D plan into an isometric cutaway while preserving walls, openings, and room relationships.",
    originalImage: "/assets/featured/img2img-floorplan-isometric-render-original.jpg",
    resultImage: "/assets/featured/img2img-floorplan-isometric-render-result.jpg",
    prompt: "请把上传的二维户型图转换为“等距剖视室内可视化”。先逐项锁定外墙轮廓、内墙分隔、房间数量、门窗位置与开启方向、楼梯、柱体、厨卫固定设施以及用户提供的真实尺寸；等距视图必须与原图逐间对应，不能为了美观重新规划户型。使用移除屋顶的统一等距相机，让全部房间同时可读；按“目标软装风格”加入尺度合理的家具与有限装饰，家具不得穿墙、堵门或改变固定设施。墙、地、柜体和织物通过有限材质层级区分，使用柔和顶光和清楚接触阴影，四周保留干净背景。未知尺寸、房间名称和隐藏结构不得猜测，本图仅为示意而非施工图。避免新增房间、移动开口、镜像户型、门向错误、墙厚漂移、家具超尺度、塑料玩具感、复杂景观底座、伪造尺寸文字、乱码、Logo 和水印。"
  },
  {
    id: "img2img-sketch-photoreal-render",
    category: "image-to-image",
    group: "product-structure",
    zhTitle: "草图写实渲染",
    enTitle: "Sketch-to-Photoreal Render",
    zhDescription: "保持草图设计、比例和透视，把建筑或产品概念转成可信材料与光线的写实效果图。",
    enDescription: "Preserve sketch design, proportions, and perspective while resolving realistic materials and light.",
    originalImage: "/assets/featured/img2img-sketch-photoreal-render-original.jpg",
    resultImage: "/assets/featured/img2img-sketch-photoreal-render-result.jpg",
    prompt: "请把上传的“建筑 / 室内 / 产品”草图转换为高可信写实效果图。草图是唯一结构依据：锁定外轮廓、构件数量、比例、连接方式、开孔、边缘、透视消失点、相机高度和主体在画面中的占比；仅把线条和明暗占位解析为用户指定的“木材 / 玻璃 / 金属 / 石材 / 织物”等真实材料，以及“目标场景与光线”。所有接缝、厚度、支撑、重力、反射、粗糙度与接触阴影必须符合物理关系，不能用漂亮材质掩盖不确定结构。草图未说明的背面、内部零件和尺寸应保持中性或请求补充，不自行发明。避免改变设计轮廓、补出额外门窗或按钮、拉伸比例、镜像构图、悬浮结构、过强电影光、塑料 CGI、概念线稿残留、可读品牌文字、Logo 和水印。"
  },
  {
    id: "img2img-group-photo-composite",
    category: "image-to-image",
    group: "scene-compositing",
    zhTitle: "多人合影合成",
    enTitle: "Identity-Locked Group Composite",
    zhDescription: "把多张已授权人像自然合成为同一合影，逐人锁定身份、服装、顺序与比例。",
    enDescription: "Combine authorized portraits into one coherent group image with identity, order, wardrobe, and scale locked per person.",
    originalImage: "/assets/featured/img2img-group-photo-composite-original.jpg",
    resultImage: "/assets/featured/img2img-group-photo-composite-result.jpg",
    prompt: "请使用用户分别提供并确认授权的多张人物参考图，生成一张“目标场景”中的自然合影。先把每张图标记为“人物 1 / 人物 2 / 人物 3”，逐人锁定脸型、五官比例、肤色、发型、眼镜、服装、配饰和用户给出的身高关系，再按“从左到右的顺序、站立或坐姿、人物间距与互动动作”进行排列。所有人物必须共享同一相机高度、焦距、白平衡、主光方向、颗粒和景深；脚底或座面有可信支撑，人与人接触处有正确遮挡与接触阴影，眼线和身体尺度协调。不得推断人物关系、职业或年龄，也不得把合成结果冒充真实事件证据。避免漏人、重复人物、身份融合、换脸、换衣、肤色漂移、头身比失真、手臂交叉穿模、悬浮、背景拼缝、虚构制服奖章、文字、Logo 和水印。"
  },
  {
    id: "img2img-precise-object-replacement",
    category: "image-to-image",
    group: "scene-compositing",
    zhTitle: "精准物件替换",
    enTitle: "Surgical Object Replacement",
    zhDescription: "只替换指定物件，保持场景其余像素关系、视角、照明和遮挡不变。",
    enDescription: "Replace one specified object while preserving the rest of the scene, camera, lighting, and occlusion.",
    originalImage: "/assets/featured/img2img-precise-object-replacement-original.jpg",
    resultImage: "/assets/featured/img2img-precise-object-replacement-result.jpg",
    prompt: "请在上传照片中只把“指定位置的原物件”替换为“目标物件 / 第二张参考图中的物件”，除此之外不改变任何内容。锁定原图画幅、相机角度、焦距、透视、墙地边界、周围家具、人物、背景、曝光、白平衡与颗粒；新物件必须放在原物件的真实占地或接触位置，按目标参考保留形状、颜色、材质、部件和比例，并适配现场透视、主光方向、色温、反射、遮挡与接触阴影。若目标尺寸与空间冲突，应保持合理尺度并提示限制，不得推动周围物件为它腾位。删除原物件后补全被遮挡区域时只延续可推断的墙面、地板或背景纹理。避免全图重绘、改变房间结构、移动旁边物件、复制目标、漂浮、错误反射、光线不一致、边缘光晕、标签和 Logo 漂移、乱码及水印。"
  },
  {
    id: "img2img-intelligent-outpainting",
    category: "image-to-image",
    group: "scene-compositing",
    zhTitle: "画幅智能扩展",
    enTitle: "Context-Aware Canvas Extension",
    zhDescription: "保持原照片中心区域不重绘，向指定方向自然延展环境以适配新画幅。",
    enDescription: "Keep the source region unchanged and extend the environment naturally into a new aspect ratio.",
    originalImage: "/assets/featured/img2img-intelligent-outpainting-original.jpg",
    resultImage: "/assets/featured/img2img-intelligent-outpainting-result.jpg",
    prompt: "请把上传照片扩展为“目标画幅”，扩展方向为“左侧 / 右侧 / 上方 / 下方 / 四周”。原照片区域必须作为不可重绘的视觉锚点，完整保留主体身份、数量、姿态、建筑结构、地平线、镜头透视、焦距感、原始光线、色彩、颗粒和清晰度；只在新增画布中延续可推断的天空、地面、海面、墙体、植被或室内背景。延展内容必须与原图消失点、纹理尺度、风向、云层、水波、阴影方向和景深连续，并为“标题 / 人物视线 / 产品”保留用户指定的安全留白。不要在原图边缘形成接缝、镜像重复或渐变晕染。避免移动或缩小主体、重画脸部、复制树木建筑和人群、凭空出现新地标、改变天气时段、拉伸像素、模糊补丁、白边、相框、文字、Logo 和水印。"
  },
  {
    id: "img2img-product-lifestyle-scene",
    category: "image-to-image",
    group: "product-commercial",
    zhTitle: "产品生活方式场景",
    enTitle: "Product Lifestyle Scene",
    zhDescription: "把真实产品放入可信使用环境，严格保持 SKU、包装、数量与材质。",
    enDescription: "Place a real product in a credible lifestyle setting while locking SKU, packaging, count, and material.",
    originalImage: "/assets/featured/img2img-product-lifestyle-scene-original.jpg",
    resultImage: "/assets/featured/img2img-product-lifestyle-scene-result.jpg",
    prompt: "请把上传的真实产品照片制作成“目标生活方式场景”的商业图片。产品参考负责全部商品事实：严格保持 SKU 数量、外形比例、瓶盖或接口、材质、颜色、透明度、标签位置、包装边缘和已提供配件；场景参考只负责环境与光线，不得替换产品。把产品自然放在“浴室石材台面 / 厨房操作台 / 办公桌 / 户外使用场景”等目标环境中，使用符合实际用途的尺度、落点、遮挡、接触阴影、反射和色温，可加入少量不抢主体的道具说明使用情境。未经用户提供不得生成功效、认证、价格或比较结论；精确标签文字和 Logo 应保留源图或留待后期合成。避免产品变形、容量和数量改变、标签乱码、包装换款、配件增减、悬浮、无关人物抢镜、夸大效果、虚假液体飞溅、过度景深、第三方品牌、Logo 和水印。"
  }
];
