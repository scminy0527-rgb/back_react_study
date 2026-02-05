import React, { useContext, useEffect, useState } from "react";
import { RouteContext } from "../../context/expert/RouteContext";
import { Navigate, useNavigate } from "react-router-dom";

// 다른 페이지로 이동!
const NotUser = () => {
  const { state, actions } = useContext(RouteContext);
  const { user } = state;
  const { isLogin } = state;

  // 페이지 이동 시키는 리액트 훅함수
  // 함수의 콜백에서 사용 해야 함
  // ex) 로그인 완료 되면 페이지 이
  const navigate = useNavigate();

  // 마이 페이지나 회원 전용 페이지를 비회원이 접근 (접근하지 말아야 하는 페이지 접근 막을 때)
  // 컴포넌트를 노출시키고 싶지 않을 때
  // Navigate 컴포넌트를 사용해야 한다.
  // useEffect(() => {
  //   console.log(user);
  //   if (!isLogin) {
  //     // 페이지 이동 시켜야 함
  //     navigate("/");
  //   }
  //   console.log(Boolean({}));
  //   console.log(Boolean({ userName: "홍길동" }));
  // }, []);

  if (!isLogin) {
    return <Navigate to="/" />;
  }

  console.log("회원 뚤림 수고");

  return <div>회원 전용 페이지</div>;
};

export default NotUser;
