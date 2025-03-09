import { useQuery } from "react-query";

import apiClient from "../../../../apis/api-client";
import { IAPIError, IAxiosResponse } from "../../../../types";
import { API_QUERY_KEY, APIS_ROUTES } from "../../../../utils/enum";

interface IOrganization {
  id: string;
  name: string;
  description: string;
  country: string;
  therapists: Therapist[];
  logo: string;
  users: number;
  location: string;
  code: string;
}

interface Therapist {
  _id: string;
  name: string;
}


const getAllSessionPackage = async () => {
  const result = await apiClient.get<null, IAxiosResponse<IOrganization[]>>(
    `${APIS_ROUTES.ORGANIZATION_SERVICE}/get-all-organizations`
  );

  return result.data.Data;
};

const useGetAllSessionPackage = () =>
  useQuery<IOrganization[], IAPIError>(
    [API_QUERY_KEY.GET_ALL_ORGANIZATION],
    () => getAllSessionPackage(),
    {
      cacheTime: 0,
    }
  );

export default useGetAllSessionPackage;
