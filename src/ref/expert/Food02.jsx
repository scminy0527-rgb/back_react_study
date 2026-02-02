import React from "react";

const Food02 = ({ kor, eng, index, onChange }, key) => {
  const checkedFoodBlock = (
    <li key={key}>
      <input type="checkbox" value={index} onChange={onChange} />
      <span>
        {kor} ({eng})
      </span>
    </li>
  );
  return checkedFoodBlock;
};

export default Food02;
