import { createContext, useContext, useState } from "react";
import { AppContextValue, OptionType, Step } from "./appProvider.types";

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

  return (
    <AppContext.Provider
      value={{
        selectedOptionType,
        setSelectedOptionType,
        step,
        setStep,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;