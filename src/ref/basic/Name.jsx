import React, { useRef, useState } from "react";

const Name = () => {
  // DOM 을 접근할 수 있게 제공해주는 함수
  // 직접 접근하고 싶음

  // 님 은 한번만 붙어야 함
  const inputRef = useRef();

  // +님 버튼 클릭 여부 (제출 여부)
  const [isClicked, setClick] = useState(false);

  const handleOnClick = () => {
    console.log("레퍼런스", inputRef.current);
    console.log();

    // 버튼을 클릭 한 적이 없는 상태 (님을 안붙인 상태)
    // 에서 만 님 이 붙게 하기
    if (!isClicked) {
      inputRef.current.value += "님";
      setClick(!isClicked);
    }
  };

  // 텍스트 필드 감지
  // 만약 수정을 하는 상황이라면 수정 후 다시 "님"을 붙일 수 있어야함
  const handleOnChange = () => {
    if (isClicked) setClick(!isClicked);
  };

  return (
    <div>
      <input ref={inputRef} onChange={handleOnChange} type="text" />
      <button onClick={handleOnClick}>+님</button>
    </div>
  );
};

export default Name;
