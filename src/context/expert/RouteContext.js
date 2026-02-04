import { createContext, useState } from "react";

// 생성
// 초기화
// 제공
export const RouteContext = createContext({
  state: {
    previousUrl: "",
    user: {
      userName: "",
      userAge: 0,
      userAddress: "",
      userPhone: "",
    },
  },
  actions: {
    setPreviousUrl: () => {},
    setUser: () => {},
  },
});

export const RouteProvider = ({ children }) => {
  const [previousUrl, setPreviousUrl] = useState("");
  const [user, setUser] = useState({
    userName: "",
    userAge: 0,
    userAddress: "",
    userPhone: "",
  });

  const value = {
    state: {
      previousUrl: previousUrl,
      user: user,
    },
    actions: {
      setPreviousUrl: setPreviousUrl,
      setUser: setUser,
    },
  };

  return (
    <RouteContext.Provider value={value}>{children}</RouteContext.Provider>
  );
};
