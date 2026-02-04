import React, { createContext, useState } from "react";

const RouteContext = createContext({
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

export const UserRouteProvider = ({ children }) => {
  const [previousUrl, setPreviousUrl] = useState("");
  const [user, setUser] = useState({
    userName: "",
    userAge: 0,
    userAddress: "",
    userPhone: "",
  });

  const value = {
    state: { previousUrl, user },
    actions: { setPreviousUrl, setUser },
  };

  return (
    <RouteContext.Provider value={value}>{children}</RouteContext.Provider>
  );
};

export default RouteContext;
