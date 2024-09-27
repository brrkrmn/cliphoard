import toast from "react-hot-toast"
import { useCreateClipContext } from "../../context/CreateClip"

const ClipForm = () => {
  const { createClip, resetForm, value, onContentChange, onTitleChange } = useCreateClipContext()

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (value.title === "") {
      toast.error("Title is missing", { id: "no-title" })
    } else if (value.content === "") {
      toast.error("Content is missing", { id: "no-content" })
    } else {
      createClip(value)
      toast("Clip created", { id: "create" })
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="section flex-col gap-2">
      <div className="w-full flex items-center justify-between gap-4">
        <input
          type="text"
          placeholder="Title"
          value={value.title}
          onChange={(e) => { onTitleChange(e) }}
          className="input" />
        <div className="flex items-center justify-center gap-2">
          <button
            type="submit"
            className="iconButton">
            <span className="material-symbols-outlined text-green">check</span>
          </button>
          <button
            type="button"
            onClick={resetForm}
            className="iconButton">
            <span className="material-symbols-outlined text-red">close</span>
          </button>
        </div>
      </div>
      <input
        type="text"
        placeholder="Paste content here!"
        value={value.content}
        onChange={(e) => { onContentChange(e) }}
        className="input" />
    </form>
  )
}

export default ClipForm