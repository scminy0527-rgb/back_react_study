import React from "react";

const PassComponent = (age, limitAge) => {
  const passMsg = "입장가능";
  const notPassMsg = "입장불가";
  const isOverLimit = age >= limitAge;

  // 3항 연산자 이용해서 text 부분 중간내용 처리
  const msg = (
    <div>{`나이가 ${age}세 이므로 ${isOverLimit ? passMsg : notPassMsg}`}</div>
  );
  return msg;
};

export default PassComponent;
