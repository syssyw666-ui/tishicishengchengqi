import type { CategoryId, PromptParameter } from "../types";

const img = (id: string) => `${import.meta.env.BASE_URL}assets/parameters/${id}.png?v=20260827-purpose-crop-fix`;

function param(
  category: CategoryId,
  id: string,
  styleGroup: string,
  zhName: string,
  enName: string,
  zhPrompt: string,
  enPrompt: string,
  negative: string[] = []
): PromptParameter {
  return { id, category, styleGroup, zhName, enName, defaultWeight: 1, image: img(id), zhPrompt, enPrompt, negative };
}

const moodNegative = ["flat emotion", "unclear atmosphere", "messy mood"];
const storyNegative = ["unclear action", "stiff demonstration", "confusing sequence", "readable text"];
const effectNegative = ["messy motion blur", "visual noise", "overcrowded effects"];
const eraNegative = ["generic background", "unclear worldbuilding", "messy ruins"];
const layoutNegative = ["readable text", "messy layout", "watermark"];
const sceneNegative = ["unclear environment", "random unrelated objects", "crowded distracting scene"];
const characterNegative = ["unclear profession", "wrong tools", "extra fingers", "distorted hands"];
const expressionNegative = ["stiff expression", "exaggerated facial distortion", "asymmetrical eyes", "unclear emotion"];
const hairMakeupNegative = ["messy hairline", "plastic skin", "uneven makeup", "distorted facial features"];
const renderNegative = ["unclear geometry", "broken mesh", "low-detail surface", "readable text"];
const lightingNegative = ["flat lighting", "uncontrolled highlights", "muddy shadows", "unclear light direction"];

export const gapSupplementParameters: PromptParameter[] = [
  param("mood", "mood-premium-calm-luxury", "luxury", "高级静奢", "Premium Quiet Luxury", "高级静奢氛围，克制留白、精致高光、柔和材质和安静商业感", "premium quiet luxury mood, restrained negative space, refined highlights, soft material, calm commercial elegance", moodNegative),
  param("mood", "mood-bittersweet-romance", "romantic", "苦甜浪漫", "Bittersweet Romance", "苦甜浪漫氛围，柔和逆光、亲密距离、温柔但略带感伤的情绪", "bittersweet romantic mood, gentle backlight, intimate distance, tender yet melancholic feeling", moodNegative),
  param("purpose", "story-action-unboxing", "commercial", "开箱展示", "Unboxing Display", "图片用途为开箱展示，包装打开与产品露出的步骤关系清晰，适合电商和新品发布", "unboxing display purpose, clear package opening and product reveal sequence, suitable for ecommerce and product launch", storyNegative),
  param("purpose", "story-action-product-demo", "commercial", "产品使用演示", "Product Use Demonstration", "图片用途为产品使用演示，主体正在被真实使用，功能关系明确，画面干净易懂", "product use demonstration purpose, product being used clearly, visible function relationship, clean readable scene", storyNegative),
  param("purpose", "story-action-before-after-comparison", "commercial", "前后对比展示", "Before After Comparison", "图片用途为前后对比展示，画面分成两个清晰区域，表现处理前后的差异，不加入文字", "before-and-after comparison purpose, two clear image zones showing transformation difference, no text", storyNegative),
  param("story-action", "story-commuting", "daily", "通勤出行", "Commuting", "叙事事件为通勤出行，人物在站台、车站或城市步道中前行，携带轻便随身物，方向与日常节奏清楚", "commuting story action, a person moving through a platform, station, or city walkway with light personal belongings and a clear everyday direction", storyNegative),
  param("story-action", "story-gardening", "daily", "园艺种植", "Gardening", "叙事事件为园艺种植，人物正在栽种、松土或照料植物，手部与幼苗、土壤的关系清楚", "gardening story action, a person planting, tending soil, or caring for plants with clear hand, seedling, and soil interaction", storyNegative),
  param("story-action", "story-rehearsing-music", "creation", "音乐排练", "Music Rehearsal", "叙事事件为音乐排练，乐器、演奏姿态与练习空间明确，画面强调专注和节奏", "music rehearsal story action, clear instrument, playing posture, and practice space with focused rhythm", storyNegative),
  param("story-action", "story-training", "daily", "运动训练", "Training Drill", "叙事事件为运动训练，人物正在进行有明确动作目标的练习，姿势、器材和身体发力清楚", "training drill story action, a person performing a purposeful exercise with clear body mechanics, posture, and equipment", storyNegative),
  param("story-action", "story-assembling", "work", "手作组装", "Hand Assembly", "叙事事件为手作组装，人物在工作台上将多个部件精细组合，工具与成品关系清楚", "hand-assembly story action, a person carefully combining components at a workbench with clear tool-to-object relationships", storyNegative),
  param("story-action", "story-interviewing", "work", "人物采访", "Interview", "叙事事件为人物采访，两人面对面沟通，采访工具和聆听关系自然清楚", "interview story action, two people communicating face to face with a natural readable interviewer-listener relationship and unobtrusive interview tool", storyNegative),
  param("story-action", "story-camping", "adventure", "露营搭建", "Camping Setup", "叙事事件为露营搭建，人物正在搭帐篷或整理营地，黄昏环境与户外准备状态清楚", "camping-setup story action, a person pitching a tent or preparing a campsite with clear outdoor readiness and dusk atmosphere", storyNegative),
  param("story-action", "story-organizing", "daily", "整理收纳", "Organizing", "叙事事件为整理收纳，人物将书籍、器物或日常物品归位，秩序感与手部动作明确", "organizing story action, a person placing books, objects, or everyday items in order with clear hands and a sense of calm order", storyNegative),
  param("visual-effect", "effect-motion-afterimage", "dynamic", "动作残影", "Motion Afterimage", "动作残影特效，半透明连续身影表现运动轨迹和速度变化", "motion afterimage effect, repeated translucent silhouettes showing movement path and speed change", effectNegative),
  param("visual-effect", "effect-speed-ramp", "dynamic", "速度拖影", "Speed Ramp Streaks", "速度拖影特效，主体相对清晰，背景沿运动方向拉出线性拖影", "speed ramp streak effect, relatively sharp subject with directional motion streaks in the background", effectNegative),
  param("visual-effect", "effect-energy-wave", "light-particle", "能量波纹", "Energy Wave", "能量波纹特效，柔和发光环绕主体，形成聚焦和超现实能量场", "energy wave effect, soft glowing rings around the subject, focused surreal energy field", effectNegative),
  param("scene", "scene-coastal-fishing-village", "culture", "沿海渔村", "Coastal Fishing Village", "场景为沿海渔村，旧木船、临海民居、潮湿海雾和朴实港湾生活感", "coastal fishing village scene with weathered wooden boats, seaside homes, damp sea mist, and lived-in harbor atmosphere", sceneNegative),
  param("scene", "scene-hospital-consultation", "interior", "医院诊室", "Hospital Consultation Room", "场景为现代医院诊室，诊疗床、基础医疗设备、自然窗光和干净有序的专业环境", "modern hospital consultation room with an exam bed, essential medical equipment, daylight, and a clean orderly professional setting", sceneNegative),
  param("scene", "scene-theater-backstage", "interior", "剧院后台", "Theater Backstage", "场景为剧院舞台后台，黑色幕布、道具架、工作灯与演出准备氛围", "theater backstage scene with black curtains, prop racks, work lights, and a ready-for-performance atmosphere", sceneNegative),
  param("visual-effect", "effect-double-exposure", "surreal", "双重曝光", "Double Exposure", "双重曝光特效，人物或物体轮廓与另一处风景或纹理自然叠合，主体轮廓清楚", "double-exposure effect, a person or object silhouette naturally blended with a second landscape or texture while keeping the main outline clear", effectNegative),
  param("visual-effect", "effect-prism-refraction", "light-particle", "棱镜折射", "Prism Refraction", "棱镜折射特效，透明介质将光线分解为克制的彩虹光谱和几何高光", "prism refraction effect, transparent medium splitting light into restrained rainbow spectrum and geometric highlights", effectNegative),
  param("visual-effect", "effect-ink-diffusion", "surreal", "墨迹扩散", "Ink Diffusion", "墨迹扩散特效，深色墨液在透明介质中形成自然卷曲、半透明层次和流体轮廓", "ink diffusion effect, dark ink forming natural curling translucent layers and fluid contours in a clear medium", effectNegative),
  param("visual-effect", "effect-torn-paper-transition", "surreal", "撕纸转场", "Torn Paper Transition", "撕纸转场特效，分层手工纸边缘打开画面，保留清晰主体和有方向性的拼贴纵深", "torn-paper transition effect, layered handmade paper edges opening onto the image while preserving a clear subject and directional collage depth", effectNegative),
  param("character", "character-architect", "profession", "建筑师", "Architect", "角色身份为建筑师，空间模型、图纸和专业创作环境明确，人物气质理性专注", "architect identity with clear physical model, drawings, and professional design environment; focused analytical presence", characterNegative),
  param("character", "character-photographer", "profession", "摄影师", "Photographer", "角色身份为摄影师，手持相机、观察取景、轻便工作装备和纪实创作状态清楚", "photographer identity with camera in hand, observant framing posture, light work gear, and a clear documentary-creation state", characterNegative),
  param("character", "character-research-scientist", "profession", "科研人员", "Research Scientist", "角色身份为科研人员，实验室、基础仪器与严谨专注的研究状态明确，不出现可读屏幕文字", "research scientist identity with laboratory setting, basic instruments, and a careful focused research state, without readable screen text", characterNegative),
  param("character", "character-florist", "profession", "花艺师", "Florist", "角色身份为花艺师，鲜花、剪枝工具、工作台和自然审美的手作状态明确", "florist identity with fresh flowers, pruning tools, worktable, and a clear handcrafted natural aesthetic", characterNegative),
  param("era", "era-climate-aftermath", "apocalypse", "多灾种气候灾变世界", "Multi-Hazard Climate Collapse", "多灾种气候灾变后的世界：洪水积水、极端高温、干旱荒漠化、超级风暴、山火烟霾与冰雪灾害留下不同区域痕迹，强调环境后果与人类适应、避难和重建，不限定为单一水灾", "multi-hazard climate collapse world after floods, extreme heat, drought and desertification, superstorms, wildfire smoke, and ice disasters, showing environmental consequences, human adaptation, shelters, and reconstruction rather than a single flood scenario", eraNegative),
  param("layout-style", "layout-style-letterpress-print", "print", "活版印刷版式", "Letterpress Layout", "活版印刷版式，凹凸纸面、压印块面、油墨肌理和克制海报结构", "letterpress layout style, embossed paper surface, impressed blocks, ink texture, restrained poster structure", layoutNegative),

  param("expression", "expression-focused-concentration", "calm", "专注思考", "Focused Concentration", "人物神态专注思考，目光稳定、眉间轻微收紧、嘴部自然闭合，情绪克制而清晰", "focused concentration expression, steady gaze, subtly tightened brows, naturally closed mouth, restrained readable emotion", expressionNegative),
  param("expression", "expression-relieved", "positive", "如释重负", "Relieved", "人物呈现如释重负的神态，眼神与肩颈放松，轻轻呼气，保留自然细微表情", "relieved expression with softened eyes, relaxed shoulders and neck, a gentle exhale, subtle natural emotion", expressionNegative),
  param("expression", "expression-skeptical-side-eye", "personality", "怀疑侧目", "Skeptical Side Eye", "人物怀疑地侧目观察，一侧眉毛微抬，视线偏向侧方，表现审慎与不完全认同", "skeptical side-eye expression, one brow slightly raised, gaze turned sideways, cautious unconvinced attitude", expressionNegative),
  param("expression", "expression-embarrassed", "personality", "尴尬羞涩", "Embarrassed", "人物呈现尴尬羞涩神态，克制浅笑、面颊轻微泛红、视线略微回避，避免夸张喜剧表情", "embarrassed shy expression, restrained smile, subtly flushed cheeks, slightly averted gaze, no exaggerated comic face", expressionNegative),
  param("hair-makeup", "makeup-soft-matte", "makeup-natural", "柔雾哑光妆", "Soft Matte Makeup", "柔雾哑光妆面，底妆低光泽且均匀，保留真实皮肤纹理，五官修饰自然克制", "soft matte makeup, even low-shine base, preserved real skin texture, restrained natural facial definition", hairMakeupNegative),
  param("hair-makeup", "makeup-graphic-eyeliner", "makeup-stylized", "图形眼线妆", "Graphic Eyeliner", "图形眼线妆，以清晰几何黑色眼线作为视觉重点，其余妆面简洁干净", "graphic eyeliner makeup with clean geometric black liner as the focal point and otherwise minimal clean makeup", hairMakeupNegative),
  param("hair-makeup", "hair-slicked-back", "hair-shape", "利落背头", "Slicked-Back Hair", "头发利落向后梳理，完整露出额头与面部轮廓，发束方向清晰，造型干净有控制力", "slicked-back hairstyle, hair combed cleanly away from the face, exposed forehead, clear strand direction, controlled shape", hairMakeupNegative),
  param("hair-makeup", "hair-half-up", "hair-styling", "半扎发", "Half-Up Hair", "半扎发造型，上半部分头发束起固定，下半部分自然垂落，层次和发量关系清楚", "half-up hairstyle, upper section gathered and secured while lower hair falls naturally, clear layered volume", hairMakeupNegative),

  param("story-action", "story-teaching-demo", "work", "授课演示", "Teaching Demonstration", "叙事事件为授课演示，讲解者通过实物模型、动作或无文字图示向少量听众说明内容，讲授关系明确", "teaching demonstration story action, an instructor explaining through a physical model, gesture, or non-text diagram to a small attentive group", storyNegative),
  param("story-action", "story-collaborative-brainstorm", "work", "协作共创", "Collaborative Brainstorm", "叙事事件为协作共创，多人围绕桌面草图、模型或无文字卡片共同讨论与排列方案，视线焦点一致", "collaborative brainstorming story action, several people discussing and arranging sketches, models, or blank cards around a shared table with a common focus", storyNegative),
  param("story-action", "story-gift-giving", "relationship", "赠送礼物", "Gift Giving", "叙事事件为赠送礼物，一人将包装好的礼物递给另一人，手部关系、接收动作和温暖情绪清楚", "gift-giving story action, one person offering a wrapped gift to another with clear hand interaction, receiving gesture, and warm emotion", storyNegative),
  param("story-action", "story-board-game", "daily", "桌游聚会", "Board Game Gathering", "叙事事件为桌游聚会，人物围坐桌边轮流操作棋子或卡片，互动次序与轻松社交感明确，无品牌文字", "tabletop game gathering, people seated around a table taking turns with game pieces or blank cards, clear interaction and relaxed social mood, no branding", storyNegative),
  param("mood", "mood-focused-productive", "quiet", "专注高效", "Focused Productive", "专注高效氛围，空间整洁、光线清醒、行动目标明确，整体安静有秩序而不过度紧张", "focused productive mood, orderly space, alert clean light, clear purposeful action, calm efficiency without excessive tension", moodNegative),
  param("mood", "mood-sublime-awe", "dramatic", "崇高敬畏", "Sublime Awe", "崇高敬畏氛围，以巨大自然或建筑尺度对比微小主体，产生震撼、谦卑与沉静的感受，不强调危险", "sublime awe mood, immense natural or architectural scale contrasted with a small subject, evoking wonder, humility, and stillness without danger", moodNegative),
  param("render", "render-photogrammetry-scan", "technical", "摄影测量扫描", "Photogrammetry Scan", "摄影测量扫描渲染，真实物体表面逐渐过渡为高密度彩色点云、重建网格和几何采样状态", "photogrammetry scan render, realistic object surface transitioning into dense colored point cloud, reconstructed mesh, and sampled geometry", renderNegative),
  param("render", "render-wireframe-overlay", "technical", "线框叠加渲染", "Wireframe Overlay", "线框叠加渲染，在保留部分实体材质的同时显示清晰多边形拓扑、边线和结构转折", "wireframe overlay render, clear polygon topology and structural edges layered over a partially shaded solid material", renderNegative),

  param("layout", "layout-triptych", "split", "三联画版式", "Triptych Layout", "三联画版式，将同一主题组织在三个等宽竖向区域中，画面节奏统一、分区边界清晰并保留呼吸空间", "triptych layout, one visual theme organized across three equal vertical zones with unified rhythm, clear divisions, and breathing room", layoutNegative),
  param("layout", "layout-asymmetric-two-thirds", "split", "二三分非对称版式", "Asymmetric Two-Thirds Layout", "二三分非对称版式，主视觉占约三分之二，次要细节或留白占约三分之一，重心稳定且适合编辑设计", "asymmetric two-thirds layout, main visual occupying roughly two-thirds and secondary detail or negative space occupying one-third, stable editorial balance", layoutNegative),
  param("lighting", "lighting-butterfly-portrait", "interior", "蝴蝶光", "Butterfly Portrait Lighting", "蝴蝶光人像布光，主光位于镜头上方正前方，在鼻下形成短小对称阴影，面部明亮精致", "butterfly portrait lighting, frontal key above the camera creating a short symmetrical shadow beneath the nose, bright refined face", lightingNegative),
  param("lighting", "lighting-rembrandt-portrait", "dramatic", "伦勃朗三角光", "Rembrandt Triangle Lighting", "伦勃朗三角光，侧上方主光在暗侧面颊形成清晰小三角亮区，面部立体且具有戏剧深度", "Rembrandt triangle lighting, high side key forming a distinct small triangular highlight on the shadow-side cheek, dimensional dramatic face", lightingNegative),
  param("lighting", "lighting-top-light", "dramatic", "垂直顶光", "Direct Top Light", "垂直顶光从主体正上方照下，额头、肩部和顶部明亮，眼窝与下方形成受控深阴影", "direct top light from above, bright forehead shoulders and upper planes with controlled deep downward shadows", lightingNegative),
  param("lighting", "lighting-underlight", "dramatic", "底部上照光", "Theatrical Underlight", "底部上照光从主体下方照射，使阴影向上投射，形成舞台化陌生感但不做恐怖畸变", "theatrical underlight from below, casting shadows upward for an unusual staged mood without grotesque horror distortion", lightingNegative),
  param("visual-effect", "effect-chromatic-aberration", "digital", "色差边缘", "Chromatic Aberration", "克制的色差边缘特效，主体保持清晰，仅在画面边缘和高反差轮廓出现轻微红青分离", "restrained chromatic aberration effect, sharp subject with subtle red-cyan separation only near frame edges and high-contrast contours", effectNegative),
  param("visual-effect", "effect-heat-haze-distortion", "atmosphere", "热浪空气扭曲", "Heat-Haze Distortion", "热浪空气扭曲特效，远处道路、建筑或地平线因高温产生连续波动，前景保持清晰稳定", "heat-haze distortion effect, distant road architecture or horizon wavering through hot air while the foreground remains sharp and stable", effectNegative)
];
