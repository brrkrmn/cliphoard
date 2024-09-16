import { Variant } from "../CreateClip/CreateClipProvider.types";

export type ClipContextValue = null | {
  clips: Clip[];
  getClips: () => void;
}

export type Clip = {
  id: string;
  title: string;
  variant: Variant;
  content: string;
}