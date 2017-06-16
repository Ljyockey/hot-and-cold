import React from 'react';

export default function Description(props) {
	return (
		<div className="description">
			<h2>What?</h2>
			<p>This is a Hot or Cold Number Guessing Game. 
			The game goes like this:</p>
			<ol>
				<li>I pick a random secret number between 1 to 100 and keep it hidden.</li>
				<li>You need to guess until you can find the hidden secret number.</li>
				<li>You will get feedback on how close ("hot") or far ("cold") your guess is.</li>
			</ol>
		</div>
		);
}