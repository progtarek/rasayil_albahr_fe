import { LOGIN, REGISTER } from '../constants/actionTypes';

const loginAction = (loginCredentials) => ({
  type: LOGIN,
  payload: loginCredentials,
});

const registerAction = (registerCredentials) => ({
  type: REGISTER,
  payload: registerCredentials,
});

export { loginAction, registerAction };
