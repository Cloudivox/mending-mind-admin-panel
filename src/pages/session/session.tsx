import { useState } from "react";
import type { Sessions } from "../../utils/types";
import CreateSessionModal from "./create-session-modal";

const initialSessions: Sessions[] = [
  {
    patientName: "John Doe",
    patientEmail: "john.doe@example.com",
    patientPhone: "+1 234 567 8900",
    therapistName: "Dr. Smith",
    sessionDate: "2023-06-15",
    duration: "60 mins",
  },
  {
    patientName: "Jane Smith",
    patientEmail: "jane.smith@example.com",
    patientPhone: "+1 234 567 8901",
    therapistName: "Dr. Johnson",
    sessionDate: "2023-06-16",
    duration: "45 mins",
  },
];

const Session = () => {
  const [sessions, setSessions] = useState<Sessions[]>(initialSessions);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addSession = (newSession: Sessions) => {
    setSessions([...sessions, newSession]);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Sessions</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#16A085] hover:bg-[#457067] text-[#ffffff] font-montserrat font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg flex items-center gap-2"
        >
          Create Session
        </button>
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
              <th className="py-3 px-4 text-center font-montserrat text-[#34495E] font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session, index) => (
              <tr
                key={index}
                className="border-b border-[#ECF0F1] hover:bg-black/5 transition-colors"
              >
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#9747FF]/10 flex items-center justify-center text-[#9747FF] font-medium text-lg">
                      {session.patientName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <span className="font-montserrat text-[#2C3E50] font-medium">
                      {session.patientName}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-4 font-montserrat text-[#34495E]">
                  {session.patientEmail}
                </td>
                <td className="py-4 px-4 font-montserrat text-[#34495E]">
                  {session.patientPhone}
                </td>
                <td className="py-4 px-4 font-montserrat text-[#34495E]">
                  {session.therapistName}
                </td>
                <td className="py-4 px-4 font-montserrat text-[#34495E]">
                  {session.sessionDate}
                </td>
                <td className="py-4 px-4 font-montserrat text-[#34495E]">
                  {session.duration}
                </td>
                <td className="py-4 px-4 text-center">
                  <button className="text-[#3498DB] hover:text-[#2980B9] transition-colors font-montserrat text-sm font-medium">
                    Create Package
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <CreateSessionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddSession={addSession}
      />
    </div>
  );
};

export default Session;
