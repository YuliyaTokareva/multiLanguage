import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18n';
const rootElement = document.querySelector('#root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
