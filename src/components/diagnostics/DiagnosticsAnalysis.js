import React from 'react';
import PropTypes from 'prop-types';
import bootstrapClasses, { ListGroup, ListGroupItem, Table } from '../../assets/bootstrap';
import { ContainerDiv, SimpleDiv } from '../common/ContainerDiv';
import { DIAGNOSTICS_QUESTIONS } from '../../constants/questions';
import { db } from '../../firebase';
import * as routes from '../../constants/routes';
import classes from './Diagnostics.css'; 

class DiagnosticsAnalysisPage extends React.Component {

	constructor(props, { authUser }) {
		super(props);
		this.state = {
			authUser: authUser,
			responses: null,
		};
		// responses is an array of indexes of answers the user answered for a question
	}

	generateBody = () => {
		const rows = Object.keys(DIAGNOSTICS_QUESTIONS).map((key, i) => {
			let question = DIAGNOSTICS_QUESTIONS[key];
			let q = question['question'];
			let a = question['responses'][this.state.responses[Number(key) - 1]];
			return (
				<tr key={i}>
					<td style={{width: '67%'}}>{q}</td>
					<td style={{width: '33%'}}>{a}</td>
				</tr>
			)
		});
		return (
			<tbody>
				{rows}
			</tbody>
		)
	}

	generateSuggestions = () => {
		const questions = Object.values(DIAGNOSTICS_QUESTIONS);
		const suggestionsPrioritized = questions.map((question, i) => {
			let userResponseIndex = this.state.responses[i]
			return {
				suggestion: question['suggestions'][userResponseIndex],
				score: 3 - userResponseIndex,
				priority: question['priority'],
			}
		}).sort(function(a,b) {
			return a['priority'] - b['priority'] > 0 ? -1 : 1;
		});

		// Display max 2 suggestions
		// From the most important to least important question, if score is not 3 display question suggestion
		let suggestionsDisplayed = []
		for (let i = 0; i < suggestionsPrioritized.length && suggestionsDisplayed.length < 2; i++) {
			let score = suggestionsPrioritized[i]['score'];
			if (score < 3) {
				suggestionsDisplayed.push(suggestionsPrioritized[i]['suggestion']);
			}
		}
		suggestionsDisplayed = suggestionsDisplayed.map((suggestion, i) => {
			return <ListGroupItem key={i}>{i + 1}. {suggestion}</ListGroupItem>
		});

		return (
			<ListGroup>
				{
					suggestionsDisplayed.length > 0 
						? suggestionsDisplayed 
						: <ListGroupItem>You're doing perfectly - Keep up your practice.</ListGroupItem>
				}
			</ListGroup>
		);
	}

	componentDidMount() {
		db.getRecentResponses(this.state.authUser.uid).then(snapshot => {
			const responses = snapshot.val();
			responses.shift();
			this.setState({responses: responses});
		}).catch(err => {
			alert("An error has occurred while retrieving the data.");
		});
	}

	render() {
		const h3Style = { color: 'teal', margin: 0, marginBottom: 20, textAlign: 'center' };
		if (!!this.state.responses) {
			return (
				<ContainerDiv>
					<h3 style={h3Style}>Diagnostics Result</h3>
					<Table striped bordered condensed hover>
						<thead>
							<tr>
								<th style={{width: '67%'}}>Question</th>
								<th style={{width: '33%'}}>Answer</th>
							</tr>
						</thead>
						{this.generateBody()}
					</Table>
					<br />
					<h3 style={h3Style}>Top Two Suggested Actions</h3>
					{this.generateSuggestions()}
				</ContainerDiv>
			)
		}
		return (
			<ContainerDiv>
			</ContainerDiv>
			//<h1>I am diagnostics analysis page. Responses: {!!this.state.responses && this.state.responses.toString()}</h1>
		)
	}
}

DiagnosticsAnalysisPage.contextTypes = {
	authUser: PropTypes.object,
}

export default DiagnosticsAnalysisPage;