import React from "react";
import { Link, Outlet } from "react-router-dom";

// 이건 전체적인 메인 홈페이지의 레이아웃을 구성
const Layout = () => {
  const style = { marginRight: "8px" };

  const getRandomInt = () => {
    return Math.floor(Math.random() * 100);
  };

  return (
    <div>
      <header>
        <Link style={style} to="/">
          메인
        </Link>
        <Link style={style} to="/job">
          직업
        </Link>
        <Link style={style} to="/detail">
          디테일
        </Link>
        <Link style={style} to={`/post/${getRandomInt()}`}>
          포스트
        </Link>
        <Link style={style} to={`detail/comunity`}>
          커뮤니티
        </Link>
        <Link style={style} to={`/user`}>
          회원
        </Link>
        <Link style={style} to={`/not-user`}>
          비회원
        </Link>
      </header>
      <main>
        {/* 라우터에 등록 된 children 보여주는 태그 */}
        <Outlet></Outlet>
      </main>
      <footer>푸터</footer>
    </div>
  );
};

export default Layout;
