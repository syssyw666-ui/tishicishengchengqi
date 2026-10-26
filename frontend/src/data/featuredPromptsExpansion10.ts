import type { FeaturedPromptItem } from "./featuredPrompts";

export const featuredPromptsExpansion10: FeaturedPromptItem[] = [
  {
    id: "img2img-portrait-visual-metaphor",
    category: "image-to-image",
    group: "style-transfer",
    zhTitle: "人物轮廓视觉双关",
    enTitle: "Portrait Contour Visual Metaphor",
    zhDescription: "从人物真实手势、发丝或轮廓发现结构关系，让肖像本身变成第二个故事。",
    enDescription: "Turn a real gesture, hair mass, or silhouette into a second readable story within the portrait.",
    originalImage: "/assets/featured/img2img-portrait-visual-metaphor-original.jpg",
    resultImage: "/assets/featured/img2img-portrait-visual-metaphor-result.jpg",
    prompt: "请先观察上传人物照片的真实表情、视线、手势、接触点、发丝走向、衣褶、肩线和负形，再只选择一个最属于这张照片的结构线索，把“人物的某段轮廓或材质”自然转化为“与其形状、受力或含义相符的第二结构”。例如被风吹起的发丝可以成为帆面，手掌之间的负形可以容纳一个小场景，但必须根据原图重新判断，不能机械套用示例。保留人物身份、五官、表情、人数、原始手势和主要服装，只改变承担双关的局部，并让连接处具备连续轮廓、接触、拉力、支撑或尺度关系；第一眼仍是人物，第二眼才发现隐藏故事。构图、媒介、色盘和留白应服务这一个发现。避免普通换背景、装饰花框、把道具贴在脸旁、切割五官、无理由变形、重复面孔、身体融合、恐怖化、密集元素、长文字、Logo 和水印。"
  },
  {
    id: "img2img-ghost-line-extension",
    category: "image-to-image",
    group: "poster-layout",
    zhTitle: "余影线稿延伸",
    enTitle: "Ghost-Line Frame Extension",
    zhDescription: "只把照片边缘被截断的真实结构延续成纸面墨线，让缺失部分成为叙事。",
    enDescription: "Continue only genuinely cropped edge structures as ink lines so absence becomes the narrative.",
    originalImage: "/assets/featured/img2img-ghost-line-extension-original.jpg",
    resultImage: "/assets/featured/img2img-ghost-line-extension-result.jpg",
    prompt: "请把上传照片制作成“余影线稿海报”。先找出真正被画框边缘截断的一个主体结构，例如从底边消失的塔身、从侧边切断的树枝、屋檐、山脊、云层或道路；完整保留照片区域中的主体、色彩、光线、透视和纹理，不延伸任何已经完整出现在画面内部的对象。将照片安置在大面积暖白纤维纸上，只在对应截断位置让结构以轻盈黑色墨线顺势跨出照片，线稿保持同一方向、比例、透视和连接点，逐渐减少细节并融入留白。线条必须依附真实结构，可加入不超过两个与源场景相关的极小线性细节，但不能形成第二主体。照片与纸张交界只允许一侧轻微不规则，不做四边固定撕纸框。避免重新画出完整复制品、实色填充、线稿与照片错位、无来源飘线、普通外扩补图、渐变融化、厚重阴影、贴纸白边、密集装饰、长文字、Logo 和水印。"
  },
  {
    id: "img2img-dreamcore-archive-collage",
    category: "image-to-image",
    group: "poster-layout",
    zhTitle: "梦核档案拼贴",
    enTitle: "Dreamcore Archive Collage",
    zhDescription: "用主体锚点、局部回声、错位尺度与退化媒介构建高密度数字记忆档案。",
    enDescription: "Build a dense digital-memory archive from one anchor, echo fragments, broken scale, and degraded media.",
    originalImage: "/assets/featured/img2img-dreamcore-archive-collage-original.jpg",
    resultImage: "/assets/featured/img2img-dreamcore-archive-collage-result.jpg",
    prompt: "请把上传照片转化为 3:5 竖版“梦核档案拼贴海报”。保留一个最可辨识的主体作为画面锚点，占画面约 50% 至 70%；从原图中选择 2 至 5 个真实局部作为回声碎片，例如眼睛、手、窗户、花瓣、屏幕、按钮或建筑构件，并通过局部放大、镜像、重复、错误朝向、透明叠层或不可能尺度建立记忆般的不稳定关系。使用矩形切片、圆形孔洞、窄条、伪窗口或网格中一种主要结构组织前后层级，同时保留清晰阅读顺序。色盘限制为从原图提取的 2 至 4 种主色，加入 CRT 扫描线、粗网点、复印颗粒、轻微 RGB 偏移、JPEG 压缩块或旧墙磨损中的两种媒介痕迹。结果必须高密度但有主次，像数字记忆档案而非商业广告。避免普通滤镜、稀疏留白海报、旅行拼贴、随机贴纸、九宫格模板、每个碎片等大、失去主体身份、长段文字、真实品牌、Logo 和水印。"
  },
  {
    id: "img2img-identity-locked-photo-pack",
    category: "image-to-image",
    group: "scene-compositing",
    zhTitle: "身份锁定主题写真",
    enTitle: "Identity-Locked Portrait Pack",
    zhDescription: "从一张授权人像生成同一人的四张主题写真，只变化场景、服装、姿势与光线。",
    enDescription: "Create four themed portraits of the same authorized person while varying only scene, wardrobe, pose, and light.",
    originalImage: "/assets/featured/img2img-identity-locked-photo-pack-original.jpg",
    resultImage: "/assets/featured/img2img-identity-locked-photo-pack-result.jpg",
    prompt: "请使用上传且已获授权的人像作为唯一身份来源，生成一组“目标用途”的 2×2 主题写真套图，例如“职业形象 / 创作者主页 / 旅行生活方式 / 复古九十年代 / 节日氛围”。四张照片必须是同一人物，锁定脸型、眼距、鼻口结构、下颌、肤色、发色、发际线、年龄感、体型和永久性特征；只按用户要求变化场景、服装、姿势、表情强度、镜头距离与布光。先定义统一的色彩系统、真实摄影介质和修图程度，再为每格安排不同但协调的情境，每张都必须有可信落脚点、环境光、皮肤纹理、衣物褶皱和镜头颗粒。套图中不得把身份逐格美化或漂移，不得推断职业和私人属性。本结果是创意写真，不用于证件、身份核验或事件证明。避免不同人物、脸部融合、年龄漂移、过度磨皮、四格同一姿势、随机服装、背景换色冒充新场景、夸张身体、额外人物、可读品牌、Logo 和水印。"
  },
  {
    id: "img2img-transparent-shell-xray",
    category: "image-to-image",
    group: "product-structure",
    zhTitle: "透明外壳结构透视",
    enTitle: "Transparent-Shell Structural X-Ray",
    zhDescription: "保持产品外形和视角，让外壳半透明并展示层级清楚、物理可信的内部结构。",
    enDescription: "Preserve product silhouette and camera while revealing plausible internal layers through a transparent shell.",
    originalImage: "/assets/featured/img2img-transparent-shell-xray-original.jpg",
    resultImage: "/assets/featured/img2img-transparent-shell-xray-result.jpg",
    prompt: "请把上传的单一产品或机械物件制作成“透明外壳结构透视图”。严格保持原物体的外轮廓、尺寸比例、相机角度、接口、按钮、开孔、品牌留空位置和落点；让外壳变为克制的半透明材质，同时显示用户提供或从可见结构合理推断的主要内部层级，例如外壳、支架、电池、驱动、管路、线路板、传感器和紧固件。内部结构必须沿真实轴线安装，具有正确厚度、连接、遮挡和空间余量，不得为了丰富画面随意堆满零件；未知构造保持概括并明确为示意。使用深色技术背景或干净浅底、单一剖视角度、边缘轮廓光和有限强调色，使外壳与内部同时可读。避免医学 X 光骨架、爆炸分离、随机关联电路、悬浮组件、穿透外壳、改变产品造型、伪造规格标签、科幻装饰、乱码、Logo 和水印。"
  },
  {
    id: "img2img-controlled-cutaway",
    category: "image-to-image",
    group: "product-structure",
    zhTitle: "受控剖切结构展示",
    enTitle: "Controlled Cutaway Presentation",
    zhDescription: "只移除指定截面的一部分外壳，以连续剖切面展示空间和部件关系。",
    enDescription: "Remove one controlled section of the shell to reveal spatial and component relationships through a coherent cut plane.",
    originalImage: "/assets/featured/img2img-controlled-cutaway-original.jpg",
    resultImage: "/assets/featured/img2img-controlled-cutaway-result.jpg",
    prompt: "请将上传的“建筑 / 车辆 / 家电 / 器物”制作成“受控剖切展示图”。锁定主体外轮廓、比例、相机方向、可见开口、主要材质和基础位置，只沿“纵向 / 横向 / 局部四分之一”中的指定剖切平面移除一段外壳，其他外表面保持完整；剖切边缘必须是一条连续、厚度可信且方向一致的截面，并用克制强调色区分截面材料。内部空间、承重层、舱室、功能部件或管线应与外部开口和结构轴线对应，展示前后层级、连接和尺度，而不是把所有零件拆散悬浮。没有参考依据的隐藏构造只做中性概括，并把结果视为概念示意而非施工或维修依据。避免透明外壳效果、爆炸图、多个互相冲突的切面、外形重设计、内部过度拥挤、错误透视、玩具屋感、人物抢镜、虚假尺寸、乱码、Logo 和水印。"
  },
  {
    id: "img2img-architecture-day-to-night",
    category: "image-to-image",
    group: "scene-compositing",
    zhTitle: "建筑昼夜氛围转换",
    enTitle: "Architecture Day-to-Night Relighting",
    zhDescription: "不改建筑与机位，只把真实日景重建为蓝调夜色、室内灯光和可信反射。",
    enDescription: "Keep architecture and camera fixed while rebuilding daylight as blue-hour night, interior glow, and plausible reflections.",
    originalImage: "/assets/featured/img2img-architecture-day-to-night-original.jpg",
    resultImage: "/assets/featured/img2img-architecture-day-to-night-result.jpg",
    prompt: "请把上传的真实建筑日景照片转换为“蓝调时刻 / 入夜”的夜景效果。严格锁定相机位置、焦距、建筑轮廓、层数、门窗数量、立面材料、道路、植被、车辆和全部空间关系，只改变天空亮度、环境色温、室内灯光、景观照明、玻璃反射与阴影。天空由日光自然过渡到深蓝暮色，尚保留少量地平线余光；原有云层、树冠和远景轮廓应随环境亮度自然压暗，不得凭空替换天气。只有原图真实存在的窗户、灯具、招牌位置可以发光，亮度与距离层级合理，光线应在邻近墙面、地面或水面形成方向正确的反射和衰减；同一玻璃立面中的室内光、天空反射和遮挡必须连续。保留材质细节，暗部不死黑，高光不溢出。避免增加窗户和楼层、移动树车、制造陌生霓虹牌、全楼每窗同亮、把白天照片简单压暗、过度青橙、星空奇观、雨地反光无来源、文字、Logo 和水印。"
  },
  {
    id: "img2img-exterior-facade-renovation",
    category: "image-to-image",
    group: "scene-compositing",
    zhTitle: "建筑外立面更新",
    enTitle: "Geometry-Locked Facade Renovation",
    zhDescription: "保留建筑体量、门窗和机位，更新立面材质、色彩、遮阳与景观界面。",
    enDescription: "Preserve building massing, openings, and camera while updating facade materials, palette, shading, and frontage.",
    originalImage: "/assets/featured/img2img-exterior-facade-renovation-original.jpg",
    resultImage: "/assets/featured/img2img-exterior-facade-renovation-result.jpg",
    prompt: "请把上传的现有建筑照片制作成“目标方向”的外立面更新概念图，例如“现代简洁 / 在地材料 / 低成本焕新 / 商业街界面优化”。严格保持建筑体量、高度、层数、屋顶、柱网、门窗数量与位置、入口、台阶、相机机位、道路边界和相邻建筑；只允许在现有立面表层更新涂料、砖石、木格栅、金属板、遮阳、栏杆、雨棚、灯具、导视留空区和与入口直接相关的少量绿化。新增构件必须有可实现的厚度、固定方式、排水、转角收口、接地关系和统一透视，并尊重原建筑功能，不用装饰遮盖结构问题。结果仅作概念预览，不代替法规、结构和施工审查。避免增加楼层、移动门窗、扩大建筑、改变道路、虚构大型景观、复制树木、悬浮格栅、材质尺度错误、豪华化失真、可读品牌、乱码、Logo 和水印。"
  }
];
