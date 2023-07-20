import {
  ArchiveBoxArrowDownIcon,
  Bars3Icon,
  ClipboardDocumentListIcon,
  TagIcon,
  UserPlusIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

function AdminPanelSidebar() {
  const [isHidden, setIsHidden] = useState(true);
  const itemClass =
    "flex items-center gap-2 text-gray hover:text-black transition delay-10 ease-in cursor-pointer";
  const textClass = `${isHidden ? "hidden" : ""} md:block`;
  return (
    <div className={`flex flex-col w-auto h-[calc(100vh)] px-4 text-2xl shadow-md shadow-light_gray md:shadow-none fixed top-16 md:relative bg-white`}>
      <div className="flex flex-row gap-2 items-center">
        <Bars3Icon className="h-8 cursor-pointer" onClick={() => setIsHidden(!isHidden)}/>
        <p className={`font-extrabold ${textClass}`}>Panel de gestión</p>
      </div>
      <ul>
        <li className={`${itemClass}`}>
          <UserPlusIcon className="h-8" />
          <p className={`${textClass}`}>Usuarios</p>
        </li>
        <li className={`${itemClass}`}>
          <UsersIcon className="h-8" />
          <p className={`${textClass}`}>Clientes</p>
        </li>
        <li className={`${itemClass}`}>
          <ArchiveBoxArrowDownIcon className="h-8" />
          <p className={`${textClass}`}>Productos</p>
        </li>
        <li className={`${itemClass}`}>
          <TagIcon className="h-8" />
          <p className={`${textClass}`}>Categorías de productos</p>
        </li>
        <li className={`${itemClass}`}>
          <ClipboardDocumentListIcon className="h-8" />
          <p className={`${textClass}`}>Órdenes</p>
        </li>
      </ul>
    </div>
  );
}

export default AdminPanelSidebar;
