import { useState } from "react"
import  AddSlotModal  from "./add-slot-modal"
import type { TimeSlot } from "../../utils/types"

export default function AvailabilityPage() {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date())
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [slots, setSlots] = useState<TimeSlot[]>([])
  
    const formatDate = (date: Date) => {
      return date.toISOString().split("T")[0]
    }
  
    const formatTimeRange = (startTime: string, endTime: string) => {
      const formatTime = (time: string) => {
        const [hours, minutes] = time.split(":")
        const hour = Number.parseInt(hours)
        const ampm = hour >= 12 ? "PM" : "AM"
        const hour12 = hour % 12 || 12
        return `${hour12}:${minutes} ${ampm}`
      }
      return `${formatTime(startTime)} - ${formatTime(endTime)}`
    }
  
    const handleDateClick = (date: Date) => {
      setSelectedDate(date)
    }
  
    const handleAddSlot = (startTime: string, endTime: string) => {
      const newSlot: TimeSlot = {
        id: Math.random().toString(36).substr(2, 9),
        date: formatDate(selectedDate),
        startTime,
        endTime,
      }
      setSlots([...slots, newSlot])
    }
  
    const handleDeleteSlot = (slotId: string) => {
      setSlots(slots.filter((slot) => slot.id !== slotId))
    }
  
    const isPastDate = (date: Date) => {
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      date.setHours(0, 0, 0, 0)
      return date < today
    }
  
    const getDaySlots = (date: Date) => {
      return slots.filter((slot) => slot.date === formatDate(date))
    }
  
    const selectedDaySlots = getDaySlots(selectedDate)
  
    const generateCalendarDays = () => {
      const year = selectedDate.getFullYear()
      const month = selectedDate.getMonth()
      const firstDay = new Date(year, month, 1)
      const lastDay = new Date(year, month + 1, 0)
      const days = []
  
      // Add empty cells for days before the first day of the month
      for (let i = 0; i < firstDay.getDay(); i++) {
        days.push(<div key={`empty-${i}`} className="h-14" />)
      }
  
      // Add days of the month
      for (let day = 1; day <= lastDay.getDate(); day++) {
        const date = new Date(year, month, day)
        const isSelected =
          date.getDate() === selectedDate.getDate() &&
          date.getMonth() === selectedDate.getMonth() &&
          date.getFullYear() === selectedDate.getFullYear()
        const hasSlots = getDaySlots(date).length > 0
  
        days.push(
          <button
            key={day}
            onClick={() => handleDateClick(date)}
            disabled={isPastDate(new Date(year, month, day))}
            className={`h-14 rounded-lg flex items-center justify-center relative
              ${isSelected ? "bg-emerald-600 text-white" : "hover:bg-gray-100"}
              ${hasSlots ? "font-semibold" : ""}
              ${isPastDate(new Date(year, month, day)) ? "text-gray-400 cursor-not-allowed" : ""}
            `}
          >
            {day}
            {hasSlots && <div className="absolute bottom-2 w-1 h-1 bg-emerald-600 rounded-full" />}
          </button>,
        )
      }
  
      return days
    }
  
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
                    onClick={() => setSelectedDate(new Date(selectedDate.setMonth(selectedDate.getMonth() - 1)))}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    ←
                  </button>
                  <h2 className="text-lg font-medium mx-2">
                    {selectedDate.toLocaleString("default", { month: "long", year: "numeric" })}
                  </h2>
                  <button
                    onClick={() => setSelectedDate(new Date(selectedDate.setMonth(selectedDate.getMonth() + 1)))}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    →
                  </button>
                </div>
  
                <div className="grid grid-cols-7 gap-2 mb-2">
                  {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
                    <div key={day} className="h-10 flex items-center justify-center text-sm text-gray-500">
                      {day}
                    </div>
                  ))}
                </div>
  
                <div className="grid grid-cols-7 gap-2">{generateCalendarDays()}</div>
              </div>
  
              {/* Time Slots */}
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-medium">
                    {selectedDate.toLocaleDateString("default", { weekday: "short", month: "short", day: "numeric" })}
                  </h2>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    disabled={isPastDate(selectedDate)}
                    className={`px-4 py-2 rounded-lg 
                      ${
                        isPastDate(selectedDate)
                          ? "bg-gray-300 cursor-not-allowed"
                          : "bg-emerald-600 hover:bg-emerald-700 text-white"
                      }`}
                  >
                    Add Slot
                  </button>
                </div>
  
                <div className="space-y-3">
                  {selectedDaySlots.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">No availability slots for this day</p>
                  ) : (
                    selectedDaySlots.map((slot) => (
                      <div
                        key={slot.id}
                        className="p-4 bg-gray-50 hover:bg-gray-100 rounded-lg flex items-center justify-between transition-colors"
                      >
                        <span className="text-gray-900 font-medium">{formatTimeRange(slot.startTime, slot.endTime)}</span>
                        {!isPastDate(selectedDate) && (
                          <button
                            onClick={() => handleDeleteSlot(slot.id)}
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
    )
}

