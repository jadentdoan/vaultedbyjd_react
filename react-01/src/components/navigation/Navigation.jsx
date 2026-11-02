import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import "./Navigation.css";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef();
  const openedByHover = useRef(false);
  const { pathname } = useLocation();
  useEffect(() => () => clearTimeout(closeTimer.current), []);
  const changeServicesOpen = (open) => {
    clearTimeout(closeTimer.current);
    setServicesOpen(open);
  };
  const openOnHover = (event) => {
    if (event.pointerType !== "mouse") return;
    clearTimeout(closeTimer.current);
    if (!servicesOpen) openedByHover.current = true;
    setServicesOpen(true);
  };
  const closeOnLeave = (event) => {
    if (event.pointerType !== "mouse") return;
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 180);
  };
  const closeMenu = () => {
    setMenuOpen(false);
    changeServicesOpen(false);
  };
  return (
    <nav className="navigation">
      <button className="navigation__toggle" type="button" onClick={() => setMenuOpen(!menuOpen)}>
        Menu <span>{menuOpen ? "×" : "☰"}</span>
      </button>
      <ul className={`navigation__list${menuOpen ? " navigation__list--open" : ""}`} onClick={(event) => { if (event.target.closest("a")) closeMenu(); }}>
        <li>
          <NavLink className="navigation__link" to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <DropdownMenu.Root modal={false} open={servicesOpen} onOpenChange={changeServicesOpen}>
            <DropdownMenu.Trigger asChild>
              <button type="button" onPointerEnter={openOnHover} onPointerLeave={closeOnLeave} onKeyDown={() => { openedByHover.current = false; }} className={`navigation__link navigation__services${["/services", "/grading"].includes(pathname) ? " active" : ""}`}>
                Services
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="navigation__dropdown"
                sideOffset={8}
                collisionPadding={12}
                onPointerEnter={openOnHover}
                onPointerLeave={closeOnLeave}
                onKeyDown={() => { openedByHover.current = false; }}
                onOpenAutoFocus={(event) => { if (openedByHover.current) event.preventDefault(); }}
                onCloseAutoFocus={(event) => { if (openedByHover.current) event.preventDefault(); }}
              >
                <DropdownMenu.Item asChild onSelect={closeMenu}>
                  <NavLink className="navigation__dropdown-link" to="/services">Servicing area</NavLink>
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild onSelect={closeMenu}>
                  <NavLink className="navigation__dropdown-link" to="/grading">Grading</NavLink>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
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
