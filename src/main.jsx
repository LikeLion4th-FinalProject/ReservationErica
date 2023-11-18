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
import Suggest from "./pages/Suggest.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import { PrivateRoute } from "./hooks/PrivateRoute.jsx";
import ReserveRecord from "./pages/ReserveRecord.jsx";
import ReLogin from "./pages/ReLogin.jsx";
import SuggestRecord from "./pages/SuggestRecord.jsx";
import ReserveType from "./pages/ReserveType.jsx";

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
        path: "re-login",
        element: <ReLogin />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
      {
        path: "auth/kakao/callback",
        element: <CodegetPage />,
      },
      {
        path: "reservation",
        element: (
          <PrivateRoute>
            <ReserveType/>
          </PrivateRoute>
        ),
      },
      {
        path: "reservation/:type",
        element: (<PrivateRoute>
                      <ReserveHome />
        </PrivateRoute>
        )
      },
      {
        path: "mypage/:id",
        element: (
          <PrivateRoute>
            <MyPage />
          </PrivateRoute>
        ),
      },
      {
        path: "mypage/before-suggest",
        element: <SuggestRecord />,
      },
      {
        path: "mypage/before-reserve",
        element: <ReserveRecord />,
      },
      {
        path: "/suggest",
        element: <Suggest />,
      },
      {
        path: "mypage/reserveRecord",
        element: <ReserveRecord />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
