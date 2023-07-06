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

export { login, renderError, statusCodeValidation };
