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
          <GameHead
            selectGenre={selectGenre}
            selectPlatform={selectPlatform}
            selectSortOrder={selectSortOrder}
          />
        </div>
        <div>
          <div>
            <PlatformSelector
              onSelectPlatform={onSelectPlatform}
              selectPlatform={selectPlatform}
            />
            <SortSelector
              selectSortOrder={selectSortOrder}
              onSelectSortOrder={onSelectSortOrder}
            />
          </div>
        </div>
      </div>
      <div>
        <GameList
          selectGenre={selectGenre}
          selectPlatform={selectPlatform}
          selectSortOrder={selectSortOrder}
          selectSearchText={selectSearchText}
        />
      </div>
    </div>
  );
};

export default MainContent;
