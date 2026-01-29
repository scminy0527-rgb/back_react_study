export default function Jsx02() {
  const name = "신철민";
  const age = 30;
  return (
    // 리액트 프래그먼트
    // 돔 트리를 하나로 만들어주기 위해 쓰는 용도
    <>
      <p>이름: {name}</p>
      <p>나이: {age}</p>
    </>
  );
}
