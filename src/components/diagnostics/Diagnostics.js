import React from 'react';
import withAuthorization from '../higherorder/withAuthorization';

const DiagnosticsPage = () => {
	return (
		<div>Diagnostics coming soon</div>
	);
};

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(DiagnosticsPage);