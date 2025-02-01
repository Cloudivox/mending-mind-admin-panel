import { useState } from "react";
import ArrowLeft from "../../assets/icons/arrow-left";
import ArrowRight from "../../assets/icons/arrow-right";

const users = [
  {
    id: 1,
    name: "Priyanka Parekh",
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
    id: 3,
    name: "Dr. Michael Glenn",
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
];

const dates = ["2025-01-24", "2025-01-25"];
const timeSlots = Array.from({ length: 12 }, (_, i) => {
  const hour = i + 8; // Start from 8 AM
  return `${hour.toString().padStart(2, "0")}:00`;
});

function Avatar({ name, src }: { name: string; src: string }) {
  if (src) {
    return (
      <img
        src={src || "/placeholder.svg"}
        alt={name}
        className="w-10 h-10 rounded-lg object-cover border-2 border-mint"
      />
    );
  }

  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center text-coral font-medium group-hover:scale-110 transition-transform duration-200">
      {initials}
    </div>
  );
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
    <div className="flex items-center gap-4 bg-yellow/10 p-2 rounded-xl">
      <button
        className="p-2 rounded-lg border-2 border-yellow/30 hover:bg-yellow/20 text-black transition-colors disabled:opacity-50"
        onClick={goToPreviousDay}
        disabled={currentDateIndex === 0}
      >
        <ArrowLeft />
      </button>
      <div className="flex items-center gap-2">
        <input
          type="date"
          className="appearance-none bg-yellow/10 border-2 border-yellow/30 rounded-xl px-3 py-2 pr-5 text-lg font-playfair text-black focus:outline-none focus:border-yellow/50 hover:bg-yellow/20 transition-colors cursor-pointer"
          value={selectedDate} // Use selectedDate directly
          onChange={(e) => onDateChange(e.target.value)} // Allow manual date selection
        />
      </div>
      <button
        className="p-2 rounded-lg border-2 border-yellow/30 hover:bg-yellow/20 text-black transition-colors disabled:opacity-50"
        onClick={goToNextDay}
        disabled={currentDateIndex === dates.length - 1}
      >
        <ArrowRight />
      </button>
    </div>
  );
}

function TimeSlots() {
  return (
    <div className="w-20 flex-shrink-0">
      <div className="h-24 border-b border-r border-black/5" />
      {timeSlots.map((time) => (
        <div
          key={time}
          className="h-16 border-b border-r border-black/5 px-2 py-1 text-sm text-black/60 font-montserrat"
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
    <div className="absolute left-0 right-0 m-1 rounded-lg bg-coral/10 p-2 text-xs border-2 border-coral/30 transition-all hover:bg-coral/20">
      <div className="font-medium text-black font-playfair">{title}</div>
      <div className="text-black/60 font-montserrat">
        {startTime} - {endTime}
      </div>
    </div>
  );
}

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState(dates[0]);

  return (
    <div className="flex h-full flex-col space-y-6 p-8 bg-mint/5">
      <div className="flex items-center justify-between border-b-2 border-terracotta/20 pb-2">
          <h1 className="text-2xl font-bold font-playfair text-black">
            Calendar
          </h1>
        <DatePicker
          selectedDate={selectedDate}
          onDateChange={setSelectedDate}
        />
      </div>

      <div className="flex flex-1 overflow-hidden rounded-xl border-2 border-mint/30 bg-white">
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
                <div className="h-24 border-b border-r border-black/5 p-4 flex items-center bg-purple/5">
                  <div className="flex items-center gap-3">
                    <Avatar src={user.avatar} name={user.name} />
                    <span className="text-sm font-medium font-montserrat text-black">
                      {user.name}
                    </span>
                  </div>
                </div>

                <div className="relative">
                  {timeSlots.map((time) => (
                    <div
                      key={time}
                      className="h-16 border-b border-r border-black/5 hover:bg-mint/10 transition-colors"
                    />
                  ))}

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
