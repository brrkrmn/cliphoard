import toast from "react-hot-toast";
import { useModalContext } from "../../context/Modal";
import { ModalType } from "../../context/Modal/ModalProvider.types";
import VariantList from "../VariantList/VariantList";
import { modalConstants } from "./constants";

const Modal = () => {
  const { value, onTitleChange, handleSubmit, onContentChange, isOpen, toggleModal, currentClip } = useModalContext();
  const modalType: ModalType = currentClip ? "edit" : "create"

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (value.title === "") {
      toast.error("Title is missing", { id: "no-title" })
    } else if (value.content === "") {
      toast.error("Content is missing", { id: "no-content" })
    } else {
      handleSubmit()
    }
  }

  if (isOpen) {
    return (
      <div className="border-2 p-4 pt-[76px] absolute top-0 left-0 w-full h-full backdrop-blur-sm flex items-start justify-center">
        <form onSubmit={onSubmit} className="section flex-col px-4 justify-between h-full gap-4">
          <div className="flex items-center justify-between w-full">
            <h1 className="font-bold text-blue">{modalConstants[modalType].title}</h1>
            <button
              data-microtip-position="bottom"
              role="tooltip"
              aria-label="Close"
              onClick={toggleModal}
              className="ml-auto w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0 text-gray hover:text-blue hover:bg-sky transition"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div className="w-full h-full flex flex-col items-center justify-start gap-2">
            <div className="modalSection">
              <p className="modalLabel">Variant</p>
              <VariantList />
            </div>
            <div className="modalSection">
              <label htmlFor="title" className="modalLabel">Title</label>
              <input
                id="title"
                type="text"
                placeholder="Title"
                value={value.title}
                onChange={(e) => { onTitleChange(e) }}
                className="modalInput"
              />
            </div>
            <div className="modalSection">
              <label htmlFor="content" className="modalLabel">Content</label>
              <input
                id="content"
                type="text"
                placeholder="Paste content here!"
                value={value.content}
                onChange={(e) => { onContentChange(e) }}
                className="modalInput"
              />
            </div>
          </div>
          <button type="submit" className="flex items-center justify-center flex-shrink-0 border-2 w-full rounded-3xl h-10 border-blue text-blue hover:bg-blue hover:text-white transition">
            {modalConstants[modalType].buttonLabel}
          </button>
        </form>
      </div>
    )
  } else {
    return null
  }
}

export default Modal;