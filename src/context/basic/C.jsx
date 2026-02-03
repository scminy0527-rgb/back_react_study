import React from "react";
import CharContext from "./CharContext";

const C = () => {
  console.log("C 빌드");
  return (
    <div>
      <CharContext.Consumer>
        {(context) => (
          <>
            <p style={{ color: context.color, fontSize: context.fontSize }}>
              리액트 My Context!😎
            </p>
            <button onClick={context.onClick}>글자 100px 크기 변경!</button>
          </>
        )}
      </CharContext.Consumer>
    </div>
  );
};

export default C;
