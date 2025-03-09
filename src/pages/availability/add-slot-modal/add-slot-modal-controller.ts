import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENDING_MIND_ID } from "../../../utils/enum";
import { useUser } from "../../../context/user-context";

const useAddSlotModalController = (
  onSubmit: (
    startTime: string,
    endTime: string,
    type: "online" | "offline",
    slotId?: string,
    therapistId?: string
  ) => void,
  onClose: () => void,
  selectedDate: Date,
  slot?: {
    _id: string;
    startTime: string;
    endTime: string;
    type: "online" | "offline";
  }
) => {
  const { user } = useUser();
  const { organizationId } = useParams<{ organizationId: string }>();
  const [startTime, setStartTime] = useState(slot?.startTime || "");
  const [endTime, setEndTime] = useState(slot?.endTime || "");
  const [selectedTherapist, setSelectedTherapist] = useState<string>("");
  const [type, setType] = useState<"online" | "offline">(
    slot?.type || "online"
  );
  const [minStartTime, setMinStartTime] = useState("00:00");
  const isTherapistsVisible = organizationId !== MENDING_MIND_ID;

  // Function to check if selected date is today
  const isToday = (date: Date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  // Function to get current time in HH:mm format
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  // Update minimum start time when selected date changes
  useEffect(() => {
    if (isToday(selectedDate)) {
      setMinStartTime(getCurrentTime());
      // Reset start time if it's before current time
      if (startTime && startTime < getCurrentTime()) {
        setStartTime("");
        setEndTime("");
      }
    } else {
      setMinStartTime("00:00");
    }
  }, [selectedDate, startTime]);

  const handleStartTimeChange = (time: string) => {
    // Validate that start time is not before minimum allowed time
    if (isToday(selectedDate) && time < getCurrentTime()) {
      alert("Start time cannot be earlier than current time");
      return;
    }

    setStartTime(time);

    // If start time is selected and end time isn't, set end time to 1 hour after start time
    if (time) {
      const [hours, minutes] = time.split(":");
      const date = new Date();
      date.setHours(Number.parseInt(hours));
      date.setMinutes(Number.parseInt(minutes));
      date.setHours(date.getHours() + 1);

      // Ensure end time doesn't go past midnight
      if (date.getHours() === 0) {
        setEndTime("23:59");
      } else {
        setEndTime(`${date.getHours().toString().padStart(2, "0")}:${minutes}`);
      }
    }
  };

  const handleEndTimeChange = (time: string) => {
    if (time <= startTime) {
      alert("End time must be after start time");
      return;
    }
    setEndTime(time);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Additional validation
    if (startTime >= endTime) {
      alert("End time must be after start time");
      return;
    }

    if (isToday(selectedDate) && startTime < getCurrentTime()) {
      alert("Start time cannot be earlier than current time");
      return;
    }

    const therapistId = isTherapistsVisible ? selectedTherapist : user?.id;

    onSubmit(startTime, endTime, type, slot?._id, therapistId);
    setStartTime("");
    setEndTime("");
    onClose();
  };

  return {
    handleStartTimeChange,
    handleSubmit,
    startTime,
    endTime,
    setEndTime: handleEndTimeChange,
    setType,
    type,
    minStartTime,
    organizationId,
    selectedTherapist,
    setSelectedTherapist,
    isTherapistsVisible,
  };
};

export default useAddSlotModalController;
