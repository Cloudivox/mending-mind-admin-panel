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
  clientAge: string;
  clientGender: string;
  clientEmail: string;
  clientPhone: string;
  therapistName: string;
  packageId: string;
  isPackageCreated: boolean;
}

const getSessionById = async (sessionId?: string) => {
  const result = await apiClient.get<null, IAxiosResponse<ISession>>(
    `${APIS_ROUTES.SESSION_SERVICE}/${sessionId}`
  );

  return result.data.Data;
};

const useGetSessionById = (sessionId?: string) =>
  useQuery<ISession, IAPIError>(
    [API_QUERY_KEY.GET_SESSION_BY_ID, sessionId],
    () => getSessionById(sessionId),
    {
      cacheTime: 0,
    }
  );

export default useGetSessionById;
