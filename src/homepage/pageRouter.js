import { createBrowserRouter } from "react-router-dom";
import PageLayout from "./PageLayout";
import HomeScreen from "./HomeScreen";
import SalePageLayout from "./salepage/SalePageLayout";
import SaleInfo from "./salepage/SaleInfo";
import SaleDetail from "./salepage/SaleDetail";
import PageUser from "./userstate/PageUser";

// 라우터를 생성하는거
// 기본적으로 라우터는 배열 형태
export const pageRouter = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,

    // 해당 PageLayout 의 하위 컴포넌트로 할 위젯들 정리
    children: [
      // PageLayout 에 가장 처음으로 올 메인페이지의 경로는 "" 빈칸으로 두기

      // 메인에 나올 HomeScreen
      {
        path: "",
        element: <HomeScreen />,
      },

      // 또 하위 레이아웃
      {
        path: "/sale-page",
        element: <SalePageLayout />,
        children: [
          // 해당 레이아웃 하위에 구성 할 자식 위젯들 정리
          // 그러면 SalePageLayout 내에서 url 변경을 하게 되면
          // SalePageLayout 의 나머지 부분은 그대로 유지 된 채 <main /> 부분만 리빌드 됨
          {
            path: "",
            element: <SaleInfo />,
          },
          {
            path: "info-detail",
            element: <SaleDetail />,
          },
        ],
      },

      // 여기에 유저 정보
      {
        path: "/user-page",
        element: <PageUser />,
      },
    ],
  },
]);
