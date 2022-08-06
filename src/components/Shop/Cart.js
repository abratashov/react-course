import React, { useContext } from 'react'
import MinMax from './MinMax'
import SettingContext from './contexts/settings'

export default function({ onNext, products, onChange, onRemove }){
  let total = products.reduce((sum, product) => sum + product.price * product.amount, 0);
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
        { products.map((product, i) => (
          <tr key={product.id}>
            <td>{ i + 1 }</td>
            <td>{ product.title }</td>
            <td>{ product.price }</td>
            <td>
              <MinMax min={1} max={product.total_amount} current={product.amount} onChange={amount => onChange(product.id, amount)} />
            </td>
            <td>{ product.price * product.amount }</td>
            <td>
              <button type="button" onClick={() => onRemove(product.id)}>X</button>
              <button type="button" onClick={() => onChange(product.id, product.total_amount)}>MAX</button>
            </td>
          </tr>
        )) }
      </tbody>
    </table>
    <hr/>
    <strong>Total: { total }</strong>
    <hr/>
    <button type="button" className="btn btn-primary" onClick={onNext}>Move to order</button>
  </div>;
}
