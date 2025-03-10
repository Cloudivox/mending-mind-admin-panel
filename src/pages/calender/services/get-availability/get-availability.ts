import { useQuery } from "react-query";

import apiClient from "../../../../apis/api-client";
import {
  IAPIError,
  IAvailabilityResponse,
  IAxiosResponse,
} from "../../../../types";
import { API_QUERY_KEY, APIS_ROUTES } from "../../../../utils/enum";

const getAvailibility = async (date: string, organizationId?: string) => {
  const result = await apiClient.get<
    null,
    IAxiosResponse<{ availibility: IAvailabilityResponse[]; count: number }>
  >(`${APIS_ROUTES.AVAILIBILITY_SERVICE}/get-availibility/${organizationId}`, {
    params: { date },
  });

  return result.data.Data;
};

const useGetAvailibility = (date: string, organizationId?: string) =>
  useQuery<{ availibility: IAvailabilityResponse[]; count: number }, IAPIError>(
    [API_QUERY_KEY.GET_AVAILABILITY, date],
    () => getAvailibility(date, organizationId),
    {
      cacheTime: 0,
    }
  );

export default useGetAvailibility;
