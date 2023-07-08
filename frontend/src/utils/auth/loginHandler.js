import { PostData } from '@utils/APICall';
import { api } from '@utils/config/APIUrl';
import { errorCodes } from './errorCodes';

const login = async (userData) => {
  const { email, password } = userData;
  try {
    const response = await PostData(`${api.baseURL}/auth/login`, {
      email,
      password,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

const statusCodeValidation = (response) => {
  if (response.status === 200) {
    return true;
  }
  return false;
};

const renderError = (response) => {
  return errorCodes[response.status];
};

const signUp = async (newUserData) => {
  const { name, lastName, email, password } = newUserData;
  try {
    const response = await PostData(`${api.baseURL}/users`, {
      name,
      lastName,
      email,
      password,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

const recoveryPassword = async (email) => {
  try {
    const response = await PostData(`${api.baseURL}/auth/recovery`, {
      email,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

const changePassword = async (token, newPassword) => {
  try {
    const response = await PostData(`${api.baseURL}/auth/change-password`, {
      token,
      newPassword,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export {
  login,
  signUp,
  renderError,
  statusCodeValidation,
  recoveryPassword,
  changePassword,
};
