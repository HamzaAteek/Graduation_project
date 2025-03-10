//use query
import { useInfiniteQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

const useDataQuery = ({ endPoint, filters, id }) => {
  //pickup the props from speciefic use
  const fetchGames = async ({ pageParam = 1 }) => {
    if (id) {
      //Condition for dealing with the ID passed from the card details page
      const { data } = await apiClient.get(`${endPoint}/${id}`);
      return data;
    }
    //for the rest of use files
    const { data } = await apiClient.get(endPoint, {
      params: { ...filters, page: pageParam }, //filters on the page and the filters which call from the component files
    });
    return {
      results: data.results, //return data
      nextPage: data.next ? pageParam + 1 : null, //return next page
    };
  };
  return useInfiniteQuery({
    queryKey: filters
      ? ["games", endPoint, filters] // the data is updated when the filter or end of the code is updated
      : id
      ? ["games", endPoint, id]
      : ["games", endPoint],
    queryFn: fetchGames,
    keepPreviousData: true, //for keep the last data
    getNextPageParam: (lastPage) => lastPage.nextPage, //for get the next page
  });
};
export default useDataQuery;
