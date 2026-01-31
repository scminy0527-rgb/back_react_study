import React from "react";

const Checkbox = ({ language, onSelected }, key) => {
  // 체크박스 열 정의
  const checkboxRow = (
    <li key={key}>
      <span>{language}</span>
      <input type="checkbox" value={language} onChange={onSelected} />
    </li>
  );
  return checkboxRow;
};

export default Checkbox;
