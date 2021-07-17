// destructured Component from React.Component
// React from react module is default
// { Component } from react module is not
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// destructured import above: Component = React.Component
class App extends Component {
 render() {
   return (
     <div className="App">
       <header className="App-header">
         <img src={ logo } className="App-logo" alt="logo" />
         <h1 className="App-title">Welcome to React</h1>
       </header>
       <p className="App-intro">
         To get started, edit <code>src/App.js</code> and save to reload.
       </p>
     </div>
   );
 }
}

export default App;