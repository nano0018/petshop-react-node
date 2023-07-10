
import * as jose from "jose";

function callLogin() {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  return (jose.decodeJwt(token).role)
}

export default callLogin;
