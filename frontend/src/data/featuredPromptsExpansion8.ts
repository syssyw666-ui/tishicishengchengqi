import type { FeaturedPromptItem } from "./featuredPrompts";

export const featuredPromptsExpansion8: FeaturedPromptItem[] = [
  {
    id: "img2img-pixel-dissolve-memory",
    category: "image-to-image",
    group: "style-transfer",
    zhTitle: "像素消散记忆",
    enTitle: "Pixel-Dissolve Memory",
    zhDescription: "把可辨主体重构为有限色像素块，并让环境沿真实方向逐块减少直至融入纸白。",
    enDescription: "Rebuild a recognizable subject with a limited pixel palette and let its surroundings disperse block by block into paper white.",
    originalImage: "/assets/featured/img2img-pixel-dissolve-memory-original.jpg",
    resultImage: "/assets/featured/img2img-pixel-dissolve-memory-result.jpg",
    prompt: "请将上传照片重构为 3:4 竖版“像素消散记忆海报”。锁定主体身份、数量、姿态、建筑比例、道路或水面方向、遮挡关系、相机视角和透视，不改变最具辨识度的结构。把原图压缩为“6 至 12 种源图颜色”，使用清晰独立的方形或近方形像素块重建主体：中心和识别细节保持较完整，轮廓、植被、道路、水面、倒影与远景沿原有透视、流向或运动方向逐步减少像素数量、拉开间距并消失到暖象牙白纸面；留白占画面约 50% 至 65%。消散只能来自块的密度递减，不使用透明渐变、模糊或随机故障。可在完整留白处加入一行不超过“5 个英文单词”的小标题，地点未知时不要猜测。避免照片马赛克、整图降采样、像素切片拉伸、RGB 故障、体素 3D、游戏界面、十字绣、满版像素背景、额外主体、乱码、Logo 和水印。"
  },
  {
    id: "img2img-sculptural-impasto-miniature",
    category: "image-to-image",
    group: "style-transfer",
    zhTitle: "立体厚涂微景观",
    enTitle: "Sculptural Impasto Miniature",
    zhDescription: "把照片的核心景物塑造成带真实颜料高度、刮刀痕和窄幅地景基座的厚涂微景观。",
    enDescription: "Translate the source into a miniature landscape with real impasto height, palette-knife ridges, and a narrow painted terrain base.",
    originalImage: "/assets/featured/img2img-sculptural-impasto-miniature-original.jpg",
    resultImage: "/assets/featured/img2img-sculptural-impasto-miniature-result.jpg",
    prompt: "请把上传照片制作成 3:4 竖版“立体厚涂微景观”。保留主体数量、轮廓、朝向、建筑或地形比例、人物动作、前后遮挡和叙事关系，只选取最能代表原图的一个主体与少量必要环境。将整个场景重构为白色纹理纸上的微型油画地景：主体具有真实厚颜料体积，刮刀堆叠、颜料脊线、抬高边缘、混色断面和半手塑痕迹清楚可见；道路、水面、山脊或光带整理成一条轻巧狭长的“厚涂地景基座”，为主体提供可信落点。配色从原图最明亮的 4 至 7 种颜色提炼，重颜料集中在水、云、地面和局部高光，其余区域保留大量干净纸白。画面应像真实微距拍摄的厚涂小景，而不是普通油画滤镜。避免展示原照片、上下对比版式、塑料 CGI、软陶玩具、廉价卡通、满版油画背景、固定糖果配色、无关景物、长文字、Logo 和水印。"
  },
  {
    id: "img2img-rounded-isometric-blocks",
    category: "image-to-image",
    group: "style-transfer",
    zhTitle: "圆角模块雕塑",
    enTitle: "Rounded Isometric Modules",
    zhDescription: "把原图的结构、重心和配色转译为圆角模块互锁的等距纸浆雕塑。",
    enDescription: "Translate source structure, center of gravity, and palette into an interlocking rounded isometric pulp sculpture.",
    originalImage: "/assets/featured/img2img-rounded-isometric-blocks-original.jpg",
    resultImage: "/assets/featured/img2img-rounded-isometric-blocks-result.jpg",
    prompt: "请把上传照片重构为 3:4 竖版“圆角等距模块雕塑”。先锁定主体数量、质量分布、中心轴、曲线、孔洞、层级、遮挡和关键负形，再将其拆解为少量圆角几何模块，并通过堆叠、嵌套、穿插、错位高度和前后互锁恢复同一主体，而不是机械爆炸分解。模块大小要有主次，识别部位使用更小体块，大片结构使用稳定大体块；主体的朝向、重心和空间关系必须与原图一致。色盘完全来自原图，整理为一个主色、两至四个辅助层级和少量强调色，可提高明度并降低脏灰，但不加入原图没有的固定配色。材质为细哑光纸浆、粉蜡、软木或柔性复合材料，边角圆润，光线柔和，背景极浅并保留大量负空间。避免乐高颗粒、体素像素、机械零件爆炸、塑料高光、金属科幻、儿童积木玩具、电商展示台、额外物件、文字、Logo 和水印。"
  },
  {
    id: "img2img-kraft-stencil-landmark",
    category: "image-to-image",
    group: "style-transfer",
    zhTitle: "牛皮纸双色镂印",
    enTitle: "Kraft Two-Color Stencil",
    zhDescription: "从单一地标提取连续负形，以深色天然纤维纸和一种浅色油墨形成严格双色镂印。",
    enDescription: "Reduce one isolated landmark to a continuous negative form printed with one light ink on dark fibrous kraft paper.",
    originalImage: "/assets/featured/img2img-kraft-stencil-landmark-original.jpg",
    resultImage: "/assets/featured/img2img-kraft-stencil-landmark-result.jpg",
    prompt: "请将上传的单一地标或轮廓明确物件制作成 3:4 竖版“牛皮纸双色镂印海报”。仅适用于灯塔、塔楼、牌楼、纪念碑、风车、亭阁、桥塔或孤舟等可由单一强轮廓识别的主体。保留主体数量、朝向、高宽比、视角、顶部、基座，以及“2 至 6 个”决定身份的内部孔洞；只保留维持落点所需的最少地面、岸线、岩石或水面。使用一整张深棕或源图暗部对应的天然纤维纸作为底色，只用一种不透明浅色油墨印刷主体；识别主要依靠连续的大面积浅色负形与少量深色孔洞，不画摄影明暗。上部轮廓清晰，下缘通过真实模板漏印、纸纤维露底和不规则墨量逐渐融入纸面，禁止数字透明度和模糊。可加入一个与画面事实对应的英文单词，小而克制。避免普通黑剪影、自动阈值滤镜、细密蚀刻、多色套印、渐变、立体纸艺、虚构地域符号、额外树鸟人物、长文字、Logo 和水印。"
  },
  {
    id: "img2img-paper-cutout-travel-people",
    category: "image-to-image",
    group: "style-transfer",
    zhTitle: "实景纸片人物",
    enTitle: "Paper Figures in Real Space",
    zhDescription: "完整保留真实环境，只把照片中的人物替换为与原姿势一致、正确落地的暖白纸片线稿。",
    enDescription: "Keep the real environment intact and replace only its people with grounded warm-white paper sketch figures.",
    originalImage: "/assets/featured/img2img-paper-cutout-travel-people-original.jpg",
    resultImage: "/assets/featured/img2img-paper-cutout-travel-people-result.jpg",
    prompt: "请严格以上传照片为唯一来源制作“实景纸片人物”。完整保留原照片中的建筑、道路、自然环境、透视、材质、色彩和真实光线，只把所有可辨识人物转换为暖白色薄纸剪影。每个人物必须保留原身份线索、数量、姿势、朝向、手势、服装外轮廓、随身物件、彼此间距、接触动作和前后遮挡；纸片使用略不齐的模切边、细微纸纤维、松弛的黑色手绘轮廓和极少内部线条。根据环境主光，在脚底和遮挡接触处加入短而浅、方向正确的纸层阴影，使人物真实站立在原地；相机、雨伞、自行车或包只在动作不可缺少时随人物纸艺化。不要重绘环境，不要改变人物数量和关系。避免透明人物加白线、彩色漫画、可爱贴纸白边、厚泡沫板、漂浮、脚下无落点、牵手分离、重复人物、改姿势、气泡文字、Logo 和水印。"
  },
  {
    id: "img2img-gouache-object-archive",
    category: "image-to-image",
    group: "poster-layout",
    zhTitle: "水粉物件档案",
    enTitle: "Gouache Object Archive",
    zhDescription: "从原图提取三至七件真实物品，以不透明水粉重新编排为有呼吸感的旅行静物档案。",
    enDescription: "Extract three to seven real source objects and recompose them as an airy opaque-gouache travel archive.",
    originalImage: "/assets/featured/img2img-gouache-object-archive-original.jpg",
    resultImage: "/assets/featured/img2img-gouache-object-archive-result.jpg",
    prompt: "请把上传照片制作成 3:4 竖版“水粉物件档案”。从原图中选择“3 至 7 件”最能代表场景的真实物品，如器皿、食物、花叶、衣物、工具、票据或小型建筑局部；保持每件物品的数量、比例特征、颜色、材质线索和相互关系，不虚构品牌、文字或新道具。将物品从杂乱背景中提炼出来，重新编排为暖白粗纹纸上的安静静物组合：一件主物占据视觉中心，其余物件以大小、遮挡和间距形成节奏，四周保留连续大留白。使用真正不透明、哑光、高覆盖水粉，保留刷毛方向、颜料厚薄、干刷缺口、略粗手工边缘和纸白高光；色盘完全取自原图并压缩为 4 至 8 色。可加入极小编号或短标题，但地点和日期未知时不得编造。避免透明水彩、原图同构滤镜、油画厚涂、塑料 3D、儿童涂色、物件数量漂移、凭空添加商品、复杂背景、乱码、Logo 和水印。"
  },
  {
    id: "img2img-charcoal-fading-memory",
    category: "image-to-image",
    group: "style-transfer",
    zhTitle: "炭笔渐隐记忆",
    enTitle: "Charcoal Fading Memory",
    zhDescription: "用真实炭粉、断线、橡皮提亮和逐渐稀疏的残屑完成物理渐隐，而非数字模糊。",
    enDescription: "Create a physical fade through charcoal powder, broken contours, eraser lifts, and increasingly sparse residue rather than digital blur.",
    originalImage: "/assets/featured/img2img-charcoal-fading-memory-original.jpg",
    resultImage: "/assets/featured/img2img-charcoal-fading-memory-result.jpg",
    prompt: "请将上传照片制作成 3:4 竖版“炭笔渐隐记忆研究”。锁定主体身份、数量、姿态、方向、比例、视角、建筑或地形关键结构，只选择“1 至 2 个”最强记忆锚点，删除无关杂物但不替换主体。使用柳条炭、压缩炭、炭笔和极少石墨在干净暖白哑光素描纸上作画：焦点区域结构清楚，短而有方向的宽笔触、粗细不均的轮廓和局部深黑建立体积；向指定的“消散方向”依次经过断裂轮廓、少量擦抹、可见橡皮提亮、稀疏炭粉和极少残屑，最终回到完全未触碰的纸白。粉尘只能出现在主体和渐隐边缘附近，不能弄脏全页。保持单色暖灰、冷灰、炭黑和少量石墨银。避免黑白照片滤镜、整幅炭笔风景、数字透明度、羽化、模糊、雾化、喷枪渐变、学术密排线、全纸脏灰、文字、Logo 和水印。"
  },
  {
    id: "img2img-clean-ink-stipple-memory",
    category: "image-to-image",
    group: "style-transfer",
    zhTitle: "纯墨点描记忆",
    enTitle: "Clean Ink Stipple Memory",
    zhDescription: "用纯黑墨块、少量变线和受控圆点从实体过渡到洁净纸白，保持纸面清透。",
    enDescription: "Move from pure black ink masses through controlled round stippling into pristine paper white.",
    originalImage: "/assets/featured/img2img-clean-ink-stipple-memory-original.jpg",
    resultImage: "/assets/featured/img2img-clean-ink-stipple-memory-result.jpg",
    prompt: "请将上传照片制作成 3:4 竖版“纯墨点描记忆”。以原图为唯一内容来源，保留主体身份、数量、朝向、比例、遮挡和核心空间关系，选取最强视觉锚点并删除非必要杂物。使用饱和纯黑液体墨块建立主体核心，以少量粗细变化、略有停顿的经济线条说明结构，再用大小克制、边缘清楚、人工分布的圆形墨点承担中间明度和边缘后退；标记必须依次形成“实黑形体 → 受控点描 → 完整洁净纸白”的过渡。墨点只落在主体及其必要延伸范围，不平均铺满背景；象牙白纸保持平整、明亮、无污迹。避免水墨晕染、灰雾、炭粉、铅笔排线、干刷飞白、随机泼墨、印刷网点滤镜、像素马赛克、整页颗粒、自动描边、大标题、乱码、Logo 和水印。"
  }
];
