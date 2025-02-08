import { useQuery } from "react-query";

import apiClient from "../../../../apis/api-client";
import { IAPIError, IAxiosResponse, IUsers } from "../../../../types";
import { API_QUERY_KEY, APIS_ROUTES } from "../../../../utils/enum";

const getUsers = async () => {
  const result = await apiClient.get<null, IAxiosResponse<{ users: IUsers[] }>>(
    APIS_ROUTES.GET_ALL_USERS
  );
  return result.data.Data;
};

const useGetAllUsers = () =>
  useQuery<{ users: IUsers[] }, IAPIError>(
    [API_QUERY_KEY.GET_ALL_USERS],
    () => getUsers(),
    {
      cacheTime: 0,
    }
  );

export default useGetAllUsers;
