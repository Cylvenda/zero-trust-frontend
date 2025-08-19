import type { tokenType } from "../types/common";
import { api } from "./axiosConfig";

//fetching api endpoints 
export const fetchApi = (token: tokenType) =>
  api.get("/api/getapis", { headers: { "access-token": token } });

// fetching api tokens for developer
export const fetchToken = (token: tokenType) =>
  api.get("/api/gettoken", { headers: { "access-token": token } })