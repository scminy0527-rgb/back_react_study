import React from "react";
import { Outlet } from "react-router-dom";

const DetailLayout = () => {
  return (
    <div>
      <header>상품제목: 디테일 레이아웃 </header>

      {/* main 영역에는 라우터에 넣은 하위 모듈 전부 보여주는 개념 */}
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default DetailLayout;
