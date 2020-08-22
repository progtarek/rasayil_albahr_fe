import { LOGIN, REGISTER, GOOGLE_LOGIN } from '../constants/actionTypes';

const loginAction = (loginCredentials) => ({
  type: LOGIN,
  payload: loginCredentials,
});

const googleLoginAction = () => ({
  type: GOOGLE_LOGIN,
});

const registerAction = (registerCredentials) => ({
  type: REGISTER,
  payload: registerCredentials,
});

export { loginAction, registerAction, googleLoginAction };
