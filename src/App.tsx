import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import queryClient from "./query-client";
import AdminRoutes from "./pages/admin-routes";
import ForgotPassword from "./pages/forgot-password";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/*" element={<AdminRoutes />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};
export default App;
