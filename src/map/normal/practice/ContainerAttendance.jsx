import React from "react";
import Student from "./Student";

const ContainerAttendance = () => {
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
  const attendanceList = attendanceData.map(({ name, isPresent }, i) => (
    <Student name={name} isPresent={isPresent} key={i} />
  ));

  // 출석자의 돈을 계산하는 함수를 만들기
  const calcKetsekiMoney = (...attendanceData) => {
    const totalMoney = attendanceData
      .filter((student) => student.isPresent)
      .map((student) => student.money)
      .reduce((acc, cur, i) => acc + cur, 0);

    return totalMoney;
  };

  const totalMoney = calcKetsekiMoney(...attendanceData);
  console.log(totalMoney);

  // 문제.
  // 각 컴포넌트를 클릭하면 컴포넌트의 색깔이 파란색으로 변경되고,
  // 다시 클릭하면 검은색으로 변경
  // 해당 부분은 해당 컴포넌트만 재빌드 하면 되기에 하위 컴포넌트에서 상태 관리
  return (
    <div>
      <p>출석 결과</p>
      <ul>{attendanceList}</ul>
      <div>총 결석비: {totalMoney.toLocaleString()}원</div>
    </div>
  );
};

export default ContainerAttendance;
