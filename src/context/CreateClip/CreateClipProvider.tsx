import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useClipContext } from "../Clip";
import { Clip } from "../Clip/ClipProvider.types";
import { CreateClipContextValue, CreateFormValue, Step, Variant } from "./CreateClipProvider.types";

export const CreateClipContext = createContext<CreateClipContextValue>(null);

export const useCreateClipContext = () => {
  const context = useContext(CreateClipContext);
  if (context === null) {
    throw new Error("You can only call this hook inside CreateClipProvider");
  }
  return context;
};

const CreateClipProvider = ({ children }: { children: React.ReactNode }) => {
  const [step, setStep] = useState<Step>("initial")
  const [selectedVariant, setSelectedVariant] = useState<Variant>("text");
  const [value, setValue] = useState<CreateFormValue>({
    title: '',
    content: '',
  })
  const { addClipToDB } = useClipContext()


  const createClip = (value: CreateFormValue) => {
    const id = uuidv4();
    const clip: Clip = {
      id: id,
      title: value.title,
      content: value.content,
      variant: selectedVariant,
    }

    addClipToDB(clip)
    resetForm()
  }

  const resetForm = () => {
    setValue({ title: '', content: ''})
    setStep("initial")
  }

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, title: e.target.value })
  }

  const onContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, content: e.target.value })
  }

  return (
    <CreateClipContext.Provider
      value={{
        setSelectedVariant,
        step,
        setStep,
        createClip,
        resetForm,
        onTitleChange,
        onContentChange,
        value,
      }}
    >
      {children}
    </CreateClipContext.Provider>
  );
};

export default CreateClipProvider;