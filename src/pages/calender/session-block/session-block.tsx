const SessionBlock = ({
  startTime,
  endTime,
  title,
}: {
  startTime: string;
  endTime: string;
  title: string;
}) => {
  console.log("here");
  return (
    <div className="absolute left-0 right-0 m-1 rounded-lg bg-coral/10 p-2 text-xs border-2 border-coral/30 transition-all hover:bg-coral/20">
      <div className="font-medium text-black font-playfair">{title}</div>
      <div className="text-black/60 font-montserrat">
        {startTime} - {endTime}
      </div>
    </div>
  );
};

export default SessionBlock;
