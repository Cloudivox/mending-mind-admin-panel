import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Cookies from "js-cookie";

import { QueryClientProvider } from "react-query";
import queryClient from "./query-client";
import AdminRoutes from "./pages/admin-routes";
import ForgotPassword from "./pages/forgot-password";
import Signup from "./pages/auth/signup";
import Signin from "./pages/auth/signin";
import { UserProvider } from "./context/user-context";
import Pdf from "./pages/package/pdf";
import Organization from "./pages/organization";
import JoinOrganization from "./client/join-organization";
import { USER_ACCESS_KEY } from "./utils/enum";

const RedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get(USER_ACCESS_KEY.TOKEN);
    const organizationId = Cookies.get(USER_ACCESS_KEY.ORGANIZATION_ID);

    if (token && organizationId) {
      navigate(`/${organizationId}`, { replace: true });
    } else {
      if (
        !window.location.pathname.includes("/signin") &&
        !window.location.pathname.includes("/signup") &&
        !window.location.pathname.includes("/join-organization") &&
        !window.location.pathname.includes("/organization") &&
        !window.location.pathname.includes("/forgot-password")
      ) {
        navigate("/signin", { replace: true });
      }
    }
  }, [navigate]);

  return null;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<RedirectHandler />} />
            <Route path="/:organizationId/*" element={<AdminRoutes />} />
            <Route path="/organization" element={<Organization />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/join-organization" element={<JoinOrganization />} />
            <Route path="/pdf" element={<Pdf />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </Router>
      </UserProvider>
    </QueryClientProvider>
  );
};
export default App;
