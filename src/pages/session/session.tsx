import { Link } from "react-router-dom";
import Loader from "../../components/loader";
import { MENDING_MIND_ID } from "../../utils/enum";
import CreateSessionModal from "./create-session-modal";
import useSessionController from "./session-controller";

const Session = () => {
  const {
    pastSessions,
    upcomingSessions,
    isModalOpen,
    setIsModalOpen,
    isLoading,
    organizationId,
    user,
    navigateBookSession,
  } = useSessionController();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">Sessions</h1>
          <div className="relative group ms-3">
            <div className="w-5 h-5 flex items-center justify-center border border-gray-400 rounded-full text-gray-600 cursor-pointer">
              i
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-gray-800 text-white text-sm rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              In this section, you can view previous and upcoming sessions with
              client-therapist pairs.
            </div>
          </div>
        </div>
        {organizationId === MENDING_MIND_ID &&
          user &&
          user.role === "admin" && (
            <button
              onClick={() => setIsModalOpen(true)}
              title="Create Session"
              className="bg-[#16A085] hover:bg-[#457067] text-[#ffffff] font-montserrat font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg flex items-center gap-2"
            >
              Create Session
            </button>
          )}
        {user && user.role === "client" && (
          <div className="flex flex-col items-end">
            <button
              onClick={navigateBookSession}
              title="Book Session"
              className="bg-[#16A085] hover:bg-[#457067] text-[#ffffff] font-montserrat font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg flex items-center gap-2"
            >
              Book Session
            </button>
            <span>
              You can book a session by clicking this button and selecting your
              preferred date and time.
            </span>
          </div>
        )}
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          {(!pastSessions || (pastSessions && !pastSessions?.length)) &&
          (!upcomingSessions ||
            (upcomingSessions && upcomingSessions?.length === 0)) ? (
            <div className="flex flex-col items-center justify-center py-10 border-2 rounded-xl">
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
                No previous and upcoming sessions right now
              </p>
              <p className="text-black/40 font-montserrat text-sm mt-2">
                New sessions will appear here when scheduled
              </p>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <div className="mt-10 mb-4">
                  <h2 className="text-lg font-bold mb-4">Previous Sessions</h2>
                </div>
                {pastSessions && !pastSessions?.length ? (
                  <div className="flex flex-col items-center justify-center py-10 border-2 rounded-xl">
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
                      No previous sessions right now
                    </p>
                    <p className="text-black/40 font-montserrat text-sm mt-2">
                      New sessions will appear here when scheduled
                    </p>
                  </div>
                ) : (
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[#ECF0F1]">
                        <th className="py-3 px-4 text-left font-montserrat text-[#34495E] font-semibold">
                          Client Name
                        </th>
                        <th className="py-3 px-4 text-left font-montserrat text-[#34495E] font-semibold">
                          Client Email
                        </th>
                        <th className="py-3 px-4 text-left font-montserrat text-[#34495E] font-semibold">
                          Client Phone
                        </th>
                        <th className="py-3 px-4 text-left font-montserrat text-[#34495E] font-semibold">
                          Therapist Name
                        </th>
                        <th className="py-3 px-4 text-left font-montserrat text-[#34495E] font-semibold">
                          Session Date
                        </th>
                        <th className="py-3 px-4 text-left font-montserrat text-[#34495E] font-semibold">
                          Duration
                        </th>
                        <th className="py-3 px-4 text-left font-montserrat text-[#34495E] font-semibold">
                          Notes
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {pastSessions &&
                        pastSessions.map((session, index) => (
                          <tr
                            key={index}
                            className="border-b border-[#ECF0F1] hover:bg-black/5 transition-colors"
                          >
                            <td className="py-4 px-4">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#9747FF]/10 flex items-center justify-center text-[#9747FF] font-medium text-lg">
                                  {session.clientName
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </div>
                                <span className="font-montserrat text-[#2C3E50] font-medium">
                                  {session.clientName}
                                </span>
                              </div>
                            </td>
                            <td className="py-4 px-4 font-montserrat text-[#34495E]">
                              {session.clientEmail}
                            </td>
                            <td className="py-4 px-4 font-montserrat text-[#34495E]">
                              {session.clientPhone}
                            </td>
                            <td className="py-4 px-4 font-montserrat text-[#34495E]">
                              {session.therapistName}
                            </td>
                            <td className="py-4 px-4 font-montserrat text-[#34495E]">
                              {session.sessionDateTime}
                            </td>
                            <td className="py-4 px-4 font-montserrat text-[#34495E]">
                              {session.duration}
                            </td>
                            <td>
                              <Link
                                to={`${session._id}`}
                                title="Click to view notes"
                                className="text-[#3498DB] cursor-pointer hover:text-[#2980B9] transition-colors font-montserrat font-medium"
                              >
                                Click Here
                              </Link>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                )}
              </div>
              {/* Upcoming Sessions Table */}

              <>
                {" "}
                <div className="mt-10 mb-4">
                  <h2 className="text-lg font-bold mb-4">Upcoming Sessions</h2>
                </div>
                {upcomingSessions && !upcomingSessions.length ? (
                  <div className="flex flex-col items-center justify-center py-10 border-2 rounded-xl">
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
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-[#ECF0F1]">
                          <th className="py-3 px-4 text-left font-montserrat text-[#34495E] font-semibold">
                            Client Name
                          </th>
                          <th className="py-3 px-4 text-left font-montserrat text-[#34495E] font-semibold">
                            Client Email
                          </th>
                          <th className="py-3 px-4 text-left font-montserrat text-[#34495E] font-semibold">
                            Client Phone
                          </th>
                          <th className="py-3 px-4 text-left font-montserrat text-[#34495E] font-semibold">
                            Therapist Name
                          </th>
                          <th className="py-3 px-4 text-left font-montserrat text-[#34495E] font-semibold">
                            Session Date
                          </th>
                          <th className="py-3 px-4 text-left font-montserrat text-[#34495E] font-semibold">
                            Duration
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {upcomingSessions && upcomingSessions.length > 0 ? (
                          upcomingSessions.map((session, index) => (
                            <tr
                              key={index}
                              className="border-b border-[#ECF0F1] hover:bg-black/5 transition-colors"
                            >
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-full bg-[#16A085]/10 flex items-center justify-center text-[#16A085] font-medium text-lg">
                                    {session.clientName
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </div>
                                  <span className="font-montserrat text-[#2C3E50] font-medium">
                                    {session.clientName}
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4 font-montserrat text-[#34495E]">
                                {session.clientEmail}
                              </td>
                              <td className="py-4 px-4 font-montserrat text-[#34495E]">
                                {session.clientPhone}
                              </td>
                              <td className="py-4 px-4 font-montserrat text-[#34495E]">
                                {session.therapistName}
                              </td>
                              <td className="py-4 px-4 font-montserrat text-[#34495E]">
                                {session.sessionDateTime}
                              </td>
                              <td className="py-4 px-4 font-montserrat text-[#34495E]">
                                {session.duration}
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td
                              colSpan={6}
                              className="py-4 px-4 text-center font-montserrat text-[#7F8C8D]"
                            >
                              No upcoming sessions found
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                )}
              </>
            </>
          )}
        </>
      )}

      {isModalOpen && (
        <CreateSessionModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default Session;
