import { createBrowserRouter } from "react-router-dom";
import Main from "./main/Main";
import Intro from "./intro/Intro";
import Job from "./job/Job";
import Post from "./post/Post";
import Layout from "./layout/Layout";
import DetailLayout from "./detail/DetailLayout";
import Detail from "./detail/Detail";
import Community from "./detail/Community";
import NotFound from "./notfound/NotFound";
import User from "./user/User";
import NotUser from "./user/NotUser";

// 구분점!
// ※path를 통해서도 값을 넘길 수 있다.
// 1. Query String -> useSearchParams
// 2. Path Variable -> /path/:변수명

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Main />
      },
      {
        path: "/intro",
        element: <Intro />
      },
      {
        path: "/job",
        element: <Job />
      },
      {
        path: "/post/:id",
        element: <Post />
      },
      {
        path: "/detail",
        element: <DetailLayout />,
        children: [
          {
            path: "",
            element: <Detail />
          },
          {
            path: "community",
            element: <Community />
          }
        ]
      },
      {
        path: "/user",
        element: <User />
      },
      {
        path: "/not-user",
        element: <NotUser />
      },
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
])

export default router;