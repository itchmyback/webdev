import React, { Component } from 'react';
import logo from './logo.svg';

// provided by React-Router-Dom
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
	render() {
		return (

    <div className="App">
	<div className="container" >
		{/* The problem with anchor tags is they trigger a page refresh */}
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
		<hr />
	</div> 
    </div> // end div App

		); // end return()
	} // end render()
} // end class {}

export default App;
