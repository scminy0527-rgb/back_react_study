import React, { useRef, useState } from "react";
import Food from "./Food";

// 코드를 완성시켜라 expert
const FoodContainer = () => {
  // 인풋 레퍼런스 (0: 한국 1: 영어)
  const foodInputRef = useRef([]);

  // 음식을 한국음식 영어이름 각각 담는 상태
  const [foodNameList, setFoodNameList] = useState([]);

  // 지우고자 하는 음식 인덱스 담긴 것
  // 지우고자 하는 음식의 정보를 직접 각각 담기
  const [wantDeleteFood, setWantDeleteFood] = useState([]);

  // 삭제 버튼 클릭 여부(리빌드 때 고려)

  // 한국 음식 이름 및 영어이름 입력 받는 필드
  const koreanFoodInput = (
    <input
      type="text"
      ref={(el) => {
        foodInputRef.current[0] = el;
      }}
      placeholder="한국 음식 이름"
    />
  );
  const englishFoodInput = (
    <input
      type="text"
      ref={(el) => {
        foodInputRef.current[1] = el;
      }}
      placeholder="영어 음식 이름"
    />
  );

  // 추가 버튼 누를 시 수행 할 동작
  const addButtonClickListener = () => {
    const koreanFood = foodInputRef.current[0].value;
    const englishFood = foodInputRef.current[1].value;

    const name = {
      korean: koreanFood,
      english: englishFood,
      isShow: true,
    };

    setFoodNameList([...foodNameList, name]);
  };

  // 체크 박스 누르면 할 콜백 함수 정의
  // 해당 체크 한 부분의 인덱스 가져오기
  const foodCheckBoxOnClickListener = (e) => {
    const value = e.target.defaultValue;
    if (e.target.checked) {
      setWantDeleteFood([...wantDeleteFood, value]);
    } else {
      setWantDeleteFood(wantDeleteFood.filter((food, i) => food !== value));
    }
  };

  // 추가가 되는 음식들을 보여주는 것
  // 또한 체크박스를 체그하면 지우고자 하는 원소 리스트에 추가
  // 삭제를 누르면 삭제가 되는거 처럼 보여주는 꼼수 (isShow 변경)
  // 서버 라면 삭제 누르면 서버에서 삭제 완료 응답 오면 isShow 변경
  // 그리고 다시 들어오면 삭제 되고 난 이후 밸류를 참조
  // 일단은 성공
  const foodListComponent = foodNameList.map(
    ({ korean, english, isShow }, i) => (
      <Food
        korean={korean}
        english={english}
        key={i}
        isShow={isShow}
        onClick={foodCheckBoxOnClickListener}
        index={i}
      />
    ),
  );

  const deleteOnClickListener = () => {
    console.log(wantDeleteFood);

    // 새로운 인덱스 처리
    const tempFoodList = [...foodNameList];

    wantDeleteFood.forEach((val, i) => {
      tempFoodList[val].isShow = false;
    });

    if (wantDeleteFood.length) {
      console.log("재빌드");
      setFoodNameList(tempFoodList);
      setWantDeleteFood([]);
    }
  };

  // 추가 삭제 하는 버튼
  const addButton = <button onClick={addButtonClickListener}>추가</button>;
  const deleteButton = <button onClick={deleteOnClickListener}>삭제</button>;
  return (
    <div>
      <div>
        {koreanFoodInput}
        {englishFoodInput}
        {addButton}
        {deleteButton}
      </div>
      <ul>{foodListComponent}</ul>
    </div>
  );
};

export default FoodContainer;
