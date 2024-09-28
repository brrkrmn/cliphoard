import { Variant } from "../../components/VariantList/VariantList.types";
import { Clip } from "../Clip/ClipProvider.types";

export type ModalContextValue = null | {
  currentClip: Clip | null;
  isOpen: boolean;
  value: FormValue;
  selectedVariant: Variant | "";
  toggleModal: () => void;
  setCurrentClip: (clip: Clip) => void;
  setSelectedVariant: (value: Variant) => void;
  handleSubmit: (e: React.FormEvent) => void;
  onTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onContentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type FormValue = {
  title: string;
  content: string;
}
