import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

const useDataQuery = ({ endPoint, filters, id }) => {
  const fetchGames = async ({ pageParam = 1 }) => {
    if (id) {
      //شرط للتعامل مع الآي دي الممرر منصفحة تفاصيل الكرت
      const { data } = await apiClient.get(`${endPoint}/${id}`);
      return data;
    }
    const { data } = await apiClient.get(endPoint, {
      params: { ...filters, page: pageParam },
    });
    return {
      results: data.results,
      nextPage: data.next ? pageParam + 1 : null,
    };
  };
  return useInfiniteQuery({
    queryKey: filters
      ? ["games", endPoint, filters]
      : id
      ? ["games", endPoint, id]
      : ["games", endPoint], //تم تضمين الفلتر ونهاية الكود ليتم تحديث البيانات عند تحديث اي منهم
    queryFn: fetchGames,
    keepPreviousData: true,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
};
export default useDataQuery;
