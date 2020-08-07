import { LOGIN_SUCCESS } from '../constants/actionTypes';

const initialState = {
  _id: null,
  username: null,
};

function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        username: payload.username,
      };
    default:
      return state;
  }
}

export default authReducer;
