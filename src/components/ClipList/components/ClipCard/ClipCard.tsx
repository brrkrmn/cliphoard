import { clipVariants } from "../../../../constants";
import { Clip } from "../../../../context/Clip/ClipProvider.types";


const ClipCard = ({ clip }: { clip: Clip }) => {
  const clipVariant = clipVariants.find((variant) => variant.type === clip.variant)

  return (
    <div className={`border-[1px] ${clipVariant?.borderStyle} p-2 rounded-3xl w-full flex items-center`}>
      <span className={`material-symbols-outlined w-6 h-6 ${clipVariant?.textStyle}`}>{clipVariant?.icon}</span>
      <div>{clip.title}</div>
      <button className={`ml-auto w-8 h-8 flex items-center justify-center rounded-full hover:bg-background-gray p-1 transition`}>
        <span className="material-symbols-outlined text-foreground-gray">content_copy</span>
      </button>
    </div>
  )
}

export default ClipCard;