import { GlobalContext } from "@context/GlobalContext";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { callUserData } from "@hooks/useLogin";
import {
  renderError,
  statusCodeValidation,
  updateUserData,
} from "@utils/requestHandler";
import { useContext, useEffect, useState } from "react";

function ChangePasswordModal() {
  const context = useContext(GlobalContext);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("hidden");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState("");

  const toggleChangePasswordModal = () => {
    context.setIsChangePasswordModalOpened(
      !context.isChangePasswordModalOpened
    );
  };

  const updatePassword = async () => {
    if (repeatPassword !== password) {
      setMessage("");
      setCode("Las contraseñas no coinciden");
      setTimeout(() => {
        setCode("");
        setMessage("hidden");
      }, 4000);
      return;
    }
    const response = await updateUserData(id, {
      password,
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
        toggleChangePasswordModal();
        setRepeatPassword("");
        setPassword("");
      }, 4000);
    }
  };

  const onChange = (e) => {
    setPassword(e.target.value);
  };

  const onChangeRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  useEffect(() => {
    setId(callUserData().id);
  }, [context.isChangePasswordModalOpened]);

  return (
    <>
      <div
        className={`${
          context.isChangePasswordModalOpened ? "flex" : "hidden"
        } justify-center items-center flex-col fixed top-0 right-0 h-[100vh] w-[100vw] border border-t-light_gray rounded-lg backdrop-blur-lg bg-black_blue/80 `}
      ></div>
      <div
        className={`${
          context.isChangePasswordModalOpened ? "flex" : "hidden"
        } justify-center items-center flex-col fixed top-0 right-0 h-[100vh] w-[100vw] border border-t-light_gray rounded-lg`}
        onClick={() => toggleChangePasswordModal()}
      >
        <p
          className={`${message} text-center text-sm bg-light_salmon text-black_blue rounded-md px-1 mb-2`}
        >
          {code}
        </p>
        <div className="flex justify-center items-center flex-col p-4 w-80 h-auto bg-white rounded-lg">
          <section className="flex relative justify-center items-center flex-col pb-2 w-full h-auto bg-white rounded-md border border-gray/25">
            <p className="absolute top-[-14px] left-2 bg-white text-gray">
              Cambiar contraseña
            </p>
            <label className="text-left w-full pl-5 mt-4">
              Contraseña nueva:
            </label>
            <input
              className={`${"text-black"} border border-border_light_gray rounded-md h-8 px-2 w-[calc(100%-2rem)] placeholder:italic focus:border-salmon focus:outline-none`}
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="Contraseña nueva"
              onChange={onChange}
              onClick={(e) => e.stopPropagation()}
              required
            />
            <label className="text-left w-full pl-5 mt-4">
              Repita la contraseña nueva:
            </label>
            <input
              className={` text-black border border-border_light_gray rounded-md h-8 px-2 w-[calc(100%-2rem)] placeholder:italic focus:border-salmon focus:outline-none`}
              type="password"
              name="repeatPassword"
              id="repeatPassword"
              value={repeatPassword}
              placeholder="Contraseña nueva"
              onChange={onChangeRepeatPassword}
              onClick={(e) => e.stopPropagation()}
              required
            />
            <div className="flex justify-end items-center w-[calc(100%-2rem)] h-auto mt-4">
              <button
                className={`flex justify-center items-center rounded-md w-auto px-2 h-8 bg-gray text-white transition delay-50 ease-in hover:bg-salmon`}
                onClick={(e) => {
                  e.stopPropagation();
                  updatePassword();
                }}
              >
                <PencilSquareIcon className="h-4 w-4 " />
                <p className="pl-2">Cambiar</p>
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default ChangePasswordModal;
