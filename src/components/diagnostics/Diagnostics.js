import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import bootstrapClasses, { Col, Grid, Jumbotron, Row,} from '../../assets/bootstrap';
import withAuthorization from '../higherorder/withAuthorization';
import withLevel from '../higherorder/withLevel';

// Should have a router that enables each question to be in the page by itself
class DiagnosticsPage extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		// Not adaptive to changing screen sizes for now
		const rowStyle = window.innerWidth > 768
		? {
	  		backgroundColor: 'rgb(248,248,248)', 
	  		display: 'flex',
			border: '3px solid rgb(225,225,225)', 
  			borderRadius: 4, 
  			margin: 16,
	  	} 
	  	: {
	  		backgroundColor: 'rgb(248,248,248)', 
			border: '3px solid rgb(225,225,225)', 
  			borderRadius: 4, 
  			margin: 16,
	  	} 
		const colStyle = {
			padding: 16,
		};
		const divStyle = {
			backgroundColor: 'rgb(225,225,225)', 
	  		borderRadius: 4, 
	  		boxSizing: 'border-box',
	  		height: '100%',
			padding: 16,
		};
		const pStyle = { margin: 0, textIndent: 12 };
		const h3Style = { margin: 0, marginBottom: 20, textAlign: 'center' };
		const questionsRoute = `${this.props.match.url}/questions`
		const resultsRoute = `${this.props.match.url}/results`
		return (
			<div>
				<Row style={rowStyle}>
					<Col style={colStyle} xs={12} sm={6}>
						<Link to={questionsRoute}>Click Me</Link>
							<div style={divStyle}>
								<h3 style={h3Style}>Take Diagnostics</h3>
								<p style={pStyle}>
									Honestly answer the questions once per week to 
									gain insight on your progress and areas to pay 
									additional attention to.
								</p>
							</div>
					</Col>
					<Col style={colStyle} xs={12} sm={6}>
						<Link to={resultsRoute}>Click Me</Link>
							<div style={divStyle}>
								<h3 style={h3Style}>View Past Results</h3>
								<p style={pStyle}>
									View your past diagnostics stats to further gain 
									insight about yourself.
								</p>
							</div>
					</Col>
				</Row>
				<Route exact path={this.props.match.url} render={() => <h1>Filler!</h1>}/>
				<Route exact path={questionsRoute} render={() => <h1>Killer!</h1>}/>
				<Route path={resultsRoute} component={() => <ResultsPage />}/>
			</div>
		)
	}
}

const QuestionsPage = ({match}) => {
	<h1>I am question</h1>
}

const ResultsPage = (props) => 
	<h1>I am result</h1>


const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(DiagnosticsPage);