import { sectionStyles } from "../../constants";

const EditModal = () => {
  return (
    <div className="border-2 p-4 pt-[76px] absolute top-0 left-0 w-full h-full backdrop-blur-sm flex items-start justify-center">
      <div className={`${sectionStyles} flex-col justify-between h-full gap-4`}>
        <div className="flex items-center justify-between w-full">
          <h1 className="ml-2 font-bold text-foreground-blue ">Edit Clip</h1>
          <button className="ml-auto w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0 text-foreground-gray hover:text-foreground-blue hover:bg-background-sky transition">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="w-full h-full">content</div>
        <button className="flex-shrink-0 border-2 w-full rounded-3xl h-10 text-foreground-blue hover:bg-background-sky transition">
          Save Changes
        </button>
      </div>
    </div>
  )
}

export default EditModal;