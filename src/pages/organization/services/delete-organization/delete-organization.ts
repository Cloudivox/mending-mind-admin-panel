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

const deleteOrganization = async (id: string) => {
  await apiClient.delete<null, { response: string }>(
    `${APIS_ROUTES.ORGANIZATION_SERVICE}/delete-organization`,
    {
      data: { id },
    }
  );
};

const useDeleteOrganization = () =>
  useMutation<void, IAPIError, string>(
    [API_MUTATION_KEY.DELETE_ORGANIZATION],
    deleteOrganization
  );

export default useDeleteOrganization;
