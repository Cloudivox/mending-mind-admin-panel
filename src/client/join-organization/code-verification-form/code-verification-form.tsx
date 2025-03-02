import React, { useState, useEffect } from "react";
import { useVerifyCode } from "../services";

interface CodeVerificationFormProps {
  onVerificationSuccess: (data: OrganizationData) => void;
}
export interface OrganizationData {
  organizationName: string;
  organizationId: string;
}

const CodeVerificationForm: React.FC<CodeVerificationFormProps> = ({
  onVerificationSuccess,
}) => {
  const [code, setCode] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const verifyCode = useVerifyCode();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const handleVerify = async () => {
    if (!code.trim()) {
      setError("Please enter an organization code");
      return;
    }

    setError(null);
    verifyCode.mutate({ code });
  };

  useEffect(() => {
    if (verifyCode.isSuccess) {
      const data = {
        organizationName: verifyCode.data.organization.name,
        organizationId: verifyCode.data.organization.id,
      };
      onVerificationSuccess(data);
      sessionStorage.setItem("organizationCode", code);
      sessionStorage.setItem("organizationData", JSON.stringify(data));
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [verifyCode.isSuccess, verifyCode.data]);

  useEffect(() => {
    if (verifyCode.isError) {
      setError("Invalid organization code. Please try again.");
      // Clear session storage if verification fails
      sessionStorage.removeItem("organizationCode");
      sessionStorage.removeItem("organizationData");
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [verifyCode.isError]);

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Enter Code for Organization
      </h2>

      <div className="mb-6">
        <input
          type="text"
          value={code}
          onChange={handleInputChange}
          placeholder="Enter organization code"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={verifyCode.isLoading}
        />
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      </div>

      <button
        onClick={handleVerify}
        disabled={verifyCode.isLoading}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors flex items-center justify-center"
      >
        {verifyCode.isLoading ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path
                  stroke-dasharray="16"
                  stroke-dashoffset="16"
                  d="M12 3c4.97 0 9 4.03 9 9"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.3s"
                    values="16;0"
                  />
                  <animateTransform
                    attributeName="transform"
                    dur="1.5s"
                    repeatCount="indefinite"
                    type="rotate"
                    values="0 12 12;360 12 12"
                  />
                </path>
                <path
                  stroke-dasharray="64"
                  stroke-dashoffset="64"
                  stroke-opacity="0.3"
                  d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="1.2s"
                    values="64;0"
                  />
                </path>
              </g>
            </svg>
            Verifying...
          </>
        ) : (
          "Verify Code"
        )}
      </button>
    </div>
  );
};

export default CodeVerificationForm;
