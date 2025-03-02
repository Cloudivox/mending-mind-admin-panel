import React, { useState, useEffect } from "react";
import CodeVerificationForm from "./code-verification-form";
import RegistrationForm from "./registration-form";
import { useVerifyCode } from "./services";
import Loader from "../../components/loader";

export interface OrganizationData {
  organizationName: string;
  organizationId: string;
  // Add any other fields that might come from the API
}
function App() {
  const [organizationData, setOrganizationData] =
    useState<OrganizationData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const verifyCode = useVerifyCode();

  useEffect(() => {
    const storedCode = sessionStorage.getItem("organizationCode");
    if (storedCode) {
      verifyCode.mutate({ code: storedCode });
    } else {
      setIsLoading(false);
    }
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (verifyCode.isSuccess && verifyCode.data) {
      const data = {
        organizationName: verifyCode.data.organization.name,
        organizationId: verifyCode.data.organization.id,
      };
      setOrganizationData(data);
      setIsLoading(false);
    }
  }, [verifyCode.isSuccess, verifyCode.data]);

  useEffect(() => {
    if (verifyCode.isError) {
      sessionStorage.removeItem("organizationCode");
      setIsLoading(false);
    }
  }, [verifyCode.isError]);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {organizationData && Object.keys(organizationData).length > 0 ? (
          <RegistrationForm organizationData={organizationData} />
        ) : (
          !isLoading &&
          !organizationData && (
            <CodeVerificationForm onVerificationSuccess={setOrganizationData} />
          )
        )}
      </div>
    </div>
  );
}

export default App;
