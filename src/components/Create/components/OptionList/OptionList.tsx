import { inputOptions } from "../InputOption/constants"
import InputOption from "../InputOption/InputOption"

const OptionList = () => {
  return (
    <div className="flex items-center justify-center w-full gap-4">
      {inputOptions.map(option => (
        <InputOption option={option} />
      ))}
    </div>
  )
}

export default OptionList