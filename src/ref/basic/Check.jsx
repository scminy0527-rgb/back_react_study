import React, { useRef, useState } from "react";

const Check = () => {
  // ref
  // "검사!"버튼을 누르면 아이디 또는 비밀번호를 검사하기
  // 아이디 사용불가한 아이디가 존재
  // test123@gmail.com
  // test456@gmail.com
  // test678@gmail.com
  // 비밀번호가 없거나 위에 사용 불가한 아이디를 사용했다면
  // #result에 "검사 실패!"를 출력
  // 정상적으로 입력했다면 #result에 "검사 성공😁"을 출력

  const inVaildIds = [
    "test123@gmail.com",
    "test456@gmail.com",
    "test678@gmail.com",
  ];

  // ref 정의
  const loginRef = useRef([]);

  // 검사 결과
  const [idCheck, setIdCheck] = useState(false);
  const [pwCheck, setPwCheck] = useState(false);

  const [isEnd, setIsEnd] = useState(false);

  // 버튼 클릭 시 할 동작
  const checkIdpwOnClick = () => {
    // 필드에 입력 된 아이디 및 비밀번호
    const id = loginRef.current[0].value;
    const password = loginRef.current[1].value;

    console.log(id, password);
    // 아이디 검증
    if (id) {
      // 불가능 아이디 존재 여부 확인
      const result = inVaildIds.some((email) => id === email);
      console.log(`아이디 결과: ${result}`);
      setIdCheck(!result);
    } else {
      setIdCheck(false);
    }

    // 비밀번호 검증
    const pwResult = password.length ? true : false;
    setPwCheck(pwResult);

    // 중간에 탈락 안되고 여기까지 최종적으로 옴
    setIsEnd(true);
  };

  console.log(loginRef);

  // 테스트 결과
  const totalResult = idCheck && pwCheck;
  const resultTag = <div>{totalResult ? "검사 성공😁" : "검사 실패!"}</div>;

  return (
    <div>
      <form>
        <div>
          <label>
            <span>아이디</span>
            <input
              type="text"
              ref={(el) => {
                loginRef.current[0] = el;
              }}
            />
          </label>
        </div>
        <div>
          <label>
            <span>비밀번호</span>
            <input
              type="password"
              ref={(el) => {
                loginRef.current[1] = el;
              }}
            />
          </label>
        </div>
        <button type="button" onClick={checkIdpwOnClick}>
          검사!
        </button>
      </form>
      <div>
        <p id="result"></p>
        {isEnd ? resultTag : <></>}
      </div>
    </div>
  );
};

export default Check;
