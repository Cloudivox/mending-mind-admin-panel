import { useMutation } from "react-query";

import apiClient from "../../../../apis/api-client";
import {
  IAPIError,
  IAxiosResponse,
  IRequestRescheduleData,
} from "../../../../types";
import { API_MUTATION_KEY, APIS_ROUTES } from "../../../../utils/enum";

const requestReschedule = async (availibility: IRequestRescheduleData) => {
  const result = await apiClient.post<
  IRequestRescheduleData,
    IAxiosResponse<void>
  >(`${APIS_ROUTES.RESCHEDULE_REQUEST}/${availibility.availibilityId}`, availibility);

  return result.data.Data;
};

const useRequestReschedule = () =>
  useMutation<void, IAPIError, IRequestRescheduleData>(
    [API_MUTATION_KEY.CREATE_AVAILABILITY],
    requestReschedule
  );

export default useRequestReschedule;
