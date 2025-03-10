import React from "react";

export interface TimeSlotsProps {
  selectedDate: Date;
  timeSlots?: Array<{
    time: string;
    available: boolean;
    therapistName: string;
    therapistId: string;
    availibilityId: string;
  }>;
  selectedSlot: string | null;
  setSelectedSlot: React.Dispatch<React.SetStateAction<string | null>>;
}

const TimeSlots: React.FC<TimeSlotsProps> = ({
  selectedDate = new Date(),
  timeSlots,
  selectedSlot,
  setSelectedSlot,
}) => {
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      day: "2-digit",
      month: "short",
    };
    return date.toLocaleDateString("en-US", options);
  };

  const handleSelectSlot = (availabilityId: string) => {
    setSelectedSlot(availabilityId);
  };

  return (
    <div className="w-full md:w-1/2 pl-0 md:pl-4 mt-4 md:mt-0">
      <div className="text-right mb-4">
        <p className="font-montserrat text-sm text-gray-700">
          {formatDate(selectedDate)}
        </p>
      </div>

      <div className="space-y-3">
        {timeSlots &&
          timeSlots.map((slot, index) => (
            <>
              <div
                key={index}
                className={`
              border rounded-md p-3 text-center cursor-pointer transition-colors
              ${
                selectedSlot === slot.availibilityId
                  ? "border-yellow bg-yellow bg-opacity-10"
                  : "border-gray-200 hover:border-yellow"
              }
            `}
                onClick={() => handleSelectSlot(slot.availibilityId)}
              >
                <span className="font-montserrat text-sm">{slot.time}</span>
              </div>
              {slot.availibilityId === selectedSlot && !slot.available && (
                <div className="text-center mt-2">
                  <span className="text-sm text-red-500 font-montserrat">
                    This slot is not available
                  </span>
                </div>
              )}
            </>
          ))}
      </div>
    </div>
  );
};

export default TimeSlots;
