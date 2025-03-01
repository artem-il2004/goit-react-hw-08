import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import c from "./Navigation.module.css";


function Navigation() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); 

  return (
    <div className={c.container}>
      <NavLink to="/" className={({ isActive }) => clsx( isActive && c.active)}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={({ isActive }) => clsx(isActive && c.active)} to="/contacts">
          Contacts
        </NavLink>
      )}
    </div>
  );
}

export default Navigation;
