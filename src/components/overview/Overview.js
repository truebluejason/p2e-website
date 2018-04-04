import React from 'react';
import withAuthorization from '../higherorder/withAuthorization';

const OverviewPage = () => {
	return (
		<div>Overview coming soon</div>
	);
};

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(OverviewPage);