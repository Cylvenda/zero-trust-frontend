import type { tokenType } from "../types/common";
import { api } from "./axiosConfig";

//fetching api endpoints 
export const fetchApi = (token: tokenType) =>
  api.get("/api/getapis", { headers: { "accessToken": token } });

// fetching api tokens for developer
// export const fetchToken = (token: tokenType) =>
//   api.post("/api/keys", { headers: { "accessToken": token } })

export const fetchToken = (token: string) => {
  const data = {
    name: "Test API Key",
    scopes: ["read", "write"],
    description: "Test API key for testing endpoints"
  };

  return api.post("/api/keys", data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });
};

