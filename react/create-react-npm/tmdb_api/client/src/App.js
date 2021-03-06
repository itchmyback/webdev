import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// first time importing fake data?
// why isn't it
// import { movies } from './fakedata';
// import movies from './fakedata';
// JM has
import { movies } from './fakeData';


class App extends Component {
	// state
	constructor( props ) {
		super( props );

const notmovies = [
	{
	id: 0, 
	poster_src: "https://image.tmdb.org/t/p/w185/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg", 
	title: "Avengers: Infinity War",
	overview: "The Avengers fight Thanos."
	},
	{
	id: 1, 
	poster_src: "https://image.tmdb.org/t/p/w185/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg", 
	title: "The Avengers", 
	overview: "The Avengers fight Loki."
	}
]
		movies.forEach( ( movie ) => console.log ( movie ));
		/*
		this.state = {};

		let movieRows = [];
		let movies = [1, 2, 3];
//		movies.forEach( ( movie ) => console.log ( movie ));
		movies.forEach( ( movie ) => {
			const movieRow = (
				<div key={ movie.id }>
					<img alt="poster" src={ movie.poster_src }></img>
					{ movie.title }
				</div>
			); // parenthesis? groups multiline elements?
			movieRows.push( movieRow );
		});
		*/
		// now change state
		this.state = {
			// rows: movieRows
			rows: []
		}
	}

	// performSearch() - don't want it to execute every time page renders,
	// so needs to be outside render
	performSearch( searchTerm ) {
		let keys = { tmdb_api_key: "801f26d3492413889e17ba540499f4bd" };
		const url = 'https://api.themoviedb.org/3';
		const movieRoute = `/search/movie?api_key=${keys.tmdb_api_key}&query=${searchTerm}`;
		console.log( keys.tmdb_api_key );
		const endpoint = url + movieRoute;
		fetch( endpoint )
		.then( response => response.json() )
		.then( searchResults => {
			console.log( searchResults );
			let movieRows = [];
			// what about subbin movies for searchResults?
			// what is being looked for? it would be an array
			// it would be results
			// if searchResults is an object and it has an array, then searchResults.results
			// could also do movies = searchResults.results
			// movies.forEach( ( movie ) => {
			// searchResults.forEach( ( movie ) => {
			searchResults.results.forEach( ( movie ) => {
				// what about getting the base url and file size from queries?
				let newPoster = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
				const movieRow = (
					<div key={ movie.id }>
						<img alt="poster" src={ newPoster }></img>
						{ movie.title }
						<p>{ movie.overview }</p>
					</div>
				); // parenthesis? groups multiline elements?
				movieRows.push( movieRow );
			});
			// now must set state to empty it?
			// so, to set state, which is a function, must pass in the new state
			// this.setState = { rows: movieRows } is wrong
			this.setState( { rows: movieRows } );
		})
		.catch()
	}

	// changehandler
	searchChangeHandler = ( event ) => {
		// do this to see where we're at 
		console.log( event );
		// now do this
		console.log( event.target.value );
		// this is what to pass 		
		// also add in dne check
		if( !event.target.value ) {
			this.performSearch( event.target.value );
		};
	}

	// render
	render() { return (
		<div className="App">
			<h1>Movie Search</h1>
			{/* <input type="text" placeholder="enter a movie"/> */}
			<input
			type="text"
			placeholder="enter a movie"
			id="inputField"
			onChange={ this.searchChangeHandler }
			/>
			{/* but where did rows come from? */}
			{ this.state.rows }
		</div>
	);}
}

export default App;