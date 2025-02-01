import Datepicker from "../../../components/datepicker";

const Overall = () => {
  return (
    <div className="w-full min-h-screen bg-[#F0F4F8]">
      <div className="w-full p-8 bg-white min-h-screen">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-playfair font-bold text-[#1A365D]">
            Overall Dashboard
          </h1>
          <Datepicker />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 mb-10">
          <div className="p-6 bg-[#E6FFF5] rounded-2xl hover:shadow-lg transition-all">
            <p className="text-sm font-montserrat mb-2 text-[#34495E]">
              Total Therapist
            </p>
            <h2 className="text-4xl font-playfair font-bold text-[#16A085]">
              248
            </h2>
            <p className="text-sm text-[#27AE60] mt-2 font-medium">
              +5.2% new this month
            </p>
          </div>
          <div className="p-6 bg-[#FFF4E5] rounded-2xl hover:shadow-lg transition-all">
            <p className="text-sm font-montserrat mb-2 text-[#34495E]">
              Total Clients
            </p>
            <h2 className="text-4xl font-playfair font-bold text-[#F39C12]">
              92
            </h2>
            <p className="text-sm text-[#27AE60] mt-2 font-medium">
              +1.5% from last month
            </p>
          </div>

          <div className="p-6 bg-[#F5E6FF] rounded-2xl hover:shadow-lg transition-all">
            <p className="text-sm font-montserrat mb-2 text-[#34495E]">
              Total Products
            </p>
            <h2 className="text-4xl font-playfair font-bold text-[#8E44AD]">
              156
            </h2>
            <p className="text-sm text-[#27AE60] mt-2 font-medium">
              +3.8% from last month
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

        <div className="grid grid-cols-3 gap-6">
          {["Client", "Therapist", "Product"].map((type, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8  transition-all"
            >
              <h3 className="font-playfair font-bold mb-6 text-2xl text-[#2C3E50]">
                Top {type}s
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#ECF0F1]">
                      <th className="py-3 px-4 text-left font-montserrat text-[#34495E] font-semibold">
                        {type}
                      </th>
                      <th className="py-3 px-4 text-left font-montserrat text-[#34495E] font-semibold">
                        {type === "Product" ? "Sold" : "Session"}
                      </th>
                      <th className="py-3 px-4 text-right font-montserrat text-[#34495E] font-semibold">
                        Revenue
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: `${type} A`, sessions: 10, revenue: "$1500" },
                      { name: `${type} B`, sessions: 8, revenue: "$1200" },
                      { name: `${type} C`, sessions: 20, revenue: "$2500" },
                      { name: `${type} D`, sessions: 11, revenue: "$1700" },
                      { name: `${type} E`, sessions: 7, revenue: "$900" },
                    ].map((item, idx) => (
                      <tr
                        key={idx}
                        className="border-b border-[#ECF0F1] hover:bg-black/5 transition-colors"
                      >
                        <td className="py-4 px-4 font-montserrat text-[#2C3E50] font-medium">
                          {item.name}
                        </td>
                        <td className="py-4 px-4 font-montserrat text-[#34495E]">
                          {item.sessions}
                        </td>
                        <td className="py-4 px-4 text-right font-montserrat text-[#34495E] font-medium">
                          {item.revenue}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overall;
