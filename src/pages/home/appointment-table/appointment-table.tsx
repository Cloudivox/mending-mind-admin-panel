import { Link } from "react-router-dom";
import React from "react";
import { Sessions } from "../../../utils/types";

const AppointmentTable: React.FC<{
  upcomingSessions?: Sessions[];
  isLoading: boolean;
}> = ({ upcomingSessions, isLoading }) => {
  return (
    <div className="lg:col-span-8">
      <div className="bg-white rounded-2xl shadow-sm border-2 border-mint/20 h-full">
        <div className="p-6 border-b border-black/5">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-mint rounded-xl flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h6 className="text-black font-playfair text-xl">
                Upcoming Sessions
              </h6>
            </div>
            <button className="px-4 py-2 bg-mint/10 text-black rounded-xl text-sm hover:bg-mint/20 transition-colors font-montserrat">
              <Link to={"session"}>View All Sessions</Link>
            </button>
          </div>
        </div>

        <div className="p-6">
          {isLoading || !upcomingSessions ? (
            <div className="flex justify-center items-center py-8">
              <p className="text-black/60 font-montserrat">
                Loading sessions...
              </p>
            </div>
          ) : upcomingSessions.length > 0 ? (
            <table className="w-full">
              <thead>
                <tr className="border-b border-black/5">
                  <th className="text-left text-xs font-semibold text-black/60 uppercase py-3 px-4 font-montserrat">
                    Client Name
                  </th>
                  <th className="text-left text-xs font-semibold text-black/60 uppercase py-3 px-4 font-montserrat">
                    Date
                  </th>
                  <th className="text-center text-xs font-semibold text-black/60 uppercase py-3 px-4 font-montserrat">
                    Slot
                  </th>
                  <th className="text-center text-xs font-semibold text-black/60 uppercase py-3 px-4 font-montserrat">
                    Assigned To
                  </th>
                  <th className="text-center text-xs font-semibold text-black/60 uppercase py-3 px-4 font-montserrat">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {upcomingSessions.map((session) => {
                  // Format the date
                  const sessionDate = new Date(session.sessionDateTime);
                  const formattedDate = sessionDate.toLocaleDateString(
                    "en-US",
                    {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    }
                  );

                  // Format the time
                  const formattedTime = sessionDate.toLocaleTimeString(
                    "en-US",
                    {
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: true,
                    }
                  );

                  // Get client initials for avatar
                  const initials = session.clientName
                    ? session.clientName
                        .split(" ")
                        .map((name) => name[0])
                        .join("")
                        .toUpperCase()
                    : "CL";

                  return (
                    <tr
                      key={session._id}
                      className="hover:bg-black/5 transition-colors"
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-purple/10 flex items-center justify-center text-purple font-medium">
                            {initials}
                          </div>
                          <span className="font-montserrat text-sm">
                            {session.clientName}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 font-montserrat text-sm">
                        {formattedDate}
                      </td>
                      <td className="py-4 px-4 text-center font-montserrat text-sm">
                        {formattedTime}
                      </td>
                      <td className="py-4 px-4 text-center font-montserrat text-sm">
                        {session.therapistName}
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium font-montserrat ${
                            session.status === "confirmed" ||
                            session.status === "Confirmed"
                              ? "bg-mint/10 text-black"
                              : session.status === "pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {session.status.charAt(0).toUpperCase() +
                            session.status.slice(1)}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <div className="flex flex-col items-center justify-center py-10">
              <svg
                className="w-16 h-16 text-black/20 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-black/60 font-montserrat text-lg">
                No upcoming sessions right now
              </p>
              <p className="text-black/40 font-montserrat text-sm mt-2">
                New sessions will appear here when scheduled
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentTable;
