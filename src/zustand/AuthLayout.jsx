import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "./store/useAuthStore";

const AuthLayout = () => {
  const { isLogin, previousUrl } = useAuthStore((state) => state);
  // useEffect(() => {})

  if (!isLogin) return <Navigate to={"/"} replace={true} />;
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
