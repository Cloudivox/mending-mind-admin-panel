import { useMutation } from "react-query";
import apiClient from "../../../../apis/api-client";
import { IAPIError, IAxiosResponse, IBlogs } from "../../../../types";
import { API_MUTATION_KEY, APIS_ROUTES } from "../../../../utils/enum";

export interface IEvents {
  id: string;
  name: string;
  description: string;
  location: string;
  date: string;
  time: string;
  duration: string;
  participants: string[];
  isPaid: boolean;
  price: number;
  capacity: number;
}

const joinEvent = async (eventId: string) => {
  const result = await apiClient.post<null, IAxiosResponse<IEvents[]>>(
    `${APIS_ROUTES.EVENT_SERVICE}/join-event/${eventId}`
  );

  return result.data.Data;
};

const useJoinEvent = () =>
  useMutation<IEvents[], IAPIError, string>(
    [API_MUTATION_KEY.JOIN_EVENT],
    (eventId: string) => joinEvent(eventId)
  );

export default useJoinEvent;
