import { Routes, Route } from "react-router-dom";
import Nav from "../../components/navbar";
import Home from "../home";
import Calender from "../calender";
import Products from "../dashboards/products";

const AdminRoutes = () => {
  return (
    <div className="min-h-screen bg-mint/5">
      <Nav />
      <div className="pl-64">
        <main className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="calendar" element={<Calender />} />
            <Route path="dashboard/products" element={<Products />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminRoutes;
