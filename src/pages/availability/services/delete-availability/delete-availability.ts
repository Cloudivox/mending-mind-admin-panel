import { useMutation } from "react-query";

import apiClient from "../../../../apis/api-client";
import { IAPIError } from "../../../../types";
import { API_MUTATION_KEY, APIS_ROUTES } from "../../../../utils/enum";

const deleteAvailibility = async (availibilityId: string) => {
  await apiClient.delete<null, { response: string }>(
    APIS_ROUTES.DELETE_AVAILABILITY,
    { data: { availibilityId } }
  );
};

const useDeleteAvailibility = () =>
  useMutation<void, IAPIError, string>(
    [API_MUTATION_KEY.DELETE_AVAILABILITY],
    deleteAvailibility
  );

export default useDeleteAvailibility;
