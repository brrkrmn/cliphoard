import { sectionStyles } from "../../constants";
import { useClipContext } from "../../context/Clip";
import ClipCard from "./components/ClipCard/ClipCard";

const ClipList = () => {
  const { clips } = useClipContext();

  if (clips.length === 0) {
    return (
      <div className="mt-10 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center justify-center w-40 h-40 bg-white rounded-full shadow-sm">
          <img src="./icons/undraw-no-data.svg" className="w-28 h-28" />
        </div>
        <div className="text-gray text-lg">
          You don't have any clips yet.
        </div>
      </div>
    )
  } else {
    return (
      <div className={`${sectionStyles} overflow-scroll hidden-scrollbar justify-start flex-col pt-4 h-full pb-10 gap-3`}>
        {clips.map((clip) => (
          <ClipCard key={clip.id} clip={clip}/>
        ))}
      </div>
    )
  }
}

export default ClipList