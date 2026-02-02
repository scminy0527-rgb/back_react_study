import React from "react";

const Bank = ({ money, curRef }, key) => {
  const result = (
    <p key={key} ref={curRef}>
      {money}: 1개
    </p>
  );
  return result;
};

export default Bank;
