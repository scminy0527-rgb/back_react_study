import React, { useState } from "react";

// 해당 컴포넌트는 각 학생들의 이름과 출석 여부를 나타냄 (소단위)
const Attendance = ({ name, isPresent }, key) => {
  const [isClicked, changeClick] = useState(false);

  const clickListener = () => {
    changeClick(!isClicked);
    console.log(`${name}학생 클릭: ${isClicked}`);
  };

  const textColor = { color: isClicked ? "blue" : "black" };
  const student = (
    <li key={key} onClick={clickListener} style={textColor}>
      이름: {name}({isPresent ? "출석" : "결석"})
    </li>
  );
  return student;
};

export default Attendance;
