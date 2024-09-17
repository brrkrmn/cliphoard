export type CreateClipContextValue = null | {
  step: Step;
  value: CreateFormValue
  setSelectedVariant: (value: Variant) => void;
  setStep: (value: Step) => void;
  createClip: (value: CreateFormValue) => void;
  resetForm: () => void;
  onTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onContentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type Variant = "text" | "password" | "url" | "code";

export type ClipVariant = {
  type: Variant;
  borderStyle: string;
  textStyle: string;
  bgStyle: string;
  cardStyles: string;
  icon: string;
  inputType: "text" | "password" | "url"
}

export type CreateFormValue = {
  title: string;
  content: string;
}

export type Step = "initial" | "select-variant" | "create-form"