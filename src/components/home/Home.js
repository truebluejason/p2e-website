import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import bootstrapClasses, { Col, Grid, Jumbotron, Row,} from '../../assets/bootstrap'
import withAuthorization from '../higherorder/withAuthorization';
import { db } from '../../firebase';
import * as routes from '../../constants/routes';
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
        <Jumbotron id="homeBackground" style={{borderRadius: 0, margin: 0, minHeight: 350}}>
          <h2 style={{color: 'white', marginTop: 200, textAlign: 'center'}}> 
            Welcome back{ !!userInfo && ', ' + userInfo.username }.
          </h2>
        </Jumbotron>
        <ContentContainer />
      </Grid>
    );
  }
}
HomePage.contextTypes = {
  authUser: PropTypes.object,
};

// Not adaptive to changing screen sizes for now
const rowStyle = window.innerWidth > 768
  ? {display: 'flex', margin: 0,}
  : {margin: 0,}
const colStyle = {padding: 12,};
const divStyle = {
  border: '3px solid rgb(225,225,225)', 
  borderRadius: 4, 
  backgroundColor: 'rgb(248,248,248)', 
  height: '100%', 
  padding: 8, 
  textAlign: 'center',
};
const pStyle = {textAlign: 'left', textIndent: 12,};

const ContentContainer = (props) =>
  <div style={{padding: 12}}>
    <Row style={{margin: 0, paddingTop: 12}}>
      <Col className='contentBox' xs={12} sm={12} style={colStyle}>
        <div style={divStyle}>
          <Link to={routes.INSTRUCTIONS}>
            <h3>Overview</h3>
          </Link>
          <p style={{textAlign: 'center'}}>
            The purpose and nature of meditation.
          </p>
        </div>
      </Col>
    </Row>
    <Row style={rowStyle}>
      <ContentBox>
        <Link to={routes.INSTRUCTIONS}>
          <h3>Instructions</h3>
        </Link>
        <p style={pStyle}>
          A step by step meditation instructions.
          The section includes pre-meditation checklist, intentions to hold during meditation, and more.
        </p>
      </ContentBox>
      <ContentBox>
        <Link to={routes.DIAGNOSTICS}>
          <h3>Diagnostics</h3>
        </Link>
        <p style={pStyle}>
          A multi-question checklist that highlights which area
          of your meditation is going well and which area need more attention.
          You should ideally be take this once per week.
        </p>
      </ContentBox>
      <ContentBox>
        <Link to={routes.ANTIDOTES}>
          <h3>Antidotes</h3>
        </Link>
        <p style={pStyle}>
          A list of hindrances that may impede meditation session and 
          how to appropriately counter each hindrance with its antidote.
        </p>
      </ContentBox>
    </Row>
  </div>
const ContentBox = (props) => 
  <Col className='contentBox' xs={12} sm={4} style={colStyle}>
    <div style={divStyle}>
      {props.children}
    </div>
  </Col>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);