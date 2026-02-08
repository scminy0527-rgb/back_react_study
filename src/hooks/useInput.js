import { useState } from "react";

// 사용자가 무엇인 가를 입력하기 위해서는 아래와 같은 사항이 계속 필요함
// 그런데 해당 과정을 함수로 묶어서 간편하게 해주는 개념

// 초기값: 처음에 둘 디폴트 값
// 리턴값: 초기값 및 해당 값을 변경 하는 함수 정의
const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChangeValue = (e) => {
    setValue(e.target.value);
  };

  return [value, onChangeValue];
};

export default useInput;
