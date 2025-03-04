import { useEffect, useState } from "react";
import { Sessions } from "../../utils/types";
import { useGetAllSessions } from "./services";
import { useNavigate, useParams } from "react-router-dom";
import { useUser } from "../../context/user-context";

const useSessionController = () => {
  const { organizationId } = useParams<{
    organizationId: string;
  }>();
  const [pastSessions, setPastSessions] = useState<Sessions[]>();
  const [upcomingSessions, setUpcomingSessions] = useState<Sessions[]>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const getAllSessions = useGetAllSessions(organizationId);
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (getAllSessions.isSuccess && getAllSessions.data) {
      setPastSessions(getAllSessions.data.previous);
      setUpcomingSessions(getAllSessions.data.upcoming);
    }
  }, [getAllSessions.isSuccess, getAllSessions.data]);

  const navigateBookSession = () => {
    navigate(`/${organizationId}/book-session`);
  };

  return {
    isModalOpen,
    setIsModalOpen,
    isLoading: getAllSessions.isLoading,
    organizationId,
    pastSessions,
    upcomingSessions,
    user,
    navigateBookSession,
  };
};

export default useSessionController;
