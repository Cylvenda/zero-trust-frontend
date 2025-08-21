import {AxiosError} from "axios";
import {registerUserApi, loginUserApi} from "../api/userApi";
import {useUserStore} from "../store/userStore";
import type {LoginFormData, RegisterFormData} from "../types/auth";
import type {ApiErrorResponse, RegisterResponse, LoginResponse} from "../types/apiResponse";
import {setSession} from "../utils/storage.ts";

export const registerUser = async (formData: RegisterFormData): Promise<RegisterResponse> => {

    try {
        const response = await registerUserApi(formData);

        if (response.data.accessToken) {
            const {user, accessToken} = response.data;
            setSession("token", accessToken);
            // all fetched data stored in zustand
            useUserStore.getState().setUser(user, accessToken, true);
            return {
                success: true,
                message: "Login successful",
            };
        }
          // error in registering user
        const { message } = response.data;
        return {
            success: false,
            message: message || "Registration failed",
        }

    } catch (err) {
        const error = err as AxiosError<ApiErrorResponse>;
        return {
            success: false,
            message: error.response?.data?.error || "Login failed",
        };
    }
};


export const loginUser = async (
    formData: LoginFormData
): Promise<LoginResponse> => {
    try {
        const response = await loginUserApi(formData);

        if (response.data.accessToken) {
            const {user, accessToken} = response.data;
            setSession("token", accessToken);
            // all fetched data stored in zustand
            useUserStore.getState().setUser(user, accessToken, true);
            return {
                success: true,
                message: "Login successful",
            };
        }
          // error in login (invalid credentials or user doesnt exist
        const { message } = response.data;
        return {
            success: false,
            message: message || "Login failed",
        }

    } catch (err) {
        const error = err as AxiosError<ApiErrorResponse>;
        return {
            success: false,
            message: error.response?.data?.error || "Login failed",
        };
    }
};
