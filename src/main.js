import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';
import StoreContext from './contexts/store';
import RootStore from './store';

const store = new RootStore();
store.cart.load();

store.products.load().then(() => { // Before rendering need to wait finishing fetching products
  ReactDom.render(
    <BrowserRouter>
      <StoreContext.Provider value={store}>
        <App/>
      </StoreContext.Provider>
    </BrowserRouter>
    ,
    document.querySelector('.app')
  )
});
