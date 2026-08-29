import type { PromptParameter } from "../types";

const img = (id: string) => `${import.meta.env.BASE_URL}assets/parameters/${id}.png`;

type ClothingGroup =
  | "tops-sleeves"
  | "outerwear"
  | "pants"
  | "skirts-dresses"
  | "formal-uniform"
  | "traditional"
  | "fantasy-sci-fi"
  | "accessories-shoes"
  | "fit-material";

interface ClothingItem {
  id: string;
  styleGroup: ClothingGroup;
  zhName: string;
  enName: string;
  zhPrompt: string;
  enPrompt: string;
  negative?: string[];
}

const baseNegative = ["visible brand logo", "readable text on clothing", "wrong garment structure"];

const clothingItems: ClothingItem[] = [
  { id: "clothing-long-sleeve", styleGroup: "tops-sleeves", zhName: "长袖上衣", enName: "Long Sleeve Top", zhPrompt: "人物穿着长袖上衣，袖口和肩线清晰", enPrompt: "the character wears a long-sleeve top with clear cuffs and shoulder seams" },
  { id: "clothing-short-sleeve", styleGroup: "tops-sleeves", zhName: "短袖上衣", enName: "Short Sleeve Top", zhPrompt: "人物穿着短袖上衣，手臂露出且造型清爽", enPrompt: "the character wears a short-sleeve top, clean casual silhouette with visible arms" },
  { id: "clothing-sleeveless-top", styleGroup: "tops-sleeves", zhName: "无袖上衣", enName: "Sleeveless Top", zhPrompt: "人物穿着无袖上衣，肩部线条明确", enPrompt: "the character wears a sleeveless top with clearly visible shoulder lines" },
  { id: "clothing-tank-top", styleGroup: "tops-sleeves", zhName: "背心", enName: "Tank Top", zhPrompt: "人物穿着背心，简洁运动或夏日休闲感", enPrompt: "the character wears a tank top, simple sporty or summer casual feeling" },
  { id: "clothing-camisole", styleGroup: "tops-sleeves", zhName: "吊带上衣", enName: "Camisole", zhPrompt: "人物穿着吊带上衣，细肩带和轻盈面料", enPrompt: "the character wears a camisole with thin straps and light fabric" },
  { id: "clothing-turtleneck", styleGroup: "tops-sleeves", zhName: "高领上衣", enName: "Turtleneck", zhPrompt: "人物穿着高领上衣，颈部包裹感和干净轮廓", enPrompt: "the character wears a turtleneck with a clean covered neckline" },
  { id: "clothing-v-neck", styleGroup: "tops-sleeves", zhName: "V领上衣", enName: "V-Neck Top", zhPrompt: "人物穿着 V 领上衣，领口形成清晰纵向线条", enPrompt: "the character wears a V-neck top with a clear vertical neckline shape" },
  { id: "clothing-button-shirt", styleGroup: "tops-sleeves", zhName: "衬衫", enName: "Button Shirt", zhPrompt: "人物穿着纽扣衬衫，领口、门襟和袖口结构清晰", enPrompt: "the character wears a button shirt with a crisp collar, placket, and cuffs" },
  { id: "clothing-t-shirt", styleGroup: "tops-sleeves", zhName: "T恤", enName: "T-Shirt", zhPrompt: "人物穿着基础 T 恤，简洁日常，版型自然", enPrompt: "the character wears a plain T-shirt, simple everyday silhouette" },
  { id: "clothing-sweatshirt", styleGroup: "tops-sleeves", zhName: "卫衣", enName: "Sweatshirt", zhPrompt: "人物穿着卫衣，柔软厚实，街头休闲感", enPrompt: "the character wears a sweatshirt, soft thick fabric, relaxed streetwear feeling" },
  { id: "clothing-knit-sweater", styleGroup: "tops-sleeves", zhName: "针织毛衣", enName: "Knit Sweater", zhPrompt: "人物穿着针织毛衣，可见织纹和温暖质感", enPrompt: "the character wears a knit sweater with visible knit texture and warm tactile material" },
  { id: "clothing-off-shoulder", styleGroup: "tops-sleeves", zhName: "露肩上衣", enName: "Off-Shoulder Top", zhPrompt: "人物穿着露肩上衣，肩颈线条突出", enPrompt: "the character wears an off-shoulder top emphasizing the shoulder and neckline" },
  { id: "clothing-crop-top", styleGroup: "tops-sleeves", zhName: "短款上衣", enName: "Crop Top", zhPrompt: "人物穿着短款上衣，腰线上移，造型更利落", enPrompt: "the character wears a crop top with a higher waistline and sharp modern silhouette" },
  { id: "clothing-oversized-shirt", styleGroup: "tops-sleeves", zhName: "宽松衬衫", enName: "Oversized Shirt", zhPrompt: "人物穿着宽松衬衫，松弛垂坠和自然褶皱", enPrompt: "the character wears an oversized shirt with relaxed drape and natural folds" },

  { id: "clothing-blazer", styleGroup: "outerwear", zhName: "西装外套", enName: "Blazer", zhPrompt: "人物穿着西装外套，垫肩、翻领和利落剪裁", enPrompt: "the character wears a blazer with structured shoulders, lapels, and tailored lines" },
  { id: "clothing-trench-coat", styleGroup: "outerwear", zhName: "风衣", enName: "Trench Coat", zhPrompt: "人物穿着长款风衣，腰带、翻领和飘逸下摆", enPrompt: "the character wears a trench coat with belt, lapels, and flowing long hem" },
  { id: "clothing-wool-coat", styleGroup: "outerwear", zhName: "羊毛大衣", enName: "Wool Coat", zhPrompt: "人物穿着羊毛大衣，厚实挺括，冬季高级感", enPrompt: "the character wears a wool coat, structured heavy fabric, refined winter look" },
  { id: "clothing-puffer-jacket", styleGroup: "outerwear", zhName: "羽绒服", enName: "Puffer Jacket", zhPrompt: "人物穿着羽绒服，蓬松分隔纹理和保暖体积", enPrompt: "the character wears a puffer jacket with quilted volume and warm padded sections" },
  { id: "clothing-leather-jacket", styleGroup: "outerwear", zhName: "皮夹克", enName: "Leather Jacket", zhPrompt: "人物穿着皮夹克，皮革高光、拉链和硬朗轮廓", enPrompt: "the character wears a leather jacket with glossy leather, zippers, and tough silhouette" },
  { id: "clothing-denim-jacket", styleGroup: "outerwear", zhName: "牛仔夹克", enName: "Denim Jacket", zhPrompt: "人物穿着牛仔夹克，粗斜纹、车线和复古休闲感", enPrompt: "the character wears a denim jacket with twill texture, seams, and vintage casual mood" },
  { id: "clothing-bomber-jacket", styleGroup: "outerwear", zhName: "飞行夹克", enName: "Bomber Jacket", zhPrompt: "人物穿着飞行夹克，罗纹袖口和短款蓬松轮廓", enPrompt: "the character wears a bomber jacket with ribbed cuffs and short rounded silhouette" },
  { id: "clothing-cardigan", styleGroup: "outerwear", zhName: "开衫", enName: "Cardigan", zhPrompt: "人物穿着针织开衫，柔软开襟和温和日常感", enPrompt: "the character wears a cardigan with soft knit texture and open-front relaxed style" },
  { id: "clothing-cape", styleGroup: "outerwear", zhName: "披肩", enName: "Capelet", zhPrompt: "人物披着短披肩，肩部包覆，轮廓优雅", enPrompt: "the character wears a short capelet covering the shoulders with an elegant outline" },
  { id: "clothing-cloak", styleGroup: "outerwear", zhName: "斗篷", enName: "Cloak", zhPrompt: "人物穿着长斗篷，大面积垂坠布料和戏剧化剪影", enPrompt: "the character wears a long cloak with heavy draped fabric and dramatic silhouette" },

  { id: "clothing-straight-pants", styleGroup: "pants", zhName: "直筒裤", enName: "Straight Pants", zhPrompt: "人物穿着直筒裤，裤腿线条平直利落", enPrompt: "the character wears straight pants with clean vertical leg lines" },
  { id: "clothing-wide-leg-pants", styleGroup: "pants", zhName: "阔腿裤", enName: "Wide-Leg Pants", zhPrompt: "人物穿着阔腿裤，裤腿宽松垂坠，强调比例", enPrompt: "the character wears wide-leg pants with loose drape and strong proportions" },
  { id: "clothing-jeans", styleGroup: "pants", zhName: "牛仔裤", enName: "Jeans", zhPrompt: "人物穿着牛仔裤，丹宁纹理、口袋和自然褶皱", enPrompt: "the character wears jeans with denim texture, pockets, and natural creases" },
  { id: "clothing-cargo-pants", styleGroup: "pants", zhName: "工装裤", enName: "Cargo Pants", zhPrompt: "人物穿着工装裤，多口袋结构和机能感", enPrompt: "the character wears cargo pants with multiple utility pockets and functional styling" },
  { id: "clothing-tailored-trousers", styleGroup: "pants", zhName: "西装裤", enName: "Tailored Trousers", zhPrompt: "人物穿着西装裤，中缝线、挺括面料和正式比例", enPrompt: "the character wears tailored trousers with crease lines and formal structured fabric" },
  { id: "clothing-shorts", styleGroup: "pants", zhName: "短裤", enName: "Shorts", zhPrompt: "人物穿着短裤，露出腿部，轻便休闲", enPrompt: "the character wears shorts, light casual styling with visible legs" },
  { id: "clothing-overalls", styleGroup: "pants", zhName: "背带裤", enName: "Overalls", zhPrompt: "人物穿着背带裤，肩带、胸前口袋和年轻休闲感", enPrompt: "the character wears overalls with straps, bib pocket, and youthful casual feel" },
  { id: "clothing-joggers", styleGroup: "pants", zhName: "运动裤", enName: "Joggers", zhPrompt: "人物穿着运动裤，收口裤脚和舒适运动感", enPrompt: "the character wears joggers with cuffed ankles and comfortable athletic styling" },
  { id: "clothing-leather-pants", styleGroup: "pants", zhName: "皮裤", enName: "Leather Pants", zhPrompt: "人物穿着皮裤，贴合剪裁和皮革反光", enPrompt: "the character wears leather pants with fitted cut and reflective leather texture" },

  { id: "clothing-pleated-skirt", styleGroup: "skirts-dresses", zhName: "百褶裙", enName: "Pleated Skirt", zhPrompt: "人物穿着百褶裙，规则褶裥和轻盈摆动", enPrompt: "the character wears a pleated skirt with regular folds and light movement" },
  { id: "clothing-a-line-skirt", styleGroup: "skirts-dresses", zhName: "A字裙", enName: "A-Line Skirt", zhPrompt: "人物穿着 A 字裙，上窄下宽，轮廓清晰", enPrompt: "the character wears an A-line skirt with a narrow waist and wider hem" },
  { id: "clothing-pencil-skirt", styleGroup: "skirts-dresses", zhName: "铅笔裙", enName: "Pencil Skirt", zhPrompt: "人物穿着铅笔裙，修长贴合，正式优雅", enPrompt: "the character wears a pencil skirt with slim fitted formal elegance" },
  { id: "clothing-tulle-skirt", styleGroup: "skirts-dresses", zhName: "纱裙", enName: "Tulle Skirt", zhPrompt: "人物穿着纱裙，多层透明薄纱和蓬松体积", enPrompt: "the character wears a tulle skirt with layered sheer fabric and airy volume" },
  { id: "clothing-mermaid-skirt", styleGroup: "skirts-dresses", zhName: "鱼尾裙", enName: "Mermaid Skirt", zhPrompt: "人物穿着鱼尾裙，膝部收束，下摆展开", enPrompt: "the character wears a mermaid skirt fitted at the knees with a flared hem" },
  { id: "clothing-slip-dress", styleGroup: "skirts-dresses", zhName: "吊带裙", enName: "Slip Dress", zhPrompt: "人物穿着吊带裙，细肩带、柔滑面料和垂坠感", enPrompt: "the character wears a slip dress with thin straps, silky fabric, and soft drape" },
  { id: "clothing-shirt-dress", styleGroup: "skirts-dresses", zhName: "衬衫裙", enName: "Shirt Dress", zhPrompt: "人物穿着衬衫裙，衬衫结构和连衣裙轮廓结合", enPrompt: "the character wears a shirt dress combining shirt details with a dress silhouette" },
  { id: "clothing-evening-gown", styleGroup: "skirts-dresses", zhName: "礼服长裙", enName: "Evening Gown", zhPrompt: "人物穿着礼服长裙，正式、优雅、垂坠华丽", enPrompt: "the character wears an elegant evening gown with formal long flowing drape" },
  { id: "clothing-bodycon-dress", styleGroup: "skirts-dresses", zhName: "修身连衣裙", enName: "Bodycon Dress", zhPrompt: "人物穿着修身连衣裙，贴合身形，线条简洁", enPrompt: "the character wears a bodycon dress with fitted shape and clean lines" },
  { id: "clothing-sundress", styleGroup: "skirts-dresses", zhName: "夏日连衣裙", enName: "Sundress", zhPrompt: "人物穿着夏日连衣裙，轻盈明快，适合户外暖光", enPrompt: "the character wears a sundress, light bright casual dress suited for warm outdoor light" },

  { id: "clothing-suit-set", styleGroup: "formal-uniform", zhName: "西装套装", enName: "Suit Set", zhPrompt: "人物穿着完整西装套装，正式商务感，剪裁统一", enPrompt: "the character wears a full suit set with formal business styling and consistent tailoring" },
  { id: "clothing-shirt-tie-set", styleGroup: "formal-uniform", zhName: "衬衫领带套装", enName: "Shirt and Tie", zhPrompt: "人物穿着衬衫与领带组合，正式干练", enPrompt: "the character wears a shirt and tie combination, formal and neat" },
  { id: "clothing-academy-uniform", styleGroup: "formal-uniform", zhName: "学院制服", enName: "Academy Uniform", zhPrompt: "人物穿着学院制服，衬衫、外套和规整下装", enPrompt: "the character wears an academy uniform with shirt, jacket, and neat lower garment" },
  { id: "clothing-sailor-uniform", styleGroup: "formal-uniform", zhName: "水手服", enName: "Sailor Uniform", zhPrompt: "人物穿着水手领制服，领巾和百褶下装结构清楚", enPrompt: "the character wears a sailor-collar uniform with neckerchief and pleated lower garment" },
  { id: "clothing-medical-uniform", styleGroup: "formal-uniform", zhName: "医护制服", enName: "Medical Uniform", zhPrompt: "人物穿着干净医护制服，简洁专业，口袋和衣领明确", enPrompt: "the character wears clean medical-style workwear, simple professional shape with pockets and collar" },
  { id: "clothing-chef-uniform", styleGroup: "formal-uniform", zhName: "厨师服", enName: "Chef Uniform", zhPrompt: "人物穿着厨师制服，双排扣上衣和围裙结构", enPrompt: "the character wears a chef uniform with double-breasted jacket and apron structure" },
  { id: "clothing-workwear-uniform", styleGroup: "formal-uniform", zhName: "工装制服", enName: "Workwear Uniform", zhPrompt: "人物穿着工装制服，耐用面料、多口袋和实用结构", enPrompt: "the character wears practical workwear uniform with durable fabric and utility pockets" },
  { id: "clothing-military-inspired", styleGroup: "formal-uniform", zhName: "军装风", enName: "Military-Inspired", zhPrompt: "人物穿着军装风服饰，肩章、立领和规整硬挺线条", enPrompt: "the character wears military-inspired clothing with epaulets, stand collar, and structured lines" },
  { id: "clothing-stage-costume", styleGroup: "formal-uniform", zhName: "舞台演出服", enName: "Stage Costume", zhPrompt: "人物穿着舞台演出服，夸张轮廓、亮片或强装饰细节", enPrompt: "the character wears a stage costume with dramatic silhouette, sequins, or bold decoration" },

  { id: "clothing-hanfu", styleGroup: "traditional", zhName: "汉服", enName: "Hanfu", zhPrompt: "人物穿着汉服，交领、宽袖、系带和飘逸层次", enPrompt: "the character wears hanfu with crossed collar, wide sleeves, ties, and flowing layers" },
  { id: "clothing-tang-suit", styleGroup: "traditional", zhName: "唐装", enName: "Tang Suit", zhPrompt: "人物穿着唐装，盘扣、立领和中式纹样", enPrompt: "the character wears a Tang suit with frog buttons, stand collar, and Chinese pattern details" },
  { id: "clothing-qipao", styleGroup: "traditional", zhName: "旗袍", enName: "Qipao", zhPrompt: "人物穿着旗袍，立领、斜襟、开衩和贴合剪裁", enPrompt: "the character wears a qipao with stand collar, diagonal closure, side slit, and fitted tailoring" },
  { id: "clothing-kimono", styleGroup: "traditional", zhName: "和服", enName: "Kimono", zhPrompt: "人物穿着和服，宽袖、腰带和层叠布料", enPrompt: "the character wears a kimono with wide sleeves, sash belt, and layered fabric" },
  { id: "clothing-hanbok", styleGroup: "traditional", zhName: "韩服", enName: "Hanbok", zhPrompt: "人物穿着韩服，短上衣、高腰蓬裙和柔和色彩", enPrompt: "the character wears hanbok with short jacket, high-waisted voluminous skirt, and soft colors" },
  { id: "clothing-sari", styleGroup: "traditional", zhName: "印度纱丽", enName: "Sari", zhPrompt: "人物穿着印度纱丽，长布缠绕、褶皱和装饰边缘", enPrompt: "the character wears a sari with wrapped draped fabric, pleats, and decorative border" },
  { id: "clothing-embroidered-ethnic", styleGroup: "traditional", zhName: "民族刺绣服", enName: "Embroidered Ethnic Dress", zhPrompt: "人物穿着民族刺绣服，手工纹样、织带和丰富色彩", enPrompt: "the character wears embroidered ethnic clothing with handcrafted patterns, woven trims, and rich colors" },
  { id: "clothing-miao-silver-dress", styleGroup: "traditional", zhName: "苗银盛装", enName: "Miao Silver Dress", zhPrompt: "人物穿着苗族银饰盛装，银片、刺绣和层叠裙摆", enPrompt: "the character wears Miao-inspired silver ornament ceremonial dress with embroidery and layered skirt" },
  { id: "clothing-tibetan-robe", styleGroup: "traditional", zhName: "藏式长袍", enName: "Tibetan Robe", zhPrompt: "人物穿着藏式长袍，宽腰带、厚重布料和高原色彩", enPrompt: "the character wears a Tibetan-style robe with wide belt, heavy fabric, and plateau colors" },

  { id: "clothing-cyber-jacket", styleGroup: "fantasy-sci-fi", zhName: "赛博夹克", enName: "Cyber Jacket", zhPrompt: "人物穿着赛博夹克，发光线条、机能口袋和未来街头感", enPrompt: "the character wears a cyber jacket with glowing seams, utility pockets, and futuristic streetwear mood" },
  { id: "clothing-techwear", styleGroup: "fantasy-sci-fi", zhName: "机能战术服", enName: "Techwear", zhPrompt: "人物穿着机能战术服，绑带、模块口袋和防水硬挺面料", enPrompt: "the character wears techwear with straps, modular pockets, and structured waterproof fabric" },
  { id: "clothing-spacesuit", styleGroup: "fantasy-sci-fi", zhName: "未来宇航服", enName: "Futuristic Spacesuit", zhPrompt: "人物穿着未来宇航服，密封结构、生命维持模块和清晰面罩", enPrompt: "the character wears a futuristic spacesuit with sealed structure, life-support modules, and clear visor" },
  { id: "clothing-mecha-armor", styleGroup: "fantasy-sci-fi", zhName: "机甲装甲", enName: "Mecha Armor", zhPrompt: "人物穿着机甲装甲，硬表面护甲、关节结构和机械细节", enPrompt: "the character wears mecha armor with hard-surface plates, joint structures, and mechanical detail" },
  { id: "clothing-magic-robe", styleGroup: "fantasy-sci-fi", zhName: "魔法长袍", enName: "Magic Robe", zhPrompt: "人物穿着魔法长袍，符文刺绣、宽大袖口和神秘层次", enPrompt: "the character wears a magic robe with rune embroidery, wide cuffs, and mysterious layered fabric" },
  { id: "clothing-knight-armor", styleGroup: "fantasy-sci-fi", zhName: "骑士铠甲", enName: "Knight Armor", zhPrompt: "人物穿着骑士铠甲，金属胸甲、护肩和古典战斗轮廓", enPrompt: "the character wears knight armor with metal breastplate, pauldrons, and classical battle silhouette" },
  { id: "clothing-steampunk-outfit", styleGroup: "fantasy-sci-fi", zhName: "蒸汽朋克装", enName: "Steampunk Outfit", zhPrompt: "人物穿着蒸汽朋克服饰，皮革、铜色零件、腰封和机械配件", enPrompt: "the character wears a steampunk outfit with leather, brass parts, corset belt, and mechanical accessories" },

  { id: "clothing-scarf", styleGroup: "accessories-shoes", zhName: "围巾", enName: "Scarf", zhPrompt: "人物佩戴围巾，柔软织物围绕颈部并自然垂落", enPrompt: "the character wears a scarf with soft fabric wrapping the neck and natural drape" },
  { id: "clothing-neckerchief", styleGroup: "accessories-shoes", zhName: "领巾", enName: "Neckerchief", zhPrompt: "人物佩戴领巾，颈部形成清晰装饰焦点", enPrompt: "the character wears a neckerchief creating a clear decorative focal point at the neck" },
  { id: "clothing-bow", styleGroup: "accessories-shoes", zhName: "蝴蝶结", enName: "Bow", zhPrompt: "人物佩戴蝴蝶结，柔和可爱或正式装饰感", enPrompt: "the character wears a bow accessory, cute or formal decorative accent" },
  { id: "clothing-belt", styleGroup: "accessories-shoes", zhName: "腰带", enName: "Belt", zhPrompt: "人物佩戴腰带，强调腰线、扣件和服装层次", enPrompt: "the character wears a belt emphasizing the waistline, buckle, and layered outfit structure" },
  { id: "clothing-gloves", styleGroup: "accessories-shoes", zhName: "手套", enName: "Gloves", zhPrompt: "人物佩戴手套，手部材质和造型被明确强调", enPrompt: "the character wears gloves, clearly emphasizing hand material and styling" },
  { id: "clothing-hat", styleGroup: "accessories-shoes", zhName: "帽子", enName: "Hat", zhPrompt: "人物佩戴帽子，顶部轮廓形成明确识别点", enPrompt: "the character wears a hat, creating a clear recognizable top silhouette" },
  { id: "clothing-beret", styleGroup: "accessories-shoes", zhName: "贝雷帽", enName: "Beret", zhPrompt: "人物佩戴贝雷帽，文艺复古和柔软圆形轮廓", enPrompt: "the character wears a beret with artistic vintage feeling and soft rounded silhouette" },
  { id: "clothing-boots", styleGroup: "accessories-shoes", zhName: "靴子", enName: "Boots", zhPrompt: "人物穿着靴子，鞋筒、鞋底和皮革或织物细节清晰", enPrompt: "the character wears boots with clear shaft, sole, and leather or fabric details" },
  { id: "clothing-sneakers", styleGroup: "accessories-shoes", zhName: "运动鞋", enName: "Sneakers", zhPrompt: "人物穿着运动鞋，鞋带、厚底和街头运动感", enPrompt: "the character wears sneakers with laces, thick soles, and sporty streetwear feeling" },

  { id: "clothing-layered-outfit", styleGroup: "fit-material", zhName: "叠穿", enName: "Layered Outfit", zhPrompt: "人物服装为叠穿造型，多层领口、下摆和材质层次清楚", enPrompt: "the outfit uses layered styling with multiple necklines, hems, and visible material layers" },
  { id: "clothing-fitted-silhouette", styleGroup: "fit-material", zhName: "修身版型", enName: "Fitted Silhouette", zhPrompt: "人物服装为修身版型，贴合身体线条，轮廓干净", enPrompt: "the outfit has a fitted silhouette, following the body lines with clean contours" },
  { id: "clothing-loose-silhouette", styleGroup: "fit-material", zhName: "宽松版型", enName: "Loose Silhouette", zhPrompt: "人物服装为宽松版型，留有空气感和自然垂坠", enPrompt: "the outfit has a loose silhouette with airy volume and natural drape" },
  { id: "clothing-sheer-chiffon", styleGroup: "fit-material", zhName: "透明薄纱", enName: "Sheer Chiffon", zhPrompt: "服装包含透明薄纱材质，轻盈、半透、层次柔和", enPrompt: "the clothing includes sheer chiffon material, light translucent layers and soft texture" },
  { id: "clothing-lace-detail", styleGroup: "fit-material", zhName: "蕾丝细节", enName: "Lace Detail", zhPrompt: "服装包含蕾丝细节，精细花纹和镂空质感", enPrompt: "the clothing includes lace detail with fine floral pattern and openwork texture" },
  { id: "clothing-satin-fabric", styleGroup: "fit-material", zhName: "缎面质感", enName: "Satin Fabric", zhPrompt: "服装包含缎面材质，柔滑高光和流动反射", enPrompt: "the clothing uses satin fabric with smooth highlights and flowing reflections" },
  { id: "clothing-fur-trim", styleGroup: "fit-material", zhName: "毛绒边饰", enName: "Fur Trim", zhPrompt: "服装包含毛绒边饰，柔软蓬松，边缘质感明显", enPrompt: "the clothing includes fur trim with soft fluffy edges and tactile detail" },
  { id: "clothing-rivet-leather", styleGroup: "fit-material", zhName: "铆钉皮革", enName: "Rivet Leather", zhPrompt: "服装包含铆钉皮革元素，硬朗、反光、街头摇滚感", enPrompt: "the clothing includes riveted leather elements, tough reflective street-rock styling" }
];

export const clothingParameters: PromptParameter[] = clothingItems.map((item) => ({
  id: item.id,
  category: "clothing",
  styleGroup: item.styleGroup,
  zhName: item.zhName,
  enName: item.enName,
  defaultWeight: 1,
  image: img(item.id),
  zhPrompt: item.zhPrompt,
  enPrompt: item.enPrompt,
  negative: [...baseNegative, ...(item.negative ?? [])]
}));
