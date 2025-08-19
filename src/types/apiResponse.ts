// error response
export interface ApiErrorResponse {
  error: string;
}

// register success response
export interface RegisterResponse {
  success: boolean;
  message: string;
  user?: [];
}

// login success response
export interface LoginResponse {
  success: boolean;
  token?: string;
  message?: string;
  user?: [];
}
