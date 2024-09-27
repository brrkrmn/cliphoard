import { ClipVariant } from "./context/CreateClip/CreateClipProvider.types"

export const sectionStyles = "w-full rounded-xl p-2 shadow-sm bg-white flex items-center justify-start"

export const clipVariants: ClipVariant[] = [
  {
    type: "text",
    borderStyle: "border-blue",
    textStyle: "text-blue",
    bgStyle: "hover:bg-blue",
    selectedStyle: "bg-blue !text-white",
    cardStyles: "via-blue to-blue",
    icon: "match_case",
    inputType: "text"
  },
  {
    type: "password",
    borderStyle: "border-red",
    textStyle: "text-red",
    selectedStyle: "bg-red !text-white",
    bgStyle: "hover:bg-red",
    cardStyles: "via-red to-red",
    icon: "vpn_key",
    inputType: "password"
  },
  {
    type: "url",
    borderStyle: "border-yellow",
    textStyle: "text-yellow",
    bgStyle: "hover:bg-yellow",
    selectedStyle: "bg-yellow !text-white",
    cardStyles: "via-yellow to-yellow",
    icon: "link",
    inputType: "url"
  },
  {
    type: "code",
    borderStyle: "border-green",
    textStyle: "text-green",
    bgStyle: "hover:bg-green",
    selectedStyle: "bg-green !text-white",
    cardStyles: "via-green to-green",
    icon: "code",
    inputType: "text"
  }
]