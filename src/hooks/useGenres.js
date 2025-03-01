import useDataQuery from "../hooks/useDataQuery";

const useGenres = () => useDataQuery({ endPoint: "/genres" });
export default useGenres;
