export type CreateClipContextValue = null | {
  selectedOptionType: OptionType | "";
  setSelectedOptionType: (value: OptionType) => void;
  step: Step;
  setStep: (value: Step) => void;
  createClip: (value: ClipFormValue) => void;
  resetForm: () => void;
  updateTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  updateContent: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: ClipFormValue
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

export type ClipFormValue = {
  title: string;
  content: string;
}

export type Step = "initial" | "option" | "input"