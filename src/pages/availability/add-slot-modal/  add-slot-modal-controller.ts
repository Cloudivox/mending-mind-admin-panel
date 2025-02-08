import { useState } from "react";

const useAddSlotModalController = (
  onSubmit: (startTime: string, endTime: string) => void,
  onClose: () => void
) => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleStartTimeChange = (time: string) => {
    setStartTime(time);
    // If start time is selected and end time isn't, set end time to 1 hour after start time
    if (time && !endTime) {
      const [hours, minutes] = time.split(":");
      const date = new Date();
      date.setHours(Number.parseInt(hours));
      date.setMinutes(Number.parseInt(minutes));
      date.setHours(date.getHours() + 1);
      setEndTime(`${date.getHours().toString().padStart(2, "0")}:${minutes}`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (startTime >= endTime) {
      alert("End time must be after start time");
      return;
    }
    onSubmit(startTime, endTime);
    setStartTime("");
    setEndTime("");
    onClose();
  };

  return {
    handleStartTimeChange,
    handleSubmit,
    startTime,
    endTime,
    setEndTime,
  };
};

export default useAddSlotModalController;
