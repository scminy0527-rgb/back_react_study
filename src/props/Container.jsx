import React from "react";
import PropsComponent from "./PropsComponent";
import PropsContainer02 from "./PropsContainer02";
import PropsComponent03 from "./PropsComponent03";
import PropsComponent04 from "./PropsComponent04";

const Container = () => {
  const firstName = "박길동";
  const name = "홍길동";
  const age = 25;
  const hobby = "코딩";
  const printName = () => {
    console.log(name);
  };

  const color = "green";
  const secondColor = "blue";

  const fontSize = "20px";
  return (
    <div>
      {/* <PropsComponent name={firstName} printName={printName} />
      <PropsContainer02 color={color} />
      <PropsComponent03
        name={name}
        age={age}
        hobby={hobby}
        fontSize={fontSize}
        color={secondColor}
      /> */}

      {/* 컴포넌트 내부에 있는 모든 요소는 props 로 넘어간다 */}
      <PropsComponent04>
        <p>컴포넌트 내부에 있는 자식요소 머리 있음</p>
      </PropsComponent04>
    </div>
  );
};

export default Container;
