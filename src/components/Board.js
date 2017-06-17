import React from 'react';
import GameForm from './game-form';
import ResetButton from './reset-button';
import Description from './description';

import './Board.css';

export default class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			randomNumber: 
				Math.floor(Math.random()*(100)+1),
			latestGuess: 0,
			tries: 0,
			hotOrCold: '',
			previousGuesses: []
		};
	}

	checkGuess(value) {
		this.setState({
			latestGuess: value,
			tries: this.state.tries + 1
		});
		//adds commas and space if not first guess
		if (this.state.previousGuesses.length > 0) {
			this.state.previousGuesses.unshift(`${value}, `);
		} else {
			this.state.previousGuesses.push(`${value}`);
		}
		//gets difference between guess and correct answer
		var checker = 
			(value > this.state.randomNumber) ?
			value - this.state.randomNumber :
			this.state.randomNumber - value;
		//this runs if answer is incorrect
		if (checker !== 0) {
			(checker <= 10) ?
			this.setState({hotOrCold: 'HOT'}) :
			this.setState({hotOrCold: 'COLD'});
		//this runs if the answer is correct	
		} else {
			this.setState({
				hotOrCold: `${value} is correct!`
			});
		}
	}

	resetGame(value) {
		this.setState({
			randomNumber: 
				Math.floor(Math.random()*(100)+1),
			latestGuess: 0,
			tries: 0,
			hotOrCold: '',
			previousGuesses: []
		});
	}

	render() {
		return (
			<div className="app-container">
				<h1>Hot or Cold</h1>
				<div className="board">
					<GameForm sendGuess={value => this.checkGuess(value)}/>
					<ResetButton resetClick={value => this.resetGame(value)} />
				</div>
				<div className="info">
					<p>Tries: {this.state.tries}</p>
					<p>Previous Guesses: {this.state.previousGuesses}</p>				
					<p className="hot-or-cold">{this.state.hotOrCold}</p>
				</div>
				<Description />
			</div>
			)
	}
}