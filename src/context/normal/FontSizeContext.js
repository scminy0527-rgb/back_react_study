import { createContext, useState } from "react";

// 1. Context 생성 및 초기화 (비어있는 변수 만들기)
export const FontSizeContext = createContext({
  state: { fontSize: "" },
  actions: { setFontSize: () => {} },
});

// 함수 형태
// 정의
export const FontSizeProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState("20px");
  const value = {
    state: { fontSize },
    actions: { setFontSize },
  };

  return (
    <FontSizeContext.Provider value={value}>
      {children}
    </FontSizeContext.Provider>
  );
};
