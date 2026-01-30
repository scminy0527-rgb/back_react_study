import React from "react";

const Sport = ({ name, personnel }) => {
  return (
    <li>
      스포츠 이름: {name}, 인원수: {personnel}
    </li>
  );
};

export default Sport;
