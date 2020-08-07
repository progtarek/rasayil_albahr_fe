import { LOGIN_SUCCESS } from '../constants/actionTypes';

const initialState = {
  isAuthorized: !!window.localStorage.getItem('token'),
  token: window.localStorage.getItem('token') || null,
  username: window.localStorage.getItem('username') || null,
};

function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthorized: true,
        token: payload.token,
        username: payload.username,
      };
    default:
      return state;
  }
}

export default authReducer;
