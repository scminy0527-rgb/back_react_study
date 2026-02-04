import { useRef } from "react";
import "./App.css";
import { Route, RouterProvider, Routes } from "react-router-dom";
import router from "./router/routor";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
