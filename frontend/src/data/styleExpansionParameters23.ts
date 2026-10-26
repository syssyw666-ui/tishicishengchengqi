import type { PromptParameter } from "../types";

const img = (id: string) => `${import.meta.env.BASE_URL}assets/parameters/${id}.jpg?v=20261026-featured-skill-f`;
const noReplica = ["readable text", "logo", "watermark", "brand mark", "recognizable character", "exact copy of existing artwork"];

export const styleExpansionParameters23: PromptParameter[] = [
  {
    id: "effect-subject-constellation-overlay",
    category: "visual-effect",
    styleGroup: "digital",
    zhName: "主体星图标注",
    enName: "Subject Constellation Overlay",
    defaultWeight: 1,
    image: img("effect-subject-constellation-overlay"),
    zhPrompt: "主体星图标注在真实主体可见的轮廓尖端、关节、纹理交汇、孔洞和形体转折处放置少量青蓝观察节点，再用极细线、测量圆弧和短刻度建立紧贴主体的结构网络；照片材质、光线和背景保持真实，节点密度随主体复杂度变化，连线只连接相邻且有视觉依据的锚点，不伸向无关背景，也不冒充天文、解剖或科学数据。整体像克制的数字田野研究和精密 FUI 叠加，留出足够暗色负空间。避免随机星空、满版 HUD、粗亮霓虹、节点遮住五官、伪造数值、游戏准星和无功能界面装饰。",
    enPrompt: "subject-bound constellation annotation retaining the real photograph while placing a restrained set of cyan observation nodes on visible silhouette tips joints texture intersections openings and structural turns. Fine links measurement arcs and short ticks form a network that hugs the subject; density follows actual complexity and edges connect only nearby visually supported anchors, never unrelated background or invented astronomy anatomy or scientific data. Materials light and environment remain photographic, with sufficient dark negative space and a precise field-study FUI character, avoiding random stars all-over HUD thick neon lines facial obstruction fake values game crosshairs or interface decoration without a structural role.",
    negative: noReplica
  },
  {
    id: "style-capsule-eye-robot-avatar",
    category: "style",
    styleGroup: "design-retro",
    zhName: "胶囊眼机器人头像",
    enName: "Capsule-Eye Robot Avatar",
    defaultWeight: 1,
    image: img("style-capsule-eye-robot-avatar"),
    zhPrompt: "胶囊眼机器人头像以圆润大脸、无嘴无鼻结构和两颗纯色近黑胶囊眼建立极简身份，双眼等大平行、长宽比约二点五至三比一，不出现瞳孔、眼白、高光、睫毛或眉毛。发型归纳为少量平滑大色块，只保留原对象最重要的轮廓与一至三项配饰；颈部、领口和肩部必须存在并自然延伸出画面边缘。头肩整体顺时针倾斜约十五至二十度，从左下进入，右上保留纯深炭灰负空间，色块之间依靠明度与色相区分而非粗黑描边。避免悬浮头、尖下巴、猫嘴、写实五官、眼睛角度不一、散乱发丝、渐变塑料 3D、手臂、装饰图标和复杂背景。",
    enPrompt: "capsule-eye robot-avatar language built around a rounded large face with no mouth or nose and exactly two plain near-black capsule eyes, equal and parallel with an aspect ratio around 2.5 to 3.0, without pupils sclera highlights lashes lids or eyebrows. Hair is reduced to a few smooth large color masses while preserving the subject's essential silhouette and one to three identifying accessories; neck collar and shoulders remain visible and continue beyond the frame. The whole head-and-shoulders figure tilts about fifteen to twenty degrees clockwise, entering from the lower-left with clean charcoal negative space above-right, and shapes separate through adjacent value and hue rather than heavy outlines. Avoid floating heads sharp chins cat mouths realistic facial anatomy mismatched eye angles stray hair plastic gradient 3D arms decorative icons or busy backgrounds.",
    negative: noReplica
  }
];
