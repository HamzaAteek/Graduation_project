//use game for game card list
import { useContext } from "react";
import useDataQuery from "../hooks/useDataQuery";
import GameContext from "./GameContext";

const useGame = () => {
  const { state } = useContext(GameContext);

  const { selectGenre, selectPlatform, selectSortOrder, selectSearchText } =
    state.gameQuery;
  return useDataQuery({
    endPoint: "/games", //pass the end of code
    filters: {
      //filtering is done using several parameters.
      genres: selectGenre?.id,
      platforms: selectPlatform?.id,
      ordering: selectSortOrder,
      search: selectSearchText,
      page_size: 6, //the number of card in the one page
    },
  });
};
export default useGame;
