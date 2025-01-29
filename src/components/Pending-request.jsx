import React from "react";

function PendingRequest() {
  const ratings = [
    { name: "Shivshanka Yadav", by: "Kinjal Jain" },
    { name: "Prateek Tiwari", by: "Kinjal J" },
    { name: "Jyoti Yadav", by: "Kinjal Jain" },
    { name: "Roshni Pawar", by: "Kinjal J" },
    { name: "Hrishikesh Jedhe", by: "Ms. Vrushali" },
  ];
  return (
    <div className="lg:col-span-4">
      <div className="bg-white rounded-2xl shadow-sm border-2 border-mint/20 h-full">
        <div className="p-6 border-b border-black/5">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow rounded-xl flex items-center justify-center">
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
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <h6 className="text-black font-playfair text-xl">
                Pending Request
              </h6>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {ratings.map((rating, index) => (
              <div
                key={index}
                className="group flex items-start gap-3 p-3 rounded-xl hover:bg-black/5 transition-all duration-200 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center text-coral font-medium group-hover:scale-110 transition-transform duration-200">
                  {rating.name.charAt(0)}
                </div>
                <div>
                  <h6 className="text-black font-medium mb-1 font-montserrat">
                    {rating.name}
                  </h6>
                  <div className="flex items-center gap-2">
                    <span className="text-black/40 text-xs font-montserrat">
                      1 hour ago
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PendingRequest;
