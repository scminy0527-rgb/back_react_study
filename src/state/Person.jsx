import React, { useState } from "react";

const Person = () => {
  // 난수는 임의로 최대 600사이의 값으로 설정한다.
  // button을 눌러서 나오는 랜덤한 숫자가 짝수라면, 짝수를 출력(색상은 핑크)
  // button을 눌러서 나오는 랜덤한 숫자가 홀수라면, 홀수를 출력(색상은 그린)

  const [randomNumber, setNumber] = useState();

  // 출력 항목 및 스타일 정의
  const numStyle = { color: randomNumber % 2 ? "green" : "pink" };
  const numMsg = (
    <p style={numStyle}>
      출력 숫자: {randomNumber}, {randomNumber % 2 ? "홀수" : "짝수"}
    </p>
  );
  const defaultMsg = <p>버튼을 누르시오</p>;

  // 처음에 숫자가 정의 안되어있으면 할거
  // 아니면 처음에 버튼을 누르기 전에는 false
  // 버튼을 누르기 시작하면 true로 변수 바꾸게 하는 식으로도 가능함
  const finalNumMsg = randomNumber + 1 ? numMsg : defaultMsg;

  const makeNumOnClick = () => {
    setNumber(Math.floor(Math.random() * 600));
  };

  // 버튼 정의
  const numButton = <button onClick={makeNumOnClick}>숫자 생성</button>;

  return (
    <div>
      {finalNumMsg}
      {numButton}
    </div>
  );
};

export default Person;
