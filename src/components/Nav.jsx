//الكومبونانت الخاص بالشريط الرئيسي
import React, { useContext } from "react";
import Logo from "./Logo"; //تضمين اللوغو
import SearchInput from "./SearchInput";
import GameContext from "../hooks/GameContext";

const Nav = () => {
  const { state, dispatch } = useContext(GameContext);
  return (
    <>
      <div className="navbar-app mx-5">
        <div>
          <Logo text="game app header" className="logo-header" />
        </div>

        <div className="cover-search mx-2 flex-grow">
          <SearchInput />
        </div>
        <div className="theme-mode">
          {/* الزر الذي سيبدل الوضه للوضع الليلي */}

          <label className=" flex flex-col items-center mt-1 justify-center me-5 cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onChange={() => dispatch({ type: "TOGGLE_THEME" })} //عند التغيير سيتم تنفيذ الدالة
              checked={state.theme === "dark"} //يكون مختار عندما يكون الثيم دارك
            />
            <div className="relative  w-11 h-6 bg-blue-300 rounded-full peer dark:bg-gray-700 peer-focus:ring-1 peer-focus:ring-green-300 dark:peer-focus:ring-green-900 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-900"></div>
            <span className="mt-1 text-sm font-medium text-gray-900 dark:text-gray-300">
              {state.theme === "light" ? "light" : "dark"}
            </span>
          </label>
        </div>
      </div>
    </>
  );
};

export default Nav;
