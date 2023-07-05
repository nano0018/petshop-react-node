import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import { useCallback } from "react";
import { NavLink } from "react-router-dom";

function SignIn() {
  const onClick = useCallback((e) => {
    e.preventDefault();
  });
  return (
    <div className="grid grid-cols-1 place-items-center w-full h-[calc(100vh-4rem)] text-lg">
      <form className="flex flex-col justify-around items-center h-[22rem] w-80 py-3 border border-border_light_gray rounded-lg shadow-md ">
        <legend className="flex flex-row justify-between items-center w-2/5">
          <ArrowLeftOnRectangleIcon className="h-6 w-6 text-light_gray" />
          <span>Iniciar sesión</span>
        </legend>
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
          <p className="flex flex-col justify-between w-3/4">
            <label htmlFor="password">Contraseña:</label>
            <input
              className="border border-border_light_gray rounded-md h-8 px-2 placeholder:italic focus:border-salmon focus:outline-none"
              type="password"
              name="password"
              id="password"
            />
          </p>
          <NavLink to="/forgot-password" className="font-bold">
            ¿Ha olvidado su contraseña?
          </NavLink>
          <div className="flex flex-row justify-around items-center w-5/6 mt-10 p-0">
            <NavLink to="/sign-up" className="font-bold text-gray transition delay-50 ease-in hover:text-black_blue">
              Crear cuenta
            </NavLink>
            <button
              className="rounded-md w-2/4 h-8 bg-light_gray text-white transition delay-50 ease-in hover:bg-black_blue"
              onClick={onClick}
            >
              Iniciar sesión
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
