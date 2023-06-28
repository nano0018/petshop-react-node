import { ReactComponent as Logo } from "@assets/logo-omega-nav.svg";
function Navbar() {
  return (
    <nav className="font-display top-0 flex justify-between items-center fixed z-10 w-full py-3 px-5 text-sm font-light bg-white">
      <Logo className="w-28 h-auto" />
      <ul className="flex items-center gap-5">
        <li>Productos</li>
        <li>Mis órdenes</li>
        <li>Mi perfil</li>
        <li>Iniciar sesión</li>
      </ul>
    </nav>
  );
}

export default Navbar;
