import React from "react";

const ShoppingMall = ({ name, price }, key) => {
  return (
    <li key={key}>
      -{name}: {price.toLocaleString()}원
    </li>
  );
};

export default ShoppingMall;
