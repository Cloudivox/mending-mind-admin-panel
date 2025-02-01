// import React from "react";

/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

// import "./style.css";

const Profile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg">
        <div className="flex flex-col items-center space-y-6">
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1474447976065-67d23accb1e3?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile Avatar"
              className="w-32 h-32 rounded-full object-cover ring-4 ring-gray-100 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 right-0">
              <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors duration-200">
                <span className="material-symbols-outlined">Change Photo</span>
              </button>
            </div>
          </div>

          <div className="w-full space-y-4">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-3 text-gray-400">
                person
              </span>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full pl-16 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-200"
              />
            </div>

            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-3 text-gray-400">
                mail
              </span>
              <input
                type="email"
                placeholder="johndoe@example.com"
                className="w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-200"
              />
            </div>

            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-3 text-gray-400">
                phone
              </span>
              <input
                type="tel"
                placeholder="+1 (234) 567-8900"
                className="w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-200"
              />
            </div>

            <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center space-x-2">
              <span>Edit Profile</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
