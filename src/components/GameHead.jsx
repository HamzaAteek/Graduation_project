import { useContext } from "react";
import GameContext from "./GameContext";

//هذا الكومبونانت الخاص بعرض الأسماء التي يتم الفلرتة بناء عليها
const GameHead = () => {
  const { state } = useContext(GameContext);
  const { selectGenre, selectPlatform, selectSortOrderLabel } = state.gameQuery;
  const heading = `${selectGenre?.name || ""} ${selectPlatform?.name || ""} ${
    selectSortOrderLabel || ""
  } Games`;
  return <h1>{heading}</h1>;
};

export default GameHead;
