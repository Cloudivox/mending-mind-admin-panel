import Loader from "../../components/loader";
import PlusIcon from "../../assets/icons/plus-icon";
import CrossIcon from "../../assets/icons/cross-icon";
import useTeamManagementController from "./team-management-controller";

const TeamManagement = () => {
  const {
    isLoading,
    handleSearch,
    resetForm,
    isModalOpen,
    setIsModalOpen,
    isEditing,
    handleSubmit,
    formData,
    handleInputChange,
    userData,
    handleEdit,
    handleDelete,
    Pagination,
  } = useTeamManagementController();

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="bg-white rounded-2xl p-8 transition-all">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-playfair font-bold text-2xl text-[#2C3E50]">
              Team Management
            </h3>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search users..."
                  className="pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3498DB] focus:border-transparent w-64 transition-all duration-200"
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <button
                onClick={() => {
                  resetForm();
                  setIsModalOpen(true);
                }}
                className="bg-[#3498DB] hover:bg-[#2980B9] text-white px-6 py-2.5 rounded-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
              >
                <PlusIcon />
                Add User
              </button>
            </div>
          </div>

          {/* User Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-[#2C3E50]">
                    {isEditing ? "Update User" : "Add New User"}
                  </h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <CrossIcon />
                  </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3498DB]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3498DB]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="role"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Role
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3498DB]"
                    >
                      <option value="">Select role</option>
                      <option value="admin">Admin</option>
                      <option value="therapist">Therapist</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3498DB]"
                    />
                  </div>
                  <div className="flex justify-end gap-2 mt-6">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#3498DB] text-white rounded-md hover:bg-[#2980B9]"
                    >
                      {isEditing ? "Update" : "Add"} User
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Users Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#ECF0F1]">
                  <th className="py-3 px-4 text-left font-montserrat text-[#34495E] font-semibold">
                    Name
                  </th>
                  <th className="py-3 px-4 text-left font-montserrat text-[#34495E] font-semibold">
                    Role
                  </th>
                  <th className="py-3 px-4 text-center font-montserrat text-[#34495E] font-semibold">
                    Status
                  </th>
                  <th className="py-3 px-4 text-center font-montserrat text-[#34495E] font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {userData?.users
                  .sort((a: any, b: any) => {
                    {
                      const roleOrder: Record<string, number> = {
                        admin: 1,
                        therapist: 2,
                      };

                      return (
                        (roleOrder[a.role] || 3) - (roleOrder[b.role] || 3)
                      );
                    }
                  })
                  .map((user: any) => (
                    <tr
                      key={user._id}
                      className="border-b border-[#ECF0F1] hover:bg-black/5 transition-colors"
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 rounded-full ${
                              user.role === "admin"
                                ? "bg-[#3498DB]/10 text-[#3498DB]"
                                : "bg-[#9B59B6]/10 text-[#9B59B6]"
                            } flex items-center justify-center font-medium`}
                          >
                            {user.name
                              ? user.name
                                  .split(" ")
                                  .map((n: any) => n[0])
                                  .join("")
                                  .toUpperCase()
                              : "U"}
                          </div>
                          <div>
                            <div className="font-montserrat text-[#2C3E50] font-medium">
                              {user.name || "Unknown"}
                            </div>
                            <div className="font-montserrat text-[#7F8C8D] text-sm">
                              {user.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 font-montserrat text-[#34495E] capitalize">
                        {user.role}
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span
                          className={`${
                            user.status === "active"
                              ? "bg-[#2ECC71]/10 text-[#27AE60]"
                              : user.status === "pending"
                              ? "bg-[#F1C40F]/10 text-[#D35400]"
                              : "bg-[#E74C3C]/10 text-[#C0392B]"
                          } px-3 py-1 rounded-full text-xs font-medium font-montserrat`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="flex justify-center gap-2">
                          <button
                            onClick={() => handleEdit(user)}
                            className="text-[#3498DB] hover:text-[#2980B9] transition-colors font-montserrat text-sm font-medium"
                          >
                            Update
                          </button>
                          <button
                            onClick={() => handleDelete(user._id)}
                            className="text-[#E74C3C] hover:text-[#C0392B] transition-colors font-montserrat text-sm font-medium"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <Pagination />
        </div>
      )}
    </div>
  );
};

export default TeamManagement;
