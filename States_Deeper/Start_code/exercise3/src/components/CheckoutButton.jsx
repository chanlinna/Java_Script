import React from "react";

export default function CheckoutButton({ total }) {
  return (
    <div className="checkout-button">
      <p>Checkout</p>
      <p className="right">{"$ " + total}</p>
    </div>
  );
}
