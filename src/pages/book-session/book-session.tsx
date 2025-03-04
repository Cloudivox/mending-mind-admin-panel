import React, { useState } from "react";
import SessionDetails from "./session-details";
import TimeSlots from "./time-slots";

function BookSession() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date(2025, 1, 4)); // February 4, 2025
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(2025, 1, 4));
  const [showMonthYearSelector, setShowMonthYearSelector] =
    useState<boolean>(false);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = Array.from({ length: 10 }, (_, i) => 2025 + i - 5);

  const goToPreviousMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };

  const goToNextMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  const handleSelectMonth = (monthIndex: number) => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(monthIndex);
      return newDate;
    });
    setShowMonthYearSelector(false);
  };

  const handleSelectYear = (year: number) => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setFullYear(year);
      return newDate;
    });
    setShowMonthYearSelector(false);
  };

  const formatMonthYear = (date: Date) => {
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-6xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left Panel */}
          <div className="border-r border-gray-200 p-6 md:w-1/3">
            <h2 className="font-playfair text-xl font-bold text-black mb-6">
              Individual session - new clients(residing in india)
            </h2>

            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center mr-3">
                <span className="text-black text-sm">KT</span>
              </div>
              <span className="font-montserrat text-sm">Kasturi Tahlani</span>
            </div>

            <div className="space-y-3 mt-6">
              <div className="flex items-center">
                <div className="w-5 h-5 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-yellow"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <span className="font-montserrat text-sm">50 Min</span>
              </div>

              <div className="flex items-center">
                <div className="w-5 h-5 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-yellow"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <span className="font-montserrat text-sm">Google Meet</span>
              </div>

              <div className="flex items-center">
                <div className="w-5 h-5 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-yellow"
                  >
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <span className="font-montserrat text-sm">INR 2500</span>
              </div>
            </div>

            <div className="mt-12 flex items-center">
              <div className="w-5 h-5 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-500"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <span className="font-montserrat text-sm text-gray-500">
                Asia/Calcutta
              </span>
              <span className="font-montserrat text-sm text-gray-500 ml-2">
                +05:30
              </span>
              <div className="w-4 h-4 ml-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-500"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="p-6 md:w-2/3">
            <div className="flex justify-between items-center mb-6 relative">
              <button
                className="text-gray-500 hover:text-yellow transition-colors"
                onClick={goToPreviousMonth}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <div className="text-center">
                <button
                  className="font-montserrat font-bold hover:text-yellow transition-colors"
                  onClick={() =>
                    setShowMonthYearSelector(!showMonthYearSelector)
                  }
                >
                  {formatMonthYear(currentDate)}
                </button>

                {/* Month/Year Selector Dropdown */}
                {showMonthYearSelector && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-lg rounded-lg p-4 z-10 w-64">
                    <div className="mb-4">
                      <h4 className="font-montserrat text-sm font-bold mb-2 text-gray-700">
                        Month
                      </h4>
                      <div className="grid grid-cols-3 gap-2">
                        {months.map((month, index) => (
                          <button
                            key={month}
                            className={`text-sm p-2 rounded-md ${
                              currentDate.getMonth() === index
                                ? "bg-yellow text-white"
                                : "hover:bg-gray-100"
                            }`}
                            onClick={() => handleSelectMonth(index)}
                          >
                            {month.substring(0, 3)}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-montserrat text-sm font-bold mb-2 text-gray-700">
                        Year
                      </h4>
                      <div className="grid grid-cols-3 gap-2">
                        {years.map((year) => (
                          <button
                            key={year}
                            className={`text-sm p-2 rounded-md ${
                              currentDate.getFullYear() === year
                                ? "bg-yellow text-white"
                                : "hover:bg-gray-100"
                            }`}
                            onClick={() => handleSelectYear(year)}
                          >
                            {year}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <button
                className="text-gray-500 hover:text-yellow transition-colors"
                onClick={goToNextMonth}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>

            <div className="flex flex-col md:flex-row justify-between mb-4">
              <SessionDetails
                selectedDate={selectedDate}
                currentDate={currentDate}
                onSelectDate={handleDateSelect}
              />
              <TimeSlots selectedDate={selectedDate} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookSession;
