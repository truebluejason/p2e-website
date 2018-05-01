import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from './SignUp';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import { ContainerDiv, SimpleDiv } from '../common/ContainerDiv';

const SignInPage = ({ history }) => {
  const h1Style = {
    textAlign: 'center',
    marginBottom: 15,
  };
  return (
    <ContainerDiv>
      <h1 style={h1Style}>Sign In</h1>
      <SignInForm history={history} />
      <SignUpLink />
    </ContainerDiv>
  )
}

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const formStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: 'column', 
    }

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <form style={formStyle} onSubmit={this.onSubmit}>
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
            value={password}
            onChange={event => this.setState(byPropKey('password', event.target.value))}
            type="password"
            placeholder="Password"
          />
        </div>
        <div style={{marginBottom: 5}}>
          <button disabled={isInvalid} type="submit">
            Sign In
          </button>
        </div>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};