import React from 'react';
import bootstrapClasses, { Col, Grid, Jumbotron, ListGroup, ListGroupItem, Row,} from '../../assets/bootstrap'
import './Landing.css';

const headerStyle = {color: 'white', marginBottom: 0, textAlign: 'center'};
const LandingPage = () =>
  <Grid fluid style={{padding: 0}}>
    <Jumbotron id="landingBackground" style={{borderRadius: 0, margin: 0, minHeight: 350}}>
      <h2 style={{color: 'white', margin: '175px 0px 20px 0px', textAlign: 'center'}}> 
        A Holistic Meditation Helper.
      </h2>
      <h5 style={headerStyle}>
      	We outline the path.
      </h5>
      <h5 style={headerStyle}>
      	You walk it yourself.
      </h5>
    </Jumbotron>
    <ContentContainer />
  </Grid>

const colStyleLanding = {padding: 0,};
const divStyleLanding = {
  border: '3px solid rgb(225,225,225)', 
  borderRadius: 4, 
  backgroundColor: 'rgb(248,248,248)', 
  height: '100%', 
  padding: 12, 
  textAlign: 'center',
};

const ContentContainer = () =>
  <Row style={{margin: 0, padding: 12}}>
    <Col className='contentBox' xs={12} sm={12} style={colStyleLanding}>
      <div style={divStyleLanding}>
        <h5 style={{textAlign: 'center'}}>
          Path to Enlightenment aims to help you develop stable attention
          and powerful mindfulness. The site provides the following items taylored
          to your level of experience.
        </h5>
        <ListGroup style={{marginTop: 20}}>
        	<ListGroupItem>
        		Theory behind meditation based on Buddhism and science
        	</ListGroupItem>
        	<ListGroupItem>
        		An in-depth step by step meditation instructions
        	</ListGroupItem>
        	<ListGroupItem>
        		A weekly checklist to highlight what you should focus on
        	</ListGroupItem>
        	<ListGroupItem>
        		Ways to counter common hindrances that slow down meditation progress
        	</ListGroupItem>
        </ListGroup>
        <h5>
        	Please sign in or sign up by clicking the button at the top right corner 
        	of the page once you're ready.
        </h5>
      </div>
    </Col>
  </Row>

export default LandingPage;