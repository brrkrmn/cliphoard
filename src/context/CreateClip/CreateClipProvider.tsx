import { createContext, useContext, useState } from "react";
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
  const [selectedVariant, setSelectedVariant] = useState<Variant | "">("");
  const [value, setValue] = useState<CreateFormValue>({
    title: '',
    content: '',
  })

  const createClip = (value: CreateFormValue) => {
    resetForm()
  }

  const resetForm = () => {
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