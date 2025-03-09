import AddPatientModal from "../add-client-modal";
import useCreateSessionController from "./create-session-controller";

interface CreateSessionModalProps {
  onClose: () => void
}

const CreateSessionModal = ({ onClose }: CreateSessionModalProps) => {

  const {
    form,
    setForm,
    handleSubmit,
    allTherapists,
    allPatients,
    isSlotAvailable,
    isCheckingAvailability,
    showAddPatientModal,
    setShowAddPatientModal,
    handleAddPatient,
    handleCreateSession
  } = useCreateSessionController({ onClose });

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg w-full max-w-md">
          <h2 className="text-xl font-bold mb-4">Create New Session</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Therapist</label>
              <select
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                value={form.therapist}
                onChange={(e) => setForm({ ...form, therapist: e.target.value })}
                required
              >
                <option value="">Select therapist...</option>
                {allTherapists.map((therapist) => (
                  <option key={therapist._id} value={therapist._id}>
                    {therapist.name}
                  </option>
                ))}
              </select>
              
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Patient</label>
              <select
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                value={form.patient}
                onChange={(e) => setForm({ ...form, patient: e.target.value })}
                required
              >
                <option value="">Select patient...</option>
                {allPatients.map((patient) => (
                  <option key={patient._id} value={patient._id}>
                    {patient.name}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={() => setShowAddPatientModal(true)}
                className="px-3 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 whitespace-nowrap"
              >
                Add New
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Meeting Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                value={form.meetingName}
                onChange={(e) => setForm({ ...form, meetingName: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Session Type</label>
              <select
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                required
              >
                <option value="">Select type...</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </select>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                <select
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  value={form.duration}
                  onChange={(e) => setForm({ ...form, duration: e.target.value })}
                  required
                >
                  <option value="30m">30m</option>
                  <option value="45m">45m</option>
                  <option value="60m">60m</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                <select
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  value={form.time}
                  onChange={(e) => setForm({ ...form, time: e.target.value })}
                  required
                >
                  <option value="">Select time</option>
                  <option value="9:00">9:00 am</option>
                  <option value="10:00">10:00 am</option>
                  <option value="11:00">11:00 am</option>
                  <option value="12:00">12:00 pm</option>
                  <option value="13:00">1:00 pm</option>
                  <option value="14:00">2:00 pm</option>
                  <option value="15:00">3:00 pm</option>
                  <option value="16:00">4:00 pm</option>
                  <option value="17:00">5:00 pm</option>
                </select>
              </div>
            </div>

            {isCheckingAvailability ? (
              <div className="flex items-center text-gray-600 text-sm">
                <svg className="animate-spin h-4 w-4 mr-1" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Checking availability...
              </div>
            ) : form.therapist && form.date && form.time ? (
              isSlotAvailable ? (
                <div className="flex items-center text-green-600 text-sm">
                  <svg className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Slot Available
                </div>
              ) : (
                <div className="flex items-center text-red-600 text-sm">
                  <svg className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Slot Not Available
                </div>
              )
            ) : null}

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                checked={form.autoConfirm}
                onChange={(e) => setForm({ ...form, autoConfirm: e.target.checked })}
              />
              <label className="ml-2 text-sm text-gray-700">Auto confirm this event</label>
            </div>

            {!form.autoConfirm && (
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentType"
                    value="free"
                    checked={form.paymentType === "free"}
                    onChange={(e) => setForm({ ...form, paymentType: "free" })}
                    className="mr-2"
                  />
                  Free
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentType"
                    value="paid"
                    checked={form.paymentType === "paid"}
                    onChange={(e) => setForm({ ...form, paymentType: "paid" })}
                    className="mr-2"
                  />
                  Paid
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentType"
                    value="no-booking-fee"
                    checked={form.paymentType === "no-booking-fee"}
                    onChange={(e) => setForm({ ...form, paymentType: "no-booking-fee" })}
                    className="mr-2"
                  />
                  Paid (No booking fee)
                </label>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <select
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                required
              >
                <option value="">Select location...</option>
                <option value="custom">Custom</option>
                <option value="tealfeed">Tealfeed conferencing tool</option>
              </select>
            </div>

            {/* Rest of the form remains the same */}

            <div className="flex justify-end gap-2 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`px-4 py-2 rounded-md transition-colors ${isSlotAvailable && Boolean(form.therapist) && Boolean(form.date) && Boolean(form.time)
                  ? 'bg-teal-600 text-white hover:bg-teal-700'
                  : 'bg-teal-500 text-white cursor-not-allowed'
                  }`}
                disabled={!Boolean(isSlotAvailable && form.therapist && form.date && form.time)}
                onClick={handleCreateSession}
              >
                Create one-off
              </button>
            </div>
          </form>
        </div>
      </div>
      {showAddPatientModal && (
        <AddPatientModal
          onClose={() => setShowAddPatientModal(false)}
          onSubmit={async (patientData) => {
            await handleAddPatient(patientData);
            setShowAddPatientModal(false);
          }}
        />
      )}
    </>
  );
};

export default CreateSessionModal;