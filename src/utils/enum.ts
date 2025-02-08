export const USER_ACCESS_KEY = {
  TOKEN: "mendingMindAccessToken",
};

export const API_QUERY_KEY = {
  GET_USER_DETAILS: "get-user-details",
  GET_AVAILABILITY: "get-availability",
};

export const API_MUTATION_KEY = {
  SIGNUP: "signup",
  SIGNIN: "signin",
  CREATE_AVAILABILITY: "create-availability",
  UPDATE_AVAILABILITY: "update-availability",
  DELETE_AVAILABILITY: "delete-availability",
};

export const APIS_ROUTES = {
  SIGNUP: "/auth-service/v1/auth/signup",
  SIGNIN: "/auth-service/v1/auth/signin",
  GET_USER_DETAILS: "/auth-service/v1/auth/get-user-details",
  GET_AVAILABILITY: "/availability-service/v1/availability/get-availability",
  CREATE_AVAILABILITY:
    "/availability-service/v1/availability/create-availibility",
  UPDATE_AVAILABILITY:
    "/availability-service/v1/availability/update-availability",
  DELETE_AVAILABILITY:
    "/availability-service/v1/availability/delete-availability",
};
