import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';
import StoreContext from './contexts/store';

import RootStore from './store';

const store = new RootStore();

ReactDom.render(
  <StoreContext.Provider value={store}>
    <App/>
  </StoreContext.Provider>,
  document.querySelector('.app')
);
