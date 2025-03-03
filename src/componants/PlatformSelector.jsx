import { useContext, useState } from "react";
import usePlatform from "../hooks/usePlatform";
import GameContext from "./GameContext";

//كومبونانت خاص للقائمة التي من خلالها سيتم فلترة الألعاب حسب المنصات التي تعمل عليها
const PlatformSelector = () => {
  const { error, data } = usePlatform();
  const { state, dispatch } = useContext(GameContext);
  if (error) return null;
  return (
    <>
      <button
        id="platformDropdownButton"
        data-dropdown-toggle="platformDropdown"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        {state.selectPlatform ? state.selectPlatform.name : "Platfroms"}{" "}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <div
        id="platformDropdown"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="platformDropdownButton"
        >
          {/* هذا الخيار لإرجاع القائمة بدون فلترة */}
          <li
            onClick={() =>
              dispatch({
                type: "SET_GAME_QUERY",
                payload: { selectPlatform: null },
              })
            }
          >
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              None
            </a>
          </li>
          {data?.map((platform) => (
            <li
              key={platform.id}
              onClick={() =>
                dispatch({
                  type: "SET_GAME_QUERY",
                  payload: { selectPlatform: platform },
                })
              }
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
            >
              {platform?.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default PlatformSelector;
