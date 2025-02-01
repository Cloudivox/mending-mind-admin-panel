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

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isActive, setIsActive] = useState("Home");
  const navigate = useNavigate();
  return (
    <aside className="w-64 h-screen fixed left-0 top-0 bg-mint/10 border-r border-mint/25 overflow-auto custom-scrollbar">
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

      <nav className="px-4 font-montserrat">
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
          <span className="font-medium">Home</span>
        </Link>

        <div className="space-y-1.5">
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
            <span>Dashboard</span>
            <span>{isDropdownOpen ? <ArrowUp /> : <ArrowDown />}</span>
          </Link>

          {isDropdownOpen && (
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
                Overall
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
            <span>Calendar</span>
          </Link>
          <Link
            to="#"
            onClick={() => setIsActive("Session")}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors ${
              isActive === "Session"
                ? "text-black bg-mint/20"
                : "text-black/70 hover:text-black hover:bg-mint/10"
            }`}
          >
            <NavSessionIcon />
            <span>Session</span>
          </Link>
          <Link
            to="#"
            onClick={() => setIsActive("Package")}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors ${
              isActive === "Package"
                ? "text-black bg-mint/20"
                : "text-black/70 hover:text-black hover:bg-mint/10"
            }`}
          >
            <NavPackageIcon />
            <span>Package</span>
          </Link>
          <Link
            to="#"
            onClick={() => setIsActive("Availability")}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors ${
              isActive === "Availability"
                ? "text-black bg-mint/20"
                : "text-black/70 hover:text-black hover:bg-mint/10"
            }`}
          >
            <NavAvailabilityIcon />
            <span>Availability</span>
          </Link>
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
            <span>Payment</span>
          </Link>
          <Link
            to="#"
            onClick={() => setIsActive("blog")}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors ${
              isActive === "blog"
                ? "text-black bg-mint/20"
                : "text-black/70 hover:text-black hover:bg-mint/10"
            }`}
          >
            <NavBlogIcon />
            <span>Blog</span>
          </Link>
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
            <span>Event</span>
          </Link>
          <Link
            to="#"
            onClick={() => setIsActive("Team")}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors ${
              isActive === "Team"
                ? "text-black bg-mint/20"
                : "text-black/70 hover:text-black hover:bg-mint/10"
            }`}
          >
            <NavTeamManageIcon />
            <span>Team Management</span>
          </Link>
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
            <span>Profile</span>
          </Link>
        </div>
      </nav>
    </aside>
  );
};

export default Nav;
