//Component for pagination
import { useContext, useEffect } from "react";
import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";
import GameContext from "../hooks/GameContext";
import "../assets/styles/main-page.css";
const Layout = () => {
  const { state } = useContext(GameContext);
  const { theme } = state;
  //toggel theme and change it
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <>
      <div className="layout">
        <Nav />
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
