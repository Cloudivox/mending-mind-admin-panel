import { Link } from "react-router-dom";

const AppointmentTable = () => {
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
              <Link to={'session'}>
              View All Sessions
              </Link>
            </button>
          </div>
        </div>

        <div className="p-6">
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
              <tr className="hover:bg-black/5 transition-colors">
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple/10 flex items-center justify-center text-purple font-medium">
                      JD
                    </div>
                    <span className="font-montserrat text-sm">John Doe</span>
                  </div>
                </td>
                <td className="py-4 px-4 font-montserrat text-sm">
                  Oct 24, 2023
                </td>
                <td className="py-4 px-4 text-center font-montserrat text-sm">
                  10:00 AM
                </td>
                <td className="py-4 px-4 text-center font-montserrat text-sm">
                  Dr. Smith
                </td>
                <td className="py-4 px-4 text-center">
                  <span className="px-3 py-1 rounded-full bg-mint/10 text-black text-xs font-medium font-montserrat">
                    Confirmed
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AppointmentTable;
