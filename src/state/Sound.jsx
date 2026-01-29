import React, { useState } from "react";

// 강아지 버튼과 고양이 버튼을 만들고
// 버튼을 눌렀을 때 각각 동물의 울음소리가 화면에 나오도록 구현하기

const Sound = () => {
  const dogSound = "멍멍";
  const catSound = "냐옹";
  const ighSound = "꺅";

  const defaultSound = "울음 소리 종류를 선택하시오";

  // useState
  const [soundType, setSound] = useState(defaultSound);

  // 버튼 누를 때 정의하기
  const setDog = () => {
    setSound(dogSound);
    console.log(soundType);
  };

  const setCat = () => {
    setSound(catSound);
    console.log(soundType);
  };

  const setIgh = () => {
    setSound(ighSound);
    console.log(soundType);
  };

  return (
    <div>
      <p>{soundType}</p>
      <div>
        <button onClick={setDog}>강아지</button>
      </div>
      <div>
        <button onClick={setCat}>고양이</button>
      </div>
      <div>
        <button onClick={setIgh}>규혁이</button>
      </div>
    </div>
  );
};

export default Sound;
