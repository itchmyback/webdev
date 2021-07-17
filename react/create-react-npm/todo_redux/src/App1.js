// import the state hook from react
// recall, a hook is like a placeholder access point into code
// pulling useState via destructure out of react module
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// note - using function() old school JS style vs newer Classes
// function App() {
export function App() {
	// useState( array ) - destructure todos[] from something?
	// { todos: array[] } - so implies argument is not an array, but an object
	const initialState = useState({
		todos: [
			{
			id: 1,
			description: "Call mom",
			isComplete: false
			},
			{
			id: 2,
			description: "Go shopping",
			isComplete: false
			}
		]
	});

	return (
	<div className="App">
		<header className="App-header">
		<h1>Todomatic</h1>
		</header>
	</div>
	);
}

export default App;