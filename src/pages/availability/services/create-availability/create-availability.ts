import { useMutation } from "react-query";

import apiClient from "../../../../apis/api-client";
import {
  IAPIError,
  IAxiosResponse,
  IAvailabilityData,
  IAvailabilityResponse,
} from "../../../../types";
import { API_MUTATION_KEY, APIS_ROUTES } from "../../../../utils/enum";

const createAvailibility = async (
  availibility: IAvailabilityData,
  organizationId?: string
) => {
  const result = await apiClient.post<
    IAvailabilityData,
    IAxiosResponse<IAvailabilityResponse>
  >(
    `${APIS_ROUTES.AVAILIBILITY_SERVICE}/create-availibility/${organizationId}`,
    availibility
  );

  return result.data.Data;
};

const useCreateAvailibility = (organizationId?: string) =>
  useMutation<IAvailabilityResponse, IAPIError, IAvailabilityData>(
    [API_MUTATION_KEY.CREATE_AVAILABILITY, organizationId],
    (availibility: IAvailabilityData) =>
      createAvailibility(availibility, organizationId)
  );

export default useCreateAvailibility;
