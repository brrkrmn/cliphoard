import { useModalContext } from "../../context/Modal";

const Actions = () => {
  const { toggleModal } = useModalContext();

  return (
    <div className="flex items-center justify-start gap-4">
      <button
        onClick={toggleModal}
        className="rounded-3xl border-2 border-blue text-blue bg-white px-6 py-[6px] font-bold text-sm hover:text-white hover:bg-blue hover:border-blue transition"
      >
        Create
      </button>
    </div>
  )
}

export default Actions;