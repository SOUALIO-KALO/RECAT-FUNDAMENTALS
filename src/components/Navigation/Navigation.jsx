import { NavLink } from "react-router";
import "./Navigation.css";

const Navigation = ({ props }) => {
  return (
    <>
      <nav className="navigation">
        <ul className="navigation__list">
          {props.items.map((item, index) => (
            <NavLink to={item.link} key={index}>
              {item.title}
            </NavLink>
          ))}
          {/* <li className="navigation__item">
            <a href="#" className="navigation__link">
              {menu1}
            </a>
          </li> */}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
