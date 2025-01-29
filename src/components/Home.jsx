import React from "react";
import HorizotalBlock from "./Horizonal-block";
import AppointmentTable from "./Appointment-table";
import PendingRequest from "./Pending-request";

function Home() {
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
}

export default Home;
