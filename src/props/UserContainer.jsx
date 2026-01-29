import React from "react";
import UserProps from "./UserProps";

const UserContainer = () => {
  // 유저 정보를 나나내는 곳 이라는 소개
  const titleStyle = { color: "gray", fontSize: "20px", fontWeight: 600 };
  const title = <p style={titleStyle}>유저 정보</p>;

  // probs 로 전달 할 변수들 정의 및 Probs 생성
  const [name, email, age] = ["홍길동", "test123@gmail.com", 23];
  const user = <UserProps name={name} email={email} age={age} />;

  return (
    <>
      {title}
      {user}
    </>
  );
};

export default UserContainer;
