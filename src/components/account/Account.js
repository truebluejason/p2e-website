import React from 'react';
import PropTypes from 'prop-types';
import { ContainerDiv, SimpleDiv } from '../common/ContainerDiv';
import { PasswordForgetForm } from '../login/PasswordForget';
import PasswordChangeForm from '../login/PasswordChange';
import withAuthorization from '../higherorder/withAuthorization';

class AccountPage extends React.Component {
	constructor(props, { authUser, userInfo }) {
		super(props);
		this.state = {
			authUser: authUser,
			userInfo: userInfo,
		};
	}
	render() {
		return (
			<ContainerDiv>
			    <h1>Account: {this.state.authUser.email}</h1>
			    <h1>Stage: {this.state.userInfo.highestLevel.toString()}</h1>
			    <h1></h1>
			    <PasswordForgetForm />
			    <PasswordChangeForm />
		  	</ContainerDiv>
		);
	}
}

AccountPage.contextTypes = {
  authUser: PropTypes.object,
  userInfo: PropTypes.object,
};

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);