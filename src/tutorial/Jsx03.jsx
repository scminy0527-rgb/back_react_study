const Jsx03 = () => {
  // 이름 나이 만나이
  const name = "신철민";
  const age = 30;

  // JSX: {} JS의 문법을 사용하기 위한 탬플릿

  return (
    <>
      <p>이름: {name}</p>
      <p>나이: {age}</p>
      <p>만 나이: {age - 1}</p>
    </>
  );
};

export default Jsx03;
