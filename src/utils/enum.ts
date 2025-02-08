export const USER_ACCESS_KEY = {
  TOKEN: "mendingMindAccessToken",
};

export const API_QUERY_KEY = {
  GET_USER_DETAILS: "get-user-details",
  GET_AVAILABILITY: "get-availability",
  GET_ALL_USERS: "get-all-users",
  GET_ALL_THERAPIST: "get-all-therapist",
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
};

export const APIS_ROUTES = {
  SIGNUP: "/auth-service/v1/auth/signup",
  SIGNIN: "/auth-service/v1/auth/signin",
  GET_USER_DETAILS: "/auth-service/v1/auth/get-user-details",
  GET_AVAILABILITY: "/availability-service/v1/availability/get-availibility",
  GET_ALL_THERAPIST: "/auth-service/v1/auth/get-all-therapists",
  CREATE_AVAILABILITY:
    "/availability-service/v1/availability/create-availibility",
  UPDATE_AVAILABILITY:
    "/availability-service/v1/availability/update-availibility",
  DELETE_AVAILABILITY:
    "/availability-service/v1/availability/delete-availability",
  GET_ALL_USERS: "/auth-service/v1/auth/get-all-users",
  ADD_USER: "/auth-service/v1/auth/create",
  UPDATE_USER: "/auth-service/v1/auth/update-user",
  DELETE_USER: "/auth-service/v1/auth/delete-user",
};
