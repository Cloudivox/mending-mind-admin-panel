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
  } = useSessionController();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Sessions</h1>
        {organizationId === MENDING_MIND_ID && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#16A085] hover:bg-[#457067] text-[#ffffff] font-montserrat font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg flex items-center gap-2"
          >
            Create Session
          </button>
        )}
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="overflow-x-auto">
            <div className="mt-10 mb-4">
              <h2 className="text-lg font-bold mb-4">Previous Sessions</h2>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#ECF0F1]">
                  <th className="py-3 px-4 text-left font-montserrat text-[#34495E] font-semibold">
                    Patient Name
                  </th>
                  <th className="py-3 px-4 text-left font-montserrat text-[#34495E] font-semibold">
                    Patient Email
                  </th>
                  <th className="py-3 px-4 text-left font-montserrat text-[#34495E] font-semibold">
                    Patient Phone
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
                          className="text-[#3498DB] cursor-pointer hover:text-[#2980B9] transition-colors font-montserrat font-medium"
                        >
                          Click Here
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          {/* Upcoming Sessions Table */}
          <div className="mt-10 mb-4">
            <h2 className="text-lg font-bold mb-4">Upcoming Sessions</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#ECF0F1]">
                  <th className="py-3 px-4 text-left font-montserrat text-[#34495E] font-semibold">
                    Patient Name
                  </th>
                  <th className="py-3 px-4 text-left font-montserrat text-[#34495E] font-semibold">
                    Patient Email
                  </th>
                  <th className="py-3 px-4 text-left font-montserrat text-[#34495E] font-semibold">
                    Patient Phone
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
        </>
      )}

      {isModalOpen && (
        <CreateSessionModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default Session;
