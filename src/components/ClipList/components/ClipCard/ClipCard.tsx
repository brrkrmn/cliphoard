import toast from "react-hot-toast";
import { useClipContext } from "../../../../context/Clip";
import { Clip } from "../../../../context/Clip/ClipProvider.types";
import { useModalContext } from "../../../../context/Modal";

const ClipCard = ({ clip }: { clip: Clip }) => {
  const { deleteClip } = useClipContext();
  const { toggleModal, setCurrentClip } = useModalContext();

  const showEditModal = () => {
    toggleModal()
    setCurrentClip(clip)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(clip.content)
    setTimeout(() => {
    toast("Copied", { id: 'copy' })
    })
  }

  const handleDelete = () => {
    deleteClip(clip)
    toast("Clip deleted", { id: 'delete' })
  }

  return (
    <div className="group h-14 w-full flex items-center justify-between flex-shrink-0 gap-1">
      <button
        onClick={handleCopy}
        className={`${clip.variant.cardStyles} border-[1px] px-3 rounded-full h-full group-hover:w-[80%] transition-all w-full flex items-center gap-2 group-hover:bg-gradient-to-r from-transparent from-30% via-100%`}>
        <span className="material-symbols-outlined w-6 h-6">{clip.variant.icon}</span>
        <div className="flex flex-col items-start justify-center w-[70%]">
          <div className="group-hover:hidden duration-300 text-base text-left font-semibold text-black w-full truncate">
            {clip.title}
          </div>
          <div className="group-hover:text-base transition-all text-left text-xs text-gray w-full truncate">
            {clip.content}
          </div>
        </div>
        <div
          data-microtip-position="bottom"
          role="tooltip"
          aria-label="Copy"
          className={`ml-auto w-8 h-8 flex items-center justify-center transition`}>
          <span className="material-symbols-outlined text-gray transition group-hover:text-white">content_copy</span>
        </div>
      </button>
      <div className="invisible w-0 opacity-0 group-hover:opacity-100 group-hover:visible group-hover:w-20 flex transition-all items-center justify-center">
        <button
          data-microtip-position="bottom"
          role="tooltip"
          aria-label="Edit"
          onClick={showEditModal}
          className="flex w-10 transition items-center justify-center rounded-full hover:bg-gray-light h-10"
        >
          <span className="material-symbols-outlined text-gray">edit_square</span>
        </button>
        <button
          data-microtip-position="bottom-left"
          role="tooltip"
          aria-label="Delete"
          onClick={handleDelete}
          className="flex w-10 transition items-center justify-center rounded-full hover:bg-gray-light h-10"
        >
          <span className="material-symbols-outlined text-gray">delete</span>
        </button>
      </div>
    </div>
  )
}

export default ClipCard;