import { createBrowserRouter } from "react-router-dom";
import Main from "./main/Main";
import Intro from "./intro/Intro";
import Job from "./job/Job";
import Post from "./post/Post";
import Layout from "./layout/Layout";
import DetailLayout from "./detail/DetailLayout";
import Detail from "./detail/Detail";
import Comunity from "./detail/Comunity";
import User from "./user/User";
import NotUser from "./user/NotUser";

const router = createBrowserRouter([
  {
    // 중첩라우팅
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Main />,
      },
      {
        path: "/intro",
        element: <Intro />,
      },
      {
        path: "/job",
        element: <Job />,
      },
      {
        // 다이나믹 라우팅
        path: "/post/:id",
        element: <Post />,
      },
      {
        // 다이나믹 라우팅
        // Layout 위젯의 자식 위젯으로 있는 DetailLayout 에서
        // 해당 레이아웃의 ui (하위 해당 컴포넌트의 ui) 는 전체적인 유지 하면서
        // 하위 detail comunity 만 계속 변경
        path: "/detail",
        element: <DetailLayout />,
        children: [
          {
            path: "",
            element: <Detail />,
          },
          {
            path: "comunity",
            element: <Comunity />,
          },
        ],
      },

      // 유저 페이지 만들기
      // 유저 페이지는 상위 레이아웃 ui 를 그대로 계승한다.
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/not-user",
        element: <NotUser />,
      },
    ],
  },
]);

export default router;
