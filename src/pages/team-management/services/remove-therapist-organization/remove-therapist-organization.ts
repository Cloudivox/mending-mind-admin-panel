import { useMutation } from "react-query";

import apiClient from "../../../../apis/api-client";
import { IAPIError } from "../../../../types";
import { API_MUTATION_KEY, APIS_ROUTES } from "../../../../utils/enum";

const removeUserFromOrganization = async (
  userId: string,
  organizationId?: string
) => {
  await apiClient.delete<null, { response: string }>(
    `${APIS_ROUTES.ORGANIZATION_SERVICE}/delete-therapist-organization/${organizationId}/${userId}`
  );
};

const useRemoveUserFromOrganization = (organizationId?: string) =>
  useMutation<void, IAPIError, string>(
    [API_MUTATION_KEY.DELETE_USER_ORGANIZATION, organizationId],
    (userId: string) => removeUserFromOrganization(userId, organizationId)
  );

export default useRemoveUserFromOrganization;
