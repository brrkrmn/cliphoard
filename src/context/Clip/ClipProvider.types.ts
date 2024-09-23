import { Variant } from "../CreateClip/CreateClipProvider.types";

export type ClipContextValue = null | {
  clips: Clip[];
  getClips: () => void;
  addClipToDB: (clip: Clip) => void;
  deleteClip: (clip: Clip) => void;
  toggleEditModal: () => void;
  setCurrentClip: (clip: Clip) => void;
  currentClip: Clip;
  isModalOpen: boolean;
}

export type Clip = {
  id: string;
  title: string;
  variant: Variant;
  content: string;
}