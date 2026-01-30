import React from "react";

const AttendanceMoney = ({ attendanceData }) => {
  console.log(attendanceData);
  const totalMoney = attendanceData.reduce(
    (acc, cur) => (cur.isPresent ? acc + cur.money : acc),
    0,
  );

  return <div>{totalMoney.toLocaleString()}원</div>;
};

export default AttendanceMoney;
