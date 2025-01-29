import { Routes, Route } from "react-router-dom";
import Nav from "../../components/navbar";
import Home from "../home";
import Calender from "../calender";

const AdminRoutes = () => {
  return (
    <div className="min-h-screen bg-mint/5">
      <Nav />
      <div className="pl-64">
        <main className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="calendar" element={<Calender />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminRoutes;
