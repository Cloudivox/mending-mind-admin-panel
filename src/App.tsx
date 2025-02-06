import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider } from "react-query";

import queryClient from "./query-client";
import AdminRoutes from "./pages/admin-routes";
import Login from "./pages/login";
import ForgotPassword from "./pages/forgot-password";
import Signup from "./pages/signup";
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/*" element={<AdminRoutes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};
export default App;
