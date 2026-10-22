# 风格库补充检索记录（2026-10-21）

本记录用于后续扩充时避免重复。检索对象包含现有 1,300+ 参数目录，以及 GitHub 上公开的图像生成 Skill。

## 已参考并补充

- [orange-line-illustration](https://github.com/orange2ai/orange-line-illustration)：库中原本缺少“细黑线、大留白、唯一暖橙强调、微小人物”的完整社论插画语言，新增为“橙线极简社论”。参数提示词只保留视觉风格，不包含 Skill 的工作流和角色设定。
- 全球民艺缺口：新增米蒂拉民间画、瓦尔利部落画、贡德点线民间画、卡拉姆卡里手绘染布、帕塔契特拉卷轴画、佩特里基夫卡花卉画、北欧玫瑰彩绘、葡萄牙蓝白瓷砖画、摩洛哥泽利格拼砖、波斯细密画、墨西哥阿马特树皮画。
- 现代与专业插图缺口：新增精准主义、意大利未来主义、达达摄影蒙太奇、形而上绘画、粗野艺术、新表现主义、科学植物图谱、时装动态速写、建筑钢笔淡彩、纸切社论拼贴和玻璃反绘。

## 检索后判定重复，未新增

- [berryon-visual-skills](https://github.com/Howell5/berryon-visual-skills)：其中 anime、claymation、crayon、cyanotype、etching、linocut、oil-painting、risograph、stipple、woodcut 等视觉语言均已存在。
- [multi-photo-travel-zine-skill](https://github.com/zhenbang1216/multi-photo-travel-zine-skill) 与 [photo-to-zine-postcard](https://github.com/Whiplashzeb/photo-to-zine-postcard)：现有“拾景纸刊”“复古旅行手账”“摄影速写编辑页”等已覆盖其主要用途，不重复新增。
- 至上主义、构成主义、欧漫清线、黄金时代冒险插画、波兰民间剪纸、俄罗斯卢博克、巴厘岛 Batuan 细密画和越南漆画均已存在，仅保留原项目。

## 分类原则

- 有明确艺术史、插图史或地域传统体系的项目归入“艺术家 / 画派”。
- 可与任意题材混用的媒介和设计处理归入“画面风格”。
- 民族身份与服饰不等同于艺术风格；本批全球民艺仅描述画法、材料和图案组织，不用于推断人物身份。

## 第二轮补充

- 参考 [poster-generator-skill](https://github.com/howardz27/poster-generator-skill) 的 20 种海报系统进行交叉检查。Swiss Editorial、Bauhaus、Constructivist、Art Deco、Risograph、Japanese Ma、Glassmorphism、Editorial Collage 等均已有对应项目，因此未重复新增。
- 参考 [higgsfield-moodboard](https://github.com/OSideMedia/higgsfield-ai-prompt-skill/tree/main/skills/higgsfield-moodboard) 的摄影风格表，现有库已覆盖 Y2K 闪光、街头纪实、亚洲怀旧、黑白复古等方向；只补充视觉机制明显不同的“萨巴蒂尔银化反转”和“假彩红外摄影”。
- 参考 [bluue-minimal-doodle](https://github.com/xiaomaolu/bluue-ai-skills/tree/main/bluue-minimal-doodle) 后，判定其稀疏黑线与现有“斯坦伯格式机智线画”“橙线极简社论”作用接近，未新增。
- 补充模拟印相工艺：日光显影印相、花汁植物印相、珂罗版印相。
- 补充全球民艺视觉体系：阿丁克拉符号印花、恩德贝勒几何壁画、廷加廷加民间画、因纽特石刻版画、毛利科怀怀纹样、波利尼西亚塔帕布纹、古纳莫拉反向贴布、奥托米特南戈刺绣、西北海岸形线艺术、卡利加特民间画、坎塔叙事刺绣、日式刺子绣、孟加拉阿尔帕纳地画、塔拉维拉陶瓷彩绘、阿莱布里赫彩绘。
- 同步扩写 20 个原本过短的“渲染质感 / 视觉特效”提示词，使其明确光学结构、空间关系、材质响应和常见失败约束，不再只写抽象形容词。

## 第三轮补充

- 再次对照公开图像生成 Skill 中的海报、情绪板、手绘与人像风格清单，确认常见摄影、动漫、版画、拼贴和极简设计方向已有完整覆盖，不按标题换皮重复建项。
- 补充西方艺术史中视觉机制明确且库内缺失的方向：洛可可、新古典主义、拉斐尔前派、荷兰黄金时代静物、哈德逊河画派、巴比松画派、象征主义、魔幻现实主义、欧普艺术、硬边抽象、塔希主义、科布拉画派、贫穷艺术、奥菲主义、漩涡主义、光线主义、具体派行动绘画与物派材料装置。
- 补充两个跨媒介设计方向：非洲未来主义社论与 Frutiger Aero 生态数码视觉。前者强调历史文化和未来技术的编辑式融合，后者强调千禧年代透明、生态、乐观的早期数码质感。
- 扩写 20 个原本偏短的后期调色提示词，增加色温、黑白位、中间调、肤色保护、材质表现和适用场景，避免多个调色项目只产生“加饱和或加冷暖”的同质结果。

## 第四轮补充

- 参考 [imagegen-skills 的风格菜单](https://github.com/veryCoolTimo/imagegen-skills/blob/main/skills/image-prompt/references/styles.md)、[MUJI Style Skill](https://github.com/yanliudesign/muji-style-skill) 与 [baoyu-comic](https://github.com/sdoaiya/skills/tree/master/baoyu-comic) 的视觉拆解方式，继续以媒介、线条、色盘、空间密度和材料证据定义风格，而不是只堆叠风格名称。
- GitHub 清单中的水彩、油画、素描、线稿、水墨、赛博朋克、动漫、装饰艺术、低多边形、蒸汽波、欧漫清线、漫画网点和常见电影风格均已存在，因此未重复新增。
- 补充历史图像体系：拜占庭圣像画、彩绘手抄本、古罗马马赛克、奥斯曼细密画、莫卧儿细密画、拉贾斯坦细密画与埃塞俄比亚教堂画。
- 补充全球民艺与纺织体系：海地朴素画、巴西科尔德尔木刻、维乔尔珠饰、肯特织布、印尼蜡染、韩式包袱布、日式型染、印度法德卷轴画、越南东湖版画、菲律宾奥基尔纹饰与乌克兰彩蛋蜡染。
- 补充独立媒介：蜡画层染、衍纸卷条、擦印肌理拼贴和刮擦显纹绘画。
- 删除与“光追反射”作用高度重合的泛化“光线追踪”项目；扩写 19 个最短的动画、东方绘画、电影、渲染和天气特效提示词，使其描述可见结构而非抽象形容词。

## 第五轮补充

- 参考 [Higgsfield cartoon Skill 的 Rubber Hose 规范](https://github.com/cfongai/higgsfield-content-pipeline/blob/main/skills/seedance/03-cartoon/SKILL.md) 与 [aesthetic-frontend-skills 的视觉词典](https://github.com/alexiseverage/aesthetic-frontend-skills)，检查早期动画、现代设计和艺术史画派的断层。
- 补充风格主义、浪漫主义、学院派历史画、自然主义、唯美主义、维也纳分离派、纳比派、新客观主义、垃圾箱画派、美国地域主义、抒情抽象、极简主义绘画、动态艺术、光与空间艺术、低眉波普超现实以及图案与装饰运动。
- 补充橡皮管复古动画、中世纪现代平涂动画、纸浆冒险杂志插画与复古科幻平装封面。现有“中世纪现代社论插画”“装饰艺术”“合成波”只保留原项目，未以近义名称重复建立。
- 扩写 20 个原本最短的风格、渲染与调色提示词，为合成波、东方绘画、电影类型、版画、彩色玻璃、纸艺、实时渲染和相机调色补充可见结构与失败边界。

## Expansion F: global textile and heritage craft coverage

This pass filled distinct gaps that were not represented by the existing Chinese heritage, printmaking, textile, and regional folk-art entries. It adds 20 non-overlapping visual languages: Bogolan mudcloth, Kuba raffia cloth, Suzani embroidery, Palestinian Tatreez, Japanese boro, Japanese shibori, Peruvian retablo, Andean weaving, Aboriginal bark-painting inspiration, Javanese wayang kulit, Balinese Kamasan painting, Thai Benjarong porcelain, Burmese lacquerware, Persian khatam marquetry, pietra dura inlay, Yoruba Adire, Egyptian Khayamiya applique, Pennsylvania Fraktur, Japanese kintsugi, and Plains ledger-art inspiration.

The prompts describe visible construction, material, palette, edge behavior, and compositional rhythm rather than copying a named artifact. Culturally sensitive entries explicitly avoid reproducing sacred or tribe-specific symbols. All 20 references were newly generated in two contact sheets, measured against their actual panel boundaries, cropped to unique 960 x 540 assets, and visually audited to prevent neighboring-panel bleed.

## 第七轮补充

- 以 GitHub 的 [AI Art Style Prompt Library](https://github.com/bthnbdk/ai-art-style-prompts)、[handraw-style](https://github.com/yang0/handraw-style) 和 [story-picture](https://github.com/songxiaopeng529/story-picture) 为外部候选清单，先与本地 1493 项按名称、媒介机制和生成作用交叉检查；已存在的艺术装饰、构成主义、民间织物、常见摄影和动漫方向均未重复增加。
- 补充城市与区域视觉：秘鲁奇查荧光海报、肯尼亚马塔图车身彩绘、使命区手记绘画、穆德哈尔建筑纹饰、布列塔尼七兄弟派。
- 补充海报与复制媒介：物件海报风、波兰海报学派、苏茨艺术、复印机艺术、邮寄艺术拼贴和铂钯印相。每项均按平面结构、油墨或纸张行为区分，不以近义标题换皮。
- 补充区域工艺：代尔夫特蓝陶、马乔刺绣、伊兹尼克陶瓷、帕列赫漆画、日本莳绘、韩国丹青、马赛珠饰、祖鲁珠饰和科霍戈手绘布；涉及民族传统的提示词只描述可见材料与构造，不复制特定神圣符号。
- 扩写 20 个原本过短的调色、渲染、动画和版画提示词，补充色调曲线、材质响应、空间组织与失败边界，使不同选项产生可观察的差异。
- 20 张参考图全部重新生成，按真实拼图边界单独裁切为 960 × 540，并针对白色分隔线进行了二次裁剪审查。

## 第八轮补充

- 继续参考 GitHub 的 [AI Art Style Prompt Library](https://github.com/bthnbdk/ai-art-style-prompts)、[handraw-style](https://github.com/yang0/handraw-style) 与 [story-picture](https://github.com/songxiaopeng529/story-picture)，同时对照 [Alternative Process Reference](https://github.com/peva3/Lightroom-Presets/blob/main/docs/alternative-process.md) 核对历史摄影工艺。候选项先与本地目录按名称、视觉机制和适用结果三层去重。
- 补充现代艺术史断层：新现实主义、新具象、阿旺桥画派、青年波兰、顶峰主义、捷克立体主义、七骰社、空间主义、韩国单色画、ZERO 艺术、新达达拼装与纯粹主义。提示词聚焦构图、材料和表面行为，不要求复刻某一件既有作品。
- 补充独立历史摄影工艺：化学显影绘画、重铬酸盐树胶印相、盐纸印相、蛋白印相、奥托克罗姆、溴油印相、卡罗式纸负片和范戴克棕印相。各项按感光材料、承印纸、颗粒与综合色调明确区分，避免全部退化成同一种棕色旧照片滤镜。
- 扩写 20 个原本过短的动画、东方绘画、渲染、调色、民族织纹和纤维工艺提示词，明确可观察的线条、色阶、反射、温度映射、织造结构与失败边界。
- 20 张新增参考图均为独立生成内容，依据拼图实际分隔边界裁切为 960 × 540；完成尺寸、哈希唯一性和相邻画面串入检查。

## 第九轮补充

- 参考 GitHub 的 [illustration-style reference](https://github.com/wuyoscar/GPT-Image2-Skill/blob/main/skills/get-prompt-from-image/references/illustration-style.md)、[image-generation-enhanced](https://github.com/skillatlas/skills/blob/main/skills/image-generation-enhanced/SKILL.md)、[image-prompt](https://github.com/veryCoolTimo/imagegen-skills/blob/main/skills/image-prompt/SKILL.md) 与 [prompt-images](https://github.com/replicate/skills/blob/main/skills/prompt-images/SKILL.md)，继续按可观察的色彩结构、材料工序和成像机理筛选候选项，不把近义风格名称重复入库。
- 补充现代与战后艺术断层：同步主义、意大利跨先锋、湾区具象、芝加哥意象派、巴西新具体主义、MADI 几何艺术、Supports/Surfaces 与超扁平流行艺术。
- 补充材料与地域工艺：刻划灰泥、仿石膏嵌饰、微型玻璃马赛克、日本组子、寄木、手鞠、水引和琉球红型染。提示词描述实际构造、接缝、纤维与表面响应，不复制特定神圣符号。
- 补充历史摄影工艺：碳素转印、金盐印相、银版摄影和腐蚀浮膜摄影，并通过承印材料、综合色调、乳剂状态和观看方式区分，避免统一退化为旧照片滤镜。
- 20 张参考图均重新生成。裁切时测量拼图实际分隔线，按内容边界逐格取样并输出为 960 × 540；随后检查尺寸、文件哈希和相邻画面串入，避免等分裁切造成白边或错位。
