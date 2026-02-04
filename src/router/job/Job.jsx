import React from "react";
import { Link } from "react-router-dom";

const Job = () => {
  return (
    <div>
      Job 컴포넌트 입니다.
      {/* 구분점 필요// 경로 에도 값 넘기기 가능
      // 1. 쿼리 스트링 useSearchParams
      // 
        2. 패스 배리어블
      
      */}
      <Link style={{ display: "block" }} to={"/intro?job=developer"}>
        개발자 소개 페이지
      </Link>
      <Link style={{ display: "block" }} to={"/intro?job=police"}>
        경찰 소개 페이지
      </Link>
      <Link style={{ display: "block" }} to={"/intro?job=firefighter"}>
        소방관 소개 페이지
      </Link>
    </div>
  );
};

export default Job;
