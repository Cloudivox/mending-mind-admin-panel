import { useMutation } from "react-query";

import apiClient from "../../../../apis/api-client";
import { IAPIError, IAxiosResponse, IUsers } from "../../../../types";
import { API_MUTATION_KEY, APIS_ROUTES } from "../../../../utils/enum";

export interface IAddUser {
  email: string;
  role: string;
  name: string;
  phone?: string;
}

const addUser = async (user: IAddUser, organizationId?: string) => {
  const result = await apiClient.post<IAddUser, IAxiosResponse<IUsers>>(
    `${APIS_ROUTES.ADD_USER}/${organizationId}`,
    user
  );

  return result.data.Data;
};

const useAddUser = (organizationId?: string) =>
  useMutation<IUsers, IAPIError, IAddUser>(
    [API_MUTATION_KEY.ADD_USER, organizationId],
    (user: IAddUser) => addUser(user, organizationId)
  );

export default useAddUser;
