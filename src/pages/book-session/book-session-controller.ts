import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useCreateSession,
  useGetAllUsers,
  useGetLatestSessionByClient,
} from "./service";
import { useUser } from "../../context/user-context";
import { MENDING_MIND_ID } from "../../utils/enum";
import { toast } from "react-toastify";

const useBookSessionController = () => {
  const { user } = useUser();
  const [currentDate, setCurrentDate] = useState<Date>(new Date(2025, 1, 4));
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(2025, 1, 4));
  const [showMonthYearSelector, setShowMonthYearSelector] =
    useState<boolean>(false);
  const { organizationId } = useParams();
  const getLatestSessionByClient = useGetLatestSessionByClient(user?.id || "");
  const getAllUsers = useGetAllUsers(organizationId || "");
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const createSession = useCreateSession(organizationId);
  const navigate = useNavigate();

  useEffect(() => {
    if (getLatestSessionByClient.data) {
      setSelectedTherapistId(getLatestSessionByClient.data.therapistId);
    }
  }, [getLatestSessionByClient.data]);

  const [selectedTherapistId, setSelectedTherapistId] = useState("");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = Array.from({ length: 10 }, (_, i) => 2025 + i - 5);

  const handleBookSession = () => {
    if (!user?.id || !selectedTherapistId || !selectedDate || !selectedSlot) {
      toast.error("Please fill in all required details");
      return;
    }

    // Convert selectedSlot (e.g., "11:30 AM") to 24-hour format and merge with selectedDate
    const [time, period] = selectedSlot.split(" ");
    let [hours, minutes] = time.split(":").map(Number);

    if (period === "PM" && hours !== 12) {
      hours += 12; // Convert PM hours (except 12 PM) to 24-hour format
    } else if (period === "AM" && hours === 12) {
      hours = 0; // Convert 12 AM to 00
    }

    // Create new Date object with selectedDate and formatted time
    const sessionDateTime = new Date(selectedDate);
    sessionDateTime.setHours(hours, minutes, 0, 0);

    const localISOTime = `${sessionDateTime.getFullYear()}-${String(
      sessionDateTime.getMonth() + 1
    ).padStart(2, "0")}-${String(sessionDateTime.getDate()).padStart(
      2,
      "0"
    )}T${String(sessionDateTime.getHours()).padStart(2, "0")}:${String(
      sessionDateTime.getMinutes()
    ).padStart(2, "0")}:00`;

    const sessionData = {
      therapistId: selectedTherapistId,
      clientId: user.id,
      sessionDateTime: localISOTime,
      duration: "60", // Hardcoded 60 minutes as per the UI
      location:
        organizationId === MENDING_MIND_ID ? "Google Meet" : "In-Person",
      isNewClient: !getLatestSessionByClient.data,
      isPaid: true,
      type: "individual-session",
      name: "Individual Therapy Session",
    };

    createSession.mutate(sessionData, {
      onSuccess: () => {
        toast.success("Session booked successfully!");
        navigate(`/${organizationId}/session`);

        // Optional: Reset or navigate after successful booking
        // You might want to reset the form or navigate to a confirmation page
      },
      onError: (error) => {
        //@ts-ignore
        toast.error(`Failed to book session: ${error.message}`);
      },
    });
  };

  const goToPreviousMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };

  const goToNextMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  const handleSelectMonth = (monthIndex: number) => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(monthIndex);
      return newDate;
    });
    setShowMonthYearSelector(false);
  };

  const handleSelectYear = (year: number) => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setFullYear(year);
      return newDate;
    });
    setShowMonthYearSelector(false);
  };

  const formatMonthYear = (date: Date) => {
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  return {
    currentDate,
    selectedDate,
    showMonthYearSelector,
    months,
    years,
    goToPreviousMonth,
    goToNextMonth,
    handleSelectMonth,
    handleSelectYear,
    formatMonthYear,
    handleDateSelect,
    organizationId,
    setShowMonthYearSelector,
    hasLatestSession: !!getLatestSessionByClient.data,
    getLatestSessionByClient: getLatestSessionByClient.data,
    therapists:
      getAllUsers.data?.users.filter((user) => user.role === "therapist") || [],
    selectedSlot,
    setSelectedSlot,
    selectedTherapistId,
    handleBookSession,
    setSelectedTherapistId,
    isBookingSession: createSession.isLoading,
  };
};

export default useBookSessionController;
