import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/Header";
import BtnNav from "./components/BtnNav";

function App() {
  return (
    <>
      <Header title="Home" />
      <div className="overflow-y-scroll">
        <Outlet />
      </div>
      <BtnNav />
    </>
  );
}

export default App;
