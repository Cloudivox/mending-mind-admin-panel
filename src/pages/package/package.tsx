import { useNavigate } from "react-router-dom";

function Package() {
  const navigate = useNavigate();

  const handlePrint = () => {
    navigate("/pdf?print=true");
  };
  return (
    <div>
      <div className="p-8">
        <button
          onClick={() => navigate("/create-package")}
          className="bg-[#16A085] mb-8 hover:bg-[#457067] text-[#ffffff] font-montserrat font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg flex items-center gap-2"
        >
          Create Package
        </button>
        <button
          onClick={handlePrint}
          className="bg-[#16A085] hover:bg-[#457067] text-[#ffffff] font-montserrat font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg flex items-center gap-2"
        >
          Print
        </button>
      </div>
    </div>
  );
}

export default Package;
