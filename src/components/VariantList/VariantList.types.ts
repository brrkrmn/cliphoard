export type Variant = {
  type: "text" | "password" | "url" | 'code';
  name: "Text" | "Password" | "URL" | "Code";
  styles: string;
  selectedStyles: string;
  cardStyles: string;
  icon: string;
  inputType: "text" | "password" | "url"
}