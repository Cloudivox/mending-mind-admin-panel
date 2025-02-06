import { useState } from "react";
import { Link } from "react-router-dom";

interface Passwords {
  newPassword: string;
  confirmPassword: string;
}

interface Errors {
  email?: string;
  newPassword?: string;
  confirmPassword?: string;
}

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [showResetForm, setShowResetForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwords, setPasswords] = useState<Passwords>({
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  // Validation functions
  const validateEmail = (email: string): string => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return "Email is required";
    } else if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const validatePassword = (password: string): string => {
    if (!password) {
      return "Password is required";
    } else if (password.length < 8) {
      return "Password must be at least 8 characters long";
    } else if (!/(?=.*[a-z])/.test(password)) {
      return "Password must contain at least one lowercase letter";
    } else if (!/(?=.*[A-Z])/.test(password)) {
      return "Password must contain at least one uppercase letter";
    } else if (!/(?=.*\d)/.test(password)) {
      return "Password must contain at least one number";
    } else if (!/(?=.*[!@#$%^&*])/.test(password)) {
      return "Password must contain at least one special character";
    }
    return "";
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setErrors((prev) => ({
      ...prev,
      email: validateEmail(newEmail),
    }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setPasswords((prev) => ({
      ...prev,
      [id]: value,
    }));

    if (id === "newPassword") {
      const passwordError = validatePassword(value);
      setErrors((prev) => ({
        ...prev,
        newPassword: passwordError,
        confirmPassword:
          value !== passwords.confirmPassword ? "Passwords do not match" : "",
      }));
    } else if (id === "confirmPassword") {
      setErrors((prev) => ({
        ...prev,
        confirmPassword:
          value !== passwords.newPassword ? "Passwords do not match" : "",
      }));
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailError = validateEmail(email);
    setErrors({ email: emailError });

    if (!emailError) {
      setShowResetForm(true);
    }
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPasswordError = validatePassword(passwords.newPassword);
    const confirmPasswordError =
      passwords.newPassword !== passwords.confirmPassword
        ? "Passwords do not match"
        : "";

    setErrors({
      newPassword: newPasswordError,
      confirmPassword: confirmPasswordError,
    });

    if (!newPasswordError && !confirmPasswordError) {
      console.log("Password updated successfully");
      setEmail("");
      setPasswords({ newPassword: "", confirmPassword: "" });
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-mint via-white to-purple/20">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-lg m-4">
        <div className="text-center space-y-2">
          <h1 className="font-playfair text-4xl font-bold text-black">
            {showResetForm ? "Reset Password" : "Forgot Password"}
          </h1>
          <p className="font-montserrat text-sm text-gray-500">
            {showResetForm
              ? "Please enter your new password"
              : "Enter your email to receive reset instructions"}
          </p>
        </div>

        {!showResetForm ? (
          <form onSubmit={handleEmailSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block font-montserrat text-sm font-medium text-black"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email address"
                className={`w-full h-12 px-3 py-2 bg-white border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm font-montserrat text-sm focus:outline-none focus:ring-2 focus:ring-purple focus:border-purple`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full h-12 bg-terracotta hover:bg-coral text-white transition-colors font-montserrat font-medium rounded-md"
            >
              Send Reset Link
            </button>
          </form>
        ) : (
          <form onSubmit={handlePasswordSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="newPassword"
                className="block font-montserrat text-sm font-medium text-black"
              >
                New Password
              </label>
              <div className="relative">
                <input
                  id="newPassword"
                  type={showPassword ? "text" : "password"}
                  value={passwords.newPassword}
                  onChange={handlePasswordChange}
                  placeholder="Enter new password"
                  className={`w-full h-12 px-3 py-2 bg-white border ${
                    errors.newPassword ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm font-montserrat text-sm focus:outline-none focus:ring-2 focus:ring-purple focus:border-purple pr-10`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <span className="w-5 h-5 flex items-center justify-center">
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                  </span>
                </button>
              </div>
              {errors.newPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.newPassword}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="confirmPassword"
                className="block font-montserrat text-sm font-medium text-black"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  value={passwords.confirmPassword}
                  onChange={handlePasswordChange}
                  placeholder="Confirm new password"
                  className={`w-full h-12 px-3 py-2 bg-white border ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-md shadow-sm font-montserrat text-sm focus:outline-none focus:ring-2 focus:ring-purple focus:border-purple pr-10`}
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full h-12 bg-terracotta hover:bg-coral text-white transition-colors font-montserrat font-medium rounded-md"
            >
              Reset Password
            </button>
          </form>
        )}

        <p className="text-center font-montserrat text-sm text-gray-500">
          Remember your password?{" "}
          <Link
            to="/login"
            className="text-terracotta hover:text-coral transition-colors font-medium"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
