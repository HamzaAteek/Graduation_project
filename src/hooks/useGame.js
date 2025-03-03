import { useContext } from "react";
import useDataQuery from "../hooks/useDataQuery";
import GameContext from "../componants/GameContext";

const useGame = () => {
  const { state } = useContext(GameContext);

  const { selectGenre, selectPlatform, selectSortOrder, selectSearchText } =
    state.gameQuery;
  console.log(state);
  return useDataQuery({
    endPoint: "/games", //تمرير نهاية الرابط
    filters: {
      //عن طريق هذه تم الفلترة ببارمترات عدة
      genres: selectGenre?.id,
      platforms: selectPlatform?.id,
      ordering: selectSortOrder,
      search: selectSearchText,
    },
  });
};
export default useGame;
