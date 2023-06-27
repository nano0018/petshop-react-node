import {ReactComponent as Logo} from "@assets/logo-omega-nav.svg"
function Navbar() {
  return (
    <nav className="top-0 flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light bg-white">
      <ul className="flex items-center gap-5">
        <li className="flex justify-between items-center gap-2">
          <Logo className="w-28 h-auto"/>
        </li>
        <li>Productos</li>
        <li>Mis órdenes</li>
        <li>Mi perfil</li>
        <li>Iniciar sesión</li>
      </ul>
    </nav>
  );
}

export default Navbar;
