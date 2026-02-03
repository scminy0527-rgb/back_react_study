import React, { useContext } from "react";
import { AnimalsContext } from "./AnimalsContext";

const Animal = ({ animal, index }, key) => {
  const { actions } = useContext(AnimalsContext);
  const { remove } = actions;
  const animalCpn = (
    <p key={key}>
      <button
        value={"test"}
        onClick={() => {
          remove(index);
        }}
      >
        {animal}
      </button>
    </p>
  );

  return animalCpn;
};

export default Animal;
