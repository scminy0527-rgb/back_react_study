import React, { useRef, useState } from "react";
import Food02 from "./Food02";

const FoodContainer02 = () => {
  const foodRef = useRef([]);
  const [foodList, setFoodList] = useState([]);
  const [isChecked, setChecked] = useState([]);
  // 음식 인풋태그
  const korFood = (
    <input
      type="text"
      placeholder="한글음식이름"
      ref={(el) => {
        foodRef.current[0] = el;
      }}
    />
  );
  const engFood = (
    <input
      type="text"
      placeholder="영어음식이름"
      ref={(el) => {
        foodRef.current[1] = el;
      }}
    />
  );

  // 추가 버튼 누르면 하는거
  const addFood = () => {
    const kor = foodRef.current[0].value;
    const eng = foodRef.current[1].value;

    const food = {
      kor,
      eng,
      id: crypto.randomUUID(),
    };

    setFoodList([...foodList, food]);
    setChecked([...isChecked, false]);
  };

  // checkbox 클릭 하면 해야하는거
  const onChangedCheckBox = (e) => {
    // 선택을 한 인덱스 보기
    const index = e.target.value;
    const value = e.target.checked;
    console.log("인덱스: ", index);
    console.log("체크 여부: ", value);

    // isChecked 수정
    const newCheckedList = [...isChecked];
    newCheckedList[index] = true;

    setChecked(newCheckedList);
  };

  const onClickDelButton = () => {
    // 기존 리스트 수정
    setFoodList(foodList.filter((food, i) => !isChecked[i]));
    setChecked(isChecked.filter((checked) => !checked));
  };

  // 버튼
  const addButton = <button onClick={addFood}>추가</button>;
  const delButton = <button onClick={onClickDelButton}>삭제</button>;

  // 입력을 한 음식이름 표현해주는거
  // 키를 전달 해서 고유한 속성으로 만드는게 핵심
  const inputtedFoodList = foodList.map(({ kor, eng, id }, i) => (
    <Food02
      kor={kor}
      eng={eng}
      key={id}
      index={i}
      onChange={onChangedCheckBox}
    />
  ));

  return (
    <div>
      {korFood}
      {engFood}
      {addButton}
      {delButton}

      {/* 여기에 입력 한 음식들 리스트로 보이게 하기 */}
      <ul>{inputtedFoodList}</ul>
    </div>
  );
};

export default FoodContainer02;
