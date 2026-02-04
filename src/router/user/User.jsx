import React, { useContext, useEffect } from "react";
import RouteContext from "../../context/expert/RouteContext";

const User = () => {
  const userData = {
    userName: "홍길동",
    userAge: 20,
    userAddress: "서울시 강남",
    userPhone: "010-1234-1234",
  };

  const { state, actions } = useContext(RouteContext);
  const { setUser, setPreviousUrl } = actions;

  useEffect(() => {
    console.log("user 페이지 에서 이름 설정");
    setUser(userData);
    setPreviousUrl("/user"); // 예시
  }, []);

  return <div>{state.user.userName}</div>;
};

export default User;
