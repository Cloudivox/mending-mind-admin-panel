import { useMutation } from "react-query";

import apiClient from "../../../../apis/api-client";
import { IAPIError, IAxiosResponse } from "../../../../types";
import { API_MUTATION_KEY, APIS_ROUTES } from "../../../../utils/enum";

interface ISession {
  therapistId: string;
  clientId: string;
  sessionDateTime: string;
  duration: string;
  location: string;
  isNewClient: boolean;
  isPaid: boolean;
  type: string;
  name: string;
  availibilityId: string;
}
const createSession = async (session: ISession, organizationId?: string) => {
  const result = await apiClient.post<null, IAxiosResponse<void>>(
    `${APIS_ROUTES.SESSION_SERVICE}/create-session/${organizationId}`,
    session
  );

  return result.data.Data;
};

const useCreateSession = (organizationId?: string) =>
  useMutation<void, IAPIError, ISession>(
    [API_MUTATION_KEY.CREATE_SESSION, organizationId],
    (session: ISession) => createSession(session, organizationId)
  );

export default useCreateSession;
