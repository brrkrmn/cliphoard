import { Variant } from "../CreateClip/CreateClipProvider.types";

export type ClipContextValue = null | {
  clips: Clip[];
  addClipToDB: (clip: Clip) => void;
  deleteClip: (clip: Clip) => void;
  toggleEditModal: () => void;
  setCurrentClip: (clip: Clip) => void;
  currentClip: Clip;
  isModalOpen: boolean;
  editClip: (clip: Clip) => void;
}

export type Clip = {
  id: string;
  title: string;
  variant: Variant;
  content: string;
}