// destructured Component from React.Component
// React from react module is default
// { Component } from react module is not
import React, { Component } from 'react';
import logo from './logo.svg';
import './RecipeApp.css';
import Recipe from './Recipe';
import Navbar from './Navbar';
import RecipeList from './RecipeList';

// destructured import above: Component = React.Component
class RecipeApp extends Component {
	render() {
	return (
		<div className="App">
			<Navbar />
			{/* <Recipe title="pasta" /> */}
			{/* <Recipe title="pasta" ingredients={ [ "flour", "water" ] } instructions="Mix ingredients" img="https://i.imgur.com/2q2OgnC.jpg"/> */}
			{/* moved Recipe to RecipeList */}
			<RecipeList />

			<header className="App-header">
				<img src={ logo } className="App-logo" alt="logo" />
				<h1 className="App-title">Welcome to React</h1>
			</header>
			<p className="App-intro">
			To get started, edit <code>src/App.js</code> and save to reload.
			</p>
		</div>
	);
	}
}

export default RecipeApp;