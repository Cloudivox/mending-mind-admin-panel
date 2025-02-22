import { useMutation } from "react-query";

import apiClient from "../../../../apis/api-client";
import {
    IAPIError,
    IAxiosResponse,
    IAvailabilityData,
    IAvailabilityResponse,
} from "../../../../types";
import { API_MUTATION_KEY, APIS_ROUTES } from "../../../../utils/enum";

interface ISessionPackage {
    therapistId: string;
    clientId: string;
    sessionId: string;
    totalSessions: string;
    sessions: string[];
    goals: string[];
    name: string;
}
const createSessionPackage = async (sessionPackage: ISessionPackage) => {
    const result = await apiClient.post<
        IAvailabilityData,
        IAxiosResponse<IAvailabilityResponse>
    >(`${APIS_ROUTES.SESSION_PACKAGE_SERVICE}/create-session-package`, sessionPackage);

    return result.data.Data;
};

const useCreateSessionPackage = () =>
    useMutation<IAvailabilityResponse, IAPIError, ISessionPackage>(
        [API_MUTATION_KEY.CREATE_SESSION_PACKAGE],
        createSessionPackage
    );

export default useCreateSessionPackage;
