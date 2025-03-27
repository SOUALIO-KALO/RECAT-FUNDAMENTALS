import "./App.css";
import { Logo } from "./components";
import { Navigation } from "./components";

const NavItems = {
  menu1: "Presentation",
  menu2: "Projects",
  menu3: "Contacts",
};

const App = () => {
  return (
    <>
      <header className="header">
        <section className="header__section">
          <Logo />
          <Navigation props={NavItems} />
        </section>
      </header>

      <p>Apprrendre React js</p>
    </>
  );
};

export default App;
