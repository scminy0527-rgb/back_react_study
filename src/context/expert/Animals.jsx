import React, { useContext, useState } from "react";
import { AnimalsContext } from "./AnimalsContext";
import Animal from "./Animal";

const Animals = () => {
  // Context에 있는 동물 세마리를 버튼으로 출력하시오
  const { state, actions } = useContext(AnimalsContext);
  const { animals } = state;
  const { insert } = actions;
  // input에 동물을 입력 후 엔터치면 동물 버튼이 추가되게 구현하세요.
  // input 태그 상태 감지
  const [inputValue, setInputValue] = useState("");

  // 필드 값 입력 및 엔터 관련 부분
  const onChangeListener = (e) => {
    setInputValue(e.target.value);
  };

  const enterKeyDownListener = (e) => {
    const key = e.key;
    // const value = e.target.value;

    if (key === "Enter") {
      insert(inputValue);
    }
  };

  // 기존에 있는 동물들 보여주는 컴포넌트
  const animalsCpn = animals.map((animal, i) => (
    <Animal animal={animal} index={i} key={crypto.randomUUID()} />
  ));

  return (
    <div>
      <input
        type="text"
        placeholder="동물을 입력하세요."
        onChange={onChangeListener}
        onKeyDown={enterKeyDownListener}
      />
      {animalsCpn}
    </div>
  );
};

export default Animals;
