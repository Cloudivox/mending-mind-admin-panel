import { useQuery } from "react-query";
import apiClient from "../../../../apis/api-client";
import { IAPIError, IAxiosResponse } from "../../../../types";
import { API_QUERY_KEY, APIS_ROUTES } from "../../../../utils/enum";
import { IProfile } from "../../../../utils/types";

const getProfileDetails = async (userId: string | undefined) => {
  const result = await apiClient.get<null, IAxiosResponse<IProfile>>(
    `${APIS_ROUTES.PROFILE_SERVICE}/get-profile-details/${userId}`
  );

  return result.data.Data;
};

const useGetProfileDetails = (userId: string | undefined) =>
  useQuery<IProfile, IAPIError>(
    [API_QUERY_KEY.GET_PROFILE_DETAILS],
    () => getProfileDetails(userId),
    {
      cacheTime: 0,
      enabled: !!userId,
    }
  );

export default useGetProfileDetails;
