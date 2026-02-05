import React from "react";
import useCountStore from "./store/useCountStore";
import { Link } from "react-router-dom";

const Zustand01 = () => {
  console.log(useCountStore((state) => state));
  const { count, increase, decrease } = useCountStore((state) => state);
  return (
    <div>
      <div>Zustand</div>
      <button onClick={decrease}>-1</button>
      <h1>{count}</h1>
      <button onClick={increase}>+1</button>
      <Link to={"/"}>메인</Link>
    </div>
  );
};

export default Zustand01;
