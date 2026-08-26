import type { CategoryId, PromptParameter } from "../types";

const img = (id: string) => `${import.meta.env.BASE_URL}assets/parameters/${id}.png`;

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

export const gapSupplementParameters: PromptParameter[] = [
  param("mood", "mood-festive-celebration", "positive", "节庆欢庆", "Festive Celebration", "节庆欢庆氛围，暖色灯火、人群能量、明亮喜悦和仪式感", "festive celebration mood, warm lantern light, crowd energy, bright joy, ceremonial atmosphere", moodNegative),
  param("mood", "mood-sacred-solemn", "dramatic", "神圣庄重", "Sacred Solemn", "神圣庄重氛围，对称构图、安静光线、敬畏感和仪式秩序", "sacred solemn mood, symmetrical composition, quiet light, reverent atmosphere, ritual order", moodNegative),
  param("mood", "mood-premium-calm-luxury", "luxury", "高级静奢", "Premium Quiet Luxury", "高级静奢氛围，克制留白、精致高光、柔和材质和安静商业感", "premium quiet luxury mood, restrained negative space, refined highlights, soft material, calm commercial elegance", moodNegative),
  param("mood", "mood-bittersweet-romance", "romantic", "苦甜浪漫", "Bittersweet Romance", "苦甜浪漫氛围，柔和逆光、亲密距离、温柔但略带感伤的情绪", "bittersweet romantic mood, gentle backlight, intimate distance, tender yet melancholic feeling", moodNegative),
  param("purpose", "story-action-unboxing", "commercial", "开箱展示", "Unboxing Display", "图片用途为开箱展示，包装打开与产品露出的步骤关系清晰，适合电商和新品发布", "unboxing display purpose, clear package opening and product reveal sequence, suitable for ecommerce and product launch", storyNegative),
  param("purpose", "story-action-product-demo", "commercial", "产品使用演示", "Product Use Demonstration", "图片用途为产品使用演示，主体正在被真实使用，功能关系明确，画面干净易懂", "product use demonstration purpose, product being used clearly, visible function relationship, clean readable scene", storyNegative),
  param("purpose", "story-action-before-after-comparison", "commercial", "前后对比展示", "Before After Comparison", "图片用途为前后对比展示，画面分成两个清晰区域，表现处理前后的差异，不加入文字", "before-and-after comparison purpose, two clear image zones showing transformation difference, no text", storyNegative),
  param("visual-effect", "effect-motion-afterimage", "dynamic", "动作残影", "Motion Afterimage", "动作残影特效，半透明连续身影表现运动轨迹和速度变化", "motion afterimage effect, repeated translucent silhouettes showing movement path and speed change", effectNegative),
  param("visual-effect", "effect-speed-ramp", "dynamic", "速度拖影", "Speed Ramp Streaks", "速度拖影特效，主体相对清晰，背景沿运动方向拉出线性拖影", "speed ramp streak effect, relatively sharp subject with directional motion streaks in the background", effectNegative),
  param("visual-effect", "effect-energy-wave", "light-particle", "能量波纹", "Energy Wave", "能量波纹特效，柔和发光环绕主体，形成聚焦和超现实能量场", "energy wave effect, soft glowing rings around the subject, focused surreal energy field", effectNegative),
  param("era", "era-climate-aftermath", "apocalypse", "多灾种气候灾变世界", "Multi-Hazard Climate Collapse", "多灾种气候灾变后的世界：洪水积水、极端高温、干旱荒漠化、超级风暴、山火烟霾与冰雪灾害留下不同区域痕迹，强调环境后果与人类适应、避难和重建，不限定为单一水灾", "multi-hazard climate collapse world after floods, extreme heat, drought and desertification, superstorms, wildfire smoke, and ice disasters, showing environmental consequences, human adaptation, shelters, and reconstruction rather than a single flood scenario", eraNegative),
  param("layout-style", "layout-style-letterpress-print", "print", "活版印刷版式", "Letterpress Layout", "活版印刷版式，凹凸纸面、压印块面、油墨肌理和克制海报结构", "letterpress layout style, embossed paper surface, impressed blocks, ink texture, restrained poster structure", layoutNegative)
];
