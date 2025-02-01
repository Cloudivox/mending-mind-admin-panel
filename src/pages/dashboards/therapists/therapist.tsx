const Therapist = () => {
  return (
    <div id="webcrumbs" className="w-full min-h-screen bg-[#F7F9FC]">
      <div className="w-full p-8 bg-white shadow-md rounded-2xl min-h-screen">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-playfair font-bold text-[#2C3E50]">
            Therapist Dashboard
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 mb-10">
          <div className="p-6 bg-[#E6FFF5] rounded-2xl hover:shadow-lg transition-all">
            <p className="text-sm font-montserrat mb-2 text-[#34495E]">
              Total Therapists
            </p>
            <h2 className="text-4xl font-playfair font-bold text-[#16A085]">
              42
            </h2>
            <p className="text-sm text-[#27AE60] mt-2 font-medium">
              +2 new this month
            </p>
          </div>

          <div className="p-6 bg-[#F5E6FF] rounded-2xl hover:shadow-lg transition-all">
            <p className="text-sm font-montserrat mb-2 text-[#34495E]">
              Full-Time Therapists
            </p>
            <h2 className="text-4xl font-playfair font-bold text-[#8E44AD]">
              28
            </h2>
            <p className="text-sm text-[#27AE60] mt-2 font-medium">
              +1 from last month
            </p>
          </div>
          <div className="p-6 bg-[#FFF4E5] rounded-2xl hover:shadow-lg transition-all">
            <p className="text-sm font-montserrat mb-2 text-[#34495E]">
              Part-Time Therapists
            </p>
            <h2 className="text-4xl font-playfair font-bold text-[#F39C12]">
              14
            </h2>
            <p className="text-sm text-[#27AE60] mt-2 font-medium">
              +1 from last month
            </p>
          </div>
          <div className="p-6 bg-[#E5F9FF] rounded-2xl hover:shadow-lg transition-all">
            <p className="text-sm font-montserrat mb-2 text-[#34495E]">
              Total Revenue
            </p>
            <h2 className="text-4xl font-playfair font-bold text-[#2980B9]">
              $128,750
            </h2>
            <p className="text-sm text-[#27AE60] mt-2 font-medium">
              +8.5% from last month
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 transition-all">
          <h3 className="font-playfair font-bold mb-6 text-2xl text-[#2C3E50]">
            Therapist Information
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#ECF0F1]">
                  <th className="py-3 px-4 text-left font-montserrat text-[#34495E] font-semibold">
                    Therapist Name
                  </th>
                  <th className="py-3 px-4 text-left font-montserrat text-[#34495E] font-semibold">
                    Email
                  </th>
                  <th className="py-3 px-4 text-center font-montserrat text-[#34495E] font-semibold">
                    Status
                  </th>
                  <th className="py-3 px-4 text-center font-montserrat text-[#34495E] font-semibold">
                    Specialization
                  </th>
                  <th className="py-3 px-4 text-right font-montserrat text-[#34495E] font-semibold">
                    Clients
                  </th>
                  <th className="py-3 px-4 text-center font-montserrat text-[#34495E] font-semibold">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "Dr. Emily Parker",
                    email: "emily.p@example.com",
                    status: "Full-Time",
                    specialization: "Cognitive Behavioral Therapy",
                    clients: 25,
                    initials: "EP",
                  },
                  {
                    name: "Dr. James Wilson",
                    email: "james.w@example.com",
                    status: "Part-Time",
                    specialization: "Family Therapy",
                    clients: 15,
                    initials: "JW",
                  },
                  {
                    name: "Dr. Sophia Lee",
                    email: "sophia.l@example.com",
                    status: "Full-Time",
                    specialization: "Trauma Therapy",
                    clients: 22,
                    initials: "SL",
                  },
                  {
                    name: "Dr. Michael Brown",
                    email: "michael.b@example.com",
                    status: "Full-Time",
                    specialization: "Addiction Counseling",
                    clients: 20,
                    initials: "MB",
                  },
                  {
                    name: "Dr. Olivia Martinez",
                    email: "olivia.m@example.com",
                    status: "Part-Time",
                    specialization: "Child Psychology",
                    clients: 12,
                    initials: "OM",
                  },
                ].map((therapist, index) => (
                  <tr
                    key={index}
                    className="border-b border-[#ECF0F1] hover:bg-black/5 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#9747FF]/10 flex items-center justify-center text-[#9747FF] font-medium text-lg">
                          {therapist.initials}
                        </div>
                        <span className="font-montserrat text-[#2C3E50] font-medium">
                          {therapist.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-montserrat text-[#34495E]">
                      {therapist.email}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span
                        className={`px-3 py-1 rounded-full ${
                          therapist.status === "Full-Time"
                            ? "bg-[#2ECC71]/10 text-[#27AE60]"
                            : "bg-[#F1C40F]/10 text-[#D35400]"
                        } text-xs font-medium font-montserrat`}
                      >
                        {therapist.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center font-montserrat text-[#34495E]">
                      {therapist.specialization}
                    </td>
                    <td className="py-4 px-4 text-right font-montserrat text-[#34495E] font-medium">
                      {therapist.clients}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <button className="text-[#3498DB] hover:text-[#2980B9] transition-colors font-montserrat text-sm font-medium">
                        View Profile
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Therapist;
