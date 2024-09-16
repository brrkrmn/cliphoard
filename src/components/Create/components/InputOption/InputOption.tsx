import { useAppContext } from "../../../../context";
import { Option } from "../../../../context/appProvider.types";

const InputOption = ({ option }: { option: Option }) => {
  const { setSelectedOptionType } = useAppContext()

  return (
    <button
      onClick={() => setSelectedOptionType(option.type)}
      className={`${option.borderStyle} ${option.textStyle} hover:${option.bgStyle} transition-all duration-300 w-12 h-12 bg-background-white border-2 hover:text-foreground-white rounded-full flex justify-center items-center`}
    >
      <span className="material-symbols-outlined w-6 h-6">{option.icon}</span>
    </button>
  )
}

export default InputOption;