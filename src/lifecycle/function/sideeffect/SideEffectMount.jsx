import React, { useEffect, useState } from "react";

const SideEffectMount = () => {
  // https://jsonplaceholder.typicode.com/users

  console.log("리랜더링");

  const [users, setUsers] = useState([]);
  // 참조 불투명 함수
  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const users = await response.json();
      return users;
    };
    getUsers().then(setUsers).catch(console.error);
  }, []);
  return (
    <ul>
      {users.map((user, i) => (
        <li>{user.name}</li>
      ))}
    </ul>
  );
};

export default SideEffectMount;
