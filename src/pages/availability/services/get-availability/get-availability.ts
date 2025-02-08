import { useQuery } from "react-query";

import apiClient from "../../../../apis/api-client";
import {
  IAPIError,
  IAvailabilityResponse,
  IAxiosResponse,
} from "../../../../types";
import { API_QUERY_KEY, APIS_ROUTES } from "../../../../utils/enum";

const getAvailibility = async (date: string) => {
  const result = await apiClient.get<
    null,
    IAxiosResponse<IAvailabilityResponse[]>
  >(APIS_ROUTES.GET_AVAILABILITY, { params: { date } });

  return result.data.Data;
};

const useGetAvailibility = (date: string) =>
  useQuery<IAvailabilityResponse[], IAPIError>(
    [API_QUERY_KEY.GET_AVAILABILITY, date],
    () => getAvailibility(date),
    {
      cacheTime: 0,
    }
  );

export default useGetAvailibility;
