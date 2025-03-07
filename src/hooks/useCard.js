//هوك لجلب بيانات كرت معين بناء على الآي دي الخاص به
import useDataQuery from "./useDataQuery";

const useCard = (id) => useDataQuery({ endPoint: "/games", id });
export default useCard;
