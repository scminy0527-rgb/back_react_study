import React, { useState } from "react";

const Student = ({ name, isPresent }, key) => {
  const [isClicked, setClicked] = useState();

  const nameOnClickListener = () => {
    setClicked(!isClicked);
  };

  const style = { color: isClicked ? "blue" : "black" };
  const student = (
    <li key={key} onClick={nameOnClickListener} style={style}>
      이름: {name}({isPresent ? "출석" : "결석"})
    </li>
  );
  return student;
};

export default Student;
