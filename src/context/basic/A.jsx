import React from "react";
import B from "./B";

const A = () => {
  console.log("A 빌드");
  return (
    <div>
      <B />
    </div>
  );
};

export default A;
