import React from 'react';

import useStore from './../../hooks/useStore';

import { observer } from 'mobx-react-lite';

import { Link, useParams } from 'react-router-dom';
import E404 from './E404';

export default observer(Product);

function Product(){
  let [ productsStore, cartStore ] = useStore('products', 'cart');
  let { find } = productsStore;
  let { add, remove, inCart } = cartStore;
  let params = useParams();

  let product = find(params.id);

  if(!/^[1-9]+\d*$/.test(params.id) || product === undefined) {
    return <E404 />;
  }

  return <div>
    <h1>{product.title}</h1>
    <hr/>
    <Link to="/">Back to catalog</Link>
    <hr/>
    { inCart(product.id)
      ? <button onClick={() => remove(product.id)} type="button" className="btn btn-danger">Remove item</button>
      : <button onClick={() => add(product.id)} type="button" className="btn btn-success">Add to cart</button>
    }
  </div>;
}
