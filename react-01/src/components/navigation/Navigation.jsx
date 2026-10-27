import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li>
          <NavLink className="navigation__link" to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navigation__link" to="/services">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink className="navigation__link" to="/vault">
            The Vault
          </NavLink>
        </li>
        <li>
          <NavLink className="navigation__link" to="/live">
            Live Shows
          </NavLink>
        </li>
        <li>
          <NavLink className="navigation__link" to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
