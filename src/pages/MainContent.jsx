import { useState, useEffect } from "react";
import GameHead from "../components/GameHead";
import GameList from "../components/GameList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import SideBar from "../components/SideBar";

const MainContent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  // مراقبة التمرير لإظهار الزر
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 100); // يظهر بعد 100px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // العودة إلى أعلى الصفحة
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="MainContent grid grid-cols-12 p-4 gap-4">
      <div className="col-span-3 lg:col-span-2">
        <SideBar />
      </div>

      <div className="col-span-9 lg:col-span-10 pr-4">
        <div className="flex justify-between items-center mb-4">
          <GameHead />
          <div className="hidden md:flex space-x-4">
            <PlatformSelector />
            <SortSelector />
          </div>

          {/* Mobile Drawer Button */}
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
            <div className="mb-4">
              <PlatformSelector />
            </div>
            <div>
              <SortSelector />
            </div>
          </div>
        </div>
      )}

      {/*زر العودة للأعلى  */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center"
          style={{
            width: "55px",
            height: "55px",
            fontSize: "22px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          }}
        >
          <span className="text-4xl ">&#10506;</span>
        </button>
      )}
    </div>
  );
};

export default MainContent;
