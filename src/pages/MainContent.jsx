//Main content page
import { useState, useEffect } from "react";
import GameHead from "../components/GameHead";
import GameList from "../components/GameList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import SideBar from "../components/SideBar";
import "../assets/styles/main-page.css";
import SearchInput from "../components/SearchInput";

const MainContent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  //function for display the back button to the start
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 100); //the button will display after 100 px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //for back to the start of page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="MainContent ">
      <div className="side-bar">
        <SideBar />
      </div>

      <div className="app-bar">
        <div className="app-head">
          <GameHead />
          <div className="selectors">
            <PlatformSelector />
            <SortSelector />
          </div>

          {/* Mobile Drawer Button */}
          <button
            className="drawer-button"
            onClick={() => setIsDrawerOpen(true)}
          >
            ☰
          </button>
        </div>
        {/* Search component */}
        <div className="my-4">
          <SearchInput />
        </div>
        <GameList />
      </div>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div className="drawer">
          <div className="sub">
            <button className="btn" onClick={() => setIsDrawerOpen(false)}>
              ✖
            </button>
            <h3 className="filter-by">Filters By:</h3>
            <div className="mb-4">
              <PlatformSelector setIsDrawerOpen={setIsDrawerOpen} />
            </div>
            <div>
              <SortSelector setIsDrawerOpen={setIsDrawerOpen} />
            </div>
          </div>
        </div>
      )}

      {/* button to bach home */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="btn-home"
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
