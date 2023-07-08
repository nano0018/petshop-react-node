import { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import { changePassword, statusCodeValidation } from "@utils/auth/loginHandler";
import { useLocation } from "react-router-dom";

function ChangePassword() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [message, setMessage] = useState("Ingresa la nueva contraseña");
  const onClick = async (e) => {
    e.preventDefault();
    if (password !== repeatedPassword) {
      return setMessage("Las contraseñas no coinciden");
    }
    const response = await changePassword(token, password);
    if (!statusCodeValidation(response)) {
      setMessage("Ha ocurrido un error");
    }

    if (!password) {
      setMessage("Completa todos los campos");
    }

    if (statusCodeValidation(response)) {
      setMessage("Se ha cambiado la contraseña con éxito");
    }
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeRepeatedPassword = (e) => {
    setRepeatedPassword(e.target.value);
  };
  return (
    <div className="grid grid-cols-1 place-items-center w-full h-[calc(100vh-4rem)] text-lg">
      <form className="flex flex-col justify-around items-center h-auto w-80 py-3 border border-border_light_gray rounded-lg shadow-md ">
        <legend className="flex flex-row justify-between items-center w-3/5">
          <LockClosedIcon className="h-6 w-6 my-4 text-gray" />
          <span>Recuperar contraseña</span>
        </legend>
        <p className="text-sm text-gray w-full px-10 text-center">{message}</p>
        <div className="flex flex-col items-center w-full h-2/3 my-4">
          <p className="flex flex-col justify-between w-3/4">
            <label htmlFor="email">Nueva contraseña:</label>
            <input
              className="border border-border_light_gray rounded-md h-8 px-2 placeholder:italic focus:border-salmon focus:outline-none"
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="Contraseña"
              onChange={onChangePassword}
              required
            />
            <label htmlFor="email">Repita la contraseña:</label>
            <input
              className="border border-border_light_gray rounded-md h-8 px-2 placeholder:italic focus:border-salmon focus:outline-none"
              type="password"
              name="repeatedPassword"
              id="repeatedPassword"
              placeholder="Repita la contraseña"
              value={repeatedPassword}
              onChange={onChangeRepeatedPassword}
              required
            />
          </p>
          <div className="flex flex-row justify-around items-center w-5/6 mt-5 mb-2 px-2">
            <button
              className="rounded-md w-full h-8 bg-gray text-white transition delay-50 ease-in hover:bg-black_blue"
              onClick={onClick}
            >
              Cambiar contraseña
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ChangePassword;
