import React from 'react';
import PropTypes from 'prop-types';
import bootstrapClasses, { Col, Grid, Jumbotron, Row,} from '../../assets/bootstrap';


const withLevel = (Component) => {
	class WithLevel extends React.Component {
		constructor(props, context) {
			super(props)
			this.state = {
				highestLevel: context.userInfo.highestLevel,
				currentPageLevel: context.userInfo.highestLevel,
			};
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
	incrementPage = () => {
		if (this.props.currentPageLevel < this.props.highestLevel) {
			this.props.onPageChange(this.props.currentPageLevel + 1);
		} else {
			alert("You cannot view contents past your highest level.")
		}
	}
	decrementPage = () => {
		if (1 < this.props.currentPageLevel) {
			this.props.onPageChange(this.props.currentPageLevel - 1);
		} else {
			alert("You cannot view contents below level 1.")
		}
	}
	render() {
		return (
			<div>
				<h1>This is LevelNavigator.</h1>
				<h2 onClick={this.incrementPage}>Increment Page Number</h2>
				<h2 onClick={this.decrementPage}>Decrement Page Number</h2>
			</div>
		)
	}
}

export default withLevel;