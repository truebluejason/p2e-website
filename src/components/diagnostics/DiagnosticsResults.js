import React from 'react';
import PropTypes from 'prop-types';
import bootstrapClasses, { Col, Grid, Jumbotron, Row,} from '../../assets/bootstrap';
import { ContainerDiv, SimpleDiv } from '../common/ContainerDiv';
import { db } from '../../firebase';
import * as routes from '../../constants/routes';
import classes from './Diagnostics.css';

class DiagnosticsResultsPage extends React.Component {
	constructor(props, { authUser }) {
		super(props);
		this.state = {
			authUser: authUser,
			allResponses: null,
		};

	}
	componentDidMount() {
		db.getResponses(this.state.authUser.uid).then(snapshot => {
			const entriesOnly = snapshot.val();
			this.setState({ allResponses: entriesOnly });
		})
	}
	render() {
		return (
			<ContainerDiv>I am result {!!this.state.allResponses && this.state.allResponses.toString() }</ContainerDiv>
		)
	}
}
DiagnosticsResultsPage.contextTypes = {
	authUser: PropTypes.object,
}

export default DiagnosticsResultsPage;