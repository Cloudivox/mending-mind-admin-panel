import { useQuery } from "react-query";

import apiClient from "../../../../apis/api-client";
import { IAPIError, IAxiosResponse } from "../../../../types";
import { API_QUERY_KEY, APIS_ROUTES } from "../../../../utils/enum";

interface ISession {
  _id: string;
  name: string;
  therapistId: string;
  clientId: string;
  status: string;
  type: string;
  sessionDateTime: string;
  duration: string;
  location: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  therapistName: string;
  packageId: string;
  isPackageCreated: boolean;
}

const getUpcomingSession = async (organizationId?: string) => {
  const result = await apiClient.get<
    null,
    IAxiosResponse<{ previous: ISession[]; upcoming: ISession[] }>
  >(`${APIS_ROUTES.SESSION_SERVICE}/get-all-sessions/${organizationId}`);

  return result.data.Data;
};

const useGetUpcomingSession = (organizationId?: string) =>
  useQuery<{ previous: ISession[]; upcoming: ISession[] }, IAPIError>(
    [API_QUERY_KEY.GET_UPCOMING_SESSIONS_HOME],
    () => getUpcomingSession(organizationId),
    {
      cacheTime: 0,
    }
  );

export default useGetUpcomingSession;
