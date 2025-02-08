const TimeSlots = ({ timeSlots }: { timeSlots: string[] }) => {
  return (
    <div className="w-20 flex-shrink-0">
      <div className="h-24 border-b border-r border-black/5" />
      {timeSlots.map((time) => (
        <div
          key={time}
          className="h-16 border-b border-r border-black/5 px-2 py-1 text-sm text-black/60 font-montserrat"
        >
          {time}
        </div>
      ))}
    </div>
  );
};

export default TimeSlots;
