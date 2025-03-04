import { useEffect, useState } from "react";
import { Sessions } from "../../utils/types";
import { useGetAllSessions } from "./services";
import { useParams } from "react-router-dom";

const useSessionController = () => {
  const { organizationId } = useParams<{
    organizationId: string;
  }>();
  const [pastSessions, setPastSessions] = useState<Sessions[]>();
  const [upcomingSessions, setUpcomingSessions] = useState<Sessions[]>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const getAllSessions = useGetAllSessions();

  useEffect(() => {
    if (getAllSessions.isSuccess && getAllSessions.data) {
      setPastSessions(getAllSessions.data.previous);
      setUpcomingSessions(getAllSessions.data.upcoming);
    }
  }, [getAllSessions.isSuccess, getAllSessions.data]);

  return {
    isModalOpen,
    setIsModalOpen,
    isLoading: getAllSessions.isLoading,
    organizationId,
    pastSessions,
    upcomingSessions,
  };
};

export default useSessionController;
