import { useQuery } from "react-query";

import apiClient from "../../../../apis/api-client";
import { IAPIError, IAxiosResponse } from "../../../../types";
import { API_QUERY_KEY, APIS_ROUTES } from "../../../../utils/enum";

interface ISessionDataHome {
  totalSessionsCompleted: number;
  totalUpcomingSessions: number;
  totalTodaysSessions: number;
}

const getSesssionDataForHome = async (organizationId?: string) => {
  const result = await apiClient.get<null, IAxiosResponse<ISessionDataHome>>(
    `${APIS_ROUTES.SESSION_SERVICE}/home-page-data/${organizationId}`
  );

  return result.data.Data;
};

const useGetSesssionDataForHome = (organizationId?: string) =>
  useQuery<ISessionDataHome, IAPIError>(
    [API_QUERY_KEY.GET_ALL_SESSION],
    () => getSesssionDataForHome(organizationId),
    {
      cacheTime: 0,
    }
  );

export default useGetSesssionDataForHome;
