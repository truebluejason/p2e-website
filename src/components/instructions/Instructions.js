import React from 'react';
import InstructionsPages from './InstructionsPages'
import withAuthorization from '../higherorder/withAuthorization';
import withLevel from '../higherorder/withLevel';
import bootstrapClasses from '../../assets/bootstrap';

class InstructionsPage extends React.Component {
	render() {
		const divStyle = {
			backgroundColor: 'rgb(248,248,248)', 
			border: '3px solid rgb(225,225,225)', 
	  		borderRadius: 4, 
			display: 'flex', 
			flexDirection: 'column', 
			justifyContent: 'center', 
			margin: 12,
			padding: 16,
		}
		const pageContent = InstructionsPages[this.props.currentPageLevel - 1];
		return (
			<div style={divStyle}>
				{!!pageContent ? pageContent() : <h3>There was an error.</h3> }
			</div>
		);
	}
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(withLevel(InstructionsPage));