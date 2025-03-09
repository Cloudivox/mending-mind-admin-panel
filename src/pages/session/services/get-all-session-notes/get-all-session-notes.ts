import { useQuery } from "react-query";

import apiClient from "../../../../apis/api-client";
import { IAPIError, IAxiosResponse } from "../../../../types";
import { API_QUERY_KEY, APIS_ROUTES } from "../../../../utils/enum";

interface ISessionNotes {
  id: string;
  sessionId: string;
  authorId: string;
  authorRole: string;
  authorName: string;
  commentText: string;
  createdAt: string;
}

const getAllSessionNotes = async (sessionId?: string) => {
  const result = await apiClient.get<null, IAxiosResponse<ISessionNotes[]>>(
    `${APIS_ROUTES.SESSION_NOTE_SERVICE}/get-all-notes/${sessionId}`
  );

  return result.data.Data;
};

const useGetAllSessionNotes = (sessionId?: string) =>
  useQuery<ISessionNotes[], IAPIError>(
    [API_QUERY_KEY.GET_ALL_SESSION_NOTES],
    () => getAllSessionNotes(sessionId),
    {
      cacheTime: 0,
      enabled: !!sessionId,
    }
  );

export default useGetAllSessionNotes;
