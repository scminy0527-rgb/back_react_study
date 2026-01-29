import React from "react";

const UserProps = ({ name, email, age }) => {
  // 유저 불러오기
  return (
    <div>
      <p>이름: {name}</p>
      <p>이메일: {email}</p>
      <p>나이: {age}</p>
    </div>
  );
};

export default UserProps;
