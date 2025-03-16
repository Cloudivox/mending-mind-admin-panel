import { useQuery } from "react-query";
import apiClient from "../../../../apis/api-client";
import { IAPIError, IAxiosResponse } from "../../../../types";
import { API_QUERY_KEY, APIS_ROUTES } from "../../../../utils/enum";
import { IEvents } from "../create-event/create-event";

const getAllEvents = async (organizationId?: string) => {
  const result = await apiClient.get<
    null,
    IAxiosResponse<{ previousEvents: IEvents[]; upcomingEvents: IEvents[] }>
  >(`${APIS_ROUTES.EVENT_SERVICE}/get-all-events/${organizationId}`);

  return result.data.Data;
};

const useGetAllEvents = (organizationId?: string) =>
  useQuery<{ previousEvents: IEvents[]; upcomingEvents: IEvents[] }, IAPIError>(
    [API_QUERY_KEY.GET_ALL_EVENTS],
    () => getAllEvents(organizationId),
    {
      cacheTime: 0,
    }
  );

export default useGetAllEvents;
