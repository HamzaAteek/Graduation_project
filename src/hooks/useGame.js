import useData from "../hooks/useData";

const useGame = (
  selectGenre,
  selectPlatform,
  selectSortOrder,
  selectSearchText
) =>
  useData(
    "/games",
    {
      //عن طريق هذه تم الفلترة ببارمترات عدة
      params: {
        genres: selectGenre?.id,
        platforms: selectPlatform?.id,
        ordering: selectSortOrder,
        search: selectSearchText,
      },
    },
    [selectGenre?.id, selectPlatform?.id, selectSortOrder, selectSearchText] //قمنا بتمرير بارمترات اخرى لليوس داتا وهو الاي دي الذي على اساسه سيتم فلترة الألعاب
  );
export default useGame;
