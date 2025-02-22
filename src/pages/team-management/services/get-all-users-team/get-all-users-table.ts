import { useQuery } from "react-query";
import apiClient from "../../../../apis/api-client";
import { IAPIError, IAxiosResponse, IUsers } from "../../../../types";
import { API_QUERY_KEY, APIS_ROUTES } from "../../../../utils/enum";

interface PaginationData {
    totalUsers: number;
    totalPages: number;
    currentPage: number;
    limit: number;
}

interface UsersResponse {
    users: IUsers[];
    pagination: PaginationData;
}
const getAllUsers = async (page: number, limit: number, search: string) => {
    const result = await apiClient.get<null, IAxiosResponse<UsersResponse>>(
        APIS_ROUTES.GET_ALL_USERS, {
        params: {
            role: "therapist,admin",
            page,
            limit,
            search
        }
    }
    );
    return result.data.Data;
};

const useGetAllUsers = (page: number, limit: number, search: string) =>
    useQuery<UsersResponse, IAPIError>(
        [API_QUERY_KEY.GET_ALL_USERS, page, limit, search],
        () => getAllUsers(page, limit, search),
        {
            cacheTime: 0,
        }
    );

export default useGetAllUsers;