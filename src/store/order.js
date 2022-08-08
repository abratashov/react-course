import { makeAutoObservable } from 'mobx';

export default class Order {
  orderForm = initOrder();

  get formValid() {
    return this.orderForm.every(f => f.valid);
  }

  get orderData() {
    let res = {};

    this.orderForm.forEach(field => {
      res[field.name] = field.value;
    });

    return res;
  }

  orderFormUpdate = (name, value) => {
    let field = this.orderForm.find(field => field.name == name);

    if (field) {
      field.value = value;
      field.valid = field.pattern.test(value);
    }
  }

  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }
}

function initOrder() {
  return [
    { name: 'email', label: 'Email', value: '', valid: false, pattern: /^.+@.+$/ },
    { name: 'phone', label: 'Phone', value: '', valid: false, pattern: /^\d{5,12}.+$/ },
    { name: 'name', label: 'Name', value: '', valid: false, pattern: /^.{2,}$/ }
  ];
}
