import React, { useEffect, useState } from "react";
import UserComponent from "./UserComponent";

// https://jsonplaceholder.typicode.com/todos?_start=0&_limit=15

const SideEffectWithMap = () => {
  // https://jsonplaceholder.typicode.com/todos
  // useEffect()
  // username만 화면에 p태그로 출력하기 -> 컴포넌트로 분리
  const [todos, settodos] = useState([]);
  const [isFalse, setIsFalse] = useState(false);
  const [number, setNumber] = useState(0);

  // 페이지 단위로 일정 수량의 데이터를 불러오는걸 실습
  useEffect(() => {
    const getTodos = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_start=${number * 15}&_limit=15`,
      );
      if (!response.ok) throw new Error("getTodos fetching error");
      const todos = await response.json();
      console.log("요청");
      return todos;
    };
    getTodos()
      .then((todos) => todos.map(({ title }) => title))
      .then(settodos)
      .catch(console.error);
  }, [number]);

  console.log("리랜더링");

  const handleOnClick = () => {
    setNumber(number + 1);
  };

  const titles = todos.map((name, i) => <UserComponent key={i} name={name} />);

  return (
    <div>
      <button onClick={handleOnClick}>재요청!</button>
      {titles}
    </div>
  );
};

export default SideEffectWithMap;
