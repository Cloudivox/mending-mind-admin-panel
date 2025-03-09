import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import { useRegisterUser } from "../services";
import Cookies from "js-cookie";
import { USER_ACCESS_KEY } from "../../../utils/enum";
import { useUser } from "../../../context/user-context";
import { useNavigate } from "react-router-dom";

interface RegistrationFormProps {
  organizationData: OrganizationData;
}

export interface OrganizationData {
  organizationName: string;
  organizationId: string;
  // Add any other fields that might come from the API
}

export interface UserFormData {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  age: string;
  gender: "male" | "female" | "other" | "";
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  organizationData,
}) => {
  const [formData, setFormData] = useState<UserFormData>({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
  });

  const { setUser } = useUser();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  // Use the mutation hook with organizationId
  const { mutateAsync: registerUser } = useRegisterUser(
    organizationData.organizationId
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Required fields
    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber.replace(/\D/g, ""))) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Add validation for age
    if (!formData.age) {
      newErrors.age = "Age is required";
    } else {
      const ageValue = parseInt(formData.age);
      if (isNaN(ageValue) || ageValue <= 0) {
        newErrors.age = "Please enter a valid age";
      }
    }

    // Add validation for gender
    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsLoading(true);
    setSuccessMessage(null);

    try {
      // Format the data to match API requirements
      const userData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phoneNumber,
        password: formData.password,
        age: formData.age,
        gender: formData.gender,
        role: "user", // Assuming default role for registration
      };

      const response = await registerUser(userData);

      Cookies.set(USER_ACCESS_KEY.TOKEN, response.user.token, {
        secure: true,
        sameSite: "lax",
      });
      Cookies.set(
        USER_ACCESS_KEY.ORGANIZATION_ID,
        organizationData.organizationId,
        {
          secure: true,
          sameSite: "lax",
        }
      );

      setUser({
        email: response.user.email,
        role: response.user.role,
        id: response.user.id,
        name: response.user.name,
      });

      setSuccessMessage(
        "Registration successful! Welcome to " +
          organizationData.organizationName
      );

      navigate(`/${organizationData.organizationId}`, { replace: true });
      sessionStorage.removeItem("organizationCode");

      // Reset form after successful registration
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        age: "",
        gender: "",
      });
    } catch (error: any) {
      const errorMessage =
        error?.message || "Registration failed. Please try again.";
      setErrors({ submit: errorMessage });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl p-8 space-y-8 bg-white rounded-2xl shadow-lg m-4">
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center rounded-3xl">
          {/* Logo */}
          <div className="w-36 h-36 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center shadow-md">
            <img
              src={logo}
              alt="Mending Mind Logo"
              className="w-28 h-auto object-contain drop-shadow-lg"
            />
          </div>

          {/* X Symbol */}
          <span className="text-black text-5xl mx-6 font-extrabold drop-shadow-lg">
            X
          </span>

          {/* Letter P */}
          <div className="w-36 h-36 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center shadow-md">
            <span className="text-cyan-700 text-5xl font-extrabold drop-shadow-lg">
              {organizationData.organizationName.slice(0, 1).toUpperCase()}
            </span>
          </div>
        </div>
        <h2 className="font-playfair text-3xl font-bold text-black">
          {organizationData.organizationName}
        </h2>
        <p className="font-montserrat text-sm text-gray-500">
          Join the organization
        </p>
      </div>
      {successMessage && (
        <div className="mb-6 p-3 bg-green-100 text-green-700 rounded-md">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name & Email in one line */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block font-montserrat text-sm font-medium text-black"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full h-12 px-3 py-2 bg-white border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm font-montserrat text-sm focus:outline-none focus:ring-2 focus:ring-purple focus:border-purple`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block font-montserrat text-sm font-medium text-black"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full h-12 px-3 py-2 bg-white border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm font-montserrat text-sm focus:outline-none focus:ring-2 focus:ring-purple focus:border-purple`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Phone & Password in one line */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="phoneNumber"
              className="block font-montserrat text-sm font-medium text-black"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={`w-full h-12 px-3 py-2 bg-white border ${
                errors.phoneNumber ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm font-montserrat text-sm focus:outline-none focus:ring-2 focus:ring-purple focus:border-purple`}
            />
            {errors.phoneNumber && (
              <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block font-montserrat text-sm font-medium text-black"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full h-12 px-3 py-2 bg-white border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm font-montserrat text-sm focus:outline-none focus:ring-2 focus:ring-purple focus:border-purple`}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password}</p>
            )}
          </div>
        </div>

        {/* Confirm Password, Age & Gender in one line */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label
              htmlFor="confirmPassword"
              className="block font-montserrat text-sm font-medium text-black"
            >
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full h-12 px-3 py-2 bg-white border ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm font-montserrat text-sm focus:outline-none focus:ring-2 focus:ring-purple focus:border-purple`}
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="age"
              className="block font-montserrat text-sm font-medium text-black"
            >
              Age <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className={`w-full h-12 px-3 py-2 bg-white border ${
                errors.age ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm font-montserrat text-sm focus:outline-none focus:ring-2 focus:ring-purple focus:border-purple`}
            />
            {errors.age && (
              <p className="mt-1 text-sm text-red-600">{errors.age}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="gender"
              className="block font-montserrat text-sm font-medium text-black"
            >
              Gender <span className="text-red-500">*</span>
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={`w-full h-12 px-3 py-2 bg-white border ${
                errors.gender ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm font-montserrat text-sm focus:outline-none focus:ring-2 focus:ring-purple focus:border-purple`}
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <p className="mt-1 text-sm text-red-600">{errors.gender}</p>
            )}
          </div>
        </div>

        {/* Error message covering full width */}
        {errors.submit && (
          <div className="p-3 bg-red-100 text-red-700 rounded-md">
            {errors.submit}
          </div>
        )}

        {/* Submit Button with Full Width */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full h-12 bg-terracotta hover:bg-coral text-white transition-colors font-montserrat font-medium rounded-md"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Submitting...
            </div>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
