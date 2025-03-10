import { Routes, Route, useNavigate } from "react-router-dom";
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
import TeamManagement from "../team-management";
import Package from "../package";
import CreatePackage from "../package/create-package";
import Organization from "../organization";
import SessionDetails from "../session/session-details";
import BookSession from "../book-session/book-session";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { USER_ACCESS_KEY } from "../../utils/enum";
// import EventDetails from "../event/event-details";

const AdminRoutes = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (
      window.location.pathname.includes("not-access") &&
      Cookies.get(USER_ACCESS_KEY.ORGANIZATION_ID)
    ) {
      navigate(`/${Cookies.get(USER_ACCESS_KEY.ORGANIZATION_ID)}`, {
        replace: true,
      });
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-mint/5">
      <Nav />
      <div className="pl-64 bg-mint/5">
        <main className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="calendar" element={<Calender />} />
            <Route path="organization" element={<Organization />} />
            <Route path="dashboard/products" element={<Products />} />
            <Route path="dashboard/client" element={<Clients />} />
            <Route path="dashboard/therapist" element={<Therapists />} />
            <Route path="dashboard/overall" element={<Overall />} />
            <Route path="event" element={<Event />} />
            <Route path="profile" element={<Profile />} />
            <Route path="availability" element={<Availability />} />
            <Route path="blog" element={<Blog />} />
            <Route path="session" element={<Session />} />
            <Route path="session/:sessionId" element={<SessionDetails />} />
            <Route path="book-session" element={<BookSession />} />
            <Route path="package" element={<Package />} />
            <Route
              path="create-package/:sessionId"
              element={<CreatePackage />}
            />
            <Route path="team" element={<TeamManagement />} />

            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminRoutes;
