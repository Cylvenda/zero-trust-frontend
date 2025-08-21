// error response
export type ApiErrorResponse = {
  error: string;
}

// register success response
export type RegisterResponse = {
  success: boolean;
  message: string;
  user?: [];
}

// login success response
export type LoginResponse = {
    success: boolean;
    message: string;
    user?: { username: string; email: string };
    access_token?: string;
};

