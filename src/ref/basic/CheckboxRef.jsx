import React, { useRef, useState } from "react";

const CheckboxRef = () => {
  const languages = ["C", "Java", "JS"];
  const [hobbies, setHobby] = useState();

  // 레퍼런스 의 초기값 (일반적으로 초기값은 {} 로 표현)
  const inputRef = useRef([]);
  const languageList = languages.map((language, i) => (
    <li key={i}>
      <label>
        <input
          type="checkbox"
          value={language}
          ref={(el) => {
            inputRef.current[i] = el;
          }}
        />
        <span>{language}</span>
      </label>
    </li>
  ));

  const handleButtonOnClick = () => {
    // 체크를 어떻게 검사 해야 하는지
    // filter map 특지 파악

    // 2개의 input 에서 필요한거
    console.log(inputRef.current);
    const hobby = inputRef.current
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value)
      .join(", ");

    setHobby(hobby);
  };

  return (
    <>
      <ul>{languageList}</ul>
      <div>
        <h1>결과</h1>
        {/* 예상 결과 */}
        {hobbies}
      </div>
      <button onClick={handleButtonOnClick}>취미 확인하기</button>
    </>
  );
};

export default CheckboxRef;
