import React, { useRef, useState } from "react";

const CheckPr = () => {
  // ref
  // "검사!"버튼을 누르면 아이디 또는 비밀번호를 검사하기
  // 아이디 사용불가한 아이디가 존재
  // test123@gmail.com
  // test456@gmail.com
  // test678@gmail.com
  // 비밀번호가 없거나 위에 사용 불가한 아이디를 사용했다면
  // #result에 "검사 실패!"를 출력
  // 정상적으로 입력했다면 #result에 "검사 성공😁"을 출력
  const notAvailEmails = [
    "test123@gmail.com",
    "test456@gmail.com",
    "test678@gmail.com",
  ];

  const signUpRef = useRef([]);
  const [signupAvail, setAvail] = useState(false);
  const [isEnd, setEnd] = useState(false);

  const success = "검사 성공😁";
  const fail = "검사 실패";

  // 버튼 눌렀을 때 유효한지 검사 하는 함수 만들기
  const checkOnClick = () => {
    const id = signUpRef.current[0].value;
    const password = signUpRef.current[1].value;

    const idAvail = !!id.length && !notAvailEmails.includes(id);
    const pwAvail = !!password.length;

    console.log("아이디 기능: ", idAvail);
    console.log("비번 기능: ", pwAvail);

    const result = idAvail && pwAvail;
    setAvail(result);
    setEnd(true);
  };

  const finalResult = <p>{signupAvail ? success : fail}</p>;

  return (
    <div>
      <form action="">
        <div>
          <input
            type="text"
            placeholder="아이디를 입력하세요"
            ref={(el) => {
              signUpRef.current[0] = el;
            }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="비밀번호를 입력하세요"
            ref={(el) => {
              signUpRef.current[1] = el;
            }}
          />
        </div>
        <button type="button" onClick={checkOnClick}>
          검사
        </button>
      </form>
      {isEnd ? finalResult : <></>}
    </div>
  );
};

export default CheckPr;
