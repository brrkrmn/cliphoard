import { createContext, useContext, useState } from "react";
import { AppContextValue, ClipFormValue, OptionType, Step } from "./appProvider.types";

export const AppContext = createContext<AppContextValue>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error("You can only call this hook inside AppProvider");
  }
  return context;
};

const AppProvider = ({ children }: { children: React.ReactNode }) => {
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
    <AppContext.Provider
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
    </AppContext.Provider>
  );
};

export default AppProvider;