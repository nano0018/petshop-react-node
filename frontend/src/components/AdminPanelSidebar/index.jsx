import { GlobalContext } from "@context/GlobalContext";
import {
  ArchiveBoxArrowDownIcon,
  Bars3Icon,
  ClipboardDocumentListIcon,
  TagIcon,
  UserPlusIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

function AdminPanelSidebar() {
  const context = useContext(GlobalContext);
  const activeSection = context.activeSection;
  const [isHidden, setIsHidden] = useState(true);
  const itemClass =
    "flex items-center gap-2 hover:text-black transition delay-10 ease-in cursor-pointer";
  const textClass = `${isHidden ? "hidden" : ""} md:block`;
  return (
    <div
      className={`flex flex-col w-auto h-[calc(100vh)] px-4 text-2xl shadow-md shadow-light_gray md:shadow-none fixed top-16 left-0  bg-white`}
    >
      <div className="flex flex-row gap-2 items-center">
        <Bars3Icon
          className="h-8 cursor-pointer"
          onClick={() => setIsHidden(!isHidden)}
        />
        <p className={`font-extrabold ${textClass}`}>Panel de gestión</p>
      </div>
      <ul>
        <li
          className={`${itemClass} ${
            activeSection === "users" ? "text-black" : "text-gray"
          }`}
        >
          <NavLink to={"/admin/users"} className="flex flex-row gap-2">
          <UserPlusIcon className="h-8" />
          <p className={`${textClass}`}>Usuarios</p>
          </NavLink>
        </li>
        <li
          className={`${itemClass} ${
            activeSection === "customers" ? "text-black" : "text-gray"
          }`}
        >
          <NavLink to={"/admin/customers"} className="flex flex-row gap-2">
          <UsersIcon className="h-8" />
          <p className={`${textClass}`}>Clientes</p>
          </NavLink>
        </li>
        <li
          className={`${itemClass} ${
            activeSection === "products" ? "text-black" : "text-gray"
          }`}
        >
          <NavLink to={"/admin/products"} className="flex flex-row gap-2">
          <ArchiveBoxArrowDownIcon className="h-8" />
          <p className={`${textClass}`}>Productos</p>
          </NavLink>
        </li>
        <li
          className={`${itemClass} ${
            activeSection === "categories" ? "text-black" : "text-gray"
          }`}
        >
          <NavLink to={"/admin/categories"} className="flex flex-row gap-2">
            <TagIcon className="h-8" />
            <p className={`${textClass}`}>Categorías productos</p>
          </NavLink>
        </li>
        <li
          className={`${itemClass} ${
            activeSection === "orders" ? "text-black" : "text-gray"
          }`}
        >
          <NavLink to={"/admin/orders"} className="flex flex-row gap-2">
            <ClipboardDocumentListIcon className="h-8" />
            <p className={`${textClass}`}>Órdenes</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default AdminPanelSidebar;
