import GameHead from "./GameHead";
import GameList from "./GameList";
import PlatformSelector from "./PlatformSelector";
import SortSelector from "./SortSelector";

const MainContent = ({
  selectGenre,
  selectPlatform,
  onSelectPlatform,
  onSelectSortOrder,
  selectSortOrder,
  selectSearchText,
}) => {
  return (
    <div className="MainContent col-span-5">
      <div className="flex gap-6 mb-2 justify-between">
        <div>
          <GameHead />
        </div>
        <div>
          <PlatformSelector />
          <SortSelector />
        </div>
      </div>
      <div>
        <GameList />
      </div>
    </div>
  );
};

export default MainContent;
