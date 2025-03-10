//Hook to fetch data for a specific card based on its ID
import useDataQuery from "./useDataQuery";

const useCard = (id) => useDataQuery({ endPoint: "/games", id });
export default useCard;
