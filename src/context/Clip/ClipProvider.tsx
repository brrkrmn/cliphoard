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

  return (
    <ClipContext.Provider
      value={{
        clips,
        getClips,
      }}
    >
      {children}
    </ClipContext.Provider>
  )
}

export default ClipProvider