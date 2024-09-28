import { Variant } from "./VariantList.types";

export const clipVariants: Variant[] = [
  {
    type: "text",
    name: "Text",
    styles: "border-blue text-blue bg-white hover:bg-blue hover:text-white",
    selectedStyles: "border-blue bg-blue text-white",
    cardStyles: "text-blue border-blue via-blue to-blue",
    icon: "match_case",
    inputType: "text"
  },
  {
    type: "password",
    name: "Password",
    styles: "border-red text-red bg-white hover:bg-red hover:text-white",
    selectedStyles: "border-red bg-red text-white",
    cardStyles: "text-red border-red via-red to-red",
    icon: "vpn_key",
    inputType: "password"
  },
  {
    type: "url",
    name: "URL",
    styles: "border-yellow text-yellow bg-white hover:bg-yellow hover:text-white",
    selectedStyles: "border-yellow bg-yellow text-white",
    cardStyles: "text-yellow border-yellow via-yellow to-yellow",
    icon: "link",
    inputType: "url"
  },
  {
    type: "code",
    name: "Code",
    styles: "border-green text-green bg-white hover:bg-green hover:text-white",
    selectedStyles: "border-green bg-green text-white",
    cardStyles: "text-green border-green via-green to-green",
    icon: "code",
    inputType: "text"
  }
]