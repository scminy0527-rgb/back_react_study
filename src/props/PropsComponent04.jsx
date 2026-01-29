import React from "react";

const PropsComponent04 = (props) => {
  console.log(props);
  return (
    <div>
      <p>함수 내부에 있는 자식 요소! 대머리</p>
      {props.children}
    </div>
  );
};

export default PropsComponent04;
