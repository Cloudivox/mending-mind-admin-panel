import { useMutation } from "react-query";

import apiClient from "../../../../apis/api-client";
import { IAPIError, IAxiosResponse, IUsers } from "../../../../types";
import { API_MUTATION_KEY, APIS_ROUTES } from "../../../../utils/enum";

export interface IAddUser {
  email: string;
  role: string;
  name: string;
  phone?: string;
  age: string;
  gender: string;
}

const addUser = async (user: IAddUser) => {
  const result = await apiClient.post<IAddUser, IAxiosResponse<{ user: IUsers }>>(
    APIS_ROUTES.ADD_USER,
    user
  );

  return result.data.Data;
};

const useAddUser = () =>
  useMutation<{ user: IUsers }, IAPIError, IAddUser>(
    [API_MUTATION_KEY.ADD_USER],
    addUser
  );

export default useAddUser;
