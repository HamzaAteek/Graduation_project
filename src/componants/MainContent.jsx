import { useState } from "react";
import GameHead from "./GameHead";
import GameList from "./GameList";
import PlatformSelector from "./PlatformSelector";
import SortSelector from "./SortSelector";
import SideBar from "./SideBar";

const MainContent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); //sue state for drawar appear on mobile only

  return (
    <div className="MainContent grid grid-cols-9 p-4 gap-4">
      <div className="col-span-4 sm:col-span-2">
        <SideBar />
      </div>

      <div className="col-span-5 sm:col-span-7 pr-4">
        <div className="flex justify-between items-center mb-4">
          <GameHead />
          <div className="hidden md:flex space-x-4">
            <PlatformSelector />
            <SortSelector />
          </div>

          {/* Mobile Drawar Button */}
          <button
            className="md:hidden text-gray-900 dark:text-white text-2xl"
            onClick={() => setIsDrawerOpen(true)}
          >
            ☰
          </button>
        </div>
        <GameList />
      </div>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="w-64 h-full bg-white dark:bg-gray-900 p-6 shadow-lg">
            <button
              className="text-gray-900 dark:text-white text-2xl mb-4"
              onClick={() => setIsDrawerOpen(false)}
            >
              ✖
            </button>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Filters By:
            </h3>
            <PlatformSelector />
            <SortSelector />
          </div>
        </div>
      )}
    </div>
  );
};

export default MainContent;
