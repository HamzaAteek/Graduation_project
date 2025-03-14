//this component is the navigation bar
import { useContext } from "react";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import GameContext from "../hooks/GameContext";
import "../styles/nav-bar.css";

const Nav = () => {
  const { state, dispatch } = useContext(GameContext);
  return (
    <>
      <div className="navbar-app">
        {/* Logo component */}
        <div>
          <Logo text="game app header" className="logo-header" />
        </div>

        {/* Search component */}
        <div className="cover-search">
          <SearchInput />
        </div>
        <div className="theme-mode">
          {/* The toggel theme button */}
          <label className=" toggle-button-text">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onChange={() => dispatch({ type: "TOGGLE_THEME" })} //when change the botton the theme will change
              checked={state.theme === "dark"} //if the theme is dark the button will be checked
            />
            <div className="toggle-theme-button peer dark:bg-gray-700 peer-focus:ring-1 peer-focus:ring-green-300 dark:peer-focus:ring-green-900 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white peer-checked:bg-green-900"></div>
            <span className="toggle-theme-state">
              {state.theme === "light" ? "light" : "dark"}
            </span>
          </label>
        </div>
      </div>
    </>
  );
};

export default Nav;
