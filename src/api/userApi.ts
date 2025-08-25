import type { RegisterFormData, LoginFormData } from "../types/auth";
import type { tokenType } from "../types/common";
import { api } from "./axiosConfig";

//  API calls
export const registerUserApi = (formData:RegisterFormData) => api.post("/auth/register", formData);

export const loginUserApi = (formData:LoginFormData) => api.post("/auth/login", formData);

export const verifyUserApi = (token: tokenType) =>
  api.get("/api/verifyUser", { headers: { "access-token": token }, withCredentials: true });

