import Avatar from "../../components/avatar";
import DatePicker from "./date-picker";
import TimeSlots from "./time-slots";
import SessionBlock from "./session-block";
import useCalenderController from "./calender-controler";
import Loader from "../../components/loader";

export default function Calendar() {
  const { users, timeSlots, selectedDate, setSelectedDate, isLoading } =
    useCalenderController();

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

      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-1 overflow-hidden rounded-xl border-2 border-mint/30 bg-white">
          <TimeSlots timeSlots={timeSlots} />

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

                    {user.busyTimes.map((session, index) => {
                      const startHour = Number.parseInt(
                        session.start.split(":")[0]
                      );
                      const startMinute = Number.parseInt(
                        session.start.split(":")[1]
                      );
                      const slotHeight = 64;

                      const top =
                        startHour * slotHeight +
                        (startMinute / 60) * slotHeight;

                      return (
                        <div
                          key={`${user.id}-${index}`}
                          className="absolute left-0 right-0 px-2"
                          style={{ top: `${top}px` }}
                        >
                          <SessionBlock
                            startTime={session.start}
                            endTime={session.end}
                            title={session.type}
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
      )}
    </div>
  );
}
