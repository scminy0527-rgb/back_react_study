import React from "react";

const Employee = ({ name, income, key }) => {
  return (
    <li key={key} style={{ color: income >= 0 ? "blue" : "gray" }}>
      {name}: {income.toLocaleString()}원
    </li>
  );
};

export default Employee;
