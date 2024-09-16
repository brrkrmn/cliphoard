import { useAppContext } from "../../context";
import ClipForm from "./components/ClipForm/ClipForm";
import CreateButton from "./components/CreateButton/CreateButton";
import OptionList from "./components/OptionList/OptionList";

const Create = () => {
  const { step } = useAppContext();

  return (
    <div className="flex items-center gap-2 w-full">
      {step === "initial" ? (
        <CreateButton />
      ) : step === "option" ? (
          <OptionList />
        ) : (
            <ClipForm />
      ) }
    </div>
  )
}

export default Create;