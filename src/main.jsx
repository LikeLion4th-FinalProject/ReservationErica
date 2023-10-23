import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import CodegetPage from "./pages/CodegetPage.jsx";
import Reservation from './pages/Reservation.jsx';
import ReserveHome from "./pages/ReserveHome.jsx";
import MyPage from "./pages/MyPage.jsx";
import BeforeSuggest from "./pages/BeforeSuggest.jsx";
import BeforeSuggestDetail from "./pages/BeforeSuggestDetail.jsx";
import BeforeReserve from "./pages/BeforeReserve.jsx";
import Suggest from "./pages/Suggest.jsx";
import SignupPage from './pages/SignupPage.jsx';
import { PrivateRoute } from "./hooks/PrivateRoute.jsx";
import ReserveRecord from './pages/ReserveRecord.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'signup',
        element: <SignupPage />,
      },
      {
        path: 'auth/kakao/callback',
        element: <CodegetPage />,
      },
      {
        path: "reservation/:id",
        element: (
          <PrivateRoute>
            <Reservation />
          </PrivateRoute>
        ),
      },
      {
        path: 'reservation',
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
      {
        path: 'mypage/reserveRecord',
        element: <ReserveRecord />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
