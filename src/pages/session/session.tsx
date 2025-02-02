import React, {useState} from "react";
import { Sessions } from "../../utils/types";
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
  ]

  const Session =  () => {
    const [sessions, setSessions] = useState<Sessions[]>(initialSessions)
    const [isModalOpen, setIsModalOpen] = useState(false)
  
    return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Sessions</h1>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Create Session
            </button>
          </div>
    
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Patient Name</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Patient Email</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Patient Phone</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Therapist Name</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Session Date</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Duration</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {sessions.map((session, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm text-gray-900">{session.patientName}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{session.patientEmail}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{session.patientPhone}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{session.therapistName}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{session.sessionDate}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{session.duration}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
                        Create Package
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
    
          <CreateSessionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
      )
  }

  export default Session;