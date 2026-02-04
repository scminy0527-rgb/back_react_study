import { createBrowserRouter } from "react-router-dom";
import Main from "./main/Main";
import Intro from "./intro/Intro";
import Job from "./job/Job";
import Post from "./post/Post";

const router = createBrowserRouter([
  {
    path: "/",
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
]);

export default router;
