import type { PromptParameter } from "../types";

const img = (id: string) => `${import.meta.env.BASE_URL}assets/parameters/${id}.jpg?v=20261026-featured-skill-e`;
const noReplica = ["readable text", "logo", "watermark", "brand mark", "recognizable character", "exact copy of existing artwork"];

export const styleExpansionParameters22: PromptParameter[] = [
  {
    id: "style-porcelain-shard-reconstruction",
    category: "style",
    styleGroup: "craft-print",
    zhName: "瓷片寓意重构",
    enName: "Porcelain-Shard Reconstruction",
    defaultWeight: 1,
    image: img("style-porcelain-shard-reconstruction"),
    zhPrompt: "瓷片寓意重构以暖白瓷胎、钴蓝釉线和真实断瓷边缘构成主体，不直接复制完整照片；先识别最重要的轮廓、姿态、结构转折与负形，再拆成疏密有节奏的大小瓷片。每块碎片内部只承载必要的青花笔触、留白与浓淡变化，裂隙参与解释形体和运动方向，局部可用极少金缮连接关键受力点。整体轻盈、克制、具有东方器物档案与当代编辑艺术气质，大面积纸面留白围绕主体。避免满版传统纹样、随机碎玻璃、光滑陶瓷玩偶、青花装饰堆砌、金线滥用、灰脏旧化和模板拼贴。",
    enPrompt: "porcelain-shard reconstruction built from warm white ceramic body cobalt-blue glaze lines and believable broken porcelain edges; identify the essential silhouette gesture structural turns and negative shapes, then divide them into rhythmically varied fragments rather than copying a full photograph. Each shard carries only necessary blue-and-white brushwork, reserved white and tonal pooling, while gaps explain form and motion; sparse kintsugi may connect critical stress points. The result is light restrained and archival with contemporary editorial clarity and generous paper space, avoiding all-over traditional ornament random broken glass glossy ceramic figurines excessive gold seams dirty aging or template collage.",
    negative: noReplica
  },
  {
    id: "style-miniature-doodle-photography",
    category: "style",
    styleGroup: "design-retro",
    zhName: "微型涂鸦摄影",
    enName: "Miniature Doodle Photography",
    defaultWeight: 1,
    image: img("style-miniature-doodle-photography"),
    zhPrompt: "微型涂鸦摄影保留真实主体的摄影材质、体积、颜色和自然光，只用三至五个尺寸极小的黑色手绘线稿人物建立第二叙事层。小人线条纤细、略有抖动、五官极简，动作依据物件的边缘、孔洞、把手、纹理和受力关系设计，必须有可信的站立、攀爬、抓握、搬运或修补接触点；透视、地面和遮挡与照片一致。背景保持浅净，涂鸦不能替换主体或变成密集漫画。避免白边贴纸、悬浮人物、粗黑卡通、重复动作、无意义箭头、满版装饰、现成角色和商业吉祥物。",
    enPrompt: "miniature-doodle photography preserving the real subject's photographic material volume color and natural light while adding only three to five tiny black hand-drawn figures as a second narrative layer. Lines are fine slightly irregular and facial details minimal; actions derive from actual edges openings handles textures and load-bearing points, with credible standing climbing gripping carrying or repairing contact. Perspective grounding and occlusion remain consistent with the photograph, on a clean pale field. The doodles never replace the subject or become a dense comic, avoiding sticker outlines floating figures heavy cartoon strokes repeated gestures meaningless arrows all-over decoration existing characters or mascots.",
    negative: noReplica
  },
  {
    id: "style-organic-knit-scene",
    category: "style",
    styleGroup: "craft-print",
    zhName: "有机针织场景",
    enName: "Organic Knitted Scene",
    defaultWeight: 1,
    image: img("style-organic-knit-scene"),
    zhPrompt: "有机针织场景把人物、建筑、地形、植物、水面与天空统一转化为一个连续纱线世界，同时保留原有构图、空间比例和前中后景。针目尺寸稳定但方向服从体块：山脊通过增针与收针起伏，树冠使用更蓬松的圈绒，建筑边缘由紧密罗纹支撑，水面和天空使用平缓横向织纹；接缝只出现在合理结构边界，柔和遮蔽光进入纤维间隙。颜色保持来源场景的有限色盘，触感温暖而不幼稚。避免单个针织玩偶、简单毛线滤镜、粗大重复贴图、塑料 3D、绒线覆盖五官、错误接缝与场景结构漂移。",
    enPrompt: "organic knitted-scene language transforming figures architecture terrain vegetation water and sky into one continuous yarn world while preserving composition scale and depth. Stitch size stays coherent but follows form: ridges rise through increases and decreases, foliage uses softer looped pile, architecture is supported by tighter ribbing, and water or sky uses calmer horizontal knitting; seams appear only at plausible structural boundaries and soft occlusion settles between fibers. A limited palette remains derived from the source environment, tactile and warm without becoming childish, avoiding isolated knitted dolls generic yarn filters oversized repeating textures plastic 3D fibers obscuring faces arbitrary seams or spatial drift.",
    negative: noReplica
  }
];
