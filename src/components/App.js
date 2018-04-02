import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Navigation from './navigation/Navigation';
import LandingPage from './Landing';
import SignUpPage from './login/SignUp';
import SignInPage from './login/SignIn';
import PasswordForgetPage from './login/PasswordForget';
import HomePage from './Home';
import AccountPage from './account/Account';
import withAuthentication from './higherorder/withAuthentication';
import * as routes from '../constants/routes';


const App = () =>
  <Router>
    <div>
      <Navigation />

      <hr/>

      <Route exact path={routes.LANDING} component={() => <LandingPage />} />
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
      <Route exact path={routes.HOME} component={() => <HomePage />} />
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
    </div>
  </Router>

export default withAuthentication(App);
