import React from "react";
import { FontSizeProvider } from "./FontSizeContext";
import ChildInputComponent from "./ChildInputComponent";
import ChildContainer from "./ChildContainer";

const ParentContainer = () => {
  return (
    <div>
      <FontSizeProvider>
        <ChildContainer />
        <ChildInputComponent />
      </FontSizeProvider>
    </div>
  );
};

export default ParentContainer;
