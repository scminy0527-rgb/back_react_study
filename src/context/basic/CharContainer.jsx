import React, { useState } from "react";
import A from "./A";
import CharContext from "./CharContext";

const CharContainer = () => {
  const [fontSize, setFontSize] = useState("30px");

  // 무언가를 했을 때 상태 바뀌게 하는 함수 정의
  const changeFontSizeOnClick = () => {
    console.log("버튼 클릭");
    setFontSize("100px");
  };

  return (
    <CharContext.Provider
      value={{
        color: "blue",
        fontSize: fontSize,
        onClick: changeFontSizeOnClick,
      }}
    >
      <A />
    </CharContext.Provider>
  );
};

export default CharContainer;
