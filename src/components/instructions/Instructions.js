import React from 'react';
import withAuthorization from '../higherorder/withAuthorization';
import withLevel from '../higherorder/withLevel';

const InstructionsPage = (props) => {
	return (
		<div>Instructions coming soon and {props.currentPageLevel}</div>
	);
};

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(withLevel(InstructionsPage));