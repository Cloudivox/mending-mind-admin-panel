import { useEffect, useState } from "react";
import { Sessions } from "../../utils/types";
import { useGetAllSessions } from "./services";
import { useParams } from "react-router-dom";

const useSessionController = () => {
  const { organizationId } = useParams<{
    organizationId: string;
  }>();
  const [sessions, setSessions] = useState<Sessions[]>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const getAllSessions = useGetAllSessions();

  useEffect(() => {
    if (getAllSessions.isSuccess && getAllSessions.data) {
      setSessions(getAllSessions.data);
    }
  }, [getAllSessions.isSuccess, getAllSessions.data]);

  return {
    sessions,
    isModalOpen,
    setSessions,
    setIsModalOpen,
    isLoading: getAllSessions.isLoading,
    organizationId,
  };
};

export default useSessionController;
