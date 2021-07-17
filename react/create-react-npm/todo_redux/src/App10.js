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

	//Update todo - toggle completion status -- PIYUSH new way
	const onclickMarkTodoComplete0 = ( id ) => {
    // create a copy of the state object using the "state" handle
    let newstate = { ...state };
    // this_t is a reference to the specific todo that the user
    // wishes to toggle.  the reference points to the click'ed
    // todo object within the array within the state
    let this_t = newstate.todos.find( t => t.id === id );
    // flip the status
    this_t.isComplete = !this_t.isComplete;

    setState( newstate );

	} // end onclickMarkTodoComplete()

	const onClickMarkTodoComplete = ( id ) => {
		// not working, so
		// setState( updater, [callback])
		setState( function (prevState) {

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
		return prevState;
		})
	} // end onClickMark

	// CREATE
	const onAddTodo = useCallback( (event ) => {
		event.preventDefault();
		if( !state.newTodo) return false;
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
	});


		// CONTROLLED COMPONENT - 
		const onChange = useCallback( ( event ) => {
			// do we need a shallow or deep copy
			let newState = { ...state, 
				newTodo: event.target.value
			};
			setState( newState );
			}, [ state, setState ]
		);

		// DELETE
		const removeTodo = useCallback( (event) => {
			event.stopPropogation();
			let newState = {
				...state,
// filter returns an array, so the issue is that it should not square brackets
//				todos: [
				todos: 
					state.todos.filter( ( t ) => {
//						t.id != parseInt( event.target.id)
						// why did we need return statement?
						return t.id != parseInt( event.target.id)
					})
//				]
			};
			setState( newState );
		}, [ state, setState ])

		// how do we console.log?
		console.log( state.todos );

	// RENDER
	return (
	<div className="App">
		<header className="App-header">
		<h1>Todomatic</h1>
		{/* established state above, now put in ol */}
		{/* use form for create */}
		<form onSumbmit={ onAddTodo }>
			<input
				type="text"
				placeholder="enter todo"
				onChange={ onChange }
				value={ state.newTodo }
				/>
		</form>
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
