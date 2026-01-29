import React from "react";

const Lucky = (age) => {
  const jMsg = "당첨입니다.";
  const jackpot = !(age % 2) && <div>{jMsg}</div>;
  return jackpot;
};

export default Lucky;
