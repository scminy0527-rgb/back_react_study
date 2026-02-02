import React, { useRef, useState } from "react";
import Bank from "./Bank";

const BankContainer = () => {
  // 지폐: [50000, 10000, 5000, 1000, 500, 100, 50, 10]
  const billCoinList = [50000, 10000, 5000, 1000, 500, 100, 50, 10];
  // 최소 지폐 거슬러주기
  // 사용자가 값을 입력하면 52100

  const [userInputMoney, setUserInputMoney] = useState(0);
  // const [isClickedButton, setClickedButton] = useState(false);
  const changeRef = useRef([]);

  // 금액 입력 시 수정
  const inputMoneyOnChangeListener = (e) => {
    setUserInputMoney(e.target.value);
  };

  // 버튼 누를 시 거스름돈을 계산하는 함수
  const onChangeButtonClick = () => {
    if (!parseInt(userInputMoney)) {
      alert("0원 이상의 올바른 금액을 입력하세요");
      return;
    }

    console.log(typeof userInputMoney);
    let tempMoney = userInputMoney;
    billCoinList.forEach((moeny, i) => {
      const billNum = Math.floor(tempMoney / moeny);
      tempMoney %= moeny;

      // 이상 무
      // console.log(`${i}인덱스 ${moeny}원 권종 필요 갯수: ${billNum}`);
      // console.log(`ref 확인: ${changeRef.current[i]}`);

      // 계산 결과를 표현하는 부분 (ref 이용)
      changeRef.current[i].innerText = `${moeny}: ${billNum}개`;
    });
  };

  // 각 권종 별 갯수를 하위 props 로 분리하기
  const changeResult = billCoinList.map((money, i) => (
    <Bank
      money={money}
      key={i}
      curRef={(el) => {
        changeRef.current[i] = el;
      }}
    />
  ));

  return (
    <div>
      <div>테스트 {userInputMoney}</div>
      <input
        type="text"
        onChange={inputMoneyOnChangeListener}
        placeholder="거스름돈 입력: ex) 1520"
      />
      <button onClick={onChangeButtonClick}>동전 거스르기!</button>

      {/* 결과 표현 */}
      {changeResult}
    </div>
  );
};

export default BankContainer;
