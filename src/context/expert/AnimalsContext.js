import { createContext, useState } from "react";

// 1. 생성
export const AnimalsContext = createContext({
  state: { animals: [], isDelete: [] },
  action: { insert: () => {}, remove: () => {} },
});

// 2. 제공 (나중에 AnimalsProvider 태그로 자식 감쌈)
export const AnimalsProvider = ({ children }) => {
  const [animals, setAnimals] = useState(["누렁이", "점박이", "얼룩이"]);
  const [isDelete, setIsDelete] = useState([false, false, false]);
  const value = {
    state: {
      animals: animals,
      isDelete: isDelete,
    },
    actions: {
      insert: (animal) => {
        console.log("동물 추가");
        setAnimals([...animals, animal]);
        setIsDelete([...isDelete, false]);
      },
      remove: (index) => {
        console.log("삭제 위한 버튼 누름");
        // isDelete 먼저 설정
        const tempIsDelete = [...isDelete];
        tempIsDelete[index] = true;

        // animals 본 장 설정
        const tempAnimals = [...animals];

        // 지우지 않는 거만 다시 새롭게 만들면 됨
        const newAnimals = tempAnimals.filter((_, i) => !tempIsDelete[i]);

        // 최종 동물 리스트 및 bool 키 설정
        setAnimals(newAnimals);
        setIsDelete(tempIsDelete.filter((isDelete) => !isDelete));
      },
    },
  };

  // 실습: 1
  // insert 매서드를 완성하라
  return (
    <AnimalsContext.Provider value={value}>{children}</AnimalsContext.Provider>
  );
};

// 3. 사용
