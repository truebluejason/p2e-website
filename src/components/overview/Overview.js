import React from 'react';
import withAuthorization from '../higherorder/withAuthorization';

const OverviewPage = () => {
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
	const h3Style = { textAlign: 'center' };
	const pStyle = { textIndent: 12 };
	return (
		<div style={divStyle}>
			<h3 style={h3Style}>What is meditation?</h3>
			<br />
			<p style={pStyle}>
				In essence, meditation is a practise that aims to help you see 
				each and every moment of your life as clearly as possible. The practise 
				often starts by training one's attention through restricting its natural 
				movement.
			</p>
			<h3 style={h3Style}>Why should I meditate?</h3>
			<br />
			<p style={pStyle}>
				There are many scientifically documented benefits of meditation.
				This section will be populated soon, but for now
				<a href="https://en.wikipedia.org/wiki/Research_on_meditation" target="_blank">
					&nbsp;this wikipedia link&nbsp;
				</a>
				gives a good description of what effects enhanced attention and mindfulness
				can have on your health, mood, and even the sense of self.
			</p>
			<h3 style={h3Style}>More contents coming soon</h3>
		</div>
	);
};

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(OverviewPage);