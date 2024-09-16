import ClipList from "./components/ClipList/ClipList";
import Create from "./components/Create/Create";
import Header from "./components/Header/Header";
import CreateClipProvider from "./context/CreateClip/CreateClipProvider";

const App = () => {
  return (
    <div className="w-full h-full p-4 flex flex-col gap-4 bg-background-gray">
      <Header />
      <CreateClipProvider>
        <Create />
      </CreateClipProvider>
      <ClipList />
    </div>
  )
}

export default App;