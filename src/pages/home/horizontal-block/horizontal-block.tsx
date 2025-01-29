import React from "react";

const HorizotalBlock = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {/* Today's Appointments */}
      <div className="bg-white rounded-2xl p-6 relative group hover:shadow-lg transition-all duration-300 border-2 border-mint/20">
        <div className="absolute -top-4 left-4">
          <div className="w-12 h-12 bg-mint rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        <div className="text-right pt-1">
          <p className="text-sm text-black/60 mb-1 font-montserrat">
            Today's Appointments
          </p>
          <h4 className="text-2xl font-bold text-black font-playfair">24</h4>
        </div>
      </div>

      {/* Appointments Done */}
      <div className="bg-white rounded-2xl p-6 relative group hover:shadow-lg transition-all duration-300 border-2 border-mint/20">
        <div className="absolute -top-4 left-4">
          <div className="w-12 h-12 bg-yellow rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <div className="text-right pt-1">
          <p className="text-sm text-black/60 mb-1 font-montserrat">
            Appointments Done
          </p>
          <h4 className="text-2xl font-bold text-black font-playfair">18</h4>
        </div>
      </div>

      {/* Pending Appointments */}
      <div className="bg-white rounded-2xl p-6 relative group hover:shadow-lg transition-all duration-300 border-2 border-mint/20">
        <div className="absolute -top-4 left-4">
          <div className="w-12 h-12 bg-coral rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        <div className="text-right pt-1">
          <p className="text-sm text-black/60 mb-1 font-montserrat">
            Pending Appointments
          </p>
          <h4 className="text-2xl font-bold text-black font-playfair">6</h4>
        </div>
      </div>

      {/* Today's Revenue */}
      <div className="bg-white rounded-2xl p-6 relative group hover:shadow-lg transition-all duration-300 border-2 border-mint/20">
        <div className="absolute -top-4 left-4">
          <div className="w-12 h-12 bg-purple rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        <div className="text-right pt-1">
          <p className="text-sm text-black/60 mb-1 font-montserrat">
            Today's Revenue
          </p>
          <h4 className="text-2xl font-bold text-black font-playfair">
            $2,854
          </h4>
        </div>
      </div>
    </div>
  );
};

export default HorizotalBlock;
