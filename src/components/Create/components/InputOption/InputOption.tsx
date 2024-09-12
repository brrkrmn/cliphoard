import { useAppContext } from "../../../../context";
import { Option } from "../../../../context/appProvider.types";

const InputOption = ({ option }: { option: Option }) => {
  const { setSelectedOptionType, selectedOptionType } = useAppContext()
  const c = option.color;

  return (
    <button
      onClick={() => setSelectedOptionType(option.type)}
      className={`${selectedOptionType === "" ? 'w-12 justify-center' : selectedOptionType === option.type ? 'w-full justify-start px-4' : 'hidden'} transition-all duration-300 gap-4 h-12 bg-background-white border-2 border-${c} transition text-${c} hover:text-foreground-white hover:bg-${c} rounded-full flex items-center`}
    >
      <span className="material-symbols-outlined w-6 h-6">{option.icon}</span>
      <input type={option.inputType} className={`${selectedOptionType === option.type ? "block" : 'hidden'} h-full w-full`} />
    </button>
  )
}

export default InputOption;