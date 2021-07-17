import React, { Component } from 'react';
import logo from './logo.svg';

// provided by React-Router-Dom
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './component/HomeComponent';
// import About from './AboutComponent';
import About from './component/AboutComponent'
import Contact from './component/ContactComponent';

class App extends Component {
	render() {
		return (

	// enclose inside Router so that Link to will work
	<Router>
    <div className="App">
	<div className="container" >
		{/* The problem with anchor tags is they trigger a page refresh */}
		{/* Link to replaces a href */}
		{/* goal is a single page? */}
		<ul>
			{ /*
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/contact">Contact</a></li>
			*/ }
			{/* note the change to home */}
			<li><Link to="/home">Home</Link></li>
			<li><Link to="/about">About</Link></li>
			<li><Link to="/contact">Contact</Link></li>
		</ul>
		<Route path="/home" component={ Home } />
		<Route path="/about" component={ About } />
		<Route path="/contact" component={ Contact } />
		<hr />
	</div> 
    </div> {/* end div App */}
	</Router>

		); // end return()
	} // end render()
} // end class {}

export default App;
