import { useRef } from "react";
import "./App.css";
import { Router, RouterProvider } from "react-router-dom";
import { RouteProvider } from "./context/expert/RouteContext";
import router from "./router/router";

function App() {
  return (
    <>
      {/* 프로바이더로 라우터 프로바이더를 감쌈
    유저 루트 프로바이더로 각종 ui 가 있는 전체 라우터를 감싸는 개념
    */}
      <>
        <RouteProvider>
          <RouterProvider router={router} />
        </RouteProvider>
      </>

      {/* <HomePageProvider>
        <RouterProvider router={pageRouter} />
      </HomePageProvider> */}
    </>
  );
}

export default App;
