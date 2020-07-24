import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './root.reducers';
import * as logger from 'redux-logger';

export const history = createBrowserHistory();
const reduxLogger = logger.createLogger();

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(applyMiddleware(routerMiddleware(history), reduxLogger))
  );

  return store;
}
