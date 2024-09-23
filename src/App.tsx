import ClipList from "./components/ClipList/ClipList";
import Create from "./components/Create/Create";
import EditModal from "./components/EditModal/EditModal";
import Header from "./components/Header/Header";
import { useClipContext } from "./context/Clip";

const App = () => {
  const { isModalOpen } = useClipContext();

  return (
    <div className="w-full h-full p-4 flex flex-col gap-4 bg-background-gray">
      <Header />
      <Create />
      <ClipList />
      {isModalOpen && <EditModal />}
    </div>
  )
}

export default App;