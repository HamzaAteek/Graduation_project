//A component for the list through which games will be filtered according to the platforms they run on.
import { useContext, useState } from "react";
import usePlatform from "../hooks/usePlatform";
import GameContext from "../hooks/GameContext";
import "../assets/styles/selectors.css";
const PlatformSelector = ({ setIsDrawerOpen }) => {
  const { error, data } = usePlatform();
  const selector = data?.pages[0]?.results;
  const { state, dispatch } = useContext(GameContext);
  const [isOpen, setIsOpen] = useState(false);
  const selectedPlatForms =
    state?.gameQuery?.selectPlatform?.name || "Platforms:"; //If there is no choice, it will be chosen "Platforms:" automatically.

  //this function for control close and open the drop down list
  const toggelDropDown = () => {
    setIsOpen(!isOpen);
  };

  //this function for choose the platform and close the list
  const handleSelect = (platform) => {
    dispatch({
      type: "SET_GAME_QUERY",
      payload: { selectPlatform: platform },
    });
    setIsOpen(false); //close the list after choose
  };
  if (error) return null;
  return (
    <>
      <div>
        <button
          onClick={toggelDropDown} //on click on the button the function will call
          id="platformDropdownButton"
          className="drop-down-button"
          type="button"
        >
          {selectedPlatForms}
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
          <div id="platformDropdown" className="drop-down-list">
            <ul aria-labelledby="platformDropdownButton">
              {/* This option returns the list without filtering */}
              <li onClick={() => handleSelect(null)}>None</li>
              {/* map on the items in the array */}
              {selector.map((platform) => (
                <li
                  key={platform.id}
                  onClick={() => {
                    handleSelect(platform), setIsDrawerOpen(false);
                  }}
                >
                  {platform?.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default PlatformSelector;
