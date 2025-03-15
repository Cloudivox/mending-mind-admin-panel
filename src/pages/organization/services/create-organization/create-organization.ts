import { useMutation } from "react-query";

import apiClient from "../../../../apis/api-client";
import { IAPIError, IAxiosResponse } from "../../../../types";
import { API_MUTATION_KEY, APIS_ROUTES } from "../../../../utils/enum";

interface IOrganization {
  name: string;
  location: string;
  code: string;
  description: string;
  logo: FileBase64 | null;
  therapists: string[];
  country: string;
}

interface FileBase64 {
  base64: string;
  name: string;
  type: string;
  size?: number;
}

const createOrganization = async (organization: IOrganization) => {
  const result = await apiClient.post<null, IAxiosResponse<void>>(
    `${APIS_ROUTES.ORGANIZATION_SERVICE}/create-organization`,
    organization
  );

  return result.data.Data;
};

const useCreateOrganization = () =>
  useMutation<void, IAPIError, IOrganization>(
    [API_MUTATION_KEY.CREATE_ORGANIZATION],
    createOrganization
  );

export default useCreateOrganization;
