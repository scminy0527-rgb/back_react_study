import React, { useState } from "react";
import Product from "./Product";

// 함수 스코프 와부라면...
let tempCart = [];
let tempTotalPrice = 0;

const ProductContainer = () => {
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

  // 장바구니도 구현해야함

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

  const [price, setPrice] = useState(0);
  const [totalIncome, setIncome] = useState(0);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [isEnd, setIsShow] = useState(false);

  // 쇼핑 카드 하나만 가지고도 충분히 가능한지?
  const totalPrice = shoppingCart.reduce((acc, cur) => acc + cur.price, 0);
  console.log("쇼핑카드 기반 누적 금액: ", totalPrice);

  // let tempShoppingCart = [];
  // 장바구니 및 초기 수익 초기화 하는 모델 구현
  const clearShoppingCart = () => {
    console.log("초기화");
    setIncome(0);
    setShoppingCart([]);
    setIsShow(!isEnd);
  };

  // 임시 쇼핑카드에 상품 넣고 가격 누적 함수
  const addItem = (searchedItem) => {
    tempCart = [...tempCart, ...searchedItem];
    tempTotalPrice += searchedItem[0].price;
    console.log("추가 된 아이템: ", tempCart);
    console.log("누적 가격: ", tempTotalPrice);
  };

  // 사용자가 엔터를 누를 때 최종적으로 수행 할 동작 정의
  const findProductAndPrice = (e) => {
    // 일단 사용자가 엔터 키를 누를 때 확인
    if (e.key === "Enter") {
      // store 에서 상품 찾기 (알맞는 상품이 찾아짐)
      const searchedItem = store.productList.filter(
        (product) => product.name === e.target.value,
      );

      // 만약에 종료 면 반환
      if (e.target.value === "종료") {
        setIsShow(!isEnd);
        setPrice("구매해주셔서 감사합니다");
        return;
      }

      // 상품 로그에 표현
      console.log(searchedItem.length ? searchedItem : "검색 결과 없음");

      // 만약 검색한 상품이 있다면 일단 가격을 화면에 표시해줌
      if (searchedItem.length) {
        // 다시 구매 하는거라면 초기화
        isEnd && clearShoppingCart();
        // 입력값 비워주기
        e.target.value = "";
        const itemPrice = searchedItem[0].price;
        // 가격 추출 (ui 표시 용)
        setPrice(itemPrice.toLocaleString() + "원");
        // 가격 누적 합 구하기
        setIncome(totalIncome + itemPrice);
        store.income += itemPrice;

        // 장바구니에 담기
        addItem(searchedItem);
        setShoppingCart(
          isEnd ? [...searchedItem] : [...shoppingCart, ...searchedItem],
        );
        // tempShoppingCart = [...tempShoppingCart, ...searchedItem];
      } else {
        setPrice("다시 검색 필요");
      }

      // 장바구니 테스트
      // console.log("지금까지 장바구니: ", [...shoppingCart, ...searchedItem]);
      // console.log("누적 수입: ", totalIncome + searchedItem[0].price);
    }
  };

  // 총 상품 결과 리스트
  const shoppingList = shoppingCart.map(({ name, price }, i) => (
    <Product name={name} price={price} key={i} />
  ));

  const emptyTag = <></>;
  const priceTag = <p>상품 가격: {price.toLocaleString()}</p>;
  const thankTag = <p>구매해주셔서 감사합니다.</p>;

  // <Product shoppingCart={shoppingCart} />

  return (
    <div>
      <h1>결과 출력:</h1>
      <input
        type="text"
        placeholder="구매할 상품을 입력하세요"
        onKeyUp={findProductAndPrice}
      />
      {isEnd ? thankTag : priceTag}

      <div>
        <h2>총 판매 목록</h2>
        <ul>{isEnd ? shoppingList : emptyTag}</ul>
      </div>
      <h3>
        총 판매 가격:{" "}
        {isEnd ? totalIncome.toLocaleString() + "원" : emptyTag}{" "}
      </h3>
    </div>
  );
};

export default ProductContainer;
