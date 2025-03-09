import type React from "react";
import { useState, useEffect } from "react";

interface EventFormData {
  name: string;
  description: string;
  location: string;
  date: string;
  time: string;
  duration: number;
  participants: string[];
  isPaid: boolean;
  price: number;
  host: string;
  hostDescription?: string;
}

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: EventFormData) => void;
}

const EventModal = ({ isOpen, onClose, onSubmit }: EventModalProps) => {
  const [formData, setFormData] = useState<EventFormData>({
    name: "",
    description: "",
    location: "",
    date: "",
    time: "",
    duration: 1,
    participants: [],
    isPaid: false,
    price: 0,
    host: "",
    hostDescription: "",
  });

  const [endTime, setEndTime] = useState<string>("");
  const [errors, setErrors] = useState<
    Partial<Record<keyof EventFormData, string>>
  >({});

  useEffect(() => {
    if (formData.date && formData.time && formData.duration) {
      // Calculate end time based on start time and duration
      try {
        const [hours, minutes] = formData.time.split(":").map(Number);
        const endHours = hours + formData.duration;
        const endTimeStr = `${endHours % 24}:${minutes
          .toString()
          .padStart(2, "0")}`;
        setEndTime(`${formData.date} and ${endTimeStr}`);
      } catch (error) {
        console.error("Error calculating end time:", error);
      }
    }
  }, [formData.date, formData.time, formData.duration]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (name === "duration" || name === "capacity" || name === "price") {
      setFormData((prev) => ({ ...prev, [name]: Number(value) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof EventFormData, string>> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.host.trim()) newErrors.host = "Host Name is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";
    if (formData.duration <= 0)
      newErrors.duration = "Duration must be greater than 0";

    if (formData.isPaid && formData.price <= 0)
      newErrors.price = "Price must be greater than 0";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(formData);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-playfair font-bold text-2xl text-[#2C3E50]">
              Create New Event
            </h2>
            <button
              onClick={onClose}
              className="text-[#2C3E50] hover:text-[#16A085] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block font-montserrat font-bold text-[#2C3E50] mb-1"
              >
                Event Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-3 border rounded-xl font-montserrat ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter event name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="description"
                className="block font-montserrat font-bold text-[#2C3E50] mb-1"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={3}
                className={`w-full p-3 border rounded-xl font-montserrat ${
                  errors.description ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter event description"
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="location"
                className="block font-montserrat font-bold text-[#2C3E50] mb-1"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className={`w-full p-3 border rounded-xl font-montserrat ${
                  errors.location ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter event location"
              />
              {errors.location && (
                <p className="text-red-500 text-sm mt-1">{errors.location}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="date"
                  className="block font-montserrat font-bold text-[#2C3E50] mb-1"
                >
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-xl font-montserrat ${
                    errors.date ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.date && (
                  <p className="text-red-500 text-sm mt-1">{errors.date}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="time"
                  className="block font-montserrat font-bold text-[#2C3E50] mb-1"
                >
                  Start Time
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-xl font-montserrat ${
                    errors.time ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.time && (
                  <p className="text-red-500 text-sm mt-1">{errors.time}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="duration"
                  className="block font-montserrat font-bold text-[#2C3E50] mb-1"
                >
                  Duration (hours)
                </label>
                <input
                  type="number"
                  id="duration"
                  name="duration"
                  min="1"
                  max="24"
                  value={formData.duration}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-xl font-montserrat ${
                    errors.duration ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.duration && (
                  <p className="text-red-500 text-sm mt-1">{errors.duration}</p>
                )}
              </div>
            </div>

            {endTime && (
              <div className="bg-[#E3F2FD] p-3 rounded-xl">
                <p className="font-montserrat text-[#2C3E50]">
                  <span className="font-bold">End Time:</span> {endTime}
                </p>
              </div>
            )}

            <div>
              <label
                htmlFor="host"
                className="block font-montserrat font-bold text-[#2C3E50] mb-1"
              >
                Host Name
              </label>
              <input
                type="text"
                id="host"
                name="host"
                value={formData.host}
                onChange={handleChange}
                className={`w-full p-3 border rounded-xl font-montserrat ${
                  errors.host ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter host name"
              />
              {errors.host && (
                <p className="text-red-500 text-sm mt-1">{errors.host}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="hostDescription"
                className="block font-montserrat font-bold text-[#2C3E50] mb-1"
              >
                Host Description
              </label>
              <input
                type="text"
                id="hostDescription"
                name="hostDescription"
                value={formData.hostDescription}
                onChange={handleChange}
                className={`w-full p-3 border rounded-xl font-montserrat ${
                  errors.hostDescription ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter host description"
              />
              {errors.hostDescription && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.hostDescription}
                </p>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="isPaid"
                name="isPaid"
                checked={formData.isPaid}
                onChange={handleChange}
                className="w-5 h-5 text-[#16A085] rounded focus:ring-[#16A085]"
              />
              <label
                htmlFor="isPaid"
                className="font-montserrat font-bold text-[#2C3E50]"
              >
                This is a paid event
              </label>
            </div>

            {formData.isPaid && (
              <div>
                <label
                  htmlFor="price"
                  className="block font-montserrat font-bold text-[#2C3E50] mb-1"
                >
                  Price ($)
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  min="0"
                  step="0.01"
                  value={formData.price}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-xl font-montserrat ${
                    errors.price ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter event price"
                />
                {errors.price && (
                  <p className="text-red-500 text-sm mt-1">{errors.price}</p>
                )}
              </div>
            )}

            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 bg-white border border-[#16A085] text-[#16A085] font-montserrat font-semibold rounded-xl hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-[#16A085] text-white font-montserrat font-semibold rounded-xl hover:bg-[#457067] transition-colors"
              >
                Create Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
