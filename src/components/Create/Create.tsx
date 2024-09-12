import { useAppContext } from "../../context";
import CreateButton from "./components/CreateButton/CreateButton";
import { inputOptions } from "./components/InputOption/constants";
import InputOption from "./components/InputOption/InputOption";

const Create = () => {
  const { step, setStep } = useAppContext();

  return (
    <div className="flex items-center gap-2">
      <div className={`${step === "" ? "opacity-100 visible" : "opacity-0 invisible"} absolute flex transition-opacity delay-300 duration-300 h-10 items-center justify-center`}>
        <CreateButton onClick={() => setStep("select-option")} />
      </div>
      <div className={`${step === "select-option" ? 'opacity-100 visible gap-4' : 'opacity-0 invisible gap-0'} flex transition-all delay-150 duration-300 items-center justify-center w-full`}>
        {inputOptions.map((option) => (
          <InputOption option={option} />
        ))}
      </div>
      <div className={`${step === "fill-input" ? "opacity-100 visible" : "opacity-0 invisible"} absolute flex transition-all delay-150 duration-300 items-center justify-center w-full`}>
        <input type="text" />
      </div>
    </div>
  )
}

export default Create;