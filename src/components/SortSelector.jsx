//Component for sort selector
import { useContext, useState } from "react";
import GameContext from "../hooks/GameContext";
import "../styles/selectors.css";
const SortSelector = () => {
  const sortOrders = [
    //Array containing values ​​to sort games by values ​​from the API
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-release", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const [isOpen, setIsOpen] = useState(false); //use satate for drop down

  const { state, dispatch } = useContext(GameContext);
  const selectedSortLabel =
    state?.gameQuery?.selectSortOrderLabel || "Order by: ";
  //this function for control close and open the drop down list
  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  //this function for choose the platform and close the list
  const handleSelect = (order) => {
    dispatch({
      type: "SET_GAME_QUERY",
      payload: {
        selectSortOrder: order.value,
        selectSortOrderLabel: order.label,
      },
    });
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={toggleDropDown}
        className="drop-down-button"
        id="sortDropdownButton"
        aria-expanded="true"
        aria-haspopup="true"
        type="button"
      >
        {selectedSortLabel}
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {isOpen && ( //if the list is open
        <div id="sortDropdown" className="drop-down-list">
          <ul aria-labelledby="sortDropdownButton">
            <li onClick={() => handleSelect("")}>None</li>
            {/* map on the items in the array */}

            {sortOrders.map((order) => (
              <li
                key={order.value}
                value={order.value}
                onClick={() => handleSelect(order)}
              >
                <a>{order.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortSelector;
