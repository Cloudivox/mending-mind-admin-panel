const Profile = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] p-4 font-montserrat">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-black text-white p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="w-24 h-24 rounded-full bg-yellow flex items-center justify-center flex-shrink-0">
            <span className="text-3xl font-bold text-black">AJ</span>
          </div>
          <div className="flex-1 text-center md:text-left">
            <input
              type="text"
              name="name"
              className="bg-transparent border-b border-yellow text-2xl font-bold text-center md:text-left w-full focus:outline-none"
              defaultValue="Alexandra Johnson"
            />
            <input
              type="text"
              name="title"
              className="bg-transparent border-b border-mint text-mint mt-1 text-center md:text-left w-full focus:outline-none"
              defaultValue="UI/UX Designer"
            />
          </div>
        </div>
        <div className="p-6">
          <div className="mb-8">
            <h2 className="text-xl font-semibold">Biography</h2>
            <textarea
              name="bio"
              rows={3}
              className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow"
              defaultValue="Passionate UI/UX designer with a strong background in creating intuitive and engaging user experiences."
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-[#f9f9f9] p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="text-terracotta mr-2"
                >
                  <circle cx="12" cy="8" r="7"></circle>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                </svg>
                <h3 className="font-semibold">Experience</h3>
              </div>
              <input
                type="text"
                name="experience"
                className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow"
                defaultValue="5+ years"
              />
            </div>
            <div className="bg-[#f9f9f9] p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="text-terracotta mr-2"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                </svg>
                <h3 className="font-semibold">Qualification</h3>
              </div>
              <input
                type="text"
                name="qualification"
                className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow"
                defaultValue="Master in Computer Science"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-[#f9f9f9] p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="text-yellow mr-2"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                  <line x1="16" x2="16" y1="2" y2="6"></line>
                  <line x1="8" x2="8" y1="2" y2="6"></line>
                  <line x1="3" x2="21" y1="10" y2="10"></line>
                </svg>
                <h3 className="font-semibold">Age</h3>
              </div>
              <input
                type="number"
                name="age"
                className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow"
                defaultValue={21}
              />
            </div>
            <div className="bg-[#f9f9f9] p-4 rounded-lg">
              <div className="flex items-center mb-3">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="text-yellow mr-2"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <h3 className="font-semibold">Gender</h3>
              </div>
              {/* <input
                type="text"
                name="gender"
                className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow"
              /> */}
              <select
                name="gender"
                id="gender"
                className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold">Specialization</h2>
            <input
              type="text"
              name="specialization"
              className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow"
              placeholder="Separate specializations with commas"
              defaultValue="UI/UX Design, Front-end Development, User Research"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "UI Design",
                "UX Research",
                "Front-end Development",
                "Project Management",
              ].map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center bg-[#f9f9f9] p-3 rounded-lg"
                >
                  <div className="bg-purple w-3 h-3 rounded-full me-5"></div>
                  <input
                    type="text"
                    className="flex-1 text-sm font-medium bg-transparent focus:outline-none"
                    defaultValue={skill}
                  />
                  <input
                    type="number"
                    className="w-12 text-sm font-medium text-right bg-transparent focus:outline-none"
                    min="0"
                    max="100"
                    defaultValue={Math.floor(Math.random() * 100)}
                  />
                  <span className="text-sm font-medium ml-1 mr-2">%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
