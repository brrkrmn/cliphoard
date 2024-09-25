import { sectionStyles } from "../../constants";
import Logo from "./components/Logo/Logo";

const Header = () => {
  return (
    <div className={`${sectionStyles} justify-between z-50`}>
      <Logo />
    </div>
  )
}

export default Header;