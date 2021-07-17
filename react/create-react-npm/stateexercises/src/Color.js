import React, { Component } from 'react';
import logo from './logo.svg';
// import './Color.css';

class Color extends Component {
	constructor( props ) { // boiler plate
		super( props );
		// state is an object that contains all the info
		this.state = { favColor: 'red' };
		// to change state
		setTimeout( () => {
			this.setState({ favColor: 'blue' })
			}, 5000
		);
	} // end constructor
		
	render() {
		return (
			<div className="Color">
			{/* read the current state */}
			My favorite color is { this.state.favColor }
			</div>
		);
	}
}

export default Color;