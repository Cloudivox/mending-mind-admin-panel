import { useQuery } from "react-query";
import apiClient from "../../../../apis/api-client";
import { IAPIError, IAxiosResponse } from "../../../../types";
import { API_QUERY_KEY, APIS_ROUTES } from "../../../../utils/enum";

interface SessionResponse {
  _id: string;
  name: string;
  therapistId: string;
  clientId: string;
  status: string;
  type: string;
  sessionDateTime: string;
  duration: string;
  location: string;
  isNewClient: boolean;
  isPaid: boolean;
  createdAt: string;
  rescheduledAt?: string;
  rescheduledBy?: string;
  rescheduledReason?: string;
  rescheduledStatus?: string;
  isPackageCreated?: boolean;
  packageId?: string;
  createdBy: string;
}

const getLatestSessionByClient = async (clientId: string) => {
  const result = await apiClient.get<
    null,
    IAxiosResponse<{ data: SessionResponse | null }>
  >(`${APIS_ROUTES.SESSION_SERVICE}/client-session/${clientId}`);
  return result.data.Data.data;
};

const useGetLatestSessionByClient = (clientId: string) =>
  useQuery<SessionResponse | null, IAPIError>(
    [API_QUERY_KEY.GET_LATEST_SESSION_BY_CLIENT, clientId],
    () => getLatestSessionByClient(clientId),
    {
      cacheTime: 0,
      enabled: !!clientId,
    }
  );

export default useGetLatestSessionByClient;
