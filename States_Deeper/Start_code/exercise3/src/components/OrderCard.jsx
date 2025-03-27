import React from "react";
import { useState } from "react";

export default function OrderCard({ product, price, iniQuantity, updateQuantity }) {
  const [orderQuantity, setQuantity] = useState(iniQuantity);
 
  function handleIncrement(){
    const newQuantity = orderQuantity + 1;
    setQuantity(newQuantity);
    updateQuantity(newQuantity);
  }
  function handleDecrement(){
    if (orderQuantity > 0) {
      const newQuantity = orderQuantity - 1;
      setQuantity(newQuantity);
      updateQuantity(newQuantity);
    }
  }

  return (
    <div className="order">
      <div>
        <h4>{product}</h4>
        <small>${price}</small>
      </div>

      <div className="order-quantity">
        <div className="order-button" onClick={handleDecrement} style={{ backgroundColor: orderQuantity === 0 ? '#bfbfbf' : '' }}
          disabled={orderQuantity === 0}>-</div>
        <h4>{orderQuantity}</h4>
        <div className="order-button" onClick={handleIncrement}>+</div>
      </div>
    </div>
  );
}
