import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Color from './Color.js';
import Rngesus from './Rngesus.js';

// presentational component - a function which returns JSX
const TodoItem = ( { text } ) => (
	<li>{ text }</li>
)

class App extends Component {
	constructor( props ) { // boiler plate
		super( props );
		// todos state - an object, two keys - todos and newTodo, set to empty array and empty string
		this.state = {
			todos: [],
			newTodo: ''
		};
		// bind
		// "this" inside the constructor, so it refers to the App component
		// but "this" for the handles actually refers to global
		// so App this is bind-ed to handles
		this.handleSubmit = this.handleSubmit.bind( this );
		this.handleChange = this.handleChange.bind( this );
	} // end constructor
		
	// class functions
	handleChange( event ) {
		// react event handling - input element's onchange event
		this.setState({ [ event.target.name ]: event.target.value })
	}

	// we have an array that contains todos
	// add one more value to the end of the array - this.state.newTodo
	// update todos array in setState
	// then set the form to be an empty string
	handleSubmit( event ) {
		event.preventDefault();
		const todos = [ ...this.state.todos, this.state.newTodo ];
		this.setState( { todos, newTodo: '' } );
	}

	render() {
		// map over the array to create a new TodoItem - the presentational component from above
		const todoslist = this.state.todos.map(( todo, index ) => (
			<TodoItem key={ index } text={ todo } />
		));
		return (
			// will need a form
			<div className="App">
				{/* <Color /> */}
				<Rngesus />
				<h1>Simple Todo App</h1>
				<form onSubmit={ this.handleSubmit }>
					<input
						className="todo-input"
						autoComplete="off"
						type="text"
						name="newTodo"
						placeholder="What needs to be done?"
						// added near the end of the exercise
						value={ this.state.newTodo }
						onChange={ this.handleChange }
					/>
					<button type="submit" className="save-button">SAVE</button>
				</form>
				<div className="todo-content">
					<ol>
						{/* added near the end of the exercise */}
						{ todoslist }
					</ol>
				</div>
			</div>
		);
	}
}

export default App;