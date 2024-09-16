import { useCreateClipContext } from "../../context/CreateClip";
import ClipForm from "./components/ClipForm/ClipForm";
import CreateButton from "./components/CreateButton/CreateButton";
import VariantList from "./components/VariantList/VariantList";

const Create = () => {
  const { step } = useCreateClipContext();

  return (
    <div className="flex items-center gap-2 w-full">
      {step === "initial" ? (
        <CreateButton />
      ) : step === "select-variant" ? (
          <VariantList />
        ) : (
            <ClipForm />
      ) }
    </div>
  )
}

export default Create;