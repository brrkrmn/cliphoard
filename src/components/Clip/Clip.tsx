import { OptionType } from "../../context/appProvider.types";

export type ClipValue = {
  id: string;
  title: string;
  type: OptionType;
  content: string;
}

const Clip = ({ clip }: { clip: ClipValue }) => {
  const clipOption = {
    text: {
      color: "blue",
      icon: "match_case",
      inputType: "text"
    },
    password: {
      color: "red",
      icon: "vpn_key",
      inputType: "password"
    },
    url: {
      color: "yellow",
      icon: "link",
      inputType: "url"
    },
    code: {
      color: "green",
      icon: "code",
      inputType: "text"
    }
  }

  let borderStyles
  let iconStyles

  if (clip.type === "text") {
    borderStyles = "border-blue"
    iconStyles = "text-blue"
  } else if (clip.type === "password") {
    borderStyles = "border-red"
    iconStyles = "text-red"
  } else if (clip.type === "url") {
    borderStyles = "border-yellow"
    iconStyles = "text-yellow"
  } else {
    borderStyles = "border-green"
    iconStyles = "text-green"
  }

  return (
    <div className={`border-[1px] ${borderStyles} p-2 rounded-3xl w-full flex items-center`}>
      <span className={`material-symbols-outlined w-6 h-6 ${iconStyles}`}>{clipOption[clip.type].icon}</span>
      <div>{clip.title}</div>
      <button className={`ml-auto w-8 h-8 flex items-center justify-center rounded-full hover:bg-background-gray p-1 transition`}>
        <span className="material-symbols-outlined text-foreground-gray">content_copy</span>
      </button>
    </div>
  )
}

export default Clip;