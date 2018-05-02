import React, { Component } from 'react';
import { 
	Link,
	withRouter,
} from 'react-router-dom';
import { auth, db } from '../../firebase';

import * as routes from '../../constants/routes';
import { ContainerDiv, SimpleDiv } from '../common/ContainerDiv';

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const SignUpPage = ({ history }) => {
  const h1Style = {
    textAlign: 'center',
    marginBottom: 15,
  };
  return (
    <ContainerDiv>
      <h1 style={h1Style}>Sign Up</h1>
      <SignUpForm history={history}/>
    </ContainerDiv>
  )
  
}
  

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
  	const {
      username,
      email,
      passwordOne,
    } = this.state;
    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        db.doCreateUser(authUser.uid, username, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(byPropKey('error', error));
          });
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
  	const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const formStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: 'column', 
    }

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <form style={formStyle} onSubmit={this.onSubmit}>
      	<div style={{marginBottom: 5}}>
          <input
            value={username}
            onChange={event => this.setState(byPropKey('username', event.target.value))}
            type="text"
            placeholder="Full Name"
          />
        </div>
        <div style={{marginBottom: 5}}>
          <input
            value={email}
            onChange={event => this.setState(byPropKey('email', event.target.value))}
            type="text"
            placeholder="Email Address"
          />
        </div>
        <div style={{marginBottom: 5}}>
          <input
            value={passwordOne}
            onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
            type="password"
            placeholder="Password"
          />
        </div>
        <div style={{marginBottom: 5}}>
          <input
            value={passwordTwo}
            onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

const SignUpLink = () => {
 const pStyle = {
    textAlign: 'center', 
  };
  return (
    <p style={pStyle}>
      Don't have an account?
      {' '}
      <Link to={routes.SIGN_UP}>Sign Up</Link>
    </p>
  )
}
export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};