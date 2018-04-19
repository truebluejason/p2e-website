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
			qNumber: 1
		};
	}

	question = (num) => {

		return (
			<SimpleDiv>
				<h3>{DIAGNOSTICS_QUESTIONS["1"]["question"]}</h3>
				<ButtonGroup vertical block>
					<Button>{DIAGNOSTICS_QUESTIONS["1"]["responses"][0]}</Button>
					<Button>{DIAGNOSTICS_QUESTIONS["1"]["responses"][1]}</Button>
					<Button>{DIAGNOSTICS_QUESTIONS["1"]["responses"][2]}</Button>
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
				{this.question(this.state.qNumber)}
				<QuestionNavigator onQuestionChange={this.onPageChange}/>
			</ContainerDiv>
		)
	}
}

const QuestionNavigator = (props) => {
	return (
		<h1>I am the navigator</h1>
	)
}

export default DiagnosticsQuestionsPage;