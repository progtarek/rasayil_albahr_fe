import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import * as serviceWorker from './serviceWorker';
import configureStore from './redux/store';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { history } from './redux/store';

const store = configureStore();

ReactDOM.render(
  // [ TODO ] remove strict mode
  // <React.StrictMode>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
