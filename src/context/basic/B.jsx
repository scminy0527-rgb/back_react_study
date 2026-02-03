import React from "react";
import D from "./D";

const B = () => {
  console.log("B 빌드");
  return (
    <div>
      {/* <C /> */}
      <D />
    </div>
  );
};

export default B;
