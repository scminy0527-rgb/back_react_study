import React, { useContext, useRef, useState } from "react";
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

  // 엔터를 쳐서 입력 하면 텍스트필드 내 내용이 비워지게 해야함
  const animalInputRef = useRef();

  // 필드 값 입력 및 엔터 관련 부분
  const onChangeListener = (e) => {
    setInputValue(e.target.value);
  };

  const enterKeyDownListener = (e) => {
    const key = e.key;
    // const value = e.target.value;

    if (key === "Enter") {
      if (!inputValue) {
        alert("동물을 입력해주세요");
        return;
      }
      animalInputRef.current.value = "";
      insert(inputValue);
      setInputValue("");
    }
  };

  // 기존에 있는 동물들 보여주는 컴포넌트
  // crypto.randomUUID()
  const animalsCpn = animals.map((animal, i) => (
    <Animal animal={animal} index={i} key={i} />
  ));

  return (
    <div>
      <input
        type="text"
        placeholder="동물을 입력하세요."
        onChange={onChangeListener}
        onKeyDown={enterKeyDownListener}
        ref={(el) => {
          animalInputRef.current = el;
        }}
      />
      {animalsCpn}
    </div>
  );
};

export default Animals;
