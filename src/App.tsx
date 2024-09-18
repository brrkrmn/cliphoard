import { useEffect } from "react";
import ClipList from "./components/ClipList/ClipList";
import Create from "./components/Create/Create";
import EditModal from "./components/EditModal/EditModal";
import Header from "./components/Header/Header";
import { useClipContext } from "./context/Clip";
import CreateClipProvider from "./context/CreateClip/CreateClipProvider";

const App = () => {
  const { getClips, isModalOpen } = useClipContext();

  useEffect(() => {
    getClips()
  }, [])

  return (
    <div className="w-full h-full p-4 flex flex-col gap-4 bg-background-gray">
      <Header />
      <CreateClipProvider>
        <Create />
      </CreateClipProvider>
      <ClipList />
      {isModalOpen && <EditModal />}
    </div>
  )
}

export default App;