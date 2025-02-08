import { useQuery } from "react-query";

import apiClient from "../../../apis/api-client";
import { IAPIError, IAxiosResponse, IAuthData } from "../../../types";
import { API_QUERY_KEY, APIS_ROUTES } from "../../../utils/enum";

const getUserDetails = async () => {
  const result = await apiClient.get<null, IAxiosResponse<IAuthData>>(
    APIS_ROUTES.GET_USER_DETAILS
  );

  return result.data.Data;
};

const useGetUserDetails = () =>
  useQuery<IAuthData, IAPIError>(
    [API_QUERY_KEY.GET_USER_DETAILS],
    getUserDetails,
    {
      cacheTime: 0,
    }
  );

export default useGetUserDetails;
