import React, { useContext, useRef } from "react";
import { FontSizeContext } from "./FontSizeContext";

const ChildInputComponent = () => {
  // Context값 사용!
  // 폰트사이즈를 입력하고, 엔터를 누르면
  // 입력한 폰트 사이즈로 변경하기!
  const { state, actions } = useContext(FontSizeContext);

  // 인풋 필드 레퍼런스
  const inputRef = useRef();

  // 엔터 누르면 해야 하는거
  const enterKeyListener = (e) => {
    const key = e.key;
    const value = inputRef.current.value;

    if (key === "Enter") {
      actions.setFontSize(value);
    }
  };

  return (
    <div>
      <p style={{ fontSize: state.fontSize }}>😎 안녕하세요</p>
      <input
        type="text"
        placeholder="폰트 사이즈를 입력하세요 ex): 12px"
        ref={(el) => {
          inputRef.current = el;
        }}
        onKeyDown={enterKeyListener}
      />
    </div>
  );
};

export default ChildInputComponent;
