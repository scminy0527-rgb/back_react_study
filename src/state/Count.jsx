import React, { useState } from "react";

const Count = () => {
  // 훅 함수
  // userState
  console.log(useState());
  const [number, setNumber] = useState(0);
  // let number = 0;

  const increase = () => {
    setNumber(number + 1);
    console.log(number);
  };
  const decrease = () => {
    setNumber(number - 1);
    console.log(number);
  };
  // DOM에 직접 접근하지 마라
  // document.query 이런 식으로 직접 접근하지 마라
  // virtual dom 이 값 변화를 감지 못하게 됨
  return (
    // add event listner 못씀 onclick 써야함
    // consolo.log 의 결과물은 virtual dom 의 결과물
    <div>
      <button onClick={decrease}>-1</button>
      <h1>{number}</h1>
      <button onClick={increase}>+1</button>
    </div>
  );
};

export default Count;
