import * as jose from "jose";

const callLogin = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  return jose.decodeJwt(token).role;
};

const callUserData = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return "";
  }
  return {
    name: jose.decodeJwt(token).name,
    lastName: jose.decodeJwt(token).lastName,
    id: jose.decodeJwt(token).sub,
  };
};

export { callLogin, callUserData };
