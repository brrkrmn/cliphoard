import { createContext, useContext, useState } from "react";
import { ClipFormValue, CreateClipContextValue, OptionType, Step } from "./CreateClipProvider.types";

export const CreateClipContext = createContext<CreateClipContextValue>(null);

export const useAppContext = () => {
  const context = useContext(CreateClipContext);
  if (context === null) {
    throw new Error("You can only call this hook inside AppProvider");
  }
  return context;
};

const CreateClipProvider = ({ children }: { children: React.ReactNode }) => {
  const [step, setStep] = useState<Step>("initial")
  const [selectedOptionType, setSelectedOptionType] = useState<OptionType | "">("");
  const [value, setValue] = useState<ClipFormValue>({
    title: '',
    content: '',
  })

  const createClip = (value: ClipFormValue) => {
    resetForm()
  }

  const resetForm = () => {
    setStep("initial")
  }

  const updateTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, title: e.target.value })
  }

  const updateContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, content: e.target.value })
  }

  return (
    <CreateClipContext.Provider
      value={{
        selectedOptionType,
        setSelectedOptionType,
        step,
        setStep,
        createClip,
        resetForm,
        updateTitle,
        updateContent,
        value,
      }}
    >
      {children}
    </CreateClipContext.Provider>
  );
};

export default CreateClipProvider;