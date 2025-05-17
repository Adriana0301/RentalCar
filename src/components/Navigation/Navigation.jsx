import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

export const Navigation = () => {
  const getNavLinkClass = ({ isActive }) =>
    isActive ? `${s.navLink} ${s.navLinkActive}` : s.navLink;
  return (
    <nav className={s.NavigationWrapper}>
      <NavLink className={getNavLinkClass} to="/">
        Home
      </NavLink>
      <NavLink className={getNavLinkClass} to="/catalog">
        Catalog
      </NavLink>
    </nav>
  );
};
