import React from "react";

const PropsContainer02 = (props) => {
  console.log(props);
  return (
    <div>
      <p style={{ color: props.color }}>글자 색을 부모가 보내준 색으로</p>
    </div>
  );
};

export default PropsContainer02;
