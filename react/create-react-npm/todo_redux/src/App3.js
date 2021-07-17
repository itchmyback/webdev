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
	// { todos: array[] } - this is an object, not an array
//	const initialState = useState({
	const initialState = {
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
	};

	// an array of state and setState?
	const [ state, setState ] = useState( initialState );
// replace with but why
// const [ todos, setTodos ] = useState( initialState );
// now changing it back to state, setState?


		 console.log( state.todos );
	return (
	<div className="App">
		<header className="App-header">
		<h1>Todomatic</h1>
	{/* established state above, now put in ol */}
	<ol>
		{
		// () for multiline
		//	todos.todos.map( t => (
			state.todos.map( t=> (
				<li>{ t.description }</li>
			))
		}
	</ol>
		</header>
	</div>
	);
}

export default App;