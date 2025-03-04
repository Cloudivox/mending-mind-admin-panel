import React from "react";

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
          {week.map((day, dayIndex) => (
            <div
              key={dayIndex}
              className={`
                h-9 w-9 flex items-center justify-center rounded-md text-sm font-montserrat
                ${day ? "cursor-pointer hover:bg-gray-100" : ""}
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
              onClick={() => day && onSelectDate(day)}
            >
              {day ? day.getDate() : ""}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SessionDetails;
