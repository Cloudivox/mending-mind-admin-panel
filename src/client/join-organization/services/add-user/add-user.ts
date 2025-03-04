import { useMutation } from "react-query";

import apiClient from "../../../../apis/api-client";
import { IAPIError, IAxiosResponse } from "../../../../types";
import { API_MUTATION_KEY } from "../../../../utils/enum";

export interface IAddUser {
  email: string;
  role: string;
  name: string;
  phone?: string;
  age: string;
  gender: string;
  password: string;
}

export interface IAddUserResponse {
  email: string;
  id: string;
  role: string;
  token: string;
  name: string;
}

const addUser = async (user: IAddUser, organizationId?: string) => {
  const result = await apiClient.post<
    IAddUser,
    IAxiosResponse<{ user: IAddUserResponse }>
  >(`/auth-service/v1/auth/client-register/${organizationId}`, user);

  return result.data.Data;
};

const useRegisterUser = (organizationId?: string) =>
  useMutation<{ user: IAddUserResponse }, IAPIError, IAddUser>(
    [API_MUTATION_KEY.REGISTER_USER, organizationId],
    (user: IAddUser) => addUser(user, organizationId)
  );

export default useRegisterUser;
