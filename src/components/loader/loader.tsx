const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="relative w-16 h-16">
        {/* Large outer circles */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-full border-2 rounded-full animate-spin"
            style={{
              borderColor: "transparent",
              borderTopColor:
                i === 0
                  ? "#B7E4E7"
                  : i === 1
                  ? "#F5CC4F"
                  : i === 2
                  ? "#FF8575"
                  : "#9B8BE4",
              animation: `spin ${3 + i * 0.8}s linear infinite${
                i % 2 ? " reverse" : ""
              }`,
              transform: `scale(${1 - i * 0.15})`,
            }}
          />
        ))}

        {/* Middle rotating circles */}
        <div className="absolute inset-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-full border-[1.5px] rounded-full animate-spin"
              style={{
                borderColor: "transparent",
                borderRightColor:
                  i === 0 ? "#B7E4E7" : i === 1 ? "#F5CC4F" : "#FF8575",
                animation: `spin ${2 + i * 0.5}s linear infinite reverse`,
                transform: `scale(${0.8 - i * 0.1})`,
              }}
            />
          ))}
        </div>

        {/* Inner circle elements */}
        <div className="absolute inset-4">
          <div
            className="absolute w-full h-full border-[1px] rounded-full animate-spin"
            style={{
              borderColor: "#9B8BE4",
              borderStyle: "dotted",
              animation: "spin 4s linear infinite",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
