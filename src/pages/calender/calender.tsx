import React, { useState } from "react";
import Avatar from "../../components/avatar";

const users = [
  {
    id: 1,
    name: "Priyanka Parekh",
    // avatar: "/placeholder.svg?height=48&width=48",
    avatar: "",
    busyTimes: [
      {
        date: "2025-01-24",
        start: "09:00",
        end: "10:00",
        title: "Patient Consultation",
      },
      {
        date: "2025-01-24",
        start: "11:00",
        end: "12:00",
        title: "Team Meeting",
      },
      {
        date: "2025-01-25",
        start: "14:00",
        end: "15:00",
        title: "Therapy Session",
      },
    ],
  },
  {
    id: 2,
    name: "Mayank Patel",
    avatar: "",
    busyTimes: [
      {
        date: "2025-01-24",
        start: "13:00",
        end: "14:00",
        title: "Patient Follow-up",
      },
      {
        date: "2025-01-25",
        start: "16:00",
        end: "17:00",
        title: "Group Session",
      },
    ],
  },
  {
    id: 2,
    name: "Dr. Michael Glenn",
    avatar: "", // Empty string to test initials
    busyTimes: [
      {
        date: "2025-01-24",
        start: "13:00",
        end: "14:00",
        title: "Patient Follow-up",
      },
      {
        date: "2025-01-25",
        start: "16:00",
        end: "17:00",
        title: "Group Session",
      },
    ],
  },
];

const dates = ["2025-01-24", "2025-01-25"];
const timeSlots = Array.from({ length: 12 }, (_, i) => {
  const hour = i + 8; // Start from 8 AM
  return `${hour.toString().padStart(2, "0")}:00`;
});

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function DatePicker({
  selectedDate,
  onDateChange,
}: {
  selectedDate: string;
  onDateChange: (date: string) => void;
}) {
  const currentDateIndex = dates.indexOf(selectedDate);

  const goToPreviousDay = () => {
    if (currentDateIndex > 0) {
      onDateChange(dates[currentDateIndex - 1]);
    }
  };

  const goToNextDay = () => {
    if (currentDateIndex < dates.length - 1) {
      onDateChange(dates[currentDateIndex + 1]);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <button
        className="px-3 py-2 border rounded hover:bg-gray-100"
        onClick={goToPreviousDay}
        disabled={currentDateIndex === 0}
      >
        ←
      </button>
      <div className="text-lg font-semibold">{formatDate(selectedDate)}</div>
      <button
        className="px-3 py-2 border rounded hover:bg-gray-100"
        onClick={goToNextDay}
        disabled={currentDateIndex === dates.length - 1}
      >
        →
      </button>
    </div>
  );
}

function TimeSlots() {
  return (
    <div className="w-20 flex-shrink-0">
      <div className="h-24 border-b border-r border-gray-200" />
      {timeSlots.map((time) => (
        <div
          key={time}
          className="h-16 border-b border-r border-gray-200 px-2 py-1 text-sm text-gray-500"
        >
          {time}
        </div>
      ))}
    </div>
  );
}

function SessionBlock({
  startTime,
  endTime,
  title,
}: {
  startTime: string;
  endTime: string;
  title: string;
}) {
  return (
    <div className="absolute left-0 right-0 m-1 rounded-md bg-blue-100 p-2 text-xs">
      <div className="font-medium text-blue-800">{title}</div>
      <div className="text-blue-600">
        {startTime} - {endTime}
      </div>
    </div>
  );
}

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState(dates[0]);

  return (
    <div className="flex h-full flex-col space-y-6 p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Calendar</h1>
        <DatePicker
          selectedDate={selectedDate}
          onDateChange={setSelectedDate}
        />
      </div>

      <div className="flex flex-1 overflow-hidden">
        <TimeSlots />

        <div className="flex-1 overflow-x-auto">
          <div
            className="flex"
            style={{
              minWidth: "100%",
              width: `${Math.max(users.length * 200, 100)}px`,
            }}
          >
            {users.map((user) => (
              <div key={user.id} className="flex-1 min-w-[200px]">
                {/* User Header */}
                <div className="h-24 border-b border-r border-gray-200 p-2 flex items-center">
                  <div className="flex items-center gap-3">
                    <Avatar src={user.avatar} name={user.name} size={48} />
                    <span className="text-sm font-medium">{user.name}</span>
                  </div>
                </div>

                {/* Time Slots */}
                <div className="relative">
                  {timeSlots.map((time) => (
                    <div
                      key={time}
                      className="h-16 border-b border-r border-gray-200"
                    />
                  ))}

                  {/* Session Blocks */}
                  {user.busyTimes
                    .filter((session) => session.date === selectedDate)
                    .map((session, index) => {
                      const startHour = Number.parseInt(
                        session.start.split(":")[0]
                      );
                      const top = (startHour - 8) * 64; // 64px is the height of each time slot

                      return (
                        <div
                          key={`${user.id}-${index}`}
                          className="absolute left-0 right-0 px-2"
                          style={{ top: `${top}px` }}
                        >
                          <SessionBlock
                            startTime={session.start}
                            endTime={session.end}
                            title={session.title}
                          />
                        </div>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
