import React from "react";
import Food from "./Food";

const FoodContainer = () => {
  const foods = [
    {
      id: 1,
      name: "치킨공식",
    },
    {
      id: 2,
      name: "종로김밥",
    },
    {
      id: 3,
      name: "버거킹",
    },
    {
      id: 4,
      name: "KFC",
    },
    {
      id: 5,
      name: "명동칼국수",
    },
  ];

  // 각 원소에 키를 줘야함
  const foodList = foods.map(({ name }, i) => <Food key={i} name={name} />);

  // 리액스는 배열이 컴포넌트의 배열 이라면 컴포넌트 각각 출력 가능
  return (
    <div>
      <ul id="result">{foodList}</ul>
    </div>
  );
};

export default FoodContainer;
