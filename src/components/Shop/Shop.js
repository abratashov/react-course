import React, { useState } from 'react';
import useStore from './../../hooks/useStore';

import Cart from './Cart';
import Order from './Order';
import Result from './Result';

import SettingContext from './../../contexts/settings'

export default function(){
  let [ settings, setSettings ] = useState({ lang: 'ru', theme: 'light' });
  let [ cartStore, orderStore] = useStore('cart', 'order');
  let { products } = cartStore;
  let { orderForm, orderFormUpdate, orderData } = orderStore;

  /* router parody */
  let [ page, setPage ] = useState('cart');
  let moveToCart = () => setPage('cart');
  let moveToOrder= () => setPage('order');
  let moveToResult = () => setPage('result');


  return <SettingContext.Provider value={settings}>
    <div className="container mt-1">
      { page === 'cart' && <Cart onNext={moveToOrder} /> }
      { page === 'order' && <Order onPrev={moveToCart} onNext={moveToResult} />}
      { page === 'result' && <Result products={products} orderData={orderData}/>}
      <hr/>
      <footer>
        <button type="button" onClick={() => setSettings({ ...settings, lang: 'uk' })}>uk</button>
        <button type="button" onClick={() => setSettings({ ...settings, lang: 'en' })}>en</button>
      </footer>
    </div>
  </SettingContext.Provider>;
}
