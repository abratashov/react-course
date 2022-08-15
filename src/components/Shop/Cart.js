import React, { useContext } from 'react'
// import MinMax from './MinMax'
import CartRow from './CartRow';
import SettingContext from './../../contexts/settings'
import { observer } from 'mobx-react-lite';
import useStore from './../../hooks/useStore'
import { Link } from 'react-router-dom';

export default observer(Cart);

function Cart({ onNext }){
  let [ cartStore ] = useStore('cart');
  let { itemsDetailed: products, total, remove, change } = cartStore;
  let settings = useContext(SettingContext);

  return <div>
    <h1> { settings.lang == 'uk' ? "Кошик" : "Cart" } </h1>
    <hr/>
    <table>
      <tbody>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Price</th>
          <th>Cnt</th>
          <th>Total</th>
          <th>Action</th>
        </tr>
        { products.map((pr, i) => <CartRow
            key={pr.id}
            num={i + 1}
            { ...pr }
            onChange={change}
            onRemove={remove}
          />
        )}
      </tbody>
    </table>
    <hr/>
    <strong>Total: { total }</strong>
    <hr/>
    <Link className="btn btn-primary" to="/order">Move to order</Link>
  </div>;
}
