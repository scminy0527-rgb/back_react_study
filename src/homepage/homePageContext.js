import { createContext, useState } from "react";

// 해당 컨텍스트의 기본값 설정
// export 를 붙어야 지 외부 에서도 사용 가능
export const HomePageContext = createContext({
  state: {
    name: "",
  },
  actions: {
    changeName: () => {},
  },
});

// 외부 에서 불러 쓰기 위해 export 사용
export const HomePageProvider = ({ children }) => {
  const [name, setName] = useState("");
  const value = {
    state: {
      name: name,
    },
    actions: {
      changeName: (name) => {
        console.log(`이름을 ${name} 으로 변경하기`);
        setName(name);
      },
    },
  };

  return <HomePageContext value={value}>{children}</HomePageContext>;
};
