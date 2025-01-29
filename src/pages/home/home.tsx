import React from "react";
import HorizotalBlock from "./horizontal-block";
import AppointmentTable from "./appointment-table";
import PendingRequest from "./pendig-requests";

const Home = () => {
  return (
    <div className="p-8">
      <HorizotalBlock />

      {/* Content Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
        {/* Appointments Table */}
        <AppointmentTable />
        {/* Pending request */}
        <PendingRequest />
      </div>
    </div>
  );
};

export default Home;
