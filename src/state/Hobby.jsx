import React, { useState } from "react";

// 사용자에게 취미를 입력 받고 엔터를 누르면 화면에 실시간으로 출력한다.
// 취미가 축구라면, 글자의 크기를 50px로 바꾼다.
// 취미가 농구라면, 글자의 컬러를 blue로 바꾼다.

const Hobby = () => {
  const [hobby, setHobby] = useState();
  const [fontStyle, setStyle] = useState({});

  // 사용자가 엔터를 누르면 화면에 취미 표현
  // 키를 누르는게 감지되면 현재 누른 키와 총 입력된 value 값 활용
  const handleHobbyOnKeyUp = (e) => {
    console.log(e.target.value);
    // e.code === "Enter" && setHobby(inputtedHobby);
    if (e.key === "Enter") {
      setHobby(e.target.value);
      // 해당 방식으로 스프레드를 이용해서 누적되게 스타일이 쌓이는 거도 구현 가능
      setStyle({ ...fontStyle, ...fontStyleMap[e.target.value] });
    }
  };

  // 색상을 key: value 형태로 하여 복잡한 if, switch 문 대신에 활용 가능
  const fontStyleMap = {
    축구: { fontSize: "50px" },
    농구: { color: "blue" },
  };

  return (
    <div>
      <p>취미</p>
      <p style={fontStyle}>{hobby}</p>
      <input
        type="text"
        placeholder="취미 입력하세요"
        onKeyDown={handleHobbyOnKeyUp}
      />
    </div>
  );
};

export default Hobby;
