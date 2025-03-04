import { useMutation } from "react-query";

import apiClient from "../../../../apis/api-client";
import { IAPIError, IAxiosResponse, IUsers } from "../../../../types";
import { API_MUTATION_KEY, APIS_ROUTES } from "../../../../utils/enum";

const addUserInOrganization = async (
  userIds: string[],
  organizationId?: string
) => {
  const result = await apiClient.post<void, IAxiosResponse<IUsers>>(
    `${APIS_ROUTES.ORGANIZATION_SERVICE}/add-therapist/${organizationId}`,
    { therapistIds: userIds }
  );

  return result.data.Data;
};

const useAddUserInOrganization = (organizationId?: string) =>
  useMutation<IUsers, IAPIError, string[]>(
    [API_MUTATION_KEY.ADD_USER_IN_ORGANIZATION, organizationId],
    (userIds: string[]) => addUserInOrganization(userIds, organizationId)
  );

export default useAddUserInOrganization;
