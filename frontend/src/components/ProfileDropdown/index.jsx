import { Fragment, useContext } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { NavLink } from "react-router-dom";
import {
  AdjustmentsHorizontalIcon,
  ArrowRightOnRectangleIcon,
  QueueListIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { signOut } from "@utils/requestHandler";
import { GlobalContext } from "@context/GlobalContext";
import { ROLES } from "@utils/auth/permissionsRoles";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProfileDropdown() {
  const context = useContext(GlobalContext);
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-1 py-2 text-xl text-gray hover:text-black_blue">
        <p className="hidden md:block">Perfil</p> <UserIcon className="h-6 md:hidden" />
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-light_gray rounded-md bg-white shadow-lg ring-1 ring-gray ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <NavLink
                  to="/my-account"
                  className={classNames(
                    active ? "text-black_blue" : "text-gray",
                    "flex flex-row justify-start items-center px-4 py-2 text-lg"
                  )}
                >
                  <UserCircleIcon
                    className={classNames(
                      active ? "text-black_blue" : "text-gray",
                      "h-6 w-6 mr-2"
                    )}
                  />
                  <span>Mi perfil</span>
                </NavLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <NavLink
                  to="/my-orders"
                  className={classNames(
                    active ? "text-black_blue" : "text-gray",
                    "flex flex-row justify-start items-center px-4 py-2 text-lg"
                  )}
                >
                  <QueueListIcon
                    className={classNames(
                      active ? "text-black_blue" : "text-gray",
                      "h-6 w-6 mr-2"
                    )}
                  />
                  <span>Mis órdenes</span>
                </NavLink>
              )}
            </Menu.Item>
            {ROLES.employees.includes(context.loginRole) && (
              <Menu.Item>
                {({ active }) => (
                  <NavLink
                    to="/admin"
                    className={classNames(
                      active ? "text-black_blue" : "text-gray",
                      "flex flex-row justify-start items-center px-4 py-2 text-lg"
                    )}
                  >
                    <AdjustmentsHorizontalIcon
                      className={classNames(
                        active ? "text-black_blue" : "text-gray",
                        "h-6 w-6 mr-2"
                      )}
                    />
                    <span>Panel de administración</span>
                  </NavLink>
                )}
              </Menu.Item>
            )}
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <NavLink
                  to="/"
                  className={classNames(
                    active ? "text-black_blue" : "text-gray",
                    "flex flex-row justify-start items-center px-4 py-2 text-lg"
                  )}
                  onClick={() => {
                    signOut();
                    context.setIsLoggedIn(false);
                    context.setUserId("");
                  }}
                >
                  <ArrowRightOnRectangleIcon
                    className={classNames(
                      active ? "text-black_blue" : "text-gray",
                      "h-6 w-6 mr-2"
                    )}
                  />
                  <span>Cerrar sesión</span>
                </NavLink>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
