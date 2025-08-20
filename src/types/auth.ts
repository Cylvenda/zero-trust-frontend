// interface for registration form
export interface RegisterFormData {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
  role: "developer";
}

// interface for registration form
export interface LoginFormData {
    email: string;
    password: string;
}

export interface FormErrors {
    first_name?: string;
    last_name?: string;
    email?: string;
    username?: string;
    password?: string;
}