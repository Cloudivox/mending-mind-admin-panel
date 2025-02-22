import { useMutation } from "react-query";

import apiClient from "../../../../apis/api-client";
import { IAPIError } from "../../../../types";
import { API_MUTATION_KEY, APIS_ROUTES } from "../../../../utils/enum";

const deleteUser = async (_id: string) => {
  await apiClient.delete<null, { response: string }>(APIS_ROUTES.DELETE_USER, {
    data: { _id },
  });
};

const useDeleteUser = () =>
  useMutation<void, IAPIError, string>(
    [API_MUTATION_KEY.DELETE_USER],
    deleteUser
  );

export default useDeleteUser;
