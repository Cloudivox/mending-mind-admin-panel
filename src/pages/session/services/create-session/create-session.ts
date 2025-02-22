import { useMutation } from "react-query";

import apiClient from "../../../../apis/api-client";
import {
    IAPIError,
    IAxiosResponse,
} from "../../../../types";
import { API_MUTATION_KEY, APIS_ROUTES } from "../../../../utils/enum";

interface ISession {
    therapistId: string;
    clientId: string;
    sessionId: string;
    sessionDateTime: string;
    duration: string;
    location: string;
    isNewClient: boolean;
    isPaid: boolean;
    type: string;
    name: string;
}
const createSession = async (session: ISession) => {
    const result = await apiClient.post<
        null,
        IAxiosResponse<void>
    >(`${APIS_ROUTES.SESSION_SERVICE}/create-session`, session);

    return result.data.Data;
};

const useCreateSession = () =>
    useMutation<void, IAPIError, ISession>(
        [API_MUTATION_KEY.CREATE_SESSION],
        createSession
    );

export default useCreateSession;
