import ArrowLeft from "../../../assets/icons/arrow-left";
import ArrowRight from "../../../assets/icons/arrow-right";

interface DatePickerProps {
  selectedDate: string;
  onDateChange: (date: string) => void;
}

const DatePicker = ({ selectedDate, onDateChange }: DatePickerProps) => {
  // Convert selected date to Date object
  const currentDate = new Date(selectedDate);

  const goToPreviousDay = () => {
    const previousDay = new Date(currentDate);
    previousDay.setDate(currentDate.getDate() - 1);
    onDateChange(previousDay.toISOString().split("T")[0]);
  };

  const goToNextDay = () => {
    const nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + 1);
    onDateChange(nextDay.toISOString().split("T")[0]);
  };

  return (
    <div className="flex items-center gap-4 bg-yellow/10 p-2 rounded-xl">
      <button
        className="p-2 rounded-lg border-2 border-yellow/30 hover:bg-yellow/20 text-black transition-colors"
        onClick={goToPreviousDay}
      >
        <ArrowLeft />
      </button>
      <div className="flex items-center gap-2">
        <input
          type="date"
          className="appearance-none bg-yellow/10 border-2 border-yellow/30 rounded-xl px-3 py-2 pr-5 text-lg font-playfair text-black focus:outline-none focus:border-yellow/50 hover:bg-yellow/20 transition-colors cursor-pointer"
          value={selectedDate}
          onChange={(e) => onDateChange(e.target.value)}
        />
      </div>
      <button
        className="p-2 rounded-lg border-2 border-yellow/30 hover:bg-yellow/20 text-black transition-colors"
        onClick={goToNextDay}
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default DatePicker;
