import React from 'react';
import PropTypes from 'prop-types';
import bootstrapClasses, { Button, ButtonGroup } from '../../assets/bootstrap';
import { ContainerDiv, SimpleDiv } from '../common/ContainerDiv';
import { DIAGNOSTICS_QUESTIONS } from '../../constants/questions';
import { db } from '../../firebase';
import * as routes from '../../constants/routes';
import classes from './Diagnostics.css'; 

class DiagnosticsQuestionsPage extends React.Component {

	constructor(props, { authUser }) {
		super(props);
		this.state = {
			qNumber: 1,
			qCount: Object.keys(DIAGNOSTICS_QUESTIONS).length,
			selectedIndex: null,
			responses: {},
			userId: authUser.uid
		};
	}

	onResponseSelect = (selectedIndex) => {
		this.setState({selectedIndex: selectedIndex});
	}

	// Record selectedIndex in responses object and increment qNumber
	onQuestionChange = () => {
		this.setState((prevState, props) => {
			prevState.responses[prevState.qNumber] = prevState.selectedIndex;
			return {qNumber: prevState.qNumber + 1, responses: prevState.responses, selectedIndex: null};
		});
	}

	// Record selectedIndex in responses object, submit responses to Firebase, redirect to DiagnosticsAnalysisPage
	onSubmitAnswers = () => {
		this.state.responses[this.state.qNumber] = this.state.selectedIndex;
		db.doCreateDiagnosticsEntry(this.state.userId, this.state.responses);
		db.doDeleteOldDiagnosticsEntries(this.state.userId);
		this.props.history.push(routes.DIAGNOSTICS_ANALYSIS);
	}

	render() {
		return (
			<ContainerDiv>
				<ButtonManager selectedIndex={this.state.selectedIndex} qNumber={this.state.qNumber.toString()} onResponseSelect={this.onResponseSelect}/>
				<QuestionNavigator {...this.state} onQuestionChange={this.onQuestionChange} onSubmitAnswers={this.onSubmitAnswers}/>
			</ContainerDiv>
		)
	}
}

DiagnosticsQuestionsPage.contextTypes = {
	authUser: PropTypes.object,
}


// Renders buttons and updates DiagnosticsQuestionsPage of the selected response's index
class ButtonManager extends React.Component {
	constructor(props) {
		super(props);
	}
	handleClick = (e) => {
		const currentOptions = DIAGNOSTICS_QUESTIONS[this.props.qNumber]["responses"];
		let textContent = e.target.textContent;
		let textContentIndex = Object.keys(currentOptions).filter(key => currentOptions[key] === textContent)[0];
		this.props.onResponseSelect(Number(textContentIndex));
	}
	render() {
		const current = DIAGNOSTICS_QUESTIONS[this.props.qNumber];
		const responses = current["responses"].map((resp, i) => {
			if (this.props.selectedIndex === i) {
				return (
					<Button key={i} onClick={this.handleClick} bsStyle="success">
						{resp}
					</Button>
				)
			} else {
				return <Button key={i} onClick={this.handleClick}>{resp}</Button>
			}
		});
		const h3Style = { color: 'teal', margin: 0, marginBottom: 20, textAlign: 'center' };
		return (
			<SimpleDiv>
				<h3 style={h3Style}>{current["question"]}</h3>
				<ButtonGroup vertical block>
					{responses}
				</ButtonGroup>
			</SimpleDiv>
		)
	}
}

// Handles next question button and tells DiagnosticsQuestionsPage the selected response
// Doesn't know the selectedIndex other than whether it's null or not
class QuestionNavigator extends React.Component {
	constructor(props) {
		super(props);
	}
	nextButton = () => {
		let buttonMsg;
		let buttonClick;
		if (this.props.qNumber < this.props.qCount) {
			buttonMsg = "Next Question";
			buttonClick = this.props.onQuestionChange;
		} else {
			buttonMsg = "Submit Answers"
			buttonClick = this.props.onSubmitAnswers;
		}
		if (this.props.selectedIndex === null) {
			return <Button onClick={buttonClick} disabled style={{marginTop: 10}}>{buttonMsg}</Button>
		}
		return <Button onClick={buttonClick} style={{marginTop: 10}}>{buttonMsg}</Button>
	}
	render() {
		return (
			<div style={{display: 'flex', justifyContent: 'center'}}>
				{this.nextButton()}
			</div>
		)
	}
}

export default DiagnosticsQuestionsPage;