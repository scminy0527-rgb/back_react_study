import React from "react";

const Food = ({ korean, english, onClick, index, isShow }, key) => {
  // 각 태그 원소
  const foodCheckBox = (
    <li key={key}>
      <div>
        <input type="checkbox" onChange={onClick} value={index} />
        <span>{korean}</span>
        <span> ({english})</span>
      </div>
    </li>
  );

  const final = isShow ? foodCheckBox : <></>;
  return final;
};

export default Food;
