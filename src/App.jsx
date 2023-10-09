import { Outlet, useLocation } from "react-router";
import "./App.css";
import Header from "./components/Header";
import BtnNav from "./components/BtnNav";

function App() {
  const location = useLocation();
  const hideLayout =
    location.pathname === "/signup" || location.pathname === "/login";

  return (
    <>
      {!hideLayout && <Header title="Home" />}
      <div className="overflow-y-scroll">
        <Outlet />
      </div>
      {!hideLayout && <BtnNav />}
    </>
  );
}

export default App;
