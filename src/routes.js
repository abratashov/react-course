import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Home from './components/Shop/Home';
import Product from './components/Shop/Product';
import Cart from './components/Shop/Cart';
import Order from './components/Shop/Order';
import Result from './components/Shop/Result';
import E404 from './components/Shop/E404';

export default function(){
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/product/:id" element={<Product />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/order" element={<Order />} />
    <Route path="/result" element={<Result />} />
    <Route path="*" element={<E404 />} />
  </Routes>
}
