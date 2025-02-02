import { Routes, Route } from "react-router-dom";
import Nav from "../../components/navbar";
import Home from "../home";
import Calender from "../calender";
import Products from "../dashboards/products";
import Clients from "../dashboards/clients";
import Therapists from "../dashboards/therapists";
import Overall from "../dashboards/overall";
import Event from "../event";
import Profile from "../profile";
import Availability from "../availability";
import Blog from "../blog";
import Session from "../session";

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
            <Route path="dashboard/client" element={<Clients />} />
            <Route path="dashboard/therapist" element={<Therapists />} />
            <Route path="dashboard/overall" element={<Overall />} />
            <Route path="event" element={<Event />} />
            <Route path="profile" element={<Profile />} />
            <Route path="availability" element={<Availability />} />
            <Route path="blog" element={<Blog />} />
            <Route path="session" element={<Session />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminRoutes;
