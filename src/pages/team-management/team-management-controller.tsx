import React, { useState } from "react";
import { debounce } from "lodash";
import { toast } from "react-toastify";
import { IUsers } from "../../types";
import {
  useAddUser,
  useDeleteUser,
  useGetAllUsers,
  useUpdateUser,
} from "./services";
import { useParams } from "react-router-dom";

function useTeamManagementController() {
  const { organizationId } = useParams<{
    organizationId: string;
  }>();
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    _id: "",
    name: "",
    email: "",
    role: "",
    phone: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  // Get users with pagination and search
  const {
    data: userData,
    isLoading,
    refetch,
  } = useGetAllUsers(page, limit, searchTerm, organizationId);
  //@ts-ignore
  const adduser = useAddUser(organizationId);
  const updateUser = useUpdateUser();
  const deleteUser = useDeleteUser();

  // Debounced search handler using lodash
  const handleSearch = debounce((value: string) => {
    setSearchTerm(value);
    setPage(1); // Reset to first page on new search
  }, 300);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await updateUser.mutateAsync(formData);
        toast.success("User updated successfully");
      } else {
        await adduser.mutateAsync({
          name: formData.name,
          email: formData.email,
          role: formData.role as "admin" | "therapist",
          phone: formData.phone,
        });
        toast.success("User added successfully");
      }
      setIsModalOpen(false);
      resetForm();
    } catch (error) {
      toast.error("Operation failed. Please try again.");
    }
  };

  const handleEdit = (user: IUsers) => {
    setFormData({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      phone: "",
    });
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteUser.mutateAsync(id);
      toast.success("User deleted successfully");
      refetch(); // Refresh the user list
    } catch (error) {
      toast.error("Failed to delete user");
    }
  };

  const resetForm = () => {
    setFormData({
      _id: "",
      name: "",
      email: "",
      role: "",
      phone: "",
    });
    setIsEditing(false);
  };

  // Pagination Component
  const Pagination = () => {
    if (!userData?.pagination) return null;
    const { totalPages, currentPage } = userData.pagination;

    return (
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={() => setPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-lg border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
        >
          Previous
        </button>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <span className="text-sm text-gray-500">
            ({userData.pagination.totalUsers} total users)
          </span>
        </div>
        <button
          onClick={() => setPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-lg border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
        >
          Next
        </button>
      </div>
    );
  };

  return {
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
    searchTerm,
  };
}

export default useTeamManagementController;
