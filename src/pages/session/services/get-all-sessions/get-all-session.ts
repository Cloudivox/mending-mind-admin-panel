import { useQuery } from "react-query";

import apiClient from "../../../../apis/api-client";
import {
    IAPIError,
    IAxiosResponse,
} from "../../../../types";
import { API_QUERY_KEY, APIS_ROUTES } from "../../../../utils/enum";

interface ISession {
    _id: string;
    name: string;
    therapistId: string;
    clientId: string;
    status: string;
    type: string;
    sessionDateTime: string;
    duration: string;
    location: string;
    clientName: string;
    clientEmail: string;
    clientPhone: string;
    therapistName: string;
    packageId: string;
    isPackageCreated: boolean;
}

const getAllSessionPackage = async () => {
    const result = await apiClient.get<
        null,
        IAxiosResponse<ISession[]>
    >(`${APIS_ROUTES.SESSION_SERVICE}/get-all-sessions`);

    return result.data.Data;
};

const useGetAllSessionPackage = () =>
    useQuery<ISession[], IAPIError>(
        [API_QUERY_KEY.GET_ALL_SESSION],
        () => getAllSessionPackage(),
        {
            cacheTime: 0,
        }
    );

export default useGetAllSessionPackage;
