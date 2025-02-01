import React from "react";

/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

// import "./s///tyle.css";

const Event = () => {
  return (
    <div className="min-h-screen bg-[#F5F7FA] p-8">
      <div className="mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="font-playfair font-bold text-4xl text-[#2C3E50]">
            Events
          </h1>
          <button className="bg-[#16A085] hover:bg-[#457067] text-[#ffffff] font-montserrat font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            Create New Event
          </button>
        </div>

        <section className="mb-16">
          <h2 className="font-playfair font-bold text-2xl mb-8 text-[#2c5049]">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-3 gap-6 p-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="mb-4 overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3"
                    alt="Workshop"
                    className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-playfair font-bold text-xl text-[#2C3E50] hover:text-[#64B5F6] transition-colors duration-300">
                    Summer Workshop {item}
                  </h3>
                  <div className="flex items-center gap-1 group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#656564] group-hover:text-[#64B5F6] transition-colors duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="font-montserrat text-[#656564] group-hover:text-[#64B5F6] transition-colors duration-300">
                      156 Participants
                    </span>
                  </div>
                </div>
                <p className="font-montserrat text-[#34495E] mb-4">
                  Join us for an amazing summer workshop experience!
                </p>
                <div className="flex items-center gap-2 mb-4 group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#FF7675] group-hover:text-[#64B5F6] transition-colors duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="font-montserrat text-[#34495E] group-hover:text-[#64B5F6] transition-colors duration-300">
                    10:00 AM - 2:00 PM
                  </span>
                </div>
                <div className="flex items-center gap-2 group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#74B9FF] group-hover:text-[#64B5F6] transition-colors duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="font-montserrat text-[#34495E] group-hover:text-[#64B5F6] transition-colors duration-300">
                    Main Conference Hall
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-600">
                      https://example.com/share/abc123
                    </span>
                  </div>
                  <button className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                      <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                    </svg>
                    <span className="text-sm">Copy</span>
                  </button>
                </div>
                <button className="mt-5 w-full bg-[#E3F2FD] text-[#64B5F6] font-montserrat font-semibold py-2 rounded-xl hover:bg-[#64B5F6] hover:text-white transition-all duration-300 transform hover:scale-105">
                  View Details
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`px-4 py-2 rounded-lg font-montserrat font-semibold transition-all duration-300 ${
                  page === 1
                    ? "bg-[#16A085] text-white"
                    : "bg-white text-[#2C3E50] hover:bg-[#16A085] hover:text-white"
                } `}
              >
                {page}
              </button>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-playfair font-bold text-2xl mb-8 text-[#2C3E50]">
            Previous Events
          </h2>
          <div className="grid grid-cols-3 gap-6 p-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="mb-4 overflow-hidden rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3"
                    alt="Workshop"
                    className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-playfair font-bold text-xl text-[#2C3E50] hover:text-[#9B59B6] transition-colors duration-300">
                    Summer Workshop {item}
                  </h3>
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#9B59B6]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                    <span className="font-montserrat text-[#9B59B6]">
                      243 Attended
                    </span>
                  </div>
                </div>
                <p className="font-montserrat text-[#34495E] mb-4">
                  Join us for an amazing summer workshop experience!
                </p>
                <div className="flex items-center gap-2 mb-4 group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#FF7675] group-hover:text-[#9B59B6] transition-colors duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="font-montserrat text-[#34495E] group-hover:text-[#9B59B6] transition-colors duration-300">
                    10:00 AM - 2:00 PM
                  </span>
                </div>
                <div className="flex items-center gap-2 group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#9B59B6] group-hover:text-[#9B59B6] transition-colors duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="font-montserrat text-[#34495E] group-hover:text-[#9B59B6] transition-colors duration-300">
                    Main Conference Hall
                  </span>
                </div>
                <button className="mt-5 w-full bg-[#fde3fd] text-[#9B59B6] font-montserrat font-semibold py-2 rounded-xl hover:bg-[#9B59B6] hover:text-white transition-all duration-300 transform hover:scale-105">
                  View Details
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`px-4 py-2 rounded-lg font-montserrat font-semibold transition-all duration-300 ${
                  page === 1
                    ? "bg-[#16A085] text-white"
                    : "bg-white text-[#2C3E50] hover:bg-[#16A085] hover:text-white"
                } `}
              >
                {page}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Event;
