// destructured Component from React.Component
// React from react module is default
// { Component } from react module is not
import React, { Component } from 'react';
// import './Recipe.css';

// destructured import above: Component = React.Component
// this.props object created by React 
class Recipe extends Component {
  render() {
    // tricky ingredients
    // why must array be destructured with {} ?
    // oh crap, even more complexity
    // destructure title, impacts ingredients
    // const { title }  = this.props;
    const {title, img, instructions } = this.props;
//    const ingredients = this.props.ingredients.map( ( ing )  => (
//      <li>{ ing }</li>
    const ingredients = this.props.ingredients.map( ( ing, index )  => (
      // is this converting an index array to an object?
      <li key={ index }>{ ing }</li>
    
    ));
    return (
      <div className="recipe-card">
        <div className="recipe-card-image">
          <img src={ img } alt= { title } />
        </div>
        <div className="recipe-card-content">
          <h3 className="recipe-title">{ title }</h3>
          <h4>Ingredients:</h4>
          <ul>
            { ingredients }
          </ul>
          <h4>Instructions:</h4>
          <p>{ instructions }</p>
        </div>
      </div>
      // in order to add <ul> element, must have parent level element
      /* blow this all away
      <div>
        <div>Recipe { title }</div>
        <ul>
          { ingredients }
        </ul>
      </div>
      */
      // <div>Recipe { this.props.title }</div>
    );
  }
}

export default Recipe;