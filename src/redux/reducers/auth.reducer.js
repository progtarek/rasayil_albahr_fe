import {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_FAIL,
} from '../constants/actionTypes';

const initialState = {
  isAuthorized: !!window.localStorage.getItem('token'),
  token: window.localStorage.getItem('token') || null,
  username: window.localStorage.getItem('username') || null,
  profilePictureUrl: window.localStorage.getItem('profilePictureUrl') || null,
  hasError: '',
};

function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthorized: true,
        token: payload.token,
        username: payload.username,
        profilePictureUrl: payload.profilePictureUrl,
        hasError: '',
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthorized: true,
        token: payload.token,
        username: payload.username,
        profilePictureUrl: '',
        hasError: '',
      };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
      return {
        ...state,
        hasError: payload.message,
      };
    default:
      return state;
  }
}

export default authReducer;
