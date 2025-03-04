import React, { useState } from 'react';

export interface TimeSlotsProps {
  selectedDate: Date;
  timeSlots?: Array<{ time: string; available: boolean }>;
}

const defaultTimeSlotsList = [
  { time: '11:30 AM', available: true },
  { time: '03:30 PM', available: true },
  { time: '05:00 PM', available: true },
  { time: '06:30 PM', available: true },
];

const TimeSlots: React.FC<TimeSlotsProps> = ({ 
  selectedDate = new Date(), 
  timeSlots = defaultTimeSlotsList 
}) => {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'short', 
      day: '2-digit', 
      month: 'short' 
    };
    return date.toLocaleDateString('en-US', options);
  };
  
  const handleSelectSlot = (time: string) => {
    setSelectedSlot(time);
  };
  
  return (
    <div className="w-full md:w-1/2 pl-0 md:pl-4 mt-4 md:mt-0">
      <div className="text-right mb-4">
        <p className="font-montserrat text-sm text-gray-700">{formatDate(selectedDate)}</p>
      </div>
      
      <div className="space-y-3">
        {timeSlots.map((slot, index) => (
          <div 
            key={index}
            className={`
              border rounded-md p-3 text-center cursor-pointer transition-colors
              ${selectedSlot === slot.time 
                ? 'border-yellow bg-yellow bg-opacity-10' 
                : 'border-gray-200 hover:border-yellow'}
            `}
            onClick={() => handleSelectSlot(slot.time)}
          >
            <span className="font-montserrat text-sm">{slot.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeSlots;