import { Variant } from "../CreateClip/CreateClipProvider.types";

export type ClipContextValue = null | {
  clips: Clip[];
  getClips: () => void;
  addClipToDB: (clip: Clip) => void;
  deleteClip: (clip: Clip) => void;
  toggleEditModal: () => void;
  isModalOpen: boolean;
}

export type Clip = {
  id: string;
  title: string;
  variant: Variant;
  content: string;
}