import React from "react";

const PropsComponent03 = (props) => {
  // 1. 이름, 나이, 취미, 폰트 색상, 컬러를 props로 넘겨서 화면에 모두 출력하기
  // 2. 폰트 사이즈, 컬러를 적용시키기

  // 구조분해할당
  const { fontSize, color, name, age, hobby } = props;
  const nameSpace = <p>이름: {name}</p>;

  // 스타일 또한
  // const style = {color: color} 이런 식으로 하면 xml 부분 작성 최소화

  return (
    // 부모 자식 간 스타일
    // 상위 div 에서 정의 해도 변수로 불러오는 하위 태그에 스타일이 상속 되는지
    <div style={{ fontSize: fontSize, color: color }}>
      {/* <p>이름: {name}</p> */}
      {nameSpace}
      <p>나이: {age}</p>
      <p>취미: {hobby}</p>
    </div>
  );
};

export default PropsComponent03;
