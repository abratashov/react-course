import { makeAutoObservable } from 'mobx';

export default class Cart {
  products = productsStub();

  get total() {
    return this.products.reduce((sum, product) => sum + product.price * product.amount, 0);
  }

  change = (id, amount) => {
    let product = this.products.find(pr => pr.id == id);

    if (product) {
      product.amount = Math.max(1, Math.min(product.total_amount, amount));
    }
  }

  remove = (id) => {
    this.products = this.products.filter(product => product.id !== id);
  }

  constructor(rootStore) {
    makeAutoObservable(this); // it makes all defined data reactive - observable, computed, action
    this.rootStore = rootStore;
  }
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


/* constructor(){
  this.products = observable(this.products);
  this.total = computed(this.total);
  this.change = action(this.total);
  this.change = action(this.total);
} */
