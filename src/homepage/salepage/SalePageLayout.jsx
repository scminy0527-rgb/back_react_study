import React from "react";
import { Outlet } from "react-router-dom";

const SalePageLayout = () => {
  return (
    <div>
      <header>
        <div>해당 화면은 구매 페이지 헤더</div>
        {/* 여기에도 시험용 링커를 나중에 둬보기 */}
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default SalePageLayout;
