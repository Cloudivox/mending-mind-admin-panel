import { useMutation } from "react-query";
import apiClient from "../../../../apis/api-client";
import { IAPIError, IAxiosResponse } from "../../../../types";
import { API_MUTATION_KEY, APIS_ROUTES } from "../../../../utils/enum";

interface IOrganization {
  name: string;
  location: string;
  code: string;
  description: string;
  logo: string;
  therapists: string[];
  country: string;
}

const updateOrganization = async (organization: IOrganization) => {
  const result = await apiClient.post<null, IAxiosResponse<void>>(
    `${APIS_ROUTES.ORGANIZATION_SERVICE}/update-organization`,
    organization
  );

  return result.data.Data;
};

const useUpdateOrganization = () =>
  useMutation<void, IAPIError, IOrganization>(
    [API_MUTATION_KEY.UPDATE_ORGANIZATION],
    updateOrganization
  );

export default useUpdateOrganization;
