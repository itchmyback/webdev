// simplify because this component is static
// import React, { Component } from 'react';
import React from 'react';

const AboutComponent = () => 
	// note - this is ES6 react nomenclature
	// where () replaces { return }
	(
//	render() {
//	return(

		<div>
			<h1>About View</h1>
			<img src="https://i.imgur.com/QKDuIna.gif" width="70%" alt="comic" />
		</div>

	);
//	} // end render()
// }
// } //end class


export default AboutComponent;