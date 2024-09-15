import { useAppContext } from "../../../../context";
import { Option } from "../../../../context/appProvider.types";

const InputOption = ({ option }: { option: Option }) => {
  const { setSelectedOptionType, selectedOptionType } = useAppContext()
  const styles = option.type === "text" ? "border-blue text-blue hover:bg-blue" : option.type === "password" ? "border-red text-red bg:hover-red" : option.type === "url" ? "border-yellow text-yellow bg-hover:yellow" : "border-green text-green bg-hover:green"

  return (
    <button
      onClick={() => setSelectedOptionType(option.type)}
      className={`${selectedOptionType === "" ? 'w-12 justify-center' : selectedOptionType === option.type ? 'w-full justify-start px-4' : 'hidden'} transition-all duration-300 gap-4 h-12 bg-background-white border-2 hover:text-foreground-white rounded-full flex items-center ${styles}`}
    >
      <span className="material-symbols-outlined w-6 h-6">{option.icon}</span>
      <input type={option.inputType} className={`${selectedOptionType === option.type ? "block" : 'hidden'} h-full w-full`} />
    </button>
  )
}

export default InputOption;