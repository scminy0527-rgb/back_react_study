import React from "react";

const PassComponent = (age, limitAge) => {
  const passMsg = "입장가능";
  const notPassMsg = "입장불가";

  const msg =
    age >= limitAge ? (
      <div>{`나이가 ${age}세 이므로 ${passMsg}`}</div>
    ) : (
      <div>{`나이가 ${age}세 이므로 ${notPassMsg}`}</div>
    );
  return msg;
};

export default PassComponent;
