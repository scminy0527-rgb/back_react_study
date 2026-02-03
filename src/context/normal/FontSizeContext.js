import { createContext, useState } from "react";

// 1. Context 생성 및 초기화
export const FontSizeContext = createContext({
  state: { fontSize: "" },
  actions: { setFontSize: () => {} },
});

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
