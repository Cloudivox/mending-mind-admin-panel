import { useQuery } from "react-query";

import apiClient from "../../../../apis/api-client";
import { IAPIError, IAllTherapist, IAxiosResponse } from "../../../../types";
import { API_QUERY_KEY, APIS_ROUTES } from "../../../../utils/enum";

const getAllTherapist = async () => {
  const result = await apiClient.get<
    null,
    IAxiosResponse<{ therapists: IAllTherapist[] }>
  >(APIS_ROUTES.GET_ALL_THERAPIST);

  return result.data.Data;
};

const useGetAllTherapist = () =>
  useQuery<{ therapists: IAllTherapist[] }, IAPIError>(
    [API_QUERY_KEY.GET_ALL_THERAPIST],
    getAllTherapist,
    {
      cacheTime: 0,
    }
  );

export default useGetAllTherapist;
