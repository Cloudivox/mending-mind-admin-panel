import { useMutation } from "react-query";

import apiClient from "../../../../apis/api-client";
import { IAPIError, IAxiosResponse, IBlogs } from "../../../../types";
import { API_MUTATION_KEY, APIS_ROUTES } from "../../../../utils/enum";

export interface ICreateBlog {
  title: string;
  desc: string;
  img: string;
  author: string;
  date: string;
  read?: string;
}

const createBlog = async (user: ICreateBlog) => {
  const result = await apiClient.post<ICreateBlog, IAxiosResponse<IBlogs>>(
    APIS_ROUTES.CREATE_BLOG,
    user
  );

  return result.data.Data;
};

const useCreateBlog = () =>
  useMutation<IBlogs, IAPIError, ICreateBlog>(
    [API_MUTATION_KEY.CREATE_BLOG],
    createBlog
  );

export default useCreateBlog;
