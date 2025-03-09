export interface OrganizationData {
  organizationName: string;
  organizationId: string;
  // Add any other fields that might come from the API
}

// Simulating API call with a Promise
export const verifyOrganizationCode = async (
  code: string
): Promise<OrganizationData> => {
  // This is a mock API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate successful verification for code "ABC123"
      if (code === "ABC123") {
        resolve({
          organizationName: "Example Organization",
          organizationId: "org-123456",
        });
      } else {
        reject(new Error("Invalid organization code"));
      }
    }, 1500); // Simulate network delay
  });
};

export const registerUser = async (userData: any, organizationId: string) => {
  // This is a mock API call for user registration
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: "User registered successfully" });
    }, 1500);
  });
};
