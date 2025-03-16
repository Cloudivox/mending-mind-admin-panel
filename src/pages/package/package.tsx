import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/loader";
import { useEffect, useState } from "react";
import { useGetAllSessions } from "../session/services";
import { Sessions } from "../../utils/types";

function Package() {
  const navigate = useNavigate();

  const [sessions, setSessions] = useState<Sessions[]>();
  const { organizationId } = useParams<{ organizationId: string }>();
  const getAllSessions = useGetAllSessions(organizationId);

  useEffect(() => {
    if (getAllSessions.isSuccess && getAllSessions.data) {
      setSessions(getAllSessions.data.previous);
    }
  }, [getAllSessions.isSuccess, getAllSessions.data]);
  return (
    <div>
      <div className="p-8">
        <>
          {getAllSessions.isLoading ? (
            <Loader />
          ) : sessions && !sessions?.length ? (
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
                Once session is completed then you can see here and create
                package
              </p>
            </div>
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
                      <th className="py-3 px-4 text-center font-montserrat text-[#34495E] font-semibold">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sessions &&
                      sessions.map((session: any, index: any) => (
                        <tr
                          key={index}
                          className="border-b border-[#ECF0F1] hover:bg-black/5 transition-colors"
                        >
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-[#9747FF]/10 flex items-center justify-center text-[#9747FF] font-medium text-lg">
                                {session.clientName
                                  .split(" ")
                                  .map((n: any) => n[0])
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
                          <td className="py-4 px-4 text-center">
                            <button
                              onClick={() =>
                                navigate(`/create-package/${session._id}`)
                              }
                              className="text-[#3498DB] hover:text-[#2980B9] transition-colors font-montserrat text-sm font-medium"
                            >
                              Create Package
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </>
      </div>
    </div>
  );
}

export default Package;
