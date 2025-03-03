import { useMutation } from "react-query";

import apiClient from "../../../../apis/api-client";
import { IAPIError, IAxiosResponse } from "../../../../types";
import { API_MUTATION_KEY, APIS_ROUTES } from "../../../../utils/enum";

interface ISessionNote {
  commentText: string;
}
const createSessionNote = async (
  sessionNote: ISessionNote,
  sessionId?: string
) => {
  const result = await apiClient.post<null, IAxiosResponse<void>>(
    `${APIS_ROUTES.SESSION_NOTE_SERVICE}/create-note/${sessionId}`,
    sessionNote
  );

  return result.data.Data;
};

const useCreateSessionNote = (sessionId?: string) =>
  useMutation<void, IAPIError, ISessionNote>(
    [API_MUTATION_KEY.CREATE_SESSION_NOTE, sessionId],
    (values: ISessionNote) => createSessionNote(values, sessionId)
  );

export default useCreateSessionNote;
