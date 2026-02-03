import React, { useContext } from "react";
import CharContext from "./CharContext";

const D = () => {
  const { color, fontSize, onClick } = useContext(CharContext);
  console.log("D 빌드");
  console.log("use context", useContext(CharContext));
  return (
    <div>
      <p style={{ color, fontSize }}>리액트 My Context!😎</p>
      <button onClick={onClick}>글자 100px 크기 변경!</button>
    </div>
  );
};

export default D;
