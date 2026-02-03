import React, { useEffect, useState } from "react";
import UserComponent from "./UserComponent";

const SideEffectWithMap = () => {
  // https://jsonplaceholder.typicode.com/users
  // userName 만 화면에 p 태그로 출력하기
  const [users, setUsers] = useState([]);

  console.log("리랜더링");

  // flutter 의 initstate 개념
  useEffect(() => {
    const getUserData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const users = await response.json();
      return users;
    };

    getUserData().then(setUsers).catch(console.error);
  }, []);

  // p 태그로 뿌릴거 정의
  const nameComponent = users.map(({ name, id }) => (
    // <p key={id}>name: {name}</p>
    <UserComponent name={name} key={id} />
  ));
  return <div>{nameComponent}</div>;
};

export default SideEffectWithMap;
