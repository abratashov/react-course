import React, {useState} from 'react';
import PropTypes from 'prop-types';

Cart.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number.isRequired
};

export default function Cart({min = 0, max}) {
  let [amount, setAmount] = useState(min);

  function incr() {
    updateAmount(amount + 1)
  }

  function decr() {
    updateAmount(amount - 1)
  }

  function changeAmount(e) {
    const newAmount = parseInt(e.target.value, 10);
    updateAmount(newAmount)
  }

  function updateAmount(value) {
    if (isAmountValid(value)) {
      setAmount(value);
    } else {
      setAcceptableAmount(value);
    }
  }

  function setAcceptableAmount(value) {
    let acceptableAmount = parseInt(value) || min;
    acceptableAmount = acceptableAmount > max ? max : acceptableAmount;
    acceptableAmount = acceptableAmount < min ? min : acceptableAmount;

    setAmount(acceptableAmount);
  }

  function isAmountValid(value) {
    return Number.isInteger(value) &&
           value >= min &&
           value <= max;
  }

  return <>
    <div>
      <div>
        <b>Cart</b>
      </div>
      <span>
        <button onClick={ decr }>-</button>
        &nbsp;{ amount }&nbsp;
        <input type="text" value={ amount } onChange={ changeAmount } />
        <button onClick={ incr }>+</button>
      </span>
    </div>
  </>
}
