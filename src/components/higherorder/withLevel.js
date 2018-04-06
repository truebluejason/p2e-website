import React from 'react';
import PropTypes from 'prop-types';
import bootstrapClasses, { Button, ButtonToolbar, Col, Grid, Jumbotron, Row,} from '../../assets/bootstrap';


const withLevel = (Component) => {
	class WithLevel extends React.Component {
		constructor(props, context) {
			super(props)
			this.initialState = {
				highestLevel: context.userInfo.highestLevel,
				currentPageLevel: context.userInfo.highestLevel,
			};
			this.state = {...this.initialState};
		}
		onPageChange = (newValue) => {
			this.setState({currentPageLevel: newValue})
		}
		render() {
			return (
				<div>
					<Component {...this.props} currentPageLevel={this.state.currentPageLevel}/>
					<LevelNavigator {...this.state} onPageChange={this.onPageChange}/>
				</div>
			)
		}
	}
	WithLevel.contextTypes = {
		authUser: PropTypes.object,
  	userInfo: PropTypes.object,
	}
	return WithLevel;
}

// If already at the highest level, disable clicking next page
// Else, trigger setState on parent
class LevelNavigator extends React.Component {
	constructor(props) {
		super(props);
	}
	shouldDisable = () => {
		if (this.props.highestLevel <= this.props.currentPageLevel) {
			return "disabled";
		}
	}
	prevButton = () => {
		debugger
		if (this.props.currentPageLevel <= 1) {
			return <Button onClick={this.decrementPage} disabled>Prev Level</Button>
		} else {
			return <Button onClick={this.decrementPage}>Prev Level</Button>
		}
	}
	nextButton = () => {
		if (this.props.highestLevel <= this.props.currentPageLevel) {
			return <Button onClick={this.incrementPage} disabled>Next Level</Button>
		} else {
			return <Button onClick={this.incrementPage}>Next Level</Button>
		}
	}
	decrementPage = () => {
		if (1 < this.props.currentPageLevel) {
			this.props.onPageChange(this.props.currentPageLevel - 1);
		}
	}
	incrementPage = () => {
		if (this.props.currentPageLevel < this.props.highestLevel) {
			this.props.onPageChange(this.props.currentPageLevel + 1);
		}
	}
	render() {
		return (
			<div>
				<h1>This is LevelNavigator.</h1>
					{this.prevButton()}
					<h2>{this.props.currentPageLevel}/10</h2>
					{this.nextButton()}
			</div>
		)
	}
}

export default withLevel;