import React from 'react';
import withAuthorization from '../higherorder/withAuthorization';

const AntidotesPage = () => {
	return (
		<div>Antidotes coming soon</div>
	);
};

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AntidotesPage);