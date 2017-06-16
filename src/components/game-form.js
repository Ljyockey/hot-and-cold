import React from 'react';

import './game-form.css';

export default function GameForm(props) {
	return (
		<form className="game-form" onSubmit={e => {
		e.preventDefault();	
		props.sendGuess(document.getElementById("guess").value)
		document.getElementById("guess").value=""}}>
			<label for="guess">Make your Guess!</label>
			<input id="guess" type="number" min="1" max="100" 
			placeholder="1-100"/>
			<button className="guess-button" type="submit">Guess</button>
		</form>
		)
}