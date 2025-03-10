//This component is for displaying the names to filter by.
import { useContext } from "react";
import GameContext from "../hooks/GameContext";

const GameHead = () => {
  const { state } = useContext(GameContext);
  const { selectGenre, selectPlatform, selectSortOrderLabel } = state.gameQuery;
  const heading = `${selectGenre?.name || ""} ${selectPlatform?.name || ""} ${
    selectSortOrderLabel || ""
  } Games`;
  return <h1 className="text-xl">{heading}</h1>;
};

export default GameHead;
