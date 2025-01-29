import React from "react";

function Dashboard() {
  return (
    <aside className="w-64 h-screen fixed left-0 top-0 bg-mint/10 border-r border-mint/20">
      <div className="p-6 flex items-center">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JKGr3QAz4JFtItZZrVp9kfSEscYlP7.png"
          alt="Sales Management Logo"
          className="h-8"
        />
      </div>

      <div className="px-6 mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search here..."
            className="w-full bg-white/5 text-black pl-4 pr-8 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-mint/30 font-montserrat text-sm"
          />
        </div>
      </div>

      <nav className="px-4 font-montserrat">
        <a
          href="#"
          className="flex items-center gap-3 text-black bg-mint/20 px-4 py-3 rounded-xl mb-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span className="font-medium">Home</span>
        </a>

        <div className="space-y-1.5">
          <a
            href="#"
            className="flex items-center gap-3 text-black/70 hover:text-black hover:bg-mint/10 px-4 py-3 rounded-xl transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span>Dashboard</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 text-black/70 hover:text-black hover:bg-mint/10 px-4 py-3 rounded-xl transition-colors"
          >
            <svg
              className="w-5 h-5"
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
            <span>Calendar</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 text-black/70 hover:text-black hover:bg-mint/10 px-4 py-3 rounded-xl transition-colors"
          >
            <svg
              className="w-5 h-5"
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
            <span>Session</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 text-black/70 hover:text-black hover:bg-mint/10 px-4 py-3 rounded-xl transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
            <span>Package</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 text-black/70 hover:text-black hover:bg-mint/10 px-4 py-3 rounded-xl transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            <span>Availability</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 text-black/70 hover:text-black hover:bg-mint/10 px-4 py-3 rounded-xl transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"
              />
            </svg>
            <span>Payment</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 text-black/70 hover:text-black hover:bg-mint/10 px-4 py-3 rounded-xl transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2"
              />
            </svg>
            <span>Blog</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 text-black/70 hover:text-black hover:bg-mint/10 px-4 py-3 rounded-xl transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
              />
            </svg>
            <span>Event</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 text-black/70 hover:text-black hover:bg-mint/10 px-4 py-3 rounded-xl transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <span>Team Management</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 text-black/70 hover:text-black hover:bg-mint/10 px-4 py-3 rounded-xl transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
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
    <div className="p-8">
      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* Today's Appointments */}
        <div className="bg-white rounded-2xl p-6 relative group hover:shadow-lg transition-all duration-300">
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
        <div className="bg-white rounded-2xl p-6 relative group hover:shadow-lg transition-all duration-300">
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
        <div className="bg-white rounded-2xl p-6 relative group hover:shadow-lg transition-all duration-300">
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
        <div className="bg-white rounded-2xl p-6 relative group hover:shadow-lg transition-all duration-300">
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

      {/* Content Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
        {/* Appointments Table */}
        <div className="lg:col-span-8">
          <div className="bg-white rounded-2xl shadow-sm">
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
                    Upcoming Appointments
                  </h6>
                </div>
                <button className="px-4 py-2 bg-mint/10 text-black rounded-xl text-sm hover:bg-mint/20 transition-colors font-montserrat">
                  View All
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
                    <th className="text-center text-xs font-semibold text-black/60 uppercase py-3 px-4 font-montserrat">
                      Action
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
                        <span className="font-montserrat text-sm">
                          John Doe
                        </span>
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
                    <td className="py-4 px-4 text-center">
                      <button className="text-terracotta hover:text-terracotta/80 transition-colors font-montserrat text-sm">
                        View
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Latest Ratings */}
        <div className="lg:col-span-4">
          <div className="bg-white rounded-2xl shadow-sm">
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
                    Recent Reviews
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
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-mint/5">
      <Dashboard />
      <div className="pl-64">
        <main className="w-full">
          <Main />
        </main>
      </div>
    </div>
  );
}

export default App;
