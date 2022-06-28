import React from 'react';
import ReactDom from 'react-dom';

import Cart from './components/Cart'

ReactDom.render(
  <div>
    <div>
      Hello React!
    </div>
    <hr/>
    <Cart min={1} max={5}></Cart>
  </div>,
  document.querySelector('.app')
);
