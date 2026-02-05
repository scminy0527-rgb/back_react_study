import React from "react";
import useAuthStore, { initialMember } from "./store/useAuthStore";
import { Outlet } from "react-router-dom";

// 로직 분리 및 부모 자식 간 관계 만들기
// 해당 페이지는 로그인이 됬는지 안됬는지 보여주는 기능
const ZustandLayout = () => {
  // 주스탠드에서 상태 및 매서드 가져오기
  const {
    isLogin,
    setIsLogin,
    currentMember,
    previousUrl,
    setCurrentMember,
    setPreviousUrl,
  } = useAuthStore((state) => state);

  return (
    <div>
      <h1>현재 경로: {previousUrl || "없음"}</h1>
      <h1>현재 유저: {currentMember.memberName || "없음"}</h1>
      <h1>로그인 상태: {isLogin ? "로그인" : "비로그인"}</h1>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default ZustandLayout;
