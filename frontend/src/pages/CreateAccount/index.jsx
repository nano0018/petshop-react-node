import { UserPlusIcon } from "@heroicons/react/24/solid";
import { useCallback } from "react";
import { NavLink } from "react-router-dom";

function CreateAccount() {
  const onClick = useCallback((e) => {
    e.preventDefault();
  });
  return (
    <div className="grid grid-cols-1 place-items-center w-full h-[calc(100vh-4rem)] text-lg">
      <form className="flex flex-col justify-around items-center h-[26rem] w-80 py-3 border border-border_light_gray rounded-lg shadow-md ">
        <legend className="flex flex-row justify-between items-center w-2/5">
          <UserPlusIcon className="h-6 w-6 text-light_gray" />
          <span>Crear cuenta</span>
        </legend>
        <p className="text-left text-sm text-salmon">*Todos los campos son obligatorios</p>
        <div className="flex flex-col items-center w-full h-2/3">
          <p className="flex flex-col justify-between w-3/4">
            <input
              className="border border-border_light_gray rounded-md h-8 px-2 mb-1 placeholder:italic focus:border-salmon focus:outline-none"
              type="name"
              name="name"
              id="name"
              placeholder="Nombre"
              required
            />
          </p>
          <p className="flex flex-col justify-between w-3/4">
            <input
              className="border border-border_light_gray rounded-md h-8 px-2 placeholder:italic focus:border-salmon focus:outline-none"
              type="lastName"
              name="lastName"
              id="lastName"
              placeholder="Apellido"
              required
            />
          </p>
          <p className="flex flex-col justify-between w-3/4">
            <label htmlFor="email">Email:</label>
            <input
              className="border border-border_light_gray rounded-md h-8 px-2 placeholder:italic focus:border-salmon focus:outline-none"
              type="email"
              name="email"
              id="email"
              placeholder="Correo electrónico"
            />
          </p>
          <p className="flex flex-col justify-between w-3/4">
            <label htmlFor="password">Contraseña:</label>
            <input
              className="border border-border_light_gray rounded-md h-8 px-2 placeholder:italic focus:border-salmon focus:outline-none"
              type="password"
              name="password"
              id="password"
            />
          </p>
          <div className="flex flex-row justify-around items-center w-5/6 mt-4 p-0">
            <button
              className="rounded-md w-3/4 h-8 bg-light_gray text-white transition delay-50 ease-in hover:bg-black_blue"
              onClick={onClick}
            >
              Crear cuenta
            </button>
          </div>
          <NavLink to="/login" className="font-bold text-gray transition delay-50 ease-in hover:text-black_blue">
            Iniciar sesión
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default CreateAccount;
