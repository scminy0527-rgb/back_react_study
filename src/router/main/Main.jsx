import React, { useContext } from "react";
import { RouteContext } from "../../context/expert/RouteContext";
import useCountStore from "../../zustand/store/useCountStore";

const Main = () => {
  const { state } = useContext(RouteContext);
  const count = useCountStore((state) => state.count);

  return (
    <div>
      메인 페이지!😎
      <p>{state.user.userName}님 환영합니다!</p>
      <h1>카운트: {count}</h1>
    </div>
  );
};

export default Main;
