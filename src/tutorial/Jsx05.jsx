import React from "react";
import PassComponent from "./PassComponent";
import Lucky from "./Lucky";

// age 상수로 나이를 설정한다(임의)
// 19세 이상 성인이라면 "입장 가능"
// 성인이 아니라면 "입장 불가"
// 성인과 관계 없이 age가 짝수라면 "당첨"을 출력

// 컴포넌트 분리
const age = 16;
const limitAge = 19;

const passComponent = <>{PassComponent(age, limitAge)}</>;
const jackpot = <>{Lucky(age)}</>;

const Jsx05 = () => {
  return (
    <div>
      {passComponent}
      {jackpot}
    </div>
  );
};

export default Jsx05;
