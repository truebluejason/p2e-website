import React from 'react';
import PropTypes from 'prop-types';
import { ContainerDiv, SimpleDiv } from '../common/ContainerDiv';
import { PasswordForgetForm } from '../login/PasswordForget';
import PasswordChangeForm from '../login/PasswordChange';
import withAuthorization from '../higherorder/withAuthorization';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { db } from '../../firebase';


class AccountPage extends React.Component {
	constructor(props, { authUser, userInfo }) {
		super(props);
		this.state = {
			authUser: authUser,
			userInfo: userInfo,
		};
	}
	render() {
		const h1Style = {
	      textAlign: 'center',
	      marginBottom: 5,
	  	};
	  	const buttonStyle = {
	      display: "flex",
	      justifyContent: "center",
	      alignItems: "center",
	      flexDirection: 'column', 
	      marginTop: 10,
	      marginBottom: 5,
	    }
		return (
			<ContainerDiv>
			    <h1 style={h1Style} >Account: {this.state.authUser.email}</h1>
			    <h1 style={h1Style} >Stage: {this.state.userInfo.highestLevel.toString()} 
			    	<ButtonToolbar style={buttonStyle} >
			    		<Button 
			    			bsStyle="primary"
			    			bsSize="large"
			    			onClick={ () => db.updateUserLevel(this.state.authUser.uid, this.state.userInfo.highestLevel++) }
			    		>
      					Next Stage!
    					</Button>
    				</ButtonToolbar>
    			</h1>
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