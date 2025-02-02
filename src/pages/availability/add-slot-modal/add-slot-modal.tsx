import { useState } from "react"
import type { AddSlotModalProps } from "../../../utils/types"
const  AddSlotModal =({ isOpen, onClose, onSubmit, selectedDate, isPastDate }: AddSlotModalProps)=> {
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")

  if (!isOpen || isPastDate) return null

  const handleStartTimeChange = (time: string) => {
    setStartTime(time)
    // If start time is selected and end time isn't, set end time to 1 hour after start time
    if (time && !endTime) {
      const [hours, minutes] = time.split(":")
      const date = new Date()
      date.setHours(Number.parseInt(hours))
      date.setMinutes(Number.parseInt(minutes))
      date.setHours(date.getHours() + 1)
      setEndTime(`${date.getHours().toString().padStart(2, "0")}:${minutes}`)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (startTime >= endTime) {
      alert("End time must be after start time")
      return
    }
    onSubmit(startTime, endTime)
    setStartTime("")
    setEndTime("")
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Add Availability Slot</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="startTime" className="block text-sm font-medium text-gray-700 mb-1">
              Start Time
            </label>
            <input
              type="time"
              id="startTime"
              value={startTime}
              onChange={(e) => handleStartTimeChange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>
          <div>
            <label htmlFor="endTime" className="block text-sm font-medium text-gray-700 mb-1">
              End Time
            </label>
            <input
              type="time"
              id="endTime"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              min={startTime}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>
          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-md hover:bg-emerald-700"
            >
              Add Slot
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddSlotModal;