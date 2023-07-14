import * as jose from 'jose';

const getId = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return null;
  } else {
    return jose.decodeJwt(token).sub;
  }
};

export default getId;
