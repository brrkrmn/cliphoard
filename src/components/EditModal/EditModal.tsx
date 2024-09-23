import { sectionStyles } from "../../constants";
import { useClipContext } from "../../context/Clip";
import { Clip } from "../../context/Clip/ClipProvider.types";
import { useCreateClipContext } from "../../context/CreateClip";
import VariantList from "../Create/components/VariantList/VariantList";

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
  }

  return (
    <div className="border-2 p-4 pt-[76px] absolute top-0 left-0 w-full h-full backdrop-blur-sm flex items-start justify-center">
      <form onSubmit={handleSubmit} className={`${sectionStyles} flex-col px-4 justify-between h-full gap-4`}>
        <div className="flex items-center justify-between w-full">
          <h1 className="font-bold text-foreground-blue">Edit Clip</h1>
          <button onClick={toggleEditModal} className="ml-auto w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0 text-foreground-gray hover:text-foreground-blue hover:bg-background-sky transition">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="w-full h-full flex flex-col items-center justify-start gap-2">
          <div className="w-full flex flex-col gap-2 items-start justify-center rounded-xl bg-background-sky shadow-inner p-2">
            <p className="text-sm font-semibold text-foreground-blue">Variant</p>
            <VariantList />
          </div>
          <div className="w-full flex flex-col gap-2 items-start justify-center rounded-xl bg-background-sky shadow-inner p-2">
            <label htmlFor="title" className="w-full text-sm font-semibold text-foreground-blue">Title</label>
            <input
              id="title"
              type="text"
              placeholder="Title"
              value={value.title}
              onChange={(e) => { onTitleChange(e) }}
              className="bg-transparent w-full h-6 font-medium outline-none truncate"
            />
          </div>
          <div className="w-full flex flex-col gap-2 items-start justify-center rounded-xl bg-background-sky shadow-inner p-2">
            <label htmlFor="content" className="w-full text-sm font-semibold text-foreground-blue">Content</label>
            <input
              id="content"
              type="text"
              placeholder="Paste content here!"
              value={value.content}
              onChange={(e) => { onContentChange(e) }}
              className="bg-transparent w-full h-6 font-medium outline-none truncate"
            />
          </div>
        </div>
        <button type="submit" className="flex items-center justify-center flex-shrink-0 border-2 w-full rounded-3xl h-10 border-blue text-foreground-blue hover:bg-background-blue hover:text-foreground-white transition">
          Save Changes
        </button>
      </form>
    </div>
  )
}

export default EditModal;