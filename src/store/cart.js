import { makeAutoObservable, runInAction } from 'mobx';

const BASEURL = 'http://faceprog.ru/reactcourseapi/cart/';

export default class Cart{
  items = [];
  #token = null;
  idsInProccess = [];

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

  inProccess = (id) => {
    return this.idsInProccess.find(el => el == id);
  }

  change = async (id, cnt) => {
    let item = this.items.find(item => item.id == id);

    if(item !== undefined){
      let details = this.itemsDetailed.find(item => item.id == id);
      cnt = Math.max(1, Math.min(details.rest, cnt));
      let res = await this.api.change(this.#token, id, cnt);

      if(res){
        runInAction(() => {
          item.cnt = cnt;
        });
      }
    }
  }

  add = async (id) => {
    if(!this.inCart(id) && !this.inProccess(id)){
      this.idsInProccess.push(id);
      let res = await this.api.add(this.#token, id);

      runInAction(() => {
        if(res){
          this.items.push({ id, cnt: 1 });
        }

        this.idsInProccess = this.idsInProccess.filter(el => el != id);
      });
    }
  }

  remove = async (id) => {
    if(this.inCart(id) && !this.inProccess(id)){
      this.idsInProccess.push(id);
      let res = await this.api.remove(this.#token, id);

      runInAction(() => {
        if(res){
          this.items = this.items.filter(item => item.id != id);
        }

        this.idsInProccess = this.idsInProccess.filter(el => el != id);
      });
    }
  }

  load = async () => {
    let curToken = this.rootStore.storage.getItem('CART__TOKEN');
    let { cart, token, needUpdate } = await this.api.load(curToken);

    if(needUpdate){
      this.rootStore.storage.setItem('CART__TOKEN', token);
    }

    runInAction(() => {
      this.items = cart;
      this.#token = token;
    });
  }

  constructor(rootStore) {
    makeAutoObservable(this); // it makes all defined data reactive - observable, computed, action
    this.rootStore = rootStore;
    this.api = this.rootStore.api.cart;
  }
}

/* constructor(){
  this.items = observable(this.items);
  this.total = computed(this.total);
  this.inCart = action(this.inCart);
  ...
} */
