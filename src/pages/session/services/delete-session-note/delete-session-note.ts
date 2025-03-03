import { useMutation } from "react-query";

import apiClient from "../../../../apis/api-client";
import { IAPIError } from "../../../../types";
import { API_MUTATION_KEY, APIS_ROUTES } from "../../../../utils/enum";

const deleteSessionNote = async (noteId: string) => {
  await apiClient.delete<null, { response: string }>(
    `${APIS_ROUTES.SESSION_NOTE_SERVICE}/delete-note/${noteId}`
  );
};

const useDeleteSessionNote = () =>
  useMutation<void, IAPIError, string>(
    [API_MUTATION_KEY.DELETE_SESSION_NOTE],
    deleteSessionNote
  );

export default useDeleteSessionNote;
