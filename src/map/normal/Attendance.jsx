import React from "react";

const Attendance = ({ name, isPresent }, key) => {
  const student = (
    <li key={key}>
      이름: {name}({isPresent ? "출석" : "결석"})
    </li>
  );
  return student;
};

export default Attendance;
