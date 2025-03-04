import { useContext } from "react";
import GameContext from "./GameContext";

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
  const { state, dispatch } = useContext(GameContext);
  //دالة للبحث عن القيمة وترجعها اذا لم يكن هنالك قيمة تضع القيمة الافتراضية
  const selectedSortLabel =
    sortOrders.find((order) => order.value === state.selectSortOrder)?.label ||
    "Relevance";

  return (
    <>
      <button
        id="sortDropdownButton"
        data-dropdown-toggle="sortDropdown"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Order by: {selectedSortLabel}
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
      <div
        id="sortDropdown"
        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
      >
        <ul
          class="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="sortDropdownButton"
        >
          {sortOrders.map((order) => (
            <li
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
              key={order.value}
              value={order.value}
              onClick={() =>
                dispatch({
                  type: "SET_GAME_QUERY",
                  payload: { selectSortOrder: order.value },
                })
              }
            >
              <a href="#">{order.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SortSelector;
