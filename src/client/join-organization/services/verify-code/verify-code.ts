import { useMutation } from "react-query";

import apiClient from "../../../../apis/api-client";
import { IAPIError, IAxiosResponse } from "../../../../types";
import { API_MUTATION_KEY, APIS_ROUTES } from "../../../../utils/enum";

interface IVerifyCode {
  code: string;
}

interface IOrganization {
  id: string;
  name: string;
  description: string;
  country: string;
  therapists: string[];
  logo: string;
}

const createSession = async (code: IVerifyCode) => {
  const result = await apiClient.post<
    null,
    IAxiosResponse<{ organization: IOrganization }>
  >(`${APIS_ROUTES.ORGANIZATION_SERVICE}/verify-code`, code);

  return result.data.Data;
};

const useCreateSession = () =>
  useMutation<{ organization: IOrganization }, IAPIError, IVerifyCode>(
    [API_MUTATION_KEY.CREATE_SESSION],
    createSession
  );

export default useCreateSession;
