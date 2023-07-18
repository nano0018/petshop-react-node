import { GetData, PatchDataToken, PostData } from '@utils/APICall';
import { api } from '@utils/config/APIUrl';
import { errorCodes } from './auth/errorCodes';

const fetchData = async (URL) => {
  try {
    const response = await GetData(`${api.baseURL}/${URL}`);
    return response.data;
  } catch (error) {
    return error.response;
  }
};

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

const signOut = () => {
  localStorage.removeItem('token');
};

const updateUserData = async (id, data) => {
  try {
    const response = await PatchDataToken(`${api.baseURL}/users/${id}`, {
      ...data,
    });
    return response;
  } catch (error) {
    return error.response;
  }
}

export {
  fetchData,
  login,
  signUp,
  renderError,
  statusCodeValidation,
  recoveryPassword,
  changePassword,
  signOut,
  updateUserData
};
