import React, { useState } from 'react'

import Cart from './Cart';
import Order from './Order';
import Result from './Result';

import SettingContext from './contexts/settings'

export default function(){
  /* settings */
  let [ settings, setSettings ] = useState({ lang: 'ru', theme: 'light' });

  /* router parody */
  let [ page, setPage ] = useState('cart');
  let moveToCart = () => setPage('cart');
  let moveToOrder= () => setPage('order');
  let moveToResult = () => setPage('result');

  /* products */
  let [ products, setProducts ] = useState(productsStub());

  let setProductCnt = (id, amount) => {
    setProducts(products.map(product => product.id != id ? product : ({ ...product, amount })));
  }

  let removeProduct = (id) => {
    setProducts(products.filter(el => el.id !== id));
  }

  /* order */
  let [ orderForm, setOrderForm ] = useState([
    { name: 'email', label: 'Email', value: '', valid: false, pattern: /^.+@.+$/ },
    { name: 'phone', label: 'Phone', value: '', valid: false, pattern: /^\d{5,12}.+$/ },
    { name: 'name', label: 'Name', value: '', valid: false, pattern: /^.{2,}$/ }
  ]);

  let orderData = {};

  orderForm.forEach(field => {
    orderData[field.name] = field.value;
  });

  let orderFormUpdate = (name, value) => {
    setOrderForm(orderForm.map(field => {
      if(field.name != name){
        return field;
      }

      let valid = field.pattern.test(value);
      return { ...field, value, valid };
    }));
  }

  return <SettingContext.Provider value={settings}>
    <div className="container mt-1">
      { page === 'cart' &&
        <Cart
          onNext={moveToOrder}
          products={products}
          onChange={setProductCnt}
          onRemove={removeProduct}
        />
      }
      { page === 'order' &&
        <Order
          fields={orderForm}
          onChange={orderFormUpdate}
          onPrev={moveToCart}
          onNext={moveToResult}
        />
      }
      { page === 'result' &&
        <Result
          products={products}
          orderData={orderData}
        />
        }
      <hr/>
      <footer>
        <button type="button" onClick={() => setSettings({ ...settings, lang: 'uk' })}>uk</button>
        <button type="button" onClick={() => setSettings({ ...settings, lang: 'en' })}>en</button>
      </footer>
    </div>
  </SettingContext.Provider>;
}

function productsStub() {
  return [
    {
      id: 100,
      title: "Water",
      price: 10.0,
      amount: 20,
      total_amount: 20
    },
    {
      id: 101,
      title: "Oatmeal",
      price: 30.0,
      amount: 1,
      total_amount: 10
    },
    {
      id: 102,
      title: "Butter",
      price: 50.0,
      amount: 3,
      total_amount: 15
    },
    {
      id: 103,
      title: "Salt",
      price: 1.0,
      amount: 5,
      total_amount: 50
    },
    {
      id: 104,
      title: "Walnuts",
      price: 30.0,
      amount: 2,
      total_amount: 20
    }
  ];
}
