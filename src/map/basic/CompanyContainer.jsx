import React from "react";
import Employee from "./Employee";

const CompanyContainer = () => {
  const employees = [
    {
      name: "김세중",
      income: 1520000,
    },
    {
      name: "이규학",
      income: -500000,
    },
    {
      name: "노규홍",
      income: 120000,
    },
    {
      name: "당긴철",
      income: -70000,
    },
    {
      name: "약소훈",
      income: -150000,
    },
  ];

  // 화면에
  // ex) 홍길동: 150000
  // 흑자를 냈다면 파란색
  // 적자를 냈다면 회색

  const employeeList = employees.map(({ name, income }, i) => (
    <Employee key={i} name={name} income={income} />
  ));

  return <ul>{employeeList}</ul>;
};

export default CompanyContainer;
