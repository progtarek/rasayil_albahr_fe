// reducers.js
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authReducer from './auth.reducer';
import messagesReducer from './messages.reducer';

const createRootReducer = (history) =>
  combineReducers({
    auth: authReducer,
    messages: messagesReducer,
    router: connectRouter(history),
  });
export default createRootReducer;
