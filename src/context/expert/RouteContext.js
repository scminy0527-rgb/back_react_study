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
  const [isLogin, setIsLogin] = useState(false);

  const value = {
    state: {
      previousUrl: previousUrl,
      user: user,
      isLogin: isLogin,
    },
    actions: {
      setPreviousUrl: setPreviousUrl,
      setUser: setUser,
      setIsLogin: setIsLogin,
    },
  };

  return (
    <RouteContext.Provider value={value}>{children}</RouteContext.Provider>
  );
};
