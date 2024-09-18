import { clipVariants } from "../../../../constants";
import { useClipContext } from "../../../../context/Clip";
import { Clip } from "../../../../context/Clip/ClipProvider.types";


const ClipCard = ({ clip }: { clip: Clip }) => {
  const { deleteClip } = useClipContext();

  const clipVariant = clipVariants.find((variant) => variant.type === clip.variant)

  return (
    <div className="group h-14 w-full flex items-center justify-between flex-shrink-0">
      <button className={`border-[1px] ${clipVariant?.borderStyle} px-3 rounded-3xl h-full group-hover:w-[80%] transition-all w-full flex items-center gap-2 group-hover:bg-gradient-to-r from-transparent ${clipVariant?.cardStyles} from-30% via-100%`}>
        <span className={`material-symbols-outlined w-6 h-6 ${clipVariant?.textStyle}`}>{clipVariant?.icon}</span>
        <div className="flex flex-col items-start justify-center w-[70%]">
          <div className="group-hover:hidden duration-300 text-base text-left font-semibold text-foreground-black w-full truncate">
            {clip.title}
          </div>
          <div className="group-hover:text-base transition-all text-left text-xs text-foreground-gray w-full truncate">
            {clip.content}
          </div>
        </div>
        <div className={`ml-auto w-8 h-8 flex items-center justify-center transition`}>
          <span className="material-symbols-outlined text-foreground-gray transition group-hover:text-foreground-white">content_copy</span>
        </div>
      </button>
      <div className="hidden w-20 group-hover:flex transition-all duration-300 delay-500 items-center justify-center gap-1">
        <button className="flex w-8 transition items-center justify-center rounded-full hover:bg-background-gray h-8">
          <span className="material-symbols-outlined text-foreground-gray">more_vert</span>
        </button>
        <button onClick={() => deleteClip(clip)} className="flex w-8 transition items-center justify-center rounded-full hover:bg-background-gray h-8">
          <span className="material-symbols-outlined text-foreground-gray">delete</span>
        </button>
      </div>
    </div>
  )
}

export default ClipCard;