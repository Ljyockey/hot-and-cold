import React from 'react';

export default function ResetButton(props) {
	return (<button onClick={e => 
			props.resetClick(e.target.value)}>
			New Game</button>);
}