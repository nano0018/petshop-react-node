import { LockClosedIcon } from "@heroicons/react/24/solid";
import { useCallback } from "react";
import { NavLink } from "react-router-dom";

function ForgotPassword() {
  const onClick = useCallback((e) => {
    e.preventDefault();
  });
  return (
    <div className="grid grid-cols-1 place-items-center w-full h-[calc(100vh-4rem)] text-lg">
      <form className="flex flex-col justify-around items-center h-[18rem] w-80 py-3 border border-border_light_gray rounded-lg shadow-md ">
        <legend className="flex flex-row justify-between items-center w-3/5">
          <LockClosedIcon className="h-6 w-6 text-light_gray" />
          <span>Recuperar contraseña</span>
        </legend>
        <p className="text-justify text-sm text-gray w-full px-10">
          Ingresa tu dirección de correo electrónico de recuperación
        </p>
        <div className="flex flex-col items-center w-full h-2/3">
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
          <div className="flex flex-row justify-around items-center w-5/6 mt-12 mb-2 px-2">
            <button
              className="rounded-md w-full h-8 bg-light_gray text-white transition delay-50 ease-in hover:bg-black_blue"
              onClick={onClick}
            >
              Recuperar contraseña
            </button>
          </div>
          <NavLink
            to="/login"
            className="font-bold text-gray transition delay-50 ease-in hover:text-black_blue"
          >
            Iniciar sesión
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
