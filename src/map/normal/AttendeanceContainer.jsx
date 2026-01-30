import React from "react";
import Attendance from "./Attendance";
import AttendanceMoney from "./AttendanceMoney";

const AttendeanceContainer = () => {
  const attendanceData = [
    { id: 1, name: "석태워줌", isPresent: true, money: 5000 },
    { id: 2, name: "예스규호", isPresent: false, money: 1000 },
    { id: 3, name: "기무라세종", isPresent: false, money: 15000 },
    { id: 4, name: "약소훈", isPresent: true, money: 1000 },
    { id: 5, name: "삼규혁", isPresent: false, money: 1100000 },
    { id: 6, name: "구철민", isPresent: false, money: 1000 },
    { id: 7, name: "또오하영", isPresent: true, money: 5300 },
    { id: 8, name: "기무라무중", isPresent: true, money: 1800 },
    { id: 9, name: "윤캐슬", isPresent: false, money: 10000 },
    { id: 10, name: "민균맨", isPresent: true, money: 100000 },
  ];

  // 출석부를 모두 화면에 출력하고,
  // ex) 이름: 또오하영(출석)
  // isPresent가 true라면 출석, false라면 결석
  // 출석자의 모든 돈의 합계를 화면에 출력
  const attendanceList = attendanceData.map(({ name, isPresent, money }, i) => (
    <Attendance name={name} isPresent={isPresent} money={money} key={i} />
  ));

  // 출석자의 모든 돈의 합계를 보여주는거
  const moneyWidget = <AttendanceMoney attendanceData={attendanceData} />;

  return (
    <div>
      {moneyWidget}
      <ul>{attendanceList}</ul>
    </div>
  );
};

export default AttendeanceContainer;
