import { createContext, useContext, useEffect, useState } from "react";
import { Clip, ClipContextValue } from "./ClipProvider.types";

export const ClipContext = createContext<ClipContextValue>(null);

export const useClipContext = () => {
  const context = useContext(ClipContext);
  if (context === null) {
    throw new Error("You can only call this hook inside ClipProvider")
  }
  return context;
}

const ClipProvider = ({ children }: { children: React.ReactNode }) => {
  const [clips, setClips] = useState<Clip[]>([]);

  useEffect(() => {
    getClips()
  }, [])

  const getClips = () => {
    chrome.storage.local.get('clips', (result) => {
      const storedClips = result.clips || []
      setClips(storedClips)
    })
  }

  const saveClips = (clips: Clip[]) => {
    chrome.storage.local.set({ clips: clips }, () => {
      getClips()
    })
  }

  const addClipToDB = (clip: Clip) => {
    const newClips = [...clips, clip]
    saveClips(newClips)
  }

  const deleteClip = (clip: Clip) => {
    chrome.storage.local.clear();
    const newClips = clips.filter(c => c.id !== clip.id)
    saveClips(newClips)
  }

  const editClip = (clip: Clip) => {
    const newClips = clips
    const clipIndex = clips.findIndex((c) => c.id === clip.id);
    if (clipIndex !== -1) {
      newClips[clipIndex] = clip
    }
    saveClips(newClips)
  }

  return (
    <ClipContext.Provider
      value={{
        clips,
        addClipToDB,
        deleteClip,
        editClip,
      }}
    >
      {children}
    </ClipContext.Provider>
  )
}

export default ClipProvider