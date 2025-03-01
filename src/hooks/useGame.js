import useDataQuery from "../hooks/useDataQuery";

const useGame = (
  selectGenre,
  selectPlatform,
  selectSortOrder,
  selectSearchText
) => {
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
