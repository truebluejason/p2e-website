import React from 'react';
import PropTypes from 'prop-types';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import bootstrapClasses, { Table,} from '../../assets/bootstrap';
import { ContainerDiv, SimpleDiv } from '../common/ContainerDiv';
import { db } from '../../firebase';
import { DIAGNOSTICS_QUESTIONS } from '../../constants/questions';
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
	convertResponsesToData = (responses) => {
		const tally = [];
		const topFive = [];
		for (let i=0; i<responses.length; i++) {
			let responseSet = responses[i]['responses'];
			responseSet.shift();
			responseSet.forEach((entry, index) => {
				if (entry !== 0) {
					tally[index] !== undefined ? tally[index] +=1 : tally[index] = 1;
				} else {
					if (tally[index] === undefined) {
						tally[index] = 0;
					}
				}
			});
		}
		for (let j=0; j<5; j++) {
			if (tally.length > 1) {
				let max = Math.max(...tally);
				let maxIndex = tally.indexOf(max);
				topFive.push({index: maxIndex, val: max});
				tally[maxIndex] = 0;
			} else {
				topFive.push({});
			}
		}
		return topFive.map(obj => {
			if (obj['val'] !== 0) {
				return {
					label: `Q${obj['index'] + 1}`,
					value: obj['val'],
				};
			} else {
				return {
					label: '-',
					value: '0',
				}
			}
		});
	}
	renderChart = () => {
		const dataSource = {
		  chart: {
		    caption: 'Diagnostics Results',
		    subCaption: 'Areas for Improvement From 5 Most Recent Entries',
		    "xAxisName": "Questions",
		    "yAxisName": "# of times the best answer wasn't selected",
		  },
		};
		const respData = this.convertResponsesToData(this.state.allResponses);
		dataSource['data'] = respData;
		const tableData = respData.map((data, index) => {
			let q = data['label'];
			if (q === '-') {
				return undefined;
			}
			let num = q.substring(1);
			return (
				<tr key={index}>
					<td style={{width: '33%'}}>{q}</td>
					<td style={{width: '67%'}}>{DIAGNOSTICS_QUESTIONS[num]['question']}</td>
				</tr>
			);
		}).filter(el => el !== undefined);
		const chartConfigs = {
		  type: 'column2d',
		  width: '100%',
		  height: 300,
		  dataFormat: 'json',
		  dataSource: dataSource,
		};
		return (
			<div>
				<ReactFC {...chartConfigs}/>
				<br />
				<Table striped bordered condensed hover>
					<thead>
						<tr>
							<th style={{width: '33%'}}>Question</th>
							<th style={{width: '67%'}}>Content</th>
						</tr>
					</thead>
					<tbody>
						{tableData}
					</tbody>
				</Table>
			</div>
		);
	}
	componentDidMount() {
		db.getResponses(this.state.authUser.uid).then(snapshot => {
			const values = snapshot.val();
			const entryKeys = Object.keys(values).filter(value => !!Number(value));
			const entriesOnly = entryKeys.map(key => values[key]);
			this.setState({ allResponses: entriesOnly });
		});
	}
	render() {
		if (!!this.state.allResponses) {
			return (
				<ContainerDiv>
					{this.renderChart()}
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