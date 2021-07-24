import React from 'react'
import Child from './Child'

class Parent extends React.Component {

  constructor(props){
    super(props)
    this.state = {name: ''}

	// step 3. bind handler function
	this.handleChange = this.handleChange.bind( this );
  }

  // step 2. define handleChange() method
  // display the new state var name, update with setState()
  // debug - steal from tmdb exercise, maybe add event and event.target.value
  // and use arrow function, maybe get rid of bind() ?
  /*
  handleChange() {
	this.setState({ name: this.state.name })
  }
  */

handleChange = ( event ) => {
		// do this to see where we're at 
		console.log( event );
		// now do this
		console.log( event.target.value );
		// this is what to pass 		
		// also add in dne check
		if( !event.target.value ) {
//			this.performSearch( event.target.value );
			this.setState({ name: event.target.value })
		};
	}


  render(){
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
		{/* step 1. add props to child element with value of parent method handleChange
			Since it updates with typing, it is probably an on-change event handler
			Inside child component, the props is equal to this.props.sendData and will use onChange or something */}
		
        {/* <Child /> */}
        <Child sendData={ this.handleChange }/>
      </div>
    )
  }

} 

export default Parent