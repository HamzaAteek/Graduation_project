//use platform for game platform list
import useDataQuery from "../hooks/useDataQuery";

const usePlatform = () =>
  useDataQuery({ endPoint: "/platforms/lists/parents" });
export default usePlatform;
