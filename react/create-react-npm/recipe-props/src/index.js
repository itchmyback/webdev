import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RecipeApp from './RecipeApp';
import RecipeApp0 from './RecipeApp0';
import RecipeApp1 from './RecipeApp1';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <RecipeApp1 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
