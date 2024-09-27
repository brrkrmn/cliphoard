import { Clip } from "../Clip/ClipProvider.types";

export type ModalContextValue = null | {
  handleSubmit: () => void;
  currentClip: Clip | null;
  setCurrentClip: (clip: Clip) => void;
  isOpen: boolean;
  toggleModal: () => void;
  value: CreateFormValue;
  selectedVariant: Variant | "";
  setSelectedVariant: (value: Variant) => void;
  onTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onContentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type ModalType = "edit" | "create"

export type Variant = "text" | "password" | "url" | "code";

export type ClipVariant = {
  type: Variant;
  borderStyle: string;
  textStyle: string;
  bgStyle: string;
  selectedStyle: string;
  cardStyles: string;
  icon: string;
  inputType: "text" | "password" | "url"
}

export type CreateFormValue = {
  title: string;
  content: string;
}
