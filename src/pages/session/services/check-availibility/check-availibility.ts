import { useQuery } from "react-query";

import apiClient from "../../../../apis/api-client";
import {
  IAPIError,
  IAvailabilityResponse,
  IAxiosResponse,
} from "../../../../types";
import { API_QUERY_KEY, APIS_ROUTES } from "../../../../utils/enum";

const checkAvailibility = async (
  userId: string,
  date: string,
  organizationId?: string
) => {
  if (!userId || !date) {
    return;
  }
  const result = await apiClient.get<
    null,
    IAxiosResponse<{ availibility: IAvailabilityResponse[]; count: number }>
  >(`${APIS_ROUTES.AVAILIBILITY_SERVICE}/${userId}/${organizationId}`, {
    params: {
      date,
    },
  });

  return result.data.Data;
};

const useCheckAvailibility = (
  userId: string,
  date: string,
  organizationId?: string
) =>
  useQuery<
    { availibility: IAvailabilityResponse[]; count: number } | void,
    IAPIError
  >(
    [API_QUERY_KEY.GET_ALL_SESSION, userId, date],
    () => checkAvailibility(userId, date, organizationId),
    {
      cacheTime: 0,
    }
  );

export default useCheckAvailibility;
