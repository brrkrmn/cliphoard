import { Variant } from "../../components/VariantList/VariantList.types";

export type ClipContextValue = null | {
  clips: Clip[];
  createClip: (clip: Clip) => void;
  deleteClip: (clip: Clip) => void;
  editClip: (clip: Clip) => void;
}

export type Clip = {
  id: string;
  title: string;
  variant: Variant;
  content: string;
}