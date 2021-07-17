// destructured Component from React.Component
// React from react module is default
// { Component } from react module is not
import React, { Component } from 'react';
// import './Recipe.css';

// destructured import above: Component = React.Component
// this.props object created by React 
class Recipe0 extends Component {
  render() {
    // tricky ingredients
    // why must array be destructured with {} ?
    // oh crap, even more complexity
    // destructure title, impacts ingredients
    // const { title }  = this.props;
    const {title, img, instructions } = this.props;
    return (
      // in order to add <ul> element, must have parent level element
	  /*
      <div>
        <div>Recipe { title }</div>
        <ul>
          { ingredients }
        </ul>
      </div>
	  */
    	<div>Recipe { this.props.title }</div>
    );
  }
}

export default Recipe0;