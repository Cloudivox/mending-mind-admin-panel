import { useMutation } from "react-query";

import apiClient from "../../../../apis/api-client";
import {
  IAPIError,
  IAxiosResponse,
  IAvailabilityData,
  IAvailabilityResponse,
} from "../../../../types";
import { API_MUTATION_KEY, APIS_ROUTES } from "../../../../utils/enum";

const createAvailibility = async (availibility: IAvailabilityData) => {
  const result = await apiClient.post<
    IAvailabilityData,
    IAxiosResponse<IAvailabilityResponse>
  >(`${APIS_ROUTES.AVAILIBILITY_SERVICE}/create-availibility`, availibility);

  return result.data.Data;
};

const useCreateAvailibility = () =>
  useMutation<IAvailabilityResponse, IAPIError, IAvailabilityData>(
    [API_MUTATION_KEY.CREATE_AVAILABILITY],
    createAvailibility
  );

export default useCreateAvailibility;
