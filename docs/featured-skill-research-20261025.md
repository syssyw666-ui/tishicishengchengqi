# 精选图生图技能扩充记录（2026-10-25）

## 本轮检索来源

- 综合索引：https://github.com/zhuyansen/awesome-ai-image-skills
- 单双色社论印刷：https://github.com/yanliudesign/mono-color-skill
- 复古 CRT 位图界面：https://github.com/TaiT-tt/tait-crt-interface-skill
- 粗模早期三维：https://github.com/zoe-code-universe/roughcast-3d
- 照片重构方案集合：https://github.com/Guanhua-Jerry-Yang/photo-remix
- 生活碎片编辑设计参考：https://github.com/dacnay816y62-hub/fantasy-qiqiguaiguai-skill
- 多风格照片转绘目录：https://github.com/Vieeeeeee/wibi-style
- 视觉设计技能集合：https://github.com/FANzR-arch/Phil-design-skills
- 照片叙事系统：https://github.com/swping999/scene-card-studio
- 手绘风格配方：https://github.com/threerocks/hand-drawn-styles

以上仓库仅作为视觉方向与工作流研究来源。写入本项目的标题、解释和提示词均重新归纳，未要求用户安装第三方技能，也未复制版权角色、品牌界面或在世艺术家姓名。

## 新增精选项目

本轮新增 12 项，全部归入“精选提示词 / 图生图”：

1. 单双色社论印刷
2. 复古 CRT 位图界面
3. 粗模早期 3D 重铸
4. 登机牌旅行记忆
5. 原创 JRPG NPC 档案
6. 实况动作九宫格
7. 主屏回忆拼贴
8. 手绘界面涂鸦
9. 热敏小票记忆
10. 蜡笔动态叠画
11. 剪影社论海报
12. 口袋绘本折页

同步新增 4 项纯风格参数：单双色社论印刷、复古 CRT 位图界面、粗模早期 3D、原创 JRPG 角色界面。登机牌、九宫格、主屏、小票等属于完整用途或版式方案，不重复伪装成画面风格。

第二轮新增 6 项：照片拼豆挂件、织物玩偶肖像、虹彩长曝光肖像、像素切片拉伸、纸艺唱片肖像、视觉身份成套延展；同步新增“照片拼豆工艺”和“织物玩偶肖像”两项纯风格参数。虹彩长曝光可由现有虹彩材质与长曝光镜头组合表达，其余四项属于完整用途或版式流程，因此不再制造同义风格卡。

## 第三轮：人物编辑、场景转绘与商业图组

继续检查近期 GitHub 图片技能库中的照片转绘方向，重点参考：

- `adrianpunk/Punk-Skill` 的图片输入型风格目录，用于识别人物转牌、时尚观察页、怪诞情绪线稿与立起纸艺场景等任务结构。
- `Vieeeeeee/wibi-style` 的照片适配目录，用于识别鱼眼城市封面、故障像素、餐桌编辑、漫画裁切、扁平纸面微景、迷你自拍和蓝纸漫画字像等高辨识度结构。
- `liangdabiao/ecom-details-image` 的 Campaign Style Lock 思路，用于补充跨主图、微距、场景和机制图保持产品一致性的商业图组工作流。

本轮新增 12 项：地下试镜转牌、重鱼眼城市封面、故障像素拼贴、复古餐桌杂志页、相框漫画分镜、纸面扁平微景、巨头迷你自拍、蓝纸漫画字像、时尚速写观察页、人物立起纸艺景观、怪诞灵魂线稿、电商图组风格锁。

去重结论：像素头像与现有像素艺术加头像用途作用接近，凌乱蜡笔宠物肖像与儿童蜡笔手绘及宠物肖像重合，复古手撕拼贴、印刷票券、黑白蚀刻封面、清线漫画、蓝晒与纸面压凹均已有等价或更完整条目，因此未新增。新项目所需纯风格可由现有鱼眼镜头、数字故障、漫画波普、剧画硬派漫画、表现主义心理绘画、纸艺、专色印刷和时尚用途组合表达，没有再制造同义参数卡。

两张 4 × 3 拼图均由同一格对的原图与效果图同时生成。裁切前自动检测每一条白色分隔带，向内收 3 像素，再将单格完整缩放到 960 × 540，并使用同一张图的模糊背景补齐；24 张图片经拼图目视检查，没有相邻格串图、裁掉主体、白边或复用旧资产。

## 去重结论

以下热门方案与现有库作用高度重合，本轮不新增：

- 稀疏照片抽象编辑：与“照片抽象社论”近似。
- 白纸手绘照片复兴：与“清新留白水彩”“摄影速写编辑页”近似。
- 小人和照片结构互动：与“照片里的第二世界”近似。
- 等距纸面微缩模型：与“等距微缩编辑页”近似。
- 丝网旅行手账：与“复古丝网版画”“复古旅行手账”近似。
- 邮票拼贴手账：与“星年莫奈邮票”“复古旅行手账”近似。
- 城市建筑社论海报：与现有建筑信息图、建筑海报与旅行海报多项近似。

## 图片制作与裁剪

- 使用 PHOTO_PLTB 联系表流程生成两张 3×2 对照表，每格包含严格对应的原图与效果图。
- 按实际白色分隔带逐半测量边界；上下行不共享理论切分坐标。
- 每张最终资源固定为 960×540，竖图完整 `contain`，空余区域使用该图片自身的模糊背景填充。
- 原图与效果图共 24 张，另生成 4 张参数卡图；不引用旧精选项目图片。

## 第四轮：照片编辑、人物转绘与系列内容

本轮从近期公开的图片技能仓库中筛选出 12 个与现有库作用不同的方向：照片音乐记忆卡、照片借形转译、碎片混合媒介海报、无描边丙烯色块转绘、穿搭时装插画、街拍人物插画化、复古卡纸静物重构、磨砂半透明物件海报、照片图章档案、社媒信息封面、日常平涂线描转绘和系列社交卡图。

主要研究来源：

- https://github.com/carolinaaafy/photo-now-playing
- https://github.com/MickeyWzt/photo-form-transposition
- https://github.com/Eursolarmark/photo-fragmented-mixed-media-poster
- https://github.com/mengfanfreyachan/vivid-acrylic-marker-photo-skill
- https://github.com/xiaozhoustefanie227/outfit-to-fashion-illustration-skill
- https://github.com/dacnay816y62-hub/street-photo-illustration-skill
- https://github.com/qianyuning/retro-stilllife-photography
- https://github.com/Luna-QingYuFan/frosted-object-poster
- https://github.com/Dlcccc71913/skill-make-photo-stamp-archive
- https://github.com/Vivixiao980/xhs-cover-skill
- https://github.com/miso-zm/photo-doodle
- https://github.com/kostja94/social-cards-skills

语义去重时跳过了拾景纸刊、照片抽象社论、旅行贴纸卡、复古旅行手账、双色孔版印刷、水墨重构、月刊明信片、纸面解构拼贴、照片复兴和建筑编辑海报等已有等价方案。完整工作流只进入精选提示词；仅为确实缺失的视觉语言补充 6 张纯风格卡：碎片混合媒介、无描边丙烯色块、时装编辑速写、日常平涂线描、复古卡纸静物摄影和磨砂物件编辑插画。

图片使用两张 4×3 原图/效果图联系表和一张 3×2 纯风格联系表生成。纯风格表第三列因白色画面与白色分隔带相连，自动白边检测误把起点识别到画面内部；本轮在使用前通过审查拼图发现并废弃错误裁片，改用等分网格坐标向内收 3 像素重新裁切。最终 30 张新资源均固定为 960×540，逐张拼图复核无串图、旧图复用、白边或主体截断。

## 第五轮：结构转译、纸面工艺与受控色场

本轮继续检查 GitHub 中近期公开的图生图 Skill，并以“结果机制是否真正不同”为去重标准，主要研究来源：

- https://github.com/truman-t3/scene-score-skills
- https://github.com/modest021/photo-abstract-pixel
- https://github.com/yunmin311/dark-canvas-image-skill
- https://github.com/Arthur-Yue611/photo_skills
- https://github.com/Vieeeeeee/wibi-style
- https://github.com/zhu135531-hue/photo-to-torn-paper

新增 12 项精选图生图：场景节奏转译、抽象像素重绘、暗幕织纹画布、纸浆浅浮雕海报、七彩水墨双联、柔光渐变双联、电蓝粗网点头像、蛇发游线墨绘、原色硬光都市、奶油纸空心家居速写、童年大头卡、青橙浓雾光场。

新增 6 项纯风格参数：场景节奏结构画、暗幕织纹画布、纸浆浅浮雕、蛇发游线墨绘、原色硬光都市、奶油纸空心速写。抽象像素由现有像素艺术参数覆盖；电蓝粗网点可由网点与波普语言组合；七彩水墨、柔光渐变和青橙浓雾均依赖完整的照片保留、上下版式或空间改造流程，因此只进入精选提示词，不额外制造同义风格卡。

语义去重时跳过了“像素扫描融合”，因为现有“像素切片拉伸”和“故障像素拼贴”已经覆盖清晰锚点、像素边界与扫描方向；跳过“全景撕纸重构”，因为现有“复古拼贴插画”“拾景纸刊”和撕纸转场已覆盖相同作用；旅行水彩、照片与小人互动、邮票档案、手账和等距微缩等方案也均有更完整的现有条目。

图片使用两张 3×2 原图/效果图联系表和一张 3×2 纯风格联系表生成。联系表实际为 1536×1024，原图/效果图按 6×2 等宽格读取并向内收 8 像素；全部输出固定为 960×540，竖图完整缩放，空余区域仅使用该图自身的模糊背景。审查拼图确认 30 张新资源没有相邻格串图、旧图复用、白色分隔边或主体截断。

## 第六轮：旅行纪念、材质转译与电商结构化输出

本轮继续检查 2026-10-26 仍在更新的公开图片 Skill，重点参考：

- https://github.com/TracyGuuu/travel-enamel-pin-poster
- https://github.com/nevertoday/xxd-panel-224
- https://github.com/yinxiaowai/heytea-doodle-poster
- https://github.com/luciamao-creator/photo-wallpaper-maker
- https://github.com/xianyu110/ecommerce-image-skills
- https://github.com/op7418/guizang-yingzao-skill

新增 12 项精选图生图：旅行珐琅纪念、瓷片寓意重构、微型涂鸦故事、有机针织场景、照片解构锁屏壁纸、服装模特上身、产品卖点信息图、商品尺寸规格图、产品多角度套图、电商 A+ 模块、电商详情长图和 SKU 变体矩阵。完整提示词均重新整理为可直接替换内容的工作流，并明确锁定来源事实、产品结构、视觉一致性和禁止编造数据。

同步新增 3 项纯风格参数：瓷片寓意重构、微型涂鸦摄影和有机针织场景。旅行珐琅可由现有掐丝珐琅材质与海报用途组合，不再重复增加珐琅风格；锁屏壁纸和电商项目属于用途、结构或多图工作流，也不伪装成画面风格。

语义去重时跳过归藏营造建筑海报，因为已有建筑信息图、建筑艺术海报和旅行建筑编辑页；跳过双面 zine 明信片、钢笔淡彩旅行速写和普通白底商品主图，因为现有旅行手账、摄影速写编辑页、产品图和白底清理已覆盖相同作用；跳过解构双色调与食物编辑印刷，因为现有单双双色社论、照片抽象社论、餐桌杂志和美食摄影方案更完整。

图片使用 PHOTO_PLTB 流程生成两张 3×2 原图/效果图联系表和一张 3×1 纯风格联系表。裁切按每一格实际白色分隔带分别测量，未使用理论等分坐标；27 张最终资源均为 960×540，竖版内容完整缩放，空余区域仅以该图自身模糊副本填充。审查拼图确认所有资源哈希不同，未复用旧图，也没有相邻格串图、白边或主体被裁断。

## 第七轮：照片生产工具、身份控制与信息叠加

本轮通过 GitHub 公共 API 检索 2026-09-01 以后更新的照片 Skill，重点阅读以下原始仓库：

- https://github.com/rishi222k/tracefield
- https://github.com/cranelynn/dream-dot-collage-skill
- https://github.com/texdy112/photo-to-nail-art
- https://github.com/42-ghx/photo-to-ornament-workflow
- https://github.com/GUOCHENN/photo-shadow-puppet
- https://github.com/cconlyprivate/travel-photo-minimap
- https://github.com/linsahdkadsa/pose-copy
- https://github.com/Leokencheng/photo-to-cute-avatar
- https://github.com/beatra-ai/ai-image-realism-skill

新增 9 项精选流程：主体星图标注、梦境圆形抠图拼贴、照片转十片美甲、纹样浮雕生产图、彩色皮影双联、旅行小地图水印、人物姿势迁移、胶囊眼机器人头像和 AI 痕迹自然化。同步新增 2 张参数卡：主体星图标注归入数字视觉特效，胶囊眼机器人头像归入设计实验风格。

去重时跳过照片民俗拓印和照片拓印海报，因为“几何拓印图录”、木刻版画、丝网印刷与瓦猫拓印已经覆盖其结果机制；跳过艺术书小版画，因为现有清新留白水彩、纸浆浅浮雕和多项纸面小幅插画已覆盖；跳过动漫 IP 资产包和普通角色设定板，因为现有角色三视图、表情板、角色设定图和潮玩设定项目更完整；跳过照片弹出地图册，因为其主要交付是交互式网页而不是可直接复制的图像生成提示词。

本轮图片由一张 3×2 对照联系表、一张 3×1 对照联系表和一张 2×1 参数联系表生成。每个项目的原图和效果图在同次生成中锁定主体关系；按真实白色分隔带独立裁切后统一为 960×540，竖版内容完整缩放并只用自身模糊副本填充。20 张新资源哈希全部不同，审查拼图未发现相邻格串图、白边、错配或旧图复用。

## 第八轮：纸面材料渐隐与微型雕塑

本轮检索并逐项分析了 GitHub 仓库 `GZ-L/photo-to-poster-skills` 的 14 个照片转海报技能。新增 8 项机制明确且与现有库不等价的精选流程：像素消散记忆、立体厚涂微景观、圆角模块雕塑、牛皮纸双色镂印、实景纸片人物、水粉物件档案、炭笔渐隐记忆、纯墨点描记忆。同步新增 6 项纯风格或特效参数；水粉物件档案直接复用已有“水粉插画”风格，不制造同义参数，实景纸片人物则属于限定人物替换流程，也不伪装成通用画面风格。

明确跳过的近似项：水彩旅行卡与现有清新留白水彩、旅行明信片用途重合；旅行记忆双联与现有摄影加手绘旅行速写编辑页重合；怀旧旅行双联与复古旅行手账重合；纸艺旅行微景观与现有人物立起纸艺景观、等距微缩编辑页过近；民艺地标墨彩可由现有民族版画、水墨重构和地标海报组合表达；观察式钢笔淡彩与现有城市水彩速写、旅行艺术手稿重合。

本轮图片使用 PHOTO_PLTB 生成两张 4×2 原图/效果图严格配对拼版和一张 3×2 参数拼版。全部 22 张正式资源均为 960×540，竖向内容完整缩放，左右仅使用同图模糊副本填充；完成逐图目视、尺寸、哈希唯一性和相邻格污染检查。
