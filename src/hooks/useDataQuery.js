import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

const useDataQuery = ({ endPoint, filters }) => {
  const fetchGames = async () => {
    const { data } = await apiClient.get(endPoint, { params: filters });
    return data.results;
  };
  return useQuery({
    queryKey: filters ? ["games", endPoint, filters] : ["games", endPoint], //تم تضمين الفلتر ونهاية الكود ليتم تحديث البيانات عند تحديث اي منهم
    queryFn: fetchGames,
  });
};
export default useDataQuery;
