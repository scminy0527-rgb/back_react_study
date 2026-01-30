import React, { useState } from "react";

const AttendanceMoney = ({ attendanceData }) => {
  const [isClicked, changeClick] = useState(false);

  const clickListener = () => {
    changeClick(!isClicked);
  };

  console.log(attendanceData);
  const totalMoney = attendanceData.reduce(
    (acc, cur) => (cur.isPresent ? acc + cur.money : acc),
    0,
  );

  const textColor = { color: isClicked ? "blue" : "black" };

  const moneyWidget = (
    <div style={textColor} onClick={clickListener}>
      {totalMoney.toLocaleString()}원
    </div>
  );

  return moneyWidget;
};

export default AttendanceMoney;
