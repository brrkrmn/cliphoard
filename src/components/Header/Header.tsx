import { sectionStyles } from "../../constants";
import Logo from "./components/Logo/Logo";

const Header = () => {
  return (
    <div className={`${sectionStyles} justify-between z-50`}>
      <Logo />
      <button
        data-microtip-position="bottom"
        role="tooltip"
        aria-label="Settings"
        className="flex items-center justify-center rounded-full hover:bg-background-gray p-1 transition"
      >
        <span className="material-symbols-outlined w-6 h-6 text-foreground-black">settings</span>
      </button>
    </div>
  )
}

export default Header;