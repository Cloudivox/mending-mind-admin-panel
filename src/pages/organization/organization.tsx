import React, { useState, useEffect, useRef } from "react";
import { useCreateOrganization, useGetAllOrganization } from "./services";
import { useGetAllTherapist } from "../calender/services";
import { IAllTherapist } from "../../types";
import Loader from "../../components/loader";
import { useNavigate, useParams } from "react-router-dom";

interface IOrganization {
  id: string;
  name: string;
  description: string;
  country: string;
  therapists: Therapist[];
  logo: string;
  users: number;
  location: string;
  code: string;
}

// Define therapist type
interface Therapist {
  _id: string;
  name: string;
}

// Define UI state interface
interface UIState {
  activeDropdownId: string | null;
  showTherapistDropdown: boolean;
  showModal: boolean;
  modalMode: "add" | "edit" | null;
}

function Organization() {
  const { organizationId } = useParams<{ organizationId: string }>();
  const getAllOrganization = useGetAllOrganization();
  const allTherapist = useGetAllTherapist();

  const [therapistsList, setTherapistsList] = useState<IAllTherapist[]>([]);
  const [workspaces, setWorkspaces] = useState<IOrganization[]>([]);
  const navigate = useNavigate();
  // Combined UI state
  const [uiState, setUIState] = useState<UIState>({
    activeDropdownId: null,
    showTherapistDropdown: false,
    showModal: false,
    modalMode: null,
  });

  // Combined workspace state for both new and edit
  const [activeWorkspace, setActiveWorkspace] = useState<IOrganization>({
    id: "",
    name: "",
    description: "",
    logo: "",
    users: 0,
    location: "",
    therapists: [],
    code: "",
    country: "IN",
  });

  // Refs for file inputs
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Generate code from name
  const generateCode = (name: string): string => {
    return name
      .toLowerCase()
      .replace(/\s+/g, "_")
      .replace(/[^a-z0-9_]/g, "");
  };

  // Update code when name changes
  useEffect(() => {
    if (activeWorkspace.name) {
      setActiveWorkspace({
        ...activeWorkspace,
        code: generateCode(activeWorkspace.name),
      });
    }
  }, [activeWorkspace.name]);

  // Toggle dropdown menu
  const toggleDropdown = (id: string) => {
    setUIState((prev) => ({
      ...prev,
      activeDropdownId: prev.activeDropdownId === id ? null : id,
    }));
  };

  // Toggle therapist dropdown
  const toggleTherapistDropdown = () => {
    setUIState((prev) => ({
      ...prev,
      showTherapistDropdown: !prev.showTherapistDropdown,
    }));
  };

  // Open modal for adding new workspace
  const openAddModal = () => {
    setActiveWorkspace({
      id: "",
      name: "",
      description: "",
      logo: "",
      users: 0,
      location: "",
      therapists: [],
      code: "",
      country: "IN",
    });
    setUIState({
      activeDropdownId: null,
      showTherapistDropdown: false,
      showModal: true,
      modalMode: "add",
    });
  };

  // Open modal for editing workspace
  const openEditModal = (workspace: IOrganization) => {
    setActiveWorkspace({ ...workspace });
    setUIState({
      activeDropdownId: null,
      showTherapistDropdown: false,
      showModal: true,
      modalMode: "edit",
    });
  };

  // Close modal
  const closeModal = () => {
    setUIState((prev) => ({
      ...prev,
      showModal: false,
      modalMode: null,
      showTherapistDropdown: false,
    }));
  };

  const createOrganization = useCreateOrganization();

  // Handle saving workspace (both add and edit)
  const handleSaveWorkspace = () => {
    if (
      activeWorkspace.name.trim() === "" ||
      activeWorkspace.code?.trim() === "" ||
      activeWorkspace.location?.trim() === "" ||
      !activeWorkspace.therapists?.length
    )
      return;

    if (uiState.modalMode === "add") {
      // Add new workspace
      const logoChar = activeWorkspace.name.charAt(0).toUpperCase();

      const newWorkspace = {
        ...activeWorkspace,
        logo: logoChar,
        therapists: activeWorkspace.therapists.map((t) => t._id),
        // users: 0,
      };
      createOrganization.mutate(newWorkspace);
    } else if (uiState.modalMode === "edit") {
      // Update existing workspace
      setWorkspaces(
        workspaces.map((workspace) =>
          workspace.id === activeWorkspace.id ? activeWorkspace : workspace
        )
      );
    }

    closeModal();
  };

  // Handle deleting a workspace
  const handleDeleteWorkspace = (id: string) => {
    setWorkspaces(workspaces.filter((workspace) => workspace.id !== id));
    setUIState((prev) => ({
      ...prev,
      activeDropdownId: null,
    }));
  };

  // Updated: Handle therapist selection
  const handleTherapistSelection = (therapistId: string) => {
    // Find the therapist object from the list
    const therapist = therapistsList.find((t) => t._id === therapistId);
    if (!therapist) return;

    // Check if this therapist is already selected
    const isAlreadySelected = activeWorkspace.therapists.some(
      (t) => t._id === therapistId
    );

    let updatedTherapists;
    if (isAlreadySelected) {
      // Remove the therapist if already selected
      updatedTherapists = activeWorkspace.therapists.filter(
        (t) => t._id !== therapistId
      );
    } else {
      // Add the therapist if not already selected
      updatedTherapists = [
        ...activeWorkspace.therapists,
        { _id: therapist._id, name: therapist.name },
      ];
    }

    setActiveWorkspace({
      ...activeWorkspace,
      therapists: updatedTherapists,
    });
  };

  // Updated: Check if a therapist is selected
  const isTherapistSelected = (therapistId: string): boolean => {
    return activeWorkspace.therapists.some((t) => t._id === therapistId);
  };

  // Updated: Get therapist names from therapist objects
  const getTherapistNames = (therapists: Therapist[] = []): string => {
    return therapists
      .map((therapist) => therapist.name || "")
      .filter((name) => name !== "")
      .join(", ");
  };

  // Handle logo file selection
  const handleLogoSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setActiveWorkspace({
        ...activeWorkspace,
        logo: result,
      });
    };
    reader.readAsDataURL(file);
  };

  // Trigger file input click
  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  useEffect(() => {
    if (getAllOrganization.isSuccess && getAllOrganization.data) {
      setWorkspaces(getAllOrganization.data);
    }
  }, [getAllOrganization.isSuccess, getAllOrganization.data]);

  useEffect(() => {
    if (createOrganization.isSuccess) {
      getAllOrganization.refetch();
    }
  }, [createOrganization.isSuccess, createOrganization.data]);

  useEffect(() => {
    if (allTherapist.isSuccess && allTherapist.data) {
      setTherapistsList(allTherapist.data.therapists);
    }
  }, [allTherapist.isSuccess, allTherapist.data]);

  return (
    <>
      {getAllOrganization?.isLoading ? (
        <Loader />
      ) : (
        <div className="min-h-screen bg-gray-50 p-6 font-sans">
          {/* Header */}
          {organizationId && (
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-800 mt-5">
                  Organization
                </h1>
                <p className="text-gray-600">Manage your organization</p>
              </div>
              <button
                onClick={openAddModal}
                className="bg-teal-600 hover:bg-teal-700 text-white font-montserrat font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg flex items-center gap-2"
              >
                {/* Plus icon SVG */}
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
                >
                  <path d="M12 5v14M5 12h14"></path>
                </svg>
                Add Organization
              </button>
            </div>
          )}

          {/* Workspaces Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {workspaces.map((workspace) => (
              <div
                key={workspace.id}
                onClick={() => {
                  !organizationId && navigate(`/${workspace.id}/organization`);
                }}
                className={`${
                  !organizationId ? "cursor-pointer" : ""
                } bg-white rounded-xl hover:shadow-xl shadow-sm border border-gray-200 overflow-hidden`}
              >
                <div className="p-4 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`bg-purple text-white w-10 h-10 rounded-md flex items-center justify-center font-bold overflow-hidden`}
                    >
                      {workspace.logo ? (
                        <img
                          src={workspace.logo}
                          alt={workspace.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <>
                          {workspace?.name &&
                            workspace?.name?.charAt(0).toUpperCase()}
                        </>
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">
                        {workspace.name}
                      </h3>
                      {workspace.location && (
                        <p className="text-xs text-gray-500">
                          Location: {workspace.location}
                        </p>
                      )}
                    </div>
                  </div>
                  {organizationId && (
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown(workspace.id)}
                        className="p-1 rounded-md hover:bg-gray-100"
                      >
                        {/* More Vertical icon SVG */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gray-500"
                        >
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="12" cy="5" r="1"></circle>
                          <circle cx="12" cy="19" r="1"></circle>
                        </svg>
                      </button>

                      {uiState.activeDropdownId === workspace.id && (
                        <div className="absolute right-0 mt-1 w-40 bg-white rounded-md shadow-lg border border-gray-200 z-10">
                          <div className="py-1">
                            <button
                              onClick={() => openEditModal(workspace)}
                              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() =>
                                handleDeleteWorkspace(workspace.id)
                              }
                              className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="px-4 py-2">
                  <p className="text-sm text-gray-600 mb-2">
                    {workspace.description}
                  </p>
                  {workspace.therapists && workspace.therapists.length > 0 && (
                    <p className="text-xs text-gray-500 mb-2">
                      <span className="font-medium">Therapists:</span>{" "}
                      {getTherapistNames(workspace.therapists)}
                    </p>
                  )}
                </div>

                <div className="border-t border-gray-200 px-4 py-3 flex justify-end text-sm">
                  <div className="text-center">
                    <p className="font-medium text-gray-800">
                      {workspace.users}
                    </p>
                    <p className="text-gray-500">Users</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Combined Add/Edit Workspace Modal */}
          {uiState.showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-hidden flex flex-col">
                <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
                  <h2 className="text-xl font-semibold">
                    {uiState.modalMode === "add"
                      ? "Create new organization"
                      : "Edit organization"}
                  </h2>
                  <button
                    onClick={closeModal}
                    className="text-gray-300 hover:text-white"
                  >
                    {/* X icon SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 6 6 18M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>

                <div className="p-6 overflow-y-auto flex-grow">
                  <div className="mb-6">
                    <div className="flex items-center gap-4 mb-2">
                      <div
                        className={`w-16 h-16 bg-teal-100 ${
                          activeWorkspace.logo
                            ? ""
                            : uiState.modalMode === "edit"
                        } rounded-md flex items-center justify-center border border-gray-200 ${
                          !activeWorkspace.logo && uiState.modalMode === "edit"
                            ? "text-white font-bold text-2xl"
                            : ""
                        } overflow-hidden`}
                      >
                        {activeWorkspace.logo ? (
                          <img
                            src={activeWorkspace.logo}
                            alt="Logo"
                            className="w-full h-full object-cover"
                          />
                        ) : uiState.modalMode === "edit" ? (
                          activeWorkspace.logo
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-gray-400"
                          >
                            <rect
                              width="18"
                              height="18"
                              x="3"
                              y="3"
                              rx="2"
                              ry="2"
                            ></rect>
                            <circle cx="9" cy="9" r="2"></circle>
                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                          </svg>
                        )}
                      </div>
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleLogoSelect}
                        accept="image/*"
                        className="hidden"
                      />
                      <button
                        onClick={triggerFileInput}
                        className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50"
                      >
                        {uiState.modalMode === "add"
                          ? "Add Image"
                          : "Change Image"}
                      </button>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        <span className="text-red-500">*</span> Organization
                        Name
                      </label>
                      <input
                        type="text"
                        value={activeWorkspace.name}
                        onChange={(e) =>
                          setActiveWorkspace({
                            ...activeWorkspace,
                            name: e.target.value,
                          })
                        }
                        placeholder="Enter organization name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Organization Description
                      </label>
                      <input
                        type="text"
                        value={activeWorkspace.description}
                        onChange={(e) =>
                          setActiveWorkspace({
                            ...activeWorkspace,
                            description: e.target.value,
                          })
                        }
                        placeholder="Enter organization description"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Location
                      </label>
                      <input
                        type="text"
                        value={activeWorkspace.location || ""}
                        onChange={(e) =>
                          setActiveWorkspace({
                            ...activeWorkspace,
                            location: e.target.value,
                          })
                        }
                        placeholder="Enter organization location"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Therapists
                      </label>
                      <div className="relative">
                        <div
                          className="w-full px-3 py-2 border border-gray-300 rounded-md min-h-10 flex flex-wrap gap-1 cursor-pointer"
                          onClick={toggleTherapistDropdown}
                        >
                          {activeWorkspace.therapists &&
                          activeWorkspace.therapists.length > 0 ? (
                            activeWorkspace.therapists.map((therapist) => (
                              <span
                                key={therapist._id}
                                className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full flex items-center"
                              >
                                {therapist.name}
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleTherapistSelection(therapist._id);
                                  }}
                                  className="ml-1 text-teal-600 hover:text-teal-800"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M18 6 6 18M6 6l12 12"></path>
                                  </svg>
                                </button>
                              </span>
                            ))
                          ) : (
                            <span className="text-gray-400">
                              Select therapists
                            </span>
                          )}
                        </div>
                        {uiState.showTherapistDropdown && (
                          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                            {therapistsList.map((therapist) => (
                              <div
                                key={therapist._id}
                                className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                                onClick={() =>
                                  handleTherapistSelection(therapist._id)
                                }
                              >
                                <input
                                  type="checkbox"
                                  checked={isTherapistSelected(therapist._id)}
                                  onChange={() => {}}
                                  className="mr-2"
                                />
                                <span>{therapist.name}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Code
                      </label>
                      <input
                        type="text"
                        value={activeWorkspace.code || ""}
                        readOnly
                        className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 p-4 bg-gray-50">
                  <div className="flex justify-end gap-3">
                    <button
                      onClick={closeModal}
                      className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveWorkspace}
                      className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={
                        !activeWorkspace.name.trim() ||
                        !activeWorkspace.code?.trim() ||
                        !activeWorkspace.location?.trim() ||
                        !activeWorkspace.therapists?.length
                      }
                    >
                      {uiState.modalMode === "add"
                        ? "Create Organization"
                        : "Save Changes"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Organization;
