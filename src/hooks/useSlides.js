import useDataQuery from "./useDataQuery";

const useSlides = (filter) =>
  useDataQuery({ endPoint: "/games", filters: { genres: filter } });
export default useSlides;
