import { useMutation } from "react-query";
import apiClient from "../../../../apis/api-client";
import { IAPIError, IAxiosResponse } from "../../../../types";
import { API_MUTATION_KEY, APIS_ROUTES } from "../../../../utils/enum";

export interface ICreateEvent {
  name: string;
  description: string;
  location: string;
  date: string;
  time: string;
  duration: string;
  participants: string[];
  isPaid: boolean;
  price: number;
  host: string;
  hostDescription?: string;
}

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
  host: string;
  hostDescription?: string;
}

const createEvent = async (event: ICreateEvent) => {
  const result = await apiClient.post<null, IAxiosResponse<IEvents[]>>(
    `${APIS_ROUTES.EVENT_SERVICE}/create-event`,
    event
  );

  return result.data.Data;
};

const useCreateEvent = () =>
  useMutation<IEvents[], IAPIError, ICreateEvent>(
    [API_MUTATION_KEY.CREATE_EVENT],
    createEvent
  );

export default useCreateEvent;
