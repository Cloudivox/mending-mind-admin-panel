import ArrowLeft from "../../assets/icons/arrow-left";
import ArrowRight from "../../assets/icons/arrow-right";
import Loader from "../../components/loader";
import { useUser } from "../../context/user-context";
import AddSlotModal from "./add-slot-modal";
import useAvailabilityController from "./availability-controller";
import RescheduleModal from "./reschedule-modal";

export default function AvailabilityPage() {
  const {
    selectedDate,
    setSelectedDate,
    isModalOpen,
    setIsModalOpen,
    handleAddSlot,
    handleDeleteSlot,
    isDayDisabled,
    selectedDaySlots,
    generateCalendarDays,
    formatTimeRange,
    isLoading,
    editSlot,
    onEditClick,
    setEditSlot,
    isRescheduleModalVisible,
    onRescheduleClick,
    setIsRescheduleModalVisible,
    isSlotInPast,
    onRescheduleModalSubmit,
    therapists,
  } = useAvailabilityController();
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center  mb-8">
            <h1 className="text-2xl font-semibold">Availability</h1>
            <div className="relative group ms-3">
              <div className="w-5 h-5 flex items-center justify-center border border-gray-400 rounded-full text-gray-600 cursor-pointer">
                i
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-gray-800 text-white text-sm rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                This section for add and manage therapist availability slots.
                you can select a date and add a new slot for a therapist.
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Calendar */}
            <div>
              <div className="flex items-center justify-center">
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
                  <ArrowLeft />
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
                  <ArrowRight />
                </button>
              </div>
              <p className="text-center text-gray-600 mb-4">
                Select a date to add slots
              </p>
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
                  disabled={isDayDisabled(selectedDate)}
                  title={`${
                    user && user.role === "admin"
                      ? "click to assign therapist to their slots"
                      : ""
                  }`}
                  className={`bg-[#16A085] hover:bg-[#457067] text-[#ffffff] font-montserrat font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg flex items-center gap-2 
                      ${
                        isDayDisabled(selectedDate)
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
                        <div className="flex flex-col">
                          <span className="text-gray-900 font-medium">
                            {formatTimeRange(slot.startTime, slot.endTime)}
                          </span>
                          {/* <span className="text-gray-600">{slot.type}</span> */}
                        </div>
                        <span className="text-gray-600">{slot.type}</span>
                        {slot.clientId && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                            Booked
                          </span>
                        )}
                        {!isDayDisabled(selectedDate) &&
                          !isSlotInPast(slot) && (
                            <div className="flex items-center gap-2">
                              {slot.clientId ? (
                                <button
                                  onClick={() => {
                                    onRescheduleClick(slot);
                                  }}
                                  className="text-orange-500 hover:text-orange-600 border-orange-200 hover:bg-orange-50"
                                >
                                  Reschedule
                                </button>
                              ) : (
                                <button
                                  onClick={() => onEditClick(slot)}
                                  title="Edit"
                                  className="text-gray-500 hover:text-gray-600"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                  </svg>
                                </button>
                              )}
                              {!slot.clientId && (
                                <button
                                  title="Delete"
                                  onClick={() => handleDeleteSlot(slot._id)}
                                  className="text-red-500 hover:text-red-600"
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

      {isModalOpen && (
        <AddSlotModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setEditSlot(undefined);
          }}
          onSubmit={handleAddSlot}
          selectedDate={selectedDate}
          isPastDate={isDayDisabled(selectedDate)}
          slot={editSlot}
          therapists={therapists}
        />
      )}

      {isRescheduleModalVisible && editSlot && (
        <RescheduleModal
          isOpen={isRescheduleModalVisible}
          slot={editSlot}
          onClose={() => setIsRescheduleModalVisible(false)}
          onSubmit={onRescheduleModalSubmit}
        />
      )}
    </div>
  );
}
