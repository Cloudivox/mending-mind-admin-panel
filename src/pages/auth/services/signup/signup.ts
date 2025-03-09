import { useMutation } from "react-query";

import apiClient from "../../../../apis/api-client";
import {
  IAPIError,
  IAxiosResponse,
  IAuthData,
  IAuthResponse,
} from "../../../../types";
import { API_MUTATION_KEY, APIS_ROUTES } from "../../../../utils/enum";

const signup = async (signUp: IAuthData) => {
  const result = await apiClient.post<IAuthData, IAxiosResponse<IAuthResponse>>(
    APIS_ROUTES.SIGNUP,
    signUp
  );

  return result.data.Data;
};

const useSignup = () =>
  useMutation<IAuthResponse, IAPIError, IAuthData>(
    [API_MUTATION_KEY.SIGNUP],
    signup
  );

export default useSignup;
