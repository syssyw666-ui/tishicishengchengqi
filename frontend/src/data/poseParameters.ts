import type { PromptParameter } from "../types";

const img = (id: string) => `${import.meta.env.BASE_URL}assets/parameters/${id}.jpg`;
const poseNegative = ["awkward pose", "broken anatomy", "extra limbs", "twisted hands"];

function pose(id: string, styleGroup: string, zhName: string, enName: string, zhPrompt: string, enPrompt: string): PromptParameter {
  return {
    id,
    category: "pose",
    styleGroup,
    zhName,
    enName,
    defaultWeight: 1,
    image: img(id),
    zhPrompt,
    enPrompt,
    negative: poseNegative
  };
}

export const poseParameters: PromptParameter[] = [
  pose("pose-neutral-standing", "standing", "站立正面", "Front Standing", "人物正面自然站立，身体挺直，姿态稳定", "front-facing natural standing pose, upright body, balanced posture"),
  pose("pose-three-quarter-standing", "standing", "三分之二侧身站立", "Three-Quarter Standing", "人物三分之二侧身站立，脸部略转向镜头", "three-quarter standing pose, body angled slightly, face turned toward camera"),
  pose("pose-contrapposto", "standing", "重心偏移站姿", "Contrapposto", "人物重心偏向一侧，肩胯形成自然对角线", "contrapposto pose with weight shifted to one leg, natural shoulder and hip diagonal"),
  pose("pose-hands-in-pockets", "standing", "双手插袋", "Hands In Pockets", "人物双手插袋站立，轻松随性的街拍姿态", "relaxed standing pose with both hands in pockets, casual street portrait attitude"),
  pose("pose-arms-crossed", "standing", "双臂抱胸", "Arms Crossed", "人物双臂抱胸站立，自信克制的姿态", "standing pose with arms crossed, confident restrained body language"),
  pose("pose-looking-back", "standing", "回眸站姿", "Looking Back", "人物背身或侧身回眸，形成叙事感视线", "looking-back pose from side or back, narrative gaze over the shoulder"),
  pose("pose-leaning-wall", "standing", "倚墙站姿", "Leaning Against Wall", "人物身体轻靠墙面或柱体，姿态自然松弛", "person leaning lightly against a wall or column, relaxed natural posture"),
  pose("pose-hero-low-angle", "standing", "英雄式站姿", "Hero Stance", "人物双脚稳定分开站立，气势强，适合低机位表现", "heroic stance with stable feet apart, powerful silhouette, suitable for low-angle framing"),
  pose("pose-sitting-chair", "sitting", "端坐椅子", "Seated On Chair", "人物端坐在椅子上，背部自然挺直，双手可放在腿上", "seated on a chair with naturally straight back, hands resting on lap"),
  pose("pose-cross-legged-sitting", "sitting", "盘腿坐", "Cross-Legged Sitting", "人物盘腿坐在地面或垫子上，姿态安静放松", "cross-legged sitting pose on floor or cushion, calm relaxed posture"),
  pose("pose-side-sitting", "sitting", "侧坐", "Side Sitting", "人物侧坐，腿部朝一侧延展，轮廓优雅", "side-sitting pose with legs angled to one side, elegant silhouette"),
  pose("pose-floor-sitting", "sitting", "席地而坐", "Floor Sitting", "人物自然席地而坐，身体稍微前倾，生活感强", "casual floor sitting pose, body leaning slightly forward, intimate everyday feeling"),
  pose("pose-kneeling", "sitting", "单膝跪姿", "One-Knee Kneeling", "人物单膝跪地或半跪，动作明确，适合角色设定", "one-knee kneeling or half-kneeling pose, clear dramatic action for character design"),
  pose("pose-sitting-steps", "sitting", "台阶坐姿", "Sitting On Steps", "人物坐在台阶边缘，一腿高一腿低，街拍感构图", "sitting on steps with uneven leg levels, casual editorial street composition"),
  pose("pose-lying-supine", "lying", "仰躺", "Lying Supine", "人物仰躺，面部朝上，身体舒展", "lying supine pose, face upward, body gently extended"),
  pose("pose-lying-prone", "lying", "趴着", "Lying Prone", "人物趴卧，手肘支撑或脸贴近地面，画面更亲近", "lying prone pose, elbows supporting or face near the ground, intimate viewpoint"),
  pose("pose-side-lying", "lying", "侧躺", "Side Lying", "人物侧躺，身体曲线清楚，适合柔和人像", "side-lying pose with clear body curve, suitable for soft portrait imagery"),
  pose("pose-reclining", "lying", "半躺倚靠", "Reclining", "人物半躺倚靠在沙发、床或斜面上，放松慵懒", "reclining pose against sofa, bed, or inclined surface, relaxed languid mood"),
  pose("pose-curling-up", "lying", "蜷缩姿势", "Curled Up", "人物身体蜷缩，双臂靠近躯干，情绪内敛", "curled-up body pose, arms close to torso, introspective emotional posture"),
  pose("pose-walking", "motion", "行走", "Walking", "人物自然行走中，一脚向前，衣摆和肢体有轻微动态", "natural walking pose, one foot forward, subtle motion in clothes and limbs"),
  pose("pose-running", "motion", "奔跑", "Running", "人物奔跑中，身体前倾，手臂摆动，速度感明显", "running pose, body leaning forward, arms swinging, strong sense of speed"),
  pose("pose-jumping", "motion", "跳跃", "Jumping", "人物腾空跳跃，四肢张力清楚，定格瞬间感", "mid-air jumping pose, clear limb tension, frozen decisive moment"),
  pose("pose-spinning", "motion", "旋转", "Spinning", "人物旋转动作，衣摆或发丝形成环形动态", "spinning pose with clothing or hair forming circular motion"),
  pose("pose-reaching", "motion", "伸手触碰", "Reaching Out", "人物向前或向侧面伸手，焦点落在手部方向", "reaching-out pose toward front or side, visual focus follows the hand"),
  pose("pose-turning-around", "motion", "转身动作", "Turning Around", "人物正在转身，肩膀、腰部和视线方向产生动态扭转", "turning-around pose with dynamic twist through shoulders, waist, and gaze"),
  pose("pose-hair-flip", "motion", "甩发动态", "Hair Flip", "人物甩发或快速回头，发丝形成清晰动态轨迹", "hair-flip or quick head-turn pose with clear flowing hair motion"),
  pose("pose-ballet-dance", "dance", "芭蕾舞姿", "Ballet Pose", "人物芭蕾舞姿，手臂延展，脚尖轻盈，线条修长", "ballet dance pose, extended arms, light pointed feet, elongated graceful lines"),
  pose("pose-street-dance", "dance", "街舞动作", "Street Dance", "人物街舞动作，重心低，肢体角度鲜明，节奏感强", "street dance pose, low center of gravity, sharp limb angles, rhythmic energy"),
  pose("pose-ballroom-dance", "dance", "双人舞姿", "Ballroom Dance", "双人舞姿，身体靠近，手部连接，步伐有方向性", "ballroom dance pose for two people, close bodies, connected hands, directional steps"),
  pose("pose-traditional-dance", "dance", "民族舞姿", "Traditional Dance", "人物传统舞蹈姿态，手腕、袖摆和身体曲线富有仪式感", "traditional dance pose with expressive wrists, sleeves, and ceremonial body curves"),
  pose("pose-contemporary-dance", "dance", "现代舞姿", "Contemporary Dance", "人物现代舞姿，身体伸展或收缩，情绪表达强", "contemporary dance pose with expressive extension or contraction, strong emotional body language"),
  pose("pose-hand-dance", "dance", "手部舞姿", "Expressive Hand Pose", "人物以手部动作为重点，手指、腕部和袖口姿态清晰", "dance-like expressive hand pose, clear fingers, wrists, and sleeve gesture"),
  pose("pose-fighting-stance", "action", "战斗架势", "Fighting Stance", "人物战斗架势，双脚错开，手臂防御或准备攻击", "fighting stance, staggered feet, arms guarding or ready to strike"),
  pose("pose-archery-stance", "action", "拉弓姿势", "Archery Stance", "人物拉弓姿势，一臂伸直一臂后拉，方向明确", "archery stance, one arm extended and one arm pulling back, clear directional aim"),
  pose("pose-sword-ready", "action", "持剑准备", "Sword Ready", "人物持剑准备姿势，武器与身体形成强视觉线条", "sword-ready pose, weapon and body forming strong visual lines"),
  pose("pose-yoga-stretch", "action", "瑜伽伸展", "Yoga Stretch", "人物瑜伽伸展姿势，身体平衡，呼吸感柔和", "yoga stretching pose, balanced body, calm breathing feeling"),
  pose("pose-workout-lunge", "action", "弓步训练", "Workout Lunge", "人物弓步训练姿势，前腿弯曲，后腿拉伸，运动感明确", "workout lunge pose, front leg bent, rear leg extended, clear athletic form"),
  pose("pose-cycling-pose", "action", "骑行动作", "Cycling Pose", "人物骑行动作，身体前倾，手部握把，腿部踩踏", "cycling pose, body leaning forward, hands on handlebar, legs pedaling"),
  pose("pose-skateboard-pose", "action", "滑板动作", "Skateboard Pose", "人物滑板动作，膝盖弯曲，身体保持平衡", "skateboard pose, knees bent, body balancing in motion"),
  pose("pose-handshake", "interaction", "握手", "Handshake", "两人握手互动，手部连接清楚，关系正式友好", "two-person handshake interaction, clear hand contact, formal friendly relationship"),
  pose("pose-hugging", "interaction", "拥抱", "Hugging", "人物拥抱互动，身体靠近，姿态温暖亲密", "hugging interaction, bodies close together, warm intimate posture"),
  pose("pose-holding-hands", "interaction", "牵手", "Holding Hands", "人物牵手互动，手部连接作为画面重点", "holding-hands interaction, connected hands as a clear visual focus"),
  pose("pose-group-lineup", "interaction", "多人并排", "Group Lineup", "多人并排站立，间距均匀，适合团队或角色阵列", "group lineup pose, people standing side by side with even spacing, suitable for team or character lineup"),
  pose("pose-back-to-back", "interaction", "背靠背", "Back To Back", "两人背靠背站立，形成对称和协作感", "two people standing back to back, creating symmetry and partnership"),
  pose("pose-parent-child", "interaction", "亲子互动", "Parent-Child Interaction", "成年人和孩子互动，牵引、陪伴或保护姿态明确", "adult and child interaction, clear guiding, accompanying, or protective posture"),
  pose("pose-waving", "emotion", "挥手", "Waving", "人物挥手打招呼，手臂抬起，表情开放友好", "waving greeting pose, raised arm, open friendly expression"),
  pose("pose-pointing", "emotion", "指向", "Pointing", "人物手指指向画面重点或远处目标，引导视线", "pointing pose toward a focal area or distant target, guiding the viewer's eye"),
  pose("pose-thinking", "emotion", "托腮思考", "Thinking Pose", "人物托腮或扶下巴思考，视线略偏，情绪安静", "thinking pose with hand on cheek or chin, gaze slightly averted, quiet mood"),
  pose("pose-covering-face", "emotion", "遮脸", "Covering Face", "人物用手、道具或衣袖局部遮脸，制造神秘感", "partly covering the face with hand, prop, or sleeve, creating mystery"),
  pose("pose-holding-object", "emotion", "手持物品", "Holding Object", "人物手持指定物品，物品与手部关系清楚", "holding a specified object, clear relationship between hands and object"),
  pose("pose-id-photo-straight", "camera-ready", "证件照正姿", "ID Photo Posture", "人物正面端正坐姿或站姿，肩膀水平，表情自然", "front-facing ID photo posture, level shoulders, neutral natural expression"),
  pose("pose-fashion-runway", "camera-ready", "走秀台步", "Runway Walk", "人物走秀台步，一腿交叉向前，姿态修长自信", "runway walking pose, one leg crossing forward, elongated confident posture")
];
