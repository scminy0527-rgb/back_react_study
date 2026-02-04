import React, { useContext } from "react";
import { Link } from "react-router-dom";
import RouteContext from "../../context/expert/RouteContext";

const Main = () => {
  const { state } = useContext(RouteContext);
  // 랜덤한 숫자
  const randomNum = Math.floor(Math.random() * 99) + 1;
  return (
    <div>
      <p>{state.user.userName}님 환영합니다</p>
      {/* <div>
        인트로 페이지 이동 <br />
        <Link style={{ display: "block" }} to="/intro">
          인트로 이동
        </Link>
      </div> */}
      {/* <div>
        JOB 페이지 이동 <br />
        <Link style={{ display: "block" }} to="/job">
          Job 으로 이동
        </Link>
      </div> */}
      {/* 
        Link 태그를 누르면 1~100까지 랜덤한 숫자로 post로 이동
        ex) /post/2
        ex) /post/31
        post 페이지는 랜덤한 숫자의 해당하는 데이터를
        jsonplace홀더에서 요청 후 화면에 id와 title만 h1태그로 출력(useEffect)
      */}
      {/* <Link style={{ display: "block" }} to={`/post/${randomNum}`}>
        Post 으로 이동
      </Link> */}
      메인 페이지 입니다.
    </div>
  );
};

export default Main;
