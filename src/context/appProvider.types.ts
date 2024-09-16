export type AppContextValue = null | {
  selectedOptionType: OptionType | "";
  setSelectedOptionType: (value: OptionType) => void;
  step: Step;
  setStep: (value: Step) => void
}

export type OptionType = "text" | "password" | "url" | "code";

export type Option = {
  type: OptionType;
  borderStyle: string;
  textStyle: string;
  bgStyle: string
  icon: string;
  inputType: "text" | "password" | "url"
}

export type Step = "initial" | "option" | "input"