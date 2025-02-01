const Client = () => {
  return (
    <div id="webcrumbs" className="w-full min-h-screen bg-[#F0F4F8]">
      <div className="w-full p-8 bg-white shadow-lg rounded-2xl min-h-screen">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-playfair font-bold text-[#1A365D]">
            Client Dashboard
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 mb-10">
          <div className="p-6 bg-[#E6FFF5] rounded-2xl hover:shadow-lg transition-all">
            <p className="text-sm font-montserrat mb-2 text-[#34495E]">
              Total Clients
            </p>
            <h2 className="text-4xl font-playfair font-bold text-[#16A085]">
              248
            </h2>
            <p className="text-sm text-[#27AE60] mt-2 font-medium">
              +5.2% new this month
            </p>
          </div>

          <div className="p-6 bg-[#F5E6FF] rounded-2xl hover:shadow-lg transition-all">
            <p className="text-sm font-montserrat mb-2 text-[#34495E]">
              Regular Clients
            </p>
            <h2 className="text-4xl font-playfair font-bold text-[#8E44AD]">
              156
            </h2>
            <p className="text-sm text-[#27AE60] mt-2 font-medium">
              +3.8% from last month
            </p>
          </div>
          <div className="p-6 bg-[#FFF4E5] rounded-2xl hover:shadow-lg transition-all">
            <p className="text-sm font-montserrat mb-2 text-[#34495E]">
              Non Regular Clients
            </p>
            <h2 className="text-4xl font-playfair font-bold text-[#F39C12]">
              92
            </h2>
            <p className="text-sm text-[#E53E3E] mt-2 font-medium">
              -1.5% from last month
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

        <div className="bg-white rounded-2xl p-8 shadow-md transition-all">
          <h3 className="font-playfair font-bold mb-6 text-2xl text-[#1A365D]">
            Client Information
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#E2E8F0]">
                  <th className="py-3 px-4 text-left font-montserrat text-[#4A5568] font-semibold">
                    Client Name
                  </th>
                  <th className="py-3 px-4 text-left font-montserrat text-[#4A5568] font-semibold">
                    Email
                  </th>
                  <th className="py-3 px-4 text-center font-montserrat text-[#4A5568] font-semibold">
                    Status
                  </th>
                  <th className="py-3 px-4 text-center font-montserrat text-[#4A5568] font-semibold">
                    Last Visit
                  </th>
                  <th className="py-3 px-4 text-right font-montserrat text-[#4A5568] font-semibold">
                    Total Spent
                  </th>
                  <th className="py-3 px-4 text-center font-montserrat text-[#4A5568] font-semibold">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "Sarah Johnson",
                    email: "sarah.j@example.com",
                    status: "Regular",
                    lastVisit: "Oct 24, 2023",
                    spent: "$1,234",
                    initials: "SJ",
                  },
                  {
                    name: "Michael Chen",
                    email: "m.chen@example.com",
                    status: "Non-Regular",
                    lastVisit: "Sep 15, 2023",
                    spent: "$890",
                    initials: "MC",
                  },
                  {
                    name: "Emma Wilson",
                    email: "emma.w@example.com",
                    status: "Regular",
                    lastVisit: "Oct 22, 2023",
                    spent: "$2,100",
                    initials: "EW",
                  },
                  {
                    name: "David Kim",
                    email: "d.kim@example.com",
                    status: "Regular",
                    lastVisit: "Oct 25, 2023",
                    spent: "$3,500",
                    initials: "DK",
                  },
                  {
                    name: "Lisa Brown",
                    email: "l.brown@example.com",
                    status: "Non-Regular",
                    lastVisit: "Aug 30, 2023",
                    spent: "$450",
                    initials: "LB",
                  },
                ].map((client, index) => (
                  <tr
                    key={index}
                    className="border-b border-[#E2E8F0] hover:bg-black/5 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#9747FF]/10 flex items-center justify-center text-[#9747FF] font-medium text-lg">
                          {client.initials}
                        </div>
                        <span className="font-montserrat text-[#2D3748] font-medium">
                          {client.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-montserrat text-[#4A5568]">
                      {client.email}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span
                        className={`px-3 py-1 rounded-full ${
                          client.status === "Regular"
                            ? "bg-[#C6F6D5] text-[#2F855A]"
                            : "bg-[#FED7D7] text-[#C53030]"
                        } text-xs font-medium font-montserrat`}
                      >
                        {client.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center font-montserrat text-[#4A5568]">
                      {client.lastVisit}
                    </td>
                    <td className="py-4 px-4 text-right font-montserrat text-[#4A5568] font-medium">
                      {client.spent}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <button className="text-[#4299E1] hover:text-[#3182CE] transition-colors font-montserrat text-sm font-medium">
                        View Details
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

export default Client;
