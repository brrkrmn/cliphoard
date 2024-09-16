import { ClipVariant } from "./context/CreateClip/CreateClipProvider.types"

export const sectionStyles = "w-full rounded-xl p-2 shadow-sm bg-background-white flex items-center justify-start"

export const clipVariants: ClipVariant[] = [
  {
    type: "text",
    borderStyle: "border-blue",
    textStyle: "text-blue",
    bgStyle: "hover:bg-blue",
    icon: "match_case",
    inputType: "text"
  },
  {
    type: "password",
    borderStyle: "border-red",
    textStyle: "text-red",
    bgStyle: "hover:bg-red",
    icon: "vpn_key",
    inputType: "password"
  },
  {
    type: "url",
    borderStyle: "border-yellow",
    textStyle: "text-yellow",
    bgStyle: "hover:bg-yellow",
    icon: "link",
    inputType: "url"
  },
  {
    type: "code",
    borderStyle: "border-green",
    textStyle: "text-green",
    bgStyle: "hover:bg-green",
    icon: "code",
    inputType: "text"
  }
]