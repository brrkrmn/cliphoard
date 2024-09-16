import { useAppContext } from "../../../../context/CreateClip";
import { Option } from "../../../../context/CreateClip/CreateClipProvider.types";

const InputOption = ({ option }: { option: Option }) => {
  const { setSelectedOptionType, setStep } = useAppContext()

  const onClick = () => {
    setSelectedOptionType(option.type)
    setStep("input")
  }

  return (
    <button
      onClick={onClick}
      className={`${option.borderStyle} ${option.textStyle} ${option.bgStyle} transition-all duration-300 w-12 h-12 bg-background-white border-2 hover:text-foreground-white rounded-full flex justify-center items-center`}
    >
      <span className="material-symbols-outlined w-6 h-6">{option.icon}</span>
    </button>
  )
}

export default InputOption;