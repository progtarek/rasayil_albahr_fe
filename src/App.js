import React from 'react';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import LandingPage from './modules/landing/landing-page.component';
import LoginPage from './modules/auth/login-page/login-page.component';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import RegisterPage from './modules/auth/register-page/register-page.component';
import './App.css';
import AccountPage from './modules/account';
import { connect } from 'react-redux';
import SocialLoginPage from './modules/auth/social-login-page/social-login-page';
import DiscoverPage from './modules/discover';

function App({ isAuthorized }) {
  const { key } = useLocation();
  return (
    <TransitionGroup className='app-container'>
      <CSSTransition
        key={key}
        classNames='route'
        timeout={300}
        exit={false}
        unmountOnExit={true}
        mountOnEnter={true}
      >
        <Switch>
          <Route
            path='/messages'
            exact
            render={() =>
              isAuthorized ? <AccountPage /> : <Redirect to='/login' />
            }
          />
          <Route
            path='/discover'
            exact
            render={() =>
              isAuthorized ? <DiscoverPage /> : <Redirect to='/login' />
            }
          />
          <Route
            exact
            path='/login'
            render={() =>
              !isAuthorized ? <LoginPage /> : <Redirect to='/messages' />
            }
          ></Route>
          <Route
            exact
            path='/register'
            render={() =>
              !isAuthorized ? <RegisterPage /> : <Redirect to='/messages' />
            }
          ></Route>
          <Route exact path='/authWith' component={SocialLoginPage}></Route>
          <Route exact path='/' component={LandingPage}></Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}
const mapStateToProps = ({ auth }) => ({
  isAuthorized: auth.isAuthorized,
});
export default connect(mapStateToProps)(App);
