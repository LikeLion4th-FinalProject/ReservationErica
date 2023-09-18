import { Outlet } from "react-router";
import "./App.css";

function App() {
  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
  console.log(apiUrl);

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
