import { useContext, useEffect } from "react";
import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";
import GameContext from "../components/GameContext";

const Layout = () => {
  const { state } = useContext(GameContext);
  const { theme } = state;
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
      <div className=" bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Nav />
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
