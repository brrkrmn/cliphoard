import Actions from "./components/Actions/Actions";
import ClipList from "./components/ClipList/ClipList";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Toast from "./components/Toast/Toast";

const App = () => {
  return (
    <div className="w-full h-full p-4 flex flex-col gap-4 bg-gray-light">
      <Header />
      <Actions />
      <ClipList />
      <Modal />
      <Toast />
    </div>
  )
}

export default App;