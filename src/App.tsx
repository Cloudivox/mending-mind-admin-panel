import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider } from "react-query";

import queryClient from "./query-client";
import AdminRoutes from "./pages/admin-routes";
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/*" element={<AdminRoutes />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};
export default App;
