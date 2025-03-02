import Loader from "../../components/loader";
import { MENDING_MIND_ID } from "../../utils/enum";
import CreateSessionModal from "./create-session-modal";
import useSessionController from "./session-controller";

const Session = () => {
  const { sessions, isModalOpen, setIsModalOpen, isLoading, organizationId } =
    useSessionController();

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
                {sessions &&
                  sessions.map((session, index) => (
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
                    </tr>
                  ))}
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
