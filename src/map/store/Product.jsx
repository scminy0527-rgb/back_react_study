import React from "react";

const Product = ({ name, price }, key) => {
  // 판매목록 정의
  const itemBlock = (
    <li key={key}>
      {name}: {price.toLocaleString()}원
    </li>
  );
  return itemBlock;
};

export default Product;
