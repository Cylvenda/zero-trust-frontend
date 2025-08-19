import { fetchApi, fetchToken } from "../api/getApi";
import type { tokenType } from "../types/common";

export const getEndPoints = async (token:tokenType) => {
  try {
    const response = fetchApi(token);
    
    return response;
    
  } catch (error) {
    console.error("Error fetching API endpoints:", error);
    throw error; 
  }
};

export const getToken = async (token:tokenType) => {
  try {
    const response = fetchToken(token);
    
    return response;
    
  } catch (error) {
    console.error("Error fetching API endpoints:", error);
    throw error; 
  }
};
