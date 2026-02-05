import React from "react";
import { Link } from "react-router-dom";
import useAuthStore, { initialMember } from "./store/useAuthStore";

const Zustand02 = () => {
  const {
    isLogin,
    setIsLogin,
    currentMember,
    previousUrl,
    setCurrentMember,
    setPreviousUrl,
  } = useAuthStore((state) => state);

  // 로그인 하는거
  const login = () => {
    setIsLogin(true);
    setCurrentMember({
      memberEmail: "test123@gmail.com",
      memberPassword: "test123@!",
      memberName: "홍길동",
    });
  };

  const logout = () => {
    setIsLogin(false);
    setCurrentMember(initialMember);
  };

  return (
    <div>
      <Link to={"/zustand/03"}>03번 으로 이동</Link>
      <p>주스탠드02</p>

      {/* 
        1. 로그인 처리 후 새로고침 문제 해결
        2. 모든 페이지에서 데이터 공유할 수 있는지 
      */}
      <button onClick={login}>로그인</button>
      <button onClick={logout}>로그아웃</button>
    </div>
  );
};

export default Zustand02;
