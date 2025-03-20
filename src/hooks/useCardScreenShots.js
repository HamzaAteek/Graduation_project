//hook for fetch screen shots for games
import useDataQuery from "./useDataQuery";

const useCardscreenShots = (id) =>
  useDataQuery({ endPoint: `/games/${id}/screenshots` });
export default useCardscreenShots;
