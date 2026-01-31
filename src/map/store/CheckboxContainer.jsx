import React, { useState } from "react";
import Checkbox from "./Checkbox";

// 사용자가 클릭한 체크박스의 value를 화면에 출력
// 상용자가 체크박스를 해제하면 value도 화면에서 제거
// 단 화면에 출력하는 결과는 li태그의 리스트로 출력한다. (문자열 사용X)
// 완료 후 li태는 컴포넌트로 분리
const CheckboxContainer = () => {
  const languages = ["C", "Java", "JS"];

  // 사용자가 선택 한 언어 담는 상태 (초기값: 빈 상태)
  const [selectedLanguages, setLanguageList] = useState([]);

  // 각 체크박스 했을 때 할 동작 정의
  // 하위 컴포넌트 에서수행 할 동작
  const onSelectListener = (e) => {
    // 먼저 체크 했을 때 값 잘 표시되나 보기
    if (e.target.checked) {
      // 체크가 된거기에 선택된거에 추가
      setLanguageList([...selectedLanguages, e.target.defaultValue]);
    } else {
      // 기존에 선택된 거는 선택 해제
      setLanguageList(
        selectedLanguages.filter(
          (language) => language !== e.target.defaultValue,
        ),
      );

      // splice 는 문제 존재
    }

    // 결과 테스트
    console.log(`선택 결과: ${selectedLanguages}`);
  };

  // 체크박스 컴포넌트 정의
  const checkBoxes = languages.map((language, i) => (
    <Checkbox language={language} onSelected={onSelectListener} key={i} />
  ));

  // 선택 된 언어들 표시
  const selectResult = selectedLanguages.map((language) => (
    <li>
      <div>{language}</div>
    </li>
  ));
  return (
    <div>
      {checkBoxes} <p>선택한 언어</p>
      <ul>{selectResult}</ul>
    </div>
  );
};

export default CheckboxContainer;
