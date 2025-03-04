import React, { useEffect, useState } from "react";
import { IProfile } from "../../utils/types";
import PlusIcon from "../../assets/icons/plus-icon";
import useGetProfileDetails from "./services/get-profile-details/get-profile-details";
import { useUser } from "../../context/user-context";
import useUpdateProfile from "./services/update-profile/update-profile";
import Loader from "../../components/loader";

// Mock data for demonstration
const initialProfileData = {
  userId: "",
  bio: "",
  qualification: "",
  specialization: "",
  experience: "",
  phone: "",
  name: "",
  email: "",
  age: "",
  gender: "",
};

function Profile() {
  const [profileData, setProfileData] = useState<IProfile>(initialProfileData);
  const [isEditing, setIsEditing] = useState(false);
  const [backupData, setBackupData] = useState<IProfile>(initialProfileData);
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState("");
  const [showNewSkillInput, setShowNewSkillInput] = useState(false);
  const { user } = useUser();

  const getProfileDetails = useGetProfileDetails(user ? user?.id : undefined);
  const updateProfile = useUpdateProfile();

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setBackupData({ ...profileData });
    // Parse skills from specialization
    if (profileData.specialization) {
      setSkills(
        profileData.specialization
          .split(",")
          .map((s) => s.trim())
          .filter((s) => s)
      );
    }
  };

  const handleSaveClick = () => {
    // Update specialization with current skills
    const updatedProfileData = {
      ...profileData,
      specialization: skills.join(","),
    };
    updateProfile.mutate(updatedProfileData);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setProfileData(backupData);
    // Restore original skills from backup
    if (backupData.specialization) {
      setSkills(
        backupData.specialization
          .split(",")
          .map((s) => s.trim())
          .filter((s) => s)
      );
    } else {
      setSkills([]);
    }
    setShowNewSkillInput(false);
    setNewSkill("");
  };

  const handleAddSkill = () => {
    setShowNewSkillInput(true);
  };

  const handleSkillInputBlur = () => {
    if (newSkill.trim()) {
      setSkills([...skills, newSkill.trim()]);
    }
    setShowNewSkillInput(false);
    setNewSkill("");
  };

  const handleSkillInputKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      if (newSkill.trim()) {
        setSkills([...skills, newSkill.trim()]);
      }
      setShowNewSkillInput(false);
      setNewSkill("");
    }
  };

  const handleSkillChange = (index: number, value: string) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  };

  useEffect(() => {
    if (getProfileDetails.isSuccess && getProfileDetails.data) {
      setProfileData(getProfileDetails.data);
      setBackupData(getProfileDetails.data);
      // Parse skills from specialization on component mount
      if (getProfileDetails.data.specialization) {
        setSkills(
          getProfileDetails.data.specialization
            .split(",")
            .map((s) => s.trim())
            .filter((s) => s)
        );
      }
    }
  }, [getProfileDetails.isSuccess, getProfileDetails.data]);

  useEffect(() => {
    if (updateProfile.isSuccess && updateProfile.data) {
      getProfileDetails.refetch();
    }
    // eslint-disable-next-line
  }, [updateProfile.isSuccess, updateProfile.data]);

  return (
    <div className="min-h-screen bg-[#f8f9fa] p-4 font-sans">
      {getProfileDetails.isLoading || !user ? (
        <Loader />
      ) : (
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-black text-white p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-24 h-24 rounded-full bg-yellow flex items-center justify-center flex-shrink-0">
              <span className="text-3xl font-bold text-black">
                {profileData &&
                  profileData.name
                    .split(" ")
                    .map((word) =>
                      word.length > 0 ? word[0].toUpperCase() : ""
                    )
                    .join("")
                    .slice(0, 2)}
              </span>
            </div>
            <div className="flex-1 text-center md:text-left">
              <input
                type="text"
                name="name"
                className="bg-transparent border-b border-yellow-400 text-2xl font-bold text-center md:text-left w-full focus:outline-none"
                value={profileData.name}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
              <input
                type="email"
                name="email"
                className="bg-transparent border-b border-teal-500 text-teal-500 mt-1 text-center md:text-left w-full focus:outline-none"
                value={profileData.email}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
          </div>

          <div className="p-6">
            {/* Action buttons */}
            <div className="flex justify-end mb-6 gap-3">
              {!isEditing ? (
                <button
                  onClick={handleEditClick}
                  className="px-4 py-2 text-white rounded-md bg-terracotta hover:bg-coral transition-colors"
                >
                  Edit Profile
                </button>
              ) : (
                <>
                  <button
                    onClick={handleCancelClick}
                    className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveClick}
                    className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
                  >
                    Save Changes
                  </button>
                </>
              )}
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold">Biography</h2>
              <textarea
                name="bio"
                rows={3}
                className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-400 disabled:bg-gray-50"
                placeholder="No Data Found"
                value={profileData.bio}
                onChange={handleInputChange}
                disabled={!isEditing}
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange-600 mr-2"
                  >
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                  <h3 className="font-semibold">Experience</h3>
                </div>
                <input
                  type="text"
                  name="experience"
                  className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-400 disabled:bg-gray-50"
                  placeholder="No Data Found"
                  value={profileData.experience}
                  onChange={handleInputChange}
                  disabled={!isEditing}
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange-600 mr-2"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                  </svg>
                  <h3 className="font-semibold">Qualification</h3>
                </div>
                <input
                  type="text"
                  name="qualification"
                  className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-400 disabled:bg-gray-50"
                  placeholder="No Data Found"
                  value={profileData.qualification}
                  onChange={handleInputChange}
                  disabled={!isEditing}
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-yellow-500 mr-2"
                  >
                    <rect
                      width="18"
                      height="18"
                      x="3"
                      y="4"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="16" x2="16" y1="2" y2="6"></line>
                    <line x1="8" x2="8" y1="2" y2="6"></line>
                    <line x1="3" x2="21" y1="10" y2="10"></line>
                  </svg>
                  <h3 className="font-semibold">Age</h3>
                </div>
                <input
                  type="number"
                  name="age"
                  className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-400 disabled:bg-gray-50"
                  value={profileData.age}
                  onChange={handleInputChange}
                  disabled={!isEditing}
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-yellow-500 mr-2"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <h3 className="font-semibold">Gender</h3>
                </div>
                <select
                  name="gender"
                  className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-400 disabled:bg-gray-50"
                  value={profileData.gender}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-xl font-semibold">Skills</h2>
                {isEditing && (
                  <button
                    onClick={handleAddSkill}
                    className="flex items-center text-sm bg-cyan-800 hover:bg-cyan-700 text-white py-1 px-3 rounded-md transition-colors"
                  >
                    <PlusIcon />
                    Add Skill
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-[#f9f9f9] p-3 rounded-lg"
                  >
                    <div className="bg-purple-500 w-3 h-3 rounded-full me-5"></div>
                    <input
                      type="text"
                      className="flex-1 text-sm font-medium bg-transparent focus:outline-none disabled:bg-gray-50"
                      value={skill}
                      disabled={!isEditing}
                      onChange={(e) => handleSkillChange(index, e.target.value)}
                    />
                  </div>
                ))}

                {showNewSkillInput && isEditing && (
                  <div className="flex items-center bg-[#f9f9f9] p-3 rounded-lg">
                    <div className="bg-purple-500 w-3 h-3 rounded-full me-5"></div>
                    <input
                      type="text"
                      autoFocus
                      className="flex-1 text-sm font-medium bg-transparent focus:outline-none"
                      placeholder="Enter new skill"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      onBlur={handleSkillInputBlur}
                      onKeyDown={handleSkillInputKeyDown}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
