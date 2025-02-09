import { useQuery } from "react-query";

import apiClient from "../../../../apis/api-client";
import { IAPIError, IAxiosResponse, IUsers } from "../../../../types";
import { API_QUERY_KEY, APIS_ROUTES } from "../../../../utils/enum";

const searchUser = async (query: string) => {
  const result = await apiClient.get<null, IAxiosResponse<{ users: IUsers[] }>>(
    APIS_ROUTES.SEARCH_USER,
    { params: { query } }
  );
  return result.data.Data;
};

// const useSearchUser = (query: string) =>
//   useQuery<{ users: IUsers[] }, IAPIError>(
//     [API_QUERY_KEY.SEARCH_USER],
//     () => searchUser(query),
//     {
//       enabled: !!query,
//       cacheTime: 0,
//     }
//   );

const useSearchUser = (query: string, options = {}) =>
  useQuery<{ users: IUsers[] }, IAPIError>(
    [API_QUERY_KEY.SEARCH_USER, query], // Include query in cache key
    () => searchUser(query),
    {
      enabled: !!query, // Only trigger API call when query is non-empty
      cacheTime: 0,
      ...options, // Allow passing additional options
    }
  );

export default useSearchUser;
