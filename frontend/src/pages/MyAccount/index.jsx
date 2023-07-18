import { GlobalContext } from "@context/GlobalContext";
import { LockOpenIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import { callUserData } from "@hooks/useLogin";
import {
  renderError,
  statusCodeValidation,
  updateUserData,
} from "@utils/requestHandler";
import { useContext, useEffect, useState } from "react";

function MyAccount() {
  const context = useContext(GlobalContext);
  const [message, setMessage] = useState("hidden");
  const [code, setCode] = useState("");
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    id: "",
  });
  const [disableEditUser, setDisableEditUser] = useState(true);

  const { name, lastName, id } = user;
  const toggleEdit = () => {
    setDisableEditUser(false);
  };

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const updateUser = async () => {
    const response = await updateUserData(id, {
      name,
      lastName,
    });
    if (!statusCodeValidation(response)) {
      setCode(renderError(response));
      setMessage("");
      setTimeout(() => {
        setCode("");
        setMessage("hidden");
      }, 4000);
    } else {
      setMessage("");
      setCode("Se ha actualizado los datos con éxito");
      setTimeout(() => {
        setCode("");
        setMessage("hidden");
      }, 4000);
    }
  };

  const openChangePasswordModal = () => {
    context.setIsChangePasswordModalOpened(true)
  }
  useEffect(() => {
    setUser({ ...callUserData() });
  }, []);

  return (
    <div
      className={`flex justify-center items-center flex-col fixed top-0 right-0 h-[100vh] w-[100vw] `}
    >
        <p
          className={`${message} text-center text-sm bg-light_salmon text-black_blue rounded-md px-1`}
        >
          {code}
        </p>
      <div className="flex justify-center items-center flex-col p-4 w-80 h-auto bg-white rounded-lg shadow-light_salmon shadow-lg">

        <section className="flex relative justify-center items-center flex-col pb-2 w-full h-auto bg-white rounded-md border border-gray/25">
          <p className="absolute top-[-14px] left-2 bg-white text-gray">
            Bienvenido: <span className="text-black">{name}</span>
          </p>
          <label htmlFor="name" className="text-left w-full pl-5 mt-4">
            Nombre:
          </label>
          <input
            className={`${
              disableEditUser ? "text-gray" : "text-black"
            } border border-border_light_gray rounded-md h-8 px-2 w-[calc(100%-2rem)] placeholder:italic focus:border-salmon focus:outline-none`}
            type="name"
            name="name"
            id="name"
            value={name}
            placeholder="Nombre"
            onChange={onChange}
            required
            disabled={disableEditUser}
          />
          <label htmlFor="lastName" className="text-left w-full pl-5 mt-4">
            Apellido:
          </label>
          <input
            className={`${
              disableEditUser ? "text-gray" : "text-black"
            } border border-border_light_gray rounded-md h-8 px-2 w-[calc(100%-2rem)] placeholder:italic focus:border-salmon focus:outline-none`}
            type="lastName"
            name="lastName"
            id="lastName"
            value={lastName}
            placeholder="Apellido"
            onChange={onChange}
            required
            disabled={disableEditUser}
          />
          <div className="flex justify-end items-center w-[calc(100%-2rem)] h-auto mt-4">
            <button className="flex justify-center items-center rounded-md w-auto px-2 h-8 mr-2 bg-gray text-white transition delay-50 ease-in hover:bg-salmon"
            onClick={() => openChangePasswordModal()}>
              <LockOpenIcon className="h-4 w-4" />
              <p className="pl-2">Cambiar contraseña</p>
            </button>
            <button
              className={`${
                !disableEditUser ? "flex" : "hidden"
              } justify-center items-center rounded-md w-auto px-2 h-8 bg-gray text-white transition delay-50 ease-in hover:bg-salmon`}
              onClick={() => updateUser()}
            >
              <PencilSquareIcon className="h-4 w-4 " />
              <p className="pl-2">Guardar</p>
            </button>
            <button
              className={`${
                disableEditUser ? "flex" : "hidden"
              } justify-center items-center rounded-md w-auto px-2 h-8 bg-gray text-white transition delay-50 ease-in hover:bg-black_blue`}
              onClick={() => toggleEdit()}
            >
              <PencilSquareIcon className="h-4 w-4 " />
              <p className="pl-2">Editar</p>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MyAccount;
