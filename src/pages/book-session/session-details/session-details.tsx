import React from "react";
import { useParams } from "react-router-dom";
import { MENDING_MIND_ID } from "../../../utils/enum";

export interface CalendarProps {
  selectedDate: Date;
  currentDate: Date;
  onSelectDate: (date: Date) => void;
}

const SessionDetails: React.FC<CalendarProps> = ({
  selectedDate = new Date(),
  currentDate = new Date(),
  onSelectDate = () => {},
}) => {
  const { organizationId } = useParams<{ organizationId: string }>();
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  // Generate days for the current month
  const getDaysInMonth = (year: number, month: number) => {
    const days = [];
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const days = getDaysInMonth(year, month);

  // Create calendar grid with empty cells for proper alignment
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const calendarDays = Array(firstDayOfMonth).fill(null).concat(days);

  // Split into weeks
  const weeks = [];
  for (let i = 0; i < calendarDays.length; i += 7) {
    weeks.push(calendarDays.slice(i, i + 7));
  }

  // Function to check if a date is in the past
  const isPastDate = (date: Date | null) => {
    if (!date) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  // Function to check if it's Saturday
  const isSaturday = (date: Date | null) => {
    return date ? date.getDay() === 6 : false;
  };

  // Function to check if a date should be enabled
  const isDateEnabled = (date: Date | null) => {
    if (!date) return false;
    if (isPastDate(date)) return false; // Disable past dates
    if (organizationId === MENDING_MIND_ID) return true; // Enable all days for MENDING_MIND_ID
    return isSaturday(date); // Enable only Saturdays for other organizations
  };

  const isSelectedDate = (date: Date | null) => {
    if (!date) return false;
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };

  const isToday = (date: Date | null) => {
    if (!date) return false;
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  return (
    <div className="w-full md:w-1/2">
      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {daysOfWeek.map((day, index) => (
          <div
            key={index}
            className="text-xs font-montserrat text-gray-500 font-semibold"
          >
            {day}
          </div>
        ))}
      </div>

      {weeks.map((week, weekIndex) => (
        <div key={weekIndex} className="grid grid-cols-7 gap-1 mb-1">
          {week.map((day, dayIndex) => {
            const enabled = isDateEnabled(day);
            return (
              <div
                key={dayIndex}
                className={`
                  h-9 w-9 flex items-center justify-center rounded-md text-sm font-montserrat
                  ${day ? "cursor-pointer" : ""}
                  ${
                    enabled
                      ? "hover:bg-gray-100"
                      : "opacity-50 cursor-not-allowed"
                  }
                  ${
                    isSelectedDate(day)
                      ? "bg-yellow text-white"
                      : "text-gray-700"
                  }
                  ${
                    isToday(day) && !isSelectedDate(day)
                      ? "border border-yellow"
                      : ""
                  }
                `}
                onClick={() => enabled && day && onSelectDate(day)}
              >
                {day ? day.getDate() : ""}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default SessionDetails;
