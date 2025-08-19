import { AxiosError } from "axios";
import { registerUserApi, loginUserApi } from "../api/userApi";
import type { LoginFormData, RegisterFormData } from "../types/auth";
import type { ApiErrorResponse, RegisterResponse, LoginResponse } from "../types/apiResponse";

export const registerUser = async ( formData: RegisterFormData ): Promise<RegisterResponse> => {
  try {
    const response = await registerUserApi(formData);
    return response.data;
  } catch (err) {
    const error = err as AxiosError<ApiErrorResponse>;
    return {
      success: false,
      message: error.response?.data?.error || "Registration failed",
    };
  }
};

export const loginUser = async ( formData: LoginFormData ): Promise<LoginResponse> => {
  try {
    const response = await loginUserApi(formData);
    return response.data; 
  } catch (err) {
    const error = err as AxiosError<ApiErrorResponse>;
    return {
      success: false,
      message: error.response?.data?.error || "Login failed",
    };
  }
};
