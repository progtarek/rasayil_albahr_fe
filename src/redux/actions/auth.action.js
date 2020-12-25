import {
  LOGIN,
  REGISTER,
  SET_STATUS,
  UPLOAD_PROFILE_PICTURE,
} from '../constants/actionTypes';

const loginAction = (loginCredentials) => ({
  type: LOGIN,
  payload: loginCredentials,
});

const registerAction = (payload) => ({
  type: REGISTER,
  payload,
});

const uploadProfilePictureAction = (payload) => ({
  type: UPLOAD_PROFILE_PICTURE,
  payload,
});

const updateUserStatusAction = (payload) => ({
  type: SET_STATUS,
  payload,
});

export {
  loginAction,
  registerAction,
  uploadProfilePictureAction,
  updateUserStatusAction,
};
