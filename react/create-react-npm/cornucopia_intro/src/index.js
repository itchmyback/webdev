import React from 'react';
import ReactDOM from 'react-dom';
// import from file modules must reference path ie ./
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Garfield from './Garfield';
import FeelingsList from './FeelingsList';

// note - if App.js did not export by default, in other words
// export { App },
// would need to use
// import { App } from './App' above

ReactDOM.render(
  <React.StrictMode>
  {/* <App /> */}
    <Garfield />
    <FeelingsList />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
