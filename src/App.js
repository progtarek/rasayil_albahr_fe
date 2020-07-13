import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import LandingPage from './modules/landing/landing-page.component';
import LoginPage from './modules/auth/login-page/login-page.component';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import RegisterPage from './modules/auth/register-page/register-page.component';
import './App.css';

function App() {
  const { key } = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition
        key={key}
        classNames='route'
        timeout={300}
        exit={false}
        unmountOnExit={true}
        mountOnEnter={true}
      >
        <Switch>
          <Route exact path='/login' component={LoginPage}></Route>
          <Route exact path='/register' component={RegisterPage}></Route>
          <Route exact path='/' component={LandingPage}></Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
