import React from "react";
import { Link, Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <div>
      <header>
        <div>환영합니다.</div>
        {/* 링커 두기 */}
        <Link to={"/"}>메인</Link>

        <Link to={"/sale-page"}>상품구매</Link>
        <Link to={"/sale-page/info-detail"}>상품상세 정보</Link>
        <Link to={"/user-page"}>사용자</Link>
      </header>
      <main>
        {/* 여기에 라우터에서 PageLayout 의 모든 children 을 불러오는 무언가를 해야 함 */}
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default PageLayout;
