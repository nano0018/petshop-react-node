import { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { recoveryPassword, statusCodeValidation } from "@utils/requestHandler";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(
    "Ingresa tu dirección de correo electrónico de recuperación"
  );
  const onClick = async (e) => {
    e.preventDefault();
    const response = await recoveryPassword(email);
    if (!statusCodeValidation(response)) {
      setMessage(
        "Se ha enviado un enlace de recuperación a tu correo electrónico"
      );
    }

    if (!email) {
      setMessage(
        "Ingrese su dirección de correo electrónico para recuperar su contraseña"
      );
    }
  };
  const onChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className="grid grid-cols-1 place-items-center w-full h-[calc(100vh-4rem)] text-lg">
      <form className="flex flex-col justify-around items-center h-[18rem] w-80 py-3 border border-border_light_gray rounded-lg shadow-md ">
        <legend className="flex flex-row justify-between items-center w-3/5">
          <LockClosedIcon className="h-6 w-6 text-gray" />
          <span>Recuperar contraseña</span>
        </legend>
        <p className="text-justify text-sm text-gray w-full px-10">{message}</p>
        <div className="flex flex-col items-center w-full h-2/3">
          <p className="flex flex-col justify-between w-3/4">
            <label htmlFor="email">Email:</label>
            <input
              className="border border-border_light_gray rounded-md h-8 px-2 placeholder:italic focus:border-salmon focus:outline-none"
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="Correo electrónico"
              onChange={onChange}
              required
            />
          </p>
          <div className="flex flex-row justify-around items-center w-5/6 mt-12 mb-2 px-2">
            <button
              className="rounded-md w-full h-8 bg-gray text-white transition delay-50 ease-in hover:bg-black_blue"
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
