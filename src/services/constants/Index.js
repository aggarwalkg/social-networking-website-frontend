export const BASE_URL =
  //  "http://localhost:5000/api";

  "https://demo-app-squareboat-deploy.herokuapp.com/api";

export const ROUTES = {
  LOGIN: "/",
  REGISTER: "/register",
  HOME: "/home",
  PEOPLE: "/people",
};
export const ACTION_TYPE = {
  //auth
  SIGNUP: "SIGNUP",
  LOGIN: "LOGIN",
  LOGOUT_USER: "LOGOUT_USER",
  MATCHTOKEN: "MATCHTOKEN",
  POST_LIST: "POST_LIST",
  PEOPLE_LIST: "PEOPLE_LIST",
};
export const ENDPOINTS = {
  LOGIN: "/auth/login",
  SIGNUP: "/auth/signUp",
  MATCH_TOKEN: "/auth/matchToken",
};
