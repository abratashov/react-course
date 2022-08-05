import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App'

ReactDom.render(
  <div>
    <App/>
  </div>,
  document.querySelector('.app')
);
