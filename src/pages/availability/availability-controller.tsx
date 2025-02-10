import { useEffect, useState } from "react";
import type { TimeSlot } from "../../utils/types";
import {
  useCreateAvailibility,
  useDeleteAvailibility,
  useGetAvailibility,
  useUpdateAvailibility,
} from "./services";
import { formatDate } from "../../utils/enum";
import { useUser } from "../../context/user-context";
import { useNavigate } from "react-router-dom";
import useRequestReschedule from "./services/reschedule-request";
import { IRequestRescheduleData } from "../../types";
import { toast } from "react-toastify";

const useAvailabilityController = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRescheduleModalVisible, setIsRescheduleModalVisible] =
    useState(false);
  const [editSlot, setEditSlot] = useState<TimeSlot | undefined>();
  const [slots, setSlots] = useState<TimeSlot[]>([]);

  const getAvailibility = useGetAvailibility(
    formatDate(selectedDate).toString()
  );
  const addAvailability = useCreateAvailibility();
  const deleteAvailibility = useDeleteAvailibility();
  const updateAvailibility = useUpdateAvailibility();
  const requestReschedule = useRequestReschedule();

  const formatTimeRange = (startTime: string, endTime: string) => {
    const formatTime = (time: string) => {
      const [hours, minutes] = time.split(":");
      const hour = Number.parseInt(hours);
      const ampm = hour >= 12 ? "PM" : "AM";
      const hour12 = hour % 12 || 12;
      return `${hour12}:${minutes} ${ampm}`;
    };
    return `${formatTime(startTime)} - ${formatTime(endTime)}`;
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  const handleAddSlot = (
    startTime: string,
    endTime: string,
    type: "online" | "offline",
    slotId?: string
  ) => {
    const newSlot: {
      date: string;
      type: "online" | "offline";
      startTime: string;
      endTime: string;
      availibilityId?: string;
    } = {
      date: formatDate(selectedDate),
      type,
      startTime,
      endTime,
    };
    if (slotId) {
      newSlot.availibilityId = slotId;
      newSlot.availibilityId && updateAvailibility.mutate(newSlot);
      return;
    }
    addAvailability.mutate(newSlot);
    
  };

  const handleDeleteSlot = (slotId: string) => {
    deleteAvailibility.mutate(slotId);
  };

  const isPastDate = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);
    return date < today;
  };

  const getDaySlots = (date: Date) => {
    if (!slots) return [];
    return slots.filter((slot) => slot.date === formatDate(date));
  };

  const selectedDaySlots = getDaySlots(selectedDate);

  const generateCalendarDays = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(<div key={`empty-${i}`} className="h-14" />);
    }

    // Add days of the month
    for (let day = 1; day <= lastDay.getDate(); day++) {
      const date = new Date(year, month, day);
      const isSelected =
        date.getDate() === selectedDate.getDate() &&
        date.getMonth() === selectedDate.getMonth() &&
        date.getFullYear() === selectedDate.getFullYear();
      const daySlots = getDaySlots(date);
      const hasSlots = daySlots && daySlots.length > 0;

      days.push(
        <button
          key={day}
          onClick={() => handleDateClick(date)}
          disabled={isPastDate(new Date(year, month, day))}
          className={`h-14 rounded-2xl flex items-center justify-center relative
              ${isSelected ? "bg-emerald-600 text-white" : "hover:bg-gray-100"}
              ${hasSlots ? "font-semibold" : ""}
              ${
                isPastDate(new Date(year, month, day))
                  ? "text-gray-400 cursor-not-allowed"
                  : ""
              }
            `}
        >
          {day}
          {hasSlots && (
            <div className="absolute bottom-2 w-1 h-1 bg-emerald-600 rounded-full" />
          )}
        </button>
      );
    }

    return days;
  };

  const onEditClick = (slot: TimeSlot) => {
    setEditSlot(slot);
    setIsModalOpen(true);
  };

  const onRescheduleClick = (slot: TimeSlot) => {
    setEditSlot(slot);
    setIsRescheduleModalVisible(true);
  };

  const isSlotInPast = (slot: TimeSlot) => {
    const now = new Date();
    const slotDate = new Date(selectedDate);
    const [startHours, startMinutes] = slot.startTime.split(":").map(Number);
    const slotStartTime = new Date(slotDate.setHours(startHours, startMinutes, 0, 0));
  
    return slotStartTime < now; 
  };

 const onRescheduleModalSubmit = (data: IRequestRescheduleData) => {
    requestReschedule.mutate(data);
  };

  useEffect(() => {
    if(requestReschedule.isSuccess){
      setIsRescheduleModalVisible(false);
      setEditSlot(undefined);
      toast.success("Reschedule request sent successfully");
    }
  },[requestReschedule.isSuccess]);

  useEffect(() => {
    if (getAvailibility.isSuccess && getAvailibility.data) {
      setSlots(getAvailibility.data.availibility || []);
    }
  }, [getAvailibility.isSuccess, getAvailibility.data]);

  useEffect(() => {
    if (addAvailability.isSuccess) {
      getAvailibility.refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addAvailability.isSuccess]);

  useEffect(() => {
    if (deleteAvailibility.isSuccess) {
      getAvailibility.refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteAvailibility.isSuccess]);

  useEffect(() => {
    if (updateAvailibility.isSuccess) {
      getAvailibility.refetch();
      setEditSlot(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateAvailibility.isSuccess]);

  useEffect(() => {
    if (user && user?.role !== "therapist") {
      navigate("/");
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.role, user]);

  return {
    selectedDate,
    setSelectedDate,
    isModalOpen,
    setIsModalOpen,
    slots,
    setSlots,
    handleDateClick,
    handleAddSlot,
    handleDeleteSlot,
    isPastDate,
    selectedDaySlots,
    generateCalendarDays,
    formatDate,
    formatTimeRange,
    isLoading: getAvailibility.isLoading,
    editSlot,
    onEditClick,
    setEditSlot,
    isRescheduleModalVisible,
    setIsRescheduleModalVisible,
    onRescheduleClick,
    isSlotInPast,
    onRescheduleModalSubmit
  };
};

export default useAvailabilityController;
