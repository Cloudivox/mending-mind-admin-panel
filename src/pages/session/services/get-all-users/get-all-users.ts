import { useQuery } from "react-query";
import apiClient from "../../../../apis/api-client";
import { IAPIError, IAxiosResponse, IUsers } from "../../../../types";
import { API_QUERY_KEY, APIS_ROUTES } from "../../../../utils/enum";

interface UsersResponse {
  users: IUsers[];
}
const getAllUsers = async (organizationId?: string) => {
  const result = await apiClient.get<null, IAxiosResponse<UsersResponse>>(
    `${APIS_ROUTES.GET_ALL_USERS}/${organizationId}`,
    {
      params: {
        role: "therapist,client",
      },
    }
  );
  return result.data.Data;
};

const useGetAllUsers = (organizationId?: string) =>
  useQuery<UsersResponse, IAPIError>(
    [API_QUERY_KEY.GET_ALL_USERS],
    () => getAllUsers(organizationId),
    {
      cacheTime: 0,
    }
  );

export default useGetAllUsers;
