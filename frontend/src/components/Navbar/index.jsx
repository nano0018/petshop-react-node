import { ReactComponent as Logo } from "@assets/logo-omega-nav.svg";
import { ReactComponent as MobileLogo } from "@assets/logo-omega-nav-mobile.svg";
import ProfileDropdown from "@components/ProfileDropdown";
import { GlobalContext } from "@context/GlobalContext";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  const context = useContext(GlobalContext);
  const openProductCart = () => {
    context.setIsProductDetailOpened(false);
    context.setIsProductCartOpened(true);
  };
  return (
    <nav className="font-display top-0 flex justify-between items-center fixed z-10 w-full py-3 px-5 text-sm font-light bg-white h-11">
      <NavLink to="/">
        <Logo className="w-28 h-auto hidden md:block" />
        <MobileLogo className="w-11 h-auto md:hidden" />
      </NavLink>
      <ul className="flex items-center gap-4 text-xl">
        <li>
          <NavLink to="/">Productos</NavLink>
        </li>
        {context.isLoggedIn && (
          <li>
            <ProfileDropdown />
          </li>
        )}
        {!context.isLoggedIn && (
          <li>
            <NavLink to="/login">Iniciar sesión</NavLink>
          </li>
        )}
        <li>
          <div
            className="flex items-center gap-2 w-8 cursor-pointer"
            onClick={() => openProductCart()}
          >
            <ShoppingCartIcon className="h-6 text-light_salmon hover:text-salmon transition delay-50 ease-in active:scale-125" />
            <div className="flex items-center justify-center bg-black_blue rounded-full absolute top-1 right-6 p-1 text-xs w-4 h-4 text-center">
              <p className="text-white">{context.cartProductCount}</p>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
