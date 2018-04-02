import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withAuthorization from '../higherorder/withAuthorization';
import { db } from '../../firebase';
import { Grid, Jumbotron } from 'react-bootstrap/lib';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

class HomePage extends Component {
  constructor(props, { authUser }) {
    super(props);
    this.state = {
      user: authUser,
      userInfo: null
    };
  }

  componentDidMount() {
    db.getCurrentUser(this.state.user.uid).then(snapshot =>
      this.setState(() => ({ userInfo: snapshot.val() }))
    );
  }

  render() {
  	const { user, userInfo } = this.state;
    return (
      <Grid fluid style={{padding: 0}}>
        <Jumbotron style={{borderRadius: 0, margin: 0, minHeight: 300}}>
          <h2 style={{color: 'white', marginTop: 150, textAlign: 'center'}}> 
            Welcome back{ !!userInfo && ', ' + userInfo.username }.
          </h2>
        </Jumbotron>
        <p>The Home Page is accessible by every signed in user.</p>
      </Grid>
    );
  }
}

HomePage.contextTypes = {
  authUser: PropTypes.object,
};

const UserList = ({ users }) =>
  <div>
    <h2>List of Usernames of Users</h2>
    <p>(Saved on Sign Up in Firebase Database)</p>

    {Object.keys(users).map(key =>
      <div key={key}>{users[key].username}</div>
    )}
  </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);