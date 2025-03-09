import { useContext } from "react";
import useDataQuery from "../hooks/useDataQuery";
import GameContext from "./GameContext";

const useGame = () => {
  const { state } = useContext(GameContext);

  const { selectGenre, selectPlatform, selectSortOrder, selectSearchText } =
    state.gameQuery;
  return useDataQuery({
    endPoint: "/games", //تمرير نهاية الرابط
    filters: {
      //عن طريق هذه تم الفلترة ببارمترات عدة
      genres: selectGenre?.id,
      platforms: selectPlatform?.id,
      ordering: selectSortOrder,
      search: selectSearchText,
      page_size: 6,
    },
  });
};
export default useGame;
