import React, { useState } from "react";

const Question = () => {
  // 다음과 같이 상태를 참고 해서 다시 그리는 작업을 해야하는 배열이 있다고 가정함
  const [testArray, setArray] = useState([1, 2, 3]);

  // 버튼을 클릭할 때 중간에 있는 원소를 지우는 매서드를 만든다고 가정
  const deleteNum = () => {
    // 중간에 있는 원소를 지우는걸 하려고 하면 당연히 아래와 같이 splice 를 떠올리게 됨
    // 숫자 2 를 제거한다고 가정
    setArray(testArray.splice(2, 1));
    // 그런데 위와 같은 형태는 기존 배열도 변경을 하지만
    // 지운 값을 반환하게 됨
    // 따라서 결국 setArray 의 매개변수에 전달되는 값은 splice 를 통해서 지워지는 값
    // 그렇게 되면 해당 값으로 배열이 바뀌게 됨

    // 이와 같은 경우에서 배열 내부 원소를 바꾸는 매서드를 사용하고자 할 때 useState 를 어떤 식으로 이용 가능한지?

    // 실제로는 배열 내용 변경 매서드를 사용하는건 dom 을 직접 참조하는 거와 비슷함 (비권장)
    // 따라서 새로운 배열을 반환해주는 map, filter 와 같은 매서드나 스프레드를 사용해야함
  };
  return <div></div>;
};

export default Question;
