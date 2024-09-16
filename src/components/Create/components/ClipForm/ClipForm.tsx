import { useAppContext } from "../../../../context"

const ClipForm = () => {
  const { selectedOptionType } = useAppContext()

  const inputStyles = "w-full h-10 pl-4 rounded-xl shadow-inner bg-background-gray transition-all hover:bg-background-sky focus:bg-background-sky outline-none"
  const buttonStyles = "w-10 h-10 flex items-center justify-center flex-shrink-0 rounded-full transition hover:bg-background-gray"

  return (
    <form className="w-full flex flex-col items-center justify-start gap-2 bg-background-white rounded-md p-2 shadow-sm">
      <div className="w-full flex items-center justify-between gap-4">
        <input id="clip-title" type="text" placeholder="Title" className={inputStyles} />
        <div className="flex items-center justify-center gap-2">
          <button className={buttonStyles}>
            <span className="material-symbols-outlined text-green">check</span>
          </button>
          <button className={buttonStyles}>
            <span className="material-symbols-outlined text-red">close</span>
          </button>
        </div>
      </div>
      <input id="clip-content" type="password" placeholder="Paste content here!" className={inputStyles} />
    </form>
  )
}

export default ClipForm