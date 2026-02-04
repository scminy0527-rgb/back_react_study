import { useRef } from "react";
import "./App.css";
import { Route, RouterProvider, Routes } from "react-router-dom";
import router from "./router/routor";
import { UserRouteProvider } from "./context/expert/RouteContext";

function App() {
  return (
    <>
      {/* 프로바이더로 라우터 프로바이더를 감쌈
    유저 루트 프로바이더로 각종 ui 가 있는 전체 라우터를 감싸는 개념
    */}
      <UserRouteProvider>
        <RouterProvider router={router} />
      </UserRouteProvider>
    </>
  );
}

export default App;
