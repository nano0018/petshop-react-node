import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import { useCallback } from "react";

function SignIn() {
  const onClick = useCallback((e) => {
    e.preventDefault();
  });
  return (
    <div className="grid grid-cols-1 place-items-center w-full h-[calc(100vh-4rem)]">
      <form className="flex flex-col justify-around items-center h-[20rem] w-80 py-3 border border-border_light_gray rounded-lg shadow-md ">
        <legend className="flex flex-row justify-between items-center w-1/3">
          <ArrowLeftOnRectangleIcon className="h-6 w-6 text-light_gray" />
          <span>Iniciar sesión</span>
        </legend>
        <div className="flex flex-col items-center w-full h-2/3">
          <p className="flex flex-col justify-between w-2/3">
            <label htmlFor="email">Email:</label>
            <input
              className="border border-border_light_gray rounded-md h-8 px-2 placeholder:italic"
              type="email"
              name="email"
              id="email"
              placeholder="Correo electrónico"
            />
          </p>
          <p className="flex flex-col justify-between w-2/3">
            <label htmlFor="password">Contraseña:</label>
            <input
              className="border border-border_light_gray rounded-md h-8 px-2 placeholder:italic"
              type="password"
              name="password"
              id="password"
            />
          </p>
          <a href="/">¿Ha olvidado su contraseña?</a>
          <button
            className="rounded-md w-1/3 h-8 bg-light_gray text-white transition delay-50 ease-in hover:bg-black_blue mt-8"
            onClick={onClick}
          >
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
