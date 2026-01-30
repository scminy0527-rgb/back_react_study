import React from "react";
import Sport from "./Sport";

const SportContainer = () => {
  const SportsList = [
    {
      name: "농구",
      personnel: 5,
    },
    {
      name: "축구",
      personnel: 11,
    },
    {
      name: "야구",
      personnel: 9,
    },
    {
      name: "배구",
      personnel: 6,
    },
    {
      name: "탁구",
      personnel: 2,
    },
  ];

  // 스포츠 경기 인원이 5명 이상인 스포츠만 화면에 출력
  // 컴포넌트를 분리하기

  // 필터 써서 5명 이상인 스포츠 추출
  // 추출된거 이용해서 컴포넌트에 전달
  const personLimit = 5;
  const sports = SportsList.filter(
    ({ personnel }) => personnel >= personLimit,
  ).map(({ name, personnel }, i) => (
    <Sport name={name} personnel={personnel} key={i} />
  ));

  return <div>{sports}</div>;
};

export default SportContainer;
