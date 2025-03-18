import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function UserHome() {
  const { organizationId } = useParams();
  const navigate = useNavigate();
  const navigateBookSession = () => {
    navigate(`/${organizationId}/session`);
  };
  return (
    <div className="min-h-screen bg-mint/30 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <div className="space-y-8">
          {/* Header Section */}
          <div className="text-center space-y-4">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-black">
              Welcome to Your Mental Health Journey
            </h1>
            <p className="font-montserrat text-lg text-purple/80">
              Your path to wellness begins here
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="bg-yellow/10 p-6 rounded-xl">
                <h2 className="font-playfair text-2xl text-black mb-4">
                  Start Your Journey Today
                </h2>
                <p className="font-montserrat text-terracotta">
                  Take the first step towards a healthier mind by booking your
                  initial session with our experienced professionals.
                </p>
              </div>

              <button
                onClick={() => navigateBookSession()}
                className="w-full bg-coral hover:bg-coral/90 text-white font-montserrat py-4 px-6 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300"
              >
                <span>Book Your First Session</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div className="bg-purple/10 p-6 rounded-xl">
                <div className="flex items-start space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-purple"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <div>
                    <h3 className="font-playfair text-xl text-black">
                      Flexible Scheduling
                    </h3>
                    <p className="font-montserrat text-sm text-purple/80 mt-2">
                      Choose from various time slots that fit your schedule
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-mint/20 p-6 rounded-xl">
                <div className="flex items-start space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-terracotta"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <div>
                    <h3 className="font-playfair text-xl text-black">
                      45-60 Minute Sessions
                    </h3>
                    <p className="font-montserrat text-sm text-terracotta/80 mt-2">
                      Dedicated time for your mental wellness
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Quote */}
          <div className="text-center mt-12">
            <p className="font-playfair italic text-xl text-purple">
              "Every journey begins with a single step"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserHome;
