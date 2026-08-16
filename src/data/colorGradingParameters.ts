import type { PromptParameter } from "../types";

const img = (id: string) => `${import.meta.env.BASE_URL}assets/parameters/${id}.jpg`;
const gradingNegative = ["color banding", "muddy colors", "overexposed highlights", "crushed blacks"];

function grade(id: string, styleGroup: string, zhName: string, enName: string, zhPrompt: string, enPrompt: string): PromptParameter {
  return {
    id,
    category: "color-grading",
    styleGroup,
    zhName,
    enName,
    defaultWeight: 1,
    image: img(id),
    zhPrompt,
    enPrompt,
    negative: gradingNegative
  };
}

export const colorGradingParameters: PromptParameter[] = [
  grade("grading-japanese-airy", "clean-bright", "日系糖水片", "Japanese Airy Bright", "后期调色为日系糖水片，明亮通透，肤色柔和，阴影轻", "airy bright Japanese-style portrait color grade, soft skin tones, gentle shadows, clean highlights"),
  grade("grading-fresh-natural", "clean-bright", "清透自然", "Fresh Natural", "后期调色清透自然，白平衡准确，色彩干净不过度", "fresh natural color grade, accurate white balance, clean restrained colors"),
  grade("grading-high-key-white", "clean-bright", "高调白净", "High-Key White", "高调白净调色，大面积亮部，低阴影压迫感", "high-key white color grade, broad bright areas, minimal heavy shadows"),
  grade("grading-soft-pastel", "clean-bright", "柔和粉彩", "Soft Pastel", "柔和粉彩调色，低对比，浅粉、浅蓝、奶油色自然融合", "soft pastel color grade, low contrast, pale pink, light blue, and cream tones blended naturally"),
  grade("grading-korean-clean", "clean-bright", "韩系清透", "Korean Clean", "韩系清透人像调色，肤色细腻，背景明亮，整体干净", "clean Korean-style portrait color grade, delicate skin tone, bright background, polished clarity"),
  grade("grading-social-light", "clean-bright", "社媒明亮", "Social Bright", "社媒明亮滤镜感，画面鲜亮、干净、易读", "bright social-media color grade, vivid clean image, highly readable subject"),
  grade("grading-vintage-warm", "film-vintage", "复古暖调", "Vintage Warm", "复古暖调调色，偏黄偏红，低锐度，旧照片氛围", "warm vintage color grade, yellow-red bias, softened sharpness, old-photo mood"),
  grade("grading-negative-film", "film-vintage", "负片胶片", "Negative Film", "负片胶片调色，肤色厚实，暗部带绿色或青色倾向", "negative film-inspired color grade, rich skin tones, subtle green-cyan shadows"),
  grade("grading-positive-film", "film-vintage", "反转片色彩", "Slide Film", "反转片色彩，高饱和、高对比，风景色彩浓郁", "slide-film-inspired color grade, high saturation, high contrast, rich landscape colors"),
  grade("grading-warm-film-yellow", "film-vintage", "暖黄胶片", "Warm Yellow Film", "暖黄胶片感，颗粒轻微，阳光和肤色更温暖", "warm yellow film color grade, subtle grain, warmer sunlight and skin tones"),
  grade("grading-cyan-green-film", "film-vintage", "青绿胶片", "Cyan Green Film", "青绿胶片调色，阴影偏青绿，清冷又复古", "cyan-green film color grade, teal-green shadows, cool retro atmosphere"),
  grade("grading-faded-print", "film-vintage", "褪色老照片", "Faded Print", "褪色老照片调色，对比降低，色彩轻微漂白", "faded print color grade, reduced contrast, gently washed colors"),
  grade("grading-noir-bw", "film-vintage", "黑白高反差", "High-Contrast B&W", "黑白高反差后期，深黑亮白，轮廓强烈", "high-contrast black-and-white grade, deep blacks, bright whites, strong silhouettes"),
  grade("grading-leica-like", "camera-look", "莱卡感", "Rangefinder Premium", "莱卡感纪实调色，微反差清晰，红色温润，黑位扎实", "premium rangefinder documentary color grade, crisp microcontrast, warm reds, solid black levels"),
  grade("grading-rangefinder-documentary", "camera-look", "旁轴纪实", "Rangefinder Documentary", "旁轴纪实调色，自然环境光，街头真实感，色彩克制", "rangefinder documentary color grade, natural ambient light, restrained street realism"),
  grade("grading-digital-clean", "camera-look", "数码清晰", "Digital Clean", "数码清晰调色，锐度干净，色彩准确，细节透明", "clean digital camera color grade, crisp sharpness, accurate color, transparent details"),
  grade("grading-soft-skin", "camera-look", "柔和肤色", "Soft Skin Tone", "柔和肤色调色，保留皮肤质感，红橙色不过饱和", "soft skin-tone color grade, preserved skin texture, controlled red-orange saturation"),
  grade("grading-medium-format-natural", "camera-look", "中画幅自然色", "Medium Format Natural", "中画幅自然色调，层次宽，过渡柔和，色彩厚实", "medium-format natural color grade, wide tonal range, smooth transitions, rich colors"),
  grade("grading-instant-photo", "camera-look", "即影即有", "Instant Photo", "即影即有相纸调色，边缘轻微暗角，色彩怀旧", "instant-photo paper color grade, subtle edge vignette, nostalgic colors"),
  grade("grading-dji-aerial", "drone-aerial", "大疆航拍调色", "Clean Drone Aerial", "大疆航拍感调色，天空和地景清晰，高动态范围，色彩干净", "clean drone aerial color grade, crisp sky and terrain, high dynamic range, clean landscape colors"),
  grade("grading-drone-hdr", "drone-aerial", "航拍HDR", "Aerial HDR", "航拍HDR后期，亮部和暗部细节都清楚，空间层次强", "aerial HDR color grade, clear highlight and shadow detail, strong spatial depth"),
  grade("grading-teal-landscape", "drone-aerial", "青蓝风光", "Teal Landscape", "青蓝风光调色，天空、水面和远山更清透", "teal-blue landscape color grade, clearer sky, water, and distant mountains"),
  grade("grading-sunset-aerial", "drone-aerial", "航拍夕阳暖调", "Sunset Aerial Warm", "航拍夕阳暖调，金橙色高光，地面暗部保持细节", "warm sunset aerial color grade, golden-orange highlights, detailed ground shadows"),
  grade("grading-urban-aerial-clean", "drone-aerial", "城市航拍清透", "Clean Urban Aerial", "城市航拍清透调色，建筑边缘清晰，灰蓝色不过脏", "clean urban aerial color grade, crisp building edges, controlled gray-blue tones"),
  grade("grading-teal-orange-cinema", "cinematic", "青橙电影调", "Teal Orange Cinema", "青橙电影调色，肤色偏暖，阴影偏青，商业电影质感", "teal-and-orange cinematic color grade, warm skin tones, teal shadows, commercial film look"),
  grade("grading-blockbuster-contrast", "cinematic", "商业大片高反差", "Blockbuster Contrast", "商业大片高反差调色，黑位深，局部高光有冲击力", "blockbuster high-contrast color grade, deep blacks, punchy controlled highlights"),
  grade("grading-filmic-low-contrast", "cinematic", "电影低反差", "Filmic Low Contrast", "电影低反差调色，层次柔和，暗部不死黑，质感高级", "filmic low-contrast color grade, soft tonal layers, lifted shadows, premium finish"),
  grade("grading-bleach-bypass", "cinematic", "银漂", "Bleach Bypass", "银漂调色，低饱和，高反差，金属般冷硬质感", "bleach-bypass color grade, low saturation, high contrast, cold metallic grit"),
  grade("grading-cyberpunk-neon", "cinematic", "赛博霓虹调色", "Cyberpunk Neon Grade", "赛博霓虹调色，紫蓝暗部和高饱和霓虹高光", "cyberpunk neon color grade, purple-blue shadows, high-saturation neon highlights"),
  grade("grading-day-for-night", "cinematic", "日拍夜", "Day For Night", "日拍夜后期，蓝色夜感，压低环境亮度，保留轮廓", "day-for-night color grade, blue night mood, lowered ambient brightness, readable silhouettes"),
  grade("grading-moody-dark", "mood", "暗调情绪", "Moody Dark", "暗调情绪调色，低亮度，高层次阴影，氛围压抑", "moody dark color grade, low brightness, layered shadows, tense atmosphere"),
  grade("grading-cool-blue", "mood", "冷蓝调", "Cool Blue", "冷蓝调后期，蓝灰色主导，安静、疏离、清冷", "cool blue color grade, blue-gray dominance, quiet distant crisp mood"),
  grade("grading-warm-golden", "mood", "暖金调", "Warm Golden", "暖金调后期，金色高光，温暖怀旧，皮肤柔和", "warm golden color grade, golden highlights, warm nostalgic feeling, gentle skin tone"),
  grade("grading-muted-desaturated", "mood", "低饱和灰调", "Muted Desaturated", "低饱和灰调，色彩克制，适合高级叙事氛围", "muted desaturated gray color grade, restrained palette, sophisticated narrative mood"),
  grade("grading-vivid-commercial", "mood", "高饱和商业色", "Vivid Commercial", "高饱和商业色，明亮抓眼，颜色分离清晰", "vivid commercial color grade, bright eye-catching colors, clear color separation"),
  grade("grading-cross-process", "mood", "交叉冲洗", "Cross Process", "交叉冲洗感调色，色偏大胆，对比强，实验胶片氛围", "cross-process color grade, bold color shifts, strong contrast, experimental film mood"),
  grade("grading-beauty-retouch", "commercial", "妆面精修", "Beauty Retouch Grade", "妆面精修调色，肤色均匀，五官立体，妆容颜色准确", "beauty retouch color grade, even skin tone, dimensional facial features, accurate makeup colors"),
  grade("grading-product-clean-white", "commercial", "电商干净白底", "Clean Product White", "电商干净白底后期，白底准确，主体阴影柔和", "clean product-on-white color grade, accurate white background, soft product shadows"),
  grade("grading-food-warm", "commercial", "美食暖调", "Food Warm", "美食暖调，暖光提升食欲，油脂和质感自然", "warm food color grade, appetizing warm light, natural gloss and texture"),
  grade("grading-luxury-ad", "commercial", "高级广告调", "Luxury Ad Grade", "高级广告调色，色彩克制，黑白金属层次清楚", "luxury advertising color grade, restrained colors, clear black-white-metal tonal layers"),
  grade("grading-social-vivid", "commercial", "社媒鲜艳", "Social Vivid", "社媒鲜艳调色，明亮高饱和，适合封面和短视频缩略图", "vivid social-media color grade, bright high saturation, suitable for covers and thumbnails"),
  grade("grading-travel-postcard", "commercial", "旅行明信片", "Travel Postcard", "旅行明信片调色，天空清亮，局部对比增强，色彩讨喜", "travel postcard color grade, clear sky, enhanced local contrast, pleasing colors"),
  grade("grading-matte-social", "commercial", "哑光社媒滤镜", "Matte Social Filter", "哑光社媒滤镜，黑位抬高，饱和度适中，柔和耐看", "matte social-media filter, lifted blacks, moderate saturation, soft pleasing finish"),
  grade("grading-black-gold", "commercial", "黑金质感", "Black Gold", "黑金质感调色，深黑背景、金色高光和高级反射", "black-and-gold color grade, deep black background, golden highlights, premium reflections")
];
