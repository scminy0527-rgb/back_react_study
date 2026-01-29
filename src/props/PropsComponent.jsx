import React from "react";

const PropsComponent = (props) => {
  console.log(props);
  props.printName();
  return (
    <div>
      <p>자식 응애</p>
    </div>
  );
};

export default PropsComponent;
