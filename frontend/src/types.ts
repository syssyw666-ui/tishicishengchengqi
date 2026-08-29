export type CategoryId =
  | "style"
  | "artist-style"
  | "character"
  | "ethnicity"
  | "clothing"
  | "hair-makeup"
  | "pose"
  | "expression"
  | "ethnic-style"
  | "scene"
  | "era"
  | "story-action"
  | "mood"
  | "props"
  | "layout"
  | "background"
  | "layout-style"
  | "framing"
  | "camera"
  | "lighting"
  | "render"
  | "visual-effect"
  | "purpose"
  | "palette"
  | "color-grading"
  | "color-material";

export type SelectionMode = "single" | "multi";

export interface Category {
  id: CategoryId;
  zhName: string;
  enName: string;
  mode: SelectionMode;
  description: string;
}

export interface PromptParameter {
  id: string;
  category: CategoryId;
  styleGroup?: string;
  zhName: string;
  enName: string;
  defaultWeight?: number;
  image: string;
  zhPrompt: string;
  enPrompt: string;
  negative?: string[];
}

export interface SelectedParameter {
  id: string;
}

export interface PromptInputs {
  subjectZh: string;
  avoid: string;
  aspectRatio: string;
  clarity: string;
}
