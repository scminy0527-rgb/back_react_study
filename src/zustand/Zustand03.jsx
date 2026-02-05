import React from "react";
import { Link } from "react-router-dom";

const Zustand03 = () => {
  console.log("3번 페이지 환영");
  return (
    <div>
      <Link to={"/zustand/02"}>02번 으로 이동</Link>
      <p>주스탠드03</p>
    </div>
  );
};

export default Zustand03;
