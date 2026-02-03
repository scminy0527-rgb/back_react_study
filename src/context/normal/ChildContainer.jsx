import React, { useContext } from "react";
import { FontSizeContext } from "./FontSizeContext";

const ChildContainer = () => {
  const { state, actions } = useContext(FontSizeContext);
  return (
    <div>
      <p style={{ fontSize: state.fontSize }}>안녕합니다.</p>
      <button onClick={() => actions.setFontSize("100px")}>크기 변경</button>
    </div>
  );
};

export default ChildContainer;
