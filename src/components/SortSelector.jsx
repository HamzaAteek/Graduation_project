import { useContext, useEffect, useState } from "react";
import GameContext from "../hooks/GameContext";

const SortSelector = () => {
  //مصفوفة تحتوي على القيم لفرز الألعاب حسب عدة قيم من الapi
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-release", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const { state, dispatch } = useContext(GameContext);
  const selectedSortLabel =
    state?.gameQuery?.selectSortOrderLabel || "Order by: ";
  //دالة لفتح واغلاق القائمة
  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  //دالة اختيار العنصر وإغلاق القائمة
  const handleSelect = (order) => {
    dispatch({
      type: "SET_GAME_QUERY",
      payload: {
        selectSortOrder: order.value,
        selectSortOrderLabel: order.label,
      },
    });
    setIsOpen(false); //إغلاق القائمة بعد الاختيار
  };

  return (
    <div>
      <button
        onClick={toggleDropDown} //عند الضغط على القائمة يتم فتحها او اغلاقها
        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        id="sortDropdownButton"
        aria-expanded="true"
        aria-haspopup="true"
        type="button"
      >
        {selectedSortLabel}
        <svg
          className="w-2.5 h-2.5 ms-3"
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
      {isOpen && (
        <div
          id="sortDropdown"
          className="z-10 w-auto absolute bg-white divide-y divide-gray-100 rounded-lg shadow-sm  dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="sortDropdownButton"
          >
            <li onClick={() => handleSelect("")}>
              <a className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                None
              </a>
            </li>
            {sortOrders.map((order) => (
              <li
                className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
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
