import Loader from "../../components/loader";
import AddSlotModal from "./add-slot-modal";
import useAvailabilityController from "./availability-controller";

export default function AvailabilityPage() {
  const {
    selectedDate,
    setSelectedDate,
    isModalOpen,
    setIsModalOpen,
    handleAddSlot,
    handleDeleteSlot,
    isPastDate,
    selectedDaySlots,
    generateCalendarDays,
    formatTimeRange,
    isLoading,
  } = useAvailabilityController();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h1 className="text-2xl font-semibold mb-8">Availability</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Calendar */}
            <div>
              <div className="mb-4 flex items-center justify-center">
                <button
                  onClick={() =>
                    setSelectedDate(
                      new Date(
                        selectedDate.setMonth(selectedDate.getMonth() - 1)
                      )
                    )
                  }
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  ←
                </button>
                <h2 className="text-lg font-medium mx-2">
                  {selectedDate.toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                  })}
                </h2>
                <button
                  onClick={() =>
                    setSelectedDate(
                      new Date(
                        selectedDate.setMonth(selectedDate.getMonth() + 1)
                      )
                    )
                  }
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  →
                </button>
              </div>

              <div className="grid grid-cols-7 gap-2 mb-2">
                {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(
                  (day) => (
                    <div
                      key={day}
                      className="h-10 flex items-center justify-center text-sm text-gray-500"
                    >
                      {day}
                    </div>
                  )
                )}
              </div>

              <div className="grid grid-cols-7 gap-2">
                {generateCalendarDays()}
              </div>
            </div>

            {/* Time Slots */}
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-medium">
                  {selectedDate.toLocaleDateString("default", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                  })}
                </h2>
                <button
                  onClick={() => setIsModalOpen(true)}
                  disabled={isPastDate(selectedDate)}
                  className={`bg-[#16A085] hover:bg-[#457067] text-[#ffffff] font-montserrat font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg flex items-center gap-2 
                      ${
                        isPastDate(selectedDate)
                          ? "bg-gray-300 cursor-not-allowed"
                          : "bg-emerald-600 hover:bg-emerald-700 text-white"
                      }`}
                >
                  Add Slot
                </button>
              </div>
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <Loader isFullScreen={false} />
                </div>
              ) : (
                <div className="space-y-3">
                  {selectedDaySlots.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">
                      No availability slots for this day
                    </p>
                  ) : (
                    selectedDaySlots.map((slot) => (
                      <div
                        key={slot._id}
                        className="p-4 bg-gray-50 hover:bg-gray-100 rounded-lg flex items-center justify-between transition-colors"
                      >
                        <span className="text-gray-900 font-medium">
                          {formatTimeRange(slot.startTime, slot.endTime)}
                        </span>
                        <span className="text-gray-600">{slot.type}</span>
                        {!isPastDate(selectedDate) && (
                          <button
                            onClick={() => handleDeleteSlot(slot._id)}
                            className="text-red-500 hover:text-red-600 transition-colors"
                            aria-label="Delete slot"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M3 6h18"></path>
                              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                            </svg>
                          </button>
                        )}
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <AddSlotModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddSlot}
        selectedDate={selectedDate}
        isPastDate={isPastDate(selectedDate)}
      />
    </div>
  );
}
