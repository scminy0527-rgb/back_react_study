import React from "react";

// JSX는 if문을 사용할 수 없기 때문에 삼항 연산자를 지원한다
// 조건식 ? 참 일 때 랜더링 할 JSX : 거짓일 때 랜더링 할 JSX
// 조건식 && 참 일 때 랜더링 할 JSX, 거짓이면 아무것도 출력되지 않음
//  && 연산자는 앞의 조건식이 false 이면 뒤를 실행하지 않으며,
// false 라는 값은 랜더링 되지 않는다.

const Jsx04 = () => {
  const name = "홍길동";
  const isLogin = false;
  const isGuest = false;

  // isGuest가 true라면 p태그의 게스트를 화면에 출력
  // isLogin이 true라면 이름을 출력, false라면 비회원입니다를 출력

  // 주의: JSX는 if 문 지원 안함 (태그를 쓰는 영역에서만 불가능)
  // 나머지 영역에서는 if 문 사용 가능

  return (
    <div>
      {isGuest && <p>게스트</p>}
      <p>{isLogin ? `이름: ${name}` : "비회원입니다."}</p>
    </div>
  );
};

export default Jsx04;
