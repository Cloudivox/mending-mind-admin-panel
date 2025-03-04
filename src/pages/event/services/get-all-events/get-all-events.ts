import { useQuery } from "react-query";
import apiClient from "../../../../apis/api-client";
import { IAPIError, IAxiosResponse } from "../../../../types";
import { API_QUERY_KEY, APIS_ROUTES } from "../../../../utils/enum";
import { IEvents } from "../create-event/create-event";

const getAllEvents = async () => {
  const result = await apiClient.get<null, IAxiosResponse<IEvents[]>>(
    `${APIS_ROUTES.EVENT_SERVICE}/get-all-events`
  );

  return result.data.Data;
};

const useGetAllEvents = () =>
  useQuery<IEvents[], IAPIError>(
    [API_QUERY_KEY.GET_ALL_EVENTS],
    () => getAllEvents(),
    {
      cacheTime: 0,
    }
  );

export default useGetAllEvents;
