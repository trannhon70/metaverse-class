import { LoginType, RegisterType } from "@/types/auth";
import { axiosAuth, axiosClient } from "./axios";

export const login = (body: LoginType) => {
  return axiosClient.post("/user/login", body);
};

export const loginLuceteApi = (body: LoginType) => {
  return axiosClient.post("/user/loginLucete", body);
};

export const registerApi = (body: RegisterType) => {
  return axiosClient.post("/user/register", body);
};

export const getCurrentUserApi = () => {
  return axiosAuth.get("/user/currentUser");
};
