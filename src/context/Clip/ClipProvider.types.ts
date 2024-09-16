import { Variant } from "../CreateClip/CreateClipProvider.types";

export type ClipContextValue = null | {
  clips: Clip[];
  setClips: (clips: Clip[]) => void;
}

export type Clip = {
  id: string;
  title: string;
  variant: Variant;
  content: string;
}