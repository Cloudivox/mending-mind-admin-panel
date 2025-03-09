function EventDetails({ event, setIsEventDetails }: any) {
  const eventData = event.data;
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 1);
  };
  return (
    <div className="min-h-screen p-6 font-montserrat">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Back Button */}
        <button
          onClick={() =>
            setIsEventDetails({
              data: {},
              isDetails: false,
            })
          }
          className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
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
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span className="font-medium">Back to Events</span>
        </button>

        {/* Event Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-mint/20 rounded-full -translate-y-32 translate-x-32" />
          <div className="relative">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-sm font-medium text-purple px-4 py-1 rounded-full bg-purple/10">
                  Upcoming Event
                </span>
                <h1 className="text-4xl font-playfair font-bold text-black mt-4 capitalize">
                  {eventData.name}
                </h1>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-3 text-terracotta"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-gray-700 capitalize">
                      {eventData.location}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-3 text-coral"
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
                    <span className="text-gray-700">
                      {eventData.date} at {eventData.time}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-3 text-purple"
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
                    <span className="text-gray-700">
                      {eventData.duration} hour
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-yellow px-6 py-3 rounded-2xl text-black font-semibold shadow-lg shadow-yellow/20">
                {eventData.participants.length} Participants
              </div>
            </div>
          </div>
        </div>

        {/* Host Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-playfair font-bold text-black mb-6">
            Host Information
          </h2>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-terracotta/10 flex items-center justify-center text-terracotta font-medium">
              {getInitials(eventData.host)}
            </div>
            <div>
              <h3 className="font-semibold text-black capitalize">
                {eventData.host}
              </h3>
              <p className="text-sm text-gray-500">Event Host</p>
            </div>
          </div>
          <p className="text-gray-700 bg-mint/10 p-4 rounded-xl">
            {eventData.hostDescription}
          </p>
        </div>

        {/* Participants Table */}
        {eventData.participants &&!!eventData.participants?.length && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-playfair font-bold text-black">
                Participants
              </h2>
              <div className="flex -space-x-3">
                {eventData.participants
                  .slice(0, 3)
                  .map((participant: any, index: number) => (
                    <div
                      key={participant.id}
                      className={`w-8 h-8 rounded-full bg-purple/10 flex items-center justify-center text-purple font-medium ring-2 ring-white`}
                      style={{ zIndex: 3 - index }}
                    >
                      {getInitials(participant.name)}
                    </div>
                  ))}
              </div>
            </div>
            <div className="min-h-[200px] max-h-[400px] overflow-y-auto rounded-xl border border-mint">
              <table className="w-full">
                <thead className="sticky top-0 bg-white">
                  <tr className="text-left text-sm text-gray-500 border-b border-mint">
                    <th className="px-6 py-4">Participant</th>
                    <th className="px-6 py-4">Email</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-mint/50">
                  {eventData.participants.map((participant: any) => (
                    <tr
                      key={participant.id}
                      className="hover:bg-mint/5 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-purple/10 flex items-center justify-center text-purple font-medium">
                            {getInitials(participant.name)}
                          </div>
                          <span className="font-montserrat text-sm capitalize">
                            {participant.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {participant.email}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EventDetails;
