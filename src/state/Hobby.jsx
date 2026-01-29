import React, { useState } from "react";

// 사용자에게 취미를 입력 받고 엔터를 누르면 화면에 실시간으로 출력한다.
// 취미가 축구라면, 글자의 크기를 50px로 바꾼다.
// 취미가 농구라면, 글자의 컬러를 blue로 바꾼다.

const Hobby = () => {
  const [tempHobby, setTempHobby] = useState();
  const [hobby, setHobby] = useState();
  const [fontStyle, setStyle] = useState();

  // 사용자가 엔터를 누르면 화면에 취미 표현
  const handleHobbyOnKeyUp = (e) => {
    console.log(e);
    // e.code === "Enter" && setHobby(inputtedHobby);
    if (e.code === "Enter") {
      console.log("엔터 누름");
      setHobby(tempHobby);
      setStyle(fontStyleMap[hobby]);
    }
  };

  const handleOnChange = (e) => {
    setTempHobby(e.target.value);
    console.log("임시: ", tempHobby);
  };

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
        onChange={handleOnChange}
        onKeyDown={handleHobbyOnKeyUp}
      />
    </div>
  );
};

export default Hobby;
