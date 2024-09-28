import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from 'uuid';
import { Variant } from "../../components/VariantList/VariantList.types";
import { useClipContext } from "../Clip";
import { Clip } from "../Clip/ClipProvider.types";
import { FormValue, ModalContextValue } from "./ModalProvider.types";

export const ModalContext = createContext<ModalContextValue>(null);

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (context === null) {
    throw new Error("You can only call this hook inside ModalProvider");
  }
  return context;
};

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentClip, setCurrentClip] = useState<Clip | null>(null)
  const [selectedVariant, setSelectedVariant] = useState<Variant | "">("");
  const [value, setValue] = useState<FormValue>({
    title: '',
    content: '',
  })
  const { createClip, editClip } = useClipContext()

  useEffect(() => {
    if (isOpen && currentClip) {
      setValue({
        title: currentClip.title,
        content: currentClip.content
      })
      setSelectedVariant(currentClip.variant)
    } else {
      setValue({ title: '', content: ''})
      setSelectedVariant("")
      setCurrentClip(null)
    }
  }, [isOpen, currentClip])

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, title: e.target.value })
  }

  const onContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, content: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      if (currentClip) {
        const editedClip: Clip = {
          ...currentClip,
          title: value.title,
          content: value.content,
          // @ts-ignore
          variant: selectedVariant,
        }
        editClip(editedClip)
        toast("Clip edited", { id: 'edit' })
      } else {
        const id = uuidv4();
        const newClip: Clip = {
          id: id,
          title: value.title,
          content: value.content,
          // @ts-ignore
          variant: selectedVariant,
        }
        createClip(newClip)
        toast("Clip created", { id: 'create' })
      }
      toggleModal()
    }
  }

  const validateForm = () => {
    if (selectedVariant === "") {
      toast.error("Variant is missing", { id: "no-variant" })
      return false;
    }
    if (value.title === "") {
      toast.error("Title is missing", { id: "no-title" })
      return false;
    }
    if (value.content === "") {
      toast.error("Content is missing", { id: "no-content" })
      return false;
    }
    return true;
  }

  return (
    <ModalContext.Provider
      value={{
        setCurrentClip,
        currentClip,
        isOpen,
        toggleModal,
        setSelectedVariant,
        selectedVariant,
        handleSubmit,
        onTitleChange,
        onContentChange,
        value,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;