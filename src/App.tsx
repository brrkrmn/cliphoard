import Create from "./components/Create/Create";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="w-full h-full p-4 flex flex-col gap-4 bg-background-gray">
      <Header />
      <Create />
    </div>
  )
}

export default App;