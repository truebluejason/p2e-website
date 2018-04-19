import React from 'react';
import PropTypes from 'prop-types';

// Simple Div that fills the screen
const ContainerDiv = (props) => {
	const divStyle = {
		backgroundColor: 'rgb(248,248,248)', 
		border: '3px solid rgb(225,225,225)', 
  		borderRadius: 4, 
		display: 'flex', 
		flexDirection: 'column', 
		justifyContent: 'center', 
		margin: 12,
		padding: 16,
	};
	return (
		<div style={divStyle}>
			{props.children}
		</div>
	)
}

const SimpleDiv = (props) => {
	const divStyle = {
		backgroundColor: 'rgb(225,225,225)', 
  		borderRadius: 4, 
  		boxSizing: 'border-box',
  		height: '100%',
		padding: 16,
	}
	return (
		<div style={divStyle}>
			{props.children}
		</div>
	)
}

export {
	ContainerDiv,
	SimpleDiv
};