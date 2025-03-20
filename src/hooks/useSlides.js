//hook for fetch the games by genres id
import useDataQuery from "./useDataQuery";

const useSlides = (filter) =>
  useDataQuery({ endPoint: "/games", filters: { genres: filter } });
export default useSlides;
