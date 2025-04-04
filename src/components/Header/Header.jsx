import "./Header.css";
import { Logo, Navigation } from "..";

/* const NavItems = {
  menu1: "Presentation",
  menu2: "Projects",
  menu3: "Contacts",
}; */

const Header = ({ props }) => {
  return (
    <header>
      <Logo />
      <Navigation props={{ items: props.NAV_ITEMS }} />
    </header>
  );
};

export default Header;
