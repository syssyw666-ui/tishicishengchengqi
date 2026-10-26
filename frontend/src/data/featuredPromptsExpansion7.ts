import type { FeaturedPromptItem } from "./featuredPrompts";

export const featuredPromptsExpansion7: FeaturedPromptItem[] = [
  {
    id: "img2img-subject-constellation-study",
    category: "image-to-image",
    group: "style-transfer",
    zhTitle: "主体星图标注",
    enTitle: "Subject-Bound Constellation Study",
    zhDescription: "沿真实主体的边缘和结构锚点生成克制节点网络，而不是给整张照片套星空装饰。",
    enDescription: "Build a restrained node network from visible subject landmarks instead of applying generic star decoration.",
    originalImage: "/assets/featured/img2img-subject-constellation-study-original.jpg",
    resultImage: "/assets/featured/img2img-subject-constellation-study-result.jpg",
    prompt: "请把上传照片制作成“主体星图标注研究”。完整保留真实照片、主体比例、材质、光线和背景；先识别主体上确实可见的 12 至 24 个结构锚点，例如轮廓尖端、关节、纹理交汇、孔洞边缘或形体转折，再用细小青蓝节点、极细连线、测量圆弧和短标记建立贴近主体的观察网络。连线只连接相邻且有结构意义的点，不伸向无关背景，不虚构解剖或科学数据；视觉中心仍是照片主体。背景较复杂时降低标记密度和透明度。避免满天星座、随机 HUD、粗亮线、节点遮挡主体、伪造数值、可读长文、Logo 和水印。"
  },
  {
    id: "img2img-dream-circle-cutout-collage",
    category: "image-to-image",
    group: "poster-layout",
    zhTitle: "梦境圆形抠图拼贴",
    enTitle: "Dream-Circle Cutout Collage",
    zhDescription: "从同一张照片提取二至五个真实剪影，围绕纯色圆与极简线稿组成安静的梦境拼贴。",
    enDescription: "Extract two to five faithful cutouts from one photo and arrange them around a solid dream circle.",
    originalImage: "/assets/featured/img2img-dream-circle-cutout-collage-original.jpg",
    resultImage: "/assets/featured/img2img-dream-circle-cutout-collage-result.jpg",
    prompt: "请只使用本次上传的一张照片制作“梦境圆形抠图拼贴”，多张照片必须分别输出，不得跨图混合。先从原图提取 2 至 5 个最有意义且可独立识别的真实元素，如人物、山脊、建筑、花朵或小物件；抠图边缘必须沿真实轮廓，并保留人物身份、姿势、服装和建筑结构。使用暖白背景与一个平整的“源图主色”大圆作为视觉场，把抠图错落穿插在圆内外，添加克制白色模切边、少量轨迹线、星点和一只极简睡眠小动物线稿。装饰只用于串联叙事，不填满空白。避免整张原图塞入圆形、矩形照片块、不同照片混合、重画人物脸、贴纸堆积、强制紫色、长文字、Logo 和水印。"
  },
  {
    id: "img2img-photo-to-nail-art",
    category: "image-to-image",
    group: "product-structure",
    zhTitle: "照片转十片美甲",
    enTitle: "Photo-to-Nail Art Collection",
    zhDescription: "把照片中的主题、配色与识别符号重新设计成十片可制作甲片，而不是把原图缩印到甲面。",
    enDescription: "Translate source motifs and palette into ten manufacturable nail tips rather than printing the photo on them.",
    originalImage: "/assets/featured/img2img-photo-to-nail-art-original.jpg",
    resultImage: "/assets/featured/img2img-photo-to-nail-art-result.jpg",
    prompt: "请分析上传照片的核心主题、3 至 5 种代表色、关键轮廓和可转译装饰，重新设计为一套高级穿戴甲。输出一张 1:1 俯拍产品照片，恰好十片独立甲片，分成两排、每排五片，全部完整可见且尺寸排列自然；默认中等椭圆或杏仁形，真实弧面凝胶、接触阴影和细腻高光。十片构成同一系列，但分别承担主视觉、局部符号、节奏纹样、安静留白和少量材质变化；所有图案都按狭长弧面重新构图，不得把照片、截图或人物整脸直接缩印。只使用可实现的手绘、猫眼、糖浆胶、微闪或少量小饰品。避免甲片粘连、数量错误、十片重复、巨型悬空配件、手指、盒子、展示架、文字、Logo 和水印。"
  },
  {
    id: "img2img-ornament-relief-map-set",
    category: "image-to-image",
    group: "product-structure",
    zhTitle: "纹样浮雕生产图",
    enTitle: "Ornament Relief Production Maps",
    zhDescription: "从器物纹样整理出抠图、去光参考、材料剪影和连续高度图，服务后续雕刻与建模。",
    enDescription: "Derive a cutout, de-lit reference, material silhouette, and continuous height map for relief production.",
    originalImage: "/assets/featured/img2img-ornament-relief-map-set-original.jpg",
    resultImage: "/assets/featured/img2img-ornament-relief-map-set-result.jpg",
    prompt: "请从上传的器物或装饰照片提取指定纹样，并在同一画布中输出四个严格对齐、方向与边距一致的生产视图：①透明背景完整抠图，缺失边缘只做保守补全；②柔光去光参考，减弱反光、偏色和投影但保留刻线与形体；③黑底白色材料剪影，白色代表全部实体支撑，只有明确镂空区域为黑；④连续灰度高度图，白高黑低，用平滑灰阶表达主次起伏、坡度、刻线和凹陷。四图必须源自同一纹样结构，不改变对称性、孔洞、连接和朝向。高度图排除光照、锈斑、AO 与材质噪声。避免统一挤出、六级台阶、矩形底板、结构漂移、标签文字、Logo 和水印。"
  },
  {
    id: "img2img-colored-shadow-puppet-diptych",
    category: "image-to-image",
    group: "style-transfer",
    zhTitle: "彩色皮影双联",
    enTitle: "Colored Shadow-Puppet Diptych",
    zhDescription: "上半保留真实照片，下半把同一姿态与叙事转译为半透明彩色皮影戏偶。",
    enDescription: "Preserve the photo above and translate its pose and story into translucent colored shadow puppetry below.",
    originalImage: "/assets/featured/img2img-colored-shadow-puppet-diptych-original.jpg",
    resultImage: "/assets/featured/img2img-colored-shadow-puppet-diptych-result.jpg",
    prompt: "请把上传照片制作成 3:4“彩色皮影双联海报”，上下区域严格各占 50%。上半完整保留原照的主体身份、数量、比例、姿态、真实光影和色彩，只允许必要等比适配。下半在暖米黄幕布上，把同一主体与动作转译为传统彩色皮影：侧面化或平面化轮廓、半透明染色皮革、手工镂空、结构合理的铆接关节，以及一至两根从下方进入的细控制杆；从原图提取 2 至 3 种情绪色，不机械套红金模板。下半主体约占该区域 25% 至 35%，四周保留安静留白与单一暖背光。避免普通黑剪影、纸片卡通、塑料 3D、复杂舞台、姿势改变、额外人物、手机界面、乱码、Logo 和水印。"
  },
  {
    id: "img2img-travel-minimap-overlay",
    category: "image-to-image",
    group: "poster-layout",
    zhTitle: "旅行小地图水印",
    enTitle: "Travel Minimap Overlay",
    zhDescription: "把真实地点的细白线地图融入旅行照片留白区，用红点与坐标信息克制标记拍摄位置。",
    enDescription: "Blend a real-location white-line minimap into photo whitespace with one restrained red location marker.",
    originalImage: "/assets/featured/img2img-travel-minimap-overlay-original.jpg",
    resultImage: "/assets/featured/img2img-travel-minimap-overlay-result.jpg",
    prompt: "请基于上传旅行照片和用户确认的“拍摄地标 / 经纬度”制作高级旅行小地图水印。完整保留照片主体、构图和色彩，在天空、平静水面或纯净墙面等留白区叠加该地点的真实道路与地貌线稿；地图无边框、无底色、无投影，仅保留半透明白线，主路约 55% 不透明度、细路网约 26%，并用一个小红点标记准确地标。可加入由真实字体后期排版的“地点名 / 坐标 / 比例尺 / 指北针”占位，但生成图中不要伪造可读文字。地图尺寸约占照片宽度 15% 至 30%，不得遮挡人物、建筑焦点和地平线。地点未知时先请求信息，禁止编造坐标。避免地图卡片、奶油色方块、深色道路、多个红点、乱码、Logo 和水印。"
  },
  {
    id: "img2img-identity-pose-transfer",
    category: "image-to-image",
    group: "style-transfer",
    zhTitle: "人物姿势迁移",
    enTitle: "Identity-Preserving Pose Transfer",
    zhDescription: "以人物图锁定身份和服装，以姿势参考锁定动作方向，在同一场景中生成可信新姿态。",
    enDescription: "Lock identity and wardrobe from one image while transferring pose orientation from a separate reference.",
    originalImage: "/assets/featured/img2img-identity-pose-transfer-original.jpg",
    resultImage: "/assets/featured/img2img-identity-pose-transfer-result.jpg",
    prompt: "请使用两类参考：参考图 1 只负责“人物身份、脸部、发型、体型和服装”，参考图 2 只负责“姿势、肢体方向、重心和视线”。在“目标场景”中生成同一人物摆出参考姿势的真实照片，保持参考图 1 的五官、肤色、发型、衣服颜色、版型和配饰，不复制其原背景、棚拍光或站姿；按参考图 2 的画面左/右关系描述肩、肘、腕、髋、膝、脚和头部朝向，并明确禁止镜像。人物必须有可信落脚点、接触阴影和连续受力链，光线、颗粒、透视与场景统一。默认自然 50mm 视角，避免近距离广角拉长。无法确认被遮挡肢体时使用中性姿态，不虚构复杂动作。避免换脸、换衣、镜像姿势、肢体穿插、多余手脚、悬浮、贴图感、Logo 和水印。"
  },
  {
    id: "img2img-capsule-eye-avatar",
    category: "image-to-image",
    group: "style-transfer",
    zhTitle: "胶囊眼机器人头像",
    enTitle: "Capsule-Eye Robot Avatar",
    zhDescription: "保留人物发型、肤色和少量识别配饰，重绘成无嘴无鼻、倾斜构图的极简机器人图标。",
    enDescription: "Preserve key identity cues while redrawing the portrait as a tilted mouthless capsule-eye robot icon.",
    originalImage: "/assets/featured/img2img-capsule-eye-avatar-original.jpg",
    resultImage: "/assets/featured/img2img-capsule-eye-avatar-result.jpg",
    prompt: "请把上传的人像重绘为 1:1“胶囊眼极简机器人头像”。从原图保留肤色、发色、发型大轮廓、服装主色以及最多三项识别特征，如耳环、眼镜或领口；脸部改为圆润机器人结构，恰好两颗等大平行的近黑色纯色胶囊眼，长宽比约 2.5 至 3.0，不含瞳孔、眼白、高光、睫毛或眉毛；完全不画嘴和鼻，只保留小面积低饱和腮红。头、脸、双眼、头发和配饰整体顺时针倾斜 15 至 20 度，角色从左下进入，颈部、衣领和肩部自然延伸出左边与底边，右上保留深炭灰空白。头发用少量平滑色块，不画散发和粗描边。避免悬浮头、尖下巴、猫嘴、表情符号、双眼角度不一、手臂、背景物体、文字、Logo 和水印。"
  },
  {
    id: "color-ai-artifact-naturalization",
    category: "color-edit",
    group: "photo-repair",
    zhTitle: "AI 痕迹自然化",
    enTitle: "AI Artifact Naturalization",
    zhDescription: "针对塑料皮肤、异常手指、重复纹理与失真光线做最小范围修复，保留已认可内容。",
    enDescription: "Repair plastic skin, malformed anatomy, repeated textures, and incoherent light with minimal drift.",
    originalImage: "/assets/featured/color-ai-artifact-naturalization-original.jpg",
    resultImage: "/assets/featured/color-ai-artifact-naturalization-result.jpg",
    prompt: "请严格基于原图进行“AI 痕迹自然化修复”，不重新设计画面。先检查并列出最影响真实感的一组问题，再只修复这些区域：塑料磨皮恢复与周围一致的毛孔、细纹和自然肤色起伏；异常手指、五官或边缘恢复合理结构与接触关系；重复背景纹理改为有变化但同类的真实细节；过强光晕、假轮廓光和冲突阴影统一到原有主光方向；产品材质恢复正确粗糙度与反射。必须保持人物身份、五官比例、表情、发型、服装、产品形状、包装文字位置、构图、裁切和未指定区域不变。每次优先修复一个问题簇，正常观看尺寸自然即可。避免全图重绘、换脸、美颜年轻化、过度锐化、模糊补丁、背景液化、品牌文字漂移、增加物件、Logo 和水印。"
  }
];
