import type { PromptParameter } from "../types";

const img = (id: string) => `${import.meta.env.BASE_URL}assets/parameters/${id}.png?v=20260827-palette-expansion`;
const negative = ["random unrelated colors", "color banding", "oversaturated noise", "readable text"];

function palette(
  id: string,
  styleGroup: string,
  zhName: string,
  enName: string,
  zhPrompt: string,
  enPrompt: string
): PromptParameter {
  return { id, category: "palette", styleGroup, zhName, enName, defaultWeight: 1, image: img(id), zhPrompt, enPrompt, negative };
}

export const colorPaletteParameters: PromptParameter[] = [
  palette("palette-celadon-garden", "chinese", "青瓷园林配色", "Celadon Garden", "青瓷绿、淡青、暖象牙白、墨黑与低饱和金色组成中式雅致配色，主色克制通透", "Chinese celadon green, pale blue-green, warm ivory, ink black, and muted gold; restrained luminous East Asian elegance"),
  palette("palette-dunhuang-mineral", "chinese", "敦煌矿物色", "Dunhuang Mineral", "石青、石绿、赭黄、朱砂红与沙色组成敦煌矿物颜料配色，色彩厚重但层次清晰", "lapis blue, malachite green, ochre, cinnabar, and sand in a Dunhuang mineral-pigment palette, rich yet clearly layered"),
  palette("palette-vermilion-gold", "chinese", "朱红鎏金配色", "Vermilion and Gold", "朱红、深青、旧金、墨黑与米白组成庄重华丽的东方宫殿配色，金色仅作精致点缀", "vermilion, deep teal, antique gold, ink black, and rice white; stately East Asian palette with gold used only as refined accents"),
  palette("palette-ink-tea", "chinese", "水墨茶席配色", "Ink Tea", "炭黑、茶褐、暖灰、旧纸色与苔藓绿组成安静的水墨茶席配色，低饱和、留白感强", "charcoal, tea brown, warm gray, parchment, and moss green; quiet ink-and-tea palette with low saturation and generous negative space"),
  palette("palette-blue-white-porcelain", "chinese", "青花瓷蓝白", "Blue and White Porcelain", "钴蓝、暖白、青瓷绿、浅灰与墨海军蓝组成清雅的青花瓷配色，冷静清晰且适合东方设计", "cobalt blue, warm white, celadon, pale gray, and ink navy in a clear elegant blue-and-white porcelain palette for East Asian design"),
  palette("palette-tibetan-mineral", "chinese", "藏地矿物色", "Tibetan Mineral", "绛红、藏黄、群青、松石绿与雪白组成高原矿物配色，饱和鲜明但保留自然风化质感", "deep red, saffron yellow, ultramarine, pine green, and snow white in a vivid highland mineral palette with naturally weathered texture"),
  palette("palette-morandi-rose", "morandi", "莫兰迪粉绿", "Morandi Rose and Sage", "灰粉、鼠尾草绿、暖灰、奶油白与雾蓝组成低对比莫兰迪配色，柔和克制", "dusty rose, sage green, warm gray, cream, and misty blue in a soft low-contrast Morandi palette"),
  palette("palette-morandi-terracotta", "morandi", "莫兰迪陶土", "Morandi Terracotta", "灰陶土、橄榄绿、沙色、烟灰与浅粉组成温暖低饱和的莫兰迪室内配色", "muted terracotta, olive, sand, smoke gray, and pale pink in a warm low-saturation Morandi interior palette"),
  palette("palette-morandi-blue", "morandi", "莫兰迪雾蓝", "Morandi Mist Blue", "雾蓝、岩板灰、燕麦色、低饱和赭黄与白色组成宁静通透的现代配色", "fog blue, slate gray, oatmeal, muted ochre, and white in a calm airy modern palette"),
  palette("palette-morandi-lavender", "morandi", "莫兰迪雾紫", "Morandi Mist Lavender", "灰紫、暖灰、褪灰绿、奶油白与烟梅色组成柔和低对比的静物感配色", "dusty lavender, warm gray, faded sage, cream, and smoky plum in a soft low-contrast still-life palette"),
  palette("palette-morandi-olive", "morandi", "莫兰迪橄榄灰", "Morandi Olive Gray", "灰橄榄、腻子灰、燕麦、烟灰与褪珊瑚组成安静成熟的低饱和空间配色", "muted olive, putty gray, oatmeal, smoke gray, and faded coral in a calm mature low-saturation interior palette"),
  palette("palette-teal-orange-cinema", "cinema", "青橙电影配色", "Teal Orange Cinema", "青色阴影、橙色主光、深海军蓝、肤色米与炭黑形成经典电影冷暖对比，避免过度橙化", "teal shadows, orange key light, deep navy, skin beige, and charcoal in classic cinematic warm-cool contrast without excessive orange cast"),
  palette("palette-neon-night", "cinema", "霓虹夜景配色", "Neon Night", "青蓝、洋红、紫色、黑色与铬灰组成高对比霓虹夜景配色，光源清晰、暗部干净", "cyan, magenta, violet, black, and chrome gray in a high-contrast neon-night palette with clean shadows and distinct light sources"),
  palette("palette-silver-blue-noir", "cinema", "银蓝黑色电影", "Silver Blue Noir", "银灰、钢蓝、黑色、冷白与深海军蓝组成冷峻黑色电影配色，强调月光与金属反射", "silver, steel blue, black, cool white, and deep navy in a restrained noir palette emphasizing moonlight and metal reflections"),
  palette("palette-harbor-night-cinema", "cinema", "港湾雨夜电影", "Harbor Night Cinema", "石油蓝、琥珀灯光、旧青绿、雾灰与黑色组成潮湿港湾的夜景电影配色，冷暖光源明确", "petrol blue, amber lamp light, weathered teal, fog gray, and black in a wet harbor-night cinematic palette with distinct warm-cool light sources"),
  palette("palette-golden-hour-film", "cinema", "金棕胶片时刻", "Golden Hour Film", "蜂蜜金、烟草棕、褪桃色、橄榄阴影与暖黑组成怀旧日落胶片配色，温暖但不发黄", "honey gold, tobacco brown, muted peach, olive shadow, and warm black in a nostalgic golden-hour film palette without a yellow cast"),
  palette("palette-forest-moss", "nature", "森林苔藓配色", "Forest Moss", "苔藓绿、蕨叶绿、树皮棕、雾灰与暖奶油色组成湿润森林自然配色，层次由深到浅", "moss green, fern green, bark brown, fog gray, and warm cream in a humid forest palette with layered depth"),
  palette("palette-desert-sunset", "nature", "沙漠落日配色", "Desert Sunset", "陶土橙、焦橙、梅紫、沙色与淡金黄组成干燥落日自然配色，暖色丰富但不过饱和", "terracotta, burnt orange, plum, sand, and pale golden yellow in a dry desert-sunset palette, rich warm color without oversaturation"),
  palette("palette-rainforest-orchid", "nature", "雨林兰花配色", "Rainforest Orchid", "深叶绿、兰花紫、湿炭黑、黄绿与雾白组成湿润热带自然配色，明暗层次饱满", "deep leaf green, orchid purple, wet charcoal, lime, and mist white in a humid tropical palette with rich dark-to-light layers"),
  palette("palette-coastal-mist", "nature", "海岸晨雾配色", "Coastal Morning Mist", "海沫绿、浅雾蓝、漂流木米色、珍珠灰与柔海军蓝组成低饱和海岸晨雾配色，清凉安静", "seafoam, pale mist blue, driftwood beige, pearl gray, and soft navy in a cool quiet low-saturation coastal-morning palette"),
  palette("palette-japanese-indigo", "global", "日式靛蓝配色", "Japanese Indigo", "靛蓝、暖白、炭黑、褪蓝与雪松棕组成安静克制的日式自然配色，强调深浅层次", "indigo, warm white, charcoal, faded blue, and cedar brown in a quiet restrained Japanese natural palette with clear tonal layers"),
  palette("palette-nordic-neutral", "global", "北欧中性配色", "Nordic Neutral", "燕麦色、暖灰、浅木色、石灰色与柔黑组成明亮舒适的北欧中性配色", "oatmeal, warm gray, pale wood, stone gray, and soft black in a bright comfortable Nordic neutral palette"),
  palette("palette-french-vintage", "global", "法式复古配色", "French Vintage", "褪色酒红、灰橄榄、旧纸色、低饱和海军蓝与黄铜色组成有年代感的法式复古配色", "faded burgundy, dusty olive, parchment, muted navy, and brass in a French vintage palette with a sense of age"),
  palette("palette-mediterranean-coast", "global", "地中海海岸配色", "Mediterranean Coast", "蔚蓝、石灰白、陶土橙、橄榄绿与日光黄组成明亮通透的地中海建筑配色", "azure, limestone white, terracotta, olive green, and sun yellow in a bright airy Mediterranean coastal architecture palette"),
  palette("palette-mexican-folk", "global", "墨西哥民俗配色", "Mexican Folk", "万寿菊黄、仙人掌绿、热粉、钴蓝与奶油白组成热烈手作感的民俗庆典配色", "marigold yellow, cactus green, hot pink, cobalt blue, and cream in an energetic handcrafted folk-celebration palette"),
  palette("palette-pop-graphic", "commercial", "波普图形配色", "Pop Graphic", "樱桃红、钴蓝、柠檬黄、黑色与白色组成强对比平面配色，适合海报、包装和潮流图形", "cherry red, cobalt blue, lemon yellow, black, and white in a high-contrast graphic palette for posters, packaging, and bold design"),
  palette("palette-black-gold-luxury", "commercial", "黑金轻奢配色", "Black Gold Luxury", "哑光黑、古金、深翡翠、炭灰与暖象牙白组成低调贵气的轻奢商业配色，金色仅作点缀", "matte black, antique gold, deep emerald, charcoal, and warm ivory in a restrained luxury palette with gold used only as accents"),
  palette("palette-citrus-summer", "commercial", "柑橘夏日配色", "Citrus Summer", "橘子橙、柠檬黄、珊瑚色、叶绿与天空蓝组成明亮清新的夏日商业配色", "tangerine, lemon yellow, coral, leaf green, and sky blue in a bright fresh summer commercial palette"),
  palette("palette-pastel-macaron", "commercial", "马卡龙甜品配色", "Pastel Macaron", "浅粉、奶油黄、薄荷绿、淡紫与奶油白组成甜美但干净的马卡龙商业配色，适合礼盒与生活方式视觉", "blush pink, butter yellow, mint, pale lilac, and cream in a sweet but clean macaron palette for gift and lifestyle visuals"),
  palette("palette-y2k-chrome", "commercial", "Y2K 铬彩配色", "Y2K Chrome", "铬银、电光蓝、半透明淡紫、热粉与亮黑组成高反光的千禧未来配色，适合数码潮流设计", "chrome silver, electric blue, translucent lilac, hot pink, and glossy black in a reflective millennium-future palette for digital trend design"),
  palette("palette-song-porcelain", "chinese", "宋瓷月白配色", "Song Porcelain Moon White", "月白、淡青瓷绿、藕粉、暖灰与墨色组成温润含蓄的宋瓷配色，适合东方静物、建筑和雅致设计", "moon white, pale celadon, lotus-root pink, warm gray, and ink in a subtle Song porcelain palette for East Asian still life, architecture, and refined design"),
  palette("palette-forbidden-city-winter", "chinese", "故宫冬雪配色", "Forbidden City Winter", "宫墙红、雪白、琉璃金、石灰与松柏绿组成庄重清冷的宫廷冬日配色，红色作为稳定视觉核心", "palace red, snow white, glazed-tile gold, stone gray, and pine green in a stately cool imperial-winter palette with red as the visual anchor"),
  palette("palette-chinese-opera", "chinese", "戏曲华彩配色", "Chinese Opera Brilliance", "胭脂红、孔雀蓝、明黄、墨黑与玉白组成高辨识度戏曲配色，色彩鲜明且主次清楚", "rouge red, peacock blue, bright yellow, ink black, and jade white in a highly recognizable Chinese-opera palette with clear color hierarchy"),
  palette("palette-bamboo-scholar", "chinese", "竹林文人配色", "Bamboo Scholar", "竹青、墨灰、宣纸白、胡桃褐与浅赭组成清静文人空间配色，强调自然材质和留白", "bamboo green, ink gray, rice-paper ivory, walnut brown, and pale ochre in a quiet scholarly palette emphasizing natural materials and negative space"),
  palette("palette-morandi-apricot", "morandi", "莫兰迪杏桃配色", "Morandi Apricot", "灰杏、藕紫米、鼠尾草灰、奶油白与烟蓝组成柔暖而不甜腻的低饱和配色", "dusty apricot, mauve beige, sage gray, cream, and smoke blue in a warm restrained low-saturation palette"),
  palette("palette-morandi-charcoal-rose", "morandi", "莫兰迪炭粉配色", "Morandi Charcoal Rose", "炭灰、灰玫瑰、灰褐、骨白与褪莓红组成成熟低对比配色，适合时装和品牌视觉", "charcoal, dusty rose, taupe, bone white, and faded berry in a mature low-contrast palette for fashion and brand visuals"),
  palette("palette-morandi-sea-salt", "morandi", "莫兰迪海盐配色", "Morandi Sea Salt", "灰水绿、贝壳灰、沙米色、雾白与褪珊瑚组成清凉轻盈的海岸低饱和配色", "muted aqua, shell gray, sandy beige, fog white, and faded coral in a cool airy coastal low-saturation palette"),
  palette("palette-morandi-mustard", "morandi", "莫兰迪芥末配色", "Morandi Mustard", "灰芥末黄、陶土、灰绿、燕麦与炭灰组成复古现代兼具的空间配色，暖色克制", "muted mustard, clay, gray-green, oatmeal, and charcoal in a restrained warm palette balancing vintage and modern interiors"),
  palette("palette-day-for-night", "cinema", "日拍夜蓝调配色", "Day for Night Blue", "深钴蓝、月光灰、低饱和青、窗灯琥珀与黑色组成日拍夜电影配色，保持夜色层次而不死黑", "deep cobalt, moon gray, desaturated cyan, warm window amber, and black in a day-for-night cinematic palette with readable nocturnal depth"),
  palette("palette-sci-fi-amber-cyan", "cinema", "琥珀青科幻配色", "Amber Cyan Sci-Fi", "电光青、琥珀橙、石墨灰、冷白与少量警示红组成清晰理性的科幻设备配色", "electric cyan, amber, graphite, cool white, and sparse warning red in a crisp technical science-fiction palette"),
  palette("palette-pastoral-film", "cinema", "田园胶片配色", "Pastoral Film", "褪草绿、奶油色、桃肤色、灰天蓝与暖棕组成柔和乡野胶片配色，保留轻微褪色感", "faded meadow green, cream, muted peach, gray-blue sky, and warm brown in a gentle pastoral film palette with subtle fading"),
  palette("palette-crime-thriller-green", "cinema", "犯罪惊悚绿调", "Crime Thriller Green", "病态灰绿、钠灯琥珀、水泥灰、暗酒红与黑色组成压迫感犯罪惊悚配色，局部暖光用于线索强调", "sickly gray-green, sodium amber, concrete gray, dark burgundy, and black in a tense crime-thriller palette with warm clues as accents"),
  palette("palette-alpine-lake", "nature", "高山湖泊配色", "Alpine Lake", "冰川松石、深湖蓝、花岗岩灰、雪白与高山林绿组成清澈高海拔自然配色", "glacier turquoise, deep lake blue, granite gray, snow white, and alpine green in a clear high-altitude natural palette"),
  palette("palette-autumn-maple", "nature", "秋枫山林配色", "Autumn Maple Forest", "枫叶红、焦橙、赭黄、树皮棕与雾灰组成层次丰富的秋季山林配色，避免单一橙红", "maple red, burnt orange, ochre, bark brown, and mist gray in a layered autumn-forest palette avoiding a single orange cast"),
  palette("palette-volcanic-earth", "nature", "火山大地配色", "Volcanic Earth", "熔岩红、玄武岩黑、火山灰、硫磺黄与铁锈棕组成强烈地质配色，强调高温与冷岩反差", "lava red, basalt black, ash gray, sulfur yellow, and rust brown in a dramatic geological palette contrasting heat and cold rock"),
  palette("palette-spring-rain", "nature", "春雨新绿配色", "Spring Rain Green", "新叶绿、雨水蓝、云灰、花粉与湿土棕组成清新湿润的春雨配色，明度柔和", "fresh leaf green, rain blue, cloud gray, blossom pink, and wet-earth brown in a fresh humid spring-rain palette with soft values"),
  palette("palette-indian-spice", "global", "印度香料配色", "Indian Spice", "姜黄、辣椒红、靛蓝、豆蔻绿与砂岩色组成浓郁手作感配色，适合民俗、餐饮和织物视觉", "turmeric yellow, chili red, indigo, cardamom green, and sandstone in a rich handcrafted palette for folk, food, and textile visuals"),
  palette("palette-moroccan-tile", "global", "摩洛哥花砖配色", "Moroccan Tile", "钴蓝、松石绿、陶土、象牙白与黄铜组成几何装饰感强的摩洛哥花砖配色", "cobalt, turquoise, terracotta, ivory, and brass in a geometric ornamental Moroccan-tile palette"),
  palette("palette-african-earth", "global", "非洲大地配色", "African Earth", "赤陶棕、赭黄、乌木黑、草原绿与日光米组成温暖有重量的非洲大地配色，适合自然和织物设计", "burnt sienna, ochre, ebony, savanna green, and sun cream in a warm grounded African-earth palette for nature and textile design"),
  palette("palette-baltic-winter", "global", "波罗的海冬日配色", "Baltic Winter", "冰蓝、松林灰绿、羊毛灰、浆果红与浅木色组成清冷舒适的北方冬日配色", "icy blue, pine gray-green, wool gray, berry red, and pale wood in a cool yet comfortable northern-winter palette"),
  palette("palette-tech-cyan-lime", "commercial", "科技青柠配色", "Tech Cyan Lime", "电光青、酸性青柠、石墨、洁白与信号紫组成高辨识度科技商业配色，适合数码产品和运动品牌", "electric cyan, acid lime, graphite, clean white, and signal purple in a high-recognition technology palette for digital products and sports brands"),
  palette("palette-beauty-nude-rose", "commercial", "裸粉美妆配色", "Nude Rose Beauty", "裸米、灰玫瑰、可可棕、香槟金与柔白组成高级肤感美妆配色，避免过度粉甜", "nude beige, dusty rose, cocoa, champagne, and soft white in a premium skin-flattering beauty palette without excessive sweetness"),
  palette("palette-food-appetite", "commercial", "食欲暖调配色", "Appetite Warm", "番茄红、藏红花黄、香草绿、奶油色与烘烤棕组成自然诱人的餐饮配色，强调食材真实感", "tomato red, saffron, herb green, cream, and roasted brown in a naturally appetizing food palette emphasizing ingredient realism"),
  palette("palette-eco-kraft", "commercial", "环保牛皮纸配色", "Eco Kraft", "牛皮纸棕、再生纸米、叶绿、炭灰与低饱和橙组成可信赖的环保包装配色，保留材料本色", "kraft brown, recycled cream, leaf green, charcoal, and muted orange in a trustworthy sustainable-packaging palette preserving natural material color")
];
