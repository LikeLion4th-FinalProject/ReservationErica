import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/Header";
import BtnNav from "./components/BtnNav";

function App() {
  return (
    <>
      <Header title="Home" />
      <Outlet />
      <BtnNav />
    </>
  );
}

export default App;
