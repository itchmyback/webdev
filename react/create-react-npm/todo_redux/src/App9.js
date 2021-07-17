// import the state hook from react
// recall, a hook is like a placeholder access point into code
// pulling useState via destructure out of react module
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// added in for create
import { useCallback } from 'react';


// note - using function() old school JS style vs newer Classes
// function App() {
// at some point Piyush removed export, why?
export function App() {
	// useState( array ) - destructure todos[] from something?
	// { todos: array[] } - this is an object, not an array
//	const initialState = useState({
	const initialState = {
		todos: [
			{
			// id: 1,
			id: 302,
			description: "Call mom",
			isComplete: true
			},
			{
			// id: 2,
			id: 420,
			description: "Go shopping",
			isComplete: false
			}
		]
	}; // end initialState

	// an array of state and setState?
	// back to this, what is this?
	const [ state, setState ] = useState( initialState );
// replace with but why
// const [ todos, setTodos ] = useState( initialState );
// now changing it back to state, setState?

	const onClickMarkTodoComplete0 = ( id ) => {
		// not working, so
		// setState( updater, [callback])
		// recall: setState is a function setState() which takes an object as an argument
//		setState( function (prevState) {

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
		// setState( state ) is a copy of the state
		// and it doesn't work, so go above and enclose in function
//		setState( state );
		// Sage method - with spread operator
		// this now sparks a discussion on object copy with shallow vs deep
		setState( { ...state } )
//		return prevState;
//		})
	} // end onClickMarkTodoComplete0
	
	//Update todo - toggle completion status -- PIYUSH new way
	const onClickMarkTodoComplete = ( id ) => {
    // create a copy of the state object using the "state" handle
    let newstate = { ...state };
    // this_t is a reference to the specific todo that the user
    // wishes to toggle.  the reference points to the click'ed
    // todo object within the array within the state
    let this_t = newstate.todos.find( t => t.id === id );
    // flip the status
    this_t.isComplete = !this_t.isComplete;

    setState( newstate );

	} // end onClickMarkTodoComplete()

	// CREATE
	const onAddTodo = event => {
		event.preventDefault();
		// taken from controlled component
		let newState = { ...state,  // capture existing state
			todos: [				// overwrite the todos property in state
				...state.todos,  // capture existing todos
				{
				id: Date.now(),
				description: state.newTodo,
				isComplete: false
				}
			]
		};
		setState( newState ); // swap out the old state for the new state`
	}

	// CONTROLLED COMPONENT - 
	const onChange = useCallback( ( event ) => {
		// do we need a shallow or deep copy
		let newState = { ...state, 
			newTodo: event.target.value
		};
		setState( newState );
	}, [ state, setState ] );

	return (
	<div className="App">
		<header className="App-header">
		<h1>Todomatic</h1>
		{/* adding form for the CREATE portion */}
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
} // end App

export default App;
