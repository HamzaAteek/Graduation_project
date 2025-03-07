import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

const useDataQuery = ({ endPoint, filters, id }) => {
  const fetchGames = async () => {
    if (id) {
      const { data } = await apiClient.get(`${endPoint}/${id}`);
      return data;
    }
    const { data } = await apiClient.get(endPoint, { params: filters });
    return data.results;
  };
  return useQuery({
    queryKey: filters
      ? ["games", endPoint, filters]
      : id
      ? ["games", endPoint, id]
      : ["games", endPoint], //تم تضمين الفلتر ونهاية الكود ليتم تحديث البيانات عند تحديث اي منهم
    queryFn: fetchGames,
  });
};
export default useDataQuery;
