// simplify because this component is static
// import React, { Component } from 'react';
import React from 'react';

// class HomeComponent extends Component {

const HomeComponent = () => 
	// note - this is ES6 react nomenclature
	// where () replaces { return }
	// So when do you need { return }? If the return is complex,
	// or if additional code needs to be executed before the return content eg console.log()
	(
//	render() {
//	return(

		<div>
			<h1>Home View</h1>
			<img src="https://i.imgur.com/aXtojQT.gif" width="70%" alt="comic" />
		</div>

	);
//	} // end render()
// }
// } //end class

export default HomeComponent;