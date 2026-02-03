import React from "react";

const UserComponent = ({ name }, key) => {
  const userInfo = <p key={key}>name: {name}</p>;
  return userInfo;
};

export default UserComponent;
