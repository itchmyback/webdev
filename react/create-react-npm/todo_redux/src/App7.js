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
			isComplete: true
			},
			{
			id: 2,
			description: "Go shopping",
			isComplete: false
			}
		]
	};

	// an array of state and setState?
	// back to this, what is this?
	const [ state, setState ] = useState( initialState );
// replace with but why
// const [ todos, setTodos ] = useState( initialState );
// now changing it back to state, setState?

	const onClickMarkTodoComplete = ( id ) => {
		console.log( "id is: ", id );
		// find index and set state.id property
		// how does findIndex() work?
		let t_index = state.todos.findIndex( t => t.id === id);
		console.log( "index is: ", t_index );
		// todos is an array? no this is object key[value] notation
		let this_t = state.todos[ t_index ];
		console.log( "this_t is: ", this_t );
		// toggle
		this_t.isComplete = !this_t.isComplete;
		// this is a copy of the state
		// and it doesn't work, so go above and do something
		setState( state );
	}

		// how do we console.log?
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
				state.todos.map( t => (
//					<li>
					<li
					// the old need a key
					key={ t.id }
					className={ t.isComplete ? "completed": "not" }
					// go above and define the function onClickMarkTodoComplete()
					// upon examination, page render is not the time to execute this function
					// onClick={ onClickMarkTodoComplete( t.id ) }
					onClick={ () => {
						// something about closures?
						onClickMarkTodoComplete( t.id );
						}
					}
					>
						{ t.description }
					</li>
				))
			}
		</ol>
		</header>
	</div>
	);
}

export default App;