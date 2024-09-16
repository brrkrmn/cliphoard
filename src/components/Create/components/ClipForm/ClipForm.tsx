import { useAppContext } from "../../../../context"
import { buttonStyles, inputStyles } from "./constants"

const ClipForm = () => {
  const { createClip, resetForm, value, updateContent, updateTitle } = useAppContext()

  return (
    <form
      onSubmit={() => createClip(value)}
      className="w-full flex flex-col items-center justify-start gap-2 bg-background-white rounded-md p-2 shadow-sm">
      <div className="w-full flex items-center justify-between gap-4">
        <input
          type="text"
          placeholder="Title"
          value={value.title}
          onChange={(e) => { updateTitle(e) }}
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
        onChange={(e) => { updateContent(e) }}
        className={inputStyles} />
    </form>
  )
}

export default ClipForm