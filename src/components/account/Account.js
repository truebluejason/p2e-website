import React from 'react';
import PropTypes from 'prop-types';

import { PasswordForgetForm } from '../login/PasswordForget';
import PasswordChangeForm from '../login/PasswordChange';
import withAuthorization from '../higherorder/withAuthorization';

const AccountPage = (props, { authUser }) =>
  <div>
    <h1>Account: {authUser.email}</h1>
    <PasswordForgetForm />
    <PasswordChangeForm />
  </div>

AccountPage.contextTypes = {
  authUser: PropTypes.object,
};

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);