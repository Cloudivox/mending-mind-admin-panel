import { useQuery } from "react-query";
import apiClient from "../../../../apis/api-client";
import { IAPIError, IAxiosResponse, IBlogs } from "../../../../types";
import { API_QUERY_KEY, APIS_ROUTES } from "../../../../utils/enum";

interface BlogsResponse {
  blogs: IBlogs[];
  status?: string;
}

const getBlogs = async (status?: string) => {
  const result = await apiClient.get<null, IAxiosResponse<BlogsResponse>>(
    `${APIS_ROUTES.GET_ALL_BLOGS}?status=${status}`
  );
  return result.data.Data;
};

const useGetAllBlogs = (status?: string) =>
  useQuery<BlogsResponse, IAPIError>(
    [API_QUERY_KEY.GET_ALL_BLOGS, status],
    () => getBlogs(status),
    {
      cacheTime: 0,
    }
  );

export default useGetAllBlogs;
