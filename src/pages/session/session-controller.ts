import { useEffect, useState } from "react";
import { Sessions } from "../../utils/types";
import { useGetAllSessions } from "./services";

const useSessionController = () => {
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
    }
}

export default useSessionController;