import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import useStore from './../../hooks/useStore';
import RouterView from './../../routes';

import Home from './Home';
import Product from './Product';
import Cart from './Cart';
import CartHeader from './CartHeader';
import Order from './Order';
import Result from './Result';
import E404 from './E404';

import SettingContext from './../../contexts/settings'

export default function(){
  let [ settings, setSettings ] = useState({ lang: 'ru', theme: 'light' });
  let [ orderStore] = useStore('order');
  let { orderForm, orderFormUpdate, orderData } = orderStore;

  return <SettingContext.Provider value={settings}>
    <header>
      <div className="container mt-1">
        <div className="row justify-content-between">
          <div className="col">
            Logo
          </div>
          <div className="col">
            <CartHeader />
          </div>
        </div>
        <hr/>
      </div>
    </header>
    <div className="container">
      <div className="row">
        <aside className="col col-3">
          <ul className="list-group">
            <li className="list-group-item"><Link to="/">Home</Link></li>
            <li className="list-group-item"><Link to="/cart">Cart</Link></li>
            <li className="list-group-item"><Link to="/order">Order</Link></li>
          </ul>
        </aside>
        <main className="col col-9">
          <RouterView />
        </main>
      </div>
      <hr/>
      <footer className="mt-1">
        <button type="button" onClick={() => setSettings({ ...settings, lang: 'uk' })}>uk</button>
        <button type="button" onClick={() => setSettings({ ...settings, lang: 'en' })}>en</button>
        <hr/>
        <div className="container">2022</div>
      </footer>
    </div>
  </SettingContext.Provider>;
}
