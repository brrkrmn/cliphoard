import { createContext, useContext, useState } from "react";
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

  const getClips = () => {
    chrome.storage.local.get('clips', (result) => {
      const storedClips = result.clips || []
      setClips(storedClips)
    })
  }

  const addClipToDB = (clip: Clip) => {
    const newClips = [...clips, clip]
    chrome.storage.local.set({ clips: newClips }, () => {
      getClips()
    })
  }

  const deleteClip = (clip: Clip) => {
    chrome.storage.local.clear();
    const newClips = clips.filter(c => c.id !== clip.id)
    chrome.storage.local.set({ clips: newClips }, () => {
      getClips()
    })
  }

  return (
    <ClipContext.Provider
      value={{
        clips,
        getClips,
        addClipToDB,
        deleteClip,
      }}
    >
      {children}
    </ClipContext.Provider>
  )
}

export default ClipProvider