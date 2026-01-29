import React, { useState } from "react";

// 이 컴포넌트 전체가 다시 재빌드 되는거임
const Name = () => {
  // 사용자가 입력한 이름을 화면에 실시간으로 표현
  const [name, setName] = useState();
  const handleNameOnChange = (e) => {
    setName(e.target.value);
  };

  console.log("리랜더링");
  return (
    <div>
      <p>{name}</p>
      <input type="text" onChange={handleNameOnChange} />
    </div>
  );
};

export default Name;
