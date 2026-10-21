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
