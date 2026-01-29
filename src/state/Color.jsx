import React, { useState } from "react";

const Color = () => {
  // 사용자가 색상을 입력하고 버튼을 누르면 그 색상으로 글자색이 변경된다.
  // 핑크색을 입력하고 버튼을 누르면 핑크색
  // 파란색을 입력하고 버튼을 누르면 파란색
  // 빨간색을 입력하고 버튼을 누르면 검정색

  // 사용자가 입력한 내용에 따라 바뀌는 값
  const [value, setValue] = useState("");

  // 글자 스타일 정의
  const [style, setColor] = useState({ color: "black" });

  // 색상 키
  const colorKeyClass = {
    핑크색: "pink",
    파란색: "blue",
    빨간색: "black",
  };

  // 기본 색상을 초록 색으로 할 때는 어떻게?
  const defaultColor = "black";

  // 텍스트 입력할 때 onChange 정의
  // 실시간 입력 내용을 반영해서 내용 띄움
  const handleColorOnChange = (e) => {
    setValue(e.target.value);
  };

  // 버튼 누를 때 색상변경
  // 버튼 누른 순간 입력값이 색상값이면 색상 변경
  const setColorOnClick = () => {
    const colorValue = colorKeyClass[value];
    const color = colorValue ? colorValue : defaultColor;
    setColor({ color: color });
  };

  return (
    <div>
      <p style={style}>{value}</p>
      <input type="text" onChange={handleColorOnChange} />
      <button onClick={setColorOnClick}>색상 변경</button>
    </div>
  );
};

export default Color;
