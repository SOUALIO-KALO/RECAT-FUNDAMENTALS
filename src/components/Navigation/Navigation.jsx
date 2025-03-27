import "./Navigation.css";

const Navigation = ({ props }) => {
  const { menu1, menu2, menu3 } = props;
  return (
    <>
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              {menu1}
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              {menu2}
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              {menu3}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
