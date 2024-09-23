import toast from "react-hot-toast"
import { sectionStyles } from "../../../../constants"
import { useCreateClipContext } from "../../../../context/CreateClip"
import { buttonStyles, inputStyles } from "./constants"

const ClipForm = () => {
  const { createClip, resetForm, value, onContentChange, onTitleChange } = useCreateClipContext()

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    createClip(value)
    toast("Clip created", { id: "create" })
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`${sectionStyles} flex-col gap-2`}>
      <div className="w-full flex items-center justify-between gap-4">
        <input
          type="text"
          placeholder="Title"
          value={value.title}
          onChange={(e) => { onTitleChange(e) }}
          className={inputStyles} />
        <div className="flex items-center justify-center gap-2">
          <button
            type="submit"
            className={buttonStyles}>
            <span className="material-symbols-outlined text-green">check</span>
          </button>
          <button
            type="button"
            onClick={resetForm}
            className={buttonStyles}>
            <span className="material-symbols-outlined text-red">close</span>
          </button>
        </div>
      </div>
      <input
        type="text"
        placeholder="Paste content here!"
        value={value.content}
        onChange={(e) => { onContentChange(e) }}
        className={inputStyles} />
    </form>
  )
}

export default ClipForm