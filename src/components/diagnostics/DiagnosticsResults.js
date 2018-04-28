import React from 'react';
import PropTypes from 'prop-types';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import bootstrapClasses, { Col, Grid, Jumbotron, Row,} from '../../assets/bootstrap';
import { ContainerDiv, SimpleDiv } from '../common/ContainerDiv';
import { db } from '../../firebase';
import * as routes from '../../constants/routes';
import classes from './Diagnostics.css';

Charts(FusionCharts);
// REFACTOR QUESTIONS
// Format: Responses order from highest to lowest score in questions.js
// Firebase: Save 5 most recent responses and save previous data in terms of questions, like Jam Stats Console
class DiagnosticsResultsPage extends React.Component {
	constructor(props, { authUser }) {
		super(props);
		this.state = {
			authUser: authUser,
			allResponses: null,
		};

	}
	renderFakeChart = () => {
		debugger;
		const myDataSource = {
		  chart: {
		    caption: 'Diagnostics Results',
		    subCaption: 'Areas for Improvement From 5 Most Recent Entries',
		    "xAxisName": "Questions",
		    "yAxisName": "# of times the best answer wasn't selected",
		  },
		  data: [
		    {
		      label: 'Q1',
		      value: '3',
		    },
		    {
		      label: 'Q2',
		      value: '3',
		    },
		    {
		      label: 'Q3',
		      value: '2',
		    },
		    {
		      label: 'Q4',
		      value: '2',
		    },
		    {
		      label: 'Q5',
		      value: '1',
		    },
		  ],
		};
		const chartConfigs = {
		  type: 'column2d',
		  width: '100%',
		  height: 300,
		  dataFormat: 'json',
		  dataSource: myDataSource,
		};
		return <ReactFC {...chartConfigs}/>
	}
	componentDidMount() {
		db.getResponses(this.state.authUser.uid).then(snapshot => {
			const entriesOnly = snapshot.val();
			this.setState({ allResponses: entriesOnly });
		});
	}
	render() {
		if (!!this.state.allResponses) {
			return (
				<ContainerDiv>
					{this.renderFakeChart()}
				</ContainerDiv>
			)
		}
		return (
			<ContainerDiv></ContainerDiv>
		)
	}
}
DiagnosticsResultsPage.contextTypes = {
	authUser: PropTypes.object,
}

export default DiagnosticsResultsPage;