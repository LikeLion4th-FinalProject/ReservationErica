import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import LoginPage from './pages/LoginPage.jsx';
import CodegetPage from './pages/CodegetPage.jsx';
import Reservation from './pages/Reservation.jsx';
import RouteTest from './pages/RouteTest.jsx';
import ReserveHome from './pages/ReserveHome.jsx';

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
        path: 'auth/kakao/callback',
        element: <CodegetPage />,
      },
      {
        path: 'reservation/:id',
        element: <Reservation />,
      },
      {
        path: 'routetest',
        element: <RouteTest />,
      },
      {
        path: 'reservation',
        element: <ReserveHome />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
