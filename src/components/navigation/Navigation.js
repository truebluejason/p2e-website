import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SignOutButton from '../login/SignOut';
import * as routes from '../../constants/routes';
import logo from '../../assets/images/logo.png'
import classes from './Navigation.css';

// Props are not used, and { authUser } is a context object
const Navigation = (props, { authUser }) =>
  <div>
    { authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </div>

Navigation.contextTypes = {
  authUser: PropTypes.object,
};

const navToggle = () => {
  const nav = document.getElementsByClassName('topNav')[0];
  if (nav.className === 'topNav') {
    nav.className = 'topNav responsive'
  } else {
    nav.className = 'topNav';
  }
}

const NavigationAuth = () =>
  <div className='topNav'>
    <Link id='logoContainer' to={routes.HOME}><img src={logo} alt=""/></Link>
    <div>
      <Link to={routes.ACCOUNT}>Account</Link>
      <SignOutButton />
    </div>
    <a href="javascript:void(0);" className="icon" onClick={navToggle}>&#9776;</a>
  </div>

const NavigationNonAuth = () =>
  <div className='topNav'>
    <Link id='logoContainer' to={routes.LANDING}><img src={logo} alt=""/></Link>
    <div>
      <Link to={routes.SIGN_IN}>Sign In</Link>
    </div>
    <a href="javascript:void(0);" className="icon" onClick={navToggle}>&#9776;</a>
  </div>

export default Navigation;