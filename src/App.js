import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import LandingPage from './modules/landing/landing-page.component';
import LoginPage from './modules/auth/login-page/login-page.component';
import RegisterPage from './modules/auth/register-page/register-page.component';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={LoginPage}></Route>
        <Route exact path='/register' component={RegisterPage}></Route>
        <Route exact path='/' component={LandingPage}></Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;
