import React from 'react';
import PropTypes from 'prop-types';
import { db, firebase } from '../../firebase'

const withAuthentication = (Component) => {
  // error not used for now, but implemented just in case I need it later
  const INITIAL_STATE = {
    authUser: null,
    userInfo: null,
    error: null
  }
  class WithAuthentication extends React.Component {
  	constructor(props) {
      super(props);
      this.state = { ...INITIAL_STATE };
    }
    getChildContext() {
      return {
        authUser: this.state.authUser,
        userInfo: this.state.userInfo,
      };
    }
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        if (authUser) {
          db.listenToCurrentUserData(authUser.uid, snapshot =>
            this.setState({ authUser: authUser, userInfo: snapshot.val(), error: null })
          )
        } else {
          this.setState({ ...INITIAL_STATE })
        }
      });
    }
    componentWillUMount() {
      db.releaseCurrentUserData();
    }
    showErrorMessage = () => {
      return (
        <div style={{backgroundColor: 'grey', width: '100%'}}>
          {<h5 style={{margin: 0, textAlign: 'center'}}>{this.state.error.message}</h5>}
        </div>
      )
    }
    render() {
      const err = this.state.error
      return (
        <div>
          { err && this.showErrorMessage() }
        <Component />
        </div>
      );
    }
  }
  WithAuthentication.childContextTypes = {
    authUser: PropTypes.object,
    userInfo: PropTypes.object,
  };
  return WithAuthentication;
}

export default withAuthentication;