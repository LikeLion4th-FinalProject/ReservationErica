import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import CodegetPage from "./pages/CodegetPage.jsx";
import ReserveHome from "./pages/ReserveHome.jsx";
import MyPage from "./pages/MyPage.jsx";
import BeforeSuggest from "./pages/BeforeSuggest.jsx";
import BeforeSuggestDetail from "./pages/BeforeSuggestDetail.jsx";
import BeforeReserve from "./pages/BeforeReserve.jsx";
import Suggest from "./pages/Suggest.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "auth/kakao/callback",
        element: <CodegetPage />,
      },
      {
        path: "reservation",
        element: <ReserveHome />,
      },
      {
        path: "mypage/:id",
        element: <MyPage />,
      },
      {
        path: "mypage/before-suggest",
        element: <BeforeSuggest />,
      },
      {
        path: "mypage/before-reserve",
        element: <BeforeReserve />,
      },
      {
        path: "mypage/before-suggest-detail",
        element: <BeforeSuggestDetail />,
      },
      {
        path: "mypage/suggest",
        element: <Suggest />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
