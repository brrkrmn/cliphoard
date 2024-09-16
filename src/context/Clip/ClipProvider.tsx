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

  return (
    <ClipContext.Provider
      value={{
        clips,
        setClips,
      }}
    >
      {children}
    </ClipContext.Provider>
  )
}

export default ClipProvider