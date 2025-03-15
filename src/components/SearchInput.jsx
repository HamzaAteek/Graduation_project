//Search Input Component
import { useContext, useRef } from "react";
import GameContext from "../hooks/GameContext";
import "../assets/styles/main-page.css";
const SearchInput = () => {
  const { dispatch } = useContext(GameContext);
  const refValue = useRef();
  return (
    <form>
      <div className="relative">
        <div className="search-icon">
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          onChange={() =>
            //call function every change for more responding
            dispatch({
              type: "SET_GAME_QUERY",
              payload: { selectSearchText: refValue.current.value },
            })
          }
          ref={refValue}
          type="search"
          id="default-search"
          className="search-input"
          placeholder="Search 882,917 Games"
          required
        />
      </div>
    </form>
  );
};

export default SearchInput;
