import React from "react";
import { Outlet } from "react-router-dom";

const Detail = () => {
  return (
    <div>
      <div>상품 상세 페이지</div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Detail;
