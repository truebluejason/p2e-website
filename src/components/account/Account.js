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
		const h3Style = {
	      textAlign: 'center',
	      marginBottom: 3,
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
			    <h3 style={h3Style} >Account : {this.state.authUser.email}</h3>
			    <h3 style={h3Style} >Stage : {this.state.userInfo.highestLevel.toString()} 
			    	<ButtonToolbar style={buttonStyle} >
			    		<Button 
			    			bsStyle="primary"
			    			onClick={ () => db.updateUserLevel(this.state.authUser.uid, this.state.userInfo.highestLevel+1) }
			    		>
      					Next Stage!
    					</Button>
    				</ButtonToolbar>
    			</h3>
    			<h3></h3>
			    <PasswordForgetForm />
			    <h3></h3>
			    <PasswordChangeForm />
			    <h4></h4>
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