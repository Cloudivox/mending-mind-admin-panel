import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useCreateSession,
  useGetAllUsers,
  useGetLatestSessionByClient,
} from "./service";
import { useUser } from "../../context/user-context";
import { MENDING_MIND_ID, formatDate } from "../../utils/enum";
import { toast } from "react-toastify";
import { useGetAvailibility } from "../availability/services";

interface Slots {
  time: string;
  available: boolean;
  therapistName: string;
  therapistId: string;
  availibilityId: string;
  clientId: string;
}
const useBookSessionController = () => {
  const { user } = useUser();
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [showMonthYearSelector, setShowMonthYearSelector] =
    useState<boolean>(false);
  const { organizationId } = useParams();
  const [timeSlots, setTimeSlots] = useState<Slots[]>([]);
  const getAllUsers = useGetAllUsers(organizationId || "");
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const createSession = useCreateSession(organizationId);
  const navigate = useNavigate();

  const [selectedTherapistId, setSelectedTherapistId] = useState("");
  const getLatestSessionByClient = useGetLatestSessionByClient(user?.id || "");
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
  const getAvailibility = useGetAvailibility(
    formatDate(selectedDate).toString(),
    organizationId
  );

  // Convert 24-hour time (e.g., "13:40") to 12-hour format (e.g., "01:40 PM")
  const convertTo12HourFormat = (time: string): string => {
    const [hour, minute] = time.split(":").map(Number);
    const period = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 || 12; // Convert 0 to 12 for AM
    return `${formattedHour}:${minute.toString().padStart(2, "0")} ${period}`;
  };

  useEffect(() => {
    if (!getAvailibility.data || !getLatestSessionByClient.isSuccess) {
      return;
    }

    const mapSlot = (slot: any) => ({
      time: convertTo12HourFormat(slot.startTime),
      available: slot.status === "available",
      therapistName: slot.userId?.name || "Unknown",
      therapistId: slot.userId?._id || "",
      availibilityId: slot._id,
      clientId: slot.clientId,
    });

    // If we have latest session data, try to filter by the same therapist
    if (getLatestSessionByClient.data) {
      const therapistId = getLatestSessionByClient.data.therapistId;

      // Check if the therapist from the latest session is available
      const therapistSlots = getAvailibility.data.availibility.filter(
        (slot) => slot.userId?._id === therapistId
      );

      if (therapistSlots.length > 0) {
        // If therapist is available, use only their slots
        setTimeSlots(therapistSlots.map(mapSlot));
        setSelectedTherapistId(therapistId);
        return;
      }
    }

    // Default case: use all available slots
    setTimeSlots(getAvailibility.data.availibility.map(mapSlot));
  }, [
    getAvailibility.data,
    getLatestSessionByClient.data,
    getLatestSessionByClient.isSuccess,
  ]);

  const years = Array.from({ length: 5 }, (_, i) => 2025 + i);

  const handleBookSession = () => {
    if (!user?.id || !selectedDate || !selectedSlot) {
      toast.error("Please fill in all required details");
      return;
    }

    // Convert selectedSlot (e.g., "11:30 AM") to 24-hour format and merge with selectedDate
    const selectedSlotData = timeSlots.find(
      (slot) => slot.availibilityId === selectedSlot
    );

    if (!selectedSlotData) {
      toast.error("Invalid slot selection");
      return;
    }

    const timeParts = selectedSlotData.time.split(" "); // Ensure `time` is defined before splitting

    if (timeParts.length !== 2) {
      toast.error("Invalid time format");
      return;
    }

    const [time, period] = timeParts;
    let [hours, minutes] = time.split(":").map(Number);

    if (isNaN(hours) || isNaN(minutes)) {
      toast.error("Invalid time values");
      return;
    }

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
      therapistId:
        timeSlots.find((slot) => slot.availibilityId === selectedSlot)
          ?.therapistId || "",
      clientId: user.id,
      sessionDateTime: localISOTime,
      duration: "60", // Hardcoded 60 minutes as per the UI
      location:
        organizationId === MENDING_MIND_ID ? "Google Meet" : "In-Person",
      isNewClient: !getLatestSessionByClient.data,
      isPaid: true,
      type: "individual-session",
      name: "Individual Therapy Session",
      availibilityId: selectedSlot,
    };

    createSession.mutate(sessionData, {
      onSuccess: () => {
        toast.success("Session booked successfully!");
        navigate(`/${organizationId}/session`);
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

  const calculateDaysBetweenDates = (
    date1: string | number | Date,
    date2: string | number | Date
  ) => {
    // Convert both dates to milliseconds
    const date1Ms = new Date(date1).getTime();
    const date2Ms = new Date(date2).getTime();

    // Calculate difference in milliseconds
    const diffMs = Math.abs(date1Ms - date2Ms);

    // Convert to days
    return Math.floor(diffMs / (1000 * 60 * 60 * 24));
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
    hasLatestSession: (() => {
      if (!getLatestSessionByClient.data) return false;

      const latestSessionDate = getLatestSessionByClient.data.sessionDateTime;

      if (selectedSlot) {
        const selectedSlotData = timeSlots.find(
          (slot) => slot.availibilityId === selectedSlot
        );

        if (selectedSlotData) {
          const timeParts = selectedSlotData.time.split(" ");
          const [time, period] = timeParts;
          let [hours, minutes] = time.split(":").map(Number);

          if (period === "PM" && hours !== 12) {
            hours += 12;
          } else if (period === "AM" && hours === 12) {
            hours = 0;
          }

          const selectedDateTime = new Date(selectedDate);
          selectedDateTime.setHours(hours, minutes, 0, 0);

          // Calculate days between the two dates
          const daysDifference = calculateDaysBetweenDates(
            latestSessionDate,
            selectedDateTime.toISOString()
          );

          return daysDifference <= 14;
        }
      }

      return new Date(latestSessionDate) > new Date();
    })(),
    getLatestSessionByClient: getLatestSessionByClient.data,
    therapists:
      getAllUsers.data?.users.filter((user) => user.role === "therapist") || [],
    selectedSlot,
    setSelectedSlot,
    selectedTherapistId,
    handleBookSession,
    setSelectedTherapistId,
    isBookingSession: createSession.isLoading,
    timeSlots,
    selectedTherapistName:
      timeSlots.find((slot) => slot.availibilityId === selectedSlot)
        ?.therapistName || "",
    alreadyBooked: !!timeSlots.find((slot) => slot.clientId === user?.id),
    isSelectSessionIsBooked: !!timeSlots.find(
      (slot) => slot.availibilityId === selectedSlot
    )?.clientId,
  };
};

export default useBookSessionController;
