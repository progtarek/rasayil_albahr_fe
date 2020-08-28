import { LOGIN_SUCCESS, REGISTER_SUCCESS } from '../constants/actionTypes';

const initialState = {
  isAuthorized: !!window.localStorage.getItem('token'),
  token: window.localStorage.getItem('token') || null,
  username: window.localStorage.getItem('username') || null,
  profilePictureUrl: window.localStorage.getItem('profilePictureUrl') || null,
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
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthorized: false,
        token: null,
        username: null,
        profilePictureUrl: null,
      };
    default:
      return state;
  }
}

export default authReducer;
