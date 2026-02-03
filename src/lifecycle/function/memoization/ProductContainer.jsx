import React, { useCallback, useMemo, useState } from "react";
import Amount from "./Amount";

const ProductContainer = () => {
  const [like, setLike] = useState(0);
  const [amount, setAmount] = useState(1);
  console.log("부모🧔 랜더링");

  const addLike = () => setLike(like + 1);
  const likeMemo = useMemo(() => {
    console.log("like 연산");
    return like;
  }, [like]);

  const amountMemo = useMemo(() => {
    console.log("amount 연산");
    return amount;
  }, [amount]);

  const setAmountCallback = useCallback(() => {
    setAmount(amount + 1);
  }, [like]);

  const props = { amountMemo, setAmountCallback };

  return (
    <div>
      <h1>좋아요: {likeMemo}개</h1>
      <button onClick={addLike}>좋아요</button>
      <hr />
      <Amount props={props} />
    </div>
  );
};

export default ProductContainer;
