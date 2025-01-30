import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
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

const Nav = () => {
  return (
    <aside className="w-64 h-screen fixed left-0 top-0 bg-mint/10 border-r border-mint/20">
      <div className="p-6 flex items-center">
        <img src={logo} className="h-20" alt="logo" title="logo" />
      </div>

      <nav className="px-4 font-montserrat">
        <Link
          to="/"
          className="flex items-center gap-3 text-black bg-mint/20 px-4 py-3 rounded-xl mb-2"
        >
          <NavHomeIcon/>
          <span className="font-medium">Home</span>
        </Link>

        <div className="space-y-1.5">
          <Link
            to="#"
            className="flex items-center gap-3 text-black/70 hover:text-black hover:bg-mint/10 px-4 py-3 rounded-xl transition-colors"
          >
           <NavDashboardIcon />
            <span>Dashboard</span>
          </Link>
          <Link
            to="/calendar"
            className="flex items-center gap-3 text-black/70 hover:text-black hover:bg-mint/10 px-4 py-3 rounded-xl transition-colors"
          >
            <NavCalendarIcon />
            <span>Calendar</span>
          </Link>
          <Link
            to="#"
            className="flex items-center gap-3 text-black/70 hover:text-black hover:bg-mint/10 px-4 py-3 rounded-xl transition-colors"
          >
            <NavSessionIcon />
            <span>Session</span>
          </Link>
          <Link
            to="#"
            className="flex items-center gap-3 text-black/70 hover:text-black hover:bg-mint/10 px-4 py-3 rounded-xl transition-colors"
          >
            <NavPackageIcon />
            <span>Package</span>
          </Link>
          <Link
            to="#"
            className="flex items-center gap-3 text-black/70 hover:text-black hover:bg-mint/10 px-4 py-3 rounded-xl transition-colors"
          >
          <NavAvailabilityIcon />
            <span>Availability</span>
          </Link>
          <Link
            to="#"
            className="flex items-center gap-3 text-black/70 hover:text-black hover:bg-mint/10 px-4 py-3 rounded-xl transition-colors"
          >
            <NavPaymentIcon />
            <span>Payment</span>
          </Link>
          <Link
            to="#"
            className="flex items-center gap-3 text-black/70 hover:text-black hover:bg-mint/10 px-4 py-3 rounded-xl transition-colors"
          >
            <NavBlogIcon />
            <span>Blog</span>
          </Link>
          <Link
            to="#"
            className="flex items-center gap-3 text-black/70 hover:text-black hover:bg-mint/10 px-4 py-3 rounded-xl transition-colors"
          >
            <NavEventIcon /> 
            <span>Event</span>
          </Link>
          <Link
            to="#"
            className="flex items-center gap-3 text-black/70 hover:text-black hover:bg-mint/10 px-4 py-3 rounded-xl transition-colors"
          >
            <NavTeamManageIcon />
            <span>Team Management</span>
          </Link>
          <Link
            to="#"
            className="flex items-center gap-3 text-black/70 hover:text-black hover:bg-mint/10 px-4 py-3 rounded-xl transition-colors"
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
