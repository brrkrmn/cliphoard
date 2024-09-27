import { useCreateClipContext } from "../../../../context/CreateClip";

const CreateButton = () => {
  const { setStep } = useCreateClipContext();

  return (
    <button
      onClick={() => setStep("select-variant")}
      className="rounded-3xl border-2 border-blue text-blue bg-white px-6 py-[6px] font-bold text-sm hover:text-white hover:bg-blue hover:border-blue transition"
    >
      Create
    </button>
  )
}

export default CreateButton;