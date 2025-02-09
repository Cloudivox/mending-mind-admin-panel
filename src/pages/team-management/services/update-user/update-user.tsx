import { useMutation } from "react-query";

import apiClient from "../../../../apis/api-client";
import { IAPIError, IAxiosResponse, IUsers } from "../../../../types";
import { API_MUTATION_KEY, APIS_ROUTES } from "../../../../utils/enum";

export interface IUpdateUser {
  email: string;
  role: string;
  name: string;
  phone: string;
  _id: string;
}

const updateUser = async (user: IUpdateUser) => {
  const result = await apiClient.put<IUpdateUser, IAxiosResponse<IUsers>>(
    APIS_ROUTES.UPDATE_USER,
    user
  );

  return result.data.Data;
};

const useUpdateUser = () =>
  useMutation<IUsers, IAPIError, IUpdateUser>(
    [API_MUTATION_KEY.UPDATE_USER],
    updateUser
  );

export default useUpdateUser;
