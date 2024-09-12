import Logo from "./components/Logo/Logo";

const Header = () => {
  return (
    <div className="shadow-sm flex items-center justify-between bg-background-white rounded-xl p-2">
      <Logo />
      <button className="flex items-center justify-center rounded-full hover:bg-background-gray p-1 transition">
        <i className="material-icons-outlined w-6 h-6 text-foreground-black">settings</i>
      </button>
    </div>
  )
}

export default Header;