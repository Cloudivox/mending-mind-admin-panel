import { useMutation } from "react-query";

import apiClient from "../../../../apis/api-client";
import {
  IAPIError,
  IAxiosResponse,
  IAvailabilityResponse,
} from "../../../../types";
import { API_MUTATION_KEY, APIS_ROUTES } from "../../../../utils/enum";

export interface IUpdateAvailability {
  availibilityId: string;
  startTime: string;
  endTime: string;
  type: string;
}

const updateAvailibility = async (availibility: IUpdateAvailability) => {
  const result = await apiClient.put<
    IUpdateAvailability,
    IAxiosResponse<IAvailabilityResponse>
  >(APIS_ROUTES.UPDATE_AVAILABILITY, availibility);

  return result.data.Data;
};

const useUpdateAvailibility = () =>
  useMutation<IAvailabilityResponse, IAPIError, IUpdateAvailability>(
    [API_MUTATION_KEY.UPDATE_AVAILABILITY],
    updateAvailibility
  );

export default useUpdateAvailibility;
