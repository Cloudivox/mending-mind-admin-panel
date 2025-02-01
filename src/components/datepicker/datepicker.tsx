"use client"

import * as React from "react"

interface DateRange {
  from?: Date
  to?: Date
}

export default function DatePicker() {
  const [date, setDate] = React.useState<DateRange>({
    from: new Date(2025, 0, 26),
    to: new Date(2025, 1, 1),
  })

  const [currentMonth, setCurrentMonth] = React.useState<{ left: Date; right: Date }>({
    left: new Date(2025, 0),
    right: new Date(2025, 1),
  })

  const quickSelectOptions = [
    {
      label: "Today",
      getValue: () => {
        const today = new Date()
        return { from: today, to: today }
      },
    },
    {
      label: "Yesterday",
      getValue: () => {
        const yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)
        return { from: yesterday, to: yesterday }
      },
    },
    {
      label: "Last 7 Days",
      getValue: () => {
        const end = new Date()
        const start = new Date()
        start.setDate(start.getDate() - 6)
        return { from: start, to: end }
      },
    },
    {
      label: "Last 14 Days",
      getValue: () => {
        const end = new Date()
        const start = new Date()
        start.setDate(start.getDate() - 13)
        return { from: start, to: end }
      },
    },
    {
      label: "Last Month",
      getValue: () => {
        const end = new Date()
        const start = new Date(end.getFullYear(), end.getMonth() - 1, 1)
        return { from: start, to: end }
      },
    },
    {
      label: "Last 6 Months",
      getValue: () => {
        const end = new Date()
        const start = new Date(end.getFullYear(), end.getMonth() - 6, 1)
        return { from: start, to: end }
      },
    },
    {
      label: "Last 12 Months",
      getValue: () => {
        const end = new Date()
        const start = new Date(end.getFullYear() - 1, end.getMonth(), 1)
        return { from: start, to: end }
      },
    },
  ]

  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate()
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay()

  const formatDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, "0")
    const month = (date.getMonth() + 1).toString().padStart(2, "0")
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  }

  const isSameDay = (date1: Date, date2: Date) =>
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()

  const renderCalendar = (calendarDate: Date) => {
    const year = calendarDate.getFullYear()
    const month = calendarDate.getMonth()
    const days = []
    const totalDays = daysInMonth(year, month)
    const firstDay = firstDayOfMonth(year, month)

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-8 w-8" />)
    }

    // Add days of the month
    for (let day = 1; day <= totalDays; day++) {
      const currentDate = new Date(year, month, day)
      const isSelected = date?.from && date?.to && currentDate >= date.from && currentDate <= date.to
      const isRangeEnd =
        (date?.from && isSameDay(currentDate, date.from)) || (date?.to && isSameDay(currentDate, date.to))

      days.push(
        <button
          key={day}
          onClick={() => handleDateClick(currentDate)}
          className={`h-8 w-8 rounded-full flex items-center justify-center
            ${isSelected ? "bg-blue-100" : "hover:bg-gray-100"}
            ${isRangeEnd ? "bg-blue-500 text-white" : ""}
          `}
        >
          {day}
        </button>,
      )
    }

    return days
  }

  const handleDateClick = (selectedDate: Date) => {
    if (!date.from || (date.from && date.to)) {
      // Start new selection
      setDate({ from: selectedDate, to: undefined })
    } else {
      // Complete the selection
      if (selectedDate < date.from) {
        setDate({ from: selectedDate, to: date.from })
      } else {
        setDate({ from: date.from, to: selectedDate })
      }
    }
  }

  const handleMonthChange = (direction: "prev" | "next") => {
    setCurrentMonth((prev) => {
      const newLeft = new Date(prev.left)
      const newRight = new Date(prev.right)
      if (direction === "next") {
        newLeft.setMonth(newLeft.getMonth() + 1)
        newRight.setMonth(newRight.getMonth() + 1)
      } else {
        newLeft.setMonth(newLeft.getMonth() - 1)
        newRight.setMonth(newRight.getMonth() - 1)
      }
      return { left: newLeft, right: newRight }
    })
  }

  return (
    <div className="relative inline-block w-fit">
      <button
        className="flex items-center gap-2 px-4 py-2 border rounded-md"
        onClick={() => document.getElementById("date-popover")?.classList.toggle("hidden")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        {date?.from ? (
          date.to ? (
            <>
              {formatDate(date.from)} - {formatDate(date.to)}
            </>
          ) : (
            formatDate(date.from)
          )
        ) : (
          <span>Pick a date</span>
        )}
      </button>

      <div
        id="date-popover"
        className="absolute top-12 right-0 z-50 bg-white border rounded-lg shadow-lg hidden w-[720px]"
      >
        <div className="flex">
          <div className="border-r p-3 space-y-2 w-48">
            {quickSelectOptions.map((option) => (
              <button
                key={option.label}
                className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded"
                onClick={() => setDate(option.getValue())}
              >
                {option.label}
              </button>
            ))}
          </div>

          <div className="p-4">
            <div className="flex gap-8">
              {/* Left Calendar */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <button onClick={() => handleMonthChange("prev")}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <span>{currentMonth.left.toLocaleString("default", { month: "long", year: "numeric" })}</span>
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                    <div key={day} className="h-8 w-8 flex items-center justify-center text-sm text-gray-500">
                      {day}
                    </div>
                  ))}
                  {renderCalendar(currentMonth.left)}
                </div>
              </div>

              {/* Right Calendar */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span>{currentMonth.right.toLocaleString("default", { month: "long", year: "numeric" })}</span>
                  <button onClick={() => handleMonthChange("next")}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                    <div key={day} className="h-8 w-8 flex items-center justify-center text-sm text-gray-500">
                      {day}
                    </div>
                  ))}
                  {renderCalendar(currentMonth.right)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

