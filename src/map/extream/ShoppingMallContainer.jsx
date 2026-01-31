import React, { useState } from "react";
import ShoppingMall from "./ShoppingMall";

const ShoppingMallContainer = () => {
  // 사용자가 구매할 상품을 입력한다.
  // 입력한 상품이 스토어에 있다면, 상품이 판매 된다.
  // 모든 상품을 판매 후 사용자가 "종료"라고 입력하면
  // 판매된 총 가격을 출력한다.
  // ex) 닌텐도
  // ex) 키보드
  // ex) 종료
  // 판매 목록
  // - 닌텐도: 700,000원
  // - 키보드: 50,000원
  // 결과: 750,000원

  const store = {
    income: 0,
    productList: [
      {
        name: "닌텐도",
        price: 700000,
      },
      {
        name: "키보드",
        price: 50000,
      },
      {
        name: "마우스",
        price: 30000,
      },
      {
        name: "스피커",
        price: 75000,
      },
      {
        name: "마이크",
        price: 150000,
      },
    ],
  };

  const [value, setValue] = useState("");
  const [currentItem, setCurrentItem] = useState({});
  const [shoppingCart, setCart] = useState([]);
  const [isEnd, setEnd] = useState(false);

  // 사용자가 입력 한다면 할 거 정의
  // 계속 값을 입력할 때 실시간으로 값 저장해야함
  const valueOnChangeListener = (e) => {
    const value = e.target.value;
    setValue(value);
  };

  // 사용자가 엔터 칠 때
  const onKeyUpListener = (e) => {
    console.log(`키 입력 테스트: ${e.key}, ${e.target.value}`);

    // 상품 입력하고 엔터 치는 단계
    if (e.key === "Enter") {
      // 상품 추출
      const selectedItem = store.productList.find(
        (item) => item.name === e.target.value,
      );

      // 종료를 입력 했을 때
      if (e.target.value === "종료") {
        setEnd(!isEnd);
      }

      // 상품이 선택 되었다면 할당
      if (selectedItem) {
        console.log(`상품 ${selectedItem} 선택완료`);
        console.log(`장바구니: ${shoppingCart}`);

        setCurrentItem(selectedItem);
        setCart([...shoppingCart, selectedItem]);
      }
    }
  };

  // 상품 가격
  const itemPrice = currentItem.price ? currentItem.price.toLocaleString() : 0;

  // 가격 태그
  const priceTag = <div>{itemPrice}원</div>;

  // 구매를 한 목록을 보여주기
  const shoppingCartComponent = shoppingCart.map(({ name, price }, i) => (
    <ShoppingMall name={name} price={price} key={i} />
  ));

  // 총 가격
  const totalPrice = shoppingCart
    .map((item) => item.price)
    .reduce((acc, cur) => acc + cur, 0);

  const totalPriceComponent = <div>{totalPrice.toLocaleString()}원</div>;

  return (
    <div>
      <h1>결과 출력:</h1>
      <input
        type="text"
        placeholder="구매할 상품을 입력하세요"
        onChange={valueOnChangeListener}
        onKeyUp={onKeyUpListener}
      />
      {priceTag}

      <div>
        <h2>총 판매 목록</h2>
        <ul>{isEnd ? shoppingCartComponent : <></>}</ul>
      </div>
      <h3>총 판매 가격: </h3>
      {isEnd ? totalPriceComponent : <></>}
    </div>
  );
};

export default ShoppingMallContainer;
