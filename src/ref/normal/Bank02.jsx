import React, { useRef, useState } from "react";

const BankContainer = () => {
  // 최소 지폐 거슬러주기
  // 사용자가 값을 입력하면 52100
  const [amount, setAmount] = useState("");
  const [change, setChange] = useState({});
  const pRef = useRef([]);

  const bills = [50000, 10000, 5000, 1000, 500, 100, 50, 10];

  const billsList = bills.map((bill, i) => (
    <p
      key={i}
      ref={(el) => {
        pRef.current[i] = el;
      }}
    >
      {bill}: {change[bill]}개
    </p>
  ));

  const handleAmonutOnChange = (e) => {
    setAmount(e.target.value);
  };

  const handleChangeOnClick = (e) => {
    if (typeof Number(amount) !== "number") {
      return alert("정수만 입력하세요.");
    }

    const result = {};
    let money = amount;
    for (let bill of bills) {
      result[bill] = Math.floor(money / bill);
      money = amount % bill;
    }
    setChange(result);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleAmonutOnChange}
        placeholder="거스름돈 입력: ex)1520"
      />
      <button onClick={handleChangeOnClick}>동전 거스르기!</button>
      {/* ex) */}
      {billsList}
    </div>
  );
};

export default BankContainer;
