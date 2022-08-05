import React, {useState, useMemo} from "react";
// import MinMaxRef from "./MinMaxRef";
import MinMax from './MinMax';

export default function() {
  let [products, setProducts] = useState(stubProducts);

  let updateProduct = (id, amount) => {
    setProducts(products.map(pr => pr.id != id ? pr : ({...pr, amount}) ))
  }

  function totalPriceFun() {
    return products.map(product => product.price * product.amount).reduce((prev, next) => {return prev + next}, 0);
  }
  const totalPrice = useMemo(totalPriceFun, [products]);

  let removeProduct = (id) => {
    let updatedProducts = products.filter(product => product.id != id);
    setProducts(updatedProducts);
  }

  return <div>
    <h1>Cart</h1>
    <table>
      <tbody>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Price</th>
          <th>Amount</th>
          <th>Total</th>
          <th>Actions</th>
        </tr>
        { products.map((product, i) => (
          <tr key={product.id}>
            <td>{ i + 1 }</td>
            <td>{ product.title }</td>
            <td>{ product.price }</td>
            <td>
              <MinMax max={product.total_amount} current={product.amount} onChange={count => updateProduct(product.id, count)} />
            </td>
            <td>{ product.price * product.amount }</td>
            <td>
              <button onClick={ () => removeProduct(product.id) }>Remove</button>
            </td>
          </tr>
          ))
        }
      </tbody>
    </table>
    <b>Total price:</b> { totalPrice }
  </div>
}

function stubProducts() {
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
