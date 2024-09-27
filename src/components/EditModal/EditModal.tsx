import toast from "react-hot-toast";
import { useClipContext } from "../../context/Clip";
import { Clip } from "../../context/Clip/ClipProvider.types";
import { useCreateClipContext } from "../../context/CreateClip";
import VariantList from "../Create/components/VariantList/VariantList";
import { editInputStyles, editLabelStyles, editSectionStyles } from "./constants";

const EditModal = () => {
  const { toggleEditModal, currentClip, editClip } = useClipContext();
  const { value, onTitleChange, onContentChange, selectedVariant } = useCreateClipContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const editedClip: Clip = {
      ...currentClip,
      title: value.title,
      content: value.content,
      // @ts-ignore
      variant: selectedVariant,
    }
    editClip(editedClip)
    toggleEditModal()
    toast("Clip edited", { id: 'edit' })
  }

  return (
    <div className="border-2 p-4 pt-[76px] absolute top-0 left-0 w-full h-full backdrop-blur-sm flex items-start justify-center">
      <form onSubmit={handleSubmit} className="section flex-col px-4 justify-between h-full gap-4">
        <div className="flex items-center justify-between w-full">
          <h1 className="font-bold text-blue">Edit Clip</h1>
          <button
            data-microtip-position="bottom"
            role="tooltip"
            aria-label="Close"
            onClick={toggleEditModal}
            className="ml-auto w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0 text-gray hover:text-blue hover:bg-sky transition"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="w-full h-full flex flex-col items-center justify-start gap-2">
          <div className={editSectionStyles}>
            <p className={editLabelStyles}>Variant</p>
            <VariantList />
          </div>
          <div className={editSectionStyles}>
            <label htmlFor="title" className={editLabelStyles}>Title</label>
            <input
              id="title"
              type="text"
              placeholder="Title"
              value={value.title}
              onChange={(e) => { onTitleChange(e) }}
              className={editInputStyles}
            />
          </div>
          <div className={editSectionStyles}>
            <label htmlFor="content" className={editLabelStyles}>Content</label>
            <input
              id="content"
              type="text"
              placeholder="Paste content here!"
              value={value.content}
              onChange={(e) => { onContentChange(e) }}
              className={editInputStyles}
            />
          </div>
        </div>
        <button type="submit" className="flex items-center justify-center flex-shrink-0 border-2 w-full rounded-3xl h-10 border-blue text-blue hover:bg-blue hover:text-white transition">
          Save Changes
        </button>
      </form>
    </div>
  )
}

export default EditModal;