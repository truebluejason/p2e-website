import React from 'react';
import PropTypes from 'prop-types';
import bootstrapClasses, { Button, ButtonGroup } from '../../assets/bootstrap';
import { ContainerDiv, SimpleDiv } from '../common/ContainerDiv';
import { DIAGNOSTICS_QUESTIONS } from '../../constants/questions';
import * as routes from '../../constants/routes';
import classes from './Diagnostics.css'; 

class DiagnosticsQuestionsPage extends React.Component {

	// State describes which question to user is at and display information accordingly
	constructor(props) {
		super(props);
		this.state = {
			qNumber: 1,
			qCount: Object.keys(DIAGNOSTICS_QUESTIONS).length,
		};
	}

	question = (qNumber) => {
		const current = DIAGNOSTICS_QUESTIONS[qNumber];
		const responses = current["responses"].map((resp, i) => {
			return <Button key={i}>{resp}</Button>
		});
		return (
			<SimpleDiv>
				<h3>{current["question"]}</h3>
				<ButtonGroup vertical block>
					{responses}
				</ButtonGroup>
			</SimpleDiv>
		)
	}

	onQuestionChange = (newValue) => {
		this.setState({qNumber: newValue});
	}

	render() {
		// Questions box at the centre
		// Navigator at the bottom
		return (
			<ContainerDiv>
				{this.question(this.state.qNumber.toString())}
				{this.state.qNumber}
				<QuestionNavigator {...this.state} onQuestionChange={this.onQuestionChange}/>
			</ContainerDiv>
		)
	}
}

class ButtonManager extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Button>WIP</Button>
		)
	}
}

// If already at the highest level, disable clicking next page
// Else, trigger setState on parent
class QuestionNavigator extends React.Component {
	constructor(props) {
		super(props);
	}
	prevButton = () => {
		if (this.props.qNumber <= 1) {
			return <Button onClick={this.decrementPage} disabled>Prev Question</Button>
		} else {
			return <Button onClick={this.decrementPage}>Prev Question</Button>
		}
	}
	nextButton = () => {
		if (this.props.qCount <= this.props.qNumber) {
			return <Button onClick={this.incrementPage} disabled>Next Question</Button>
		} else {
			return <Button onClick={this.incrementPage}>Next Question</Button>
		}
	}
	decrementPage = () => {
		if (1 < this.props.qNumber) {
			this.props.onQuestionChange(this.props.qNumber - 1);
		}
	}
	incrementPage = () => {
		if (this.props.qNumber < this.props.qCount) {
			this.props.onQuestionChange(this.props.qNumber + 1);
		}
	}
	render() {
		return (
			<div style={{display: 'flex', justifyContent: 'center'}}>
				{this.prevButton()}
				<span style={{padding: 10}}></span>
				{this.nextButton()}
			</div>
		)
	}
}

export default DiagnosticsQuestionsPage;