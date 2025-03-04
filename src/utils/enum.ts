export const USER_ACCESS_KEY = {
  TOKEN: "mendingMindAccessToken",
  ORGANIZATION_ID: "organizationId",
};

export const MENDING_MIND_ID = "67c42246019b4349af563057";

export const API_QUERY_KEY = {
  GET_USER_DETAILS: "get-user-details",
  GET_AVAILABILITY: "get-availability",
  GET_ALL_USERS: "get-all-users",
  GET_ALL_THERAPIST: "get-all-therapist",
  SEARCH_USER: "search-user",
  GET_ALL_BLOGS: "get-all-blogs",
  GET_ALL_SESSION_PACKAGES: "get-all-session-packages",
  GET_SESSION_PACKAGE_BY_ID: "get-session-package-by-id",
  GET_ALL_SESSION: "get-all-session",
  GET_SESSION_BY_ID: " get-session-by-id",
  GET_ALL_ORGANIZATION: "get-all-organization",
  GET_ALL_SESSION_NOTES: "get-all-session-notes",
  GET_PROFILE_DETAILS: "get-profile-details",
};

export const API_MUTATION_KEY = {
  SIGNUP: "signup",
  SIGNIN: "signin",
  CREATE_AVAILABILITY: "create-availability",
  UPDATE_AVAILABILITY: "update-availability",
  DELETE_AVAILABILITY: "delete-availability",
  ADD_USER: "create",
  UPDATE_USER: "update-user",
  DELETE_USER: "delete-user",
  RESCHEDULE_REQUEST: "reschedule-request",
  CREATE_BLOG: "create-blog",
  CREATE_SESSION_PACKAGE: "create-session-package",
  APPROVE_SESSION_PACKAGE: "approve-session-package",
  REJECT_SESSION_PACKAGE: "reject-session-package",
  CREATE_SESSION: "create-session",
  CREATE_ORGANIZATION: "crate-organization",
  VERIFY_CODE: "verify-code",
  UPDATE_ORGANIZATION: "update-organization",
  DELETE_ORGANIZATION: "delete-organization",
  CREATE_SESSION_NOTE: "create-session-note",
  DELETE_SESSION_NOTE: "delete-session-note",
  ADD_USER_IN_ORGANIZATION: "add-user-organization",
  DELETE_USER_ORGANIZATION: "delete-user-organization",
  UPDATE_PROFILE: "update-profile",
};

export const APIS_ROUTES = {
  SIGNUP: "/auth-service/v1/auth/signup",
  SIGNIN: "/auth-service/v1/auth/signin",
  GET_USER_DETAILS: "/auth-service/v1/auth/get-user-details",
  GET_ALL_THERAPIST: "/auth-service/v1/auth/get-all-therapists",
  GET_ALL_USERS: "/auth-service/v1/auth/get-all-users",
  ADD_USER: "/auth-service/v1/auth/create",
  UPDATE_USER: "/auth-service/v1/auth/update-user",
  DELETE_USER: "/auth-service/v1/auth/delete-user",
  SEARCH_USER: "/auth-service/v1/auth/search-user",
  RESCHEDULE_REQUEST:
    "/reschedule-session-service/v1/reschedule/reschedule-request",
  CREATE_BLOG: "/blog-service/v1/blog/create-blog",
  GET_ALL_BLOGS: "/blog-service/v1/blog/get-all-blogs",
  SESSION_PACKAGE_SERVICE: "/session-package-service/v1/session-package",
  SESSION_SERVICE: "/session-service/v1/session",
  AVAILIBILITY_SERVICE: "/availability-service/v1/availability",
  ORGANIZATION_SERVICE: "/organization-service/v1/organization",
  SESSION_NOTE_SERVICE: "/session-notes-service/v1/session-notes",
  PROFILE_SERVICE: "/auth-service/v1/profile",
};

export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
