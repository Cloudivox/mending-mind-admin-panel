import { useEffect, useState } from "react";
import { useGetAllTherapist, useGetAvailibility } from "./services";

interface Availability {
  clientId: string;
  date: string;
  endTime: string;
  startTime: string;
  status: string;
  type: string;
  userId: string;
  _id: string;
}

interface Therapist {
  email: string;
  name: string;
  _id: string;
}

interface UserWithAvailability {
  id: string;
  name: string;
  email: string;
  avatar: string;
  busyTimes: {
    date: string;
    start: string;
    end: string;
    type: string;
  }[];
}

const useCalenderController = () => {
  // Initialize with current date in YYYY-MM-DD format
  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [selectedDate, setSelectedDate] = useState(formatDate(new Date()));
  const [users, setUsers] = useState<UserWithAvailability[]>([]);

  const timeSlots = Array.from({ length: 24 }, (_, i) => {
    const hour = i + 0; // Start from 8 AM
    return `${hour.toString().padStart(2, "0")}:00`;
  });

  const allTherapists = useGetAllTherapist();
  const getAllAvailibility = useGetAvailibility(selectedDate);

  useEffect(() => {
    if (
      allTherapists.isSuccess &&
      allTherapists.data?.therapists &&
      getAllAvailibility.isSuccess &&
      getAllAvailibility.data?.availibility
    ) {
      console.log(getAllAvailibility.data);
      // Convert therapists and their availability into the required format
      const formattedUsers = allTherapists.data.therapists.map(
        (therapist: Therapist) => {
          const therapistAvailability =
            getAllAvailibility.data.availibility.filter(
              (avail: Availability) => avail.userId === therapist._id
            );

          return {
            id: therapist._id,
            name: therapist.name,
            email: therapist.email,
            avatar: "",
            busyTimes: therapistAvailability.map((avail: Availability) => ({
              date: avail.date,
              start: avail.startTime,
              end: avail.endTime,
              type: avail.type,
            })),
          };
        }
      );

      setUsers(formattedUsers);
    }
  }, [
    allTherapists.isSuccess,
    allTherapists.data,
    getAllAvailibility.isSuccess,
    getAllAvailibility.data,
  ]);

  // Function to handle date changes
  const handleDateChange = (date: string) => {
    setSelectedDate(date);
  };

  return {
    users,
    timeSlots,
    selectedDate,
    setSelectedDate: handleDateChange,
    isLoading: allTherapists.isLoading || getAllAvailibility.isLoading,
    error: allTherapists.error || getAllAvailibility.error,
  };
};

export default useCalenderController;
