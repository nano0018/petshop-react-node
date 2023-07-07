import { ReactComponent as Logo } from "@assets/logo-omega-nav.svg";
import ProfileDropdown from "@components/ProfileDropdown";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="font-display top-0 flex justify-between items-center fixed z-10 w-full py-3 px-5 text-sm font-light bg-white h-11">
      <NavLink to="/"><Logo className="w-28 h-auto" /></NavLink>
      <ul className="flex items-center gap-5 text-xl">
        <li>
          <NavLink to="/">Productos</NavLink>
        </li>
        <li>
          <NavLink to="/my-orders">Mis órdenes</NavLink>
        </li>
        <li>
          <ProfileDropdown />
        </li>
        <li>
          <NavLink to="/login">Iniciar sesión</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
