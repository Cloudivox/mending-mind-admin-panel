import type React from "react";
import { useState } from "react";
import type { CreateSessionForm, Sessions } from "../../../utils/types";

interface CreateSessionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddSession: (session: Sessions) => void;
}

const CreateSessionModal = ({
  isOpen,
  onClose,
  onAddSession,
}: CreateSessionModalProps) => {
  const [form, setForm] = useState<CreateSessionForm>({
    therapist: "",
    patient: "",
    meetingName: "",
    duration: "30m",
    date: "",
    time: "",
    autoConfirm: false,
    paymentType: "free",
    location: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create a new session object
    const newSession: Sessions = {
      patientName: form.patient,
      patientEmail: `${form.patient
        .toLowerCase()
        .replace(" ", ".")}@example.com`,
      patientPhone: "+1 234 567 8900", // You may want to add this to the form
      therapistName: form.therapist,
      sessionDate: `${form.date} ${form.time}`,
      duration: form.duration,
    };

    // Add the new session
    onAddSession(newSession);

    // Close the modal and reset the form
    onClose();
    setForm({
      therapist: "",
      patient: "",
      meetingName: "",
      duration: "30m",
      date: "",
      time: "",
      autoConfirm: false,
      paymentType: "free",
      location: "",
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Create New Session</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Therapist
            </label>
            <select
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              value={form.therapist}
              onChange={(e) => setForm({ ...form, therapist: e.target.value })}
              required
            >
              <option value="">Select therapist...</option>
              <option value="Dr. Smith">Dr. Smith</option>
              <option value="Dr. Johnson">Dr. Johnson</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Patient
            </label>
            <select
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              value={form.patient}
              onChange={(e) => setForm({ ...form, patient: e.target.value })}
              required
            >
              <option value="">Select patient...</option>
              <option value="John Doe">John Doe</option>
              <option value="Jane Smith">Jane Smith</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Meeting Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              value={form.meetingName}
              onChange={(e) =>
                setForm({ ...form, meetingName: e.target.value })
              }
              required
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Duration
              </label>
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
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Time
              </label>
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

          <div className="flex items-center text-green-600 text-sm">
            <svg
              className="w-4 h-4 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Slot Available
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              checked={form.autoConfirm}
              onChange={(e) =>
                setForm({ ...form, autoConfirm: e.target.checked })
              }
            />
            <label className="ml-2 text-sm text-gray-700">
              Auto confirm this event
            </label>
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
                  onChange={(e) =>
                    setForm({ ...form, paymentType: "no-booking-fee" })
                  }
                  className="mr-2"
                />
                Paid (No booking fee)
              </label>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
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
              className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
            >
              Create one-off
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateSessionModal;
