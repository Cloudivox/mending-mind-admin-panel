import { useMutation } from "react-query";
import apiClient from "../../../../apis/api-client";
import { IAPIError, IAxiosResponse } from "../../../../types";
import { API_MUTATION_KEY, APIS_ROUTES } from "../../../../utils/enum";
import { IProfile } from "../../../../utils/types";

const updateProfile = async (profile: IProfile) => {
  const result = await apiClient.put<IProfile, IAxiosResponse<IProfile>>(
    `${APIS_ROUTES.PROFILE_SERVICE}/update-profile`,
    profile
  );

  return result.data.Data;
};

const useUpdateProfile = () =>
  useMutation<IProfile, IAPIError, IProfile>(
    [API_MUTATION_KEY.UPDATE_PROFILE],
    updateProfile
  );

export default useUpdateProfile;
