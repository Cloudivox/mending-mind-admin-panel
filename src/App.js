import React from "react";

function Dashboard() {
  return (
    <aside class="w-64 h-screen fixed left-0 top-0 bg-sidebar border-r border-gray-800">
      <div class="p-4 flex items-center">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JKGr3QAz4JFtItZZrVp9kfSEscYlP7.png"
          alt="Sales Management Logo"
          class="h-8"
        />
      </div>

      <div class="px-4 mb-6">
        <div class="relative">
          <input
            type="text"
            placeholder="Search here..."
            class="w-full bg-gray-800/50 text-gray-300 pl-4 pr-8 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>
      </div>

      <nav class="px-4">
        <a
          href="#"
          class="flex items-center gap-3 text-accent bg-accent/10 px-4 py-2 rounded-lg mb-2"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span>Home</span>
        </a>

        <div class="space-y-2">
          <a
            href="#"
            class="flex items-center gap-3 text-gray-400 hover:text-gray-200 px-4 py-2 rounded-lg transition-colors"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span>Dashboard</span>
          </a>

          <a
            href="#"
            class="flex items-center gap-3 text-gray-400 hover:text-gray-200 px-4 py-2 rounded-lg transition-colors"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>Calendar</span>
          </a>

          <a
            href="#"
            class="flex items-center gap-3 text-gray-400 hover:text-gray-200 px-4 py-2 rounded-lg transition-colors"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Session</span>
          </a>

          <a
            href="#"
            class="flex items-center gap-3 text-gray-400 hover:text-gray-200 px-4 py-2 rounded-lg transition-colors"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
            <span>Package</span>
          </a>

          <a
            href="#"
            class="flex items-center gap-3 text-gray-400 hover:text-gray-200 px-4 py-2 rounded-lg transition-colors"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            <span>Availability</span>
          </a>

          <a
            href="#"
            class="flex items-center gap-3 text-gray-400 hover:text-gray-200 px-4 py-2 rounded-lg transition-colors"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"
              />
            </svg>
            <span>Payment</span>
          </a>

          <a
            href="#"
            class="flex items-center gap-3 text-gray-400 hover:text-gray-200 px-4 py-2 rounded-lg transition-colors"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2"
              />
            </svg>
            <span>Blog</span>
          </a>

          <a
            href="#"
            class="flex items-center gap-3 text-gray-400 hover:text-gray-200 px-4 py-2 rounded-lg transition-colors"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
              />
            </svg>
            <span>Event</span>
          </a>

          <a
            href="#"
            class="flex items-center gap-3 text-gray-400 hover:text-gray-200 px-4 py-2 rounded-lg transition-colors"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <span>Team Management</span>
          </a>

          <a
            href="#"
            class="flex items-center gap-3 text-gray-400 hover:text-gray-200 px-4 py-2 rounded-lg transition-colors"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Profile</span>
          </a>
        </div>
      </nav>
    </aside>
  );
}

function Main() {
  const ratings = [
    { name: "Shivshanka Yadav", by: "Kinjal Jain" },
    { name: "Prateek Tiwari", by: "Kinjal J" },
    { name: "Jyoti Yadav", by: "Kinjal Jain" },
    { name: "Roshni Pawar", by: "Kinjal J" },
    { name: "Hrishikesh Jedhe", by: "Ms. Vrushali" },
  ];
  return (
    <div className="p-4 mt-10">
      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-4">
        {/* Today's Appointments */}
        <div className="cursor-pointer">
          <div className="bg-[#1C1C25] rounded-xl p-4 relative shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-800/50">
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/5 to-gray-900/5 rounded-xl" />
            <div className="absolute -inset-0.5 bg-gradient-to-br from-gray-800/20 to-gray-900/5 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Icon container */}
            <div className="absolute -top-4 left-4">
              <div
                className={`w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
              >
                <div className="w-6 h-6 text-black">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="text-right pt-1">
              <p className="text-sm text-gray-400 mb-1 capitalize group-hover:text-gray-300 transition-colors">
                Today's Appointments
              </p>
              <h4 className="text-xl font-bold text-white mb-0 group-hover:scale-105 transform transition-transform duration-300">
                0
              </h4>
            </div>

            {/* Bottom highlight */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-700/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        {/* Appointments Done */}
        <div className="cursor-pointer">
          <div className="bg-[#1C1C25] rounded-xl p-4 relative shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-800/50">
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/5 to-gray-900/5 rounded-xl" />
            <div className="absolute -inset-0.5 bg-gradient-to-br from-gray-800/20 to-gray-900/5 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Icon container */}
            <div className="absolute -top-4 left-4">
              <div
                className={`w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
              >
                <div className="w-6 h-6 text-black">
                  <svg
                    className="w-6 h-6"
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
            </div>

            {/* Content */}
            <div className="text-right pt-1">
              <p className="text-sm text-gray-400 mb-1 capitalize group-hover:text-gray-300 transition-colors">
                Appointments Done
              </p>
              <h4 className="text-xl font-bold text-white mb-0 group-hover:scale-105 transform transition-transform duration-300">
                0
              </h4>
            </div>

            {/* Bottom highlight */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-700/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        {/* Pending Appointments */}
        <div className="cursor-pointer">
          <div className="bg-[#1C1C25] rounded-xl p-4 relative shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-800/50">
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/5 to-gray-900/5 rounded-xl" />
            <div className="absolute -inset-0.5 bg-gradient-to-br from-gray-800/20 to-gray-900/5 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Icon container */}
            <div className="absolute -top-4 left-4">
              <div
                className={`w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
              >
                <div className="w-6 h-6 text-black">
                  <svg
                    className="w-6 h-6"
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
            </div>

            {/* Content */}
            <div className="text-right pt-1">
              <p className="text-sm text-gray-400 mb-1 capitalize group-hover:text-gray-300 transition-colors">
                Pending Appointments
              </p>
              <h4 className="text-xl font-bold text-white mb-0 group-hover:scale-105 transform transition-transform duration-300">
                0
              </h4>
            </div>

            {/* Bottom highlight */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-700/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        {/* Today's Revenue */}
        <div className="cursor-pointer">
          <div className="bg-[#1C1C25] rounded-xl p-4 relative shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-800/50">
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/5 to-gray-900/5 rounded-xl" />
            <div className="absolute -inset-0.5 bg-gradient-to-br from-gray-800/20 to-gray-900/5 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Icon container */}
            <div className="absolute -top-4 left-4">
              <div
                className={`w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
              >
                <div className="w-6 h-6 text-black">
                  <svg
                    className="w-6 h-6"
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
            </div>

            {/* Content */}
            <div className="text-right pt-1">
              <p className="text-sm text-gray-400 mb-1 capitalize group-hover:text-gray-300 transition-colors">
                Today's Revenue
              </p>
              <h4 className="text-xl font-bold text-white mb-0 group-hover:scale-105 transform transition-transform duration-300">
                0
              </h4>
            </div>

            {/* Bottom highlight */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-700/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>

      {/* Content Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">
        {/* Appointments Table */}
        <div className="lg:col-span-8">
          <div className="bg-[#1C1C25] rounded-xl h-full shadow-xl border border-gray-800/50 relative group">
            {/* Gradient overlay effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/5 to-gray-900/5 rounded-xl pointer-events-none" />
            <div className="absolute -inset-0.5 bg-gradient-to-br from-gray-800/20 to-gray-900/5 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Header section */}
            <div className="p-6 border-b border-gray-800/60 relative">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600/80 to-blue-600/80 rounded-lg flex items-center justify-center shadow-lg">
                    <svg
                      className="w-5 h-5 text-white"
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
                  <h6 className="text-white font-semibold text-lg mb-0">
                    Upcoming Appointments
                  </h6>
                </div>
                <a
                  href="#"
                  className="px-4 py-2 bg-gray-800/80 text-gray-300 rounded-lg text-sm hover:bg-gray-700/80 transition-all duration-300 hover:shadow-lg hover:scale-105 border border-gray-700/50"
                >
                  View All
                </a>
              </div>
            </div>

            {/* Table section */}
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-800/50">
                      <th className="text-left text-xs font-semibold text-gray-400 uppercase py-3 px-4">
                        Client Name
                      </th>
                      <th className="text-left text-xs font-semibold text-gray-400 uppercase py-3 px-4">
                        Date
                      </th>
                      <th className="text-center text-xs font-semibold text-gray-400 uppercase py-3 px-4">
                        Slot
                      </th>
                      <th className="text-center text-xs font-semibold text-gray-400 uppercase py-3 px-4">
                        Assigned To
                      </th>
                      <th className="text-center text-xs font-semibold text-gray-400 uppercase py-3 px-4">
                        Status
                      </th>
                      <th className="text-center text-xs font-semibold text-gray-400 uppercase py-3 px-4">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-800/20 transition-colors duration-200">
                      <td
                        colSpan={6}
                        className="text-center py-8 text-gray-400 text-sm font-medium"
                      >
                        <div className="flex flex-col items-center justify-center space-y-3">
                          <div className="w-16 h-16 bg-gray-800/50 rounded-full flex items-center justify-center">
                            <svg
                              className="w-8 h-8 text-gray-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                              />
                            </svg>
                          </div>
                          <span>No Upcoming Appointments</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Bottom highlight */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-700/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        {/* Latest Ratings */}
        <div className="lg:col-span-4">
          <div className="bg-[#1C1C25] rounded-xl h-full shadow-xl border border-gray-800/50 relative group">
            {/* Gradient overlay effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/5 to-gray-900/5 rounded-xl pointer-events-none" />
            <div className="absolute -inset-0.5 bg-gradient-to-br from-gray-800/20 to-gray-900/5 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Header section */}
            <div className="p-6 border-b border-gray-800/60 relative">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-600/80 to-orange-600/80 rounded-lg flex items-center justify-center shadow-lg">
                    <svg
                      className="w-5 h-5 text-white"
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
                  <h6 className="text-white font-semibold text-lg mb-0">
                    Reschedule request
                  </h6>
                </div>
                <a
                  href="#"
                  className="px-4 py-2 bg-gray-800/80 text-gray-300 rounded-lg text-sm hover:bg-gray-700/80 transition-all duration-300 hover:shadow-lg hover:scale-105 border border-gray-700/50"
                >
                  View All
                </a>
              </div>
            </div>

            {/* Ratings list */}
            <div className="p-6">
              <div className="space-y-4">
                {ratings.map((rating, index) => (
                  <div
                    key={index}
                    className="group/item flex justify-between items-start border-b border-gray-800/50 pb-4 last:border-b-0 hover:bg-gray-800/20 p-3 rounded-lg transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-white font-semibold text-sm group-hover/item:scale-110 transition-transform duration-200">
                        {rating.name.charAt(0)}
                      </div>
                      <div>
                        <h6 className="text-white font-semibold group-hover/item:text-white/90 transition-colors">
                          {rating.name}
                        </h6>
                        <p className="text-gray-400 text-xs mt-1 mb-0 flex items-center gap-2">
                          <span>By: {rating.by}</span>
                          <span className="w-1 h-1 rounded-full bg-gray-600" />
                          <span className="text-gray-500">Just now</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom highlight */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-700/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div class="bg-sidebar min-h-screen">
      <Dashboard />
      <div className="float-end w-[87%] min-h-screen bg-[#1C1C25]">
        <main className="w-full">
          <Main />
        </main>
      </div>
    </div>
  );
}
export default App;
