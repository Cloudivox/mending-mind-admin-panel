import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import queryClient from "./query-client";
import AdminRoutes from "./pages/admin-routes";
import ForgotPassword from "./pages/forgot-password";
import Signup from "./pages/auth/signup";
import Signin from "./pages/auth/signin";
import { UserProvider } from "./context/user-context";
import Pdf from "./pages/package/pdf";
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/*" element={<AdminRoutes />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/pdf" element={<Pdf />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </Router>
      </UserProvider>
    </QueryClientProvider>
  );
};
export default App;
