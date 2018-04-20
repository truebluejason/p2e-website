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
			selected: null,
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

	onResponseSelect = (selected) => {
		this.setState({selected: selected});
	}

	onQuestionChange = (newValue) => {
		this.setState({qNumber: newValue});
	}

	render() {
		return (
			<ContainerDiv>
				<ButtonManager selected={this.state.selected} qNumber={this.state.qNumber.toString()} onResponseSelect={this.onResponseSelect}/>
				<QuestionNavigator {...this.state} onQuestionChange={this.onQuestionChange}/>
			</ContainerDiv>
		)
	}
}

class ButtonManager extends React.Component {
	constructor(props) {
		super(props);
	}
	handleClick = (e) => {
		this.props.onResponseSelect(e.target.textContent);
	}
	render() {
		const current = DIAGNOSTICS_QUESTIONS[this.props.qNumber];
		const responses = current["responses"].map((resp, i) => {
			if (this.props.selected === resp) {
				return (
					<Button key={i} onClick={this.handleClick} bsStyle="success">
						{resp}
					</Button>
				)
			} else {
				return <Button key={i} onClick={this.handleClick}>{resp}</Button>
			}
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
}

class QuestionNavigator extends React.Component {
	constructor(props) {
		super(props);
	}
	nextButton = () => {
		if (this.props.qCount <= this.props.qNumber || this.props.selected === null) {
			return <Button onClick={this.incrementPage} disabled>Next Question</Button>
		} else {
			return <Button onClick={this.incrementPage}>Next Question</Button>
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
				{this.nextButton()}
			</div>
		)
	}
}

export default DiagnosticsQuestionsPage;