import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from 'uuid';
import { useClipContext } from "../Clip";
import { Clip } from "../Clip/ClipProvider.types";
import { CreateFormValue, ModalContextValue, Variant } from "./ModalProvider.types";

export const ModalContext = createContext<ModalContextValue>(null);

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (context === null) {
    throw new Error("You can only call this hook inside CreateClipProvider");
  }
  return context;
};

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentClip, setCurrentClip] = useState<Clip | null>(null)
  const [selectedVariant, setSelectedVariant] = useState<Variant | "">("");
  const [value, setValue] = useState<CreateFormValue>({
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
      resetForm()
    }
  }, [isOpen, currentClip])

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const resetForm = () => {
    setValue({ title: '', content: ''})
    setSelectedVariant("")
  }

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, title: e.target.value })
  }

  const onContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, content: e.target.value })
  }

  const handleSubmit = () => {
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
    resetForm()
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