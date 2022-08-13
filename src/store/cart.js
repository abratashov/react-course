import { makeAutoObservable } from 'mobx';

export default class Cart {
  items = [
    { id: 100, cnt: 3 },
    { id: 101, cnt: 1 }
  ];

  get itemsDetailed(){
    return this.items.map(item => {
      let details = this.rootStore.products.find(item.id);
      return { ...details, ...item };
    })
  }

  get total() {
    return this.itemsDetailed.reduce((sum, product) => sum + product.price * product.cnt, 0);
  }

  inCart = (id) => {
    return this.items.some(item => item.id == id);
  }

  change = (id, cnt) => {
    let item = this.items.find(item => item.id == id);

    if (item) {
      let details = this.itemsDetailed.find(item => item.id == id);
      item.cnt = Math.max(1, Math.min(details.rest, cnt));
    }
  }

  add = (id) => {
    if(!this.inCart(id)) {
      this.items.push({id, cnt: 1});
    }
  }

  remove = (id) => {
    this.items = this.items.filter(item => item.id != id);
  }

  constructor(rootStore) {
    makeAutoObservable(this); // it makes all defined data reactive - observable, computed, action
    this.rootStore = rootStore;
  }
}

/* constructor(){
  this.items = observable(this.items);
  this.total = computed(this.total);
  this.inCart = action(this.inCart);
  ...
} */
