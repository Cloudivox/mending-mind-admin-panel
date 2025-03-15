import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCreateOrganization, useGetAllOrganization } from "./services";
import { useGetAllTherapist } from "../calender/services";
import { IAllTherapist } from "../../types";
import useUpdateOrganization from "./services/update-organization/update-organization";
import useDeleteOrganization from "./services/delete-organization/delete-organization";
import Cookies from "js-cookie";
import { USER_ACCESS_KEY } from "../../utils/enum";
import { toast } from "react-toastify";
interface IOrganization {
  id: string;
  name: string;
  description: string;
  country: string;
  therapists: Therapist[];
  logo: FileBase64 | null;
  users: number;
  location: string;
  code: string;
}

interface FileBase64 {
  base64: string;
  name: string;
  type: string;
  size?: number;
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

const MAX_FILE_SIZE = 2 * 1024 * 1024;

const useOrganizationController = () => {
  const { organizationId } = useParams<{ organizationId: string }>();
  const getAllOrganization = useGetAllOrganization();
  const allTherapist = useGetAllTherapist();

  const [therapistsList, setTherapistsList] = useState<IAllTherapist[]>([]);
  const [workspaces, setWorkspaces] = useState<IOrganization[]>([]);
  const [isCopied, setIsCopied] = useState<any>(0);
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
    logo: null,
    users: 0,
    location: "",
    therapists: [],
    code: "",
    country: "IN",
  });

  // Refs for file inputs
  const fileInputRef = useRef<HTMLInputElement>(null);

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
      logo: null,
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
  const updateOrganization = useUpdateOrganization();
  const deleteOrganization = useDeleteOrganization();

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
      const newWorkspace = {
        ...activeWorkspace,
        therapists: activeWorkspace.therapists.map((t) => t._id),
        // users: 0,
      };
      createOrganization.mutate(newWorkspace);
    } else if (uiState.modalMode === "edit") {
      const updatedWorkspace = {
        ...activeWorkspace,
        therapists: activeWorkspace.therapists.map((t) => t._id),
        // users: 0,
      };
      updateOrganization.mutate(updatedWorkspace);
    }
    closeModal();
  };

  // Handle deleting a workspace
  const handleDeleteWorkspace = (id: string) => {
    deleteOrganization.mutate(id);
    // setWorkspaces(workspaces.filter((workspace) => workspace.id !== id));
    setUIState((prev) => ({
      ...prev,
      activeDropdownId: null,
    }));
  };

  const removeImage = () => {
    setActiveWorkspace({
      ...activeWorkspace,
      logo: null,
    });
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

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files[0]) {
      const file = files[0];

      // Check file size
      if (file.size > MAX_FILE_SIZE) {
        toast.error("File size exceeds 2MB limit");
        // Reset the input
        e.target.value = "";
        return;
      }

      const reader = new FileReader();

      reader.onload = (loadEvent) => {
        if (loadEvent.target && loadEvent.target.result) {
          const base64 = loadEvent.target.result.toString();
          const result = {
            base64,
            name: file.name,
            type: file.type,
            size: file.size,
          };

          setActiveWorkspace({
            ...activeWorkspace,
            logo: result,
          });
        }
      };

      reader.onerror = () => {
        toast.error("Error reading file");
      };

      reader.readAsDataURL(file);
    }
  };

  // Handle logo file selection
  // const handleLogoSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   if (!file) return;

  //   const reader = new FileReader();
  //   reader.onload = (e) => {
  //     const result = e.target?.result as string;
  //     setActiveWorkspace({
  //       ...activeWorkspace,
  //       logo: result,
  //     });
  //   };
  //   reader.readAsDataURL(file);
  // };

  // Trigger file input click
  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const navigateHome = (workspaceId: string) => {
    navigate(`/${workspaceId}`);
    Cookies.set(USER_ACCESS_KEY.ORGANIZATION_ID, workspaceId, {
      secure: true,
      sameSite: "lax",
    });
    const workspaceName =
      workspaces.find((w) => w.id === workspaceId)?.name || "";
    Cookies.set(USER_ACCESS_KEY.ORGANIZATION_NAME, workspaceName, {
      secure: true,
      sameSite: "lax",
    });
  };

  const handleCopy = (workspaceId: number) => {
    const baseUrl =
      process.env.NODE_ENV === "development"
        ? `http://localhost:${window.location.port}`
        : window.location.origin;

    const urlToCopy = `${baseUrl}/join-organization`;

    navigator.clipboard
      .writeText(urlToCopy)
      .then(() => {
        setIsCopied((prev: any) => ({ ...prev, [workspaceId]: true }));

        // Reset copied state after 2 seconds
        setTimeout(() => {
          setIsCopied((prev: any) => ({ ...prev, [workspaceId]: false }));
        }, 2000);

        toast.success("Copied to clipboard!");
      })
      .catch(() => {
        toast.error("Error copying text!");
      });
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createOrganization.isSuccess]);

  useEffect(() => {
    if (updateOrganization.isSuccess) {
      getAllOrganization.refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateOrganization.isSuccess]);

  useEffect(() => {
    if (deleteOrganization.isSuccess) {
      getAllOrganization.refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteOrganization.isSuccess]);

  useEffect(() => {
    if (allTherapist.isSuccess && allTherapist.data) {
      setTherapistsList(allTherapist.data.therapists);
    }
  }, [allTherapist.isSuccess, allTherapist.data]);

  return {
    getAllOrganization,
    organizationId,
    openAddModal,
    openEditModal,
    workspaces,
    navigateHome,
    toggleDropdown,
    uiState,
    handleDeleteWorkspace,
    getTherapistNames,
    closeModal,
    activeWorkspace,
    fileInputRef,
    triggerFileInput,
    setActiveWorkspace,
    toggleTherapistDropdown,
    handleTherapistSelection,
    therapistsList,
    isTherapistSelected,
    handleSaveWorkspace,
    isCopied,
    setIsCopied,
    handleCopy,
    handleFileInputChange,
    removeImage,
  };
};

export default useOrganizationController;
