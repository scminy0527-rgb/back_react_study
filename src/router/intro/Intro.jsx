import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const Intro = () => {
  // 쿼리스트링
  // console.log(useSearchParams());
  const [searchParams] = useSearchParams();
  const seletedJob = searchParams.get("job");
  console.log(seletedJob);

  const introduce = {
    developer: {
      name: "예스민균",
      sallary: 3000,
      skills: ["HTML", "CSS", "JS", "React"],
    },
    police: {
      name: "약소훈",
      sallary: 5000,
      skills: ["기침", "달리기", "태권도", "배드민턴"],
    },
    firefighter: {
      name: "김유대",
      sallary: 2,
      skills: ["운전", "화재진압", "입으로 물뿜기", "물대포"],
    },
  };

  // 각각의 직업에 맞는 소개페이지를 구성하세요.
  // p태그 이름(name)
  // p태그 연봉(salary)
  // li태그 skills 출력

  const { name, sallary, skills } = introduce[seletedJob];
  const liSkill = skills.map((skill) => <li>{skill}</li>);

  const jobIntro = (
    <div>
      <p>이름: {name}</p>
      <p>연봉: {sallary}</p>
      <p>스킬 목록</p>
      <ul>{liSkill}</ul>
    </div>
  );
  return jobIntro;
};

export default Intro;
