import { useQuery } from "react-query";

import apiClient from "../../../apis/api-client";
import { IAPIError, IAxiosResponse, IAuthResponse } from "../../../types";
import { API_QUERY_KEY, APIS_ROUTES, USER_ACCESS_KEY } from "../../../utils/enum";
import Cookies from "js-cookie";

const getUserDetails = async (): Promise<IAuthResponse> => {
  const token = Cookies.get(USER_ACCESS_KEY.TOKEN);
  if (!token) {
    throw new Error("No token found");
  }
  const result = await apiClient.get<null, IAxiosResponse<IAuthResponse>>(
    APIS_ROUTES.GET_USER_DETAILS
  );

  return result.data.Data;
};

const useGetUserDetails = () =>
  useQuery<IAuthResponse, IAPIError>(
    [API_QUERY_KEY.GET_USER_DETAILS],
    getUserDetails,
    {
      cacheTime: 0,
    }
  );

export default useGetUserDetails;
