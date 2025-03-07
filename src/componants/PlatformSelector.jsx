import { useContext, useState } from "react";
import usePlatform from "../hooks/usePlatform";
import GameContext from "./GameContext";

//كومبونانت خاص للقائمة التي من خلالها سيتم فلترة الألعاب حسب المنصات التي تعمل عليها
const PlatformSelector = () => {
  const { error, data } = usePlatform();
  const { state, dispatch } = useContext(GameContext);
  const [isOpen, setIsOpen] = useState(false);
  //دالة للتحكم بفتح وإغلاق القائمة
  const toggelDropDown = () => {
    setIsOpen(!isOpen);
  };
  //دالة اختيار العنصر وإغلاق القائمة
  const handleSelect = (platform) => {
    dispatch({
      type: "SET_GAME_QUERY",
      payload: { selectPlatform: platform },
    });
    setIsOpen(false); //إغلاق القائمة بعد الاختيار
  };
  if (error) return null;
  return (
    <>
      <div>
        <button
          onClick={toggelDropDown} //عند الضغط على القائمة يتم فتحها او اغلاقها
          id="platformDropdownButton"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          type="button"
        >
          {state.selectPlatform ? state.selectPlatform.name : "Platfroms:"}
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
            id="platformDropdown"
            className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="platformDropdownButton"
            >
              {/* هذا الخيار لإرجاع القائمة بدون فلترة */}
              <li onClick={() => handleSelect(null)}>
                <a className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                  None
                </a>
              </li>
              {data?.map((platform) => (
                <li
                  key={platform.id}
                  onClick={() => handleSelect(platform)}
                  className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
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
