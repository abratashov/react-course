import { makeAutoObservable, runInAction } from 'mobx';

export default class Products{
  products = [];

  find = (id) => {
    return this.products.find(product => product.id == id);
  }

  async load(){
    let products = await this.api.all();

    runInAction(() => {
      this.products = products;
    });
  }

  constructor(rootStore){
    makeAutoObservable(this);
    this.rootStore = rootStore;
    this.api = this.rootStore.api.products;
  }
}
