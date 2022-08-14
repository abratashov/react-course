import Cart from './cart';
import Order from './order';
import Products from './products';

import * as cart from './../api/cart';
import * as products from './../api/products';

export default class RootStore{
  constructor() {
    this.storage = window.localStorage;

    this.api = { cart, products };

    this.cart = new Cart(this);
    this.order = new Order(this);
    this.products = new Products(this);
  }
}
