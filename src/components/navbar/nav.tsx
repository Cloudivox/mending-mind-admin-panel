import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import NavHomeIcon from "../../assets/icons/nav-home-icon";
import NavDashboardIcon from "../../assets/icons/nav-dashboard-icon";
import NavCalendarIcon from "../../assets/icons/nav-calendar-icon";
import NavSessionIcon from "../../assets/icons/nav-session-icon";
import NavPackageIcon from "../../assets/icons/nav-package-icon";
import NavAvailabilityIcon from "../../assets/icons/nav-availability-icon";
import NavPaymentIcon from "../../assets/icons/nav-payment-icon";
import NavBlogIcon from "../../assets/icons/nav-blog-icon";
import NavEventIcon from "../../assets/icons/nav-event-icon";
import NavTeamManageIcon from "../../assets/icons/nav-team-manage-icon";
import NavProfileIcon from "../../assets/icons/nav-profile-icon";
import ArrowUp from "../../assets/icons/arrow-up";
import ArrowDown from "../../assets/icons/arrow-down";
import WavyLines from "../../assets/icons/wavy-lines";
import ArrowLeft from "../../assets/icons/arrow-left";
import ArrowRight from "../../assets/icons/arrow-right";
import { useUser } from "../../context/user-context";
import FeedbackCompainsIcon from "../../assets/icons/nav-feedback-&-compains-icon";

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isActive, setIsActive] = useState("Home");
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <aside
      className={`group h-screen fixed left-0 top-0 bg-mint/10 border-r border-mint/25 transition-all
    ${isCollapsed ? "w-[5.5rem]" : "w-64"} flex flex-col`}
    >
      {isCollapsed ? (
        <div className="flex justify-center items-center w-20 h-[8rem]">
          <WavyLines />
        </div>
      ) : (
        <div className="p-6 flex items-center">
          <img
            onClick={() => {
              navigate("/");
              setIsActive("Home");
            }}
            src={logo}
            className="h-20 cursor-pointer"
            alt="logo"
            title="logo"
          />
        </div>
      )}
      <nav className="px-4 font-montserrat flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar">
        <Link
          to="/"
          onClick={() => setIsActive("Home")}
          className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors ${
            isActive === "Home"
              ? "text-black bg-mint/20"
              : "text-black/70 hover:text-black hover:bg-mint/10"
          }`}
        >
          <NavHomeIcon />
          {!isCollapsed && <span className="font-medium">Home</span>}
        </Link>

        <div className="space-y-1.5">
          {user && user.role === "admin" && (
            <>
              <Link
                to="/dashboard/overall"
                onClick={() => {
                  setIsDropdownOpen(!isDropdownOpen);
                  setIsActive("OverAll");
                }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors 
            ${
              isActive === "OverAll" && !isDropdownOpen
                ? "text-black bg-mint/20"
                : "text-black/70 hover:text-black hover:bg-mint/10"
            }
            `}
              >
                <NavDashboardIcon />
                {!isCollapsed && <span>Dashboard</span>}
                {!isCollapsed && (
                  <span>{isDropdownOpen ? <ArrowUp /> : <ArrowDown />}</span>
                )}
              </Link>

              {isDropdownOpen && !isCollapsed && (
                <div className="pl-10 space-y-2 mt-2">
                  <Link
                    to="/dashboard/overall"
                    onClick={() => setIsActive("OverAll")}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors ${
                      isActive === "OverAll"
                        ? "text-black bg-mint/20"
                        : "text-black/70 hover:text-black hover:bg-mint/10"
                    }`}
                  >
                    <span>Overall</span>
                  </Link>
                  <Link
                    to="/dashboard/therapist"
                    onClick={() => setIsActive("Therapist")}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors ${
                      isActive === "Therapist"
                        ? "text-black bg-mint/20"
                        : "text-black/70 hover:text-black hover:bg-mint/10"
                    }`}
                  >
                    Therapist
                  </Link>
                  <Link
                    to="/dashboard/client"
                    onClick={() => setIsActive("Client")}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors ${
                      isActive === "Client"
                        ? "text-black bg-mint/20"
                        : "text-black/70 hover:text-black hover:bg-mint/10"
                    }`}
                  >
                    Client
                  </Link>
                  <Link
                    to="/dashboard/products"
                    onClick={() => setIsActive("Product")}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors ${
                      isActive === "Product"
                        ? "text-black bg-mint/20"
                        : "text-black/70 hover:text-black hover:bg-mint/10"
                    }`}
                  >
                    Product
                  </Link>
                </div>
              )}
            </>
          )}
          {user && user.role === "admin" && (
            <Link
              to="/calendar"
              onClick={() => setIsActive("Calender")}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors ${
                isActive === "Calender"
                  ? "text-black bg-mint/20"
                  : "text-black/70 hover:text-black hover:bg-mint/10"
              }`}
            >
              <NavCalendarIcon />
              {!isCollapsed && <span>Calendar</span>}
            </Link>
          )}
          <Link
            to="/session"
            onClick={() => setIsActive("Session")}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors ${
              isActive === "Session"
                ? "text-black bg-mint/20"
                : "text-black/70 hover:text-black hover:bg-mint/10"
            }`}
          >
            <NavSessionIcon />
            {!isCollapsed && <span>Session</span>}
          </Link>
          <Link
            to="/package"
            onClick={() => setIsActive("Package")}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors ${
              isActive === "Package"
                ? "text-black bg-mint/20"
                : "text-black/70 hover:text-black hover:bg-mint/10"
            }`}
          >
            <NavPackageIcon />
            {!isCollapsed && <span>Package</span>}
          </Link>
          {user && user.role !== "admin" && (
            <Link
              to="/availability"
              onClick={() => setIsActive("Availability")}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors ${
                isActive === "Availability"
                  ? "text-black bg-mint/20"
                  : "text-black/70 hover:text-black hover:bg-mint/10"
              }`}
            >
              <NavAvailabilityIcon />
              {!isCollapsed && <span>Availability</span>}
            </Link>
          )}
          <Link
            to="#"
            onClick={() => setIsActive("Payment")}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors ${
              isActive === "Payment"
                ? "text-black bg-mint/20"
                : "text-black/70 hover:text-black hover:bg-mint/10"
            }`}
          >
            <NavPaymentIcon />
            {!isCollapsed && <span>Payment</span>}
          </Link>
          <Link
            to="/blog"
            onClick={() => setIsActive("blog")}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors ${
              isActive === "blog"
                ? "text-black bg-mint/20"
                : "text-black/70 hover:text-black hover:bg-mint/10"
            }`}
          >
            <NavBlogIcon />
            {!isCollapsed && <span>Blog</span>}
          </Link>
          {user && user.role === "admin" && (
            <Link
              to="/event"
              onClick={() => setIsActive("Event")}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors ${
                isActive === "Event"
                  ? "text-black bg-mint/20"
                  : "text-black/70 hover:text-black hover:bg-mint/10"
              }`}
            >
              <NavEventIcon />
              {!isCollapsed && <span>Event</span>}
            </Link>
          )}
          {user && user.role === "admin" && (
            <Link
              to="/team"
              onClick={() => setIsActive("Team")}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors ${
                isActive === "Team"
                  ? "text-black bg-mint/20"
                  : "text-black/70 hover:text-black hover:bg-mint/10"
              }`}
            >
              <NavTeamManageIcon />
              {!isCollapsed && <span>Team Management</span>}
            </Link>
          )}
          <Link
            to="/profile"
            onClick={() => setIsActive("Profile")}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors ${
              isActive === "Profile"
                ? "text-black bg-mint/20"
                : "text-black/70 hover:text-black hover:bg-mint/10"
            }`}
          >
            <NavProfileIcon />
            {!isCollapsed && <span>Profile</span>}
          </Link>
          {user && user.role !== "therapist" && (
            <Link
              to="/f&c"
              onClick={() => setIsActive("f&c")}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors ${
                isActive === "f&c"
                  ? "text-black bg-mint/20"
                  : "text-black/70 hover:text-black hover:bg-mint/10"
              }`}
            >
              <FeedbackCompainsIcon />
              {!isCollapsed && <span>Feedback & Complains</span>}
            </Link>
          )}
        </div>
      </nav>
      <button
        className="absolute right-[-16px] top-3/4 transform -translate-y-1/2
        w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 shadow-md 
        opacity-0 group-hover:opacity-100 transition-all bg-white/80
        hover:w-12 hover:h-12 hover:border-gray-600"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <ArrowRight /> : <ArrowLeft />}
      </button>
    </aside>
  );
};

export default Nav;
