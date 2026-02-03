import React from "react";

const Animal = ({ animal, index }, key) => {
  const animalCpn = (
    <p key={key}>
      <button value={"test"}>{animal}</button>
    </p>
  );

  return animalCpn;
};

export default Animal;
