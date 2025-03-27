import React from "react";

export default function StuffCard({ name, price }) {
  const format = (price) => "$ " + price;

  return (
    <div className="stuff">
      <h4>{name}</h4>
      <small>{format(price)}</small>
    </div>
  );
}
